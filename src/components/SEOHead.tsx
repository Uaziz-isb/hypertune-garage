import React, { useEffect } from 'react';
import defaultOgBanner from '../assets/images/hypertune_hero_banner_1785533542266.webp';

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
  description = 'Pakistan’s top automotive workshop specializing in BMW, Mercedes, Audi, Porsche, Toyota, ECU remapping, engine overhauls & hybrid battery repair in Islamabad G-8/4 & Rawalpindi.',
  keywords = 'car workshop islamabad, auto repair rawalpindi, car detailing islamabad, paint protection film ppf islamabad, ceramic coating rawalpindi, bmw repair islamabad, mercedes garage rawalpindi, audi service center, engine overhaul islamabad, ecu tuning remapping, hybrid battery repair, 3d laser wheel alignment, car mechanic near me, hypertune garage',
  canonicalUrl,
  path = '/',
  ogImage = defaultOgBanner,
  schema,
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Google Analytics (GA4) Setup
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID || window.GA_MEASUREMENT_ID || 'G-PPQJEQSLVE';
    if (gaId) {
      let gaScript = document.getElementById('ga-gtag-script') as HTMLScriptElement | null;
      if (!gaScript) {
        gaScript = document.createElement('script');
        gaScript.id = 'ga-gtag-script';
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
          // eslint-disable-next-line prefer-rest-params
          window.dataLayer?.push(arguments);
        };
        window.gtag('js', new Date());
      }

      if (typeof window.gtag === 'function') {
        window.gtag('config', gaId, {
          page_path: path,
          page_title: title,
        });
      }
    }

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

    const targetCanonicalUrl = canonicalUrl || `https://hypertunegarage.pk${path}`;

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
      '@id': targetCanonicalUrl,
      url: targetCanonicalUrl,
      telephone: '+923315008872',
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot 42, Service Road East, Sector G-8/4',
        addressLocality: 'Islamabad',
        postalCode: '44000',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.6938,
        longitude: 73.0415,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
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
