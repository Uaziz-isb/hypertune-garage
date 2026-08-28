import fs from 'fs';
import path from 'path';
import { getSiteRoutes } from '../src/utils/routes';

interface AuditIssue {
  type: 'error' | 'warning' | 'info';
  category: string;
  route: string;
  message: string;
}

async function runSeoAudit() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const routes = getSiteRoutes();
  const issues: AuditIssue[] = [];

  console.log('======================================================================');
  console.log('🏁 HYPERTUNE GARAGE — COMPREHENSIVE PRODUCTION SEO & SSR AUDIT');
  console.log('======================================================================\n');

  // 1. Robots.txt Audit
  console.log('📋 1. Auditing robots.txt & Crawl Directives...');
  const robotsPath = path.join(distDir, 'robots.txt');
  const publicRobotsPath = path.resolve(process.cwd(), 'public/robots.txt');
  const activeRobotsPath = fs.existsSync(robotsPath) ? robotsPath : publicRobotsPath;

  if (!fs.existsSync(activeRobotsPath)) {
    issues.push({
      type: 'error',
      category: 'Robots.txt',
      route: '/robots.txt',
      message: 'robots.txt file is missing from dist/ and public/!',
    });
  } else {
    const robotsContent = fs.readFileSync(activeRobotsPath, 'utf-8');
    if (!robotsContent.includes('Sitemap:')) {
      issues.push({
        type: 'error',
        category: 'Robots.txt',
        route: '/robots.txt',
        message: 'robots.txt is missing Sitemap declaration.',
      });
    }
    if (!robotsContent.includes('User-agent:')) {
      issues.push({
        type: 'error',
        category: 'Robots.txt',
        route: '/robots.txt',
        message: 'robots.txt is missing User-agent declaration.',
      });
    }
    console.log('   ✅ robots.txt is present and declares User-agent and Sitemap.');
  }

  // 2. Sitemap XML Audit
  console.log('\n🗺️  2. Auditing sitemap.xml & Index Coverage...');
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    issues.push({
      type: 'error',
      category: 'Sitemap',
      route: '/sitemap.xml',
      message: 'sitemap.xml is missing from dist/!',
    });
  } else {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const urlMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
    console.log(`   ✅ sitemap.xml contains ${urlMatches.length} indexable URLs.`);

    if (urlMatches.length !== routes.length) {
      issues.push({
        type: 'warning',
        category: 'Sitemap',
        route: '/sitemap.xml',
        message: `Sitemap URL count (${urlMatches.length}) does not match total registered routes (${routes.length}).`,
      });
    }

    // Check for HTTP vs HTTPS or domain mismatches
    urlMatches.forEach((u) => {
      if (!u.startsWith('https://hypertunegarage.pk')) {
        issues.push({
          type: 'error',
          category: 'Sitemap',
          route: u,
          message: `Sitemap contains non-canonical or non-HTTPS URL: ${u}`,
        });
      }
    });
  }

  // 3. Deep Route-by-Route HTML, Metadata, Headings, and Schema Audit
  console.log(`\n🔍 3. Performing Deep Audit on all ${routes.length} pre-rendered HTML routes...`);

  const seenTitles = new Map<string, string>();
  const seenCanonical = new Map<string, string>();
  const seenDescriptions = new Map<string, string>();

  let totalImagesAudited = 0;
  let totalImagesMissingAlt = 0;
  let totalSchemasAudited = 0;

  for (const route of routes) {
    const cleanRoutePath = route.path.replace(/^\/+|\/+$/g, '');
    const htmlFilePath = cleanRoutePath
      ? path.join(distDir, cleanRoutePath, 'index.html')
      : path.join(distDir, 'index.html');

    if (!fs.existsSync(htmlFilePath)) {
      issues.push({
        type: 'error',
        category: 'Pre-rendering',
        route: route.path,
        message: `Missing pre-rendered static HTML file at ${htmlFilePath}`,
      });
      continue;
    }

    const html = fs.readFileSync(htmlFilePath, 'utf-8');

    // A. Title Tag Audit
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : '';

    if (!title) {
      issues.push({
        type: 'error',
        category: 'Title',
        route: route.path,
        message: 'Missing or empty <title> tag.',
      });
    } else {
      if (seenTitles.has(title)) {
        issues.push({
          type: 'error',
          category: 'Duplicate Title',
          route: route.path,
          message: `Duplicate title: "${title}" (Already used on ${seenTitles.get(title)})`,
        });
      } else {
        seenTitles.set(title, route.path);
      }

      if (title.length < 25) {
        issues.push({
          type: 'warning',
          category: 'Title Length',
          route: route.path,
          message: `Title is too short (${title.length} chars): "${title}"`,
        });
      } else if (title.length > 75) {
        issues.push({
          type: 'info',
          category: 'Title Length',
          route: route.path,
          message: `Title may be truncated in search snippets (${title.length} chars): "${title}"`,
        });
      }
    }

    // B. Meta Description Audit
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
    const desc = descMatch ? descMatch[1].trim() : '';

    if (!desc) {
      issues.push({
        type: 'error',
        category: 'Meta Description',
        route: route.path,
        message: 'Missing <meta name="description"> tag.',
      });
    } else {
      if (seenDescriptions.has(desc)) {
        issues.push({
          type: 'warning',
          category: 'Duplicate Description',
          route: route.path,
          message: `Duplicate meta description (Also on ${seenDescriptions.get(desc)})`,
        });
      } else {
        seenDescriptions.set(desc, route.path);
      }

      if (desc.length < 50) {
        issues.push({
          type: 'warning',
          category: 'Description Length',
          route: route.path,
          message: `Meta description is too short (${desc.length} chars).`,
        });
      } else if (desc.length > 180) {
        issues.push({
          type: 'info',
          category: 'Description Length',
          route: route.path,
          message: `Meta description is long (${desc.length} chars) and may be truncated by Google.`,
        });
      }
    }

    // C. Canonical URL Audit
    const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
    const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

    if (!canonical) {
      issues.push({
        type: 'error',
        category: 'Canonical',
        route: route.path,
        message: 'Missing canonical link tag.',
      });
    } else {
      const expectedCanonical =
        route.path === '/'
          ? 'https://hypertunegarage.pk/'
          : `https://hypertunegarage.pk${route.path}`;

      if (canonical !== expectedCanonical) {
        issues.push({
          type: 'warning',
          category: 'Canonical Mismatch',
          route: route.path,
          message: `Canonical URL "${canonical}" does not match expected "${expectedCanonical}".`,
        });
      }

      if (seenCanonical.has(canonical)) {
        issues.push({
          type: 'error',
          category: 'Duplicate Canonical',
          route: route.path,
          message: `Duplicate canonical URL "${canonical}" on ${seenCanonical.get(canonical)}`,
        });
      } else {
        seenCanonical.set(canonical, route.path);
      }
    }

    // D. OpenGraph & Social Cards
    const ogTitle = html.match(/<meta\s+property=["']og:title["']\s+content=["'](.*?)["']/i);
    const ogDesc = html.match(/<meta\s+property=["']og:description["']\s+content=["'](.*?)["']/i);
    const ogUrl = html.match(/<meta\s+property=["']og:url["']\s+content=["'](.*?)["']/i);
    const twCard = html.match(/<meta\s+name=["']twitter:card["']\s+content=["'](.*?)["']/i);

    if (!ogTitle) issues.push({ type: 'warning', category: 'OpenGraph', route: route.path, message: 'Missing og:title' });
    if (!ogDesc) issues.push({ type: 'warning', category: 'OpenGraph', route: route.path, message: 'Missing og:description' });
    if (!ogUrl) issues.push({ type: 'warning', category: 'OpenGraph', route: route.path, message: 'Missing og:url' });
    if (!twCard) issues.push({ type: 'info', category: 'TwitterCard', route: route.path, message: 'Missing twitter:card' });

    // E. JSON-LD Structured Data Schema Audit
    const schemaMatches = [...html.matchAll(/<script type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    if (schemaMatches.length === 0) {
      issues.push({
        type: 'warning',
        category: 'Structured Data',
        route: route.path,
        message: 'No JSON-LD schema found on page.',
      });
    } else {
      totalSchemasAudited += schemaMatches.length;
      for (const sm of schemaMatches) {
        try {
          const parsed = JSON.parse(sm[1].trim());
          if (!parsed['@context'] || !parsed['@type']) {
            issues.push({
              type: 'warning',
              category: 'Structured Data',
              route: route.path,
              message: 'JSON-LD schema is missing @context or @type.',
            });
          }
        } catch {
          issues.push({
            type: 'error',
            category: 'Structured Data',
            route: route.path,
            message: 'Invalid JSON in JSON-LD schema tag.',
          });
        }
      }
    }

    // F. DOM Semantic Structure & SSR Body Content
    const rootMatch = html.match(/<div id=["']root["']>([\s\S]*?)<\/div>/i);
    if (!rootMatch || rootMatch[1].trim().length < 100) {
      issues.push({
        type: 'error',
        category: 'SSR Prerendering',
        route: route.path,
        message: 'Body content is empty or unrendered in <div id="root">!',
      });
    }

    // Heading tags
    const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
    if (h1Matches.length === 0) {
      issues.push({
        type: 'warning',
        category: 'Headings (H1)',
        route: route.path,
        message: 'No <h1> heading found on page.',
      });
    } else if (h1Matches.length > 1) {
      issues.push({
        type: 'info',
        category: 'Headings (H1)',
        route: route.path,
        message: `Page has multiple (${h1Matches.length}) <h1> headings. Best practice is 1 primary <h1> per page.`,
      });
    }

    // Image alt tag audit
    const imgMatches = [...html.matchAll(/<img\b([^>]*)>/gi)];
    for (const im of imgMatches) {
      totalImagesAudited++;
      const imgAttrs = im[1];
      const hasAlt = /alt=["'][^"']*["']/i.test(imgAttrs);
      if (!hasAlt) {
        totalImagesMissingAlt++;
        issues.push({
          type: 'warning',
          category: 'Image Alt Tag',
          route: route.path,
          message: `Image tag missing alt attribute: ${im[0].slice(0, 80)}...`,
        });
      }
    }
  }

  // Summary Metrics & Reporting
  console.log('\n======================================================================');
  console.log('📊 AUDIT SUMMARY & METRICS');
  console.log('======================================================================');
  console.log(`Total Pages Audited:               ${routes.length}`);
  console.log(`Unique Titles:                     ${seenTitles.size}/${routes.length}`);
  console.log(`Unique Meta Descriptions:          ${seenDescriptions.size}/${routes.length}`);
  console.log(`Unique Canonical URLs:             ${seenCanonical.size}/${routes.length}`);
  console.log(`JSON-LD Schema Blocks Validated:   ${totalSchemasAudited}`);
  console.log(`Images Evaluated in SSR:           ${totalImagesAudited}`);
  console.log(`Images Missing Alt Attributes:     ${totalImagesMissingAlt}`);

  const errors = issues.filter((i) => i.type === 'error');
  const warnings = issues.filter((i) => i.type === 'warning');
  const infos = issues.filter((i) => i.type === 'info');

  console.log(`\nIssues Summary:`);
  console.log(`  🔴 Errors:   ${errors.length}`);
  console.log(`  🟡 Warnings: ${warnings.length}`);
  console.log(`  🔵 Infos:    ${infos.length}`);

  if (errors.length > 0) {
    console.log('\n🔴 CRITICAL ERRORS:');
    errors.forEach((e, idx) => {
      console.log(`  ${idx + 1}. [${e.category}] ${e.route} - ${e.message}`);
    });
  }

  if (warnings.length > 0) {
    console.log('\n🟡 WARNINGS:');
    warnings.slice(0, 15).forEach((w, idx) => {
      console.log(`  ${idx + 1}. [${w.category}] ${w.route} - ${w.message}`);
    });
    if (warnings.length > 15) {
      console.log(`  ... and ${warnings.length - 15} more warnings.`);
    }
  }

  if (infos.length > 0) {
    console.log('\n🔵 OPTIMIZATION NOTICES:');
    infos.slice(0, 10).forEach((n, idx) => {
      console.log(`  ${idx + 1}. [${n.category}] ${n.route} - ${n.message}`);
    });
    if (infos.length > 10) {
      console.log(`  ... and ${infos.length - 10} more notices.`);
    }
  }

  console.log('\n======================================================================');
  if (errors.length === 0 && warnings.length === 0) {
    console.log('🌟 EXCELLENT: 100% CLEAN TECHNICAL SEO AUDIT SCORE (100 / 100)');
  } else if (errors.length === 0) {
    console.log('✅ PASSING: NO CRITICAL ERRORS FOUND. Minor suggestions noted.');
  } else {
    console.log('❌ ACTION REQUIRED: Please resolve the critical errors above.');
  }
  console.log('======================================================================\n');
}

runSeoAudit().catch((err) => {
  console.error('Audit execution error:', err);
  process.exit(1);
});
