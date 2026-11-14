import React, { useState, useEffect, Suspense, lazy } from 'react';
import { PageId } from './types';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { getRouteMetadata } from './data/metadataRegistry';

import { HomeView } from './views/HomeView';

// Dynamic Lazy Imports for Other Views & Modals (Ultra-Fast Shell for Deep Routes & Zero TBT)
const AboutView = lazy(() => import('./views/AboutView').then((m) => ({ default: m.AboutView })));
const ServicesView = lazy(() => import('./views/ServicesView').then((m) => ({ default: m.ServicesView })));
const ServiceDetailView = lazy(() => import('./views/ServiceDetailView').then((m) => ({ default: m.ServiceDetailView })));
const BrandsView = lazy(() => import('./views/BrandsView').then((m) => ({ default: m.BrandsView })));
const BrandDetailView = lazy(() => import('./views/BrandDetailView').then((m) => ({ default: m.BrandDetailView })));
const LocationsView = lazy(() => import('./views/LocationsView').then((m) => ({ default: m.LocationsView })));
const LocationDetailView = lazy(() => import('./views/LocationDetailView').then((m) => ({ default: m.LocationDetailView })));
const BlogView = lazy(() => import('./views/BlogView').then((m) => ({ default: m.BlogView })));
const BlogPostView = lazy(() => import('./views/BlogPostView').then((m) => ({ default: m.BlogPostView })));
const GalleryView = lazy(() => import('./views/GalleryView').then((m) => ({ default: m.GalleryView })));
const TestimonialsView = lazy(() => import('./views/TestimonialsView').then((m) => ({ default: m.TestimonialsView })));
const FAQView = lazy(() => import('./views/FAQView').then((m) => ({ default: m.FAQView })));
const ContactView = lazy(() => import('./views/ContactView').then((m) => ({ default: m.ContactView })));
const PrivacyView = lazy(() => import('./views/PrivacyView').then((m) => ({ default: m.PrivacyView })));
const TermsView = lazy(() => import('./views/TermsView').then((m) => ({ default: m.TermsView })));
const WarrantyView = lazy(() => import('./views/WarrantyView').then((m) => ({ default: m.WarrantyView })));
const SitemapView = lazy(() => import('./views/SitemapView').then((m) => ({ default: m.SitemapView })));
const BookingView = lazy(() => import('./views/BookingView').then((m) => ({ default: m.BookingView })));
const NotFoundView = lazy(() => import('./views/NotFoundView').then((m) => ({ default: m.NotFoundView })));

const SearchModal = lazy(() => import('./components/SearchModal').then((m) => ({ default: m.SearchModal })));
const MobileDrawer = lazy(() => import('./components/MobileDrawer').then((m) => ({ default: m.MobileDrawer })));

