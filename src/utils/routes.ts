import { servicesData } from '../data/servicesData';
import { brandsData } from '../data/brandsData';
import { locationsData } from '../data/locationsData';
import { blogData } from '../data/blogData';

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
      title: 'HyperTune Garage - Specialized Automotive Workshop in Islamabad & Rawalpindi',
      desc: 'Pakistan’s premier automotive workshop specializing in Toyota, Honda, Suzuki, Hyundai, Kia, Changan, Haval, MG, BYD, Lexus, Land Rover, Master Engine Overhauls, Hybrid Battery Repair & PPF at HyperTune Garage - Islamabad Flagship Hub and Rawalpindi.',
    },
    {
      path: '/about/',
      priority: '0.8',
      changefreq: 'weekly',
      title: 'About HyperTune Garage | Master Auto Repair & PPF Specialists',
      desc: 'Learn about HyperTune Garage, certified master automotive technicians, climate-controlled PPF bays, and state-of-the-art diagnostic facilities in Islamabad.',
    },
    {
      path: '/services/',
      priority: '0.9',
      changefreq: 'weekly',
      title: 'Automotive Services & Maintenance Packages | HyperTune Garage',
      desc: 'Complete automotive services catalog including PPF, ceramic detailing, engine overhaul, suspension, transmission, AC repair, and 3D wheel alignment.',
    },
    {
      path: '/brands/',
      priority: '0.9',
      changefreq: 'weekly',
      title: 'Vehicle Brand Specialists in Islamabad & Rawalpindi | HyperTune Garage',
      desc: 'Certified master technicians for BMW, Mercedes-Benz, Audi, Porsche, Toyota Hybrid & Honda in Islamabad. Dealer-grade diagnostics & genuine OEM parts.',
    },
    {
      path: '/locations/',
      priority: '0.8',
      changefreq: 'monthly',
      title: 'Workshop Locations in Islamabad & Rawalpindi | HyperTune Garage',
      desc: 'Visit HyperTune Garage - Islamabad Flagship Hub and our upcoming Rawalpindi facility. View maps, GPS directions, contact numbers, and hours.',
    },
    {
      path: '/gallery/',
      priority: '0.7',
      changefreq: 'monthly',
      title: 'Workshop Gallery & Work Portfolio | HyperTune Garage',
      desc: 'Browse high-resolution before & after photos of PPF installations, ceramic coating finishes, engine rebuilds, and luxury repairs.',
    },
    {
      path: '/testimonials/',
      priority: '0.7',
      changefreq: 'monthly',
      title: 'Customer Reviews & Google Ratings (4.9 / 5.0) | HyperTune Garage',
      desc: 'Read verified customer reviews and 4.9-star Google ratings for HyperTune Garage Islamabad & Rawalpindi automotive workshop.',
    },
    {
      path: '/faq/',
      priority: '0.6',
      changefreq: 'monthly',
      title: 'Frequently Asked Questions (FAQ) | HyperTune Garage',
      desc: 'Find answers about PPF lifespan, ceramic coating benefits, engine overhaul warranties, repair pricing, and booking appointments in Pakistan.',
    },
    {
      path: '/contact/',
      priority: '0.8',
      changefreq: 'monthly',
      title: 'Contact Us & Book Service | HyperTune Garage Islamabad',
      desc: 'Get in touch with HyperTune Garage. Call 0333-0177717, chat on WhatsApp, or send an inquiry for vehicle repairs and PPF quotes.',
    },
    {
      path: '/book-appointment/',
      priority: '0.9',
      changefreq: 'weekly',
      title: 'Book Service Appointment Online | HyperTune Garage',
      desc: 'Schedule your car diagnostic scan, PPF installation, ceramic detailing, or periodic maintenance online with instant WhatsApp confirmation.',
    },
    {
      path: '/blog/',
      priority: '0.8',
      changefreq: 'weekly',
      title: 'Technical Blog | HyperTune Garage — Car Care Guides for Islamabad & Rawalpindi',
      desc: 'Authoritative automotive repair guides: P0A80 hybrid battery repair, BMW ISTA diagnostics, Audi DSG transmission fixes, PPF care & engine overhauls.',
    },
    {
      path: '/warranty-specs/',
      priority: '0.5',
      changefreq: 'yearly',
      title: '12-Month Repair Warranty Specs | HyperTune Garage',
      desc: 'Comprehensive details on HyperTune Garage 12-month / 20,000 km bumper-to-bumper automotive repair warranty.',
    },
    {
      path: '/privacy-policy/',
      priority: '0.3',
      changefreq: 'yearly',
      title: 'Privacy Policy | HyperTune Garage Islamabad',
      desc: 'HyperTune Garage privacy policy outlining customer data security, repair guarantees, and privacy protocols.',
    },
    {
      path: '/terms-conditions/',
      priority: '0.3',
      changefreq: 'yearly',
      title: 'Terms & Conditions | HyperTune Garage Islamabad',
      desc: 'Terms of service, warranty coverage guidelines, and workshop service policies for HyperTune Garage.',
    },
    {
      path: '/sitemap/',
      priority: '0.6',
      changefreq: 'weekly',
      title: 'HTML Sitemap & Complete Site Index | HyperTune Garage',
      desc: 'Explore the complete directory of HyperTune Garage pages, specialized services, 24 vehicle brand specialist hubs, workshop locations, and technical blog guides.',
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

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...brandRoutes,
    ...locationRoutes,
    ...blogRoutes,
  ];
}

export function getAllRoutePaths(): string[] {
  return getSiteRoutes().map((r) => r.path);
}
