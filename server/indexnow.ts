import crypto from "crypto";
import { getSiteRoutes } from "../src/utils/routes";

export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
export const INDEXNOW_CANONICAL_HOST = "hypertunegarage.pk";
export const INDEXNOW_CANONICAL_ORIGIN = `https://${INDEXNOW_CANONICAL_HOST}`;
export const INDEXNOW_KEY_LOCATION = `${INDEXNOW_CANONICAL_ORIGIN}/8d1426ff4d484c00895768fd9bd7d5c6.txt`;

export const INDEXNOW_MAX_BATCH_SIZE = 100;
export const INDEXNOW_TIMEOUT_MS = 8000;
export const INDEXNOW_MAX_RETRIES = 2;
export const INDEXNOW_MAX_RETRY_AFTER_MS = 3000;

const INDEXNOW_KEY_REGEX = /^[A-Za-z0-9-]{8,128}$/;

export interface RejectedUrlDetail {
  index: number;
  reason: string;
}

export interface UrlBatchValidationResult {
  ok: boolean;
  urls: string[];
  error?: string;
  rejected?: RejectedUrlDetail[];
}

export interface IndexNowSubmitOptions {
  requestId?: string;
  timeoutMs?: number;
  maxRetries?: number;
  maxRetryAfterMs?: number;
  fetchImpl?: typeof fetch;
  sleepImpl?: (ms: number) => Promise<void>;
}

export interface IndexNowSubmitResult {
  ok: boolean;
  status: number;
  upstreamStatus?: number;
  submittedCount: number;
  urls: string[];
  attempts: number;
  durationMs: number;
  retryAfterSeconds?: number;
  error?: string;
}

let cachedCanonicalPaths: Set<string> | null = null;

function getCanonicalIndexablePaths(): Set<string> {
  if (!cachedCanonicalPaths) {
    cachedCanonicalPaths = new Set(getSiteRoutes().map((route) => route.path));
  }
  return cachedCanonicalPaths;
}

export function getIndexNowKey(): string | null {
  const raw = process.env.INDEXNOW_KEY?.trim();
  if (!raw || !INDEXNOW_KEY_REGEX.test(raw)) {
    return null;
  }
  return raw;
}

export function isIndexNowConfigured(): boolean {
  return getIndexNowKey() !== null;
}

export function timingSafeBearerMatch(authHeader: unknown, expectedToken: string): boolean {
  if (typeof authHeader !== "string" || !expectedToken) {
    return false;
  }
  const match = /^Bearer\s+(.+)$/i.exec(authHeader.trim());
  if (!match) {
    return false;
  }
  const providedToken = match[1].trim();
  if (!providedToken) {
    return false;
  }

  const expectedDigest = crypto.createHash("sha256").update(expectedToken, "utf8").digest();
  const providedDigest = crypto.createHash("sha256").update(providedToken, "utf8").digest();
  return crypto.timingSafeEqual(providedDigest, expectedDigest);
}

function redactSecret(text: string, secret: string): string {
  if (!text) return "";
  let clean = text.split(secret).join("[REDACTED]");
  const encoded = encodeURIComponent(secret);
  if (encoded !== secret) {
    clean = clean.split(encoded).join("[REDACTED]");
  }
  return clean.slice(0, 300);
}

function classifyRejectedUrl(raw: unknown, canonicalPaths: Set<string>, seen: Set<string>): string | null {
  if (typeof raw !== "string") {
    return "URL entry must be a string.";
  }
  if (raw.length === 0 || raw.trim().length === 0) {
    return "URL entry must not be empty.";
  }
  if (raw !== raw.trim()) {
    return "URL must not contain leading or trailing whitespace.";
  }
  if (raw.length > 512) {
    return "URL exceeds maximum allowed length.";
  }
  if (/[\u0000-\u0020\u007F\\]/.test(raw)) {
    return "URL contains invalid control characters, whitespace, or backslashes.";
  }

  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    return "Malformed URL.";
  }

  if (parsed.protocol !== "https:") {
    return "Only HTTPS canonical URLs are permitted.";
  }
  if (parsed.username || parsed.password) {
    return "URL credentials are not permitted.";
  }
  if (parsed.port) {
    return "Explicit port numbers are not permitted in canonical URLs.";
  }
  if (parsed.hostname.toLowerCase() !== INDEXNOW_CANONICAL_HOST) {
    return `External or non-canonical host rejected; only ${INDEXNOW_CANONICAL_HOST} is allowed.`;
  }
  if (parsed.search || raw.includes("?") || parsed.hash || raw.includes("#")) {
    return "Query strings and URL fragments are not permitted.";
  }

  const pathname = parsed.pathname;
  if (pathname.includes("//") || pathname.includes("..")) {
    return "Malformed canonical path.";
  }
  if (pathname === "/api" || pathname.startsWith("/api/")) {
    return "API routes must not be submitted to IndexNow.";
  }
  if (pathname === "/booking" || pathname === "/booking/") {
    return "Redirect URLs (/booking/) must not be submitted to IndexNow.";
  }
  if (pathname === "/articles" || pathname.startsWith("/articles/")) {
    return "Noindex legacy article routes must not be submitted to IndexNow.";
  }
  if (pathname === "/404" || pathname === "/404/") {
    return "Error/noindex routes must not be submitted to IndexNow.";
  }
  if (/\.[a-z0-9]{1,8}$/i.test(pathname)) {
    return "File and asset URLs are not supported for IndexNow page submission.";
  }

  const exactCanonical = `${INDEXNOW_CANONICAL_ORIGIN}${pathname}`;
  if (raw !== exactCanonical) {
    return "URL must match exact canonical HTTPS lowercase-host formatting.";
  }
  if (!canonicalPaths.has(pathname)) {
    return "Unsupported or non-canonical URL path (not in indexable site routes).";
  }
  if (seen.has(exactCanonical)) {
    return "Duplicate URL in batch.";
  }

  return null;
}

