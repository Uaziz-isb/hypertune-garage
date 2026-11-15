import fs from 'fs';
import path from 'path';
import { servicesDataSSR, brandsDataSSR, locationsDataSSR, blogDataSSR, findServiceSSR } from '../data/ssrData';
import { servicesData } from '../data/servicesData';
import { brandsData, getBrandDisplayName } from '../data/brandsData';
import { serviceGuideMap, serviceShortLabels } from '../data/guideData';
import { googleBusinessData } from '../data/reviewsData';
import { faqData } from '../data/faqData';
import { getRouteMetadata } from '../data/metadataRegistry';
import { normalizeCanonicalUrl, toIsoDate, toAbsoluteImageUrl } from './canonical';

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
  description:
    'HyperTune Garage provides PPF, Ceramic Coating, Car Detailing, Vehicle Diagnostics, Engine Tune-up, Auto Repair & Maintenance Services in Islamabad and serving Rawalpindi.',
  image: ogImage || 'https://hypertunegarage.pk/images/hypertune_logo.webp',
  logo: {
    '@type': 'ImageObject',
    url: 'https://hypertunegarage.pk/images/hypertune_logo.webp',
  },
  '@id': 'https://hypertunegarage.pk/#business',
  url: 'https://hypertunegarage.pk/',
  telephone: '+923330177717',
  priceRange: '$$$',
  areaServed: [
    { '@type': 'City', name: 'Islamabad' },
    { '@type': 'City', name: 'Rawalpindi' },
  ],
  knowsAbout: [
    'PPF Islamabad',
    'Ceramic Coating Islamabad',
    'Car Detailing Islamabad',
    'Vehicle Diagnostics Islamabad',
    'Auto Workshop Islamabad',
    'Engine Tune-up Islamabad',
    'Auto Repair Islamabad',
    'PPF Rawalpindi',
    'Auto Workshop Rawalpindi',
  ],
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: String(googleBusinessData.totalReviews),
    bestRating: '5',
    worstRating: '1',
  },
  review: googleBusinessData.reviews.map((r) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: r.authorName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(r.rating),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: r.text,
  })),
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
  let ogImage = `${baseUrl.replace(/\/+$/, '')}/images/hypertune_logo.webp`;

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
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://hypertunegarage.pk/#website',
      name: 'HyperTune Garage',
      url: 'https://hypertunegarage.pk/',
      description:
        'HyperTune Garage is an Automotive Workshop for PPF, Detailing, Diagnostics, Tune-up, Repair & Care Services Serving Islamabad & Rawalpindi.',
      publisher: {
        '@type': 'AutoRepair',
        '@id': 'https://hypertunegarage.pk/#business',
        name: 'HyperTune Garage',
        url: 'https://hypertunegarage.pk/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://hypertunegarage.pk/images/hypertune_logo.webp',
        },
      },
    });
  } else if (root === 'services') {
    if (sub) {
      const service = findServiceSSR(sub);
      if (service) {
        const SERVICE_IMAGE_MAP: Record<string, string> = {
          'paint-protection-film-ppf': '/images/ppf_hero_banner_1787965710518.webp',
          'car-detailing': '/images/hypertune_ceramic_detailing_1787965750616.webp',
          'engine-services': '/images/hypertune_banner_engine_1787965807591.webp',
          'inspection-diagnostics': '/images/service_diagnostics_live_1787240184785.webp',
          'maintenance-servicing': '/images/hypertune_banner_dyno_1787965778539.webp',
          'brake-suspension-steering': '/images/car_suspension_brakes_1787164569835.webp',
          'transmission-drivetrain': '/images/car_transmission_gearbox_1787164584141.webp',
          'vehicle-wrap': '/images/car_vinyl_wrap_1787965685845.webp',
          'body-repair-paint': '/images/car_paint_booth_1787965665925.webp',
          'body-modification': '/images/service_body_kit_1787240237280.webp',
          'car-ac-repair': '/images/service_ac_electrical_1787240223565.webp',
          'cooling-fuel-exhaust': '/images/service_hybrid_battery_1787965698487.webp',
        };
        const serviceImage = toAbsoluteImageUrl(SERVICE_IMAGE_MAP[service.slug] || ogImage, baseUrl);
        ogImage = serviceImage;
        title = `${service.title} in Islamabad & Rawalpindi | HyperTune Garage`;
        description = service.seo?.metaDescription || (service.shortDesc.length > 155 ? service.shortDesc.slice(0, 152).trim().replace(/[.,;:\s]+$/, '') + '...' : service.shortDesc);
        keywords = `${service.title.toLowerCase()}, car repair islamabad, ${service.subServices.join(', ')}`;
        const priceNums = service.priceRange.replace(/,/g, '').match(/\d+/g)?.map(Number) || [];
        const priceSpecification =
          priceNums.length >= 2
            ? { '@type': 'PriceSpecification', priceCurrency: 'PKR', minPrice: priceNums[0], maxPrice: priceNums[1] }
            : priceNums.length === 1
              ? { '@type': 'PriceSpecification', priceCurrency: 'PKR', price: priceNums[0] }
              : undefined;
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          serviceType: service.subServices.join(', '),
          image: serviceImage,
          provider: {
            '@type': 'AutoRepair',
            '@id': 'https://hypertunegarage.pk/#business',
            name: 'HyperTune Garage',
            url: 'https://hypertunegarage.pk/',
            telephone: '+923330177717',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9',
              addressLocality: 'Islamabad',
              addressRegion: 'PK-IS',
              postalCode: '44000',
              addressCountry: 'PK',
            },
          },
          areaServed: [
            { '@type': 'City', name: 'Islamabad' },
            { '@type': 'City', name: 'Rawalpindi' },
          ],
          description: service.shortDesc,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'PKR',
            ...(priceSpecification ? { priceSpecification } : {}),
          },
        });
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
        description = `The requested automotive service could not be found. Explore our ${servicesDataSSR.length} core specialized repair services in Islamabad.`;
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
        description = `The requested brand specialist page could not be found. Explore our ${brandsDataSSR.length} vehicle brand specialist hubs in Islamabad & Rawalpindi.`;
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
            publisher: {
              '@type': 'AutoRepair',
              '@id': 'https://hypertunegarage.pk/#business',
              name: 'HyperTune Garage',
              url: 'https://hypertunegarage.pk/',
            },
            isPartOf: {
              '@type': 'AutoRepair',
              '@id': 'https://hypertunegarage.pk/#business',
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

        const isoDate = toIsoDate(post.publishedDate);
        const postImage = toAbsoluteImageUrl(post.featuredImage || ogImage, baseUrl);
        ogImage = postImage;

        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: postImage,
          datePublished: isoDate,
          dateModified: isoDate,
          author: {
            '@type': 'Organization',
            name: post.author.name,
            url: 'https://hypertunegarage.pk/',
          },
          publisher: {
            '@type': 'AutoRepair',
            '@id': 'https://hypertunegarage.pk/#business',
            name: 'HyperTune Garage',
            url: 'https://hypertunegarage.pk/',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl.replace(/\/+$/, '')}/images/hypertune_logo.webp`,
            },
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
    // Retain canonical BASE_BUSINESS_SCHEMA with @id, logo, aggregateRating, and reviews
    schemas[0] = BASE_BUSINESS_SCHEMA(ogImage);
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
      publisher: {
        '@type': 'AutoRepair',
        '@id': 'https://hypertunegarage.pk/#business',
        name: 'HyperTune Garage',
        url: normalizeCanonicalUrl('/', baseUrl),
      },
      isPartOf: {
        '@type': 'AutoRepair',
        '@id': 'https://hypertunegarage.pk/#business',
        name: 'HyperTune Garage',
        url: normalizeCanonicalUrl('/', baseUrl),
        telephone: '+923330177717',
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
    description = `Explore the complete directory of HyperTune Garage pages, specialized services, ${brandsDataSSR.length} vehicle brand specialist hubs, workshop locations, and technical blog guides.`;
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
  <header class="w-full">
    <div class="bg-[#05080e] text-slate-300 text-[11px] sm:text-xs py-1 sm:py-1.5 px-2.5 sm:px-4 border-b border-cyan-500/20">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        <div class="flex items-center gap-3 sm:gap-4 min-w-0">
          <a href="tel:+923330177717" class="flex items-center gap-1 sm:gap-1.5 hover:text-cyan-400 transition-colors font-semibold shrink-0" title="Call HyperTune Garage at 0333-0177717">
            <span>Call Now: <strong class="text-white font-extrabold tracking-wide">0333-0177717</strong></span>
          </a>
          <div class="hidden lg:flex items-center gap-1.5 text-slate-400 shrink-0">
            <span>Sat - Thu: 10:00 AM - 10:00 PM <strong class="text-amber-400 font-bold ml-1">(Friday Off)</strong></span>
          </div>
        </div>
        <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span class="hidden sm:inline text-[11px] text-slate-400 font-semibold mr-0.5">Follow us:</span>
          <a href="https://wa.me/923330177717" target="_blank" rel="noopener noreferrer" class="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg bg-slate-900 text-[#25D366] border border-[#25D366]/30 text-[10px] sm:text-[11px] font-bold">WhatsApp</a>
        </div>
      </div>
    </div>
    <nav class="bg-[#070b12]/95 backdrop-blur-sm border-b border-slate-800/80 py-2 sm:py-3 transition-all duration-300 relative z-30">
      <div class="max-w-7xl mx-auto px-2.5 sm:px-4 flex items-center justify-between gap-2 sm:gap-4">
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="/" class="flex items-center gap-2 sm:gap-2.5 group focus:outline-none">
            <span class="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center">
              HYPER<span class="text-cyan-400">TUNE</span>
            </span>
          </a>
        </div>
        <div class="hidden xl:flex items-center gap-1 lg:gap-1.5">
          <a href="/" class="px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-semibold text-white bg-slate-900 border border-cyan-500/30">Home</a>
          <a href="/services/" class="px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-semibold text-slate-300 hover:text-white">Services</a>
          <a href="/brands/" class="px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-semibold text-slate-300 hover:text-white">Brand Specialists</a>
          <a href="/locations/" class="px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-semibold text-slate-300 hover:text-white">Locations</a>
          <a href="/gallery/" class="px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-semibold text-slate-300 hover:text-white">Gallery</a>
          <a href="/testimonials/" class="px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-semibold text-slate-300 hover:text-white">Reviews (4.8★)</a>
          <a href="/blog/" class="px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-semibold text-slate-300 hover:text-white">Blog</a>
          <a href="/about/" class="px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-semibold text-slate-300 hover:text-white">About Us</a>
          <a href="/contact/" class="px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-semibold text-slate-300 hover:text-white">Contact</a>
        </div>
        <div class="flex items-center gap-2 sm:gap-3">
          <a href="tel:+923330177717" class="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold">
            <span>0333-0177717</span>
          </a>
          <a href="/book-appointment/" class="px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs sm:text-sm">
            Book Appointment
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
          <h2 class="text-2xl md:text-3xl font-black text-white">
            Ready to Experience Peak Automotive Performance?
          </h2>
          <p class="text-slate-400 text-sm max-w-xl">
            Book your diagnostic scan, detailing, or oil service today. We use 100% genuine OEM parts with a 12-month / 15,000 km warranty.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <a href="/book-appointment/" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-cyan-500/25">
            Book Service Online
          </a>
          <a href="https://wa.me/923330177717" target="_blank" rel="noopener noreferrer" class="px-5 py-3.5 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/20">
            WhatsApp Estimate
          </a>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <div class="space-y-4">
        <a href="/" class="text-white font-extrabold text-lg tracking-tight inline-block">HyperTune Garage</a>
        <p class="text-slate-400 text-xs leading-relaxed max-w-sm">
          HyperTune Garage is Pakistan's precision automotive workshop for Toyota, Honda, Suzuki, Hyundai, Kia, Changan, Haval, MG, BYD, Lexus, and Land Rover. We provide Paint Protection Film (PPF), engine rebuilding, ceramic detailing, diagnostics, and scheduled maintenance.
        </p>
        <div class="text-xs text-slate-300 font-semibold bg-[#09101d] border border-cyan-500/20 p-3 rounded-xl max-w-sm">
          100% Genuine OEM Spare Parts • 12-Month Warranty
        </div>
        <div class="pt-2 flex flex-col items-start gap-3 text-xs font-semibold">
          <div class="flex items-center gap-2">
            <span class="text-slate-300">Google Rating:</span>
            <span class="text-amber-400">★★★★★ <span class="text-white font-bold">4.8 / 5.0</span></span>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-slate-300">Social Links:</span>
            <a href="https://www.tiktok.com/@hypertune.garage" target="_blank" rel="noopener noreferrer" class="px-2 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-700 text-[11px] font-bold">TikTok</a>
            <a href="https://www.youtube.com/@HyperTuneGarage" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white">YouTube</a>
            <a href="https://www.facebook.com/profile.php?id=61589327521589" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white">Facebook</a>
            <a href="https://www.instagram.com/hyper.tunegarage" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div class="space-y-3">
        <a href="/services/" class="text-cyan-400 font-bold text-sm uppercase tracking-wider inline-block">Services Catalogue</a>
        <ul class="space-y-2 text-xs">
          ${servicesData.map((s) => `<li><a href="/services/${s.slug}/" class="text-slate-400 hover:text-cyan-400 transition-colors">${escapeHtml(s.title)}</a></li>`).join('')}
        </ul>
      </div>
      <div class="space-y-3">
        <a href="/sitemap/" class="text-cyan-400 font-bold text-sm uppercase tracking-wider inline-block">Site Map Navigation</a>
        <ul class="space-y-2 text-xs">
          <li><a href="/services/" class="text-slate-400 hover:text-cyan-400 transition-colors">Services Catalogue</a></li>
          <li><a href="/brands/" class="text-slate-400 hover:text-cyan-400 transition-colors">Brand Specialists Directory</a></li>
          <li><a href="/locations/" class="text-slate-400 hover:text-cyan-400 transition-colors">Workshop Locations</a></li>
          <li><a href="/gallery/" class="text-slate-400 hover:text-cyan-400 transition-colors">Work Gallery &amp; Restorations</a></li>
          <li><a href="/testimonials/" class="text-slate-400 hover:text-cyan-400 transition-colors">Customer Reviews &amp; Ratings</a></li>
          <li><a href="/blog/" class="text-slate-400 hover:text-cyan-400 transition-colors">Car Care Blog &amp; Guides</a></li>
          <li><a href="/faq/" class="text-slate-400 hover:text-cyan-400 transition-colors">Frequently Asked Questions (FAQ)</a></li>
          <li><a href="/about/" class="text-slate-400 hover:text-cyan-400 transition-colors">About HyperTune Garage</a></li>
          <li><a href="/contact/" class="text-slate-400 hover:text-cyan-400 transition-colors">Contact Us</a></li>
          <li><a href="/book-appointment/" class="text-slate-400 hover:text-cyan-400 transition-colors">Book Service Appointment</a></li>
        </ul>
      </div>
      <div class="space-y-3">
        <a href="/locations/" class="text-cyan-400 font-bold text-sm uppercase tracking-wider inline-block">Workshop Locations</a>
        <div class="space-y-4 text-xs">
          <div class="space-y-2">
            <a href="/locations/islamabad-workshop/" class="font-bold text-white hover:text-cyan-400 block">Islamabad Flagship Hub</a>
            <p class="text-slate-300 leading-relaxed font-medium">
              <span class="text-slate-400 font-semibold">Address:</span> Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan
            </p>
            <div class="pt-1 flex flex-col gap-1.5">
              <a href="tel:+923330177717" class="text-cyan-400 font-bold">Contact: 0333-0177717</a>
              <a href="mailto:info@hypertunegarage.pk" class="text-slate-300 font-medium">Email: info@hypertunegarage.pk</a>
              <span class="text-slate-300 text-[11px]">Timing: Sat - Thu: 10:00 AM - 10:00 PM</span>
              <span class="text-amber-400 font-bold text-[11px]">Friday: CLOSED (Weekly Holiday)</span>
            </div>
          </div>
          <div class="pt-3 border-t border-slate-800 space-y-1">
            <a href="/locations/rawalpindi-workshop/" class="font-bold text-white hover:text-cyan-400 block">Rawalpindi Hub (Coming Soon)</a>
            <p class="text-amber-200/80 leading-relaxed text-[11px]">
              Rawalpindi Hub — Coming Soon. Currently serving Rawalpindi customers through our Islamabad Flagship Hub with insured valet pickup.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#030509] border-t border-slate-900 py-6 px-4">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p><a href="https://hypertunegarage.pk/" class="hover:text-cyan-400 underline underline-offset-2 transition-colors">HyperTune Garage | Performance • Protection • Perfection</a> | All Rights Reserved © 2026-28 | Developed by Umair Aziz – <a href="https://gridlockit.com/" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 underline underline-offset-2 transition-colors">Gridlockit.com</a></p>
        <div class="flex items-center gap-4">
          <a href="/sitemap/" class="text-cyan-400 font-semibold">Site Map</a>
          <span>•</span>
          <a href="/privacy-policy/">Privacy Policy</a>
          <span>•</span>
          <a href="/terms-conditions/">Terms &amp; Conditions</a>
          <span>•</span>
          <a href="/warranty-specs/">Warranty Specs</a>
        </div>
      </div>
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
        HyperTune Garage delivers PPF, Ceramic Coating, Car Detailing, Vehicle Diagnostics, Engine Tune-up, Auto Repair &amp; Maintenance Services across Islamabad &amp; Rawalpindi. Certified engineers handle every job with OEM diagnostics and genuine parts.
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
      <section style="margin-bottom:40px;">
        <h1 style="font-size:36px;font-weight:900;color:#ffffff;margin-bottom:16px;">
          About HyperTune Garage
        </h1>
        <p style="font-size:16px;color:#cbd5e1;line-height:1.8;max-width:900px;">
          HyperTune Garage delivers precision mechanical engineering, computerized diagnostics, and cleanroom paint protection for drivers across Islamabad and Rawalpindi. Operating from Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad (44000), our workshop brings every automotive discipline together under one roof—built around Performance • Protection • Perfection.
        </p>
      </section>

      <section style="margin-bottom:40px;">
        <h2 style="font-size:28px;font-weight:900;color:#ffffff;margin-bottom:12px;">Who We Are</h2>
        <p style="font-size:15px;color:#cbd5e1;line-height:1.75;max-width:900px;margin-bottom:12px;">
          HyperTune Garage is an independent automotive workshop serving car owners in Islamabad and Rawalpindi—including Rawalpindi drivers using insured valet pickup—from our Police Foundation Sector O-9 hub in Islamabad. We run an engineering-led workshop focused on Japanese, German, and luxury vehicles, pairing multi-system diagnostic interfaces and precision measurement tools with transparent itemized pricing and HD WhatsApp inspection proof before any repair proceeds.
        </p>
      </section>

      <section style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;margin-bottom:40px;">
        <h2 style="font-size:28px;font-weight:900;color:#ffffff;margin-bottom:12px;">Our Story</h2>
        <p style="font-size:15px;color:#cbd5e1;line-height:1.75;max-width:900px;margin-bottom:12px;">
          HyperTune Garage was built around a simple belief: every vehicle deserves professional care, honest advice and attention to detail. Serving Islamabad and Rawalpindi, we bring mechanical expertise, modern diagnostic practices and vehicle protection services together under one roof.
        </p>
        <p style="font-size:15px;color:#cbd5e1;line-height:1.75;max-width:900px;margin-bottom:12px;">
          From routine maintenance and complex repairs to pre-purchase inspections and premium vehicle protection, our focus is on understanding each vehicle's needs and recommending practical solutions. We believe in transparent communication, quality workmanship and helping customers make informed decisions at every stage.
        </p>
        <p style="font-size:14px;font-weight:800;color:#22d3ee;margin:0;">
          Performance • Protection • Perfection
        </p>
      </section>

      <section style="margin-bottom:40px;">
        <h2 style="font-size:28px;font-weight:900;color:#ffffff;margin-bottom:16px;">What We Do</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:20px;">
          <div style="background:#070c14;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">1. Automotive Diagnostics and Inspection</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:10px;">Full-system ECU scans and 200-point pre-purchase inspections with digital paint-depth micron audits and cylinder scope checks.</p>
            <a href="/services/inspection-diagnostics/" style="color:#22d3ee;font-size:13px;font-weight:700;text-decoration:none;">Explore Diagnostics &amp; Inspections</a>
          </div>
          <div style="background:#070c14;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">2. Engine Repair and Overhaul</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:10px;">Complete cylinder head work, timing chains, cooling system flushes, ultrasonic injector cleaning, and 0.001 mm micrometer rebuilds.</p>
            <a href="/services/engine-services/" style="color:#22d3ee;font-size:13px;font-weight:700;text-decoration:none;">Explore Engine Services</a>
          </div>
          <div style="background:#070c14;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">3. Transmission and Drivetrain Services</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:10px;">Automatic, CVT, manual, and dual-clutch (DCT/DSG) diagnostics, pressurized fluid exchanges, solenoid rebuilds, and clutch adaptation.</p>
            <a href="/services/transmission-drivetrain/" style="color:#22d3ee;font-size:13px;font-weight:700;text-decoration:none;">Explore Transmission Services</a>
          </div>
          <div style="background:#070c14;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">4. Preventive Maintenance and Mechanical Repair</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:10px;">Imported synthetic oil changes, genuine OEM filters, spark plug replacement, and a documented 50-point vehicle safety check.</p>
            <a href="/services/maintenance-servicing/" style="color:#22d3ee;font-size:13px;font-weight:700;text-decoration:none;">Explore Maintenance Packages</a>
          </div>
          <div style="background:#070c14;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">5. Brake, Suspension and Steering Services</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:10px;">Ceramic brake pads, rotor resurfacing, shock and air-suspension repair, steering rack service, and Italian 3D laser wheel alignment.</p>
            <a href="/services/brake-suspension-steering/" style="color:#22d3ee;font-size:13px;font-weight:700;text-decoration:none;">Explore Brake &amp; Suspension Care</a>
          </div>
          <div style="background:#070c14;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">6. Automotive AC and Electrical Diagnostics</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:10px;">Automated R134a/R1234yf recovery, dry nitrogen leak testing, compressor rebuilds, battery drain tracing, oscilloscope testing, and ECU coding.</p>
            <a href="/services/car-ac-repair/" style="color:#22d3ee;font-size:13px;font-weight:700;text-decoration:none;">Explore AC &amp; Electrical Services</a>
          </div>
          <div style="background:#070c14;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">7. Paint Protection Film (PPF)</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:10px;">Blade-free self-healing TPU Paint Protection Film cut via CAD digital plotter and installed inside a dust-free cleanroom studio.</p>
            <a href="/services/paint-protection-film-ppf/" style="color:#22d3ee;font-size:13px;font-weight:700;text-decoration:none;">Explore PPF Cleanroom Studio</a>
          </div>
          <div style="background:#070c14;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">8. Ceramic Coating and Detailing</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:10px;">Multi-stage dual-action paint correction guided by micron gauges, 9H nano-ceramic coating, and 140°C interior steam sanitation.</p>
            <a href="/services/car-detailing/" style="color:#22d3ee;font-size:13px;font-weight:700;text-decoration:none;">Explore Detailing &amp; 9H Ceramic</a>
          </div>
          <div style="background:#070c14;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">9. Vinyl Wrapping and Vehicle Protection</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:10px;">Reversible cast vinyl color-change wraps in matte, satin, gloss, and carbon finishes with edge tucking and 90°C post-heating.</p>
            <a href="/services/vehicle-wrap/" style="color:#22d3ee;font-size:13px;font-weight:700;text-decoration:none;">Explore Vinyl Wrapping</a>
          </div>
          <div style="background:#070c14;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">10. Body Repair, Paint and Restoration</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:10px;">Paintless Dent Repair (PDR), collision frame alignment, spectrophotometer paint matching, paint booth refinishing, and body kit fitment.</p>
            <a href="/services/body-repair-paint/" style="color:#22d3ee;font-size:13px;font-weight:700;text-decoration:none;">Explore Body Repair &amp; Paint</a>
          </div>
        </div>
      </section>

      <section style="margin-bottom:40px;">
        <h2 style="font-size:28px;font-weight:900;color:#ffffff;margin-bottom:16px;">Workshop Facilities, Inspection Rigor &amp; Quality Standards</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:24px;">
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:24px;">
            <h3 style="font-size:18px;font-weight:800;color:#22d3ee;margin-bottom:8px;">Workshop Facilities &amp; Equipment</h3>
            <ul style="color:#cbd5e1;font-size:13px;line-height:1.6;padding-left:18px;margin:0;">
              <li style="margin-bottom:6px;"><strong style="color:#ffffff;">Vehicle Inspections &amp; Pre-Purchase Diagnostics:</strong> Comprehensive vehicle health checks, clear diagnostic findings, and itemized repair recommendations to help customers make informed buying and maintenance decisions.</li>
              <li style="margin-bottom:6px;"><strong style="color:#ffffff;">Catalytic Cleaning:</strong> Specialized cleaning removes carbon deposits and contaminants to support exhaust flow and engine efficiency.</li>
              <li style="margin-bottom:6px;"><strong style="color:#ffffff;">PPF &amp; Ceramic Cleanroom:</strong> Computerized CAD plotters cut TPU patterns off the vehicle—keeping blades off clear coat—paired with infrared curing lamps.</li>
              <li><strong style="color:#ffffff;">Vehicle Tuning Service:</strong> Precision ECU diagnostics and calibration optimize engine response, drivability, and vehicle performance.</li>
            </ul>
          </div>
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:24px;">
            <h3 style="font-size:18px;font-weight:800;color:#22d3ee;margin-bottom:8px;">HD Video Proof &amp; Itemized Quotes</h3>
            <p style="color:#cbd5e1;font-size:14px;line-height:1.6;">Technicians share diagnostic findings, teardown videos, and line-by-line parts and labor quotes for owner approval before repair work proceeds.</p>
          </div>
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:24px;">
            <h3 style="font-size:18px;font-weight:800;color:#22d3ee;margin-bottom:8px;">Written Warranty Coverage</h3>
            <p style="color:#cbd5e1;font-size:14px;line-height:1.6;">12-month or 15,000 km warranty on engine and transmission rebuilds plus up to 10-year manufacturer film coverage on self-healing TPU PPF.</p>
          </div>
        </div>
      </section>

      <section style="margin-bottom:40px;">
        <h2 style="font-size:28px;font-weight:900;color:#ffffff;margin-bottom:12px;">Automotive Experience &amp; Technical Expertise</h2>
        <p style="font-size:15px;color:#cbd5e1;line-height:1.75;max-width:900px;margin-bottom:12px;">
          At HyperTune Garage, our experience is built around hands-on automotive care across multiple vehicle brands and service categories. From mechanical repairs and advanced diagnostics to pre-purchase inspections and vehicle protection, we focus on understanding each vehicle's condition before recommending the right solution.
        </p>
        <p style="font-size:15px;color:#cbd5e1;line-height:1.75;max-width:900px;margin-bottom:20px;">
          Our approach combines systematic inspections, modern diagnostic equipment, practical workshop expertise and transparent communication—helping customers make confident decisions about their vehicles.
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:20px;">
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">1. Multi-Brand Vehicle Experience</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;">Experience working with Japanese, German, European and other vehicle makes, from everyday cars to luxury and performance vehicles.</p>
          </div>
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">2. Diagnostic &amp; Pre-Purchase Expertise</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;">Vehicle health assessments, fault diagnosis, electronic system checks and pre-purchase inspections to help customers make informed decisions.</p>
          </div>
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">3. Mechanical Repair Experience</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;">Hands-on work covering engine, transmission, suspension, braking, cooling and electrical systems.</p>
          </div>
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">4. Vehicle Protection &amp; Appearance</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;">Practical experience in paint protection film, ceramic coating, detailing, vinyl wrapping and body refinishing.</p>
          </div>
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
            <h3 style="font-size:17px;font-weight:800;color:#ffffff;margin-bottom:8px;">5. Customer-Focused Workshop Process</h3>
            <p style="color:#94a3b8;font-size:13px;line-height:1.6;">Inspection evidence, transparent findings, itemized estimates and customer approval before repair work begins.</p>
          </div>
        </div>
      </section>

      <section style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;">
        <h2 style="font-size:22px;font-weight:900;color:#ffffff;margin-bottom:10px;">Police Foundation Sector O-9 Flagship Hub</h2>
        <p style="color:#cbd5e1;font-size:14px;line-height:1.6;margin-bottom:14px;">
          Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan • Sat – Thu: 10:00 AM – 10:00 PM (Friday Closed)
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;">
          <a href="tel:+923330177717" style="color:#22d3ee;font-weight:700;text-decoration:none;">+92 333 0177717</a>
          <a href="mailto:info@hypertunegarage.pk" style="color:#cbd5e1;text-decoration:none;">info@hypertunegarage.pk</a>
          <a href="https://www.google.com/maps?cid=17560337124718439273&amp;g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&amp;hl=en&amp;gl=PK&amp;source=embed" target="_blank" rel="noopener noreferrer" style="color:#22d3ee;font-weight:700;text-decoration:none;">Google Maps Directions</a>
          <a href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage,%20I%20want%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" style="color:#34d399;font-weight:700;text-decoration:none;">WhatsApp Consultation</a>
          <a href="/contact/" style="color:#cbd5e1;font-weight:700;text-decoration:none;">Contact Page</a>
          <a href="https://www.instagram.com/hyper.tunegarage" target="_blank" rel="noopener noreferrer" style="color:#cbd5e1;text-decoration:none;">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61589327521589" target="_blank" rel="noopener noreferrer" style="color:#cbd5e1;text-decoration:none;">Facebook</a>
          <a href="https://www.tiktok.com/@hypertune.garage" target="_blank" rel="noopener noreferrer" style="color:#cbd5e1;text-decoration:none;">TikTok</a>
          <a href="https://www.youtube.com/@HyperTuneGarage" target="_blank" rel="noopener noreferrer" style="color:#cbd5e1;text-decoration:none;">YouTube</a>
        </div>
      </section>
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
        <a href="https://www.instagram.com/hyper.tunegarage" target="_blank" rel="noopener noreferrer" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;display:inline-block;">View Instagram Gallery</a>
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
          Complete index of all pages, ${servicesDataSSR.length} core automotive repair services, ${brandsDataSSR.length} vehicle brand specialist hubs, workshop locations, and technical diagnostic guides at HyperTune Garage.
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
        <h2 style="font-size:20px;font-weight:800;color:#06b6d4;margin-bottom:16px;">🛠️ ${servicesDataSSR.length} Core Automotive Repair Services</h2>
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
        <h2 style="font-size:20px;font-weight:800;color:#06b6d4;margin-bottom:16px;">🚗 ${brandsDataSSR.length} Vehicle Brand Specialist Hubs</h2>
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
              Get PPF, Ceramic Coating, Car Detailing, Vehicle Diagnostics, Engine Tune-up, Auto Repair &amp; Maintenance Services at our <strong>Islamabad</strong> hub serving <strong>Rawalpindi</strong>. We care for Honda, Toyota, Suzuki, Hyundai, Kia, Haval, MG, Changan, and European cars.
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
                      <p class="text-white font-extrabold text-xs sm:text-sm leading-tight truncate">HyperTune Garage Precision PPF Studio</p>
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

      <!-- Trust Standards -->
      <section class="max-w-7xl mx-auto px-4 space-y-10">
        <div class="text-center space-y-3 max-w-2xl mx-auto">
          <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Uncompromising Standards</span>
          <h2 class="text-3xl font-black text-white">Why Vehicle Owners Trust HyperTune Garage</h2>
          <p class="text-slate-400 text-sm">We deliver dealer-grade precision without high dealership costs or guesswork.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <h3 class="text-lg font-bold text-white">Official Dealer-Level Diagnostics</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Our team uses Toyota Techstream, Honda HDS, Suzuki SDT-II, Hyundai GDS, Kia KDS, JLR Pathfinder, and OEM scan tools.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <h3 class="text-lg font-bold text-white">100% Genuine Barcode Sourced Parts</h3>
            <p class="text-slate-400 text-xs leading-relaxed">We source Bosch, Lemförder, Sachs, Bilstein, and genuine OEM parts with full barcode trace safety.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <h3 class="text-lg font-bold text-white">12-Month / 15,000 km Warranty</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Every engine overhaul, suspension job, and electrical repair includes our written warranty.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <h3 class="text-lg font-bold text-white">Master Certified Engineers</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Trained mechanical engineers and ECU software specialists handle every job to European workshop standards.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <h3 class="text-lg font-bold text-white">Live Video Inspection Reports</h3>
            <p class="text-slate-400 text-xs leading-relaxed">You receive HD video proof of worn parts before you approve any repair work.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <h3 class="text-lg font-bold text-white">State-of-the-Art Diagnostics &amp; Alignment</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Our bays feature OEM diagnostic scanners, 3D laser wheel alignment rigs, and ultrasonic cleaners.</p>
          </div>
        </div>
      </section>

      <!-- Core Services Showcase (All ${servicesData.length} Services) -->
      <section class="max-w-7xl mx-auto px-4 space-y-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Automotive Engineering &amp; Studio Offerings</span>
            <h2 class="text-3xl font-black text-white mt-1">All Main Services</h2>
          </div>
          <a href="/services/" class="text-cyan-400 font-bold text-sm hover:underline">All Services &rarr;</a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${servicesData.map((s) => `
            <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
              <span class="text-cyan-400 font-bold text-xs uppercase">${escapeHtml(s.category)}</span>
              <h3 class="text-lg font-bold text-white">${escapeHtml(s.title)}</h3>
              <p class="text-slate-400 text-xs leading-relaxed">${escapeHtml(s.shortDesc)}</p>
              <a href="/services/${s.slug}/" class="text-cyan-400 font-bold text-xs hover:underline inline-block pt-1">Read Technical Specs &rarr;</a>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Interactive Cost Estimator -->
      ${(() => {
        const defaultService = servicesData.find((s) => s.id === 'engine-services') || servicesData[0];
        return `
      <section class="max-w-7xl mx-auto px-4 space-y-6">
        <div class="bg-[#0b121e] border border-cyan-500/20 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
          <div>
            <h2 class="text-xl font-bold text-white">Instant Repair &amp; Maintenance Cost Estimator</h2>
            <p class="text-xs text-slate-400">Select your vehicle make and service to check estimated repair costs.</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-6 space-y-4">
              <p class="text-xs font-bold text-slate-300 uppercase tracking-wider">1. Select Vehicle Make</p>
              <p class="text-xs text-slate-400 leading-relaxed">${brandsData.map((b) => escapeHtml(getBrandDisplayName(b.name))).join(', ')}</p>
              <p class="text-xs font-bold text-slate-300 uppercase tracking-wider">2. Select Required Service</p>
              <ul class="space-y-1 text-xs text-slate-300">
                ${servicesData.map((s) => `<li class="flex items-center justify-between"><span>${escapeHtml(s.title)}</span><span class="text-cyan-400">${escapeHtml(s.priceRange.split('-')[0])}</span></li>`).join('')}
              </ul>
            </div>
            <div class="lg:col-span-6 bg-[#070c14] border border-cyan-500/20 rounded-2xl p-6 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span class="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">Estimated Repair Cost</span>
                  <p class="text-lg font-black text-white">${escapeHtml(defaultService.title)}</p>
                  <p class="text-xs text-cyan-400 font-semibold">Vehicle: Toyota</p>
                </div>
                <div class="text-right">
                  <span class="text-xs text-slate-400 block">Est Price Range</span>
                  <span class="text-lg md:text-xl font-black text-cyan-400">${escapeHtml(defaultService.priceRange)}</span>
                </div>
              </div>
              <p class="text-xs text-slate-300">Estimated Time Required: <strong class="text-white">${escapeHtml(defaultService.estimatedTime)}</strong></p>
              <p class="text-xs text-slate-300">Included Protection: <strong class="text-white">12-Month / 15,000km Warranty</strong></p>
              <p class="text-xs text-slate-300">Parts Guarantee: <strong class="text-white">100% Genuine OEM Barcode Sourced</strong></p>
              ${defaultService.subServicePrices && defaultService.subServicePrices.length > 0 ? `
              <div class="pt-3 border-t border-slate-800 space-y-1.5">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Sub-Service Price List:</span>
                ${defaultService.subServicePrices.map((sub) => `<div class="flex items-center justify-between text-[11px] bg-[#0b121e] px-2.5 py-1 rounded-lg border border-slate-800"><span class="text-slate-300 font-semibold">${escapeHtml(sub.name)}</span><span class="text-cyan-400 font-bold">${escapeHtml(sub.price)}</span></div>`).join('')}
              </div>` : ''}
              <a href="/book-appointment/" class="inline-block py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs">Book Service Appointment for this Estimate</a>
              <p class="text-[11px] text-slate-400 text-center italic pt-2 border-t border-slate-800">* Estimated price range based on standard vehicle specs. Final quote confirmed after diagnostic evaluation.</p>
            </div>
          </div>
        </div>

        <div class="bg-[#0b121e] border border-slate-800/90 rounded-2xl p-5 md:p-6 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <p class="text-xs font-bold text-slate-300 uppercase tracking-wider">Dedicated Brand Specialist Hubs (${brandsData.length} Makes)</p>
            <a href="/brands/" class="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors">All 28 Brands &rarr;</a>
          </div>
          <div class="flex flex-wrap gap-2">
            ${brandsData.map((b) => `<a href="/brands/${b.slug}/" class="px-3 py-1.5 rounded-xl bg-[#070c14] border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors">${escapeHtml(getBrandDisplayName(b.name))}</a>`).join('')}
          </div>
        </div>
      </section>`;
      })()}

      <!-- Before & After Repair Restorations -->
      <section class="max-w-7xl mx-auto px-4 space-y-8">
        <div class="text-center space-y-2 max-w-xl mx-auto">
          <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Craftsmanship Proof</span>
          <h2 class="text-3xl font-black text-white">Real Restoration &amp; Tuning Work</h2>
          <p class="text-slate-400 text-sm">Drag the slider to compare each car before and after HyperTune Garage treatment.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-3">
            <h3 class="font-bold text-white text-base md:text-lg">Haval H6 GT Full Body TPU Paint Protection Film (PPF)</h3>
            <p class="text-xs text-slate-400">Before PPF: Factory Maroon Finish &bull; After PPF: Self-Healing Mirror Armor</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-white text-base md:text-lg">Toyota Land Cruiser TPU PPF &amp; Ceramic Coating</h3>
            <p class="text-xs text-slate-400">Before PPF: Factory Metallic Grey &bull; After PPF: 9H Hydrophobic Mirror Gloss</p>
          </div>
        </div>
      </section>

      <!-- Customer Reviews & Google Ratings + HyperTune Performance Metrics -->
      <section class="bg-[#070c14] border-y border-slate-800/80 py-16 px-4">
        <div class="max-w-7xl mx-auto space-y-12">
          <div class="bg-[#0b121e] border border-cyan-500/20 rounded-3xl p-6 md:p-8 space-y-6">
            <div class="border-b border-slate-800 pb-4">
              <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Proven Operations &amp; Track Record</span>
              <h2 class="text-2xl font-black text-white mt-1">HyperTune Performance Metrics</h2>
              <p class="text-xs text-cyan-400 font-semibold mt-0.5">HyperTune Garage - Islamabad Flagship Hub</p>
            </div>
            <p class="text-slate-300 text-sm leading-relaxed">
              HyperTune Garage follows strict workshop standards and measures every repair. Our diagnostic bays run dealer-grade German scan tools that read OEM fault codes down to the millivolt. This gives us hard data before we touch a bolt. We handle engine diagnostics, AC and auto electrical repairs, and blade-free PPF in a dust-free cleanroom. You also get clear, itemized pricing on every bill. We build every service for real, lasting vehicle performance.
            </p>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-[#070c14] border border-slate-800"><span class="text-3xl font-black text-cyan-400 block">15,000+</span><span class="text-xs font-semibold text-slate-300">Vehicles Serviced</span></div>
              <div class="p-4 rounded-2xl bg-[#070c14] border border-slate-800"><span class="text-3xl font-black text-cyan-400 block">99.4%</span><span class="text-xs font-semibold text-slate-300">Client Satisfaction</span></div>
              <div class="p-4 rounded-2xl bg-[#070c14] border border-slate-800"><span class="text-3xl font-black text-cyan-400 block">15+</span><span class="text-xs font-semibold text-slate-300">Certified Master Techs</span></div>
              <div class="p-4 rounded-2xl bg-[#070c14] border border-slate-800"><span class="text-3xl font-black text-cyan-400 block">2</span><span class="text-xs font-semibold text-slate-300">Mega Workshop Hubs</span></div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Customer Reviews</span>
                <h2 class="text-3xl font-black text-white">Verified Customer Reviews (4.8 / 5.0)</h2>
              </div>
              <a href="/testimonials/" class="px-4 py-2 rounded-xl bg-[#0b121e] border border-slate-800 text-slate-300 font-bold text-xs">Read All Customer Reviews &rarr;</a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${googleBusinessData.reviews.slice(0, 3).map((review) => `
                <div class="bg-[#0b121e] border border-slate-800 rounded-3xl p-6 space-y-4">
                  <div class="space-y-3">
                    <div>
                      <h3 class="font-extrabold text-white text-sm">${escapeHtml(review.authorName)}</h3>
                      <span class="text-[11px] text-slate-400 block">${escapeHtml(review.relativeTimeText || 'Verified Customer')}</span>
                    </div>
                    <p class="text-slate-300 text-xs leading-relaxed italic">"${escapeHtml(review.text)}"</p>
                  </div>
                  ${review.ownerResponse ? `
                    <div class="mt-4 pt-3 border-t border-slate-800/80 bg-slate-900/90 p-4 rounded-2xl space-y-1.5 border-l-4 border-l-cyan-400">
                      <span class="font-extrabold text-cyan-400 text-xs block">HyperTune Garage — Owner (Official Reply)</span>
                      <p class="text-slate-200 text-xs leading-relaxed italic">"${escapeHtml(review.ownerResponse)}"</p>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- 4-Step Service Process & Workshop FAQ Bar -->
      <section class="max-w-7xl mx-auto px-4 space-y-10">
        <div class="text-center space-y-2 max-w-xl mx-auto">
          <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Transparent Workflow</span>
          <h2 class="text-3xl font-black text-white">Our 4-Step Repair &amp; Service Process</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <span class="text-4xl font-black text-cyan-500/30 block">01</span>
            <h3 class="text-base font-bold text-white">Book Appointment</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Book online or on WhatsApp. Pick a slot that fits your schedule in Islamabad or Rawalpindi.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <span class="text-4xl font-black text-cyan-500/30 block">02</span>
            <h3 class="text-base font-bold text-white">Computer Diagnostic</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Our master techs run an OEM scanner audit and share a clear, itemized quote.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <span class="text-4xl font-black text-cyan-500/30 block">03</span>
            <h3 class="text-base font-bold text-white">Video Approval</h3>
            <p class="text-slate-400 text-xs leading-relaxed">Watch HD video proof of worn parts. We start work only after you approve.</p>
          </div>
          <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 shadow-lg">
            <span class="text-4xl font-black text-cyan-500/30 block">04</span>
            <h3 class="text-base font-bold text-white">Road Test &amp; Warranty</h3>
            <p class="text-slate-400 text-xs leading-relaxed">We complete a road test, wash your car, and hand over a 12-month written warranty.</p>
          </div>
        </div>
        <div class="bg-[#0b121e] border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest block">Got Questions?</span>
            <h3 class="text-white text-lg font-bold mt-1">Workshop Repair, Warranty &amp; Booking FAQs</h3>
            <p class="text-slate-400 text-xs mt-1">Read clear answers on genuine OEM parts, 12-month warranty terms, turnaround times, and booking.</p>
          </div>
          <a href="/faq/" class="px-5 py-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 font-bold text-xs hover:bg-slate-800 shrink-0 transition-colors">
            Browse Workshop FAQs &rarr;
          </a>
        </div>
      </section>

      <!-- Workshop Locations -->
      <section class="max-w-7xl mx-auto px-4 space-y-8">
        <div class="text-center space-y-2 max-w-2xl mx-auto">
          <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Visit Our Workshops</span>
          <h2 class="text-3xl font-black text-white">Islamabad &amp; Rawalpindi Locations</h2>
          <p class="text-slate-400 text-sm">Visit our active Islamabad Flagship Hub, or check our upcoming Rawalpindi Hub.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${locationsDataSSR.map((loc) => `
            <div class="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-4 shadow-xl">
              <span class="inline-block bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold uppercase">${escapeHtml(loc.city)} Hub</span>
              <h3 class="text-xl font-bold text-white">${escapeHtml(loc.branchName)}</h3>
              <p class="text-slate-400 text-xs leading-relaxed">${escapeHtml(loc.address)}</p>
              <div class="flex gap-3 pt-2">
                <a href="tel:${loc.phone.replace(/[^0-9+]/g, '')}" class="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs">Call: ${loc.phone}</a>
                <a href="/locations/${loc.slug}/" class="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs">Branch Details &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Google Map Location -->
      <section class="max-w-7xl mx-auto px-4 space-y-6">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div class="space-y-2">
            <span class="text-cyan-400 font-bold text-xs uppercase tracking-widest">Workshop Navigation &amp; Pin</span>
            <h2 class="text-2xl md:text-3xl font-black text-white">Find HyperTune Garage on Google Maps</h2>
            <p class="text-xs text-slate-400 max-w-xl">Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan.</p>
          </div>
          <a href="https://www.google.com/maps?cid=17560337124718439273&amp;g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&amp;hl=en&amp;gl=PK&amp;source=embed" target="_blank" rel="noopener noreferrer" class="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs shrink-0">Open in Google Maps</a>
        </div>
        <div class="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-[400px] w-full bg-[#070c14] flex flex-col items-center justify-center p-6 text-center space-y-4">
          <p class="text-white font-black text-base">HyperTune Garage Google Map Location</p>
          <p class="text-slate-400 text-xs">Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000</p>
          <a href="https://www.google.com/maps?cid=17560337124718439273&amp;g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&amp;hl=en&amp;gl=PK&amp;source=embed" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold text-xs">Open Google Maps App</a>
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
    <div class="sticky top-0 z-40">
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
  const normalizedPathForOg = cleanPath.replace(/^\/+|\/+$/g, '');
  const isBlogArticleOg = normalizedPathForOg.startsWith('blog/') && normalizedPathForOg !== 'blog';
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="${isBlogArticleOg ? 'article' : 'website'}" />`
  );
  updatedHtml = updatedHtml.replace(
    /<meta\s+property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${metaInfo.ogImage}" />`
  );

  // Replace Twitter Title & Desc & Image
  updatedHtml = updatedHtml.replace(
    /<meta\s+name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${metaInfo.title.replace(/"/g, '&quot;')}" />`
  );
  updatedHtml = updatedHtml.replace(
    /<meta\s+name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${metaInfo.description.replace(/"/g, '&quot;')}" />`
  );
  updatedHtml = updatedHtml.replace(
    /<meta\s+name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${metaInfo.ogImage}" />`
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
