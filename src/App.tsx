import React, { useState, useEffect, Suspense, lazy } from 'react';
import { PageId } from './types';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileDrawer } from './components/MobileDrawer';

// Critical Initial View (HomeView loaded directly)
import { HomeView } from './views/HomeView';

// Code-split secondary views & modals to optimize initial bundle size & LCP
const AboutView = lazy(() => import('./views/AboutView').then(m => ({ default: m.AboutView })));
const ServicesView = lazy(() => import('./views/ServicesView').then(m => ({ default: m.ServicesView })));
const ServiceDetailView = lazy(() => import('./views/ServiceDetailView').then(m => ({ default: m.ServiceDetailView })));
const LocationsView = lazy(() => import('./views/LocationsView').then(m => ({ default: m.LocationsView })));
const LocationDetailView = lazy(() => import('./views/LocationDetailView').then(m => ({ default: m.LocationDetailView })));
const BlogView = lazy(() => import('./views/BlogView').then(m => ({ default: m.BlogView })));
const BlogPostView = lazy(() => import('./views/BlogPostView').then(m => ({ default: m.BlogPostView })));
const GalleryView = lazy(() => import('./views/GalleryView').then(m => ({ default: m.GalleryView })));
const TestimonialsView = lazy(() => import('./views/TestimonialsView').then(m => ({ default: m.TestimonialsView })));
const FAQView = lazy(() => import('./views/FAQView').then(m => ({ default: m.FAQView })));
const ContactView = lazy(() => import('./views/ContactView').then(m => ({ default: m.ContactView })));
const PrivacyView = lazy(() => import('./views/PrivacyView').then(m => ({ default: m.PrivacyView })));
const TermsView = lazy(() => import('./views/TermsView').then(m => ({ default: m.TermsView })));
const WarrantyView = lazy(() => import('./views/WarrantyView').then(m => ({ default: m.WarrantyView })));
const SitemapView = lazy(() => import('./views/SitemapView').then(m => ({ default: m.SitemapView })));

