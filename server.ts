import express, {
  type NextFunction,
  type Request,
  type RequestHandler,
  type Response,
} from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import compression from "compression";
import { getRouteMetadataAndSchema, renderSSRBody, injectSSRHtml } from "./src/utils/ssrRenderer";
import { getSiteRoutes } from "./src/utils/routes";
import {
  isIndexNowConfigured,
  submitToIndexNow,
  timingSafeBearerMatch,
  validateIndexNowUrls,
} from "./src/server/indexnow";

const app = express();
app.disable("x-powered-by");

const PORT = parseInt(process.env.PORT || "3000", 10);

// Trust first upstream reverse proxy (Vercel / Cloud Run) securely
app.set("trust proxy", 1);

// High-Performance Compression for 98+ PageSpeed
app.use(
  ((compression as any)({
    level: 9,
    threshold: 512,
    filter: (req: any, res: any) => {
      if (req.headers && req.headers["x-no-compression"]) return false;
      return (compression as any).filter ? (compression as any).filter(req, res) : true;
    },
  }) as unknown) as RequestHandler
);

// Performance & Security Headers
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "geolocation=(self), camera=(), microphone=()");
  res.setHeader("Strict-Transport-Security", "max-age=31536000");
  res.setHeader(
    "Content-Security-Policy-Report-Only",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://*.google.com https://*.googleapis.com; connect-src 'self' https://www.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://wa.me https://api.whatsapp.com; frame-src 'self' https://www.google.com https://www.googletagmanager.com; object-src 'none'; base-uri 'self'; form-action 'self' https://wa.me https://api.whatsapp.com;"
  );
  next();
});

// Canonical Domain & Protocol 301 Redirects (Single Direct Hop to https://hypertunegarage.pk/)
app.use((req, res, next) => {
  const host = (req.headers.host || "").toLowerCase();
  const rawProto = (req.headers["x-forwarded-proto"] || req.protocol || "https").toString().toLowerCase();
  const proto = rawProto.split(",")[0].trim();

  const isWww = host.startsWith("www.hypertunegarage.pk");
  const isApex = host === "hypertunegarage.pk" || host.startsWith("hypertunegarage.pk:");
  const isHttp = proto === "http";

  // Enforce single direct 301 hop:
  // 1. http://www.hypertunegarage.pk/ -> 301 -> https://hypertunegarage.pk/
  // 2. http://hypertunegarage.pk/     -> 301 -> https://hypertunegarage.pk/
  // 3. https://www.hypertunegarage.pk/ -> 301 -> https://hypertunegarage.pk/
  if ((isWww || isApex) && (isWww || isHttp)) {
    const cleanUrl = req.originalUrl || "/";
    return res.redirect(301, `https://hypertunegarage.pk${cleanUrl}`);
  }
  next();
});

app.use(express.json({ limit: "256kb" }));

// Distributed Rate Limiter (Upstash / Vercel KV REST when configured) with Bounded In-Memory Fallback
// NOTE: Without UPSTASH_REDIS_REST_* or KV_REST_API_* env vars, rate limits are enforced per-instance only.
interface RateLimitEntry {
  count: number;
  resetAt: number;
}
const MAX_RATE_LIMIT_ENTRIES = 10000;
const rateLimitStores: Record<string, Map<string, RateLimitEntry>> = {
  booking: new Map(),
  indexnow: new Map(),
};

function getSharedRateLimitConfig(): { url: string; token: string } | null {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (upstashUrl && upstashToken) {
    return { url: upstashUrl.replace(/\/+$/, ""), token: upstashToken };
  }
  const kvUrl = process.env.KV_REST_API_URL?.trim();
  const kvToken = process.env.KV_REST_API_TOKEN?.trim();
  if (kvUrl && kvToken) {
    return { url: kvUrl.replace(/\/+$/, ""), token: kvToken };
  }
  return null;
}

const REDIS_RATE_LIMIT_LUA = `
local current = redis.call("INCR", KEYS[1])
if current == 1 then
  redis.call("PEXPIRE", KEYS[1], ARGV[1])
end
local pttl = redis.call("PTTL", KEYS[1])
if pttl < 0 then
  redis.call("PEXPIRE", KEYS[1], ARGV[1])
  pttl = tonumber(ARGV[1])
end
return {current, pttl}
`;

async function checkSharedRateLimit(
  config: { url: string; token: string },
  key: string,
  maxRequests: number,
  windowMs: number
): Promise<{ allowed: boolean; remaining: number; retryAfterSeconds: number }> {
  const resp = await fetch(config.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["EVAL", REDIS_RATE_LIMIT_LUA, "1", key, String(windowMs)]),
    signal: AbortSignal.timeout(1500),
  });

  if (!resp.ok) {
    throw new Error(`Shared rate-limit store HTTP ${resp.status}`);
  }

  const data = (await resp.json()) as { result?: unknown; error?: unknown };
  if (!data || typeof data !== "object") {
    throw new Error("Shared rate-limit store returned invalid JSON payload");
  }
  if (typeof data.error === "string" && data.error.length > 0) {
    throw new Error(`Shared rate-limit Redis error: ${data.error}`);
  }
  if (!Array.isArray(data.result) || data.result.length < 2) {
    throw new Error("Shared rate-limit store returned malformed result tuple");
  }

  const count = Number(data.result[0]);
  const pttl = Number(data.result[1]);
  if (!Number.isInteger(count) || count < 1 || !Number.isFinite(pttl) || pttl < 0) {
    throw new Error("Shared rate-limit store returned non-numeric counter or TTL");
  }

  const remaining = Math.max(0, maxRequests - count);
  const retryAfterSeconds = Math.max(1, Math.ceil(pttl / 1000));
  return {
    allowed: count <= maxRequests,
    remaining,
    retryAfterSeconds,
  };
}

