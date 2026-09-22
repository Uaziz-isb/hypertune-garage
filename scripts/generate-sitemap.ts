import fs from 'fs';
import path from 'path';
import { getSiteRoutes, SiteRoute } from '../src/utils/routes';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function generateSitemapXml(baseUrl: string = 'https://hypertunegarage.pk'): string {
  const routes = getSiteRoutes();
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  routes.forEach((route) => {
    const rawLoc = route.path === '/' ? `${baseUrl}/` : `${baseUrl}${route.path}`;
    const loc = escapeXml(rawLoc);
    xml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  xml += `</urlset>\n`;
  return xml;
}

// Recursively find all pre-rendered HTML files in dist/
function getPrerenderedRoutes(dir: string, baseDir: string = dir): string[] {
  const routes: string[] = [];
  if (!fs.existsSync(dir)) return routes;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      routes.push(...getPrerenderedRoutes(fullPath, baseDir));
    } else if (entry.isFile() && entry.name === 'index.html') {
      const relPath = path.relative(baseDir, path.dirname(fullPath));
      if (!relPath || relPath === '.') {
        routes.push('/');
      } else {
        routes.push(`/${relPath.replace(/\\/g, '/')}/`);
      }
    }
  }
  return routes;
}

async function run() {
  const baseUrl = 'https://hypertunegarage.pk';
  const distDir = path.resolve(process.cwd(), 'dist');
  const publicDir = path.resolve(process.cwd(), 'public');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const xml = generateSitemapXml(baseUrl);
  const distSitemapPath = path.join(distDir, 'sitemap.xml');
  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');

  fs.writeFileSync(distSitemapPath, xml, 'utf-8');
  fs.writeFileSync(publicSitemapPath, xml, 'utf-8');

  // --- DIAGNOSTIC COMPARISON & SITEMAP AUDIT ---
  const routes = getSiteRoutes();
  const prerenderedRoutes = getPrerenderedRoutes(distDir);
  const sitemapUrls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const sitemapPathSet = new Set(
    sitemapUrls.map((u) => {
      try {
        const parsed = new URL(u);
        return parsed.pathname;
      } catch {
        return u;
      }
    })
  );

  // Compare Pre-rendered Routes vs Sitemap URLs
  const prerenderedCount = prerenderedRoutes.length;
  const sitemapCount = sitemapUrls.length;

  const missingFromSitemap: string[] = [];
  const excludedByRule: { route: string; reason: string }[] = [];

  // Inspect pre-rendered routes for indexability
  for (const prRoute of prerenderedRoutes) {
    if (!sitemapPathSet.has(prRoute)) {
      // Check if intentionally excluded
      const cleanPath = prRoute.replace(/^\/+|\/+$/g, '');
      const htmlPath = cleanPath
        ? path.join(distDir, cleanPath, 'index.html')
        : path.join(distDir, 'index.html');
      
      let isNoindex = false;
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf-8');
        if (/name=["']robots["'][^>]*noindex/i.test(html)) {
          isNoindex = true;
        }
      }

      if (isNoindex) {
        excludedByRule.push({ route: prRoute, reason: 'noindex' });
      } else {
        missingFromSitemap.push(prRoute);
      }
    }
  }

  // Also check 404.html exclusion
  const has404 = fs.existsSync(path.join(distDir, '404.html'));
  if (has404) {
    excludedByRule.push({ route: '/404.html', reason: 'error page (non-indexable)' });
  }

  // Redirects from vercel.json
  const vercelJsonPath = path.resolve(process.cwd(), 'vercel.json');
  if (fs.existsSync(vercelJsonPath)) {
    try {
      const vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'));
      if (Array.isArray(vercelConfig.redirects)) {
        vercelConfig.redirects.forEach((r: { source: string }) => {
          excludedByRule.push({ route: r.source, reason: '301 permanent redirect' });
        });
      }
    } catch {
      // Ignore if vercel.json parsing fails
    }
  }

  // --- QUALITY & INTEGRITY CHECKS ---
  let duplicateUrls = 0;
  let invalidUrls = 0;
  let stagingUrls = 0;
  let httpUrls = 0;
  let queryOrHashUrls = 0;
  let redirectUrlsInSitemap = 0;
  let xmlEscapingErrors = 0;

  const seenUrls = new Set<string>();
  for (const url of sitemapUrls) {
    // 1. Duplicate check
    if (seenUrls.has(url)) {
      duplicateUrls++;
    }
    seenUrls.add(url);

    // 2. Domain & Protocol check
    if (url.startsWith('http://')) {
      httpUrls++;
      invalidUrls++;
    }
    if (!url.startsWith(baseUrl)) {
      invalidUrls++;
    }
    if (url.includes('ai.studio') || url.includes('localhost') || url.includes('127.0.0.1')) {
      stagingUrls++;
      invalidUrls++;
    }

    // 3. Trailing slash convention & format
    const pathPart = url.replace(baseUrl, '');
    if (!pathPart.endsWith('/')) {
      invalidUrls++;
    }

    // 4. Query parameters or hash fragments
    if (url.includes('?') || url.includes('#')) {
      queryOrHashUrls++;
      invalidUrls++;
    }

    // 5. Redirect URLs inside sitemap
    if (url.includes('/booking/') && !url.includes('/book-appointment/')) {
      redirectUrlsInSitemap++;
      invalidUrls++;
    }

    // 6. XML escaping verification
    if (url.includes('&') && !url.includes('&amp;')) {
      xmlEscapingErrors++;
      invalidUrls++;
    }
  }

  console.log('======================================================================');
  console.log('🗺️  HYPERTUNE GARAGE — PRODUCTION SITEMAP GENERATION & AUDIT');
  console.log('======================================================================');
  console.log('DIAGNOSTIC ROUTE COMPARISON:');
  console.log(`PRE-RENDERED ROUTES: ${prerenderedCount}`);
  console.log(`SITEMAP URLS: ${sitemapCount}`);
  console.log(`MISSING FROM SITEMAP: ${missingFromSitemap.length}`);
  console.log(`EXCLUDED BY RULE: ${excludedByRule.length}`);

  if (excludedByRule.length > 0) {
    console.log('\nDocumented Exclusions:');
    excludedByRule.forEach((e) => {
      console.log(`  ${e.route} → ${e.reason}`);
    });
  }

  if (missingFromSitemap.length > 0) {
    console.error('\n❌ ERROR: Unhandled missing routes in sitemap:');
    missingFromSitemap.forEach((r) => console.error(`  - ${r}`));
    process.exit(1);
  }

  console.log('\nSITEMAP VALIDATION METRICS:');
  console.log(`Static routes: ${prerenderedCount}`);
  console.log(`Indexable canonical routes: ${routes.length}`);
  console.log(`Sitemap URLs: ${sitemapCount}`);
  console.log(`Missing indexable routes: ${missingFromSitemap.length}`);
  console.log(`Duplicate sitemap URLs: ${duplicateUrls}`);
  console.log(`Invalid sitemap URLs: ${invalidUrls}`);
  console.log('======================================================================\n');

  if (duplicateUrls > 0 || invalidUrls > 0 || sitemapCount !== routes.length) {
    console.error('❌ Sitemap quality validation failed!');
    process.exit(1);
  }

  console.log(`✅ sitemap.xml successfully verified: all ${sitemapCount} canonical indexable URLs synced.`);
  console.log(`📁 Saved to ${distSitemapPath} & ${publicSitemapPath}`);
}

run().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});

