import fs from 'fs';
import path from 'path';
import { servicesDataSSR, brandsDataSSR, locationsDataSSR, blogDataSSR, findServiceSSR } from '../data/ssrData';
import { serviceGuideMap, serviceShortLabels } from '../data/guideData';
import { googleBusinessData } from '../data/reviewsData';
import { faqData } from '../data/faqData';
import { getRouteMetadata } from '../data/metadataRegistry';
import { normalizeCanonicalUrl } from './canonical';

export { normalizeCanonicalUrl };

export interface RouteMetaInfo {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
  schemas: object[];
  isNotFound?: boolean;
}

const BASE_BUSINESS_SCHEMA = (ogImage: string) => ({
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'HyperTune Garage',
  image: ogImage || 'https://hypertunegarage.pk/images/hypertune_logo.webp',
  '@id': 'https://hypertunegarage.pk/#business',
  url: 'https://hypertunegarage.pk/',
  telephone: '+923330177717',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9',
    addressLocality: 'Islamabad',
    addressRegion: 'PK-IS',
    postalCode: '44000',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.5651,
    longitude: 73.1362,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '10:00',
      closes: '22:00',
    },
  ],
});

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function getRouteMetadataAndSchema(rawPath: string, baseUrl: string): RouteMetaInfo {
  const canonicalUrl = normalizeCanonicalUrl(rawPath, baseUrl);
  const ogImage = `${baseUrl.replace(/\/+$/, '')}/images/hypertune_logo.webp`;

  const routePath = (rawPath.split('?')[0].split('#')[0] || '/').replace(/^\/+|\/+$/g, '');
  const pathParts = routePath ? routePath.split('/') : [];
  const root = pathParts[0] || '';
  const sub = pathParts[1] || '';

  let title = 'HyperTune Garage - Specialized Automotive Workshop in Islamabad & Rawalpindi';
  let description = 'Pakistan’s premier automotive workshop for Japanese, European & German vehicles. Precision engine overhauls, hybrid repairs & PPF at HyperTune Garage Islamabad.';
  let keywords = 'car workshop islamabad, auto repair rawalpindi, toyota repair islamabad, honda service rawalpindi, suzuki garage, haval specialist, byd ev service, hybrid battery repair, engine overhaul islamabad';
  const schemas: object[] = [BASE_BUSINESS_SCHEMA(ogImage)];
  let isNotFound = false;

  const breadcrumbItems: any[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: normalizeCanonicalUrl('/', baseUrl),
    },
  ];

  if (!root) {
    // Root Home Page
    // default title/description already set
  } else if (root === 'services') {
    if (sub) {
      const service = findServiceSSR(sub);
      if (service) {
        title = `${service.title} in Islamabad & Rawalpindi | HyperTune Garage`;
        description = service.seo?.metaDescription || (service.shortDesc.length > 155 ? service.shortDesc.slice(0, 152).trim().replace(/[.,;:\s]+$/, '') + '...' : service.shortDesc);
        keywords = `${service.title.toLowerCase()}, car repair islamabad, ${service.subServices.join(', ')}`;
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: normalizeCanonicalUrl('/services/', baseUrl),
        });
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: canonicalUrl,
        });
      } else {
        isNotFound = true;
        title = '404 - Service Not Found | HyperTune Garage Islamabad';
        description = 'The requested automotive service could not be found. Explore our 13 core specialized repair services in Islamabad.';
      }
    } else {
      title = 'Automotive Services & Maintenance Packages | HyperTune Garage';
      description = 'Complete automotive services catalog including PPF, ceramic detailing, engine overhaul, suspension, transmission, AC repair, and 3D wheel alignment.';
      keywords = 'car services islamabad, ppf coating rawalpindi, engine repair, transmission service';
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: canonicalUrl,
      });
    }
  } else if (root === 'brands') {
    if (sub) {
      const brand = brandsDataSSR.find((b) => b.slug === sub);
      if (brand) {
        title = `${brand.name} | HyperTune Garage`;
        const cleanTagline = brand.tagline.replace(/\.+$/, '').trim();
        description = cleanTagline.length <= 110
          ? `${cleanTagline} at HyperTune Garage Islamabad.`
          : (cleanTagline.length > 155 ? cleanTagline.slice(0, 152).trim().replace(/[.,;:\s]+$/, '') + '...' : cleanTagline);
        keywords = `${brand.name.toLowerCase()}, ${brand.diagnosticSoftware}, car specialist islamabad`;
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Brand Specialists',
          item: normalizeCanonicalUrl('/brands/', baseUrl),
        });
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: brand.name,
          item: canonicalUrl,
        });
      } else {
        isNotFound = true;
        title = '404 - Brand Specialist Not Found | HyperTune Garage';
        description = 'The requested brand specialist page could not be found. Explore our 24 vehicle brand specialist hubs in Islamabad & Rawalpindi.';
      }
    } else {
      title = 'Vehicle Brand Specialists in Islamabad & Rawalpindi | HyperTune Garage';
      description = 'Certified specialist repair for Japanese, German, European & American brands including Toyota, Honda, BMW, Mercedes, Porsche, Haval & BYD in Islamabad.';
      keywords = 'toyota repair islamabad, honda specialist rawalpindi, suzuki maintenance, hyundai tucson repair, kia sportage service, changan workshop, haval specialist, byd ev service, lexus hybrid repair, land rover workshop islamabad';
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Brand Specialists',
        item: canonicalUrl,
      });
    }
  } else if (root === 'locations') {
    if (sub) {
      const location = locationsDataSSR.find((l) => l.slug === sub);
      if (location) {
        title = `${location.branchName} | HyperTune Garage`;
        description = `${location.branchName} - ${location.address || 'Islamabad & Rawalpindi'}`;
        keywords = `${location.branchName.toLowerCase()}, workshop islamabad, auto repair police foundation`;

        if (!location.isOperational) {
          schemas[0] = {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'HyperTune Garage - Rawalpindi Hub (Coming Soon)',
            image: ogImage,
            url: canonicalUrl,
            description: 'Rawalpindi Hub — Coming Soon. Currently serving Rawalpindi customers through our Islamabad Flagship Hub with insured valet pickup.',
            isPartOf: {
              '@type': 'WebSite',
              '@id': 'https://hypertunegarage.pk/#website',
              name: 'HyperTune Garage',
              url: 'https://hypertunegarage.pk/',
            },
          };
        }

        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Locations',
          item: normalizeCanonicalUrl('/locations/', baseUrl),
        });
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: location.branchName,
          item: canonicalUrl,
        });
      } else {
        isNotFound = true;
        title = '404 - Location Not Found | HyperTune Garage';
        description = 'The requested workshop location could not be found. View our flagship facility in Islamabad Police Foundation.';
      }
    } else {
      title = 'Workshop Locations in Islamabad & Rawalpindi | HyperTune Garage';
      description = 'Discover HyperTune Garage Flagship Hub in Block E Police Foundation, Sector O-9, Islamabad, and our upcoming Rawalpindi Hub.';
      keywords = 'workshop locations islamabad, rawalpindi car garage, police foundation sector o9';
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: canonicalUrl,
      });
    }
  } else if (root === 'blog') {
    if (sub) {
      const post = blogDataSSR.find((b) => b.slug === sub);
      if (post) {
        title = `${post.title} | HyperTune Garage`;
        description = post.excerpt.length > 155 ? post.excerpt.slice(0, 152).trim().replace(/[.,;:\s]+$/, '') + '...' : post.excerpt;
        keywords = post.tags.join(', ');
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Technical Blog',
          item: normalizeCanonicalUrl('/blog/', baseUrl),
        });
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: canonicalUrl,
        });

        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: ogImage,
          datePublished: post.publishedDate,
          author: {
            '@type': 'Organization',
            name: post.author.name,
          },
          publisher: {
            '@id': 'https://hypertunegarage.pk/#business',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
        });
      } else {
        isNotFound = true;
        title = '404 - Article Not Found | HyperTune Garage Blog';
        description = 'The requested technical automotive article could not be found. Browse our car care and repair guides.';
      }
    } else {
      title = 'Technical Blog | HyperTune Garage — Car Care Guides for Islamabad & Rawalpindi';
      description = 'Authoritative automotive repair guides: P0A80 hybrid battery repair, BMW ISTA diagnostics, Audi DSG transmission fixes, PPF care & engine overhauls.';
      keywords = 'car repair blog, hybrid battery repair guide, bmw ista diagnostics, audi dsg repair, ppf guide pakistan, automotive maintenance islamabad';
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Technical Blog',
        item: canonicalUrl,
      });
    }
  } else if (root === 'about' || root === 'about-us') {
    title = 'About HyperTune Garage | Master Auto Repair & PPF Specialists';
    description = 'Learn about HyperTune Garage, certified master automotive technicians, climate-controlled PPF bays, and state-of-the-art diagnostic facilities in Islamabad.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'About Us',
      item: canonicalUrl,
    });
  } else if (root === 'testimonials' || root === 'reviews') {
    title = 'Customer Reviews & Google Ratings (4.8 / 5.0) | HyperTune Garage';
    description = 'Read verified customer reviews and 4.8-star Google ratings for HyperTune Garage Islamabad & Rawalpindi automotive workshop.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Customer Reviews',
      item: canonicalUrl,
    });
  } else if (root === 'faq' || root === 'faqs') {
    title = 'Frequently Asked Questions (FAQ) | HyperTune Garage';
    description = 'Find answers about PPF lifespan, ceramic coating benefits, engine overhaul warranties, repair pricing, and booking appointments in Pakistan.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'FAQ',
      item: canonicalUrl,
    });
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': canonicalUrl,
      url: canonicalUrl,
      name: 'Frequently Asked Questions (FAQ) | HyperTune Garage',
      description: 'Comprehensive technical guidance covering Paint Protection Film (PPF), diagnostics, engine overhaul, suspension, AC repair, and booking in Islamabad.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://hypertunegarage.pk/#website',
        name: 'HyperTune Garage',
        url: 'https://hypertunegarage.pk/',
      },
      about: {
        '@id': 'https://hypertunegarage.pk/#business',
      },
    });
  } else if (root === 'contact' || root === 'contact-us') {
    title = 'Contact Us & Book Service | HyperTune Garage Islamabad';
    description = 'Get in touch with HyperTune Garage. Call 0333-0177717, chat on WhatsApp, or send an inquiry for vehicle repairs and PPF quotes.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Contact',
      item: canonicalUrl,
    });
  } else if (root === 'book-appointment' || root === 'booking') {
    title = 'Book Service Appointment Online | HyperTune Garage';
    description = 'Schedule your car diagnostic scan, PPF installation, ceramic detailing, or periodic maintenance online with instant WhatsApp confirmation.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Book Appointment',
      item: canonicalUrl,
    });
  } else if (root === 'privacy-policy' || root === 'privacy') {
    title = 'Privacy Policy | HyperTune Garage Islamabad';
    description = 'HyperTune Garage privacy policy outlining customer data security, repair guarantees, and privacy protocols.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Privacy Policy',
      item: canonicalUrl,
    });
  } else if (root === 'terms-conditions' || root === 'terms') {
    title = 'Terms & Conditions | HyperTune Garage Islamabad';
    description = 'Terms of service, repair warranty coverage guidelines, and workshop service policies for HyperTune Garage Islamabad.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Terms & Conditions',
      item: canonicalUrl,
    });
  } else if (root === 'warranty-specs' || root === 'warranty') {
    title = '12-Month Repair Warranty Specs | HyperTune Garage';
    description = 'Comprehensive details on HyperTune Garage 12-month / 15,000 km automotive repair warranty.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Warranty Specs',
      item: canonicalUrl,
    });
  } else if (root === 'gallery') {
    title = 'Workshop Gallery & Work Portfolio | HyperTune Garage';
    description = 'Browse high-resolution before & after photos of PPF installations, ceramic coating finishes, engine rebuilds, and luxury repairs.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Gallery',
      item: canonicalUrl,
    });
  } else if (root === 'sitemap' || root === 'site-map') {
    title = 'HTML Sitemap & Complete Site Index | HyperTune Garage';
    description = 'Explore the complete directory of HyperTune Garage pages, specialized services, 24 vehicle brand specialist hubs, workshop locations, and technical blog guides.';
    keywords = 'hypertune garage sitemap, car workshop site index islamabad, automotive services directory';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'HTML Sitemap',
      item: canonicalUrl,
    });
  } else {
    isNotFound = true;
    title = '404 - Page Not Found | HyperTune Garage Islamabad';
    description = 'The requested page could not be found. Explore HyperTune Garage automotive services, brand specialists, and workshop locations in Islamabad & Rawalpindi.';
  }

  const registryMeta = getRouteMetadata(rawPath);
  if (registryMeta && !isNotFound) {
    title = registryMeta.title;
    description = registryMeta.description;
  }

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  });

  return {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    schemas,
    isNotFound,
  };
}

