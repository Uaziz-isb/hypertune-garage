import { servicesData } from '../data/servicesData';
import { brandsData } from '../data/brandsData';
import { locationsData } from '../data/locationsData';
import { blogData } from '../data/blogData';
import { getRouteMetadata } from '../data/metadataRegistry';

export interface SiteRoute {
  path: string;
  priority: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  title: string;
  desc: string;
}

export function getSiteRoutes(): SiteRoute[] {
  const staticRoutes: SiteRoute[] = [
    {
      path: '/',
      priority: '1.0',
      changefreq: 'daily',
      title: 'PPF & Auto Workshop Islamabad | HyperTune Garage',
      desc: 'HyperTune Garage is an automotive workshop in Islamabad for PPF, detailing, diagnostics, repairs, servicing and vehicle care. Serving Islamabad & Rawalpindi.',
    },
    {
      path: '/about/',
      priority: '0.8',
      changefreq: 'weekly',
      title: 'About HyperTune Garage | Automotive Experts Islamabad',
      desc: 'Learn about HyperTune Garage, an automotive workshop in Islamabad specializing in diagnostics, repairs, PPF, detailing, servicing and vehicle care.',
    },
    {
      path: '/services/',
      priority: '0.9',
      changefreq: 'weekly',
      title: 'Car Services in Islamabad | HyperTune Garage',
      desc: 'Explore HyperTune Garage automotive services in Islamabad including PPF, detailing, diagnostics, engine repair, servicing, AC, transmission, bodywork and more.',
    },
    {
      path: '/brands/',
      priority: '0.9',
      changefreq: 'weekly',
      title: 'Car Brand Specialists in Islamabad | HyperTune Garage',
      desc: 'Find specialist repair and servicing for BMW, Mercedes, Audi, Toyota, Honda, Porsche, Kia, Hyundai, BYD, Lexus and more at HyperTune Garage.',
    },
    {
      path: '/locations/',
      priority: '0.8',
      changefreq: 'monthly',
      title: 'HyperTune Garage Locations | Islamabad & Rawalpindi',
      desc: 'Find HyperTune Garage service locations in Islamabad and Rawalpindi, including workshop details, contact information and service coverage.',
    },
    {
      path: '/gallery/',
      priority: '0.7',
      changefreq: 'monthly',
      title: 'Auto Workshop & PPF Gallery | HyperTune Garage',
      desc: 'View HyperTune Garage automotive work including PPF installations, detailing, repairs, diagnostics, bodywork and vehicle modifications in Islamabad.',
    },
    {
      path: '/testimonials/',
      priority: '0.7',
      changefreq: 'monthly',
      title: 'Customer Reviews | HyperTune Garage Islamabad',
      desc: 'Read customer reviews and experiences with HyperTune Garage for PPF, detailing, diagnostics, repairs, servicing and automotive care in Islamabad.',
    },
    {
      path: '/faq/',
      priority: '0.6',
      changefreq: 'monthly',
      title: 'Car Repair & PPF FAQs | HyperTune Garage Islamabad',
      desc: 'Find answers about PPF, detailing, car repairs, diagnostics, servicing, warranties, appointments and automotive services at HyperTune Garage.',
    },
    {
      path: '/contact/',
      priority: '0.8',
      changefreq: 'monthly',
      title: 'Contact HyperTune Garage | Auto Workshop Islamabad',
      desc: 'Contact HyperTune Garage in Islamabad for automotive repairs, diagnostics, PPF, detailing, servicing and appointments. Call or WhatsApp our team.',
    },
    {
      path: '/book-appointment/',
      priority: '0.9',
      changefreq: 'weekly',
      title: 'Book Car Service in Islamabad | HyperTune Garage',
      desc: 'Book an appointment with HyperTune Garage for PPF, detailing, diagnostics, repairs, maintenance, AC service and other automotive services in Islamabad.',
    },
    {
      path: '/blog/',
      priority: '0.8',
      changefreq: 'weekly',
      title: 'Automotive Repair & Car Care Guides | HyperTune Garage',
      desc: 'Read technical car care guides, diagnostic advice, maintenance tips, PPF comparisons and vehicle repair insights from HyperTune Garage in Islamabad.',
    },
    {
      path: '/warranty-specs/',
      priority: '0.5',
      changefreq: 'yearly',
      title: 'Warranty & Service Terms | HyperTune Garage',
      desc: 'Review HyperTune Garage warranty coverage, service terms and protection details for automotive repairs, maintenance and selected vehicle services.',
    },
    {
      path: '/privacy-policy/',
      priority: '0.3',
      changefreq: 'yearly',
      title: 'Privacy Policy | HyperTune Garage',
      desc: 'Read the HyperTune Garage privacy policy covering website usage, information handling and privacy practices.',
    },
    {
      path: '/terms-conditions/',
      priority: '0.3',
      changefreq: 'yearly',
      title: 'Terms & Conditions | HyperTune Garage',
      desc: 'Review the terms and conditions governing use of the HyperTune Garage website, services, appointments and related information.',
    },
    {
      path: '/sitemap/',
      priority: '0.6',
      changefreq: 'weekly',
      title: 'HTML Sitemap | HyperTune Garage',
      desc: 'Browse the HyperTune Garage HTML sitemap to find automotive services, brand specialists, locations, guides and important website pages.',
    },
  ];

  // Dynamic Service Pages from servicesData.ts
  const serviceRoutes: SiteRoute[] = servicesData.map((s) => ({
    path: `/services/${s.slug}/`,
    priority: s.isFeatured ? '0.9' : '0.8',
    changefreq: 'weekly',
    title: s.seo?.seoTitle || `${s.title} in Islamabad & Rawalpindi | HyperTune Garage`,
    desc: s.seo?.metaDescription || s.shortDesc.slice(0, 155),
  }));

  // Dynamic Brand Specialist Pages from brandsData.ts
  const brandRoutes: SiteRoute[] = brandsData.map((b) => ({
    path: `/brands/${b.slug}/`,
    priority: '0.9',
    changefreq: 'weekly',
    title: b.seo?.title || `${b.name} | HyperTune Garage`,
    desc: b.seo?.description || b.tagline.slice(0, 155),
  }));

  // Dynamic Workshop Location Pages from locationsData.ts
  const locationRoutes: SiteRoute[] = locationsData.map((l) => ({
    path: `/locations/${l.slug}/`,
    priority: '0.8',
    changefreq: 'monthly',
    title: `${l.branchName} | HyperTune Garage`,
    desc: `${l.branchName} - ${l.address || 'Islamabad & Rawalpindi'}`,
  }));

  // Dynamic Blog Post Pages from blogData.ts
  const blogRoutes: SiteRoute[] = blogData.map((p) => ({
    path: `/blog/${p.slug}/`,
    priority: '0.8',
    changefreq: 'monthly',
    title: `${p.title} | HyperTune Garage`,
    desc: p.excerpt.slice(0, 155),
  }));

  const combinedRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...brandRoutes,
    ...locationRoutes,
    ...blogRoutes,
  ];

  // Guarantee strict adherence to verified metadata registry
  return combinedRoutes.map((route) => {
    const meta = getRouteMetadata(route.path);
    if (meta) {
      return {
        ...route,
        title: meta.title,
        desc: meta.description,
      };
    }
    return route;
  });
}

export function getAllRoutePaths(): string[] {
  return getSiteRoutes().map((r) => r.path);
}
