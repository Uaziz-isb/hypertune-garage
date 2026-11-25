import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

export const PRODUCTION_ORIGIN = "https://hypertunegarage.pk";
export const PRODUCTION_HOST = "hypertunegarage.pk";
export const SITEMAP_URL = `${PRODUCTION_ORIGIN}/sitemap.xml`;
export const INDEXNOW_API_URL = `${PRODUCTION_ORIGIN}/api/indexnow/`;
export const HEALTH_URL = `${PRODUCTION_ORIGIN}/api/health`;
export const PUBLIC_KEY_FILE_URL = `${PRODUCTION_ORIGIN}/8d1426ff4d484c00895768fd9bd7d5c6.txt`;
export const EXPECTED_PUBLIC_KEY = "8d1426ff4d484c00895768fd9bd7d5c6";

// Endpoint enforces max 100 URLs/request (which also stays well below IndexNow's 10,000 limit).
export const MAX_BATCH_SIZE = 100;
export const INDEXNOW_PROTOCOL_MAX_BATCH = 10000;
export const REQUEST_TIMEOUT_MS = 15000;
export const MAX_TRANSIENT_RETRIES = 2;
export const MAX_429_WAIT_MS = 65000;

const CONTROL_CHARS_REGEX = /[\u0000-\u001F\u007F]/;
const HEX_SHA_REGEX = /^[0-9a-fA-F]{40}$/;
const NUMERIC_ID_REGEX = /^[0-9]{1,20}$/;
const SAFE_ENV_NAME_REGEX = /^[A-Za-z0-9 _.\-\u2013]{1,64}$/;
export const APPROVED_PRODUCTION_HOSTS = new Set([
  PRODUCTION_HOST,
  "hypertune-garage-32w7.vercel.app",
  "hypertune-garage-32w7-git-main-hyper-tune.vercel.app",
]);
export const VERCEL_DEPLOYMENT_HOST_REGEX =
  /^hypertune-garage-32w7-[a-z0-9]+-hyper-tune\.vercel\.app$/;
const OUTPUT_KEY_REGEX = /^[A-Za-z_][A-Za-z0-9_]*$/;

export function isApprovedProductionHost(hostname) {
  if (typeof hostname !== "string" || !hostname) return false;
  const normalized = hostname.trim().toLowerCase();
  return (
    APPROVED_PRODUCTION_HOSTS.has(normalized) ||
    VERCEL_DEPLOYMENT_HOST_REGEX.test(normalized)
  );
}

export function hasControlCharacters(value) {
  return typeof value === "string" && CONTROL_CHARS_REGEX.test(value);
}

