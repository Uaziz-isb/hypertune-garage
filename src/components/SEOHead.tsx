import React, { useEffect } from 'react';
import { trackPageView, initGA } from '../utils/analytics';
import { normalizeCanonicalUrl } from '../utils/ssrRenderer';

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
  keywords?: string;
  canonicalUrl?: string;
  path?: string;
  ogImage?: string;
  schema?: object;
}

export const SEOHead: React.FC<SEOProps> = ({
  title = 'HyperTune Garage - Premium Automotive Workshop in Islamabad & Rawalpindi',
  description = 'Pakistan’s top automotive workshop specializing in Toyota, Honda, Suzuki, BMW, Mercedes, Audi, engine overhauls & hybrid battery repair in Islamabad Police Foundation & Rawalpindi.',
  keywords = 'car workshop islamabad, auto repair rawalpindi, car detailing islamabad, paint protection film ppf islamabad, ceramic coating rawalpindi, bmw repair islamabad, mercedes garage rawalpindi, audi service center, engine overhaul islamabad, hybrid battery repair, 3d laser wheel alignment, car mechanic near me, hypertune garage',
  canonicalUrl,
  path = '/',
  ogImage = '/images/hypertune_logo.webp',
  schema,
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Ensure Google Analytics is initialized and trigger SPA page view
    initGA();
    trackPageView(path, title);

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    const targetCanonicalUrl = normalizeCanonicalUrl(canonicalUrl || path, 'https://hypertunegarage.pk');

    // Update Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', targetCanonicalUrl);

    // Update Open Graph & Twitter Tags
    const metaTagsList = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: targetCanonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'HyperTune Garage' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
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

    // Default LocalBusiness Schema
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'AutoRepair',
      name: 'HyperTune Garage',
      image: ogImage,
      '@id': 'https://hypertunegarage.pk/#business',
      url: 'https://hypertunegarage.pk/',
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
    };

    const finalSchema = schema || defaultSchema;

    // Inject JSON-LD
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(finalSchema);
  }, [title, description, keywords, canonicalUrl, path, ogImage, schema]);

  return null;
};