export function renderSSRBody(rawPath: string, _baseUrl: string): string {
  const routePath = (rawPath.split('?')[0].split('#')[0] || '/').replace(/^\/+|\/+$/g, '');
  const pathParts = routePath ? routePath.split('/') : [];
  const root = pathParts[0] || '';
  const sub = pathParts[1] || '';

  const headerHtml = `
  <header class="w-full relative transition-all duration-300">
    <div class="bg-[#05080e] text-slate-300 text-[11px] sm:text-xs py-1 sm:py-1.5 px-2.5 sm:px-4 border-b border-cyan-500/20">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        <div class="flex items-center gap-3 sm:gap-4 min-w-0">
          <a href="tel:+923330177717" class="flex items-center gap-1 sm:gap-1.5 hover:text-cyan-400 transition-colors font-semibold shrink-0" title="Call HyperTune Garage at 0333-0177717">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span class="truncate">Call Now: <strong class="text-white font-extrabold tracking-wide">0333-0177717</strong></span>
          </a>
          <div class="hidden lg:flex items-center gap-1.5 text-slate-400 shrink-0">
            <svg class="w-3.5 h-3.5 text-cyan-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>Sat - Thu: 10:00 AM - 10:00 PM <strong class="text-amber-400 font-bold ml-1">(Friday Off)</strong></span>
          </div>
        </div>
        <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span class="hidden sm:inline text-[11px] text-slate-400 font-semibold mr-0.5">Follow us:</span>
          <a href="https://wa.me/923330177717" target="_blank" rel="noopener noreferrer" class="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg bg-slate-900 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 transition-all flex items-center gap-1 text-[10px] sm:text-[11px] font-bold" title="WhatsApp +92 333 0177717" aria-label="WhatsApp">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
            <span class="hidden xs:inline">WhatsApp</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61569421832049" target="_blank" rel="noopener noreferrer" class="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-slate-900 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/30 transition-all flex items-center justify-center" title="Facebook" aria-label="Facebook">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://www.instagram.com/hypertune.garage/" target="_blank" rel="noopener noreferrer" class="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-slate-900 hover:bg-[#E4405F] text-[#E4405F] hover:text-white border border-[#E4405F]/30 transition-all flex items-center justify-center" title="Instagram" aria-label="Instagram">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
          <a href="https://www.tiktok.com/@hypertune.garage" target="_blank" rel="noopener noreferrer" class="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg bg-slate-900 hover:bg-black text-slate-200 hover:text-white border border-slate-700 hover:border-[#00F2FE] transition-all flex items-center gap-1 text-[10px] sm:text-[11px] font-bold" title="TikTok" aria-label="TikTok">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00F2FE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"></path><rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect></svg>
            <span class="hidden xs:inline">TikTok</span>
          </a>
          <a href="https://www.youtube.com/@HyperTuneGarage" target="_blank" rel="noopener noreferrer" class="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-slate-900 hover:bg-[#FF0000] text-[#FF0000] hover:text-white border border-[#FF0000]/30 transition-all flex items-center justify-center" title="YouTube" aria-label="YouTube">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3v6Z"></path></svg>
          </a>
        </div>
      </div>
    </div>
    <nav class="bg-[#070b12]/95 backdrop-blur-sm border-b border-slate-800/80 py-2 sm:py-3 transition-all duration-300 relative z-30">
      <div class="max-w-7xl mx-auto px-2.5 sm:px-4 flex items-center justify-between gap-2 sm:gap-4">
        <!-- Left Side: Mobile Menu Button on the LEFT + Logo -->
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <button class="flex xl:hidden items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/25 border border-cyan-400/50 cursor-pointer shrink-0" aria-label="Open Navigation Menu" title="Open Navigation Menu">
            <svg class="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-950 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
          </button>
          <a href="/" class="shrink-0 cursor-pointer" title="HyperTune Garage Home">
            <!-- Mobile Logo -->
            <div class="flex sm:hidden items-center gap-2.5 sm:gap-3 font-bold tracking-tight select-none cursor-pointer group" role="banner">
              <div style="width:44px;height:44px;" class="relative flex items-center justify-center rounded-xl overflow-hidden border border-slate-700/80 shadow-md shadow-sky-500/10 shrink-0 bg-black p-0">
                <img src="/images/hypertune_logo_small.webp" srcset="/images/hypertune_logo_small.webp 1x, /images/hypertune_logo.webp 2x" alt="HyperTune Garage Official Logo" width="44" height="44" loading="eager" decoding="async" class="w-full h-full object-cover object-center block rounded-[inherit]" />
              </div>
              <div class="flex flex-col justify-center leading-none">
                <div class="flex items-center">
                  <span style="font-size:20.2px;" class="font-black tracking-tight uppercase flex items-center text-white">
                    <span>HYPER</span><span class="text-red-500 ml-0.5">TUNE</span>
                  </span>
                </div>
                <span style="font-size:9.7px;" class="font-bold tracking-widest uppercase mt-1 flex items-center gap-1.5 text-slate-400">
                  <span>HYPERTUNEGARAGE.PK</span><span class="text-red-500 font-black">•</span><span>ISLAMABAD</span>
                </span>
              </div>
            </div>
            <!-- Desktop Logo -->
            <div class="hidden sm:flex items-center gap-2.5 sm:gap-3 font-bold tracking-tight select-none cursor-pointer group" role="banner">
              <div style="width:52px;height:52px;" class="relative flex items-center justify-center rounded-xl overflow-hidden border border-slate-700/80 shadow-md shadow-sky-500/10 shrink-0 bg-black p-0">
                <img src="/images/hypertune_logo_small.webp" srcset="/images/hypertune_logo_small.webp 1x, /images/hypertune_logo.webp 2x" alt="HyperTune Garage Official Logo" width="52" height="52" loading="eager" decoding="async" class="w-full h-full object-cover object-center block rounded-[inherit]" />
              </div>
              <div class="flex flex-col justify-center leading-none">
                <div class="flex items-center">
                  <span style="font-size:23.8px;" class="font-black tracking-tight uppercase flex items-center text-white">
                    <span>HYPER</span><span class="text-red-500 ml-0.5">TUNE</span>
                  </span>
                </div>
                <span style="font-size:11.3px;" class="font-bold tracking-widest uppercase mt-1 flex items-center gap-1.5 text-slate-400">
                  <span>HYPERTUNEGARAGE.PK</span><span class="text-red-500 font-black">•</span><span>ISLAMABAD</span>
                </span>
              </div>
            </div>
          </a>
        </div>

        <!-- Desktop Nav Items (xl and above) -->
        <div class="hidden xl:flex items-center gap-1">
          <a href="/" class="${!root ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30' : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80'} px-3 py-2 rounded-lg text-[15px] font-bold transition-all">Home</a>
          <a href="/services/" class="${root === 'services' ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30' : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80'} flex items-center gap-1.5 px-3 py-2 rounded-lg text-[15px] font-bold transition-all">
            <span>Services</span>
            <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <a href="/brands/" class="${root === 'brands' ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30' : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80'} flex items-center gap-1.5 px-3 py-2 rounded-lg text-[15px] font-bold transition-all">
            <span>Brand Specialists</span>
            <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <a href="/gallery/" class="${root === 'gallery' ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30' : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80'} px-3 py-2 rounded-lg text-[15px] font-bold transition-all">Gallery</a>
          <a href="/blog/" class="${root === 'blog' ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30' : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80'} px-3 py-2 rounded-lg text-[15px] font-bold transition-all">Blog</a>
          <a href="/about/" class="${root === 'about' ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30' : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80'} px-3 py-2 rounded-lg text-[15px] font-bold transition-all">About Us</a>
          <a href="/contact/" class="${root === 'contact' ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30' : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80'} px-3 py-2 rounded-lg text-[15px] font-bold transition-all">Contact Us</a>
        </div>

        <!-- Right Side Header Action Buttons -->
        <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button class="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors" title="Search Services, Brands & Advice" aria-label="Search">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
          </button>
          <a href="https://wa.me/923330177717" target="_blank" rel="noopener noreferrer" class="hidden xs:flex items-center justify-center p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-bold text-xs transition-all" aria-label="WhatsApp" title="WhatsApp +92 333 0177717">
            <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
            <span class="hidden sm:inline ml-1.5">WhatsApp</span>
          </a>
          <a href="tel:+923330177717" class="flex sm:hidden items-center justify-center p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 transition-all" aria-label="Call HyperTune Garage" title="Call HyperTune Garage">
            <svg class="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
          <a href="/book-appointment/" class="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all">
            <svg class="w-4 h-4 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            <span>Book Service</span>
          </a>
        </div>
      </div>
    </nav>
  </header>`;

  const footerHtml = `
  <footer class="bg-[#05080e] text-slate-400 text-sm border-t border-cyan-500/20">
    <div class="bg-gradient-to-r from-[#09111e] via-[#0d1627] to-cyan-950/40 border-b border-cyan-500/20 py-12 px-4">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-2 text-cyan-400 font-extrabold text-xs uppercase tracking-widest">
            <span>PERFORMANCE • PROTECTION • PERFECTION</span>
          </div>
          <h3 class="text-2xl md:text-3xl font-black text-white">
            Ready to Experience Peak Automotive Performance?
          </h3>
          <p class="text-slate-400 text-sm max-w-xl">
            Book your diagnostic scan, detailing, or periodic maintenance today. 100% Genuine OEM Parts with 12-Month / 15,000 km Warranty.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <a href="/book-appointment/" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-cyan-500/25">
            Book Service Appointment
          </a>
          <a href="https://wa.me/923330177717" target="_blank" rel="noopener noreferrer" class="px-5 py-3.5 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/20">
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <h3 class="text-white font-extrabold text-lg tracking-tight mb-4">HyperTune Garage</h3>
        <p class="text-slate-400 text-xs leading-relaxed mb-4">Islamabad's premier automotive engineering and car care facility. Certified technicians, German OEM diagnostics, and 12-month warranties.</p>
        <p class="text-cyan-400 font-bold text-xs">📍 Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad</p>
      </div>
      <div>
        <h4 class="text-white font-bold text-sm tracking-wider uppercase mb-4">Popular Services</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/services/paint-protection-film-ppf/" class="text-slate-400 hover:text-cyan-400 transition-colors">Self-Healing TPU PPF</a></li>
          <li><a href="/services/car-detailing/" class="text-slate-400 hover:text-cyan-400 transition-colors">9H Ceramic Coating</a></li>
          <li><a href="/services/engine-services/" class="text-slate-400 hover:text-cyan-400 transition-colors">Engine Overhauls</a></li>
          <li><a href="/services/car-ac-repair/" class="text-slate-400 hover:text-cyan-400 transition-colors">AC Repair &amp; Electrical</a></li>
          <li><a href="/services/brake-suspension-steering/" class="text-slate-400 hover:text-cyan-400 transition-colors">3D Laser Alignment</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold text-sm tracking-wider uppercase mb-4">Brand Specialists</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/brands/toyota-repair-islamabad/" class="text-slate-400 hover:text-cyan-400 transition-colors">Toyota &amp; Lexus Hybrid</a></li>
          <li><a href="/brands/honda-service-islamabad/" class="text-slate-400 hover:text-cyan-400 transition-colors">Honda Specialists</a></li>
          <li><a href="/brands/bmw-repair-islamabad/" class="text-slate-400 hover:text-cyan-400 transition-colors">BMW ISTA Diagnostics</a></li>
          <li><a href="/brands/mercedes-service-islamabad/" class="text-slate-400 hover:text-cyan-400 transition-colors">Mercedes-Benz Xentry</a></li>
          <li><a href="/brands/audi-repair-islamabad/" class="text-slate-400 hover:text-cyan-400 transition-colors">Audi &amp; Porsche Care</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="/blog/" class="text-slate-400 hover:text-cyan-400 transition-colors">Technical Blog &amp; Guides</a></li>
          <li><a href="/faq/" class="text-slate-400 hover:text-cyan-400 transition-colors">Frequently Asked Questions (FAQ)</a></li>
          <li><a href="/sitemap/" class="text-slate-400 hover:text-cyan-400 transition-colors">HTML Sitemap</a></li>
          <li><a href="/warranty-specs/" class="text-slate-400 hover:text-cyan-400 transition-colors">12-Month Warranty Policy</a></li>
          <li><a href="/privacy-policy/" class="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
          <li><a href="/terms-conditions/" class="text-slate-400 hover:text-cyan-400 transition-colors">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-6 border-t border-slate-800/80 text-center text-xs text-slate-500">
      © ${new Date().getFullYear()} HyperTune Garage Islamabad. All Rights Reserved.
    </div>
  </footer>`;

  let mainContentHtml = '';

  if (root === 'services' && sub) {
    const service = findServiceSSR(sub);
    if (service) {
      mainContentHtml = `
      <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
        <nav style="font-size:12px;color:#64748b;margin-bottom:16px;">
          <a href="/" style="color:#06b6d4;text-decoration:none;">Home</a> &gt;
          <a href="/services/" style="color:#06b6d4;text-decoration:none;">Services</a> &gt;
          <span style="color:#cbd5e1;">${escapeHtml(service.title)}</span>
        </nav>
        
        <span style="display:inline-block;background:rgba(6,182,212,0.1);color:#06b6d4;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;">
          ${escapeHtml(service.category.toUpperCase())}
        </span>
        <h1 style="font-size:36px;font-weight:900;color:#ffffff;line-height:1.2;margin-bottom:16px;">
          ${escapeHtml(service.title)} in Islamabad &amp; Rawalpindi
        </h1>
        <p style="font-size:16px;color:#94a3b8;line-height:1.6;margin-bottom:24px;max-width:900px;">
          ${escapeHtml(service.fullDesc)}
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:24px;margin-bottom:32px;">
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:16px;font-weight:700;color:#06b6d4;margin-bottom:8px;">Pricing &amp; Turnaround</h3>
            <p style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:4px;">${escapeHtml(service.priceRange)}</p>
            <p style="font-size:13px;color:#94a3b8;">Estimated Time: ${escapeHtml(service.estimatedTime)}</p>
          </div>
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:16px;font-weight:700;color:#06b6d4;margin-bottom:8px;">Warranty Coverage</h3>
            <p style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:4px;">12-Month Guarantee</p>
            <p style="font-size:13px;color:#94a3b8;">100% genuine OEM parts and precision workmanship warranty.</p>
          </div>
        </div>

        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Included Service Packages</h2>
        <ul style="color:#cbd5e1;font-size:14px;line-height:2;padding-left:24px;margin-bottom:32px;">
          ${service.subServices.map((subItem) => `<li>${escapeHtml(subItem)}</li>`).join('')}
        </ul>

        ${service.processSteps && service.processSteps.length > 0 ? `
        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Precision Engineering Process</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:16px;margin-bottom:32px;">
          ${service.processSteps.map((step, idx) => `
            <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;">
              <span style="font-size:12px;font-weight:800;color:#06b6d4;">STEP 0${idx + 1}</span>
              <h3 style="font-size:16px;font-weight:700;color:#ffffff;margin:6px 0;">${escapeHtml(step.title)}</h3>
              <p style="font-size:13px;color:#94a3b8;line-height:1.5;">${escapeHtml(step.desc)}</p>
            </div>
          `).join('')}
        </div>
        ` : ''}

        ${service.faqs && service.faqs.length > 0 ? `
        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Frequently Asked Questions</h2>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px;">
          ${service.faqs.map((faq) => `
            <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;">
              <h3 style="font-size:15px;font-weight:700;color:#ffffff;margin-bottom:6px;">${escapeHtml(faq.question)}</h3>
              <p style="font-size:13px;color:#94a3b8;line-height:1.5;">${escapeHtml(faq.answer)}</p>
            </div>
          `).join('')}
        </div>
        <div style="margin-bottom:32px;">
          <a href="/faq/" style="color:#06b6d4;font-size:14px;font-weight:700;text-decoration:none;">Explore all ${escapeHtml(service.title)} &amp; Workshop FAQs &rarr;</a>
        </div>
        ` : ''}

        ${(() => {
          const guide = serviceGuideMap[service.slug];
          if (!guide) return '';

          return `
          <div style="background:#070c14;border:1px solid rgba(6,182,212,0.3);border-radius:16px;padding:24px;margin-bottom:32px;">
            <span style="font-size:11px;font-weight:700;color:#06b6d4;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:6px;">Featured Workshop Technical Guide</span>
            <h3 style="font-size:18px;font-weight:800;color:#ffffff;margin:0 0 8px 0;">${escapeHtml(guide.title)}</h3>
            <p style="font-size:13px;color:#cbd5e1;line-height:1.6;margin-bottom:14px;">${escapeHtml(guide.desc)}</p>
            <a href="/blog/${guide.slug}/" style="color:#06b6d4;font-size:13px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:6px;">${escapeHtml(guide.buttonText)} &rarr;</a>
          </div>`;
        })()}

        <div style="background:#0b121e;border:1px solid #06b6d4;border-radius:16px;padding:24px;text-align:center;">
          <h3 style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:8px;">Ready to Book Your Service?</h3>
          <p style="font-size:14px;color:#94a3b8;margin-bottom:16px;">Reserve a workshop slot at HyperTune Garage Islamabad.</p>
          <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;display:inline-block;">Book Appointment Online</a>
        </div>
      </main>`;
    }
  } else if (root === 'brands' && sub) {
    const brand = brandsDataSSR.find((b) => b.slug === sub);
    if (brand) {
      mainContentHtml = `
      <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
        <nav style="font-size:12px;color:#64748b;margin-bottom:16px;">
          <a href="/" style="color:#06b6d4;text-decoration:none;">Home</a> &gt;
          <a href="/brands/" style="color:#06b6d4;text-decoration:none;">Brand Specialists</a> &gt;
          <span style="color:#cbd5e1;">${escapeHtml(brand.name)}</span>
        </nav>

        <span style="display:inline-block;background:rgba(6,182,212,0.1);color:#06b6d4;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;">
          ${escapeHtml(brand.logoBadge)}
        </span>
        <h1 style="font-size:36px;font-weight:900;color:#ffffff;line-height:1.2;margin-bottom:16px;">
          ${escapeHtml(brand.name)}
        </h1>
        <p style="font-size:16px;color:#94a3b8;line-height:1.6;margin-bottom:24px;max-width:900px;">
          ${escapeHtml(brand.overview)}
        </p>

        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;margin-bottom:32px;">
          <h3 style="font-size:14px;font-weight:700;color:#06b6d4;margin-bottom:6px;">Diagnostic Rig &amp; Scanner Systems</h3>
          <p style="font-size:15px;color:#ffffff;font-family:monospace;">${escapeHtml(brand.diagnosticSoftware)}</p>
        </div>

        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Models Serviced &amp; Repaired</h2>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px;">
          ${brand.modelsCovered.map((m) => `
            <span style="background:#0b121e;border:1px solid #1e293b;color:#cbd5e1;padding:6px 14px;border-radius:8px;font-size:13px;">${escapeHtml(m)}</span>
          `).join('')}
        </div>

        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Specialized Engineering Services</h2>
        <ul style="color:#cbd5e1;font-size:14px;line-height:2;padding-left:24px;margin-bottom:32px;">
          ${brand.specializedServices.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
        </ul>

        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Common Issues &amp; Factory Solutions</h2>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px;">
          ${brand.commonIssuesAndFixes.map((item) => `
            <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;">
              <h3 style="font-size:15px;font-weight:700;color:#f87171;margin-bottom:6px;">⚠️ ${escapeHtml(item.issue)}</h3>
              <p style="font-size:13px;color:#cbd5e1;line-height:1.5;"><strong>HyperTune Fix:</strong> ${escapeHtml(item.solution)}</p>
            </div>
          `).join('')}
        </div>

        ${brand.faqs && brand.faqs.length > 0 ? `
        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Frequently Asked Questions (${escapeHtml(brand.name.split(' ')[0])})</h2>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px;">
          ${brand.faqs.map((faq) => `
            <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;">
              <h3 style="font-size:15px;font-weight:700;color:#ffffff;margin-bottom:6px;">${escapeHtml(faq.question)}</h3>
              <p style="font-size:13px;color:#94a3b8;line-height:1.5;">${escapeHtml(faq.answer)}</p>
            </div>
          `).join('')}
        </div>
        <div style="margin-bottom:32px;">
          <a href="/faq/" style="color:#06b6d4;font-size:14px;font-weight:700;text-decoration:none;">Explore all ${escapeHtml(brand.name.split(' ')[0])} &amp; Workshop FAQs &rarr;</a>
        </div>
        ` : ''}

        <div style="background:#0b121e;border:1px solid #06b6d4;border-radius:16px;padding:24px;text-align:center;">
          <h3 style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:8px;">Schedule ${escapeHtml(brand.name.split(' ')[0])} Service</h3>
          <p style="font-size:14px;color:#94a3b8;margin-bottom:16px;">Book your appointment with our master specialist technicians.</p>
          <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;display:inline-block;">Book Specialist Slot</a>
        </div>
      </main>`;
    }
  } else if (root === 'locations' && sub) {
    const location = locationsDataSSR.find((l) => l.slug === sub);
    if (location) {
      mainContentHtml = `
      <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
        <nav style="font-size:12px;color:#64748b;margin-bottom:16px;">
          <a href="/" style="color:#06b6d4;text-decoration:none;">Home</a> &gt;
          <a href="/locations/" style="color:#06b6d4;text-decoration:none;">Locations</a> &gt;
          <span style="color:#cbd5e1;">${escapeHtml(location.branchName)}</span>
        </nav>

        <h1 style="font-size:36px;font-weight:900;color:#ffffff;line-height:1.2;margin-bottom:16px;">
          ${escapeHtml(location.branchName)}
        </h1>
        <p style="font-size:16px;color:#94a3b8;line-height:1.6;margin-bottom:24px;max-width:900px;">
          ${escapeHtml(location.address || '')}
        </p>

        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;margin-bottom:32px;">
          <h3 style="font-size:16px;font-weight:700;color:#06b6d4;margin-bottom:8px;">Contact &amp; Bookings</h3>
          <p style="font-size:18px;font-weight:800;color:#ffffff;margin-bottom:8px;">📞 ${escapeHtml(location.phone || '+92 333 0177717')}</p>
          <a href="https://wa.me/${location.whatsapp || '923330177717'}" style="color:#06b6d4;text-decoration:none;font-weight:700;">Chat on WhatsApp &rarr;</a>
        </div>

        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Facility Specs &amp; Workshop Amenities</h2>
        <ul style="color:#cbd5e1;font-size:14px;line-height:2;padding-left:24px;margin-bottom:32px;">
          ${(location.workshopSpecs || []).map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
        </ul>
      </main>`;
    }
  } else if (root === 'blog' && sub) {
    const post = blogDataSSR.find((b) => b.slug === sub);
    if (post) {
      let articleBody = '';
      const staticArticlePath = path.join(process.cwd(), 'public', 'articles', `${post.slug}.html`);
      if (fs.existsSync(staticArticlePath)) {
        articleBody = fs.readFileSync(staticArticlePath, 'utf-8');
      } else {
        articleBody = post.content.split('\n\n').map((para) => {
          if (para.startsWith('## ')) {
            return `<h2 style="font-size:22px;font-weight:800;color:#ffffff;margin:24px 0 12px;">${escapeHtml(para.replace('## ', ''))}</h2>`;
          }
          if (para.startsWith('### ')) {
            return `<h3 style="font-size:18px;font-weight:700;color:#ffffff;margin:20px 0 8px;">${escapeHtml(para.replace('### ', ''))}</h3>`;
          }
          if (para.startsWith('- ')) {
            const items = para.split('\n').map((item) => {
              const text = escapeHtml(item.replace('- ', ''))
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#06b6d4;text-decoration:none;">$1</a>');
              return `<li>${text}</li>`;
            }).join('');
            return `<ul style="padding-left:20px;margin-bottom:16px;">${items}</ul>`;
          }
          const renderedPara = escapeHtml(para)
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#06b6d4;text-decoration:none;">$1</a>');
          return `<p style="margin-bottom:16px;">${renderedPara}</p>`;
        }).join('');
      }

      mainContentHtml = `
      <main id="blog-post-content" style="max-width:900px;margin:32px auto;padding:0 16px;">
        <nav style="font-size:12px;color:#64748b;margin-bottom:16px;">
          <a href="/" style="color:#06b6d4;text-decoration:none;">Home</a> &gt;
          <a href="/blog/" style="color:#06b6d4;text-decoration:none;">Technical Blog</a> &gt;
          <span style="color:#cbd5e1;">${escapeHtml(post.title)}</span>
        </nav>

        <h1 style="font-size:32px;font-weight:900;color:#ffffff;line-height:1.2;margin-bottom:12px;">
          ${escapeHtml(post.title)}
        </h1>

        <div style="font-size:13px;color:#64748b;margin-bottom:24px;display:flex;gap:16px;flex-wrap:wrap;">
          <span>By ${escapeHtml(post.author.name)} (${escapeHtml(post.author.role)})</span>
          <span>📅 ${escapeHtml(post.publishedDate)}</span>
          <span>⏱️ ${escapeHtml(post.readTime)}</span>
        </div>

        <div style="font-size:16px;color:#cbd5e1;line-height:1.8;margin-bottom:32px;">
          <p style="font-size:18px;font-weight:600;color:#06b6d4;margin-bottom:24px;">
            ${escapeHtml(post.excerpt)}
          </p>
          ${articleBody}
        </div>

        <div style="background:#070c14;border:1px solid #06b6d4;border-radius:16px;padding:24px;text-align:center;">
          <h3 style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:8px;">${post.category.includes('PPF') || post.category.includes('Paint') ? 'Need Expert Paint Protection Advice?' : 'Need Expert Diagnostic Help?'}</h3>
          <p style="font-size:14px;color:#94a3b8;margin-bottom:16px;">${post.category.includes('PPF') || post.category.includes('Paint') ? 'Schedule an in-person paint inspection and digital thickness audit at HyperTune Garage Islamabad.' : 'Schedule a live scanner evaluation at HyperTune Garage Islamabad.'}</p>
          <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;display:inline-block;">${post.category.includes('PPF') || post.category.includes('Paint') ? 'Book Paint Protection Consultation' : 'Book Diagnostic Scan'}</a>
        </div>
      </main>`;
    }
  } else if (root === 'services') {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;text-align:center;margin-bottom:12px;">
        Automotive Services &amp; Maintenance Packages
      </h1>
      <p style="font-size:16px;color:#94a3b8;text-align:center;max-width:800px;margin:0 auto 40px;line-height:1.6;">
        Specialized engineering, Paint Protection Film (PPF), ceramic detailing, engine overhauls, and dealer-grade diagnostics for German, European, Japanese, and hybrid vehicles in Islamabad &amp; Rawalpindi.
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:24px;">
        ${servicesDataSSR.map((s) => `
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span style="font-size:11px;font-weight:700;color:#06b6d4;text-transform:uppercase;letter-spacing:1px;">${escapeHtml(s.category)}</span>
              <h2 style="font-size:20px;font-weight:800;color:#ffffff;margin:8px 0 12px;">${escapeHtml(s.title)}</h2>
              <p style="font-size:14px;color:#94a3b8;line-height:1.6;margin-bottom:16px;">${escapeHtml(s.shortDesc)}</p>
              <div style="font-size:13px;color:#cbd5e1;margin-bottom:16px;">
                <strong>Est Range:</strong> <span style="color:#06b6d4;">${escapeHtml(s.priceRange)}</span>
              </div>
            </div>
            <a href="/services/${s.slug}/" style="background:#06b6d4;color:#030712;padding:10px 16px;border-radius:8px;font-weight:800;text-decoration:none;text-align:center;display:block;">
              View Technical Specs &rarr;
            </a>
          </div>
        `).join('')}
      </div>
    </main>`;
  } else if (root === 'brands') {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;text-align:center;margin-bottom:12px;">
        Vehicle Brand Specialists in Islamabad &amp; Rawalpindi
      </h1>
      <p style="font-size:16px;color:#94a3b8;text-align:center;max-width:800px;margin:0 auto 40px;line-height:1.6;">
        Factory dealer-grade diagnostics (BMW ISTA, Mercedes Xentry, Audi ODIS, Porsche PIWIS, Toyota Techstream, Honda HDS), specialized mechanical toolsets, and 100% genuine OEM parts.
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:24px;">
        ${brandsDataSSR.map((b) => `
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span style="font-size:11px;font-weight:700;color:#06b6d4;text-transform:uppercase;letter-spacing:1px;">${escapeHtml(b.logoBadge)}</span>
              <h2 style="font-size:20px;font-weight:800;color:#ffffff;margin:8px 0 12px;">${escapeHtml(b.name)}</h2>
              <p style="font-size:14px;color:#94a3b8;line-height:1.6;margin-bottom:16px;">${escapeHtml(b.tagline)}</p>
              <p style="font-size:12px;color:#06b6d4;font-family:monospace;margin-bottom:16px;">${escapeHtml(b.diagnosticSoftware)}</p>
            </div>
            <a href="/brands/${b.slug}/" style="background:#06b6d4;color:#030712;padding:10px 16px;border-radius:8px;font-weight:800;text-decoration:none;text-align:center;display:block;">
              Explore ${escapeHtml(b.name.split(' ')[0])} Hub &rarr;
            </a>
          </div>
        `).join('')}
      </div>
    </main>`;
  } else if (root === 'locations') {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;text-align:center;margin-bottom:12px;">
        HyperTune Garage Workshop Locations
      </h1>
      <p style="font-size:16px;color:#94a3b8;text-align:center;max-width:800px;margin:0 auto 40px;line-height:1.6;">
        Visit our state-of-the-art HyperTune Garage - Islamabad Flagship Hub or learn about our upcoming Rawalpindi Hub.
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:24px;">
        ${locationsDataSSR.map((l) => `
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;">
            <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:12px;">${escapeHtml(l.branchName)}</h2>
            <p style="font-size:14px;color:#cbd5e1;line-height:1.6;margin-bottom:12px;">${escapeHtml(l.address || '')}</p>
            <p style="font-size:14px;color:#06b6d4;margin-bottom:16px;"><strong>Phone:</strong> ${escapeHtml(l.phone || '+92 333 0177717')}</p>
            ${l.workshopSpecs && l.workshopSpecs.length > 0 ? `
            <h3 style="font-size:14px;font-weight:700;color:#ffffff;margin-bottom:8px;">Workshop Specs:</h3>
            <ul style="color:#94a3b8;font-size:13px;line-height:1.6;padding-left:20px;margin-bottom:16px;">
              ${l.workshopSpecs.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
            </ul>
            ` : ''}
            <a href="/locations/${l.slug}/" style="color:#06b6d4;font-weight:700;text-decoration:none;font-size:14px;">View Location Details &rarr;</a>
          </div>
        `).join('')}
      </div>
    </main>`;
  } else if (root === 'blog') {
    const serviceGuidesSSR = servicesDataSSR
      .map((s) => {
        const guide = serviceGuideMap[s.slug];
        if (!guide) return null;
        return { service: s, guide };
      })
      .filter((item): item is { service: typeof servicesDataSSR[0]; guide: (typeof serviceGuideMap)[string] } => item !== null);

    const serviceGuideSlugsSSR = new Set(Object.values(serviceGuideMap).map((g) => g.slug));
    const blogArticlesListingSSR = blogDataSSR.filter((b) => !serviceGuideSlugsSSR.has(b.slug));

    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <div style="text-align:center;margin-bottom:48px;">
        <span style="display:inline-block;background:rgba(6,182,212,0.1);color:#06b6d4;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;">
          DIAGNOSTIC &amp; MAINTENANCE KNOWLEDGE HUB
        </span>
        <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin-bottom:12px;">
          Technical Blog | HyperTune Garage — Car Care Guides
        </h1>
        <p style="font-size:16px;color:#94a3b8;max-width:800px;margin:0 auto;line-height:1.6;">
          Authoritative automotive engineering guides, OBD2 fault code analysis, hybrid battery restoration protocols, and climate maintenance for drivers across Islamabad and Rawalpindi.
        </p>
      </div>

      <!-- Dedicated Service Guides Section -->
      <section style="margin-bottom:64px;" id="service-guides">
        <div style="margin-bottom:28px;border-bottom:1px solid #1e293b;padding-bottom:16px;">
          <span style="font-size:11px;font-weight:700;color:#06b6d4;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:6px;">
            Workshop Service Manuals
          </span>
          <h2 style="font-size:26px;font-weight:800;color:#ffffff;margin:0 0 8px 0;">
            Service Guides
          </h2>
          <p style="font-size:14px;color:#94a3b8;max-width:800px;margin:0 0 16px 0;line-height:1.6;">
            Every HyperTune Garage service features a dedicated technical diagnostic &amp; maintenance guide covering Pakistani climate adaptations, OEM tolerances, and troubleshooting.
          </p>
          <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding-top:4px;">
            ${serviceGuidesSSR.map(({ service: s, guide }) => `
              <a href="/blog/${guide.slug}/" style="display:inline-block;padding:8px 16px;border-radius:12px;font-size:12px;font-weight:700;background:#0b121e;color:#cbd5e1;border:1px solid #1e293b;text-decoration:none;">
                ${escapeHtml(serviceShortLabels[s.slug] || s.title)}
              </a>
            `).join('')}
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:24px;">
          ${serviceGuidesSSR.map(({ service, guide }) => `
            <article style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
                  <a href="/services/${service.slug}/" style="font-size:11px;font-weight:700;color:#06b6d4;text-decoration:none;text-transform:uppercase;letter-spacing:0.5px;">
                    Service: ${escapeHtml(service.title)}
                  </a>
                  <span style="font-size:10px;color:#64748b;font-family:monospace;text-transform:uppercase;">Service Guide</span>
                </div>
                <h3 style="font-size:18px;font-weight:800;color:#ffffff;margin:0 0 12px;line-height:1.4;">
                  <a href="/blog/${guide.slug}/" style="color:#ffffff;text-decoration:none;">
                    ${escapeHtml(guide.title)}
                  </a>
                </h3>
                <p style="font-size:13px;color:#94a3b8;line-height:1.6;margin-bottom:16px;">
                  ${escapeHtml(guide.desc)}
                </p>
              </div>
              <div style="padding-top:16px;border-top:1px solid #1e293b;display:flex;align-items:center;justify-content:space-between;">
                <a href="/services/${service.slug}/" style="font-size:12px;color:#94a3b8;text-decoration:none;">
                  View Service &rarr;
                </a>
                <a href="/blog/${guide.slug}/" style="color:#06b6d4;font-weight:700;text-decoration:none;font-size:13px;display:inline-block;">
                  ${escapeHtml(guide.buttonText || 'Read Technical Guide')} &rarr;
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- All Guides & Articles Section -->
      <section id="all-articles">
        <div style="margin-bottom:28px;border-bottom:1px solid #1e293b;padding-bottom:16px;">
          <span style="font-size:11px;font-weight:700;color:#06b6d4;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:6px;">
            Complete Technical Library
          </span>
          <h2 style="font-size:26px;font-weight:800;color:#ffffff;margin:0 0 8px 0;">
            Blogs &amp; Articles
          </h2>
          <p style="font-size:14px;color:#94a3b8;max-width:800px;margin:0;line-height:1.6;">
            Explore diagnostic breakdowns, German vehicle troubleshooting, hybrid high-voltage rebalancing, and pre-purchase inspection checklists.
          </p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:24px;">
          ${blogArticlesListingSSR.map((b) => `
            <article style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
                  <span style="font-size:11px;font-weight:700;color:#06b6d4;text-transform:uppercase;">${escapeHtml(b.category)}</span>
                  <span style="font-size:11px;color:#64748b;">${escapeHtml(b.readTime)}</span>
                </div>
                <h3 style="font-size:18px;font-weight:800;color:#ffffff;margin:0 0 12px;line-height:1.4;">
                  <a href="/blog/${b.slug}/" style="color:#ffffff;text-decoration:none;">
                    ${escapeHtml(b.title)}
                  </a>
                </h3>
                <p style="font-size:13px;color:#94a3b8;line-height:1.6;margin-bottom:16px;">${escapeHtml(b.excerpt)}</p>
              </div>
              <div>
                <div style="font-size:11px;color:#64748b;margin-bottom:12px;">
                  <span>By ${escapeHtml(b.author.name)}</span> • <span>${escapeHtml(b.publishedDate)}</span>
                </div>
                <a href="/blog/${b.slug}/" style="color:#06b6d4;font-weight:700;text-decoration:none;font-size:14px;display:inline-block;">
                  Read Full Technical Guide &rarr;
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    </main>`;
  } else if (root === 'about' || root === 'about-us') {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin-bottom:16px;">
        About HyperTune Garage Islamabad
      </h1>
      <p style="font-size:16px;color:#94a3b8;line-height:1.8;max-width:900px;margin-bottom:24px;">
        HyperTune Garage is Pakistan's advanced automotive service center and precision car care laboratory located in Block E Police Foundation (Sector O-9), Islamabad. Founded on engineering rigor, transparent pricing, and dealer-grade diagnostic capabilities, we cater to Japanese, European, German, and luxury vehicle owners across Islamabad and Rawalpindi.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:24px;margin-bottom:32px;">
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:24px;">
          <h2 style="font-size:20px;font-weight:800;color:#06b6d4;margin-bottom:8px;">Certified Master Technicians</h2>
          <p style="color:#cbd5e1;font-size:14px;line-height:1.6;">Factory-trained automotive engineers specializing in engine overhauls, transmission rebuilds, and hybrid high-voltage electronics.</p>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:24px;">
          <h2 style="font-size:20px;font-weight:800;color:#06b6d4;margin-bottom:8px;">Climate-Controlled Clean Room</h2>
          <p style="color:#cbd5e1;font-size:14px;line-height:1.6;">Dust-free PPF installation bays and downdraft thermal spray booth ensuring flawless mirror glass finishes.</p>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:24px;">
          <h2 style="font-size:20px;font-weight:800;color:#06b6d4;margin-bottom:8px;">12-Month / 20k KM Warranty</h2>
          <p style="color:#cbd5e1;font-size:14px;line-height:1.6;">Comprehensive nationwide warranty on major mechanical overhauls, hybrid batteries, and genuine parts.</p>
        </div>
      </div>
      <div style="text-align:center;">
        <a href="/contact/" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;">Visit Our Workshop</a>
      </div>
    </main>`;
  } else if (root === 'contact' || root === 'contact-us') {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin-bottom:16px;">
        Contact HyperTune Garage
      </h1>
      <p style="font-size:16px;color:#94a3b8;margin-bottom:32px;">
        Get in touch with our service advisors for bookings, repair estimates, or PPF quotes.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:24px;margin-bottom:32px;">
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:24px;">
          <h2 style="font-size:18px;font-weight:800;color:#06b6d4;margin-bottom:12px;">📍 Workshop Address</h2>
          <p style="color:#cbd5e1;line-height:1.6;font-size:14px;">Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000</p>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:24px;">
          <h2 style="font-size:18px;font-weight:800;color:#06b6d4;margin-bottom:12px;">📞 Phone &amp; WhatsApp</h2>
          <p style="color:#cbd5e1;line-height:1.6;font-size:14px;">Direct: <a href="tel:+923330177717" style="color:#06b6d4;text-decoration:none;font-weight:700;">+92 333 0177717</a></p>
          <p style="color:#cbd5e1;line-height:1.6;font-size:14px;">WhatsApp: <a href="https://wa.me/923330177717" style="color:#06b6d4;text-decoration:none;font-weight:700;">Chat with Us</a></p>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:24px;">
          <h2 style="font-size:18px;font-weight:800;color:#06b6d4;margin-bottom:12px;">⏰ Operating Hours</h2>
          <p style="color:#cbd5e1;line-height:1.6;font-size:14px;">Saturday – Thursday: 10:00 AM – 10:00 PM</p>
          <p style="color:#f87171;font-weight:700;font-size:13px;">Friday: Closed</p>
        </div>
      </div>
    </main>`;
  } else if (root === 'gallery') {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;text-align:center;margin-bottom:12px;">
        Workshop Portfolio &amp; Project Gallery
      </h1>
      <p style="font-size:16px;color:#94a3b8;text-align:center;max-width:800px;margin:0 auto 40px;">
        High-resolution before &amp; after showcases of TPU Paint Protection Film (PPF), 9H Ceramic Coatings, Master Engine Overhauls, and Body Mod projects at HyperTune Garage.
      </p>
      <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:32px;text-align:center;">
        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:12px;">Explore Our Live Work on Instagram</h2>
        <p style="color:#94a3b8;font-size:14px;margin-bottom:20px;">Follow our daily automotive transformations and master workshop projects.</p>
        <a href="https://instagram.com/hypertunegarage" target="_blank" rel="noopener noreferrer" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;display:inline-block;">View Instagram Gallery</a>
      </div>
    </main>`;
  } else if (root === 'testimonials' || root === 'reviews') {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <div style="text-align:center;margin-bottom:32px;">
        <span style="display:inline-block;background:rgba(6,182,212,0.1);color:#06b6d4;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;">
          VERIFIED GOOGLE BUSINESS PROFILE
        </span>
        <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin-bottom:12px;">
          Customer Reviews &amp; 4.8★ Google Ratings
        </h1>
        <p style="font-size:16px;color:#94a3b8;max-width:800px;margin:0 auto 24px;line-height:1.6;">
          Authentic, verified customer reviews and 4.8-star ratings directly from Google Business Profile submitted by vehicle owners across Islamabad and Rawalpindi.
        </p>
        <div style="display:inline-flex;align-items:center;gap:12px;background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:10px 20px;">
          <span style="font-size:24px;font-weight:900;color:#f59e0b;">4.8 / 5.0</span>
          <span style="color:#cbd5e1;font-size:14px;">★★★★★</span>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:24px;">
        ${googleBusinessData.reviews.map((r) => `
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;display:flex;flex-direction:column;justify-content:between;">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
                <h2 style="font-size:16px;font-weight:800;color:#ffffff;margin:0;">${escapeHtml(r.authorName)}</h2>
                <span style="background:#030712;color:#06b6d4;font-size:11px;font-weight:700;padding:2px 8px;border-radius:6px;border:1px solid rgba(6,182,212,0.3);">✓ Verified Google Review</span>
              </div>
              <div style="color:#f59e0b;font-size:14px;margin-bottom:8px;">${'★'.repeat(r.rating)}</div>
              <p style="color:#cbd5e1;font-size:13px;line-height:1.6;font-style:italic;margin-bottom:12px;">"${escapeHtml(r.text)}"</p>
              ${r.vehicle ? `<span style="display:inline-block;background:rgba(6,182,212,0.1);color:#06b6d4;font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;margin-bottom:8px;">${escapeHtml(r.vehicle)}</span>` : ''}
            </div>
            ${r.ownerResponse ? `
              <div style="margin-top:12px;padding:14px;border-top:1px solid #1e293b;background:#111b2b;border-radius:10px;border-left:4px solid #06b6d4;">
                <span style="font-size:11px;font-weight:700;color:#06b6d4;display:block;margin-bottom:4px;">HyperTune Garage — Owner</span>
                <p style="font-size:12px;color:#cbd5e1;line-height:1.5;margin:0;font-style:italic;">"${escapeHtml(r.ownerResponse)}"</p>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:40px;">
        <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:14px 28px;border-radius:10px;font-weight:800;text-decoration:none;font-size:14px;display:inline-block;">Book Service Appointment</a>
      </div>
    </main>`;
  } else if (root === 'faq' || root === 'faqs') {
    mainContentHtml = `
    <main style="max-width:1000px;margin:32px auto;padding:0 16px;">
      <div style="text-align:center;margin-bottom:40px;">
        <span style="color:#06b6d4;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;display:inline-block;margin-bottom:8px;">
          Authoritative Technical Knowledge Base
        </span>
        <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin:0 0 12px 0;">
          Frequently Asked Questions (FAQ)
        </h1>
        <p style="font-size:15px;color:#94a3b8;max-width:700px;margin:0 auto;line-height:1.6;">
          Detailed technical procedures, warranty guarantees, diagnostic protocols, and workshop guidelines for car owners across Islamabad and Rawalpindi.
        </p>
      </div>

      <div style="display:flex;flex-direction:column;gap:20px;">
        ${faqData.map((f) => `
          <article style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span style="background:rgba(6,182,212,0.1);color:#06b6d4;font-size:11px;font-weight:700;padding:3px 10px;border-radius:6px;border:1px solid rgba(6,182,212,0.25);text-transform:uppercase;">
                ${escapeHtml(f.category)}
              </span>
            </div>
            <h2 style="font-size:18px;font-weight:800;color:#ffffff;margin:0 0 12px 0;line-height:1.4;">
              ${escapeHtml(f.question)}
            </h2>
            <p style="font-size:14px;color:#cbd5e1;line-height:1.6;margin:0 0 16px 0;">
              ${escapeHtml(f.answer)}
            </p>
            ${f.keyHighlights && f.keyHighlights.length > 0 ? `
              <div style="background:#070c14;border:1px solid rgba(6,182,212,0.2);border-radius:10px;padding:14px;margin-bottom:16px;">
                <span style="color:#06b6d4;font-size:11px;font-weight:700;text-transform:uppercase;display:block;margin-bottom:8px;">Technical Standards</span>
                <ul style="margin:0;padding-left:18px;color:#cbd5e1;font-size:12px;line-height:1.6;">
                  ${f.keyHighlights.map((h) => `<li style="margin-bottom:4px;">${escapeHtml(h)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            ${f.comprehensiveOverview ? `
              <div style="background:#080e1a;border:1px solid rgba(30,41,59,0.8);border-radius:10px;padding:16px;margin-bottom:16px;">
                <span style="color:#06b6d4;font-size:11px;font-weight:700;text-transform:uppercase;display:block;margin-bottom:6px;">Engineering Methodology</span>
                <p style="font-size:13px;color:#cbd5e1;line-height:1.6;margin:0;">${escapeHtml(f.comprehensiveOverview)}</p>
              </div>
            ` : ''}
            <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;padding-top:12px;border-top:1px solid #1e293b;">
              ${f.relatedService ? `
                <a href="${f.relatedService.href}" style="display:inline-flex;align-items:center;gap:6px;background:#0f172a;color:#06b6d4;border:1px solid rgba(6,182,212,0.3);padding:6px 12px;border-radius:8px;font-size:12px;font-weight:700;text-decoration:none;">
                  <span>Service: ${escapeHtml(f.relatedService.title)} →</span>
                </a>
              ` : ''}
              ${f.relatedArticle ? `
                <a href="${f.relatedArticle.href}" style="display:inline-flex;align-items:center;gap:6px;background:#0f172a;color:#06b6d4;border:1px solid rgba(6,182,212,0.3);padding:6px 12px;border-radius:8px;font-size:12px;font-weight:700;text-decoration:none;">
                  <span>Guide: ${escapeHtml(f.relatedArticle.title)} →</span>
                </a>
              ` : ''}
              ${f.relatedBrand ? `
                <a href="${f.relatedBrand.href}" style="display:inline-flex;align-items:center;gap:6px;background:#0f172a;color:#06b6d4;border:1px solid rgba(6,182,212,0.3);padding:6px 12px;border-radius:8px;font-size:12px;font-weight:700;text-decoration:none;">
                  <span>Specialist: ${escapeHtml(f.relatedBrand.name)} →</span>
                </a>
              ` : ''}
              ${f.relatedLocation ? `
                <a href="${f.relatedLocation.href}" style="display:inline-flex;align-items:center;gap:6px;background:#0f172a;color:#06b6d4;border:1px solid rgba(6,182,212,0.3);padding:6px 12px;border-radius:8px;font-size:12px;font-weight:700;text-decoration:none;">
                  <span>Hub: ${escapeHtml(f.relatedLocation.name)} →</span>
                </a>
              ` : ''}
            </div>
          </article>
        `).join('')}
      </div>

      <div style="text-align:center;margin-top:40px;background:#0b121e;border:1px solid rgba(6,182,212,0.3);border-radius:16px;padding:32px;">
        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin:0 0 10px 0;">Need a Workshop Diagnosis or Custom Quote?</h2>
        <p style="font-size:14px;color:#94a3b8;margin:0 0 20px 0;">Our certified master technicians at Police Foundation, Sector O-9, Islamabad are ready to inspect your vehicle.</p>
        <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;font-size:14px;display:inline-block;margin-right:12px;">Book Inspection Bay</a>
        <a href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage,%20I%20have%20a%20technical%20question" target="_blank" rel="noopener noreferrer" style="background:#10b981;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;font-size:14px;display:inline-block;">WhatsApp Master Tech</a>
      </div>
    </main>`;
  } else if (root === 'book-appointment' || root === 'booking') {
    mainContentHtml = `
    <main style="max-width:900px;margin:32px auto;padding:0 16px;text-align:center;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin-bottom:12px;">
        Book Your Service Appointment
      </h1>
      <p style="font-size:16px;color:#94a3b8;margin-bottom:32px;">
        Schedule dealer-level diagnostic scans, periodic maintenance, PPF quotes, or mechanical repairs at HyperTune Garage Islamabad.
      </p>
      <div style="background:#0b121e;border:1px solid #06b6d4;border-radius:16px;padding:32px;max-width:600px;margin:0 auto;">
        <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:12px;">Instant WhatsApp Confirmation</h2>
        <p style="color:#cbd5e1;font-size:14px;line-height:1.6;margin-bottom:24px;">Send us your vehicle model and required service for immediate appointment scheduling and cost estimation.</p>
        <a href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage,%20I%20would%20like%20to%20book%20a%20service%20appointment" target="_blank" rel="noopener noreferrer" style="background:#06b6d4;color:#030712;padding:14px 28px;border-radius:8px;font-weight:800;text-decoration:none;display:inline-block;font-size:16px;">
          Book via WhatsApp (+92 333 0177717)
        </a>
      </div>
    </main>`;
  } else if (root === 'warranty-specs' || root === 'warranty') {
    mainContentHtml = `
    <main style="max-width:1000px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin-bottom:16px;">
        12-Month Automotive Repair Warranty Policy
      </h1>
      <p style="font-size:16px;color:#94a3b8;line-height:1.8;margin-bottom:24px;">
        HyperTune Garage stands behind the engineering precision of its work. Every major mechanical overhaul and genuine part installed at our facility is backed by our transparent warranty policy.
      </p>
      <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:24px;margin-bottom:24px;">
        <h2 style="font-size:20px;font-weight:800;color:#06b6d4;margin-bottom:12px;">Warranty Coverage Highlights</h2>
        <ul style="color:#cbd5e1;font-size:14px;line-height:2;padding-left:20px;">
          <li>Engine Rebuilds: 12-Month / 15,000 km warranty on internal mechanical components.</li>
          <li>Automatic &amp; CVT Transmissions: 6-Month warranty on rebuilt valve bodies and clutches.</li>
          <li>Hybrid Battery Packs: Up to 12-Month warranty on reconditioned cell modules.</li>
          <li>TPU Paint Protection Film: 5 to 10-Year manufacturer warranty against yellowing and bubbling.</li>
        </ul>
      </div>
    </main>`;
  } else if (root === 'privacy-policy' || root === 'privacy') {
    mainContentHtml = `
    <main style="max-width:900px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin-bottom:16px;">
        Privacy Policy
      </h1>
      <p style="font-size:14px;color:#94a3b8;line-height:1.8;margin-bottom:16px;">
        HyperTune Garage respects your privacy. We collect customer vehicle information, diagnostic logs, and contact details solely to provide automotive repair services, warranty tracking, and service reminders. We do not sell or share customer data with third parties.
      </p>
    </main>`;
  } else if (root === 'terms-conditions' || root === 'terms') {
    mainContentHtml = `
    <main style="max-width:900px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin-bottom:16px;">
        Terms &amp; Conditions
      </h1>
      <p style="font-size:14px;color:#94a3b8;line-height:1.8;margin-bottom:16px;">
        All repair estimates, diagnostic assessments, and turnaround times provided by HyperTune Garage are subject to physical vehicle teardown and inspection. Warranty claims require presenting the original service invoice and adhering to scheduled post-service checkups.
      </p>
    </main>`;
  } else if (root === 'sitemap' || root === 'site-map') {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <div style="text-align:center;margin-bottom:40px;">
        <span style="display:inline-block;background:rgba(6,182,212,0.1);color:#06b6d4;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:12px;">
          INDEX &amp; NAVIGATION DIRECTORY
        </span>
        <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin-bottom:12px;">
          HTML Site Map &amp; Complete Directory
        </h1>
        <p style="font-size:16px;color:#94a3b8;max-width:800px;margin:0 auto;line-height:1.6;">
          Complete index of all pages, 13 core automotive repair services, 24 vehicle brand specialist hubs, workshop locations, and technical diagnostic guides at HyperTune Garage.
        </p>
      </div>

      <!-- Core Pages Section -->
      <section style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;margin-bottom:24px;">
        <h2 style="font-size:20px;font-weight:800;color:#06b6d4;margin-bottom:16px;">🏢 Primary Website Pages</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:12px;">
          <a href="/" style="color:#cbd5e1;text-decoration:none;">🏠 Home</a>
          <a href="/services/" style="color:#cbd5e1;text-decoration:none;">🔧 All Services Directory</a>
          <a href="/brands/" style="color:#cbd5e1;text-decoration:none;">🏎️ Brand Specialists</a>
          <a href="/locations/" style="color:#cbd5e1;text-decoration:none;">📍 Workshop Locations</a>
          <a href="/testimonials/" style="color:#cbd5e1;text-decoration:none;">⭐ Customer Reviews (4.8★)</a>
          <a href="/gallery/" style="color:#cbd5e1;text-decoration:none;">📸 Project Gallery</a>
          <a href="/blog/" style="color:#cbd5e1;text-decoration:none;">📝 Technical Blog</a>
          <a href="/about/" style="color:#cbd5e1;text-decoration:none;">ℹ️ About HyperTune</a>
          <a href="/contact/" style="color:#cbd5e1;text-decoration:none;">📞 Contact Us</a>
          <a href="/faq/" style="color:#cbd5e1;text-decoration:none;">❓ Frequently Asked Questions</a>
          <a href="/book-appointment/" style="color:#cbd5e1;text-decoration:none;">📅 Book Appointment</a>
          <a href="/warranty-specs/" style="color:#cbd5e1;text-decoration:none;">🛡️ Warranty Policy</a>
        </div>
      </section>

      <!-- Services Section -->
      <section style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;margin-bottom:24px;">
        <h2 style="font-size:20px;font-weight:800;color:#06b6d4;margin-bottom:16px;">🛠️ 13 Core Automotive Repair Services</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:12px;">
          ${servicesDataSSR.map((s) => `
            <a href="/services/${s.slug}/" style="color:#cbd5e1;text-decoration:none;display:block;padding:8px;background:#05080e;border-radius:8px;">
              <strong>${escapeHtml(s.title)}</strong>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- Brand Specialists Section -->
      <section style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;margin-bottom:24px;">
        <h2 style="font-size:20px;font-weight:800;color:#06b6d4;margin-bottom:16px;">🚗 24 Vehicle Brand Specialist Hubs</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:12px;">
          ${brandsDataSSR.map((b) => `
            <a href="/brands/${b.slug}/" style="color:#cbd5e1;text-decoration:none;display:block;padding:8px;background:#05080e;border-radius:8px;">
              <strong>${escapeHtml(b.name)}</strong>
            </a>
          `).join('')}
        </div>
      </section>
    </main>`;
  } else if (!root) {
    // HOME PAGE FULL STABLE SSR MATCHING REACT DESKTOP & MOBILE LAYOUT TO PREVENT CLS AND OPTIMIZE SEO
    mainContentHtml = `
    <div class="space-y-20 pb-16">
      <!-- HERO SECTION -->
      <section class="relative min-h-[85vh] flex items-center pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-3 sm:px-4 bg-slate-950 overflow-hidden">
        <!-- Atmospheric Workshop Gradient Backdrop -->
        <div class="absolute inset-0 z-0 pointer-events-none">
          <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#060c16] to-slate-950"></div>
          <div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px]"></div>
          <div class="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        </div>

        <div class="relative z-30 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <!-- Left Column: Copy & Actions -->
          <div class="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
            <!-- Trust Badge -->
            <div class="inline-flex items-center gap-1.5 sm:gap-2 bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 sm:py-1.5 rounded-full text-cyan-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider max-w-full text-left">
              <span>★ Pakistan’s Premier PPF &amp; Precision Automotive Workshop</span>
            </div>

            <!-- Main Headline -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1] break-words">
              Paint Protection Film (PPF) &amp; <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Detailing Studio</span>
            </h1>

            <!-- Subhead -->
            <p class="text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-2xl">
              Self-healing Paint Protection Film (PPF), Ceramic Coating, and mechanical repairs for Pakistan’s famous vehicle brands (Honda, Nissan, Changan, MG, Toyota, Suzuki, Hyundai, Kia, Haval) in <strong>Islamabad Flagship Hub</strong> &amp; <strong>Rawalpindi</strong>.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="/book-appointment/"
                class="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2.5 transition-all text-center"
              >
                Book Service Appointment
              </a>

              <a
                href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20want%20to%20get%20an%20instant%20PPF%20and%20repair%20estimate."
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/20 transition-all text-center"
              >
                Instant WhatsApp Estimate
              </a>
            </div>

            <!-- Micro Trust Specs -->
            <div class="pt-3 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div class="flex items-center gap-1.5">
                <span class="text-cyan-400 font-bold">✔</span>
                <span>Self-Healing TPU (10-Yr Warranty)</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-cyan-400 font-bold">🛡</span>
                <span>100% Dust-Free Studio Installation</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-amber-400 font-bold">★</span>
                <span>4.8 / 5.0 Star Rating</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Premium Interactive PPF Studio Carousel -->
          <div class="lg:col-span-6 relative">
            <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 group">
              <!-- Animated Slide Container -->
              <div class="relative h-[290px] sm:h-[380px] md:h-[430px] w-full bg-slate-950">
                <img
                  src="/images/hero_porsche_studio_1787240154464_800w.webp"
                  srcset="/images/hero_porsche_studio_1787240154464_800w.webp 800w, /images/hero_porsche_studio_1787240154464.webp 1280w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                  alt="HyperTune Garage Precision PPF Studio"
                  width="640"
                  height="430"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#05080e] via-transparent to-black/30 opacity-90"></div>
              </div>

              <!-- Floating Slide Details Box -->
              <div class="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 bg-slate-950/92 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800 space-y-2 sm:space-y-3 shadow-2xl z-20">
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black shrink-0">
                      🛡
                    </div>
                    <div class="min-w-0">
                      <h4 class="text-white font-extrabold text-xs sm:text-sm leading-tight truncate">HyperTune Garage Precision PPF Studio</h4>
                      <p class="text-slate-300 text-[11px] sm:text-xs mt-0.5 line-clamp-1">Ultra-Clear Self-Healing TPU • 10-Year Yellowing &amp; Scratch Defense</p>
                    </div>
                  </div>
                  <span class="hidden xs:inline-flex bg-cyan-500 text-slate-950 font-extrabold text-[9px] sm:text-[10px] uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shrink-0">
                    HyperTune Garage Paint Protection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHY CHOOSE HYPERTUNE GARAGE -->
      <section class="max-w-7xl mx-auto px-4 space-y-10">
        <div class="text-center space-y-3 max-w-2xl mx-auto">
          <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Uncompromising Standards
          </span>
          <h2 class="text-3xl font-black text-white">Why Vehicle Owners Trust HyperTune Garage</h2>
          <p class="text-slate-400 text-sm">
            We bridge the gap between expensive dealership overhead and substandard roadside mechanics.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white">Official Dealer-Level Diagnostics</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Equipped with Toyota Techstream, Honda HDS, Suzuki SDT-II, Hyundai GDS, Kia KDS, JLR Pathfinder, and OEM diagnostic scanners.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white">100% Genuine Barcode Sourced Parts</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Direct import of Bosch, Lemförder, Sachs, Bilstein, and OEM manufacturer parts with full trace safety.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white">12-Month / 15,000 km Warranty</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Every mechanical overhaul, suspension component, and electrical module comes with our written guarantee.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <h3 class="text-lg font-bold text-white">Master Certified Engineers</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Our technical team includes mechanical engineers and ECU software specialists trained on European standards.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 8-6 4 6 4V8Z"></path><rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect></svg>
            </div>
            <h3 class="text-lg font-bold text-white">Live Video Inspection Reports</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Never pay for unverified work. Receive direct HD video proof of component wear before repair authorization.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h3 class="text-lg font-bold text-white">State-of-the-Art Diagnostics &amp; Alignment</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Featuring dealership-grade OEM diagnostic scanners, 3D laser wheel alignment rigs, and ultrasonic cleaners.</p>
          </div>
        </div>
      </section>

      <!-- CORE SERVICES OVERVIEW -->
      <section class="max-w-7xl mx-auto px-4 space-y-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div class="space-y-2">
            <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              Automotive Engineering &amp; Studio Offerings
            </span>
            <h2 class="text-3xl font-black text-white">All Main Services</h2>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3.5 py-2 rounded-xl text-xs font-extrabold bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30">All Services</span>
            <a href="/services/" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800">★ 5 Premium Services</a>
            <a href="/services/paint-protection-film-ppf/" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800">PPF</a>
            <a href="/services/car-detailing/" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800">Detailing</a>
            <a href="/services/engine-services/" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800">Engine</a>
          </div>
        </div>

        <!-- Service Cards Grid matching React (grid-cols-1 md:grid-cols-2 lg:grid-cols-4) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${servicesDataSSR.map((s) => {
            const serviceImageLookup: Record<string, string> = {
              'paint-protection-film-ppf': '/images/ppf_hero_banner_1787965710518.webp',
              'car-detailing': '/images/hypertune_ceramic_detailing_1787965750616.webp',
              'vehicle-wrap': '/images/car_vinyl_wrap_1787965685845.webp',
              'body-repair-paint': '/images/car_paint_booth_1787965665925.webp',
              'body-modification': '/images/service_body_kit_1787240237280.webp',
              'engine-services': '/images/hypertune_banner_engine_1787965807591.webp',
              'maintenance-servicing': '/images/hypertune_banner_dyno_1787965778539.webp',
              'brake-suspension-steering': '/images/car_suspension_brakes_1787164569835.webp',
              'transmission-drivetrain': '/images/car_transmission_gearbox_1787164584141.webp',
              'car-ac-repair': '/images/service_ac_electrical_1787240223565.webp',
              'cooling-fuel-exhaust': '/images/service_hybrid_battery_1787965698487.webp',
              'inspection-diagnostics': '/images/service_diagnostics_live_1787240184785.webp',
            };
            const cardImg = serviceImageLookup[s.slug] || '/images/about_cleanroom_studio_1787241321616.webp';
            return `
            <div class="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
              <div>
                <div class="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src="${cardImg}"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 344px"
                    alt="${escapeHtml(s.title)}"
                    width="400"
                    height="192"
                    loading="lazy"
                    decoding="async"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-transparent to-transparent"></div>
                  <span class="absolute top-3 right-3 bg-[#05080e]/90 text-cyan-400 border border-cyan-500/30 font-bold text-[10px] uppercase px-2.5 py-1 rounded-lg">
                    ${escapeHtml(s.category)}
                  </span>
                </div>
                <div class="p-5 space-y-3">
                  <h3 class="text-base font-bold text-white line-clamp-2">${escapeHtml(s.title)}</h3>
                  <p class="text-slate-400 text-xs line-clamp-2 leading-relaxed">${escapeHtml(s.shortDesc)}</p>
                  <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span class="text-slate-400">Est Range:</span>
                    <span class="font-extrabold text-cyan-400">${escapeHtml(s.priceRange.split('-')[0])}</span>
                  </div>
                </div>
              </div>
              <div class="p-5 pt-0 flex items-center gap-2">
                <a href="/services/${s.slug}/" class="flex-1 py-2.5 rounded-xl bg-[#070c14] hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800 text-center transition-colors">
                  Read Technical Specs
                </a>
                <a href="/book-appointment/?service=${s.slug}" class="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold flex items-center justify-center transition-colors" aria-label="Book ${escapeHtml(s.title)}">
                  <svg class="w-4 h-4 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </a>
              </div>
            </div>`;
          }).join('')}
        </div>
      </section>

      <!-- INTERACTIVE COST ESTIMATOR -->
      <section class="max-w-7xl mx-auto px-4">
        <div class="bg-[#0b121e] border border-cyan-500/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold">
              <svg class="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">Instant Repair &amp; Maintenance Cost Estimator</h3>
              <p class="text-xs text-slate-400">Select your vehicle &amp; required service to view estimated repair costs</p>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-6 space-y-4">
              <div>
                <span class="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">1. Popular Vehicle Makes</span>
                <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  <span class="p-2 rounded-xl text-xs font-bold border transition-all text-center bg-cyan-500/20 border-cyan-500 text-cyan-400">Toyota</span>
                  <span class="p-2 rounded-xl text-xs font-bold border transition-all text-center bg-slate-900 border-slate-800 text-slate-300">Honda</span>
                  <span class="p-2 rounded-xl text-xs font-bold border transition-all text-center bg-slate-900 border-slate-800 text-slate-300">Suzuki</span>
                  <span class="p-2 rounded-xl text-xs font-bold border transition-all text-center bg-slate-900 border-slate-800 text-slate-300">Hyundai</span>
                  <span class="p-2 rounded-xl text-xs font-bold border transition-all text-center bg-slate-900 border-slate-800 text-slate-300">Kia</span>
                  <span class="p-2 rounded-xl text-xs font-bold border transition-all text-center bg-slate-900 border-slate-800 text-slate-300">Haval</span>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span class="text-xs text-slate-400 uppercase font-bold">Estimated Cost Range:</span>
                  <span class="text-xl font-black text-cyan-400">PKR 5,000 - PKR 85,000</span>
                </div>
                <p class="text-xs text-slate-300">Transparent itemized estimate with computerized diagnostic verification and 12-Month Written Warranty.</p>
              </div>
              <a href="/book-appointment/" class="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs text-center block">
                Book Verified Inspection Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- BEFORE & AFTER REPAIR RESTORATIONS -->
      <section class="max-w-7xl mx-auto px-4 space-y-8">
        <div class="text-center space-y-2 max-w-xl mx-auto">
          <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Craftsmanship Proof
          </span>
          <h2 class="text-3xl font-black text-white">Real Restoration &amp; Tuning Work</h2>
          <p class="text-slate-400 text-sm">
            Drag the interactive slider to compare original vehicle condition with HyperTune Garage precision results.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-white text-base md:text-lg">Haval H6 GT Full Body TPU Paint Protection Film (PPF)</h4>
              <span class="text-[11px] font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-2.5 py-1 rounded-full">Interactive Slider</span>
            </div>
            <div class="relative w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
              <img
                src="/images/haval_maroon_after_1788042137567.webp"
                alt="Haval H6 GT After PPF"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-white text-base md:text-lg">Toyota Land Cruiser TPU PPF &amp; Ceramic Coating</h4>
              <span class="text-[11px] font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-2.5 py-1 rounded-full">Interactive Slider</span>
            </div>
            <div class="relative w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
              <img
                src="/images/toyota_grey_after_1788042164355_600w.webp"
                alt="Toyota Land Cruiser After PPF"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- CUSTOMER REVIEWS & GOOGLE RATINGS -->
      <section class="bg-[#070c14] border-y border-slate-800/80 py-16 px-4">
        <div class="max-w-7xl mx-auto space-y-6">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Customer Reviews</span>
              <h2 class="text-3xl font-black text-white">Verified Customer Reviews (4.8 / 5.0)</h2>
            </div>
            <a href="/testimonials/" class="px-4 py-2 rounded-xl bg-[#0b121e] border border-slate-800 text-slate-300 font-bold text-xs hover:text-white transition-colors flex items-center gap-1.5">
              <span>Read All Customer Reviews</span>
              <span class="text-cyan-400">&rarr;</span>
            </a>
          </div>

          <!-- 3 Customer Review Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-xl">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-extrabold text-white text-sm">Malik Tariq Mehmood</h4>
                  <span class="text-[11px] text-slate-400">Islamabad • 3 weeks ago</span>
                </div>
                <span class="text-amber-400 text-xs font-bold">★ 5.0</span>
              </div>
              <p class="text-slate-300 text-xs leading-relaxed italic">
                "Got complete TPU Paint Protection Film (PPF) done on my new Toyota Fortuner Legender. The edge tucking is completely invisible, clean climate-controlled studio, and professional team."
              </p>
            </div>
            <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-xl">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-extrabold text-white text-sm">Dr. Farhan Qureshi</h4>
                  <span class="text-[11px] text-slate-400">Rawalpindi • 1 month ago</span>
                </div>
                <span class="text-amber-400 text-xs font-bold">★ 5.0</span>
              </div>
              <p class="text-slate-300 text-xs leading-relaxed italic">
                "Outstanding diagnostic capability on my Honda Civic RS turbo check engine light. They sent HD video proof of the faulty sensor before changing it. Honest and prompt service."
              </p>
            </div>
            <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-xl">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-extrabold text-white text-sm">Hamza Bilal</h4>
                  <span class="text-[11px] text-slate-400">Islamabad • 2 months ago</span>
                </div>
                <span class="text-amber-400 text-xs font-bold">★ 5.0</span>
              </div>
              <p class="text-slate-300 text-xs leading-relaxed italic">
                "Master technicians who truly understand European vehicles. Handled my Audi A6 suspension overhaul with genuine OEM parts and issued a written 12-month warranty certificate."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4-STEP SERVICE PROCESS -->
      <section class="max-w-7xl mx-auto px-4 space-y-10">
        <div class="text-center space-y-2 max-w-xl mx-auto">
          <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Transparent Workflow
          </span>
          <h2 class="text-3xl font-black text-white">Our 4-Step Repair &amp; Service Process</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 relative shadow-lg">
            <span class="text-4xl font-black text-cyan-500/30 block">01</span>
            <h3 class="text-base font-bold text-white">Book Appointment</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Reserve online or via WhatsApp. Flexible appointment scheduling across Islamabad &amp; Rawalpindi.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 relative shadow-lg">
            <span class="text-4xl font-black text-cyan-500/30 block">02</span>
            <h3 class="text-base font-bold text-white">Computer Diagnostic</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Our master technicians execute an OEM scanner health audit and create an itemized estimate.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 relative shadow-lg">
            <span class="text-4xl font-black text-cyan-500/30 block">03</span>
            <h3 class="text-base font-bold text-white">Video Approval</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Receive HD video proof of worn parts. Work only starts upon your explicit digital authorization.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 relative shadow-lg">
            <span class="text-4xl font-black text-cyan-500/30 block">04</span>
            <h3 class="text-base font-bold text-white">Road Test &amp; Warranty</h3>
            <p class="text-slate-400 text-xs leading-relaxed">High-speed highway verification test, final cleaning, and delivery with 12-Month Written Warranty.</p>
          </div>
        </div>

        <!-- Workshop FAQ Knowledge Hub Bar -->
        <div class="bg-[#0b121e] border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div class="space-y-1 text-center sm:text-left">
            <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1.5">
              Got Questions?
            </span>
            <h3 class="text-white text-base sm:text-lg font-bold">Workshop Repair, Warranty &amp; Booking FAQs</h3>
            <p class="text-slate-400 text-xs">
              Get instant answers on genuine OEM parts, 12-month warranty coverage, turnaround times, and workshop procedures.
            </p>
          </div>
          <a href="/faq/" class="px-5 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-slate-800 font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer">
            <span>Browse Workshop FAQs</span>
            <span>&rarr;</span>
          </a>
        </div>
      </section>

      <!-- Vehicle Brand Specialists -->
      <section class="max-w-7xl mx-auto px-4">
        <div class="bg-[#0b121e] border border-slate-800 rounded-3xl p-8 space-y-6">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Expert Technicians &amp; OEM Software</span>
              <h2 class="text-2xl md:text-3xl font-black text-white mt-1">24 Vehicle Brand Specialist Hubs</h2>
            </div>
            <a href="/brands/" class="text-cyan-400 font-bold text-sm hover:underline">View All Brands &rarr;</a>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            ${brandsDataSSR.map((b) => `
              <a href="/brands/${b.slug}/" class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-center transition-all">
                <strong class="text-white text-xs font-bold block truncate">${escapeHtml(b.name)}</strong>
                <span class="text-[10px] text-cyan-400 block mt-0.5 truncate">${escapeHtml(b.diagnosticSoftware)}</span>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Workshop Locations -->
      <section class="max-w-7xl mx-auto px-4 space-y-8">
        <div class="text-center space-y-2 max-w-xl mx-auto">
          <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Visit Our Workshops
          </span>
          <h2 class="text-3xl font-black text-white">Islamabad &amp; Rawalpindi Locations</h2>
          <p class="text-slate-400 text-xs">
            Experience dealer-grade automotive care at our active Islamabad Flagship Hub and upcoming Rawalpindi Hub.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          ${locationsDataSSR.map((loc) => {
            const locImg = loc.city.toLowerCase().includes('rawalpindi')
              ? '/images/rawalpindi_hub_bay_1787965865804.webp'
              : '/images/about_cleanroom_studio_1787241321616.webp';
            return `
            <div class="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 sm:grid-cols-12">
              <div class="sm:col-span-5 h-56 sm:h-auto relative">
                <img
                  src="${locImg}"
                  sizes="(max-width: 640px) 100vw, 400px"
                  alt="${escapeHtml(loc.branchName)}"
                  width="400"
                  height="300"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-[#05080e]/40"></div>
                <div class="absolute top-3 left-3 flex items-center gap-1.5">
                  <span class="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs px-2.5 py-1 rounded-lg">
                    ${escapeHtml(loc.city)} Hub
                  </span>
                  ${loc.isOperational ? `
                    <span class="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold text-[10px] px-2 py-0.5 rounded-md">
                      Operational
                    </span>` : `
                    <span class="bg-amber-500 text-slate-950 font-black text-[10px] uppercase px-2 py-0.5 rounded-md">
                      Opening Soon
                    </span>`}
                </div>
              </div>

              <div class="sm:col-span-7 p-6 space-y-4 flex flex-col justify-between">
                <div class="space-y-2">
                  <h3 class="font-bold text-lg text-white">${escapeHtml(loc.branchName)}</h3>
                  <p class="text-slate-300 text-xs leading-relaxed font-medium">${escapeHtml(loc.address)}</p>
                </div>

                <div class="flex flex-wrap items-center gap-2 pt-2">
                  <a href="tel:${loc.phone.replace(/[^0-9+]/g, '')}" class="flex-1 py-2.5 px-3 rounded-xl bg-[#070c14] hover:bg-slate-800 text-white font-bold text-xs border border-slate-800 flex items-center justify-center gap-1.5 transition-colors">
                    <span>Call: ${escapeHtml(loc.phone)}</span>
                  </a>
                  <a href="/locations/${loc.slug}/" class="py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs">
                    Branch Details &rarr;
                  </a>
                </div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </section>

      <!-- GOOGLE MAP LOCATION AT BOTTOM OF HOME PAGE -->
      <section class="max-w-7xl mx-auto px-4 space-y-6">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div class="space-y-2">
            <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              Workshop Navigation &amp; Pin
            </span>
            <h2 class="text-2xl md:text-3xl font-black text-white">Find HyperTune Garage on Google Maps</h2>
            <p class="text-xs text-slate-400 max-w-xl">
              Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan.
            </p>
          </div>
          <a
            href="https://www.google.com/maps?cid=17560337124718439273&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=PK&source=embed"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 shrink-0 transition-all active:scale-95"
          >
            <span>Open in Google Maps &rarr;</span>
          </a>
        </div>

        <div class="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-[400px] w-full relative bg-[#070c14]">
          <iframe
            title="HyperTune Garage Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.215!2d73.1345365!3d33.5622113!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfede5eabd2d83%3A0xf3b2d99386f26b69!2sHyperTune%20Garage!5e1!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk&maptype=satellite"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full filter brightness-90 contrast-105"
          ></iframe>
        </div>
      </section>
    </div>`;
  } else {
    // 404 NOT FOUND PAGE
    mainContentHtml = `
    <main style="max-width:900px;margin:48px auto;padding:0 16px;text-align:center;">
      <span style="display:inline-block;background:rgba(239,68,68,0.1);color:#ef4444;padding:6px 16px;border-radius:999px;font-size:12px;font-weight:800;letter-spacing:1px;margin-bottom:16px;">
        ERROR 404 • PAGE NOT FOUND
      </span>
      <h1 style="font-size:42px;font-weight:900;color:#ffffff;margin-bottom:16px;">
        Page Not Found
      </h1>
      <p style="font-size:16px;color:#94a3b8;max-width:600px;margin:0 auto 32px;line-height:1.6;">
        The page you requested does not exist or has moved. Explore our precision automotive services, brand specialists, or workshop locations.
      </p>
      <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-bottom:48px;">
        <a href="/" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;">Return to Homepage</a>
        <a href="/services/" style="border:1px solid #334155;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;">View All Services</a>
      </div>
    </main>`;
  }

  return `
  <div class="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
    <div class="fixed top-0 left-0 right-0 z-40">
      ${headerHtml}
    </div>
    <main class="flex-grow">
      ${mainContentHtml}
    </main>
    ${footerHtml}
  </div>`;
}

export function injectSSRHtml(
  htmlTemplate: string,
  rawPath: string,
  baseUrl: string = 'https://hypertunegarage.pk'
): string {
  const cleanPath = rawPath.split('?')[0].replace(/\/+$/, '') || '/';
  const metaInfo = getRouteMetadataAndSchema(cleanPath, baseUrl);
  const ssrBodyHtml = renderSSRBody(cleanPath, baseUrl);

  const schemaScripts = metaInfo.schemas
    .map(
      (s, idx) =>
        `<script type="application/ld+json" id="server-schema-${idx}">\n${JSON.stringify(s, null, 2)}\n</script>`
    )
    .join('\n');

  let updatedHtml = htmlTemplate;

  // Replace Title
  updatedHtml = updatedHtml.replace(/<title>.*?<\/title>/i, `<title>${metaInfo.title}</title>`);

  // Replace Description
  updatedHtml = updatedHtml.replace(
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${metaInfo.description.replace(/"/g, '&quot;')}" />`
  );

  // Ensure NO meta keywords tag exists in rendered HTML (Google does not use it)
  updatedHtml = updatedHtml.replace(/<meta\s+name=["']keywords["'][^>]*>\s*/gi, '');

  // Robots meta tag: If 404 / Not Found, inject noindex to prevent indexing of error pages
  if (metaInfo.isNotFound || cleanPath === '/404' || cleanPath === '/404.html') {
    updatedHtml = updatedHtml.replace(
      /<meta\s+name=["']robots["'][^>]*>/i,
      '<meta name="robots" content="noindex, follow" />'
    );
  }

  // Replace Canonical
  updatedHtml = updatedHtml.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${metaInfo.canonicalUrl}" />`
  );

  // Replace OpenGraph Title & Desc & Url
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${metaInfo.title.replace(/"/g, '&quot;')}" />`
  );
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${metaInfo.description.replace(/"/g, '&quot;')}" />`
  );
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${metaInfo.canonicalUrl}" />`
  );

  // Replace Twitter Title & Desc
  updatedHtml = updatedHtml.replace(
    /<meta\s+name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${metaInfo.title.replace(/"/g, '&quot;')}" />`
  );
  updatedHtml = updatedHtml.replace(
    /<meta\s+name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${metaInfo.description.replace(/"/g, '&quot;')}" />`
  );

  // Inject Schemas before </head>
  updatedHtml = updatedHtml.replace('</head>', `${schemaScripts}\n  </head>`);

  // Inject Full SSR Pre-Rendered Semantic HTML inside <div id="root">
  updatedHtml = updatedHtml.replace(
    /<div id=["']root["']>\s*<\/div>/i,
    `<div id="root">${ssrBodyHtml}</div>`
  );

  return updatedHtml;
}
