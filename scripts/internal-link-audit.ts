import fs from 'fs';
import path from 'path';

interface LinkGraph {
  [targetUrl: string]: Set<string>;
}

async function runInternalLinkAudit() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  const baseUrl = 'https://hypertunegarage.pk';

  console.log('======================================================================');
  console.log('🔗 HYPERTUNE GARAGE — INTERNAL LINK AUDIT');
  console.log('======================================================================\n');

  if (!fs.existsSync(distDir)) {
    console.error('❌ dist/ directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // 1. Read all canonical URLs from sitemap.xml
  const canonicalUrls: string[] = [];
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const locMatches = sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g);
    for (const match of locMatches) {
      canonicalUrls.push(match[1].trim());
    }
  }

  console.log(`📋 Sitemapped Canonical URLs Found: ${canonicalUrls.length}`);

  // 2. Scan all HTML files in dist/
  function getAllHtmlFiles(dir: string): string[] {
    const files: string[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...getAllHtmlFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== '404.html') {
        files.push(fullPath);
      }
    }
    return files;
  }

  const htmlFiles = getAllHtmlFiles(distDir);
  console.log(`📁 Analyzed Prerendered HTML Files: ${htmlFiles.length}\n`);

  function filePathToCanonicalUrl(filePath: string): string {
    const rel = path.relative(distDir, filePath).replace(/\\/g, '/');
    if (rel === 'index.html') {
      return `${baseUrl}/`;
    }
    const clean = rel.replace(/\/index\.html$/, '').replace(/\.html$/, '');
    return `${baseUrl}/${clean}/`;
  }

  function normalizeHref(href: string, currentUrl: string): string | null {
    if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:')) {
      return null;
    }
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith(baseUrl)) {
        return null; // External link
      }
      const urlObj = new URL(href);
      let pathname = urlObj.pathname;
      if (!pathname.endsWith('/')) pathname += '/';
      return `${baseUrl}${pathname}`;
    }
    if (href.startsWith('/')) {
      const cleanPath = href.split('?')[0].split('#')[0];
      const withTrailing = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
      return `${baseUrl}${withTrailing}`;
    }
    return null;
  }

  // Link graphs
  const incomingLinks: LinkGraph = {};
  const selfLinks: LinkGraph = {};

  for (const url of canonicalUrls) {
    incomingLinks[url] = new Set<string>();
    selfLinks[url] = new Set<string>();
  }

  for (const file of htmlFiles) {
    const sourceUrl = filePathToCanonicalUrl(file);
    const content = fs.readFileSync(file, 'utf-8');

    // Extract all <a ... href="..." ...>
    const anchorRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi;
    let match;
    while ((match = anchorRegex.exec(content)) !== null) {
      const rawHref = match[1];
      const targetUrl = normalizeHref(rawHref, sourceUrl);
      if (targetUrl && incomingLinks[targetUrl]) {
        if (sourceUrl === targetUrl) {
          selfLinks[targetUrl].add(sourceUrl);
        } else {
          incomingLinks[targetUrl].add(sourceUrl);
        }
      }
    }
  }

  // 3. Focus check on /faq/
  const faqUrl = `${baseUrl}/faq/`;
  const faqIncoming = incomingLinks[faqUrl] ? Array.from(incomingLinks[faqUrl]) : [];
  const faqSelf = selfLinks[faqUrl] ? Array.from(selfLinks[faqUrl]) : [];
  const faqInSitemap = canonicalUrls.includes(faqUrl);

  console.log('======================================================================');
  console.log('🔍 /faq/ AUDIT REPORT');
  console.log('======================================================================');
  console.log(`URL:                        ${faqUrl}`);
  console.log(`Present in sitemap:         ${faqInSitemap ? 'YES ✅' : 'NO ❌'}`);
  console.log(`Self links:                 ${faqSelf.length}`);
  console.log(`Genuine Incoming Links:     ${faqIncoming.length} ${faqIncoming.length >= 3 ? '✅ (Target >= 3)' : '❌ (Target >= 3)'}`);
  console.log('Incoming Link Sources:');
  faqIncoming.slice(0, 10).forEach((src) => {
    console.log(`  <- ${src}`);
  });
  if (faqIncoming.length > 10) {
    console.log(`  ... and ${faqIncoming.length - 10} more pages`);
  }

  // 4. Overall Orphan & Weak Check
  let trueOrphans = 0;
  const weakPages: { url: string; count: number; sources: string[] }[] = [];

  for (const url of canonicalUrls) {
    const incomingCount = incomingLinks[url]?.size || 0;
    if (incomingCount === 0) {
      trueOrphans++;
    } else if (incomingCount < 3) {
      weakPages.push({
        url,
        count: incomingCount,
        sources: Array.from(incomingLinks[url] || []),
      });
    }
  }

  console.log('\n======================================================================');
  console.log('📊 SITE-WIDE LINK GRAPH SUMMARY');
  console.log('======================================================================');
  console.log(`Total Canonical Pages:      ${canonicalUrls.length}`);
  console.log(`Total True Orphans:         ${trueOrphans}`);
  console.log(`Pages with < 3 Links:       ${weakPages.length}`);

  if (weakPages.length > 0) {
    console.log('\nWEAK PAGES (< 3 incoming links):');
    weakPages.forEach((p) => {
      console.log(`  ${p.url} (${p.count} links) <- [${p.sources.join(', ')}]`);
    });
  }

  console.log('\n======================================================================');
  if (faqIncoming.length >= 3 && trueOrphans === 0 && faqInSitemap) {
    console.log('🎉 AUDIT RESULT: PASS — All /faq/ internal linking criteria satisfied!');
    console.log('======================================================================');
    process.exit(0);
  } else {
    console.error('❌ AUDIT RESULT: FAIL');
    if (!faqInSitemap) console.error('  - /faq/ is missing from sitemap.xml');
    if (faqIncoming.length < 3) console.error(`  - /faq/ only has ${faqIncoming.length} genuine incoming links (minimum 3 required)`);
    if (trueOrphans > 0) console.error(`  - Found ${trueOrphans} true orphans`);
    console.log('======================================================================');
    process.exit(1);
  }
}

runInternalLinkAudit().catch((err) => {
  console.error('Audit execution error:', err);
  process.exit(1);
});
