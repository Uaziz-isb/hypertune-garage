import { servicesDataSSR, brandsDataSSR, locationsDataSSR, blogDataSSR, findServiceSSR } from '../data/ssrData';

export interface RouteMetaInfo {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
  schemas: object[];
  isNotFound?: boolean;
}

export function normalizeCanonicalUrl(inputPathOrUrl: string, baseUrl: string = 'https://hypertunegarage.pk'): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  let path = inputPathOrUrl || '/';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    try {
      const u = new URL(path);
      path = u.pathname;
    } catch {
      path = path.replace(/^https?:\/\/[^/]+/, '');
    }
  }

  path = path.split('?')[0].split('#')[0];
  const trimmed = path.replace(/^\/+|\/+$/g, '');

  if (!trimmed) {
    return `${cleanBase}/`;
  }

  return `${cleanBase}/${trimmed}/`;
}

const BASE_BUSINESS_SCHEMA = (canonicalUrl: string, ogImage: string) => ({
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'HyperTune Garage',
  image: ogImage,
  '@id': canonicalUrl,
  url: canonicalUrl,
  telephone: '+923330177717',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9',
    addressLocality: 'Islamabad',
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
    ratingValue: '4.9',
    reviewCount: '348',
  },
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
  let description = 'Pakistan’s premier automotive workshop specializing in Toyota, Honda, Suzuki, Hyundai, Kia, Changan, Haval, MG, BYD, Lexus, Land Rover, Master Engine Overhauls, Hybrid Battery Repair & PPF in Islamabad Police Foundation & Rawalpindi.';
  let keywords = 'car workshop islamabad, auto repair rawalpindi, toyota repair islamabad, honda service rawalpindi, suzuki garage, haval specialist, byd ev service, hybrid battery repair, engine overhaul islamabad';
  const schemas: object[] = [BASE_BUSINESS_SCHEMA(canonicalUrl, ogImage)];
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
        description = service.shortDesc.slice(0, 155);
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

        if (service.faqs && service.faqs.length > 0) {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          });
        }
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
        description = brand.tagline.slice(0, 155);
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

        if (brand.faqs && brand.faqs.length > 0) {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: brand.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          });
        }
      } else {
        isNotFound = true;
        title = '404 - Brand Specialist Not Found | HyperTune Garage';
        description = 'The requested brand specialist page could not be found. Explore our 24 vehicle brand specialist hubs in Islamabad & Rawalpindi.';
      }
    } else {
      title = 'Vehicle Brand Specialists in Islamabad & Rawalpindi | HyperTune Garage';
      description = 'Certified specialist repair and maintenance for Toyota, Honda, Suzuki, Hyundai, Kia, Changan, Haval, MG, BYD, Chery, Isuzu, FAW, Daihatsu, Nissan, Mitsubishi, Mazda, Subaru, Lexus, Land Rover, Range Rover, Jeep, Ford, Chevrolet & Volvo in Islamabad.';
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
        description = post.excerpt.slice(0, 155);
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
            '@type': 'AutoRepair',
            name: 'HyperTune Garage',
            logo: {
              '@type': 'ImageObject',
              url: ogImage,
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
    title = 'Customer Reviews & Google Ratings (4.9 / 5.0) | HyperTune Garage';
    description = 'Read verified customer reviews and 4.9-star Google ratings for HyperTune Garage Islamabad & Rawalpindi automotive workshop.';
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
    description = 'Terms of service, warranty coverage guidelines, and workshop service policies for HyperTune Garage.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Terms & Conditions',
      item: canonicalUrl,
    });
  } else if (root === 'warranty-specs' || root === 'warranty') {
    title = '12-Month Repair Warranty Specs | HyperTune Garage';
    description = 'Comprehensive details on HyperTune Garage 12-month / 20,000 km bumper-to-bumper automotive repair warranty.';
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
  <header style="background:#05080e;border-bottom:1px solid #1e293b;padding:12px 16px;">
    <div style="max-width:1280px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <a href="/" style="display:flex;align-items:center;gap:8px;text-decoration:none;color:#ffffff;">
        <span style="font-weight:900;font-size:20px;letter-spacing:1px;color:#06b6d4;">HYPERTUNE</span>
        <span style="font-weight:700;font-size:16px;color:#f8fafc;">GARAGE</span>
      </a>
      <nav style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;font-size:14px;font-weight:600;">
        <a href="/" style="color:#f8fafc;text-decoration:none;">Home</a>
        <a href="/services/" style="color:#cbd5e1;text-decoration:none;">Services</a>
        <a href="/brands/" style="color:#cbd5e1;text-decoration:none;">Brand Specialists</a>
        <a href="/locations/" style="color:#cbd5e1;text-decoration:none;">Locations</a>
        <a href="/testimonials/" style="color:#cbd5e1;text-decoration:none;">Reviews (4.9★)</a>
        <a href="/blog/" style="color:#cbd5e1;text-decoration:none;">Technical Blog</a>
        <a href="/faq/" style="color:#cbd5e1;text-decoration:none;">FAQ</a>
        <a href="/contact/" style="color:#cbd5e1;text-decoration:none;">Contact</a>
      </nav>
      <div style="display:flex;align-items:center;gap:12px;">
        <a href="tel:+923330177717" style="color:#06b6d4;font-weight:700;text-decoration:none;font-size:14px;">📞 +92 333 0177717</a>
        <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:8px 16px;border-radius:8px;font-weight:800;text-decoration:none;font-size:13px;">Book Service</a>
      </div>
    </div>
  </header>`;

  const footerHtml = `
  <footer style="background:#05080e;border-top:1px solid #1e293b;padding:48px 16px;color:#94a3b8;font-size:13px;margin-top:48px;">
    <div style="max-width:1280px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:32px;">
      <div>
        <h3 style="color:#ffffff;font-size:16px;font-weight:800;margin-bottom:12px;">HyperTune Garage</h3>
        <p style="line-height:1.6;margin-bottom:16px;">Islamabad's premier automotive engineering and car care facility. Certified technicians, German OEM diagnostics, and 12-month warranties.</p>
        <p style="color:#06b6d4;font-weight:700;">📍 Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad</p>
      </div>
      <div>
        <h4 style="color:#ffffff;font-size:14px;font-weight:700;margin-bottom:12px;">Popular Services</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:2;">
          <li><a href="/services/paint-protection-film-ppf/" style="color:#94a3b8;text-decoration:none;">Self-Healing TPU PPF</a></li>
          <li><a href="/services/car-detailing/" style="color:#94a3b8;text-decoration:none;">9H Ceramic Coating</a></li>
          <li><a href="/services/engine-services/" style="color:#94a3b8;text-decoration:none;">Engine Overhauls</a></li>
          <li><a href="/services/electrical-electronics/" style="color:#94a3b8;text-decoration:none;">Electrical &amp; Wiring Diagnostics</a></li>
          <li><a href="/services/brake-suspension-steering/" style="color:#94a3b8;text-decoration:none;">3D Laser Alignment</a></li>
        </ul>
      </div>
      <div>
        <h4 style="color:#ffffff;font-size:14px;font-weight:700;margin-bottom:12px;">Brand Specialists</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:2;">
          <li><a href="/brands/toyota-repair-islamabad/" style="color:#94a3b8;text-decoration:none;">Toyota &amp; Lexus Hybrid</a></li>
          <li><a href="/brands/honda-service-islamabad/" style="color:#94a3b8;text-decoration:none;">Honda Specialists</a></li>
          <li><a href="/brands/bmw-repair-islamabad/" style="color:#94a3b8;text-decoration:none;">BMW ISTA Diagnostics</a></li>
          <li><a href="/brands/mercedes-service-islamabad/" style="color:#94a3b8;text-decoration:none;">Mercedes-Benz Xentry</a></li>
          <li><a href="/brands/audi-repair-islamabad/" style="color:#94a3b8;text-decoration:none;">Audi &amp; Porsche Care</a></li>
        </ul>
      </div>
      <div>
        <h4 style="color:#ffffff;font-size:14px;font-weight:700;margin-bottom:12px;">Quick Links</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:2;">
          <li><a href="/blog/" style="color:#94a3b8;text-decoration:none;">Technical Blog &amp; Guides</a></li>
          <li><a href="/sitemap/" style="color:#94a3b8;text-decoration:none;">HTML Sitemap</a></li>
          <li><a href="/warranty-specs/" style="color:#94a3b8;text-decoration:none;">12-Month Warranty Policy</a></li>
          <li><a href="/privacy-policy/" style="color:#94a3b8;text-decoration:none;">Privacy Policy</a></li>
          <li><a href="/terms-conditions/" style="color:#94a3b8;text-decoration:none;">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>
    <div style="max-width:1280px;margin:32px auto 0;padding-top:24px;border-top:1px solid #1e293b;text-align:center;font-size:12px;color:#64748b;">
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
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px;">
          ${service.faqs.map((faq) => `
            <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;">
              <h3 style="font-size:15px;font-weight:700;color:#ffffff;margin-bottom:6px;">${escapeHtml(faq.question)}</h3>
              <p style="font-size:13px;color:#94a3b8;line-height:1.5;">${escapeHtml(faq.answer)}</p>
            </div>
          `).join('')}
        </div>
        ` : ''}

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
      mainContentHtml = `
      <main style="max-width:900px;margin:32px auto;padding:0 16px;">
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
          ${post.content.split('\n\n').map((para) => {
            if (para.startsWith('## ')) {
              return `<h2 style="font-size:22px;font-weight:800;color:#ffffff;margin:24px 0 12px;">${escapeHtml(para.replace('## ', ''))}</h2>`;
            }
            if (para.startsWith('### ')) {
              return `<h3 style="font-size:18px;font-weight:700;color:#ffffff;margin:20px 0 8px;">${escapeHtml(para.replace('### ', ''))}</h3>`;
            }
            if (para.startsWith('- ')) {
              const items = para.split('\n').map((item) => `<li>${escapeHtml(item.replace('- ', ''))}</li>`).join('');
              return `<ul style="padding-left:20px;margin-bottom:16px;">${items}</ul>`;
            }
            return `<p style="margin-bottom:16px;">${escapeHtml(para)}</p>`;
          }).join('')}
        </div>

        <div style="background:#070c14;border:1px solid #06b6d4;border-radius:16px;padding:24px;text-align:center;">
          <h3 style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:8px;">Need Expert Diagnostic Help?</h3>
          <p style="font-size:14px;color:#94a3b8;margin-bottom:16px;">Schedule a live scanner evaluation at HyperTune Garage Islamabad.</p>
          <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;display:inline-block;">Book Diagnostic Scan</a>
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
        Visit our state-of-the-art flagship automotive facility in Islamabad Police Foundation or learn about our upcoming Rawalpindi expansion.
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
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <div style="text-align:center;margin-bottom:40px;">
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

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:24px;">
        ${blogDataSSR.map((b) => `
          <article style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
                <span style="font-size:11px;font-weight:700;color:#06b6d4;text-transform:uppercase;">${escapeHtml(b.category)}</span>
                <span style="font-size:11px;color:#64748b;">${escapeHtml(b.readTime)}</span>
              </div>
              <h2 style="font-size:18px;font-weight:800;color:#ffffff;margin:0 0 12px;line-height:1.4;">${escapeHtml(b.title)}</h2>
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
        <p style="color:#94a3b8;font-size:14px;margin-bottom:20px;">Follow our daily automotive transformations and live dyno runs.</p>
        <a href="https://instagram.com/hypertunegarage" target="_blank" rel="noopener noreferrer" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;display:inline-block;">View Instagram Gallery</a>
      </div>
    </main>`;
  } else if (root === 'testimonials' || root === 'reviews') {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;text-align:center;margin-bottom:12px;">
        Customer Reviews &amp; 4.9★ Google Ratings
      </h1>
      <p style="font-size:16px;color:#94a3b8;text-align:center;max-width:800px;margin:0 auto 40px;">
        Verified reviews from vehicle owners across Islamabad and Rawalpindi who trust HyperTune Garage for dealership-alternative repairs and detailing.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:24px;">
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;">
          <div style="color:#f59e0b;font-size:16px;margin-bottom:8px;">★★★★★</div>
          <h2 style="font-size:16px;font-weight:700;color:#ffffff;margin-bottom:8px;">Toyota Fortuner PPF &amp; Ceramic</h2>
          <p style="color:#cbd5e1;font-size:14px;line-height:1.6;">"Flawless TPU PPF installation in their clean-room studio. No dust bubbles, wrapped edges are completely invisible."</p>
          <span style="font-size:12px;color:#64748b;margin-top:12px;display:block;">— Asad Khan, Islamabad</span>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;">
          <div style="color:#f59e0b;font-size:16px;margin-bottom:8px;">★★★★★</div>
          <h2 style="font-size:16px;font-weight:700;color:#ffffff;margin-bottom:8px;">Prius Hybrid Battery Balancing</h2>
          <p style="color:#cbd5e1;font-size:14px;line-height:1.6;">"Saved over 150k compared to dealership quote. They balanced the cells, cleaned the cooling duct, and my mileage is back to 22 km/L."</p>
          <span style="font-size:12px;color:#64748b;margin-top:12px;display:block;">— Bilal Sheikh, Rawalpindi</span>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;">
          <div style="color:#f59e0b;font-size:16px;margin-bottom:8px;">★★★★★</div>
          <h2 style="font-size:16px;font-weight:700;color:#ffffff;margin-bottom:8px;">Audi A6 S-Tronic Transmission</h2>
          <p style="color:#cbd5e1;font-size:14px;line-height:1.6;">"Solved the harsh 2nd-to-1st gear jerk with genuine mechatronic rebuild and calibration. Master technicians who truly understand German engineering."</p>
          <span style="font-size:12px;color:#64748b;margin-top:12px;display:block;">— Dr. Hamza Tariq, Islamabad</span>
        </div>
      </div>
    </main>`;
  } else if (root === 'faq' || root === 'faqs') {
    mainContentHtml = `
    <main style="max-width:1000px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;text-align:center;margin-bottom:12px;">
        Frequently Asked Questions (FAQ)
      </h1>
      <p style="font-size:16px;color:#94a3b8;text-align:center;margin-bottom:40px;">
        Answers to common questions about auto repair warranties, PPF packages, booking slots, and payment methods.
      </p>
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
          <h2 style="font-size:18px;font-weight:700;color:#ffffff;margin-bottom:8px;">What warranty is offered on mechanical repairs?</h2>
          <p style="font-size:14px;color:#cbd5e1;line-height:1.6;">We offer up to a 12-month / 20,000 km warranty on master engine overhauls, transmission rebuilds, and genuine OEM parts installations.</p>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
          <h2 style="font-size:18px;font-weight:700;color:#ffffff;margin-bottom:8px;">How long does Paint Protection Film (PPF) take to install?</h2>
          <p style="font-size:14px;color:#cbd5e1;line-height:1.6;">A full vehicle TPU PPF wrap takes 2 to 4 days, which includes multi-stage paint correction, panel disassembly, edge wrapping, and infrared heat curing.</p>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
          <h2 style="font-size:18px;font-weight:700;color:#ffffff;margin-bottom:8px;">Do I need to make an appointment before visiting?</h2>
          <p style="font-size:14px;color:#cbd5e1;line-height:1.6;">While we accept emergency drive-ins, we highly recommend booking online or via WhatsApp to guarantee dedicated technician time and diagnostic bay availability.</p>
        </div>
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
          <li>Engine Rebuilds: 12-Month / 20,000 km warranty on internal mechanical components.</li>
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
          <a href="/testimonials/" style="color:#cbd5e1;text-decoration:none;">⭐ Customer Reviews (4.9★)</a>
          <a href="/gallery/" style="color:#cbd5e1;text-decoration:none;">📸 Project Gallery</a>
          <a href="/blog/" style="color:#cbd5e1;text-decoration:none;">📝 Technical Blog</a>
          <a href="/about/" style="color:#cbd5e1;text-decoration:none;">ℹ️ About HyperTune</a>
          <a href="/contact/" style="color:#cbd5e1;text-decoration:none;">📞 Contact Us</a>
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
    // HOME PAGE ONLY
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <!-- Hero Section -->
      <section style="text-align:center;margin-bottom:48px;">
        <span style="display:inline-block;background:rgba(6,182,212,0.1);color:#06b6d4;padding:6px 16px;border-radius:999px;font-size:12px;font-weight:800;letter-spacing:1px;margin-bottom:16px;">
          ISLAMABAD'S PREMIER AUTOMOTIVE WORKSHOP
        </span>
        <h1 style="font-size:42px;font-weight:900;color:#ffffff;line-height:1.2;margin-bottom:16px;max-width:960px;margin-left:auto;margin-right:auto;">
          Specialized Automotive Workshop &amp; Paint Protection Film (PPF) Studio
        </h1>
        <p style="font-size:18px;color:#94a3b8;max-width:840px;margin:0 auto 28px;line-height:1.6;">
          Master Engine Overhauls, Hybrid Battery Balancing, S-Tronic/DSG Transmissions, Climate-Controlled TPU PPF Bays &amp; 9H Ceramic Coatings in Islamabad Police Foundation &amp; Rawalpindi.
        </p>
        <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;">
          <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:12px 28px;border-radius:8px;font-weight:800;text-decoration:none;font-size:15px;">Book Inspection Slot</a>
          <a href="/services/" style="border:1px solid #334155;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;font-size:15px;">Explore All 13 Services</a>
        </div>
      </section>

      <!-- Core Services Showcase -->
      <section style="margin-bottom:48px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
          <div>
            <h2 style="font-size:24px;font-weight:800;color:#ffffff;">Core Automotive Services</h2>
            <p style="font-size:14px;color:#94a3b8;">Engine rebuilding, PPF armor, diagnostics &amp; periodic maintenance</p>
          </div>
          <a href="/services/" style="color:#06b6d4;font-weight:700;text-decoration:none;">All 13 Services &rarr;</a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;">
          ${servicesDataSSR.slice(0, 6).map((s) => `
            <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
              <span style="font-size:11px;font-weight:700;color:#06b6d4;text-transform:uppercase;">${escapeHtml(s.category)}</span>
              <h3 style="font-size:18px;font-weight:700;color:#ffffff;margin:6px 0 8px;">${escapeHtml(s.title)}</h3>
              <p style="font-size:13px;color:#94a3b8;line-height:1.5;margin-bottom:12px;">${escapeHtml(s.shortDesc)}</p>
              <a href="/services/${s.slug}/" style="color:#06b6d4;font-weight:700;text-decoration:none;font-size:13px;">Technical Details &rarr;</a>
            </div>
          `).join('')}
        </div>
      </section>
    </main>`;
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

  return `${headerHtml}\n${mainContentHtml}\n${footerHtml}`;
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
