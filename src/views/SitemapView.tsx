import React, { useState, useMemo } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { brandsData } from '../data/brandsData';
import { locationsData } from '../data/locationsData';
import { blogData } from '../data/blogData';
import {
  MapPin,
  Wrench,
  BookOpen,
  FileText,
  ChevronRight,
  Search,
  Sparkles,
  ShieldCheck,
  Globe,
  Calendar,
  Phone,
  MessageCircle,
  ExternalLink,
  Layers,
  ArrowRight,
  Clock,
  Award
} from 'lucide-react';

interface SitemapViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const SitemapView: React.FC<SitemapViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedUrl, setCopiedUrl] = useState(false);

  const sitemapDirectUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/sitemap/`
    : 'https://hypertunegarage.pk/sitemap/';

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(sitemapDirectUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  // Main high-level site pages
  const mainPages: { label: string; page: PageId; path: string; desc: string; icon: React.ElementType }[] = [
    { label: 'Home Page', page: 'home', path: '/', desc: 'Main workshop overview, hero service highlights, and instant booking.', icon: Globe },
    { label: 'Brand Specialists Directory', page: 'brands', path: '/brands/', desc: 'Dedicated engineering hubs and factory diagnostic scan facilities for 24 vehicle brands.', icon: Award },
    { label: 'Book Service Appointment', page: 'booking', path: '/book-appointment/', desc: 'Online workshop appointment scheduling at our Islamabad Flagship Hub with instant time slot reservation.', icon: Calendar },
    { label: 'Services Catalogue', page: 'services', path: '/services/', desc: 'Full catalogue of 13 precision repair, protection, and overhaul services.', icon: Wrench },
    { label: 'Workshop Locations', page: 'locations', path: '/locations/', desc: 'Islamabad Police Foundation Flagship Hub directions, facilities and contacts.', icon: MapPin },
    { label: 'Work Gallery & Restorations', page: 'gallery', path: '/gallery/', desc: 'Before & after high-resolution portfolio of PPF, paint & engine rebuilds.', icon: Sparkles },
    { label: 'Car Care Blog & Guides', page: 'blog', path: '/blog/', desc: 'Technical guides, engine care tips, and maintenance articles by engineers.', icon: BookOpen },
    { label: 'Customer Reviews & Rating', page: 'testimonials', path: '/testimonials/', desc: 'Genuine 4.9-star Google reviews from verified vehicle owners across Islamabad & Rawalpindi.', icon: ShieldCheck },
    { label: 'Frequently Asked Questions', page: 'faq', path: '/faq/', desc: 'Detailed answers on repair warranties, pricing, turnaround, and parts.', icon: FileText },
    { label: 'About HyperTune Garage', page: 'about', path: '/about/', desc: 'Company history, master technician credentials, and workshop specs.', icon: Layers },
    { label: 'Contact Us', page: 'contact', path: '/contact/', desc: 'Direct phone lines, WhatsApp links, email, and location maps.', icon: Phone },
    { label: '12-Month Warranty Specs', page: 'warranty', path: '/warranty-specs/', desc: 'Bumper-to-bumper 12-month / 15,000 km warranty coverage details.', icon: ShieldCheck },
    { label: 'Privacy Policy', page: 'privacy', path: '/privacy-policy/', desc: 'Customer data privacy standards, security, and cookie policies.', icon: FileText },
    { label: 'Terms & Conditions', page: 'terms', path: '/terms-conditions/', desc: 'Service agreements, estimate terms, and workshop repair policies.', icon: FileText },
  ];

  // Filter items based on search query
  const filteredMainPages = useMemo(() => {
    if (!searchQuery.trim()) return mainPages;
    const q = searchQuery.toLowerCase();
    return mainPages.filter(p => p.label.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }, [searchQuery, mainPages]);

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return servicesData;
    const q = searchQuery.toLowerCase();
    return servicesData.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.shortDesc.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.subServices.some(sub => sub.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const filteredBrands = useMemo(() => {
    if (!searchQuery.trim()) return brandsData;
    const q = searchQuery.toLowerCase();
    return brandsData.filter(b =>
      b.name.toLowerCase().includes(q) ||
      b.tagline.toLowerCase().includes(q) ||
      b.specializedServices.some(s => s.toLowerCase().includes(q)) ||
      b.diagnosticSoftware.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredLocations = useMemo(() => {
    if (!searchQuery.trim()) return locationsData;
    const q = searchQuery.toLowerCase();
    return locationsData.filter(l =>
      l.branchName.toLowerCase().includes(q) ||
      l.address.toLowerCase().includes(q) ||
      l.area.toLowerCase().includes(q) ||
      l.city.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredBlogPosts = useMemo(() => {
    if (!searchQuery.trim()) return blogData;
    const q = searchQuery.toLowerCase();
    return blogData.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.excerpt.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const totalIndexedCount =
    filteredMainPages.length +
    filteredServices.length +
    filteredBrands.length +
    filteredLocations.length +
    filteredBlogPosts.length;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb & Header Banner */}
      <div className="space-y-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
          <button onClick={() => onNavigate('home')} className="hover:underline text-slate-400">
            Home
          </button>
          <span>/</span>
          <span className="text-cyan-400 font-bold">Site Map Index</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-Time Dynamic Website Index</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Site Map Directory
            </h1>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              Explore the complete hierarchy of HyperTune Garage. Navigate to primary views, specialized repair & tuning services, workshop location in Islamabad, and technical blog articles.
            </p>
          </div>

          <div className="bg-[#0b121e] border border-cyan-500/30 p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-lg shadow-cyan-500/5">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xl">
              {totalIndexedCount}
            </div>
            <div className="text-xs space-y-0.5">
              <span className="text-slate-400 block font-medium">Indexed Live Links</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Auto-Updated State
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Search & Filter Controls */}
      <div className="relative max-w-2xl mx-auto md:mx-0">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
          <Search className="w-5 h-5 text-cyan-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search site map links (e.g., PPF, Engine Overhaul, Islamabad, Hybrid Battery)..."
          className="w-full pl-11 pr-10 py-3.5 bg-[#0b121e] border border-slate-800 rounded-2xl text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-xl"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* SECTION 1: PRIMARY WEB PAGES */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">Main Website Pages</h2>
            <p className="text-xs text-slate-400">Core navigation portals and essential business information ({filteredMainPages.length} links)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMainPages.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.page}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.page);
                }}
                className="bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 p-5 rounded-2xl transition-all hover:-translate-y-0.5 cursor-pointer group shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors flex items-center gap-1 font-bold">
                      Navigate <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: SPECIALIZED SERVICES CATALOGUE */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">Services Catalogue Directory</h2>
            <p className="text-xs text-slate-400">Individual precision repair, protection & overhaul service pages ({filteredServices.length} services)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}/`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('service-detail', service.slug);
              }}
              className="bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 p-5 rounded-2xl transition-all hover:-translate-y-0.5 cursor-pointer group shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                    {service.category}
                  </span>
                  <span className="text-xs font-extrabold text-amber-400 font-mono">
                    {service.priceRange}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>{service.title}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  {service.estimatedTime}
                </span>
                <span className="text-cyan-400 font-bold group-hover:underline">
                  View Service Specs &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 3: DEDICATED BRAND SPECIALISTS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">Vehicle Brand Specialists</h2>
            <p className="text-xs text-slate-400">OEM diagnostics, specialized toolsets & expert maintenance for luxury and hybrid vehicles ({filteredBrands.length} brands)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBrands.map((brand) => (
            <a
              key={brand.slug}
              href={`/brands/${brand.slug}/`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('brand-detail', brand.slug);
              }}
              className="bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 p-5 rounded-2xl transition-all hover:-translate-y-0.5 cursor-pointer group shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                    {brand.diagnosticSoftware}
                  </span>
                  <span className="text-xs font-extrabold text-cyan-400 font-mono">
                    Specialist Hub
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                  <span>{brand.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {brand.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-slate-400 font-mono">
                  {brand.specializedServices.length} Specialist Services
                </span>
                <span className="text-cyan-400 font-bold group-hover:underline">
                  View Brand Guide &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 4: WORKSHOP BRANCH LOCATIONS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">Workshop Branch Locations</h2>
            <p className="text-xs text-slate-400">Physical workshop addresses, directions & contact portals ({filteredLocations.length} branches)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.slug}
              className="bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 p-6 rounded-3xl transition-all group shadow-xl space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono">
                    {loc.city} Branch
                  </span>
                  <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors">
                    {loc.branchName}
                  </h3>
                </div>
                <a
                  href={`/locations/${loc.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('location-detail', loc.slug);
                  }}
                  className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold transition-all border border-slate-800 flex items-center gap-1 shrink-0"
                >
                  <span>Branch Page</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {loc.isOperational ? (
                <>
                  {loc.address && (
                    <p className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </p>
                  )}

                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                    {loc.hours && (
                      <span className="text-slate-400 flex items-center gap-1.5 font-mono">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        {loc.hours.weekdays}
                      </span>
                    )}
                    <a
                      href={`tel:${loc.phone}`}
                      className="text-cyan-400 hover:underline font-bold font-mono"
                    >
                      📞 {loc.phone}
                    </a>
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-amber-200/90 italic bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
                    &ldquo;{loc.statusNotice}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-amber-400 font-bold">Status: Opening Soon (Under Development)</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: TECHNICAL BLOG & AUTOMOTIVE CARE GUIDES */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">Car Care Blog & Technical Articles</h2>
            <p className="text-xs text-slate-400">Engineering guides, PPF maintenance & ECU tuning articles ({filteredBlogPosts.length} posts)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBlogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}/`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('blog-post', post.slug);
              }}
              className="bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 p-5 rounded-2xl transition-all hover:-translate-y-0.5 cursor-pointer group shadow-lg flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="text-cyan-400 font-bold">{post.category}</span>
                  <span>{post.publishedDate}</span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>By {post.author.name}</span>
                <span className="text-cyan-400 font-bold flex items-center gap-1 group-hover:underline">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 5: DIRECT UTILITIES & ACTION PORTALS */}
      <section className="bg-gradient-to-r from-[#09111e] via-[#0d1727] to-cyan-950/40 border border-cyan-500/30 rounded-3xl p-8 space-y-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white">Direct Booking & Quick Utility Portals</h2>
            <p className="text-xs text-slate-400">Instant shortcuts to book repairs, request estimates, or contact workshop engineers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="p-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center justify-between shadow-lg transition-all active:scale-95"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Slot</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20need%20an%20instant%20repair/tuning%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-between shadow-lg transition-all active:scale-95"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Instant Quote</span>
            </div>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="tel:+923330177717"
            className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 font-bold text-xs flex items-center justify-between shadow-lg transition-all active:scale-95"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Helpline: 0333-0177717</span>
            </div>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="/warranty-specs/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('warranty');
            }}
            className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-cyan-400 font-bold text-xs flex items-center justify-between border border-cyan-500/30 transition-all"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>12-Mo Warranty Specs</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