function checkInMemoryRateLimit(
  bucket: string,
  clientIp: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; remaining: number; retryAfterSeconds: number } {
  const now = Date.now();
  const store = rateLimitStores[bucket];
  let entry = store.get(clientIp);

  if (!entry || now > entry.resetAt) {
    if (store.size >= MAX_RATE_LIMIT_ENTRIES) {
      for (const [k, v] of store.entries()) {
        if (now > v.resetAt) store.delete(k);
      }
      if (store.size >= MAX_RATE_LIMIT_ENTRIES) {
        const oldestKey = store.keys().next().value;
        if (oldestKey) store.delete(oldestKey);
      }
    }
    entry = { count: 1, resetAt: now + windowMs };
    store.set(clientIp, entry);
    return {
      allowed: true,
      remaining: Math.max(0, maxRequests - 1),
      retryAfterSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (entry.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
    };
  }

  entry.count++;
  return {
    allowed: true,
    remaining: Math.max(0, maxRequests - entry.count),
    retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
  };
}

function createRateLimiter(bucket: string, maxRequests: number, windowMs: number) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const rawIp = (req.ip || req.socket.remoteAddress || "127.0.0.1").toString();
    const clientIp = rawIp.replace(/[^a-zA-Z0-9.:_-]/g, "").slice(0, 64) || "unknown";
    const sharedConfig = getSharedRateLimitConfig();

    let verdict: { allowed: boolean; remaining: number; retryAfterSeconds: number };
    if (sharedConfig) {
      try {
        verdict = await checkSharedRateLimit(
          sharedConfig,
          `htg:rl:${bucket}:${clientIp}`,
          maxRequests,
          windowMs
        );
      } catch (err) {
        console.warn("Shared rate-limit store error, using per-instance fallback:", err);
        verdict = checkInMemoryRateLimit(bucket, clientIp, maxRequests, windowMs);
      }
    } else {
      verdict = checkInMemoryRateLimit(bucket, clientIp, maxRequests, windowMs);
    }

    res.setHeader("X-RateLimit-Limit", String(maxRequests));
    res.setHeader("X-RateLimit-Remaining", String(verdict.remaining));

    if (!verdict.allowed) {
      res.setHeader("Retry-After", String(verdict.retryAfterSeconds));
      return res.status(429).json({
        error: "Too many requests. Please wait before retrying or contact HyperTune Garage directly at +92 333 0177717.",
      });
    }

    next();
  };
}

// Clean up expired rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const store of Object.values(rateLimitStores)) {
    for (const [ip, entry] of store.entries()) {
      if (now > entry.resetAt) {
        store.delete(ip);
      }
    }
  }
}, 300000).unref();

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isValidEmailAddress(email: string): boolean {
  if (email.length < 5 || email.length > 120 || /[\u0000-\u001F\u007F\s<>()[\]\\,;:\"]/.test(email)) {
    return false;
  }
  const atIndex = email.indexOf("@");
  if (atIndex <= 0 || atIndex !== email.lastIndexOf("@")) {
    return false;
  }
  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);
  if (local.length > 64 || domain.length > 253) {
    return false;
  }
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) {
    return false;
  }
  if (!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)) {
    return false;
  }
  const labels = domain.split(".");
  if (labels.length < 2) {
    return false;
  }
  const tld = labels[labels.length - 1];
  if (!/^[A-Za-z]{2,63}$/.test(tld)) {
    return false;
  }
  return labels.every(
    (label) =>
      label.length >= 1 &&
      label.length <= 63 &&
      /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/.test(label)
  );
}

const PRODUCTION_CANONICAL_ORIGIN = "https://hypertunegarage.pk";

function getCanonicalBaseUrl(req: Request): string {
  if (process.env.NODE_ENV === "production" || Boolean(process.env.VERCEL)) {
    return PRODUCTION_CANONICAL_ORIGIN;
  }

  const rawHost = (req.headers.host || "").split(",")[0].trim().toLowerCase();
  const rawProto = (req.headers["x-forwarded-proto"] || req.protocol || "http").toString().split(",")[0].trim().toLowerCase();
  const proto = rawProto === "https" ? "https" : "http";

  if (/^(localhost|127\.0\.0\.1)(:\d{1,5})?$/.test(rawHost)) {
    return `${proto}://${rawHost}`;
  }
  if (rawHost === "hypertunegarage.pk") {
    return PRODUCTION_CANONICAL_ORIGIN;
  }

  return PRODUCTION_CANONICAL_ORIGIN;
}

