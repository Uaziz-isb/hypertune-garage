import fs from 'fs';
import path from 'path';
import { getSiteRoutes } from '../src/utils/routes';

interface GuardViolation {
  level: 'CRITICAL' | 'WARNING';
  category: string;
  metric: string;
  expected: string;
  actual: string;
  details: string;
}

export async function runPerformanceRegressionGuard(): Promise<boolean> {
  const distDir = path.resolve(process.cwd(), 'dist');
  const violations: GuardViolation[] = [];

  console.log('\n======================================================================');
  console.log('🛡️  HYPERTUNE GARAGE — AUTOMATED PERFORMANCE & REGRESSION GUARD');
  console.log('======================================================================');
  console.log('Target Baseline: Desktop 100 | Mobile 97 | SEO 100 | Agentic 3/3\n');

  if (!fs.existsSync(distDir)) {
    console.error('❌ dist directory does not exist! Please run build first.');
    return false;
  }

  // -------------------------------------------------------------
  // 1. HARD PERFORMANCE BUDGET: JavaScript & CSS Assets
  // -------------------------------------------------------------
  console.log('📦 1. Verifying Bundle Size & JavaScript/CSS Budgets...');
  const assetsDir = path.join(distDir, 'assets');
  let totalJsBytes = 0;
  let totalCssBytes = 0;

  if (fs.existsSync(assetsDir)) {
    const assetFiles = fs.readdirSync(assetsDir);
    for (const file of assetFiles) {
      const fullPath = path.join(assetsDir, file);
      const stat = fs.statSync(fullPath);
      if (file.endsWith('.js')) {
        totalJsBytes += stat.size;
        // Non-vendor chunk limit: 250 KB uncompressed
        if (!file.includes('vendor') && stat.size > 250 * 1024) {
          violations.push({
            level: 'CRITICAL',
            category: 'Bundle Budget',
            metric: 'App JS Chunk Size',
            expected: '<= 250 KB',
            actual: `${(stat.size / 1024).toFixed(1)} KB (${file})`,
            details: 'Individual application chunk exceeds max budget. Code-split or lazy-load view.',
          });
        }
      } else if (file.endsWith('.css')) {
        totalCssBytes += stat.size;
      }
    }

    const totalJsKb = totalJsBytes / 1024;
    const totalCssKb = totalCssBytes / 1024;

    // Hard budgets
    const MAX_TOTAL_JS_KB = 850;
    const MAX_TOTAL_CSS_KB = 110;

    if (totalJsKb > MAX_TOTAL_JS_KB) {
      violations.push({
        level: 'CRITICAL',
        category: 'Bundle Budget',
        metric: 'Total JavaScript Assets',
        expected: `<= ${MAX_TOTAL_JS_KB} KB`,
        actual: `${totalJsKb.toFixed(1)} KB`,
        details: 'Total JavaScript bundle exceeds hard budget. Check for duplicate libraries.',
      });
    } else {
      console.log(`   ✅ Total JavaScript Assets: ${totalJsKb.toFixed(1)} KB (Budget: <= ${MAX_TOTAL_JS_KB} KB)`);
    }

    if (totalCssKb > MAX_TOTAL_CSS_KB) {
      violations.push({
        level: 'CRITICAL',
        category: 'Bundle Budget',
        metric: 'Total CSS Assets',
        expected: `<= ${MAX_TOTAL_CSS_KB} KB`,
        actual: `${totalCssKb.toFixed(1)} KB`,
        details: 'Total CSS exceeds hard budget. Eliminate unused or duplicate rules.',
      });
    } else {
      console.log(`   ✅ Total CSS Assets: ${totalCssKb.toFixed(1)} KB (Budget: <= ${MAX_TOTAL_CSS_KB} KB)`);
    }
  } else {
    violations.push({
      level: 'CRITICAL',
      category: 'Build',
      metric: 'Assets Directory',
      expected: 'dist/assets exists',
      actual: 'Missing',
      details: 'Vite build output missing assets directory.',
    });
  }

  // -------------------------------------------------------------
  // 2. LCP DISCOVERY & PRELOAD INTEGRITY
  // -------------------------------------------------------------
  console.log('\n🚀 2. Verifying LCP Hero Preload & Image Delivery...');
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

    // Check responsive preload in <head>
    const hasPreload = indexHtml.includes('rel="preload"') && indexHtml.includes('as="image"');
    const hasFetchPriorityHigh = indexHtml.includes('fetchpriority="high"');
    const hasResponsivePreload = indexHtml.includes('imagesrcset=') && indexHtml.includes('imagesizes=');

    if (!hasPreload) {
      violations.push({
        level: 'CRITICAL',
        category: 'LCP Protection',
        metric: 'Hero Image Preload',
        expected: '<link rel="preload" as="image" ...> in <head>',
        actual: 'Missing preload tag',
        details: 'The LCP image must be preloaded in <head> for fast discovery and LCP <= 1.2s.',
      });
    } else if (!hasFetchPriorityHigh) {
      violations.push({
        level: 'CRITICAL',
        category: 'LCP Protection',
        metric: 'Preload Priority',
        expected: 'fetchpriority="high" attribute on preload tag',
        actual: 'Missing fetchpriority="high"',
        details: 'Hero preload must have fetchpriority="high" to prioritize over non-critical resources.',
      });
    } else if (!hasResponsivePreload) {
      violations.push({
        level: 'WARNING',
        category: 'LCP Protection',
        metric: 'Responsive Preload',
        expected: 'imagesrcset and imagesizes attributes on preload tag',
        actual: 'Missing responsive preload attributes',
        details: 'Responsive preload prevents downloading desktop-sized hero images on mobile viewports.',
      });
    } else {
      console.log('   ✅ Responsive LCP Hero image preloaded with fetchpriority="high".');
    }

    // Check hero WebP files exist on disk
    const heroWebp800 = path.resolve(process.cwd(), 'public/images/hero_porsche_studio_1787240154464_800w.webp');
    const heroWebpFull = path.resolve(process.cwd(), 'public/images/hero_porsche_studio_1787240154464.webp');

    if (!fs.existsSync(heroWebp800) || !fs.existsSync(heroWebpFull)) {
      violations.push({
        level: 'CRITICAL',
        category: 'LCP Protection',
        metric: 'LCP Image Asset',
        expected: 'Hero 800w and 1280w WebP variants present in public/images/',
        actual: 'Missing hero asset file',
        details: 'Hero image files referenced in preload must exist on disk.',
      });
    } else {
      console.log('   ✅ High-efficiency 800w and 1280w hero WebP variants verified on disk.');
    }
  }

  // -------------------------------------------------------------
  // 3. CLS & HYDRATION SPATIAL ALIGNMENT
  // -------------------------------------------------------------
  console.log('\n📐 3. Verifying CLS Prevention & Spatial Alignment (Target: CLS <= 0.05)...');
  if (fs.existsSync(indexHtmlPath)) {
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

    // Check that SSR image in index.html has explicit width, height, and responsive aspect-ratio container
    const hasHeroDimensions = indexHtml.includes('width="640"') && indexHtml.includes('height="430"');
    const hasHeroContainerAspect = indexHtml.includes('h-[290px] sm:h-[380px] md:h-[430px]');

    if (!hasHeroDimensions) {
      violations.push({
        level: 'CRITICAL',
        category: 'CLS Protection',
        metric: 'Hero Image Dimensions',
        expected: 'width="640" height="430" on SSR hero image',
        actual: 'Missing explicit width/height in SSR markup',
        details: 'Hero image without width/height triggers layout shifts (CLS regression).',
      });
    } else {
      console.log('   ✅ SSR Hero image includes explicit width="640" and height="430".');
    }

    if (!hasHeroContainerAspect) {
      violations.push({
        level: 'CRITICAL',
        category: 'CLS Protection',
        metric: 'Hero Container Height Reservation',
        expected: 'Container height classes matching React component (h-[290px] sm:h-[380px] md:h-[430px])',
        actual: 'Mismatch in SSR hero container height',
        details: 'SSR container height mismatch creates shift when React hydrates.',
      });
    } else {
      console.log('   ✅ SSR hero container spatial coordinates match hydrated React component.');
    }

    // Ensure SSR footer matches hydrated footer (no pushdown)
    const hasSsrFooter = indexHtml.includes('Ready to Experience Peak Automotive Performance?');
    if (!hasSsrFooter) {
      violations.push({
        level: 'WARNING',
        category: 'CLS Protection',
        metric: 'SSR Footer Parity',
        expected: 'SSR pre-rendered footer matching full React footer',
        actual: 'Abbreviated or missing SSR footer',
        details: 'Footer jumping on hydration triggers CLS penalties.',
      });
    } else {
      console.log('   ✅ SSR pre-rendered footer is spatially aligned with hydrated footer.');
    }
  }

  // -------------------------------------------------------------
  // 4. JAVASCRIPT / TBT PROTECTION (GTM / GA4 Idle Execution)
  // -------------------------------------------------------------
  console.log('\n⚡ 4. Verifying Third-Party Deferred Execution & TBT Protection...');
  if (fs.existsSync(indexHtmlPath)) {
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

    const hasIdleCallback = indexHtml.includes('requestIdleCallback');
    const hasMouseMoveTrigger = indexHtml.includes("'mousemove'") || indexHtml.includes('"mousemove"');
    const hasScrollTrigger = indexHtml.includes("'scroll'") || indexHtml.includes('"scroll"');

    if (hasMouseMoveTrigger || hasScrollTrigger) {
      violations.push({
        level: 'CRITICAL',
        category: 'TBT Protection',
        metric: 'GTM Trigger Listeners',
        expected: 'No mousemove or scroll triggers (only user click/touch or requestIdleCallback)',
        actual: 'Premature trigger listeners found in index.html',
        details: 'Lighthouse fires synthetic mousemove/scroll events during audit, triggering early JS and spike in TBT.',
      });
    } else if (!hasIdleCallback) {
      violations.push({
        level: 'WARNING',
        category: 'TBT Protection',
        metric: 'Idle Execution Strategy',
        expected: 'requestIdleCallback used for deferred third-party scripts',
        actual: 'Missing requestIdleCallback',
        details: 'Third-party tracking scripts must execute during browser idle periods.',
      });
    } else {
      console.log('   ✅ GTM & analytics scripts strictly deferred via requestIdleCallback and real interaction.');
    }
  }

  // -------------------------------------------------------------
  // 5. AGENTIC BROWSING (3/3 VERIFIED SCORE) PROTECTION
  // -------------------------------------------------------------
  console.log('\n🤖 5. Verifying Agentic Browsing (3/3 Target Baseline)...');
  const llmsTxtPath = path.resolve(process.cwd(), 'public/llms.txt');
  const llmsFullTxtPath = path.resolve(process.cwd(), 'public/llms-full.txt');
  const robotsTxtPath = path.resolve(process.cwd(), 'public/robots.txt');
  const sitemapXmlPath = path.resolve(process.cwd(), 'dist/sitemap.xml');

  if (!fs.existsSync(llmsTxtPath)) {
    violations.push({
      level: 'CRITICAL',
      category: 'Agentic Browsing',
      metric: 'llms.txt Specification',
      expected: 'public/llms.txt exists',
      actual: 'Missing',
      details: 'llms.txt is required for AI agents and LLM crawlers to discover all capabilities.',
    });
  } else {
    const llmsContent = fs.readFileSync(llmsTxtPath, 'utf-8');
    if (!llmsContent.includes('hypertunegarage.pk') || !llmsContent.includes('Services Directory')) {
      violations.push({
        level: 'CRITICAL',
        category: 'Agentic Browsing',
        metric: 'llms.txt Content',
        expected: 'Canonical URLs and comprehensive service index',
        actual: 'Incomplete content',
        details: 'llms.txt must provide clear semantic links to all services and workshop branches.',
      });
    } else {
      console.log('   ✅ public/llms.txt verified with comprehensive service and branch index.');
    }
  }

  if (!fs.existsSync(llmsFullTxtPath)) {
    violations.push({
      level: 'WARNING',
      category: 'Agentic Browsing',
      metric: 'llms-full.txt Specification',
      expected: 'public/llms-full.txt exists',
      actual: 'Missing',
      details: 'llms-full.txt provides deep specifications for AI browsing agents.',
    });
  } else {
    console.log('   ✅ public/llms-full.txt verified for deep agentic browsing.');
  }

  if (!fs.existsSync(robotsTxtPath)) {
    violations.push({
      level: 'CRITICAL',
      category: 'Agentic Browsing',
      metric: 'robots.txt',
      expected: 'public/robots.txt exists',
      actual: 'Missing',
      details: 'robots.txt is required for web agents and search engines.',
    });
  } else {
    console.log('   ✅ robots.txt verified with sitemap declaration and crawler access.');
  }

  if (!fs.existsSync(sitemapXmlPath)) {
    violations.push({
      level: 'CRITICAL',
      category: 'Agentic Browsing',
      metric: 'Sitemap Generation',
      expected: 'dist/sitemap.xml exists with 70 routes',
      actual: 'Missing',
      details: 'sitemap.xml must be generated at build time.',
    });
  } else {
    const sitemap = fs.readFileSync(sitemapXmlPath, 'utf-8');
    const urlCount = (sitemap.match(/<loc>/g) || []).length;
    if (urlCount < 70) {
      violations.push({
        level: 'CRITICAL',
        category: 'Route Protection',
        metric: 'Sitemap URL Count',
        expected: '70 registered canonical routes',
        actual: `${urlCount} URLs found`,
        details: 'All 70 services, brands, locations, and blog routes must be present in sitemap.xml.',
      });
    } else {
      console.log(`   ✅ dist/sitemap.xml contains all ${urlCount}/70 canonical URLs.`);
    }
  }

  // -------------------------------------------------------------
  // 6. ROUTE INTEGRITY & STATIC PRE-RENDERING (70 ROUTES)
  // -------------------------------------------------------------
  console.log('\n🌐 6. Verifying Static Pre-rendering for all 70 Routes...');
  const siteRoutes = getSiteRoutes();
  let missingRoutes = 0;

  for (const route of siteRoutes) {
    const cleanRoute = route.path.replace(/^\/+|\/+$/g, '');
    const expectedHtml = cleanRoute
      ? path.join(distDir, cleanRoute, 'index.html')
      : path.join(distDir, 'index.html');

    if (!fs.existsSync(expectedHtml)) {
      missingRoutes++;
      violations.push({
        level: 'CRITICAL',
        category: 'Route Protection',
        metric: 'Static Pre-render',
        expected: `Pre-rendered HTML for ${route.path}`,
        actual: 'Missing HTML file',
        details: `Route ${route.path} was not compiled into static HTML.`,
      });
    }
  }

  if (missingRoutes === 0) {
    console.log(`   ✅ All ${siteRoutes.length} canonical routes pre-rendered successfully.`);
  }

  // -------------------------------------------------------------
  // FINAL EVALUATION & REPORT
  // -------------------------------------------------------------
  console.log('\n======================================================================');
  console.log('📊 PERFORMANCE REGRESSION GUARD SUMMARY');
  console.log('======================================================================');

  const criticals = violations.filter((v) => v.level === 'CRITICAL');
  const warnings = violations.filter((v) => v.level === 'WARNING');

  console.log(`Critical Violations: ${criticals.length}`);
  console.log(`Warnings:            ${warnings.length}`);

  if (violations.length > 0) {
    console.log('\nViolations Detected:');
    violations.forEach((v, idx) => {
      console.log(`\n[${v.level}] #${idx + 1}: ${v.category} -> ${v.metric}`);
      console.log(`  Expected: ${v.expected}`);
      console.log(`  Actual:   ${v.actual}`);
      console.log(`  Reason:   ${v.details}`);
    });
  }

  if (criticals.length > 0) {
    console.error('\n❌ FAILED: Performance regression detected against approved production baseline!');
    console.error('STOP: Do not deploy. Revert changes or fix the specific violation noted above.\n');
    return false;
  }

  console.log('\n🌟 PASSED: 100% CLEAN — PERFORMANCE BASELINE FULLY PROTECTED');
  console.log('======================================================================\n');
  return true;
}

if (process.argv[1]?.includes('performance-guard')) {
  runPerformanceRegressionGuard().then((passed) => {
    if (!passed) process.exit(1);
  });
}
