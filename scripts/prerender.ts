// Post-build static prerendering.
//
// Vercel's default Vite deployment serves `dist/` as static files and does NOT run
// server.ts (there's no Node server process on Vercel's static hosting). That means
// the request-time SSR injection in server.ts (injectSSRMeta) never executes in
// production — every crawler currently gets a bare `<div id="root"></div>` shell.
//
// This script reuses the exact same rendering functions (getRouteMetadataAndSchema,
// renderSSRBody) but runs them once at BUILD TIME for every known route, writing a
// fully-rendered static HTML file per route (dist/<route>/index.html). Vercel serves
// these as plain static files — no serverless function, no cold start, works with the
// existing vercel.json (trailingSlash: true + SPA fallback) unchanged.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRouteMetadataAndSchema, renderSSRBody } from '../src/utils/ssrRenderer';
import { servicesData } from '../src/data/servicesData';
import { brandsData } from '../src/data/brandsData';
import { locationsData } from '../src/data/locationsData';
import { blogData } from '../src/data/blogData';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const baseUrl = 'https://hypertunegarage.pk';

const staticRoutes = [
  '/', '/about/', '/services/', '/brands/', '/locations/', '/gallery/',
  '/testimonials/', '/faq/', '/contact/', '/blog/', '/warranty-specs/',
  '/privacy-policy/', '/terms-conditions/', '/sitemap/',
];

const routes = [
  ...staticRoutes,
  ...servicesData.map((s) => `/services/${s.slug}/`),
  ...brandsData.map((b) => `/brands/${b.slug}/`),
  ...locationsData.map((l) => `/locations/${l.slug}/`),
  ...blogData.map((p) => `/blog/${p.slug}/`),
];

function injectSSRMeta(htmlTemplate, cleanPath) {
  const metaInfo = getRouteMetadataAndSchema(cleanPath, baseUrl);
  const ssrBodyHtml = renderSSRBody(cleanPath, baseUrl);

  const schemaScripts = metaInfo.schemas
    .map((s, idx) => `<script type="application/ld+json" id="server-schema-${idx}">\n${JSON.stringify(s, null, 2)}\n</script>`)
    .join('\n');

  let html = htmlTemplate;
  html = html.replace(/<title>.*?<\/title>/i, `<title>${metaInfo.title}</title>`);
  html = html.replace(
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${metaInfo.description.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${metaInfo.canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${metaInfo.title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${metaInfo.description.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${metaInfo.canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${metaInfo.title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${metaInfo.description.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace('</head>', `${schemaScripts}\n  </head>`);
  html = html.replace(
    /<div id=["']root["']>\s*<\/div>/i,
    `<div id="root">${ssrBodyHtml}</div>`
  );
  return html;
}

function run() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('[prerender] dist/index.html not found — run `vite build` first.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');
  let count = 0;

  for (const route of routes) {
    const html = injectSSRMeta(template, route);
    const outDir = route === '/' ? distDir : path.join(distDir, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
    count++;
  }
  console.log(`[prerender] Wrote ${count} static, SEO-rendered pages to dist/`);
}

run();