function sanitizeSingleLine(raw: string, maxLen: number, allowedRegex: RegExp): string {
  return raw
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(allowedRegex, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen)
    .trim();
}

// Prevent search engine indexing of JSON API endpoints (defense in depth alongside robots.txt Disallow: /api/)
app.use("/api", (_req, res, next) => {
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  next();
});

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    workshop: "HyperTune Garage Pakistan - Islamabad Flagship Hub (Rawalpindi Hub Coming Soon)",
    timestamp: new Date().toISOString(),
  });
});

function isFridayAppointmentDate(rawDate: string): boolean {
  const value = rawDate.trim();
  if (!value || value.toLowerCase() === "flexible") return false;
  if (/\bfri(?:day)?\b/i.test(value)) return true;

  const isoMatch = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})(?:[T\s].*)?$/.exec(value);
  if (isoMatch) {
    const y = Number(isoMatch[1]);
    const mo = Number(isoMatch[2]);
    const day = Number(isoMatch[3]);
    const d = new Date(Date.UTC(y, mo - 1, day));
    return d.getUTCFullYear() === y && d.getUTCMonth() === mo - 1 && d.getUTCDate() === day && d.getUTCDay() === 5;
  }

  const dmyMatch = /^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/.exec(value);
  if (dmyMatch) {
    const a = Number(dmyMatch[1]);
    const b = Number(dmyMatch[2]);
    const y = Number(dmyMatch[3]);
    const [day, mo] = a <= 12 && b > 12 ? [b, a] : [a, b];
    const d = new Date(Date.UTC(y, mo - 1, day));
    return d.getUTCFullYear() === y && d.getUTCMonth() === mo - 1 && d.getUTCDate() === day && d.getUTCDay() === 5;
  }

  const hasExplicitTz = /(?:Z|[+-]\d{2}:?\d{2}|GMT|UTC)$/i.test(value);
  const parsedMs = Date.parse(hasExplicitTz ? value : `${value} UTC`);
  if (!Number.isNaN(parsedMs)) {
    return new Date(parsedMs).getUTCDay() === 5;
  }

  return false;
}

