import React, { useEffect } from 'react';
import { trackPageView, initGA } from '../utils/analytics';
import { normalizeCanonicalUrl, toAbsoluteImageUrl } from '../utils/canonical';
import { staticCustomerReviews, googleBusinessData } from '../data/reviewsData';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    GA_MEASUREMENT_ID?: string;
  }
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string; // Maintained for backwards compatibility but not rendered to DOM
  canonicalUrl?: string;
  path?: string;
  ogImage?: string;
  robots?: string;
  schema?: object;
}

export const SEOHead: React.FC<SEOProps> = ({
  title = 'HyperTune Garage | PPF, Detailing, Diagnostics & Tuneup Workshop',
  description = 'HyperTune Garage is an automotive workshop in Islamabad for PPF, detailing, diagnostics, repairs, servicing and vehicle care. Serving Islamabad & Rawalpindi.',
  keywords,
  canonicalUrl,
  path = '/',
  ogImage = '/images/hypertune_logo.webp',
  robots,
  schema,
}) => {
  useEffect(() => {
    initGA();
    trackPageView(path, title);
  }, [path, title]);

  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute(
      'content',
      robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    const existingKeywords = document.querySelector('meta[name="keywords"]');
    if (existingKeywords) {
      existingKeywords.remove();
    }

    const targetCanonicalUrl = normalizeCanonicalUrl(canonicalUrl || path, 'https://hypertunegarage.pk');
    const resolvedOgImage = toAbsoluteImageUrl(ogImage, 'https://hypertunegarage.pk');

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', targetCanonicalUrl);

    const metaTagsList = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: targetCanonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: resolvedOgImage },
      { property: 'og:site_name', content: 'HyperTune Garage' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: resolvedOgImage },
    ];

    metaTagsList.forEach((tagInfo) => {
      const selector = tagInfo.property
        ? `meta[property="${tagInfo.property}"]`
        : `meta[name="${tagInfo.name}"]`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (tagInfo.property) tag.setAttribute('property', tagInfo.property);
        if (tagInfo.name) tag.setAttribute('name', tagInfo.name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', tagInfo.content || '');
    });

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'AutoRepair',
      name: 'HyperTune Garage',
      image: resolvedOgImage,
      '@id': 'https://hypertunegarage.pk/#business',
      url: 'https://hypertunegarage.pk/',
      telephone: '+923330177717',
      priceRange: '$$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: String(googleBusinessData.totalReviews),
        bestRating: '5',
        worstRating: '1',
      },
      review: staticCustomerReviews.map((r) => ({
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
    };

    // Remove static SSR schema script tags before writing authoritative hydrated schema
    document.querySelectorAll('script[id^="server-schema-"]').forEach((el) => el.remove());

    const finalSchema = schema || defaultSchema;

    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(finalSchema);
  }, [title, description, keywords, canonicalUrl, path, ogImage, robots, schema]);

  return null;
};

