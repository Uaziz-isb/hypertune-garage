import fs from 'fs';
import path from 'path';
import { getSiteRoutes } from '../src/utils/routes';
import { injectSSRHtml } from '../src/utils/ssrRenderer';

async function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html does not exist. Please run "vite build" first.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');
  const routes = getSiteRoutes();
  const baseUrl = 'https://hypertunegarage.pk';

  console.log(`🚀 Starting static pre-rendering for ${routes.length} routes...`);

  let renderedCount = 0;
  const titles = new Set<string>();

  for (const route of routes) {
    const renderedHtml = injectSSRHtml(baseTemplate, route.path, baseUrl);

    // Sanity checks on rendered HTML
    const titleMatch = renderedHtml.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : '';
    if (title) {
      titles.add(title);
    }

    const hasRootContent = !/<div id=["']root["']>\s*<\/div>/i.test(renderedHtml);
    if (!hasRootContent) {
      console.warn(`⚠️ Warning: Route ${route.path} has empty <div id="root">`);
    }

    // Determine destination path
    // For '/', path is '' -> dist/index.html
    // For '/services', path is 'services' -> dist/services/index.html
    // For '/brands/toyota-repair-islamabad' -> dist/brands/toyota-repair-islamabad/index.html
    const cleanRoutePath = route.path.replace(/^\/+|\/+$/g, '');
    let targetFilePath = '';
    
    if (!cleanRoutePath) {
      targetFilePath = path.join(distDir, 'index.html');
    } else {
      const targetDir = path.join(distDir, cleanRoutePath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      targetFilePath = path.join(targetDir, 'index.html');
    }

    fs.writeFileSync(targetFilePath, renderedHtml, 'utf-8');
    renderedCount++;
  }

  console.log(`✅ Prerendered ${renderedCount} routes into dist/`);
  console.log(`✅ Total unique titles verified: ${titles.size}/${routes.length}`);
}

prerender().catch((err) => {
  console.error('❌ Error during prerendering:', err);
  process.exit(1);
});