// API Appointment Booking Handler (Validated, rate-limited, preserves WhatsApp workflow contract)
app.post("/api/booking", createRateLimiter("booking", 15, 60000), (req, res) => {
  try {
    if (!isPlainObject(req.body)) {
      return res.status(400).json({ success: false, error: "Invalid booking payload." });
    }

    const { name, phone, email, vehicleMake, vehicleModel, year, location, service, date, time, notes, priority, isUrgent, pickup } = req.body;

    if (typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: "Please provide a valid customer name." });
    }
    if (typeof phone !== "string" || phone.trim().length < 7) {
      return res.status(400).json({ success: false, error: "Please provide a valid contact phone number." });
    }

    const cleanName = sanitizeSingleLine(name, 100, /[^A-Za-z0-9 .,'-]/g);
    const cleanPhone = sanitizeSingleLine(phone, 25, /[^0-9+()\s-]/g);
    const phoneDigits = cleanPhone.replace(/\D/g, "");
    if (cleanName.length < 2 || !/[A-Za-z0-9]/.test(cleanName)) {
      return res.status(400).json({ success: false, error: "Please provide a valid customer name." });
    }
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return res.status(400).json({ success: false, error: "Please provide a valid contact phone number." });
    }

    let cleanEmail = "";
    if (email !== undefined && email !== null && email !== "") {
      if (typeof email !== "string") {
        return res.status(400).json({ success: false, error: "Invalid email format." });
      }
      if (email.trim().length === 0) {
        return res.status(400).json({ success: false, error: "Email cannot be whitespace-only." });
      }
      const normalizedEmail = email.trim();
      if (!isValidEmailAddress(normalizedEmail)) {
        return res.status(400).json({ success: false, error: "Please provide a valid email address." });
      }
      cleanEmail = normalizedEmail;
    }

    const cleanMake = typeof vehicleMake === "string" ? sanitizeSingleLine(vehicleMake, 50, /[\u0000-\u001F\u007F]/g) : "";
    const cleanModel = typeof vehicleModel === "string" ? sanitizeSingleLine(vehicleModel, 50, /[\u0000-\u001F\u007F]/g) : "";
    const cleanYear = typeof year === "string" || typeof year === "number" ? sanitizeSingleLine(String(year), 10, /[^0-9]/g) : "";
    const vehicleFull = [cleanYear, cleanMake, cleanModel].filter(Boolean).join(" ") || "Standard Spec";
    const cleanLocation =
      typeof location === "string" && location.trim().length > 0
        ? sanitizeSingleLine(location, 120, /[\u0000-\u001F\u007F]/g)
        : "HyperTune Garage - Islamabad Flagship Hub";
    const cleanService =
      typeof service === "string" && service.trim().length > 0
        ? sanitizeSingleLine(service, 250, /[\u0000-\u001F\u007F]/g)
        : "Diagnostic Evaluation";
    const cleanDate =
      typeof date === "string" && date.trim().length > 0
        ? sanitizeSingleLine(date, 30, /[\u0000-\u001F\u007F]/g)
        : "Flexible";
    if (isFridayAppointmentDate(cleanDate)) {
      return res.json({
        success: false,
        error: "Bookings are unavailable on Fridays. Please select another appointment date.",
      });
    }
    const cleanTime =
      typeof time === "string" && time.trim().length > 0
        ? sanitizeSingleLine(time, 45, /[\u0000-\u001F\u007F]/g)
        : "Flexible";
    const cleanNotes = typeof notes === "string" ? sanitizeSingleLine(notes, 500, /[\u0000-\u001F\u007F]/g) : "";

    if (isUrgent !== undefined && isUrgent !== null && typeof isUrgent !== "boolean") {
      return res.status(400).json({ success: false, error: "Invalid urgency flag." });
    }
    if (pickup !== undefined && pickup !== null && typeof pickup !== "boolean") {
      return res.status(400).json({ success: false, error: "Invalid transport request flag." });
    }

    let resolvedPriority: "STANDARD" | "URGENT" | "EXPRESS" | "URGENT / EXPRESS" = "STANDARD";
    if (priority !== undefined && priority !== null && priority !== "") {
      if (typeof priority !== "string" || priority.trim().length === 0) {
        return res.status(400).json({ success: false, error: "Invalid priority value." });
      }
      const normPriority = priority.trim().toUpperCase().replace(/\s+/g, " ");
      if (normPriority === "STANDARD") {
        resolvedPriority = "STANDARD";
      } else if (normPriority === "URGENT") {
        resolvedPriority = "URGENT";
      } else if (normPriority === "EXPRESS") {
        resolvedPriority = "EXPRESS";
      } else if (normPriority === "URGENT / EXPRESS" || normPriority === "URGENT/EXPRESS" || normPriority === "URGENT/EXPRESS PRIORITY") {
        resolvedPriority = "URGENT / EXPRESS";
      } else {
        return res.status(400).json({ success: false, error: "Invalid priority value. Allowed: STANDARD, URGENT, EXPRESS." });
      }
    } else if (isUrgent === true) {
      resolvedPriority = /\(\s*Night Express\s*\)/i.test(cleanTime) ? "URGENT / EXPRESS" : "URGENT";
    } else {
      const noteSegments = cleanNotes
        .split("|")
        .map((seg) => seg.trim().toUpperCase().replace(/\s+/g, " "))
        .filter(Boolean);

      if (noteSegments.some((seg) => seg === "URGENT/EXPRESS PRIORITY" || seg === "URGENT / EXPRESS" || seg === "URGENT/EXPRESS")) {
        resolvedPriority = "URGENT / EXPRESS";
      } else if (noteSegments.some((seg) => seg === "URGENT" || seg === "URGENT PRIORITY")) {
        resolvedPriority = "URGENT";
      } else if (
        noteSegments.some((seg) => seg === "EXPRESS" || seg === "EXPRESS PRIORITY") ||
        /\(\s*Night Express\s*\)/i.test(cleanTime)
      ) {
        resolvedPriority = "EXPRESS";
      }
    }

    const bookingRef = `HTG-${crypto.randomInt(100000, 1000000)}`;
    const msg = encodeURIComponent(
      `*NEW SERVICE APPOINTMENT - HYPERTUNE GARAGE*\n` +
      `*Ref #:* ${bookingRef}\n` +
      `*Customer:* ${cleanName} (${cleanPhone})\n` +
      `${cleanEmail ? `*Email:* ${cleanEmail}\n` : ""}` +
      `*Vehicle:* ${vehicleFull}\n` +
      `*Branch:* ${cleanLocation}\n` +
      `*Scheduled:* ${cleanDate} (${cleanTime})\n` +
      `*Services:* ${cleanService}\n` +
      `${pickup === true ? "*Transport Request:* Requested (subject to confirmation)\n" : ""}` +
      `${cleanNotes ? `*Notes:* ${cleanNotes}\n` : ""}` +
      `*Priority:* ${resolvedPriority}`
    );
    const whatsappUrl = `https://wa.me/923330177717?text=${msg}`;

    return res.json({
      success: true,
      bookingRef,
      whatsappUrl,
    });
  } catch (error: any) {
    console.error("Booking submission error:", error);
    return res.status(500).json({
      success: false,
      error: "Unable to process booking. Please reach us via WhatsApp at +92 333 0177717.",
    });
  }
});

