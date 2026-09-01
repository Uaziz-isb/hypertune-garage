/**
 * Google Tag (gtag.js) & Google Analytics 4 (GA4) Tracking Utility
 * Measurement ID: G-PPQJEQSLVE
 * 
 * Supports:
 * - Dynamic SPA Page View Tracking on every navigation
 * - Core Web Vitals & Load Performance Monitoring
 * - Conversion & Business Event Tracking (Bookings, WhatsApp, Calls, Cost Estimator)
 */

export const GA_MEASUREMENT_ID =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GA_MEASUREMENT_ID) ||
  'G-PPQJEQSLVE';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    GA_MEASUREMENT_ID?: string;
  }
}

/**
 * Initialize Google Tag if not already loaded
 */
export const initGA = (measurementId: string = GA_MEASUREMENT_ID) => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }

  // Check if GTM script or inline loader is already registered
  const existingScript = document.getElementById('ga-gtag-script') || document.getElementById('gtag-js');
  if (!existingScript) {
    // Defer loading to idle/post-load so it never blocks FCP, LCP, or TBT
    const scheduleLoad = () => {
      if (document.getElementById('ga-gtag-script') || document.getElementById('gtag-js')) return;
      const script = document.createElement('script');
      script.id = 'ga-gtag-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      window.gtag?.('js', new Date());
      window.gtag?.('config', measurementId, {
        send_page_view: false, // SPA handles page views manually
        transport_type: 'beacon',
      });
    };

    const win = window as any;
    if (typeof win.requestIdleCallback === 'function') {
      win.requestIdleCallback(() => setTimeout(scheduleLoad, 1200), { timeout: 3500 });
    } else {
      window.addEventListener('load', () => setTimeout(scheduleLoad, 1200), { once: true });
    }
  }
};

/**
 * Track SPA Page Views across all existing and future pages
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined') return;

  const currentTitle = title || document.title;
  const currentPath = path || window.location.pathname + window.location.search;
  const fullUrl = window.location.origin + currentPath;

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: currentTitle,
      page_location: fullUrl,
      page_path: currentPath,
      send_to: GA_MEASUREMENT_ID,
    });
  } else {
    // Queue if gtag is initializing
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_title: currentTitle,
      page_location: fullUrl,
      page_path: currentPath,
      send_to: GA_MEASUREMENT_ID,
    });
  }
};

/**
 * Track Custom Google Analytics Event
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      ...eventParams,
      send_to: GA_MEASUREMENT_ID,
    });
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
      send_to: GA_MEASUREMENT_ID,
    });
  }
};

/**
 * Track Conversion Actions (e.g. Appointment Booked, Call Made)
 */
export const trackConversion = (
  conversionName: string,
  value?: number,
  details: Record<string, any> = {}
) => {
  trackEvent(conversionName, {
    event_category: 'Conversion',
    value: value || 1,
    ...details,
  });
};

/**
 * Track Appointment Wizard Progression
 */
export const trackAppointmentStep = (
  stepNumber: number,
  stepName: string,
  extra: Record<string, any> = {}
) => {
  trackEvent('booking_step_view', {
    step_number: stepNumber,
    step_name: stepName,
    ...extra,
  });
};

/**
 * Track Successful Appointment Booking
 */
export const trackAppointmentCompleted = (
  bookingRef: string,
  services: string,
  branch: string,
  vehicle: string
) => {
  trackEvent('generate_lead', {
    event_category: 'Booking',
    event_label: bookingRef,
    booking_reference: bookingRef,
    services,
    workshop_branch: branch,
    vehicle_info: vehicle,
  });
};

/**
 * Track WhatsApp Contact Inquiries
 */
export const trackWhatsAppClick = (source: string, service?: string) => {
  trackEvent('contact_whatsapp', {
    event_category: 'Engagement',
    click_source: source,
    service_context: service || 'general',
  });
};

/**
 * Track Phone Call Inquiries
 */
export const trackPhoneClick = (source: string, phoneNumber: string = '0333-0177717') => {
  trackEvent('contact_phone', {
    event_category: 'Engagement',
    click_source: source,
    phone_number: phoneNumber,
  });
};

/**
 * Track Web Vitals & Real-User Performance Metrics to GA
 */
export const trackPerformanceMetrics = () => {
  if (typeof window === 'undefined' || typeof window.performance === 'undefined') return;

  // Window load timings
  window.addEventListener('load', () => {
    setTimeout(() => {
      try {
        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navEntries && navEntries.length > 0) {
          const nav = navEntries[0];
          const pageLoadTime = Math.round(nav.loadEventEnd - nav.startTime);
          const ttfb = Math.round(nav.responseStart - nav.requestStart);
          const domInteractive = Math.round(nav.domInteractive - nav.startTime);

          trackEvent('performance_timing', {
            event_category: 'Performance',
            page_load_time_ms: pageLoadTime,
            ttfb_ms: ttfb,
            dom_interactive_ms: domInteractive,
            non_interaction: true,
          });
        }

        // First Contentful Paint (FCP)
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcp) {
          trackEvent('web_vital_fcp', {
            event_category: 'Web Vitals',
            value: Math.round(fcp.startTime),
            metric_name: 'FCP',
            non_interaction: true,
          });
        }
      } catch (err) {
        // Ignore performance tracking errors silently
      }
    }, 1000);
  });
};
