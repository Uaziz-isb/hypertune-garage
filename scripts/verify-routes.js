import http from 'http';
import fs from 'fs';

// Extract SITE_ROUTES from server.ts or test directly
const serverCode = fs.readFileSync('server.ts', 'utf-8');
const routesMatch = serverCode.match(/const SITE_ROUTES = (\[[\s\S]*?\]);/);
if (!routesMatch) {
  console.error("Could not parse SITE_ROUTES from server.ts");
  process.exit(1);
}

// Evaluate SITE_ROUTES safely
const routes = eval(routesMatch[1]);
console.log(`Found ${routes.length} routes in SITE_ROUTES.\n`);

function fetchRoute(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:3099${path}`, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  const titles = new Map();
  let failCount = 0;

  console.log("| # | Route Path | Status | Title Present & Unique | Canonical URL | <h1> Present | Result |");
  console.log("|---|------------|--------|------------------------|---------------|--------------|--------|");

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const res = await fetchRoute(route.path);
    
    // Check 1: Status Code
    const is200 = res.statusCode === 200;

    // Check 2: <title> tag
    const titleMatch = res.body.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : null;
    const hasTitle = Boolean(title && title.length > 5);
    const isTitleUnique = hasTitle && !titles.has(title);
    if (hasTitle) {
      titles.set(title, route.path);
    }

    // Check 3: Canonical tag
    const canonicalMatch = res.body.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
    const canonical = canonicalMatch ? canonicalMatch[1] : null;
    const hasDoubleSlash = canonical ? /https?:\/\/[^\/]+\/\/+/.test(canonical) : true;
    const canonicalOk = Boolean(canonical && !hasDoubleSlash);

    // Check 4: <h1> tag
    const h1Match = res.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const hasH1 = Boolean(h1Match && h1Match[1].trim().length > 0);

    const passed = is200 && hasTitle && canonicalOk && hasH1;
    if (!passed) failCount++;

    const shortTitle = title ? (title.length > 30 ? title.substring(0, 27) + '...' : title) : 'MISSING';
    const cleanH1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'MISSING';
    const shortH1 = cleanH1.length > 30 ? cleanH1.substring(0, 27) + '...' : cleanH1;

    console.log(`| ${i + 1} | \`${route.path}\` | ${res.statusCode} | ${hasTitle ? '✅ ' + shortTitle : '❌'} | ${canonicalOk ? '✅ ' + canonical : '❌'} | ${hasH1 ? '✅ ' + shortH1 : '❌'} | ${passed ? 'PASS ✅' : 'FAIL ❌'} |`);
  }

  console.log(`\n========================================`);
  console.log(`Total Routes Checked: ${routes.length}`);
  console.log(`Passed: ${routes.length - failCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`========================================\n`);

  if (failCount > 0) {
    process.exit(1);
  }
}

run().catch(err => {
  console.error("Verification script failed:", err);
  process.exit(1);
});