const BookingModal = lazy(() => import('./components/BookingModal').then(m => ({ default: m.BookingModal })));
const SearchModal = lazy(() => import('./components/SearchModal').then(m => ({ default: m.SearchModal })));

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentSlug, setCurrentSlug] = useState<string | undefined>(undefined);

  // Handle URL pathname, search params, and hash navigation on load, popstate, & hashchange
  useEffect(() => {
    const handleNavigation = () => {
      const pathSegments = window.location.pathname
        .toLowerCase()
        .split('/')
        .filter(Boolean);

      const rawHash = window.location.hash.replace(/^#/, '').trim();
      const hashQuestionIndex = rawHash.indexOf('?');
      const hash = (hashQuestionIndex !== -1 ? rawHash.substring(0, hashQuestionIndex) : rawHash).toLowerCase();

      const searchParams = new URLSearchParams(window.location.search);
      const hashParams = hashQuestionIndex !== -1 ? new URLSearchParams(rawHash.substring(hashQuestionIndex)) : null;

      const querySlug = searchParams.get('slug') || searchParams.get('id') || hashParams?.get('slug') || hashParams?.get('id') || undefined;

      const mainSegment = pathSegments[0] || '';
      const subSegment = pathSegments[1] || querySlug || '';

      const validPages: PageId[] = [
        'home', 'about', 'services', 'service-detail', 'locations', 'location-detail',
        'blog', 'blog-post', 'gallery', 'testimonials', 'faq', 'contact',
        'privacy', 'terms', 'warranty', 'sitemap'
      ];

      if (mainSegment === 'contact' || mainSegment === 'contact-us' || hash === 'contact' || hash === 'contact-us') {
        setCurrentPage('contact');
        setCurrentSlug(undefined);
      } else if (mainSegment === 'about' || mainSegment === 'about-us' || hash === 'about' || hash === 'about-us') {
        setCurrentPage('about');
        setCurrentSlug(undefined);
      } else if (mainSegment === 'services' || mainSegment === 'service' || mainSegment === 'service-detail' || hash === 'services' || hash.startsWith('service')) {
        const targetSlug = subSegment || (hash.includes('/') ? hash.split('/')[1] : undefined);
        if (targetSlug && targetSlug !== 'services') {
          setCurrentPage('service-detail');
          setCurrentSlug(targetSlug);
        } else {
          setCurrentPage('services');
          setCurrentSlug(undefined);
        }
      } else if (mainSegment === 'locations' || mainSegment === 'location' || mainSegment === 'location-detail' || hash === 'locations' || hash.startsWith('location')) {
        const targetSlug = subSegment || (hash.includes('/') ? hash.split('/')[1] : undefined);
        if (targetSlug && targetSlug !== 'locations') {
          setCurrentPage('location-detail');
          setCurrentSlug(targetSlug);
        } else {
          setCurrentPage('locations');
          setCurrentSlug(undefined);
        }
      } else if (mainSegment === 'blog' || mainSegment === 'blogs' || mainSegment === 'blog-post' || hash === 'blog' || hash.startsWith('blog')) {
        const targetSlug = subSegment || (hash.includes('/') ? hash.split('/')[1] : undefined);
        if (targetSlug && targetSlug !== 'blog') {
          setCurrentPage('blog-post');
          setCurrentSlug(targetSlug);
        } else {
          setCurrentPage('blog');
          setCurrentSlug(undefined);
        }
      } else if (mainSegment === 'gallery' || hash === 'gallery') {
        setCurrentPage('gallery');
        setCurrentSlug(undefined);
      } else if (mainSegment === 'testimonials' || mainSegment === 'reviews' || hash === 'testimonials' || hash === 'reviews') {
        setCurrentPage('testimonials');
        setCurrentSlug(undefined);
      } else if (mainSegment === 'faq' || mainSegment === 'faqs' || hash === 'faq' || hash === 'faqs') {
        setCurrentPage('faq');
        setCurrentSlug(undefined);
      } else if (mainSegment === 'privacy' || mainSegment === 'privacy-policy' || hash === 'privacy' || hash === 'privacy-policy') {
        setCurrentPage('privacy');
        setCurrentSlug(undefined);
      } else if (mainSegment === 'terms' || mainSegment === 'terms-conditions' || mainSegment === 'terms-of-service' || hash === 'terms' || hash === 'terms-conditions') {
        setCurrentPage('terms');
        setCurrentSlug(undefined);
      } else if (mainSegment === 'warranty' || mainSegment === 'warranty-specs' || hash === 'warranty' || hash === 'warranty-specs') {
        setCurrentPage('warranty');
        setCurrentSlug(undefined);
      } else if (mainSegment === 'sitemap' || mainSegment === 'sitemap.html' || hash === 'sitemap' || hash === 'site-map') {
        setCurrentPage('sitemap');
        setCurrentSlug(undefined);
      } else if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
        setCurrentSlug(undefined);
      } else {
        setCurrentPage('home');
        setCurrentSlug(undefined);
      }
    };

    handleNavigation();
    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  // Modals state
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Scroll to top on navigation change and update history
  const navigateTo = (page: PageId, slug?: string) => {
    setCurrentPage(page);
    setCurrentSlug(slug);

    let targetUrl = '/';
    if (page === 'contact') targetUrl = '/contact';
    else if (page === 'about') targetUrl = '/about';
    else if (page === 'services') targetUrl = slug ? `/services/${slug}` : '/services';
    else if (page === 'service-detail') targetUrl = slug ? `/services/${slug}` : '/services';
    else if (page === 'locations') targetUrl = slug ? `/locations/${slug}` : '/locations';
    else if (page === 'location-detail') targetUrl = slug ? `/locations/${slug}` : '/locations';
    else if (page === 'blog') targetUrl = slug ? `/blog/${slug}` : '/blog';
    else if (page === 'blog-post') targetUrl = slug ? `/blog/${slug}` : '/blog';
    else if (page === 'gallery') targetUrl = '/gallery';
    else if (page === 'testimonials') targetUrl = '/testimonials';
    else if (page === 'faq') targetUrl = '/faq';
    else if (page === 'privacy') targetUrl = '/privacy-policy';
    else if (page === 'terms') targetUrl = '/terms-conditions';
    else if (page === 'warranty') targetUrl = '/warranty-specs';
    else if (page === 'sitemap') targetUrl = '/sitemap';

    if (window.location.pathname !== targetUrl) {
      try {
        window.history.pushState({ page, slug }, '', targetUrl);
      } catch {
        window.location.hash = page;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  // Compute page SEO title, description, keywords & path
  let seoTitle = 'HyperTune Garage - Premium Automotive Workshop in Islamabad & Rawalpindi';
  let seoDesc = 'Car repair workshop in Islamabad & Rawalpindi for Toyota, Honda, Suzuki, Hyundai, Kia & luxury imports. ECU remap, engine overhaul, PPF studio, 3D laser alignment. 12-Month warranty.';
  let seoKeywords = 'car workshop islamabad, auto repair rawalpindi, car detailing islamabad, paint protection film ppf islamabad, ceramic coating rawalpindi, bmw repair islamabad, mercedes garage rawalpindi, audi service center, engine overhaul, ecu tuning remapping, hybrid battery repair, car mechanic near me, hypertune garage';
  let pagePath = '/';

  if (currentPage === 'about') {
    seoTitle = 'About Us | HyperTune Garage Workshop Islamabad';
    seoDesc = 'Learn about HyperTune Garage, Islamabad & Rawalpindi’s premier automotive workshop with master certified technicians, German computer diagnostics, and 10+ years of repair excellence.';
    seoKeywords = 'about hypertune garage, best car workshop islamabad, certified car mechanics rawalpindi, luxury car specialist pakistan';
    pagePath = '/about/';
  } else if (currentPage === 'services') {
    seoTitle = 'Car Repair Services & Prices | HyperTune Garage';
    seoDesc = 'Explore 13 specialized automotive service categories in Islamabad & Rawalpindi: Engine Overhaul, Maintenance, Brakes, Transmission, Hybrid Battery, ECU Tuning, AC & Electrical, Diagnostics, Body Repair, PPF & Detailing.';
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
    seoDesc = 'Expert car care tips, ECU remapping guides, PPF maintenance advice, and vehicle troubleshooting articles by HyperTune Garage engineers in Pakistan.';
    seoKeywords = 'car care tips pakistan, automotive blog islamabad, car maintenance guide, ecu remapping tips, ceramic coating care';
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
    seoDesc = 'Get in touch with HyperTune Garage in Islamabad & Rawalpindi. Call +92 331 5008872, message on WhatsApp, or book an online repair slot.';
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
        {currentPage === 'home' ? (
          <HomeView
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        ) : (
          <Suspense
            fallback={
              <div className="min-h-[70vh] flex items-center justify-center pt-32">
                <div className="w-8 h-8 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin" />
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

      {/* Overlays / Modals */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {isBookingOpen && (
        <Suspense fallback={null}>
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            initialServiceId={bookingServiceId}
          />
        </Suspense>
      )}

      {isSearchOpen && (
        <Suspense fallback={null}>
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onNavigate={navigateTo}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