export function sanitizeSingleLine(value, maxLen = 180) {
  if (value === undefined || value === null) return "";
  return String(value)
    .replace(/[\u0000-\u001F\u007F`]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

export function parseAllowedDeploymentHosts(extraHostsRaw = "") {
  const allowed = new Set(APPROVED_PRODUCTION_HOSTS);
  if (typeof extraHostsRaw !== "string" || !extraHostsRaw.trim()) {
    return allowed;
  }
  if (hasControlCharacters(extraHostsRaw)) {
    throw new Error("VERCEL_PRODUCTION_HOSTS contains invalid control characters.");
  }

  for (const part of extraHostsRaw.split(",")) {
    const candidate = part.trim().toLowerCase();
    if (!candidate) continue;
    if (isApprovedProductionHost(candidate)) {
      allowed.add(candidate);
    } else {
      throw new Error(
        `Invalid host in VERCEL_PRODUCTION_HOSTS: '${sanitizeSingleLine(candidate, 80)}'. Only approved HyperTune Garage production hostnames are permitted.`
      );
    }
  }
  return allowed;
}

export function validateDeploymentEnvironmentUrl(rawUrl, allowedHosts = APPROVED_PRODUCTION_HOSTS) {
  if (typeof rawUrl !== "string" || rawUrl.trim().length === 0) {
    return { ok: false, reason: "Missing deployment environment URL." };
  }
  if (hasControlCharacters(rawUrl) || rawUrl !== rawUrl.trim()) {
    return { ok: false, reason: "Deployment URL contains invalid whitespace or control characters." };
  }

  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return { ok: false, reason: "Malformed deployment URL." };
  }

  if (parsed.protocol !== "https:") {
    return { ok: false, reason: "Deployment URL must use HTTPS." };
  }
  const authority = rawUrl.slice("https://".length).split("/")[0];
  if (parsed.username || parsed.password || parsed.port || authority.includes(":")) {
    return { ok: false, reason: "Deployment URL must not contain credentials or explicit ports." };
  }
  if (parsed.search || rawUrl.includes("?") || parsed.hash || rawUrl.includes("#")) {
    return { ok: false, reason: "Deployment URL must not contain query strings or fragments." };
  }
  if (parsed.pathname !== "/" && parsed.pathname !== "") {
    return { ok: false, reason: "Deployment URL must not point to a subpath." };
  }

  const host = parsed.hostname.toLowerCase();
  const isExplicitlyAllowed =
    allowedHosts instanceof Set && allowedHosts.has(host) && isApprovedProductionHost(host);
  const isPatternAllowed = VERCEL_DEPLOYMENT_HOST_REGEX.test(host);
  if (!isExplicitlyAllowed && !isPatternAllowed) {
    return {
      ok: false,
      reason: `Rejected unverified deployment host '${host}'. Must match an approved HyperTune Garage production domain or ^hypertune-garage-32w7-[a-z0-9]+-hyper-tune\\.vercel\\.app$.`,
    };
  }

  return { ok: true, origin: `https://${host}`, host };
}

export function defaultIsMainAncestor(sha) {
  try {
    execFileSync("git", ["fetch", "origin", "main", "--depth=50"], { stdio: "ignore" });
  } catch {
    // Continue and verify against local refs if fetch fails in offline/local test environments
  }

  for (const targetRef of ["origin/main", "HEAD"]) {
    try {
      execFileSync("git", ["merge-base", "--is-ancestor", sha, targetRef], { stdio: "ignore" });
      return true;
    } catch {
      // Try next ref
    }
  }
  return false;
}

export function verifyDeploymentMetadata(input = {}, options = {}) {
  const isAncestorFn = options.isAncestorFn ?? defaultIsMainAncestor;

  const rawFields = [
    ["eventName", input.eventName],
    ["githubRef", input.githubRef],
    ["githubSha", input.githubSha],
    ["githubRunId", input.githubRunId],
    ["deployId", input.deployId],
    ["deployRef", input.deployRef],
    ["deploySha", input.deploySha],
    ["deployEnv", input.deployEnv],
    ["deployState", input.deployState],
    ["deployUrl", input.deployUrl],
    ["vercelProductionHosts", input.vercelProductionHosts],
  ];

  for (const [name, val] of rawFields) {
    if (val !== undefined && val !== null && hasControlCharacters(String(val))) {
      return {
        ok: false,
        reason: `Rejected ${name}: contains disallowed control characters or newline injection.`,
      };
    }
  }

  const eventName = String(input.eventName ?? "").trim();

  if (eventName === "workflow_dispatch") {
    const githubRef = String(input.githubRef ?? "").trim();
    const githubSha = String(input.githubSha ?? "").trim();
    const githubRunId = String(input.githubRunId ?? "").trim();

    if (githubRef !== "refs/heads/main") {
      return {
        ok: false,
        reason: `Manual workflow_dispatch is restricted to refs/heads/main (got '${sanitizeSingleLine(githubRef, 60)}').`,
      };
    }
    if (!HEX_SHA_REGEX.test(githubSha)) {
      return { ok: false, reason: "Missing or malformed GITHUB_SHA for workflow_dispatch." };
    }
    if (!NUMERIC_ID_REGEX.test(githubRunId)) {
      return { ok: false, reason: "Missing or malformed GITHUB_RUN_ID for workflow_dispatch." };
    }

    return {
      ok: true,
      outputs: {
        should_run: "true",
        trigger_label: "Manual workflow_dispatch",
        branch_name: "main",
        deployment_label: `manual (${githubSha.slice(0, 7).toLowerCase()})`,
        deployment_status: "READY (verified)",
        cache_key: `manual-${githubRunId}`,
        deployment_id: "",
        deployment_sha: githubSha.toLowerCase(),
      },
    };
  }

  if (eventName !== "deployment_status") {
    return {
      ok: false,
      reason: `Unsupported GitHub event '${sanitizeSingleLine(eventName, 40)}'.`,
    };
  }

  const deployId = String(input.deployId ?? "").trim();
  const deployRef = String(input.deployRef ?? "").trim();
  const deploySha = String(input.deploySha ?? "").trim();
  const deployEnv = String(input.deployEnv ?? "").trim();
  const deployState = String(input.deployState ?? "").trim();
  const deployUrl = String(input.deployUrl ?? "").trim();

  if (!NUMERIC_ID_REGEX.test(deployId)) {
    return { ok: false, reason: "Missing or malformed deployment ID." };
  }
  if (!HEX_SHA_REGEX.test(deploySha)) {
    return { ok: false, reason: "Missing or malformed deployment commit SHA." };
  }
  if (deployState !== "success") {
    return {
      ok: false,
      reason: `Deployment status must be 'success' (got '${sanitizeSingleLine(deployState, 32)}').`,
    };
  }
  if (!SAFE_ENV_NAME_REGEX.test(deployEnv)) {
    return { ok: false, reason: "Missing or malformed deployment environment name." };
  }

  const envLower = deployEnv.toLowerCase();
  if (!envLower.startsWith("production") || envLower.includes("preview")) {
    return {
      ok: false,
      reason: `Rejected non-production environment '${sanitizeSingleLine(deployEnv, 64)}'.`,
    };
  }

  let allowedHosts;
  try {
    allowedHosts = parseAllowedDeploymentHosts(input.vercelProductionHosts ?? "");
  } catch (err) {
    return { ok: false, reason: err instanceof Error ? err.message : String(err) };
  }

  const urlCheck = validateDeploymentEnvironmentUrl(deployUrl, allowedHosts);
  if (!urlCheck.ok) {
    return { ok: false, reason: urlCheck.reason };
  }

  if (deployRef.length > 0) {
    const isMainRef = deployRef === "main" || deployRef === "refs/heads/main";
    const isSameShaRef = HEX_SHA_REGEX.test(deployRef) && deployRef.toLowerCase() === deploySha.toLowerCase();
    if (!isMainRef && !isSameShaRef) {
      return {
        ok: false,
        reason: `Rejected deployment from non-main ref '${sanitizeSingleLine(deployRef, 64)}'.`,
      };
    }
  }

  if (!isAncestorFn(deploySha)) {
    return {
      ok: false,
      reason: `Rejected deployment commit ${deploySha.slice(0, 7)}: commit is not an ancestor of main.`,
    };
  }

  const normalizedSha = deploySha.toLowerCase();
  return {
    ok: true,
    outputs: {
      should_run: "true",
      trigger_label: "Vercel production deployment",
      branch_name: "main",
      deployment_label: `${deployId} (${normalizedSha.slice(0, 7)}) -> ${urlCheck.origin}`,
      deployment_status: `READY (${deployState})`,
      cache_key: `indexnow-prod-v1-${deployId}-${normalizedSha}`,
      deployment_id: deployId,
      deployment_sha: normalizedSha,
    },
  };
}

export function formatGitHubOutputLines(outputs) {
  const lines = [];
  for (const [key, rawValue] of Object.entries(outputs)) {
    if (!OUTPUT_KEY_REGEX.test(key)) {
      throw new Error(`Invalid GitHub output key: ${key}`);
    }
    const value = String(rawValue ?? "");
    if (hasControlCharacters(value)) {
      throw new Error(`Refusing to write unsafe control characters to GITHUB_OUTPUT key '${key}'.`);
    }
    lines.push(`${key}=${value}`);
  }
  return lines.join("\n") + "\n";
}

export function writeGitHubOutputs(outputFilePath, outputs) {
  if (!outputFilePath) return;
  const content = formatGitHubOutputLines(outputs);
  fs.appendFileSync(outputFilePath, content, "utf8");
}

export function decodeXmlEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

export function redactSecret(text, secret) {
  if (!text) return "";
  let clean = String(text);
  if (secret) {
    clean = clean.split(secret).join("[REDACTED]");
    const encoded = encodeURIComponent(secret);
    if (encoded && encoded !== secret) {
      clean = clean.split(encoded).join("[REDACTED]");
    }
  }
  return clean.slice(0, 500);
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function parseRetryAfterMs(headerValue) {
  if (!headerValue) return null;
  const trimmed = headerValue.trim();
  if (/^\d+$/.test(trimmed)) {
    return Number(trimmed) * 1000;
  }
  const dateMs = Date.parse(trimmed);
  if (!Number.isNaN(dateMs)) {
    return Math.max(0, dateMs - Date.now());
  }
  return null;
}

export function extractAndValidateSitemapUrls(xmlText) {
  if (typeof xmlText !== "string" || !xmlText.includes("<urlset") || !xmlText.includes("</urlset>")) {
    throw new Error("Sitemap response is not valid XML <urlset> content.");
  }

  const rawLocs = [...xmlText.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((m) =>
    decodeXmlEntities(m[1].trim())
  );

  if (rawLocs.length === 0) {
    throw new Error("Sitemap XML contained 0 <loc> entries.");
  }

  const seen = new Set();
  const validUrls = [];
  const invalidDetails = [];
  const duplicateUrls = [];

  for (const rawUrl of rawLocs) {
    if (seen.has(rawUrl)) {
      duplicateUrls.push(rawUrl);
      continue;
    }

    const reason = validateSingleCanonicalUrl(rawUrl);
    if (reason) {
      invalidDetails.push({ url: rawUrl, reason });
      continue;
    }

    seen.add(rawUrl);
    validUrls.push(rawUrl);
  }

  return {
    totalDiscovered: rawLocs.length,
    validUrls,
    invalidDetails,
    duplicateUrls,
  };
}

export function validateSingleCanonicalUrl(rawUrl) {
  if (typeof rawUrl !== "string" || rawUrl.length === 0 || rawUrl !== rawUrl.trim()) {
    return "Empty or untrimmed URL.";
  }
  if (/[\u0000-\u0020\u007F\\]/.test(rawUrl)) {
    return "URL contains invalid control characters, whitespace, or backslashes.";
  }

  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return "Malformed URL.";
  }

  if (parsed.protocol !== "https:") {
    return "Only HTTPS URLs are allowed.";
  }
  if (parsed.username || parsed.password || parsed.port) {
    return "Credentials and explicit ports are not permitted.";
  }
  if (parsed.hostname.toLowerCase() === `www.${PRODUCTION_HOST}`) {
    return "www hostname is non-canonical.";
  }
  if (parsed.hostname.toLowerCase() !== PRODUCTION_HOST) {
    return `External or non-canonical hostname: ${parsed.hostname}`;
  }
  if (parsed.search || rawUrl.includes("?") || parsed.hash || rawUrl.includes("#")) {
    return "Query strings and fragments are not permitted.";
  }

  const pathname = parsed.pathname;
  if (pathname.includes("//") || pathname.includes("..")) {
    return "Malformed path sequence.";
  }
  if (!pathname.endsWith("/")) {
    return "Canonical trailing slash is required.";
  }
  if (pathname === "/api" || pathname.startsWith("/api/")) {
    return "API routes must not be submitted.";
  }
  if (pathname === "/booking" || pathname === "/booking/") {
    return "Redirect route (/booking/) must not be submitted.";
  }
  if (pathname === "/articles" || pathname.startsWith("/articles/")) {
    return "Legacy noindex /articles/ route must not be submitted.";
  }
  if (pathname === "/404" || pathname.startsWith("/404/")) {
    return "Error/noindex route must not be submitted.";
  }
  if (/\.[a-z0-9]{1,8}$/i.test(pathname)) {
    return "Asset/file URLs are not indexable HTML pages.";
  }

  const exactCanonical = `${PRODUCTION_ORIGIN}${pathname}`;
  if (rawUrl !== exactCanonical) {
    return "URL does not match exact canonical formatting.";
  }

  return null;
}

export function chunkArray(items, size = Math.min(MAX_BATCH_SIZE, INDEXNOW_PROTOCOL_MAX_BATCH)) {
  const safeSize = Math.max(1, Math.min(size, INDEXNOW_PROTOCOL_MAX_BATCH));
  const chunks = [];
  for (let i = 0; i < items.length; i += safeSize) {
    chunks.push(items.slice(i, i + safeSize));
  }
  return chunks;
}

export function formatSummaryReport(data) {
  const lines = [
    "HYPERTUNE GARAGE — INDEXNOW AUTOMATION",
    "--------------------------------------",
    `Trigger: ${sanitizeSingleLine(data.trigger)}`,
    `Branch: ${sanitizeSingleLine(data.branch)}`,
    `Deployment: ${sanitizeSingleLine(data.deployment)}`,
    `Deployment status: ${sanitizeSingleLine(data.deploymentStatus)}`,
    `Sitemap: ${sanitizeSingleLine(data.sitemapStatus)}`,
    `Canonical URLs discovered: ${Number(data.discoveredCount) || 0}`,
    `Invalid URLs: ${Number(data.invalidCount) || 0}`,
    `Duplicate URLs: ${Number(data.duplicateCount) || 0}`,
    `URLs submitted: ${Number(data.submittedCount) || 0}`,
    `IndexNow response: ${sanitizeSingleLine(data.indexNowResponse)}`,
    `Result: ${sanitizeSingleLine(data.result)}`,
  ];
  if (data.failureStage) {
    lines.push(`Failure stage: ${sanitizeSingleLine(data.failureStage)}`);
  }
  if (data.notes) {
    lines.push(`Details: ${sanitizeSingleLine(data.notes, 400)}`);
  }
  return lines.join("\n");
}

function writeStepSummary(reportText) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  try {
    const safeReport = String(reportText).replace(/```/g, "");
    fs.appendFileSync(summaryPath, `\n\`\`\`text\n${safeReport}\n\`\`\`\n`, "utf8");
  } catch {
    // Non-fatal if summary file is unavailable locally
  }
}

function removeMarkerIfExists(markerPath) {
  if (!markerPath) return;
  try {
    fs.rmSync(markerPath, { force: true });
  } catch {
    // Non-fatal cleanup
  }
}

function writeIdempotencyMarker(markerPath, payload) {
  if (!markerPath) return;
  fs.mkdirSync(path.dirname(markerPath), { recursive: true });
  fs.writeFileSync(markerPath, JSON.stringify(payload, null, 2) + "\n", "utf8");
}

async function fetchWithRetry(url, init, options = {}) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const sleepImpl = options.sleepImpl ?? sleep;
  const maxRetries = options.maxRetries ?? MAX_TRANSIENT_RETRIES;
  const timeoutMs = options.timeoutMs ?? REQUEST_TIMEOUT_MS;
  const token = options.adminToken ?? "";

  let attempt = 0;
  let lastError = null;

  while (attempt <= maxRetries) {
    attempt++;
    try {
      const response = await fetchImpl(url, {
        ...init,
        signal: AbortSignal.timeout(timeoutMs),
      });

      if (response.status >= 500 && response.status < 600 && attempt <= maxRetries) {
        await sleepImpl(1500 * attempt);
        continue;
      }

      return { response, attempts: attempt };
    } catch (err) {
      lastError = err;
      if (attempt <= maxRetries) {
        await sleepImpl(1500 * attempt);
        continue;
      }
      throw new Error(
        `Network/timeout error after ${attempt} attempt(s): ${redactSecret(
          err instanceof Error ? err.message : String(err),
          token
        )}`
      );
    }
  }

  throw lastError || new Error("Request failed.");
}

async function submitBatchWithRetry(urls, adminToken, options = {}) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const sleepImpl = options.sleepImpl ?? sleep;
  const endpointUrl = options.indexNowApiUrl ?? INDEXNOW_API_URL;
  const timeoutMs = options.timeoutMs ?? REQUEST_TIMEOUT_MS;
  const maxTransientRetries = options.maxRetries ?? MAX_TRANSIENT_RETRIES;

  let transientAttempts = 0;
  let rateLimitAttempts = 0;

  while (true) {
    transientAttempts++;
    let response;
    try {
      response = await fetchImpl(endpointUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminToken}`,
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "HyperTuneGarage-Actions-IndexNow/1.0",
        },
        body: JSON.stringify({ urls }),
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (err) {
      if (transientAttempts <= maxTransientRetries) {
        await sleepImpl(2000 * transientAttempts);
        continue;
      }
      const message = redactSecret(err instanceof Error ? err.message : String(err), adminToken);
      return {
        ok: false,
        status: 0,
        statusText: "NETWORK_ERROR",
        stage: "IndexNow API request",
        error: `Request timed out or failed after ${transientAttempts} attempt(s): ${message}`,
      };
    }

    const status = response.status;

    if (status === 200 || status === 202) {
      const bodyJson = await response.json().catch(() => null);
      return {
        ok: true,
        status,
        statusText: status === 200 ? "200 OK" : "202 Accepted",
        upstreamStatus: bodyJson?.upstreamStatus,
        submittedCount: bodyJson?.submittedCount ?? urls.length,
        requestId: bodyJson?.requestId,
      };
    }

    const rawErrBody = await response.text().catch(() => "");
    const safeErrBody = redactSecret(rawErrBody, adminToken);

    if (status === 401 || status === 403) {
      return {
        ok: false,
        status,
        statusText: `${status} Unauthorized`,
        stage: "IndexNow endpoint authentication",
        error:
          "Authentication rejected by /api/indexnow/. Verify GitHub Actions secret INDEXNOW_ADMIN_TOKEN matches Vercel Production INDEXNOW_ADMIN_TOKEN.",
      };
    }

    if (status === 400 || status === 422) {
      return {
        ok: false,
        status,
        statusText: `${status} Bad Request`,
        stage: "IndexNow payload validation",
        error: `Endpoint rejected URL batch without retry (${status}): ${safeErrBody}`,
      };
    }

    if (status === 429) {
      rateLimitAttempts++;
      const retryAfterMs = parseRetryAfterMs(response.headers.get("retry-after"));
      const waitMs = retryAfterMs !== null ? retryAfterMs : 10000;

      if (rateLimitAttempts <= 2 && waitMs <= MAX_429_WAIT_MS) {
        await sleepImpl(Math.max(1000, waitMs));
        continue;
      }

      return {
        ok: false,
        status: 429,
        statusText: "429 Too Many Requests",
        stage: "IndexNow rate limit",
        error: `Rate limit persisted after ${rateLimitAttempts} attempt(s): ${safeErrBody}`,
      };
    }

    if (status >= 500 && status < 600 && transientAttempts <= maxTransientRetries) {
      await sleepImpl(2000 * transientAttempts);
      continue;
    }

    return {
      ok: false,
      status,
      statusText: `${status} Error`,
      stage: "IndexNow upstream submission",
      error: `Endpoint returned HTTP ${status}: ${safeErrBody || "No response body"}`,
    };
  }
}

export async function runAutomation(config = {}) {
  const fetchImpl = config.fetchImpl ?? fetch;
  const sleepImpl = config.sleepImpl ?? sleep;
  const sitemapUrl = config.sitemapUrl ?? SITEMAP_URL;
  const healthUrl = config.healthUrl ?? HEALTH_URL;
  const keyFileUrl = config.keyFileUrl ?? PUBLIC_KEY_FILE_URL;
  const indexNowApiUrl = config.indexNowApiUrl ?? INDEXNOW_API_URL;
  const dryRun = Boolean(config.dryRun ?? (process.env.DRY_RUN === "true"));
  const adminToken = (config.adminToken ?? process.env.INDEXNOW_ADMIN_TOKEN ?? "").trim();
  const batchSize = config.batchSize ?? MAX_BATCH_SIZE;
  const markerPath = config.markerPath ?? process.env.IDEMPOTENCY_MARKER_PATH ?? "";
  const githubOutputPath = config.githubOutputPath ?? process.env.GITHUB_OUTPUT ?? "";
  const deploymentId = sanitizeSingleLine(config.deploymentId ?? process.env.AUTOMATION_DEPLOYMENT_ID ?? "", 64);
  const deploymentSha = sanitizeSingleLine(config.deploymentSha ?? process.env.AUTOMATION_DEPLOYMENT_SHA ?? "", 64);
  let markerCreated = false;

  // Never keep stale marker files before or during a failed run
  removeMarkerIfExists(markerPath);

  const summary = {
    trigger: sanitizeSingleLine(config.trigger ?? process.env.AUTOMATION_TRIGGER ?? "Vercel production deployment"),
    branch: sanitizeSingleLine(config.branch ?? process.env.AUTOMATION_BRANCH ?? "main"),
    deployment: sanitizeSingleLine(config.deployment ?? process.env.AUTOMATION_DEPLOYMENT ?? "manual"),
    deploymentStatus: sanitizeSingleLine(config.deploymentStatus ?? process.env.AUTOMATION_DEPLOYMENT_STATUS ?? "READY"),
    sitemapStatus: "Not fetched",
    discoveredCount: 0,
    invalidCount: 0,
    duplicateCount: 0,
    submittedCount: 0,
    indexNowResponse: dryRun ? "SKIPPED (dry-run)" : "Not called",
    result: "FAILED",
    failureStage: "",
    notes: "",
  };

  try {
    // 1. Validate credential availability up front (except dry-run)
    if (!dryRun && !adminToken) {
      summary.failureStage = "Configuration validation";
      summary.notes = "GitHub Actions secret INDEXNOW_ADMIN_TOKEN is missing or empty.";
      const text = formatSummaryReport(summary);
      console.error(text);
      writeStepSummary(text);
      return { ok: false, markerCreated: false, summary };
    }

    // 2. Verify live production health & public IndexNow key file readiness
    const { response: healthResp } = await fetchWithRetry(
      healthUrl,
      { method: "GET", headers: { "User-Agent": "HyperTuneGarage-Actions-IndexNow/1.0" } },
      { fetchImpl, sleepImpl, adminToken }
    );
    if (!healthResp.ok) {
      summary.failureStage = "Production readiness check (/api/health)";
      summary.notes = `Production health endpoint returned HTTP ${healthResp.status}.`;
      const text = formatSummaryReport(summary);
      console.error(text);
      writeStepSummary(text);
      return { ok: false, markerCreated: false, summary };
    }

    const { response: keyResp } = await fetchWithRetry(
      keyFileUrl,
      { method: "GET", headers: { "User-Agent": "HyperTuneGarage-Actions-IndexNow/1.0" } },
      { fetchImpl, sleepImpl, adminToken }
    );
    const keyBody = (await keyResp.text().catch(() => "")).trim();
    if (!keyResp.ok || keyBody !== EXPECTED_PUBLIC_KEY) {
      summary.failureStage = "Public IndexNow verification file check";
      summary.notes = `Expected ${EXPECTED_PUBLIC_KEY} at ${keyFileUrl} (HTTP ${keyResp.status}).`;
      const text = formatSummaryReport(summary);
      console.error(text);
      writeStepSummary(text);
      return { ok: false, markerCreated: false, summary };
    }

    // 3. Fetch live production sitemap.xml
    const { response: sitemapResp } = await fetchWithRetry(
      sitemapUrl,
      { method: "GET", headers: { "User-Agent": "HyperTuneGarage-Actions-IndexNow/1.0" } },
      { fetchImpl, sleepImpl, adminToken }
    );
    if (!sitemapResp.ok) {
      summary.sitemapStatus = `Failed (HTTP ${sitemapResp.status})`;
      summary.failureStage = "Sitemap retrieval";
      summary.notes = `GET ${sitemapUrl} returned HTTP ${sitemapResp.status}.`;
      const text = formatSummaryReport(summary);
      console.error(text);
      writeStepSummary(text);
      return { ok: false, markerCreated: false, summary };
    }

    const sitemapXml = await sitemapResp.text();
    const parsed = extractAndValidateSitemapUrls(sitemapXml);
    summary.sitemapStatus = "Retrieved successfully";
    summary.discoveredCount = parsed.totalDiscovered;
    summary.invalidCount = parsed.invalidDetails.length;
    summary.duplicateCount = parsed.duplicateUrls.length;

    if (parsed.invalidDetails.length > 0 || parsed.duplicateUrls.length > 0) {
      summary.failureStage = "Canonical sitemap validation";
      summary.notes = [
        parsed.invalidDetails.length > 0
          ? `Invalid examples: ${parsed.invalidDetails
              .slice(0, 5)
              .map((d) => `${d.url} (${d.reason})`)
              .join("; ")}`
          : "",
        parsed.duplicateUrls.length > 0
          ? `Duplicate examples: ${parsed.duplicateUrls.slice(0, 5).join(", ")}`
          : "",
      ]
        .filter(Boolean)
        .join(" | ");
      const text = formatSummaryReport(summary);
      console.error(text);
      writeStepSummary(text);
      return { ok: false, markerCreated: false, summary };
    }

    if (dryRun) {
      summary.result = "DRY_RUN_SUCCESS";
      summary.notes = `Validated ${parsed.validUrls.length} canonical URLs without submitting.`;
      const text = formatSummaryReport(summary);
      console.log(text);
      writeStepSummary(text);
      return { ok: true, markerCreated: false, summary, urls: parsed.validUrls };
    }

    // 4. Submit validated URLs in compliant batches (<= 100 per endpoint, <= 10,000 per IndexNow)
    const batches = chunkArray(parsed.validUrls, batchSize);
    const batchResponses = [];
    const batchStatuses = [];
    let submittedTotal = 0;

    for (let i = 0; i < batches.length; i++) {
      if (i > 0) {
        await sleepImpl(1000);
      }
      const batchResult = await submitBatchWithRetry(batches[i], adminToken, {
        fetchImpl,
        sleepImpl,
        indexNowApiUrl,
      });

      if (!batchResult.ok || (batchResult.status !== 200 && batchResult.status !== 202)) {
        // Ensure partial batch failure never leaves an idempotency marker
        removeMarkerIfExists(markerPath);
        summary.submittedCount = submittedTotal;
        summary.indexNowResponse = batchResult.statusText;
        summary.failureStage = `${batchResult.stage} (batch ${i + 1}/${batches.length})`;
        summary.notes = batchResult.error;
        const text = formatSummaryReport(summary);
        console.error(text);
        writeStepSummary(text);
        return { ok: false, markerCreated: false, summary };
      }

      submittedTotal += batchResult.submittedCount ?? batches[i].length;
      batchStatuses.push(batchResult.status);
      batchResponses.push(batchResult.statusText);
    }

    const allBatchesAccepted =
      batchStatuses.length === batches.length &&
      batchStatuses.every((code) => code === 200 || code === 202);

    if (!allBatchesAccepted || submittedTotal !== parsed.validUrls.length) {
      removeMarkerIfExists(markerPath);
      summary.submittedCount = submittedTotal;
      summary.failureStage = "Batch completeness check";
      summary.notes = `Expected ${parsed.validUrls.length} submitted URLs across ${batches.length} accepted batch(es), got ${submittedTotal}.`;
      const text = formatSummaryReport(summary);
      console.error(text);
      writeStepSummary(text);
      return { ok: false, markerCreated: false, summary };
    }

    // Write and verify idempotency marker strictly AFTER all batches succeed with HTTP 200 or 202
    if (markerPath && deploymentId && deploymentSha) {
      try {
        writeIdempotencyMarker(markerPath, {
          deploymentId,
          deploymentSha,
          submittedCount: submittedTotal,
          batches: batches.length,
          submittedAt: new Date().toISOString(),
        });
        const markerStat = fs.existsSync(markerPath) ? fs.statSync(markerPath) : null;
        if (!markerStat || !markerStat.isFile() || markerStat.size === 0) {
          throw new Error("Idempotency marker file verification failed after write.");
        }
        markerCreated = true;
        writeGitHubOutputs(githubOutputPath, { marker_created: "true" });
      } catch (markerErr) {
        removeMarkerIfExists(markerPath);
        markerCreated = false;
        summary.submittedCount = submittedTotal;
        summary.indexNowResponse =
          batchResponses.length === 1
            ? batchResponses[0]
            : `${batchResponses.join(", ")} (${batchResponses.length} batches)`;
        summary.failureStage = "Idempotency marker persistence";
        summary.notes = redactSecret(
          markerErr instanceof Error ? markerErr.message : String(markerErr),
          adminToken
        );
        const text = formatSummaryReport(summary);
        console.error(text);
        writeStepSummary(text);
        return { ok: false, markerCreated: false, summary };
      }
    }

    summary.submittedCount = submittedTotal;
    summary.indexNowResponse =
      batchResponses.length === 1
        ? batchResponses[0]
        : `${batchResponses.join(", ")} (${batchResponses.length} batches)`;
    summary.result = "SUCCESS";

    const text = formatSummaryReport(summary);
    console.log(text);
    writeStepSummary(text);
    return { ok: true, markerCreated, summary, urls: parsed.validUrls };
  } catch (err) {
    removeMarkerIfExists(markerPath);
    summary.failureStage = summary.failureStage || "Unhandled automation error";
    summary.notes = redactSecret(err instanceof Error ? err.message : String(err), adminToken);
    const text = formatSummaryReport(summary);
    console.error(text);
    writeStepSummary(text);
    return { ok: false, markerCreated: false, summary };
  }
}

function handleCli() {
  const args = process.argv.slice(2);

  if (args.includes("--verify-deployment")) {
    const verification = verifyDeploymentMetadata({
      eventName: process.env.EVENT_NAME,
      githubRef: process.env.GITHUB_REF_INPUT,
      githubSha: process.env.GITHUB_SHA_INPUT,
      githubRunId: process.env.GITHUB_RUN_ID_INPUT,
      deployId: process.env.DEPLOY_ID,
      deployRef: process.env.DEPLOY_REF,
      deploySha: process.env.DEPLOY_SHA,
      deployEnv: process.env.DEPLOY_ENV,
      deployState: process.env.DEPLOY_STATE,
      deployUrl: process.env.DEPLOY_URL,
      vercelProductionHosts: process.env.VERCEL_PRODUCTION_HOSTS,
    });

    if (!verification.ok) {
      console.error(`Deployment verification failed (fail-closed): ${verification.reason}`);
      writeGitHubOutputs(process.env.GITHUB_OUTPUT, { should_run: "false" });
      process.exit(1);
    }

    writeGitHubOutputs(process.env.GITHUB_OUTPUT, verification.outputs);
    console.log(`Verified deployment target: ${verification.outputs.deployment_label}`);
    process.exit(0);
  }

  if (args.includes("--skip-duplicate")) {
    const report = formatSummaryReport({
      trigger: process.env.AUTOMATION_TRIGGER ?? "Vercel production deployment",
      branch: process.env.AUTOMATION_BRANCH ?? "main",
      deployment: process.env.AUTOMATION_DEPLOYMENT ?? "unknown",
      deploymentStatus: process.env.AUTOMATION_DEPLOYMENT_STATUS ?? "READY",
      sitemapStatus: "Skipped (already processed in cache)",
      discoveredCount: 0,
      invalidCount: 0,
      duplicateCount: 0,
      submittedCount: 0,
      indexNowResponse: "SKIPPED",
      result: "SKIPPED (Duplicate deployment cache hit; best-effort per GitHub cache retention)",
    });
    console.log(report);
    writeStepSummary(report);
    process.exit(0);
  }

  runAutomation().then((res) => {
    process.exit(res.ok ? 0 : 1);
  });
}

const isCliEntrypoint =
  typeof process !== "undefined" &&
  Array.isArray(process.argv) &&
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href;

if (isCliEntrypoint) {
  handleCli();
}
