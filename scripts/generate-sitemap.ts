// Regenerates public/sitemap.xml (into dist/) from the real data files -- the exact
// same source of truth used by App.tsx routing and the prerender script. Run as part
// of `npm run build` so the sitemap can never drift out of sync with real routes again
// (previously it was missing all 24 /brands/ pages, 12 of 14 blog posts, and used a
// stale location slug).
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { servicesData } from '../src/data/servicesData';
import { brandsData } from '../src/data/brandsData';
import { locationsData } from '../src/data/locationsData';
import { blogData } from '../src/data/blogData';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const baseUrl = 'https://hypertunegarage.pk';
const today = new Date().toISOString().slice(0, 10);

interface Entry {
  loc: string;
  changefreq: string;
  priority: string;
}

const entries: Entry[] = [
  { loc: '/', changefreq: 'daily', priority: '1.0' },
  { loc: '/about/', changefreq: 'weekly', priority: '0.8' },
  { loc: '/services/', changefreq: 'weekly', priority: '0.9' },
  { loc: '/brands/', changefreq: 'weekly', priority: '0.9' },
  { loc: '/locations/', changefreq: 'weekly', priority: '0.8' },
  { loc: '/gallery/', changefreq: 'weekly', priority: '0.7' },
  { loc: '/testimonials/', changefreq: 'weekly', priority: '0.6' },
  { loc: '/faq/', changefreq: 'monthly', priority: '0.6' },
  { loc: '/contact/', changefreq: 'monthly', priority: '0.7' },
  { loc: '/blog/', changefreq: 'weekly', priority: '0.8' },
  { loc: '/warranty-specs/', changefreq: 'monthly', priority: '0.5' },
  { loc: '/privacy-policy/', changefreq: 'yearly', priority: '0.3' },
  { loc: '/terms-conditions/', changefreq: 'yearly', priority: '0.3' },
  { loc: '/sitemap/', changefreq: 'monthly', priority: '0.3' },
  ...servicesData.map((s) => ({ loc: `/services/${s.slug}/`, changefreq: 'monthly', priority: '0.85' })),
  ...brandsData.map((b) => ({ loc: `/brands/${b.slug}/`, changefreq: 'monthly', priority: '0.85' })),
  ...locationsData.map((l) => ({ loc: `/locations/${l.slug}/`, changefreq: 'monthly', priority: '0.75' })),
  ...blogData.map((p) => ({ loc: `/blog/${p.slug}/`, changefreq: 'monthly', priority: '0.7' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${baseUrl}${e.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
console.log(`[sitemap] Wrote ${entries.length} URLs to dist/sitemap.xml`);
