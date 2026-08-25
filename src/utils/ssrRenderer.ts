import { servicesData as servicesDataSSR } from '../data/servicesData';
import { brandsData as brandsDataSSR } from '../data/brandsData';
import { locationsData as locationsDataSSR } from '../data/locationsData';
import { blogData as blogDataSSR } from '../data/blogData';

export interface RouteMetaInfo {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
  schemas: object[];
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
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function getRouteMetadataAndSchema(cleanPath: string, baseUrl: string): RouteMetaInfo {
  const ogImage = `${baseUrl}/images/hypertune_logo.webp`;
  const canonicalUrl = cleanPath === '/' ? `${baseUrl}/` : `${baseUrl}${cleanPath}/`;

  let title = 'HyperTune Garage - Specialized Automotive Workshop in Islamabad & Rawalpindi';
  let description = 'Pakistan’s premier automotive workshop specializing in Toyota, Honda, Suzuki, Hyundai, Kia, Changan, Haval, MG, BYD, Lexus, Land Rover, Master Engine Overhauls, Hybrid Battery Repair & PPF in Islamabad Police Foundation & Rawalpindi.';
  let keywords = 'car workshop islamabad, auto repair rawalpindi, toyota repair islamabad, honda service rawalpindi, suzuki garage, haval specialist, byd ev service, hybrid battery repair, engine overhaul islamabad';
  const schemas: object[] = [BASE_BUSINESS_SCHEMA(canonicalUrl, ogImage)];

  const pathParts = cleanPath.split('/').filter(Boolean);
  const breadcrumbItems: any[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${baseUrl}/`,
    },
  ];

  if (cleanPath.startsWith('/services/')) {
    const slug = pathParts[1];
    const service = servicesDataSSR.find((s) => s.slug === slug);
    if (service) {
      title = `${service.title} in Islamabad & Rawalpindi | HyperTune Garage`;
      description = service.shortDesc.slice(0, 155);
      keywords = `${service.title.toLowerCase()}, car repair islamabad, ${service.subServices.join(', ')}`;
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${baseUrl}/services/`,
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
    }
  } else if (cleanPath === '/services') {
    title = 'Automotive Services & Maintenance Packages | HyperTune Garage';
    description = 'Complete automotive services catalog including PPF, ceramic detailing, engine overhaul, suspension, transmission, AC repair, and 3D wheel alignment.';
    keywords = 'car services islamabad, ppf coating rawalpindi, engine repair, transmission service';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: canonicalUrl,
    });
  } else if (cleanPath.startsWith('/brands/')) {
    const slug = pathParts[1];
    const brand = brandsDataSSR.find((b) => b.slug === slug);
    if (brand) {
      title = `${brand.name} | HyperTune Garage`;
      description = brand.tagline.slice(0, 155);
      keywords = `${brand.name.toLowerCase()}, ${brand.diagnosticSoftware}, car specialist islamabad`;
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Brand Specialists',
        item: `${baseUrl}/brands/`,
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
    }
  } else if (cleanPath === '/brands') {
    title = 'Vehicle Brand Specialists in Islamabad & Rawalpindi | HyperTune Garage';
    description = 'Certified specialist repair and maintenance for Toyota, Honda, Suzuki, Hyundai, Kia, Changan, Haval, MG, BYD, Chery, Isuzu, FAW, Daihatsu, Nissan, Mitsubishi, Mazda, Subaru, Lexus, Land Rover, Range Rover, Jeep, Ford, Chevrolet & Volvo in Islamabad.';
    keywords = 'toyota repair islamabad, honda specialist rawalpindi, suzuki maintenance, hyundai tucson repair, kia sportage service, changan workshop, haval specialist, byd ev service, lexus hybrid repair, land rover workshop islamabad';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Brand Specialists',
      item: canonicalUrl,
    });
  } else if (cleanPath.startsWith('/locations/')) {
    const slug = pathParts[1];
    const location = locationsDataSSR.find((l) => l.slug === slug);
    if (location) {
      title = `${location.branchName} | HyperTune Garage`;
      description = `${location.branchName} - ${location.address || 'Islamabad & Rawalpindi'}`;
      keywords = `${location.branchName.toLowerCase()}, workshop islamabad, auto repair police foundation`;
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: `${baseUrl}/locations/`,
      });
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 3,
        name: location.branchName,
        item: canonicalUrl,
      });
    }
  } else if (cleanPath === '/locations') {
    title = 'Workshop Locations in Islamabad & Rawalpindi | HyperTune Garage';
    description = 'Discover HyperTune Garage Flagship Hub in Block E Police Foundation, Sector O-9, Islamabad, and our upcoming Rawalpindi Hub.';
    keywords = 'workshop locations islamabad, rawalpindi car garage, police foundation sector o9';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Locations',
      item: canonicalUrl,
    });
  } else if (cleanPath.startsWith('/blog/')) {
    const slug = pathParts[1];
    const post = blogDataSSR.find((b) => b.slug === slug);
    if (post) {
      title = `${post.title} | HyperTune Garage`;
      description = post.excerpt.slice(0, 155);
      keywords = post.tags.join(', ');
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog/`,
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
    }
  } else if (cleanPath === '/blog') {
    title = 'Automotive Blog, Diagnostic Guides & Maintenance Tips | HyperTune Garage';
    description = 'Authoritative automotive repair guides: P0A80 hybrid battery repair, BMW ISTA diagnostics, Audi DSG transmission fixes, PPF care & engine overhauls.';
    keywords = 'car repair blog, hybrid battery repair guide, bmw ista diagnostics, audi dsg repair, ppf guide pakistan';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: canonicalUrl,
    });
  } else if (cleanPath === '/about') {
    title = 'About HyperTune Garage | Master Auto Repair & PPF Specialists';
    description = 'Learn about HyperTune Garage, certified master automotive technicians, climate-controlled PPF bays, and state-of-the-art diagnostic facilities in Islamabad.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'About Us',
      item: canonicalUrl,
    });
  } else if (cleanPath === '/testimonials') {
    title = 'Customer Reviews & Google Ratings (4.9 / 5.0) | HyperTune Garage';
    description = 'Read verified customer reviews and 4.9-star Google ratings for HyperTune Garage Islamabad & Rawalpindi automotive workshop.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Customer Reviews',
      item: canonicalUrl,
    });
  } else if (cleanPath === '/faq') {
    title = 'Frequently Asked Questions (FAQ) | HyperTune Garage';
    description = 'Find answers about PPF lifespan, ceramic coating benefits, engine overhaul warranties, repair pricing, and booking appointments in Pakistan.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'FAQ',
      item: canonicalUrl,
    });
  } else if (cleanPath === '/contact') {
    title = 'Contact Us & Book Service | HyperTune Garage Islamabad';
    description = 'Get in touch with HyperTune Garage. Call 0333-0177717, chat on WhatsApp, or send an inquiry for vehicle repairs and PPF quotes.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Contact',
      item: canonicalUrl,
    });
  } else if (cleanPath === '/book-appointment') {
    title = 'Book Service Appointment Online | HyperTune Garage';
    description = 'Schedule your car diagnostic scan, PPF installation, ceramic detailing, or periodic maintenance online with instant WhatsApp confirmation.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Book Appointment',
      item: canonicalUrl,
    });
  } else if (cleanPath === '/sitemap') {
    title = 'HTML Sitemap & Navigation Index | HyperTune Garage';
    description = 'Complete HTML site index listing all service pages, brand specialist hubs, location guides, blog articles, and workshop resources for HyperTune Garage.';
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Sitemap',
      item: canonicalUrl,
    });
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
  };
}

export function renderSSRBody(cleanPath: string, _baseUrl: string): string {
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
        <h4 style="color:#ffffff;font-size:16px;font-weight:800;margin-bottom:12px;">HyperTune Garage Pakistan</h4>
        <p style="margin-bottom:8px;line-height:1.6;">Premier independent automotive workshop, Paint Protection Film (PPF) studio, and computerized diagnostics hub in Islamabad & Rawalpindi.</p>
        <address style="font-style:normal;line-height:1.6;color:#cbd5e1;">
          <strong>Flagship Hub:</strong> Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, Pakistan.<br />
          <strong>Phone / WhatsApp:</strong> <a href="tel:+923330177717" style="color:#06b6d4;text-decoration:none;">+92 333 0177717</a><br />
          <strong>Hours:</strong> Saturday – Thursday: 10:00 AM – 10:00 PM (Friday Closed)
        </address>
      </div>

      <div>
        <h4 style="color:#ffffff;font-size:16px;font-weight:800;margin-bottom:12px;">Automotive Services</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:2;">
          ${servicesDataSSR.slice(0, 6).map((s) => `<li><a href="/services/${s.slug}/" style="color:#94a3b8;text-decoration:none;">${escapeHtml(s.title)}</a></li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 style="color:#ffffff;font-size:16px;font-weight:800;margin-bottom:12px;">Vehicle Brand Specialists</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:2;">
          ${brandsDataSSR.map((b) => `<li><a href="/brands/${b.slug}/" style="color:#94a3b8;text-decoration:none;">${escapeHtml(b.name)}</a></li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 style="color:#ffffff;font-size:16px;font-weight:800;margin-bottom:12px;">Service Locations</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:2;">
          ${locationsDataSSR.map((l) => `<li><a href="/locations/${l.slug}/" style="color:#94a3b8;text-decoration:none;">${escapeHtml(l.branchName)}</a></li>`).join('')}
          <li><a href="/sitemap/" style="color:#06b6d4;text-decoration:none;">HTML Sitemap Index &rarr;</a></li>
        </ul>
      </div>
    </div>
    <div style="max-width:1280px;margin:32px auto 0;padding-top:24px;border-top:1px solid #1e293b;text-align:center;font-size:12px;color:#64748b;">
      &copy; 2026 HyperTune Garage Pakistan. All Rights Reserved. Master Automotive Engineering & PPF Protection.
    </div>
  </footer>`;

  let mainContentHtml = '';

  if (cleanPath.startsWith('/services/')) {
    const slug = cleanPath.split('/')[2];
    const service = servicesDataSSR.find((s) => s.slug === slug);
    if (service) {
      mainContentHtml = `
      <main style="max-width:1100px;margin:32px auto;padding:0 16px;">
        <nav style="font-size:12px;color:#64748b;margin-bottom:16px;">
          <a href="/" style="color:#06b6d4;text-decoration:none;">Home</a> &gt;
          <a href="/services/" style="color:#06b6d4;text-decoration:none;">Services</a> &gt;
          <span style="color:#cbd5e1;">${escapeHtml(service.title)}</span>
        </nav>

        <h1 style="font-size:32px;font-weight:900;color:#ffffff;line-height:1.2;margin-bottom:16px;">
          ${escapeHtml(service.title)} in Islamabad &amp; Rawalpindi
        </h1>

        <p style="font-size:16px;color:#94a3b8;line-height:1.7;margin-bottom:24px;">
          ${escapeHtml(service.fullDesc)}
        </p>

        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;margin-bottom:32px;">
          <h2 style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:16px;">Service Details &amp; Specifications</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;margin-bottom:16px;">
            <div><strong>Price Estimate:</strong> <span style="color:#06b6d4;">${escapeHtml(service.priceRange)}</span></div>
            <div><strong>Turnaround Time:</strong> <span style="color:#06b6d4;">${escapeHtml(service.estimatedTime)}</span></div>
            <div><strong>Workmanship Guarantee:</strong> <span style="color:#06b6d4;">12-Month Written Warranty</span></div>
          </div>
        </div>

        <section style="margin-bottom:32px;">
          <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Included Sub-Services &amp; Packages</h2>
          <ul style="color:#cbd5e1;line-height:1.8;padding-left:20px;">
            ${service.subServices.map((sub) => `<li>${escapeHtml(sub)}</li>`).join('')}
          </ul>
        </section>

        ${service.processSteps && service.processSteps.length > 0 ? `
        <section style="margin-bottom:32px;">
          <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Our Engineering Workflow</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;">
            ${service.processSteps.map((step, idx) => `
              <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;">
                <span style="font-size:20px;font-weight:900;color:#06b6d4;">0${idx + 1}</span>
                <h3 style="font-size:16px;font-weight:700;color:#ffffff;margin:8px 0;">${escapeHtml(step.title)}</h3>
                <p style="font-size:13px;color:#94a3b8;line-height:1.5;">${escapeHtml(step.desc)}</p>
              </div>
            `).join('')}
          </div>
        </section>
        ` : ''}

        ${service.faqs && service.faqs.length > 0 ? `
        <section style="margin-bottom:32px;">
          <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Frequently Asked Questions</h2>
          <div style="display:flex;flex-direction:column;gap:16px;">
            ${service.faqs.map((faq) => `
              <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
                <h3 style="font-size:16px;font-weight:700;color:#ffffff;margin-bottom:8px;">${escapeHtml(faq.question)}</h3>
                <p style="font-size:14px;color:#94a3b8;line-height:1.6;">${escapeHtml(faq.answer)}</p>
              </div>
            `).join('')}
          </div>
        </section>
        ` : ''}

        <div style="background:#070c14;border:1px solid #06b6d4;border-radius:16px;padding:24px;text-align:center;">
          <h3 style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:8px;">Book Your ${escapeHtml(service.title)} Appointment</h3>
          <p style="font-size:14px;color:#94a3b8;margin-bottom:16px;">Visit our Islamabad Flagship Hub or contact our master technicians on WhatsApp.</p>
          <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;display:inline-block;">Schedule Inspection Now</a>
        </div>
      </main>`;
    }
  } else if (cleanPath.startsWith('/brands/')) {
    const slug = cleanPath.split('/')[2];
    const brand = brandsDataSSR.find((b) => b.slug === slug);
    if (brand) {
      mainContentHtml = `
      <main style="max-width:1100px;margin:32px auto;padding:0 16px;">
        <nav style="font-size:12px;color:#64748b;margin-bottom:16px;">
          <a href="/" style="color:#06b6d4;text-decoration:none;">Home</a> &gt;
          <a href="/brands/" style="color:#06b6d4;text-decoration:none;">Brand Specialists</a> &gt;
          <span style="color:#cbd5e1;">${escapeHtml(brand.name)}</span>
        </nav>

        <h1 style="font-size:32px;font-weight:900;color:#ffffff;line-height:1.2;margin-bottom:16px;">
          ${escapeHtml(brand.name)}
        </h1>

        <p style="font-size:16px;color:#94a3b8;line-height:1.7;margin-bottom:24px;">
          ${escapeHtml(brand.overview)}
        </p>

        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;margin-bottom:32px;">
          <h2 style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:12px;">Official Diagnostic Software &amp; Toolset</h2>
          <p style="font-size:15px;color:#06b6d4;font-family:monospace;margin-bottom:16px;">${escapeHtml(brand.diagnosticSoftware)}</p>
          <h3 style="font-size:16px;font-weight:700;color:#ffffff;margin-bottom:8px;">Models Repaired &amp; Serviced:</h3>
          <ul style="color:#cbd5e1;line-height:1.8;padding-left:20px;">
            ${brand.modelsCovered.map((m) => `<li>${escapeHtml(m)}</li>`).join('')}
          </ul>
        </div>

        <section style="margin-bottom:32px;">
          <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Common Faults Diagnosed &amp; Repaired</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;">
            ${brand.commonIssuesAndFixes.map((item) => `
              <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;">
                <h3 style="font-size:15px;font-weight:700;color:#ef4444;margin-bottom:6px;">⚠️ ${escapeHtml(item.issue)}</h3>
                <p style="font-size:13px;color:#94a3b8;line-height:1.5;"><strong>HyperTune Fix:</strong> ${escapeHtml(item.solution)}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <section style="margin-bottom:32px;">
          <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Specialized Engineering Services</h2>
          <ul style="color:#cbd5e1;line-height:1.8;padding-left:20px;">
            ${brand.specializedServices.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
          </ul>
        </section>

        ${brand.faqs && brand.faqs.length > 0 ? `
        <section style="margin-bottom:32px;">
          <h2 style="font-size:22px;font-weight:800;color:#ffffff;margin-bottom:16px;">Frequently Asked Questions</h2>
          <div style="display:flex;flex-direction:column;gap:16px;">
            ${brand.faqs.map((faq) => `
              <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
                <h3 style="font-size:16px;font-weight:700;color:#ffffff;margin-bottom:8px;">${escapeHtml(faq.question)}</h3>
                <p style="font-size:14px;color:#94a3b8;line-height:1.6;">${escapeHtml(faq.answer)}</p>
              </div>
            `).join('')}
          </div>
        </section>
        ` : ''}

        <div style="background:#070c14;border:1px solid #06b6d4;border-radius:16px;padding:24px;text-align:center;">
          <h3 style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:8px;">Book Your ${escapeHtml(brand.name.split(' ')[0])} Diagnostic Scan</h3>
          <p style="font-size:14px;color:#94a3b8;margin-bottom:16px;">Dealer-level diagnostics with genuine OEM German and Japanese parts in Islamabad.</p>
          <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;display:inline-block;">Book Specialist Appointment</a>
        </div>
      </main>`;
    }
  } else if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.split('/')[2];
    const post = blogDataSSR.find((b) => b.slug === slug);
    if (post) {
      mainContentHtml = `
      <main style="max-width:900px;margin:32px auto;padding:0 16px;">
        <nav style="font-size:12px;color:#64748b;margin-bottom:16px;">
          <a href="/" style="color:#06b6d4;text-decoration:none;">Home</a> &gt;
          <a href="/blog/" style="color:#06b6d4;text-decoration:none;">Diagnostic Blog</a> &gt;
          <span style="color:#cbd5e1;">${escapeHtml(post.title)}</span>
        </nav>

        <h1 style="font-size:32px;font-weight:900;color:#ffffff;line-height:1.2;margin-bottom:12px;">
          ${escapeHtml(post.title)}
        </h1>

        <div style="font-size:13px;color:#64748b;margin-bottom:24px;display:flex;gap:16px;">
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
  } else if (cleanPath === '/services') {
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
  } else if (cleanPath === '/brands') {
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
  } else if (cleanPath === '/locations') {
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
  } else if (cleanPath === '/blog') {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <h1 style="font-size:36px;font-weight:900;color:#ffffff;text-align:center;margin-bottom:12px;">
        Diagnostic &amp; Car Care Technical Journal
      </h1>
      <p style="font-size:16px;color:#94a3b8;text-align:center;max-width:800px;margin:0 auto 40px;line-height:1.6;">
        Expert engineering guides, OBD2 fault code solutions, hybrid battery restoration tips, and climate maintenance for Pakistani drivers.
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:24px;">
        ${blogDataSSR.map((b) => `
          <div style="background:#0b121e;border:1px solid #1e293b;border-radius:16px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span style="font-size:11px;font-weight:700;color:#06b6d4;text-transform:uppercase;">${escapeHtml(b.category)} • ${escapeHtml(b.readTime)}</span>
              <h2 style="font-size:18px;font-weight:800;color:#ffffff;margin:8px 0 12px;">${escapeHtml(b.title)}</h2>
              <p style="font-size:13px;color:#94a3b8;line-height:1.6;margin-bottom:16px;">${escapeHtml(b.excerpt)}</p>
            </div>
            <a href="/blog/${b.slug}/" style="color:#06b6d4;font-weight:700;text-decoration:none;font-size:14px;">Read Full Guide &rarr;</a>
          </div>
        `).join('')}
      </div>
    </main>`;
  } else {
    mainContentHtml = `
    <main style="max-width:1280px;margin:32px auto;padding:0 16px;">
      <section style="text-align:center;margin-bottom:48px;">
        <span style="display:inline-block;background:rgba(6,182,212,0.1);color:#06b6d4;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:1px;margin-bottom:16px;">
          PREMIER AUTOMOTIVE ENGINEERING STUDIO
        </span>
        <h1 style="font-size:40px;font-weight:900;color:#ffffff;line-height:1.2;margin-bottom:16px;max-width:900px;margin-left:auto;margin-right:auto;">
          Master German Diagnostics, Hybrid Battery Repair &amp; Self-Healing PPF in Islamabad
        </h1>
        <p style="font-size:18px;color:#94a3b8;max-width:760px;margin:0 auto 24px;line-height:1.6;">
          Independent specialist workshop for BMW, Mercedes-Benz, Audi, Porsche, Toyota/Lexus Hybrid &amp; Honda in Islamabad Police Foundation (Sector O-9) and Rawalpindi.
        </p>
        <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;">
          <a href="/book-appointment/" style="background:#06b6d4;color:#030712;padding:12px 24px;border-radius:8px;font-weight:800;text-decoration:none;font-size:15px;">Book Workshop Service</a>
          <a href="tel:+923330177717" style="background:#0b121e;border:1px solid #1e293b;color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;font-size:15px;">📞 Call 0333-0177717</a>
        </div>
      </section>

      <!-- Trust Badges -->
      <section style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;margin-bottom:48px;">
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;text-align:center;">
          <span style="font-size:24px;font-weight:900;color:#06b6d4;display:block;">4.9 / 5.0 ★</span>
          <span style="font-size:13px;color:#94a3b8;">Google Business (348+ Reviews)</span>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;text-align:center;">
          <span style="font-size:24px;font-weight:900;color:#ffffff;display:block;">10-Year</span>
          <span style="font-size:13px;color:#94a3b8;">TPU Paint Protection Film Warranty</span>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;text-align:center;">
          <span style="font-size:24px;font-weight:900;color:#ffffff;display:block;">12-Month</span>
          <span style="font-size:13px;color:#94a3b8;">Engine Overhaul Workmanship Warranty</span>
        </div>
        <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:16px;text-align:center;">
          <span style="font-size:24px;font-weight:900;color:#06b6d4;display:block;">OEM Rigs</span>
          <span style="font-size:13px;color:#94a3b8;">BMW ISTA, Mercedes Xentry, Audi ODIS</span>
        </div>
      </section>

      <!-- Brand Specialists Showcase -->
      <section style="margin-bottom:48px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
          <div>
            <h2 style="font-size:24px;font-weight:800;color:#ffffff;">Dedicated Vehicle Brand Specialists</h2>
            <p style="font-size:14px;color:#94a3b8;">OEM diagnostic scanners, master technicians &amp; genuine parts</p>
          </div>
          <a href="/brands/" style="color:#06b6d4;font-weight:700;text-decoration:none;">View All Brands &rarr;</a>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:16px;">
          ${brandsDataSSR.map((b) => `
            <div style="background:#0b121e;border:1px solid #1e293b;border-radius:12px;padding:20px;">
              <span style="font-size:11px;font-weight:700;color:#06b6d4;text-transform:uppercase;">${escapeHtml(b.logoBadge)}</span>
              <h3 style="font-size:18px;font-weight:700;color:#ffffff;margin:6px 0 8px;">${escapeHtml(b.name)}</h3>
              <p style="font-size:13px;color:#94a3b8;line-height:1.5;margin-bottom:12px;">${escapeHtml(b.tagline)}</p>
              <a href="/brands/${b.slug}/" style="color:#06b6d4;font-weight:700;text-decoration:none;font-size:13px;">View Specialist Page &rarr;</a>
            </div>
          `).join('')}
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
  }

  return `${headerHtml}\n${mainContentHtml}\n${footerHtml}`;
}
