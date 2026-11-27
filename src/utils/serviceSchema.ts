import { googleBusinessData } from '../data/reviewsData';
import { normalizeCanonicalUrl, toAbsoluteImageUrl } from './canonical';

export interface ServiceSchemaInput {
  slug: string;
  title: string;
  shortDesc: string;
  priceRange: string;
  subServices: string[];
  image: string;
}

export function buildAutoRepairSchema(
  ogImage: string = 'https://hypertunegarage.pk/images/hypertune_logo.webp',
  baseUrl: string = 'https://hypertunegarage.pk'
) {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const resolvedImage = toAbsoluteImageUrl(ogImage, cleanBase);
  const businessUrl = `${cleanBase}/`;

  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'HyperTune Garage',
    description:
      'HyperTune Garage provides PPF, Ceramic Coating, Car Detailing, Vehicle Diagnostics, Engine Tune-up, Auto Repair & Maintenance Services in Islamabad and serving Rawalpindi.',
    image: resolvedImage,
    logo: {
      '@type': 'ImageObject',
      url: `${cleanBase}/images/hypertune_logo.webp`,
    },
    '@id': `${cleanBase}/#business`,
    url: businessUrl,
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
      streetAddress: 'Shop 1-G, Ground Floor, Central Ave, O-9 Block E Police Foundation',
      addressLocality: 'Islamabad',
      addressRegion: 'PK-IS',
      postalCode: '44000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5622113,
      longitude: 73.1345365,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '22:00',
      },
    ],
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
  };
}

export function buildServiceSchema(
  service: ServiceSchemaInput,
  baseUrl: string = 'https://hypertunegarage.pk'
) {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const serviceImage = toAbsoluteImageUrl(service.image, cleanBase);
  const priceNums = service.priceRange.replace(/,/g, '').match(/\d+/g)?.map(Number) || [];
  const priceSpecification =
    priceNums.length >= 2
      ? { '@type': 'PriceSpecification', priceCurrency: 'PKR', minPrice: priceNums[0], maxPrice: priceNums[1] }
      : priceNums.length === 1
        ? { '@type': 'PriceSpecification', priceCurrency: 'PKR', price: priceNums[0] }
        : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.subServices.join(', '),
    image: serviceImage,
    provider: {
      '@type': 'AutoRepair',
      '@id': `${cleanBase}/#business`,
      name: 'HyperTune Garage',
      url: `${cleanBase}/`,
      telephone: '+923330177717',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop 1-G, Ground Floor, Central Ave, O-9 Block E Police Foundation',
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
  };
}

export function buildServiceDetailSchemas(
  service: ServiceSchemaInput,
  baseUrl: string = 'https://hypertunegarage.pk'
): object[] {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const serviceImage = toAbsoluteImageUrl(service.image, cleanBase);
  const canonicalUrl = normalizeCanonicalUrl(`/services/${service.slug}/`, cleanBase);

  return [
    buildAutoRepairSchema(serviceImage, cleanBase),
    buildServiceSchema({ ...service, image: serviceImage }, cleanBase),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: normalizeCanonicalUrl('/', cleanBase),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: normalizeCanonicalUrl('/services/', cleanBase),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: canonicalUrl,
        },
      ],
    },
  ];
}
