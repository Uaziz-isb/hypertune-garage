import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileDrawer } from './components/MobileDrawer';
import { BookingModal } from './components/BookingModal';
import { SearchModal } from './components/SearchModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { LocationsView } from './views/LocationsView';
import { LocationDetailView } from './views/LocationDetailView';
import { BlogView } from './views/BlogView';
import { BlogPostView } from './views/BlogPostView';
import { GalleryView } from './views/GalleryView';
import { TestimonialsView } from './views/TestimonialsView';
import { FAQView } from './views/FAQView';
import { ContactView } from './views/ContactView';
import { PrivacyView } from './views/PrivacyView';
import { TermsView } from './views/TermsView';
import { WarrantyView } from './views/WarrantyView';
import { SitemapView } from './views/SitemapView';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentSlug, setCurrentSlug] = useState<string | undefined>(undefined);

  // Helper to resolve route from path and hash
  const resolveRoute = (): { page: PageId; slug?: string } => {
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

    if (root === 'about') return { page: 'about' };
    if (root === 'services') {
      if (sub) return { page: 'service-detail', slug: sub };
      return { page: 'services' };
    }
    if (root === 'locations') {
      if (sub) return { page: 'location-detail', slug: sub };
      return { page: 'locations' };
    }
    if (root === 'blog') {
      if (sub) return { page: 'blog-post', slug: sub };
      return { page: 'blog' };
    }
    if (root === 'gallery') return { page: 'gallery' };
    if (root === 'testimonials' || root === 'reviews') return { page: 'testimonials' };
    if (root === 'faq' || root === 'faqs') return { page: 'faq' };
    if (root === 'contact' || root === 'contact-us') return { page: 'contact' };
    if (root === 'privacy' || root === 'privacy-policy') return { page: 'privacy' };
    if (root === 'terms' || root === 'terms-conditions' || root === 'terms-of-service') return { page: 'terms' };
    if (root === 'warranty' || root === 'warranty-specs') return { page: 'warranty' };
    if (root === 'sitemap' || root === 'sitemap.html') return { page: 'sitemap' };

    return { page: 'home' };
  };

  // Convert page ID and slug to standalone separate page URL path
  const getPathFromRoute = (page: PageId, slug?: string): string => {
    switch (page) {
      case 'home':
        return '/';
      case 'about':
        return '/about';
      case 'services':
        return '/services';
      case 'service-detail':
        return slug ? `/services/${slug}` : '/services';
      case 'locations':
        return '/locations';
      case 'location-detail':
        return slug ? `/locations/${slug}` : '/locations';
      case 'blog':
        return '/blog';
      case 'blog-post':
        return slug ? `/blog/${slug}` : '/blog';
      case 'gallery':
        return '/gallery';
      case 'testimonials':
        return '/testimonials';
      case 'faq':
        return '/faq';
      case 'contact':
        return '/contact';
      case 'privacy':
        return '/privacy-policy';
      case 'terms':
        return '/terms-conditions';
      case 'warranty':
        return '/warranty-specs';
      case 'sitemap':
        return '/sitemap';
      default:
        return '/';
    }
  };

  // Initialize and handle back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const route = resolveRoute();
      setCurrentPage(route.page);
      setCurrentSlug(route.slug);
    };

    // Initial load
    const initialRoute = resolveRoute();
    setCurrentPage(initialRoute.page);
    setCurrentSlug(initialRoute.slug);

    // Clean up legacy hash if present by replacing with modern path
    if (window.location.hash) {
      const targetPath = getPathFromRoute(initialRoute.page, initialRoute.slug);
      window.history.replaceState({ page: initialRoute.page, slug: initialRoute.slug }, '', targetPath);
    }

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Modals state
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
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
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  // Compute page SEO title, description, keywords & path
  let seoTitle = 'HyperTune Garage - Premium Automotive Workshop in Islamabad & Rawalpindi';
  let seoDesc = 'Car repair workshop in Islamabad & Rawalpindi for Toyota, Honda, Suzuki, Hyundai, Kia & luxury imports. Engine overhaul, PPF studio, 3D laser alignment, hybrid battery repair. 12-Month warranty.';
  let seoKeywords = 'car workshop islamabad, auto repair rawalpindi, car detailing islamabad, paint protection film ppf islamabad, ceramic coating rawalpindi, bmw repair islamabad, mercedes garage rawalpindi, audi service center, engine overhaul, hybrid battery repair, car mechanic near me, hypertune garage';
  let pagePath = '/';

  if (currentPage === 'about') {
    seoTitle = 'About Us | HyperTune Garage Workshop Islamabad';
    seoDesc = 'Learn about HyperTune Garage, Islamabad & Rawalpindi’s premier automotive workshop with master certified technicians, German computer diagnostics, and 10+ years of repair excellence.';
    seoKeywords = 'about hypertune garage, best car workshop islamabad, certified car mechanics rawalpindi, luxury car specialist pakistan';
    pagePath = '/about/';
  } else if (currentPage === 'services') {
    seoTitle = 'Car Repair Services & Prices | HyperTune Garage';
    seoDesc = 'Explore 12 specialized automotive service categories in Islamabad & Rawalpindi: Engine Overhaul, Maintenance, Brakes, Transmission, Hybrid Battery, AC & Electrical, Diagnostics, Body Repair, PPF & Detailing.';
    seoKeywords = 'car repair services islamabad, automotive services rawalpindi, car servicing packages, engine overhaul cost, ppf coating price islamabad';
    pagePath = '/services/';
  } else if (currentPage === 'service-detail') {
    const serviceName = currentSlug ? currentSlug.replace(/-/g, ' ').toUpperCase() : 'Service';
    seoTitle = `${serviceName} Service | HyperTune Garage Islamabad`;
    seoDesc = `Professional ${serviceName.toLowerCase()} in Islamabad G-8/4 & Rawalpindi I-9. Advanced diagnostic tools, OEM spare parts, and 12-month workmanship warranty.`;
    seoKeywords = `${currentSlug ? currentSlug.replace(/-/g, ' ') : 'car service'}, ${serviceName.toLowerCase()} islamabad, ${serviceName.toLowerCase()} rawalpindi, car repair packages`;
    pagePath = `/services/${currentSlug || ''}/`;
  } else if (currentPage === 'locations') {
    seoTitle = 'Workshop Locations in Islamabad G-8 & Rawalpindi I-9 | HyperTune';
    seoDesc = 'Visit HyperTune Garage workshops in Islamabad G-8/4 Service Road East and Rawalpindi I-9 Industrial Area. Clean customer lounges and express repair bays.';
    seoKeywords = 'car workshop g8 islamabad, auto repair shop i9 rawalpindi, hypertune locations, car mechanic near me islamabad';
    pagePath = '/locations/';
  } else if (currentPage === 'location-detail') {
    const locName = currentSlug ? currentSlug.replace(/-/g, ' ').toUpperCase() : 'Branch';
    seoTitle = `${locName} Branch | HyperTune Garage Workshop`;
    seoDesc = `HyperTune Garage ${locName} location. Directions, contact numbers, working hours, and specialized repair bays in Islamabad & Rawalpindi.`;
    seoKeywords = `${locName.toLowerCase()} workshop islamabad, hypertune branch rawalpindi, car service center directions`;
    pagePath = `/locations/${currentSlug || ''}/`;
  } else if (currentPage === 'blog') {
    seoTitle = 'Car Maintenance Blog & Technical Guides | HyperTune Garage';
    seoDesc = 'Expert car care tips, engine maintenance guides, PPF care advice, and vehicle troubleshooting articles by HyperTune Garage engineers in Pakistan.';
    seoKeywords = 'car care tips pakistan, automotive blog islamabad, car maintenance guide, engine care tips, ceramic coating care';
    pagePath = '/blog/';
  } else if (currentPage === 'blog-post') {
    const postTitle = currentSlug ? currentSlug.replace(/-/g, ' ').toUpperCase() : 'Article';
    seoTitle = `${postTitle} | HyperTune Tech Blog`;
    seoDesc = `Read our technical analysis and expert tips on ${postTitle.toLowerCase()} by HyperTune Garage master mechanics.`;
    seoKeywords = `${currentSlug ? currentSlug.replace(/-/g, ' ') : 'car article'}, automotive guide, car tip pakistan`;
    pagePath = `/blog/${currentSlug || ''}/`;
  } else if (currentPage === 'gallery') {
    seoTitle = 'Workshop Gallery & Work Portfolio | HyperTune Garage';
    seoDesc = 'Browse before & after photos of PPF installations, ceramic coating finishes, engine rebuilds, and luxury vehicle transformations at HyperTune Garage.';
    seoKeywords = 'car workshop gallery, ppf before after islamabad, ceramic coating photos, engine overhaul portfolio';
    pagePath = '/gallery/';
  } else if (currentPage === 'testimonials') {
    seoTitle = 'Customer Reviews & Google Ratings | HyperTune Garage';
    seoDesc = 'Read genuine 4.9-star reviews from BMW, Audi, Mercedes, and Toyota owners who trust HyperTune Garage in Islamabad & Rawalpindi.';
    seoKeywords = 'hypertune garage reviews, best rated car workshop islamabad, customer feedback auto repair';
    pagePath = '/testimonials/';
  } else if (currentPage === 'faq') {
    seoTitle = 'Frequently Asked Questions | HyperTune Garage';
    seoDesc = 'Get answers about car repair warranties, booking appointments, service pricing, estimation turnarounds, and diagnostic procedures at HyperTune Garage.';
    seoKeywords = 'car repair faq islamabad, hypertune warranty questions, car service cost pakistan';
    pagePath = '/faq/';
  } else if (currentPage === 'contact') {
    seoTitle = 'Contact Us | HyperTune Garage Islamabad & Rawalpindi';
    seoDesc = 'Get in touch with HyperTune Garage in Islamabad & Rawalpindi. Call +92 300 1234567, message on WhatsApp, or book an online repair slot.';
    seoKeywords = 'contact hypertune garage, car workshop phone number islamabad, book car service rawalpindi';
    pagePath = '/contact/';
  } else if (currentPage === 'privacy') {
    seoTitle = 'Privacy Policy | HyperTune Garage Islamabad';
    seoDesc = 'HyperTune Garage privacy policy outlining data collection, security measures, and customer privacy standards.';
    seoKeywords = 'privacy policy hypertune garage';
    pagePath = '/privacy-policy/';
  } else if (currentPage === 'terms') {
    seoTitle = 'Terms & Conditions | HyperTune Garage Islamabad';
    seoDesc = 'Terms of service, warranty conditions, and service agreements at HyperTune Garage Islamabad & Rawalpindi.';
    seoKeywords = 'terms and conditions hypertune garage';
    pagePath = '/terms-conditions/';
  } else if (currentPage === 'warranty') {
    seoTitle = '12-Month Warranty Specs & Policy | HyperTune Garage';
    seoDesc = 'Details on HyperTune Garage 12-month / 20,000 km bumper-to-bumper repair warranty covering parts and labor across Islamabad & Rawalpindi.';
    seoKeywords = 'car repair warranty islamabad, 12 month auto warranty pakistan, hypertune warranty specs';
    pagePath = '/warranty-specs/';
  } else if (currentPage === 'sitemap') {
    seoTitle = 'HTML Site Map & Index Directory | HyperTune Garage Islamabad & Rawalpindi';
    seoDesc = 'Explore the complete dynamic index of HyperTune Garage pages, specialized service categories, workshop locations in Islamabad & Rawalpindi, and technical blog articles.';
    seoKeywords = 'hypertune garage site map, car workshop index islamabad, car repair services directory, auto repair rawalpindi pages';
    pagePath = '/sitemap/';
  }

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
      {/* Dynamic SEO Tags */}
      <SEOHead title={seoTitle} description={seoDesc} keywords={seoKeywords} path={pagePath} />

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
        {currentPage === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        )}
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
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Action Buttons */}
      <FloatingWhatsApp />

      {/* Overlays / Modals */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingServiceId}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default App;
