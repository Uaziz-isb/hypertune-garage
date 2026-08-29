import fs from 'fs';
import path from 'path';
import { getSiteRoutes } from '../src/utils/routes';
import { servicesData } from '../src/data/servicesData';
import { brandsData } from '../src/data/brandsData';
import { locationsData } from '../src/data/locationsData';
import { blogData } from '../src/data/blogData';

async function verifyBuild() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const routes = getSiteRoutes();
  const sitemapPath = path.join(distDir, 'sitemap.xml');

  console.log('=================================================================');
  console.log('🔍 VERIFYING BUILD ARTIFACTS, PRERENDERED HTML & SITEMAP');
  console.log('=================================================================');

  if (!fs.existsSync(distDir)) {
    console.error('❌ dist directory does not exist!');
    process.exit(1);
  }

  // 1. Verify Sitemap
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ dist/sitemap.xml does not exist!');
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  console.log(`✅ dist/sitemap.xml found (${(sitemapContent.length / 1024).toFixed(2)} KB)`);

  // Check every data source in sitemap
  let sitemapMissing = 0;
  servicesData.forEach((s) => {
    const loc = `https://hypertunegarage.pk/services/${s.slug}`;
    if (!sitemapContent.includes(loc)) {
      console.error(`❌ Sitemap missing service: ${loc}`);
      sitemapMissing++;
    }
  });

  brandsData.forEach((b) => {
    const loc = `https://hypertunegarage.pk/brands/${b.slug}`;
    if (!sitemapContent.includes(loc)) {
      console.error(`❌ Sitemap missing brand: ${loc}`);
      sitemapMissing++;
    }
  });

  locationsData.forEach((l) => {
    const loc = `https://hypertunegarage.pk/locations/${l.slug}`;
    if (!sitemapContent.includes(loc)) {
      console.error(`❌ Sitemap missing location: ${loc}`);
      sitemapMissing++;
    }
  });

  blogData.forEach((p) => {
    const loc = `https://hypertunegarage.pk/blog/${p.slug}`;
    if (!sitemapContent.includes(loc)) {
      console.error(`❌ Sitemap missing blog post: ${loc}`);
      sitemapMissing++;
    }
  });

  if (sitemapMissing === 0) {
    console.log(`✅ dist/sitemap.xml successfully verified: Contains all ${servicesData.length} services, ${brandsData.length} brands, ${locationsData.length} locations, and ${blogData.length} blog posts (Total: ${routes.length} URLs)`);
  } else {
    console.error(`❌ Sitemap validation failed with ${sitemapMissing} missing entries!`);
    process.exit(1);
  }

  // 2. Verify Pre-rendered HTML Files
  console.log('\n📄 Verifying pre-rendered HTML files per route in dist/:');
  const seenTitles = new Map<string, string>();
  let htmlErrors = 0;

  for (const route of routes) {
    const cleanRoutePath = route.path.replace(/^\/+|\/+$/g, '');
    const htmlFilePath = cleanRoutePath
      ? path.join(distDir, cleanRoutePath, 'index.html')
      : path.join(distDir, 'index.html');

    if (!fs.existsSync(htmlFilePath)) {
      console.error(`❌ Missing pre-rendered file: ${htmlFilePath}`);
      htmlErrors++;
      continue;
    }

    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

    // Check Title
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : '';
    if (!title || title.length < 5) {
      console.error(`❌ Invalid or missing <title> in ${htmlFilePath}`);
      htmlErrors++;
    } else {
      if (seenTitles.has(title)) {
        console.error(`❌ Duplicate <title> found in ${route.path}: "${title}" (Already used by ${seenTitles.get(title)})`);
        htmlErrors++;
      } else {
        seenTitles.set(title, route.path);
      }
    }

    // Check Meta Description
    const metaDescMatch = htmlContent.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
    const metaDesc = metaDescMatch ? metaDescMatch[1] : '';
    if (!metaDesc || metaDesc.length < 10) {
      console.error(`❌ Missing or short <meta name="description"> in ${htmlFilePath}`);
      htmlErrors++;
    }

    // Check Rendered Body inside #root (must not be bare shell)
    const rootMatch = htmlContent.match(/<div id=["']root["']>([\s\S]*?)<\/div>/i);
    if (!rootMatch || rootMatch[1].trim().length < 50) {
      console.error(`❌ Bare or empty <div id="root"> shell in ${htmlFilePath}`);
      htmlErrors++;
    }
  }

  if (htmlErrors === 0) {
    console.log(`✅ All ${routes.length} pre-rendered HTML files in dist/ passed verification!`);
    console.log(`   - Unique <title> on all ${routes.length} pages`);
    console.log(`   - Valid <meta name="description"> on all ${routes.length} pages`);
    console.log(`   - Rich semantic HTML rendered inside <div id="root"> on all ${routes.length} pages`);
  } else {
    console.error(`❌ Pre-rendered HTML validation failed with ${htmlErrors} errors!`);
    process.exit(1);
  }

  console.log('\n=================================================================');
  console.log('🎉 ALL SSR PRE-RENDER & SITEMAP VERIFICATIONS PASSED 100%');
  console.log('=================================================================\n');
}

verifyBuild().catch((err) => {
  console.error('❌ Verification script crashed:', err);
  process.exit(1);
});