// Controlled Server-Side IndexNow Submission Endpoint (Authenticated, Rate-Limited, Canonical Allowlist)
app.post("/api/indexnow", createRateLimiter("indexnow", 10, 60000), async (req, res) => {
  res.setHeader("Cache-Control", "no-store");

  try {
    const adminToken = process.env.INDEXNOW_ADMIN_TOKEN?.trim();
    if (!adminToken || !isIndexNowConfigured()) {
      return res.status(503).json({
        success: false,
        error: "IndexNow submission endpoint is not configured.",
      });
    }

    if (!timingSafeBearerMatch(req.headers.authorization, adminToken)) {
      res.setHeader("WWW-Authenticate", "Bearer");
      return res.status(401).json({
        success: false,
        error: "Unauthorized.",
      });
    }

    if (!isPlainObject(req.body)) {
      return res.status(400).json({
        success: false,
        error: "Invalid request payload. Expected JSON object with 'urls' array.",
      });
    }

    const validation = validateIndexNowUrls(req.body.urls);
    if (!validation.ok) {
      return res.status(400).json({
        success: false,
        error: validation.error,
        rejected: validation.rejected,
      });
    }

    const requestId = `inw-${crypto.randomUUID()}`;
    const result = await submitToIndexNow(validation.urls, { requestId });

    if (!result.ok) {
      if (result.retryAfterSeconds !== undefined) {
        res.setHeader("Retry-After", String(result.retryAfterSeconds));
      }
      return res.status(result.status).json({
        success: false,
        requestId,
        error: result.error,
        attempts: result.attempts,
        durationMs: result.durationMs,
      });
    }

    return res.status(result.status).json({
      success: true,
      requestId,
      submittedCount: result.submittedCount,
      urls: result.urls,
      upstreamStatus: result.upstreamStatus,
      attempts: result.attempts,
      durationMs: result.durationMs,
    });
  } catch (error) {
    console.error(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        service: "indexnow",
        event: "indexnow_endpoint_error",
        errorType: error instanceof Error ? error.name : "UnknownError",
      })
    );
    return res.status(500).json({
      success: false,
      error: "Unable to process IndexNow submission.",
    });
  }
});

app.all("/api/indexnow", (_req, res) => {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Allow", "POST");
  return res.status(405).json({
    success: false,
    error: "Method not allowed. Use POST.",
  });
});