export function validateIndexNowUrls(rawUrls: unknown): UrlBatchValidationResult {
  if (!Array.isArray(rawUrls)) {
    return {
      ok: false,
      urls: [],
      error: "Request body must include a 'urls' array.",
      rejected: [{ index: 0, reason: "Expected an array of canonical URLs." }],
    };
  }

  if (rawUrls.length === 0) {
    return {
      ok: false,
      urls: [],
      error: "At least one canonical URL is required.",
      rejected: [{ index: 0, reason: "Empty URL batch." }],
    };
  }

  if (rawUrls.length > INDEXNOW_MAX_BATCH_SIZE) {
    return {
      ok: false,
      urls: [],
      error: `Batch exceeds maximum allowed size of ${INDEXNOW_MAX_BATCH_SIZE} URLs.`,
      rejected: [{ index: INDEXNOW_MAX_BATCH_SIZE, reason: `Maximum ${INDEXNOW_MAX_BATCH_SIZE} URLs per request.` }],
    };
  }

  const canonicalPaths = getCanonicalIndexablePaths();
  const seen = new Set<string>();
  const validUrls: string[] = [];
  const rejected: RejectedUrlDetail[] = [];

  for (let i = 0; i < rawUrls.length; i++) {
    const entry = rawUrls[i];
    const reason = classifyRejectedUrl(entry, canonicalPaths, seen);
    if (reason) {
      rejected.push({ index: i, reason });
    } else {
      const urlStr = entry as string;
      seen.add(urlStr);
      validUrls.push(urlStr);
    }
  }

  if (rejected.length > 0) {
    return {
      ok: false,
      urls: [],
      error: `${rejected.length} URL(s) failed canonical validation.`,
      rejected: rejected.slice(0, 25),
    };
  }

  return {
    ok: true,
    urls: validUrls,
  };
}

function parseRetryAfterMs(headerValue: string | null): number | null {
  if (!headerValue) return null;
  const trimmed = headerValue.trim();
  if (/^\d+$/.test(trimmed)) {
    return Number(trimmed) * 1000;
  }
  const parsedDate = Date.parse(trimmed);
  if (!Number.isNaN(parsedDate)) {
    return Math.max(0, parsedDate - Date.now());
  }
  return null;
}

function defaultSleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function logStructuredEvent(
  level: "info" | "warn" | "error",
  payload: Record<string, unknown>
): void {
  const line = JSON.stringify({
    timestamp: new Date().toISOString(),
    service: "indexnow",
    ...payload,
  });
  if (level === "info") {
    console.info(line);
  } else if (level === "warn") {
    console.warn(line);
  } else {
    console.error(line);
  }
}

