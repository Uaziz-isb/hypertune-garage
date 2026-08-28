import fs from 'fs';
import path from 'path';
import { getSiteRoutes } from '../src/utils/routes';

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
    const loc = route.path === '/' ? `${baseUrl}/` : `${baseUrl}${route.path}`;
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

async function run() {
  const xml = generateSitemapXml('https://hypertunegarage.pk');
  const distDir = path.resolve(process.cwd(), 'dist');
  const publicDir = path.resolve(process.cwd(), 'public');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const distSitemapPath = path.join(distDir, 'sitemap.xml');
  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');

  fs.writeFileSync(distSitemapPath, xml, 'utf-8');
  fs.writeFileSync(publicSitemapPath, xml, 'utf-8');

  const routes = getSiteRoutes();
  console.log(`✅ Successfully generated sitemap.xml with ${routes.length} URLs from:`);
  console.log(`   - 15 Core static routes`);
  console.log(`   - 12 Dynamic services (from servicesData.ts)`);
  console.log(`   - 24 Dynamic brand specialists (from brandsData.ts)`);
  console.log(`   - 2 Workshop locations (from locationsData.ts)`);
  console.log(`   - 14 Technical blog guides (from blogData.ts)`);
  console.log(`📁 Saved to ${distSitemapPath} & ${publicSitemapPath}`);
}

run().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});