// XML Sitemap Endpoint for Google Search Console & Webmasters
app.get(["/sitemap.xml", "/sitemap.xml/"], (req, res) => {
  const baseUrl = getCanonicalBaseUrl(req);
  const today = new Date().toISOString().split("T")[0];
  const routes = getSiteRoutes();

  let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  routes.forEach((route) => {
    const loc = route.path === "/" ? `${baseUrl}/` : `${baseUrl}${route.path}`;
    xmlContent += `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  xmlContent += `</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
  res.status(200).send(xmlContent);
});

// LLMs.txt Endpoint for Agentic Browsing & AI Crawlers
app.get(["/llms.txt", "/.well-known/llms.txt"], (req, res) => {
  const baseUrl = getCanonicalBaseUrl(req);
  const llmsFilePath = path.resolve(process.cwd(), "public/llms.txt");

  if (fs.existsSync(llmsFilePath)) {
    const fileContent = fs.readFileSync(llmsFilePath, "utf-8");
    const llmsContent = fileContent.replace(/https:\/\/hypertunegarage\.pk/g, baseUrl);
    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    return res.status(200).send(llmsContent);
  }

  const llmsContent = `# HyperTune Garage - Automotive Detailing, PPF, Tuning & Maintenance

> HyperTune Garage is an independent automotive workshop, computerized diagnostics center, Paint Protection Film (PPF) studio, and multi-brand car care facility located in Islamabad (serving Islamabad and Rawalpindi, with vehicle transport assistance subject to confirmation on booking).

## Primary Pages

- [Home Page](${baseUrl}/): Overview of HyperTune Garage Islamabad workshop, specialized services, instant cost estimator, customer testimonials, and online booking system.
- [About Us](${baseUrl}/about/): Learn about HyperTune Garage, experienced technicians, indoor PPF studio bay, and multi-brand diagnostic platforms.
- [Services Directory](${baseUrl}/services/): Comprehensive catalog of all 12 automotive services for German, European, Japanese, Korean, Chinese, and hybrid vehicles.
- [Car Brand Specialists](${baseUrl}/brands/): Dedicated repair and servicing hubs for 28 automotive brands.
- [Workshop Locations](${baseUrl}/locations/): Physical studio address, GPS directions, operational hours, and contact details for our Islamabad Flagship Hub and Rawalpindi service coverage.
- [Transformation Gallery](${baseUrl}/gallery/): Showcase of Paint Protection Film installations, ceramic coatings, engine overhauls, and body kit modifications.
- [Customer Testimonials](${baseUrl}/testimonials/): Selected customer testimonials, owner responses, and workshop feedback.
- [Frequently Asked Questions (FAQ)](${baseUrl}/faq/): Technical answers regarding PPF care, warranty terms, diagnostics, and maintenance pricing.
- [Contact Us](${baseUrl}/contact/): Inquire, request personalized price quotes, or contact our Islamabad workshop via phone, WhatsApp, or online form.
- [Book Service Appointment](${baseUrl}/book-appointment/): Reserve diagnostic scans, PPF installations, periodic maintenance, or mechanical repair slots online.
- [Automotive Guides & Blog](${baseUrl}/blog/): Technical car care guides, fault troubleshooting, and maintenance insights tailored for Pakistan's climate.
- [Warranty & Service Terms](${baseUrl}/warranty-specs/): Service-specific terms including 12-Month Written Parts Warranty details for Engine Services, Transmission & Drivetrain, Brake/Suspension/Steering, and Car AC Repair.
- [XML Sitemap](${baseUrl}/sitemap.xml): Complete machine-readable XML sitemap for web crawlers.

## Specialized Automotive Services

- [Paint Protection Film (PPF)](${baseUrl}/services/paint-protection-film-ppf/): Optical TPU paint protection film with computerized blade-free CAD plotter cut patterns inside our indoor PPF studio bay.
- [Car Detailing & Ceramic Coating](${baseUrl}/services/car-detailing/): Multi-stage paint correction, hydrophobic ceramic coating, and interior deep cleaning.
- [Engine Repair & Overhaul](${baseUrl}/services/engine-services/): Precision engine rebuilding, cylinder head work, timing belt/chain replacement, and turbocharger servicing.
- [Car Diagnostics & Pre-Purchase Inspection](${baseUrl}/services/inspection-diagnostics/): Multi-brand computerized diagnostic scanners and structured pre-purchase inspections.
- [Periodic Maintenance & Lube Service](${baseUrl}/services/maintenance-servicing/): Scheduled synthetic oil changes, vehicle-matched filters, fluid checks, and safety inspections.
- [Brakes, Suspension & Alignment](${baseUrl}/services/brake-suspension-steering/): Brake servicing, air/coil suspension overhaul, steering rack repair, and computerized wheel alignment.
- [Transmission & Gearbox Services](${baseUrl}/services/transmission-drivetrain/): Dual-clutch (DSG/DCT), CVT, and automatic torque-converter gearbox diagnostics, mechatronic repair, and fluid servicing.
- [Vehicle Wrap & Color Change](${baseUrl}/services/vehicle-wrap/): Cast vinyl color-change wraps, stealth satin/gloss finishes, roof wraps, and chrome-delete styling.
- [Denting, Painting & Body Repair](${baseUrl}/services/body-repair-paint/): Exterior dent repair, bodywork, panel preparation, color matching, and clear-coat refinishing.
- [Body Modification & Custom Body Kits](${baseUrl}/services/body-modification/): Custom body kit installation, splitters, diffusers, spoilers, and styling fabrication.
- [Car AC Repair & Auto Electrical](${baseUrl}/services/car-ac-repair/): Climate control servicing, R134a/R1234yf refrigerant recharge, cooling coil leak detection, and auto-electrical diagnostics.
- [Cooling, Fuel & Exhaust Systems](${baseUrl}/services/cooling-fuel-exhaust/): Radiator flushing and OAT coolant service, fuel injector cleaning, catalytic converter care, and exhaust repair.

## Workshop Branches & Contact Info

- [Islamabad Flagship Hub](${baseUrl}/locations/islamabad-workshop/): Shop 1-G, Ground Floor, Central Ave, O-9 Block E Police Foundation, Islamabad, 44000, Pakistan. Phone: +92 333 0177717 (Open & Operating).
- [Rawalpindi Coverage Hub](${baseUrl}/locations/rawalpindi-workshop/): Rawalpindi Hub — Coming Soon. Currently serving Rawalpindi customers through our Islamabad Flagship Hub with transport support subject to confirmation on booking.
`;

  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.status(200).send(llmsContent);
});

// LLMs-full.txt Endpoint
app.get(["/llms-full.txt", "/.well-known/llms-full.txt"], (req, res) => {
  const baseUrl = getCanonicalBaseUrl(req);
  const llmsFullFilePath = path.resolve(process.cwd(), "public/llms-full.txt");

  if (fs.existsSync(llmsFullFilePath)) {
    const fileContent = fs.readFileSync(llmsFullFilePath, "utf-8");
    const llmsFullContent = fileContent.replace(/https:\/\/hypertunegarage\.pk/g, baseUrl);
    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    return res.status(200).send(llmsFullContent);
  }

  const llmsFullContent = `# HyperTune Garage - Full Automotive Technical Knowledge Base & Service Specifications

> HyperTune Garage is an independent automotive workshop, computerized diagnostics center, Paint Protection Film (PPF) studio, and multi-brand car care facility located in Islamabad (serving Islamabad and Rawalpindi, with vehicle transport assistance subject to confirmation on booking while our Rawalpindi branch is under development).

## Business Profile & Metadata

- **Name:** HyperTune Garage
- **Industry:** Automotive Repair, Car Detailing, Paint Protection Film (PPF), Multi-Brand Vehicle Diagnostics, Body Modification
- **Hotline / Phone:** +92 333 0177717 (WhatsApp & Call)
- **Email:** info@hypertunegarage.pk
- **Operating Hours:** Saturday - Thursday: 10:00 AM - 10:00 PM (Friday Closed - applies to Islamabad Flagship Hub)
- **Locations:**
  - **Islamabad Flagship Hub (Open & Operating):** Shop 1-G, Ground Floor, Central Ave, O-9 Block E Police Foundation, Islamabad, 44000, Pakistan — ${baseUrl}/locations/islamabad-workshop/
  - **Rawalpindi Hub (Coming Soon):** Currently serving Rawalpindi customers through our Islamabad Flagship Hub with transport assistance subject to confirmation on booking — ${baseUrl}/locations/rawalpindi-workshop/
- **Primary Website:** ${baseUrl}/
`;

  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.status(200).send(llmsFullContent);
});

// Robots.txt Endpoint (Synchronized directly with public/robots.txt policy)
app.get(["/robots.txt", "/robots.txt/"], (_req, res) => {
  const robotsFilePath = path.resolve(process.cwd(), "public/robots.txt");
  if (fs.existsSync(robotsFilePath)) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.sendFile(robotsFilePath);
  }

  const robotsContent = `# HyperTune Garage robots.txt
# https://hypertunegarage.pk

# Default Crawler Rules
User-agent: *
Allow: /
Disallow: /api/

# Major Search Engine Crawlers
User-agent: Googlebot
Allow: /
Disallow: /api/

User-agent: Bingbot
Allow: /
Disallow: /api/

# AI Conversational Search Crawlers (Search Discovery Allowed)
User-agent: OAI-SearchBot
Allow: /
Disallow: /api/

User-agent: ClaudeBot
Allow: /
Disallow: /api/

User-agent: PerplexityBot
Allow: /
Disallow: /api/

# AI Model Training & Data Scrapers (Disallowed per policy)
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

# Sitemap Location
Sitemap: https://hypertunegarage.pk/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.status(200).send(robotsContent);
});

// Helper function to inject rich SSR metadata & pre-rendered HTML into response for Googlebot & Crawlers
function injectSSRMeta(htmlTemplate: string, reqUrl: string, host: string, protocol: string): string {
  const baseUrl = `${protocol}://${host}`;
  return injectSSRHtml(htmlTemplate, reqUrl, baseUrl);
}

async function startServer() {
  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use("/articles", (_req, res, next) => {
      res.setHeader("X-Robots-Tag", "noindex, follow");
      next();
    });

    app.use(vite.middlewares);

    // Custom HTML routing with SSR meta injection for all non-asset paths
    app.use("*", async (req, res, next) => {
      if (req.method !== "GET") return next();

      const url = req.originalUrl;
      const host = req.headers.host || "hypertunegarage.pk";
      const protocol = req.headers["x-forwarded-proto"] || "https";
      const baseUrl = `${protocol}://${host}`;

      // 301 Permanent Redirects: legacy routes (executed before trailing-slash normalization for 1-hop)
      const parsedPath = url.split("?")[0];
      const normalizedLegacyPath = parsedPath.toLowerCase();
      const legacyRedirects: Record<string, string> = {
        "/booking": "/book-appointment/",
        "/booking/": "/book-appointment/",
        "/services/electrical-electronics": "/services/car-ac-repair/",
        "/services/electrical-electronics/": "/services/car-ac-repair/",
        "/services/car-ac-electrical": "/services/car-ac-repair/",
        "/services/car-ac-electrical/": "/services/car-ac-repair/",
        "/services/detailing-ceramic-coating": "/services/car-detailing/",
        "/services/detailing-ceramic-coating/": "/services/car-detailing/",
        "/services/periodic-maintenance": "/services/maintenance-servicing/",
        "/services/periodic-maintenance/": "/services/maintenance-servicing/",
      };
      if (legacyRedirects[normalizedLegacyPath]) {
        const query = url.includes("?") ? `?${url.split("?")[1]}` : "";
        return res.redirect(301, `${legacyRedirects[normalizedLegacyPath]}${query}`);
      }

      // Trailing-slash redirect for clean SEO URLs (excluding files with extensions)
      if (parsedPath !== "/" && !parsedPath.endsWith("/") && !parsedPath.includes(".")) {
        const query = url.includes("?") ? `?${url.split("?")[1]}` : "";
        return res.redirect(301, `${parsedPath}/${query}`);
      }

      try {
        let template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        const meta = getRouteMetadataAndSchema(url, baseUrl);
        const finalHtml = injectSSRMeta(template, url, host, protocol as string);
        const statusCode = meta.isNotFound ? 404 : 200;
        res.status(statusCode).set({ "Content-Type": "text/html; charset=utf-8" }).end(finalHtml);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve Static Assets with High-Performance Cache-Control
    app.use(
      express.static(distPath, {
        index: false,
        maxAge: "1y",
        immutable: true,
        etag: true,
        lastModified: true,
        setHeaders: (res, filePath) => {
          if (filePath.includes(`${path.sep}articles${path.sep}`) && filePath.endsWith(".html")) {
            res.setHeader("X-Robots-Tag", "noindex, follow");
            res.setHeader("Cache-Control", "public, max-age=3600");
          } else if (filePath.endsWith("index.html") || filePath.endsWith(".txt") || filePath.endsWith(".xml")) {
            res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
          } else if (filePath.match(/\.(webp|jpg|jpeg|png|svg|ico|webmanifest)$/)) {
            res.setHeader("Cache-Control", "public, max-age=2592000, stale-while-revalidate=86400");
          } else if (filePath.match(/\.(js|css|woff2|woff)$/)) {
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          }
        },
      })
    );

    // Production SPA handler with SSR Meta Injection for Googlebot & SEO Crawlers
    app.get("*", (req, res) => {
      const url = req.originalUrl;
      const host = req.headers.host || "hypertunegarage.pk";
      const protocol = req.headers["x-forwarded-proto"] || "https";
      const baseUrl = `${protocol}://${host}`;

      // 301 Permanent Redirects: legacy routes (executed before trailing-slash normalization for 1-hop)
      const parsedPath = url.split("?")[0];
      const normalizedLegacyPath = parsedPath.toLowerCase();
      const legacyRedirects: Record<string, string> = {
        "/booking": "/book-appointment/",
        "/booking/": "/book-appointment/",
        "/services/electrical-electronics": "/services/car-ac-repair/",
        "/services/electrical-electronics/": "/services/car-ac-repair/",
        "/services/car-ac-electrical": "/services/car-ac-repair/",
        "/services/car-ac-electrical/": "/services/car-ac-repair/",
        "/services/detailing-ceramic-coating": "/services/car-detailing/",
        "/services/detailing-ceramic-coating/": "/services/car-detailing/",
        "/services/periodic-maintenance": "/services/maintenance-servicing/",
        "/services/periodic-maintenance/": "/services/maintenance-servicing/",
      };
      if (legacyRedirects[normalizedLegacyPath]) {
        const query = url.includes("?") ? `?${url.split("?")[1]}` : "";
        return res.redirect(301, `${legacyRedirects[normalizedLegacyPath]}${query}`);
      }

      // Trailing-slash redirect for clean SEO URLs (excluding files with extensions)
      if (parsedPath !== "/" && !parsedPath.endsWith("/") && !parsedPath.includes(".")) {
        const query = url.includes("?") ? `?${url.split("?")[1]}` : "";
        return res.redirect(301, `${parsedPath}/${query}`);
      }

      const ssrTemplatePath = path.join(process.cwd(), ".server", "ssr-template.html");
      const indexPath = path.join(distPath, "index.html");
      const notFoundHtmlPath = path.join(distPath, "404.html");
      const meta = getRouteMetadataAndSchema(url, baseUrl);

      const sendSafeFallback = (reason: string) => {
        console.error(`[SSR] ${reason} (path=${parsedPath})`);
        if (meta.isNotFound) {
          if (fs.existsSync(notFoundHtmlPath)) {
            return res.status(404).set({ "Content-Type": "text/html; charset=utf-8" }).sendFile(notFoundHtmlPath);
          }
          return res
            .status(404)
            .set({ "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" })
            .end(
              '<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="robots" content="noindex, follow" /><title>404 - Page Not Found | HyperTune Garage</title></head><body><main><h1>404 - Page Not Found</h1><p>The requested page could not be found.</p><p><a href="/">Return to Homepage</a></p></main></body></html>'
            );
        }

        const cleanSubPath = parsedPath.replace(/^\/+|\/+$/g, "");
        const prerenderedPath = cleanSubPath ? path.join(distPath, cleanSubPath, "index.html") : indexPath;
        if (fs.existsSync(prerenderedPath)) {
          return res.status(200).set({ "Content-Type": "text/html; charset=utf-8" }).sendFile(prerenderedPath);
        }

        return res
          .status(503)
          .set({ "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" })
          .end(
            '<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="robots" content="noindex, nofollow" /><title>503 - Service Temporarily Unavailable | HyperTune Garage</title></head><body><main><h1>Service Temporarily Unavailable</h1><p>Please try again shortly or visit the <a href="/">homepage</a>.</p></main></body></html>'
          );
      };

      try {
        let rawTemplate: string | null = null;
        if (fs.existsSync(ssrTemplatePath)) {
          rawTemplate = fs.readFileSync(ssrTemplatePath, "utf-8");
        } else if (fs.existsSync(indexPath)) {
          const candidateHtml = fs.readFileSync(indexPath, "utf-8");
          if (/<div id=["']root["']>\s*<\/div>/i.test(candidateHtml)) {
            rawTemplate = candidateHtml;
          }
        }

        if (!rawTemplate) {
          return sendSafeFallback("Isolated SSR template .server/ssr-template.html missing and dist/index.html is populated");
        }

        const finalHtml = injectSSRMeta(rawTemplate, url, host, protocol as string);
        const statusCode = meta.isNotFound ? 404 : 200;
        res.status(statusCode).set({ "Content-Type": "text/html; charset=utf-8" }).end(finalHtml);
      } catch (e: any) {
        return sendSafeFallback(`SSR injection failed: ${e?.message || "Unknown error"}`);
      }
    });
  }

  if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`HyperTune Garage server running on http://0.0.0.0:${PORT}`);
    });
  }
}

startServer();

export default app;