export async function submitToIndexNow(
  urlList: string[],
  options: IndexNowSubmitOptions = {}
): Promise<IndexNowSubmitResult> {
  const startedAt = Date.now();
  const requestId = options.requestId || `inw-${crypto.randomUUID()}`;
  const timeoutMs = options.timeoutMs ?? INDEXNOW_TIMEOUT_MS;
  const maxRetries = options.maxRetries ?? INDEXNOW_MAX_RETRIES;
  const maxRetryAfterMs = options.maxRetryAfterMs ?? INDEXNOW_MAX_RETRY_AFTER_MS;
  const fetchImpl = options.fetchImpl ?? fetch;
  const sleepImpl = options.sleepImpl ?? defaultSleep;

  const key = getIndexNowKey();
  if (!key) {
    logStructuredEvent("error", {
      event: "indexnow_config_missing",
      requestId,
      outcome: "misconfigured",
    });
    return {
      ok: false,
      status: 503,
      submittedCount: 0,
      urls: [],
      attempts: 0,
      durationMs: Date.now() - startedAt,
      error: "IndexNow submission service is not configured.",
    };
  }

  const submittedPaths = urlList.map((u) => {
    try {
      return new URL(u).pathname;
    } catch {
      return "[invalid]";
    }
  });

  const payloadBody = JSON.stringify({
    host: INDEXNOW_CANONICAL_HOST,
    key,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList,
  });

  let attempts = 0;

  while (attempts <= maxRetries) {
    attempts++;
    try {
      const response = await fetchImpl(INDEXNOW_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "HyperTuneGarage-IndexNow/1.0",
        },
        body: payloadBody,
        signal: AbortSignal.timeout(timeoutMs),
      });

      const upstreamStatus = response.status;

      if (upstreamStatus === 200 || upstreamStatus === 202) {
        const durationMs = Date.now() - startedAt;
        logStructuredEvent("info", {
          event: "indexnow_submission",
          outcome: "accepted",
          requestId,
          attempt: attempts,
          upstreamStatus,
          urlCount: urlList.length,
          paths: submittedPaths,
          durationMs,
        });
        return {
          ok: true,
          status: upstreamStatus,
          upstreamStatus,
          submittedCount: urlList.length,
          urls: urlList,
          attempts,
          durationMs,
        };
      }

      const rawBody = await response.text().catch(() => "");
      const safeBody = redactSecret(rawBody, key);

      if (upstreamStatus === 429) {
        const retryAfterMs = parseRetryAfterMs(response.headers.get("retry-after"));
        const fallbackDelayMs = 500 * Math.pow(2, attempts - 1);
        const waitMs = retryAfterMs !== null ? retryAfterMs : fallbackDelayMs;

        logStructuredEvent("warn", {
          event: "indexnow_submission",
          outcome: "rate_limited",
          requestId,
          attempt: attempts,
          upstreamStatus,
          urlCount: urlList.length,
          retryAfterMs,
          details: safeBody || undefined,
        });

        if (attempts <= maxRetries && waitMs <= maxRetryAfterMs) {
          if (waitMs > 0) {
            await sleepImpl(waitMs);
          }
          continue;
        }

        const retryAfterSeconds = Math.max(1, Math.ceil(waitMs / 1000));
        return {
          ok: false,
          status: 429,
          upstreamStatus,
          submittedCount: 0,
          urls: urlList,
          attempts,
          durationMs: Date.now() - startedAt,
          retryAfterSeconds,
          error: "IndexNow upstream rate limit reached. Retry later.",
        };
      }

      if (upstreamStatus >= 500 && upstreamStatus < 600) {
        logStructuredEvent("warn", {
          event: "indexnow_submission",
          outcome: "upstream_server_error",
          requestId,
          attempt: attempts,
          upstreamStatus,
          urlCount: urlList.length,
          details: safeBody || undefined,
        });

        if (attempts <= maxRetries) {
          await sleepImpl(500 * Math.pow(2, attempts - 1));
          continue;
        }

        return {
          ok: false,
          status: 502,
          upstreamStatus,
          submittedCount: 0,
          urls: urlList,
          attempts,
          durationMs: Date.now() - startedAt,
          error: "IndexNow endpoint is temporarily unavailable.",
        };
      }

      // Non-retryable 4xx (e.g., 400 Invalid format, 403 Invalid/mismatched key, 422 Unprocessable)
      logStructuredEvent("error", {
        event: "indexnow_submission",
        outcome: "rejected",
        requestId,
        attempt: attempts,
        upstreamStatus,
        urlCount: urlList.length,
        paths: submittedPaths,
        details: safeBody || undefined,
      });

      return {
        ok: false,
        status: upstreamStatus === 400 || upstreamStatus === 422 ? 422 : 502,
        upstreamStatus,
        submittedCount: 0,
        urls: urlList,
        attempts,
        durationMs: Date.now() - startedAt,
        error:
          upstreamStatus === 403
            ? "IndexNow rejected the submission verification credentials."
            : "IndexNow rejected the submitted URL payload.",
      };
    } catch (error: unknown) {
      const errName = error instanceof Error ? error.name : "UnknownError";
      const isTimeout = errName === "TimeoutError" || errName === "AbortError";
      const safeMessage = error instanceof Error ? redactSecret(error.message, key) : "Network error";

      logStructuredEvent("warn", {
        event: "indexnow_submission",
        outcome: isTimeout ? "timeout" : "network_error",
        requestId,
        attempt: attempts,
        urlCount: urlList.length,
        errorType: errName,
        details: safeMessage,
      });

      if (attempts <= maxRetries) {
        await sleepImpl(500 * Math.pow(2, attempts - 1));
        continue;
      }

      return {
        ok: false,
        status: isTimeout ? 504 : 502,
        submittedCount: 0,
        urls: urlList,
        attempts,
        durationMs: Date.now() - startedAt,
        error: isTimeout
          ? "IndexNow submission request timed out."
          : "Unable to reach IndexNow submission endpoint.",
      };
    }
  }

  return {
    ok: false,
    status: 502,
    submittedCount: 0,
    urls: urlList,
    attempts,
    durationMs: Date.now() - startedAt,
    error: "IndexNow submission failed after retries.",
  };
}