// Helper to resolve route from path and hash
function resolveWindowRoute(): { page: PageId; slug?: string } {
  if (typeof window === 'undefined') return { page: 'home' };
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  const hash = window.location.hash.replace(/^#+/, '').trim().toLowerCase();

    if (!pathname) {
      // Check if hash exists to smoothly migrate
      if (hash) {
        if (hash.startsWith('service-detail')) {
          const urlParams = new URLSearchParams(window.location.search || window.location.hash.split('?')[1] || '');
          const slug = urlParams.get('slug') || undefined;
          return { page: 'service-detail', slug };
        }
        if (hash.startsWith('location-detail')) {
          const urlParams = new URLSearchParams(window.location.search || window.location.hash.split('?')[1] || '');
          const slug = urlParams.get('slug') || undefined;
          return { page: 'location-detail', slug };
        }
        if (hash.startsWith('blog-post')) {
          const urlParams = new URLSearchParams(window.location.search || window.location.hash.split('?')[1] || '');
          const slug = urlParams.get('slug') || undefined;
          return { page: 'blog-post', slug };
        }
        if (hash.startsWith('booking') || hash.startsWith('book-appointment') || hash.startsWith('book-service')) {
          const urlParams = new URLSearchParams(window.location.search || window.location.hash.split('?')[1] || '');
          const slug = urlParams.get('service') || urlParams.get('slug') || undefined;
          return { page: 'booking', slug };
        }
        const validPages: Record<string, PageId> = {
          about: 'about',
          services: 'services',
          locations: 'locations',
          gallery: 'gallery',
          testimonials: 'testimonials',
          reviews: 'testimonials',
          faq: 'faq',
          contact: 'contact',
          privacy: 'privacy',
          'privacy-policy': 'privacy',
          terms: 'terms',
          'terms-conditions': 'terms',
          warranty: 'warranty',
          'warranty-specs': 'warranty',
          sitemap: 'sitemap',
          booking: 'booking',
          'book-appointment': 'booking',
          'book-service': 'booking',
          'book-online': 'booking',
        };
        if (validPages[hash]) {
          return { page: validPages[hash] };
        }
      }
      return { page: 'home' };
    }

    const segments = pathname.split('/');
    const root = segments[0];
    const sub = segments[1];

    if (root === 'about' || root === 'about-us') return { page: 'about' };
    if (root === 'services') {
      if (sub) return { page: 'service-detail', slug: sub };
      return { page: 'services' };
    }
    if (root === 'brands' || root === 'specialists') {
      if (sub) return { page: 'brand-detail', slug: sub };
      return { page: 'brands' };
    }
    if (root === 'locations') {
      if (sub) return { page: 'location-detail', slug: sub };
      return { page: 'locations' };
    }
    if (root === 'blog') {
      if (sub) return { page: 'blog-post', slug: sub };
      return { page: 'blog' };
    }
    if (root === 'booking' || root === 'book-appointment' || root === 'book-service' || root === 'book-service-appointment' || root === 'book-online') {
      const urlParams = new URLSearchParams(window.location.search || '');
      const slug = sub || urlParams.get('service') || urlParams.get('slug') || undefined;
      return { page: 'booking', slug };
    }
    if (root === 'gallery') return { page: 'gallery' };
    if (root === 'testimonials' || root === 'reviews' || root === 'customer-reviews') return { page: 'testimonials' };
    if (root === 'faq' || root === 'faqs' || root === 'questions') return { page: 'faq' };
    if (root === 'contact' || root === 'contact-us') return { page: 'contact' };
    if (root === 'privacy' || root === 'privacy-policy') return { page: 'privacy' };
    if (root === 'terms' || root === 'terms-conditions' || root === 'terms-of-service') return { page: 'terms' };
    if (root === 'warranty' || root === 'warranty-specs') return { page: 'warranty' };
    if (root === 'sitemap' || root === 'site-map' || root === 'sitemap.html') return { page: 'sitemap' };
    if (root === '404' || root === 'not-found') return { page: 'not-found' };

  return { page: 'not-found' };
}

export function App() {
  const initialRoute = resolveWindowRoute();
  const [currentPage, setCurrentPage] = useState<PageId>(initialRoute.page);
  const [currentSlug, setCurrentSlug] = useState<string | undefined>(initialRoute.slug);

  // Convert page ID and slug to standalone separate page URL path with trailing slash
  const getPathFromRoute = (page: PageId, slug?: string): string => {
    switch (page) {
      case 'home':
        return '/';
      case 'about':
        return '/about/';
      case 'services':
        return '/services/';
      case 'service-detail':
        return slug ? `/services/${slug}/` : '/services/';
      case 'brands':
        return '/brands/';
      case 'brand-detail':
        return slug ? `/brands/${slug}/` : '/brands/';
      case 'locations':
        return '/locations/';
      case 'location-detail':
        return slug ? `/locations/${slug}/` : '/locations/';
      case 'blog':
        return '/blog/';
      case 'blog-post':
        return slug ? `/blog/${slug}/` : '/blog/';
      case 'booking':
        return slug ? `/book-appointment/?service=${slug}` : '/book-appointment/';
      case 'gallery':
        return '/gallery/';
      case 'testimonials':
        return '/testimonials/';
      case 'faq':
        return '/faq/';
      case 'contact':
        return '/contact/';
      case 'privacy':
        return '/privacy-policy/';
      case 'terms':
        return '/terms-conditions/';
      case 'warranty':
        return '/warranty-specs/';
      case 'sitemap':
        return '/sitemap/';
      case 'not-found':
        return '/404/';
      default:
        return '/';
    }
  };

  // Initialize and handle back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const route = resolveWindowRoute();
      setCurrentPage(route.page);
      setCurrentSlug(route.slug);
    };

    const route = resolveWindowRoute();
    // Clean up legacy hash or legacy booking path if present by replacing with modern path
    if (window.location.hash || window.location.pathname === '/booking' || window.location.pathname === '/booking/') {
      const targetPath = getPathFromRoute(route.page, route.slug);
      window.history.replaceState({ page: route.page, slug: route.slug }, '', targetPath);
    }

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Modals state
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Navigate to separate page URL cleanly using HTML5 History
  const navigateTo = (page: PageId, slug?: string) => {
    setCurrentPage(page);
    setCurrentSlug(slug);
    const targetPath = getPathFromRoute(page, slug);
    window.history.pushState({ page, slug }, '', targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceId?: string) => {
    navigateTo('booking', serviceId);
  };

  const pagePath = getPathFromRoute(currentPage, currentPage === 'booking' ? currentSlug : undefined);
  const ownsCustomSeo =
    currentPage === 'service-detail' ||
    currentPage === 'brand-detail' ||
    currentPage === 'location-detail' ||
    currentPage === 'blog-post' ||
    currentPage === 'not-found';
  const registryMeta = getRouteMetadata(pagePath);
  const seoTitle = registryMeta?.title || 'HyperTune Garage | PPF, Detailing, Diagnostics & Tuneup Workshop';
  const seoDesc =
    registryMeta?.description ||
    'HyperTune Garage is an automotive workshop in Islamabad for PPF, detailing, diagnostics, repairs, servicing and vehicle care. Serving Islamabad & Rawalpindi.';

  const faqPageSchema =
    currentPage === 'faq'
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            {
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
            {
              '@type': 'WebPage',
              '@id': 'https://hypertunegarage.pk/faq/',
              url: 'https://hypertunegarage.pk/faq/',
              name: seoTitle,
              description: seoDesc,
              isPartOf: {
                '@type': 'AutoRepair',
                '@id': 'https://hypertunegarage.pk/#business',
                name: 'HyperTune Garage',
                url: 'https://hypertunegarage.pk/',
                telephone: '+923330177717',
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hypertunegarage.pk/' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://hypertunegarage.pk/faq/' },
              ],
            },
          ],
        }
      : undefined;

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
      {/* Dynamic SEO Tags for non-detail routes */}
      {!ownsCustomSeo && (
        <SEOHead
          title={seoTitle}
          description={seoDesc}
          canonicalUrl={registryMeta?.canonicalUrl}
          path={pagePath}
          schema={faqPageSchema}
        />
      )}

      {/* Fixed Sticky Header Suite */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header
          currentPage={currentPage}
          onNavigate={navigateTo}
          onOpenBooking={() => handleOpenBooking()}
          onOpenMobileMenu={() => setIsMobileDrawerOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      </div>

      {/* Main View Router */}
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <HomeView
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        ) : (
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center pt-28">
                <div className="w-8 h-8 border-3 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
              </div>
            }
          >
            {currentPage === 'about' && (
              <AboutView
                onNavigate={navigateTo}
                onOpenBooking={() => handleOpenBooking()}
              />
            )}
          {currentPage === 'services' && (
            <ServicesView
              onNavigate={navigateTo}
              onOpenBooking={handleOpenBooking}
            />
          )}
          {currentPage === 'service-detail' && (
            <ServiceDetailView
              slug={currentSlug}
              onNavigate={navigateTo}
              onOpenBooking={handleOpenBooking}
            />
          )}
          {currentPage === 'brands' && (
            <BrandsView
              onNavigate={navigateTo}
            />
          )}
          {currentPage === 'brand-detail' && (
            <BrandDetailView
              slug={currentSlug}
              onNavigate={navigateTo}
            />
          )}
          {currentPage === 'locations' && (
            <LocationsView
              onNavigate={navigateTo}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
          {currentPage === 'location-detail' && (
            <LocationDetailView
              slug={currentSlug}
              onNavigate={navigateTo}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
          {currentPage === 'blog' && (
            <BlogView onNavigate={navigateTo} />
          )}
          {currentPage === 'blog-post' && (
            <BlogPostView
              slug={currentSlug}
              onNavigate={navigateTo}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
          {currentPage === 'gallery' && (
            <GalleryView
              onNavigate={navigateTo}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
          {currentPage === 'testimonials' && (
            <TestimonialsView
              onNavigate={navigateTo}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
          {currentPage === 'faq' && (
            <FAQView
              onNavigate={navigateTo}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
          {currentPage === 'contact' && (
            <ContactView
              onNavigate={navigateTo}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
          {currentPage === 'privacy' && (
            <PrivacyView
              onNavigate={navigateTo}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
          {currentPage === 'terms' && (
            <TermsView
              onNavigate={navigateTo}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
          {currentPage === 'warranty' && (
            <WarrantyView
              onNavigate={navigateTo}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
          {currentPage === 'sitemap' && (
            <SitemapView
              onNavigate={navigateTo}
              onOpenBooking={handleOpenBooking}
            />
          )}
          {currentPage === 'booking' && (
            <BookingView
              onNavigate={navigateTo}
              initialServiceId={currentSlug}
            />
          )}
          {currentPage === 'not-found' && (
            <NotFoundView
              onNavigate={navigateTo}
            />
          )}
        </Suspense>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Action Buttons */}
      <FloatingWhatsApp />

      {/* Overlays / Modals with Lazy Load */}
      <Suspense fallback={null}>
        {isMobileDrawerOpen && (
          <MobileDrawer
            isOpen={isMobileDrawerOpen}
            onClose={() => setIsMobileDrawerOpen(false)}
            currentPage={currentPage}
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {isSearchOpen && (
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onNavigate={navigateTo}
          />
        )}
      </Suspense>
    </div>
  );
}

export default App;
