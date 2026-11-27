import React, { useEffect } from 'react';
import { trackPageView, initGA } from '../utils/analytics';
import { normalizeCanonicalUrl, toAbsoluteImageUrl } from '../utils/canonical';
import { buildAutoRepairSchema } from '../utils/serviceSchema';

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
  schema?: object | object[];
}

export const SEOHead: React.FC<SEOProps> = ({
  title = 'HyperTune Garage | PPF, Detailing, Diagnostics & Tuneup',
  description = 'HyperTune Garage is an Automotive Workshop for PPF, Detailing, Diagnostics, Tune-up, Repair & Care Services Serving Islamabad & Rawalpindi.',
  keywords,
  canonicalUrl,
  path = '/',
  ogImage = '/images/hypertune_logo.webp',
  robots,
  schema,
}) => {
  const initialPathRef = React.useRef<string | null>(
    typeof window !== 'undefined' ? (window.location.pathname.replace(/\/+$/, '') || '/') : null
  );
  const hasNavigatedRef = React.useRef<boolean>(false);

  useEffect(() => {
    initGA();
    trackPageView(path, title);
  }, [path, title]);

  useEffect(() => {
    const normalizedPath = path.split('?')[0].replace(/\/+$/, '') || '/';
    if (!hasNavigatedRef.current && initialPathRef.current !== null) {
      if (normalizedPath !== initialPathRef.current) {
        hasNavigatedRef.current = true;
      } else if (document.getElementById('server-schema-0')) {
        // Preserve authoritative SSR-rendered title, description, canonical, and JSON-LD on initial hydration
        return;
      }
    }

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
    const isBlogArticle = normalizedPath.startsWith('/blog/') && normalizedPath !== '/blog';

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
      { property: 'og:type', content: isBlogArticle ? 'article' : 'website' },
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

    const defaultSchema = buildAutoRepairSchema(resolvedOgImage);

    // Remove static SSR schema tags and previous client schema tags before writing updated schema on SPA route change
    document
      .querySelectorAll('script[id^="server-schema-"], script[id^="json-ld-schema"]')
      .forEach((el) => el.remove());

    const finalSchema = schema || defaultSchema;
    const schemaList = Array.isArray(finalSchema) ? finalSchema : [finalSchema];

    schemaList.forEach((schemaItem, idx) => {
      const scriptTag = document.createElement('script');
      scriptTag.id = schemaList.length === 1 ? 'json-ld-schema' : `json-ld-schema-${idx}`;
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(schemaItem);
      document.head.appendChild(scriptTag);
    });
  }, [title, description, keywords, canonicalUrl, path, ogImage, robots, schema]);

  return null;
};

