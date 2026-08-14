import React, { useState, useMemo } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
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
  Compass,
  CheckCircle2,
  HelpCircle,
  Award,
  Zap,
  Sliders
} from 'lucide-react';

interface SitemapViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const SitemapView: React.FC<SitemapViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Core High-Level Website Pages
  const mainPages: { label: string; page: PageId; desc: string; category: string; icon: React.ElementType }[] = [
    { label: 'Home Overview', page: 'home', desc: 'Main workshop portal, hero service highlights, before/after slider, and live customer reviews.', category: 'Core', icon: Globe },
    { label: 'About HyperTune Garage', page: 'about', desc: 'Company history, master engineering credentials, dust-free studio specs, and tooling standards.', category: 'Core', icon: Layers },
    { label: 'Services Catalogue', page: 'services', desc: 'Complete catalogue of precision automotive repair, PPF protection, and ECU tuning services.', category: 'Core', icon: Wrench },
    { label: 'Workshop Locations & Hubs', page: 'locations', desc: 'Islamabad Police Foundation Flagship Hub & Rawalpindi Sector I-9 Industrial Branch.', category: 'Core', icon: MapPin },
    { label: 'Work Gallery & Restorations', page: 'gallery', desc: 'High-resolution before/after portfolio of PPF installations, ceramic coatings, and engine overhauls.', category: 'Core', icon: Sparkles },
    { label: 'Customer Reviews & Feedback', page: 'testimonials', desc: 'Genuine 4.9-star Google Business Profile reviews from Porsche, BMW, Mercedes & Toyota owners.', category: 'Core', icon: Award },
    { label: 'Car Care Blog & Tech Guides', page: 'blog', desc: 'Technical articles, ECU tuning advisories, maintenance tips, and diagnostic case studies.', category: 'Core', icon: BookOpen },
    { label: 'Frequently Asked Questions (FAQ)', page: 'faq', desc: 'Detailed answers regarding repair turnaround times, warranties, OEM genuine parts, and pricing.', category: 'Support', icon: HelpCircle },
    { label: 'Contact Us & Workshop Directory', page: 'contact', desc: 'Direct phone hotlines, official WhatsApp support, physical address pins, and quote dispatch form.', category: 'Support', icon: Phone },
    { label: '12-Month / 15,000 KM Warranty', page: 'warranty', desc: 'Official bumper-to-bumper workshop warranty coverage, terms, claim process, and exclusions.', category: 'Legal', icon: ShieldCheck },
    { label: 'Privacy Policy', page: 'privacy', desc: 'Customer confidentiality guarantee, vehicle data handling, digital security, and cookie policies.', category: 'Legal', icon: FileText },
    { label: 'Terms & Conditions', page: 'terms', desc: 'Workshop service agreements, vehicle drop-off policies, diagnostic estimate terms, and billing.', category: 'Legal', icon: FileText },
  ];

  // Group services by department
  const categorizedServices = useMemo(() => {
    const categories: Record<string, typeof servicesData> = {
      'Detailing & Protection': [],
      'Engine & Mechanical': [],
      'Electronics & Performance': [],
      'Drivetrain & Suspension': [],
      'Periodic Maintenance': []
    };

    servicesData.forEach((s) => {
      const cat = s.category.toLowerCase();
      if (cat.includes('protection') || cat.includes('detailing') || cat.includes('paint') || cat.includes('wrap') || cat.includes('tint')) {
        categories['Detailing & Protection'].push(s);
      } else if (cat.includes('engine') || cat.includes('mechanical') || cat.includes('overhaul') || cat.includes('hybrid')) {
        categories['Engine & Mechanical'].push(s);
      } else if (cat.includes('tuning') || cat.includes('ecu') || cat.includes('diagnostic') || cat.includes('electrical')) {
        categories['Electronics & Performance'].push(s);
      } else if (cat.includes('transmission') || cat.includes('suspension') || cat.includes('brake') || cat.includes('wheel')) {
        categories['Drivetrain & Suspension'].push(s);
      } else {
        categories['Periodic Maintenance'].push(s);
      }
    });

    return categories;
  }, []);

  // Filter items based on search query and category filter
  const filteredMainPages = useMemo(() => {
    return mainPages.filter(p => {
      const matchesSearch = !searchQuery.trim() ||
        p.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = activeCategory === 'all' || activeCategory === 'core' || p.category.toLowerCase() === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory, mainPages]);

  const filteredServices = useMemo(() => {
    return servicesData.filter(s => {
      const matchesSearch = !searchQuery.trim() ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.subServices?.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCat = activeCategory === 'all' || activeCategory === 'services' || activeCategory === s.category.toLowerCase();
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory]);

  const filteredLocations = useMemo(() => {
    return locationsData.filter(l => {
      const matchesSearch = !searchQuery.trim() ||
        l.branchName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.city.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = activeCategory === 'all' || activeCategory === 'locations';
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory]);

  const filteredBlogPosts = useMemo(() => {
    return blogData.filter(b => {
      const matchesSearch = !searchQuery.trim() ||
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCat = activeCategory === 'all' || activeCategory === 'blog' || activeCategory === 'guides';
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory]);

  const totalIndexedCount =
    filteredMainPages.length +
    filteredServices.length +
    filteredLocations.length +
    filteredBlogPosts.length;

  return (
    <div className="pt-24 pb-20 space-y-12">
      {/* Standalone Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-cyan-400 transition-colors font-medium flex items-center gap-1"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-400 font-bold">Site Map Directory</span>
        </nav>
      </div>

      {/* Hero Header Section */}
      <section className="bg-[#05080e] border-y border-slate-800/80 py-12 md:py-16 px-4 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-extrabold text-xs uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Complete Human-Readable Site Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500">Site Map Index</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            A comprehensive visual index of every page, service package, workshop location, and engineering guide available on HyperTune Garage. Navigate easily across our entire portal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="bg-[#0b121e] border border-cyan-500/30 px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-300 font-bold">
                <strong className="text-white font-extrabold">{totalIndexedCount}</strong> Live Indexed Portals
              </span>
            </div>
            <div className="bg-[#0b121e] border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-400">
              ⚡ Updated for Islamabad & Rawalpindi Operations
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Live Search & Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4 text-cyan-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sitemap links (e.g., PPF, Engine Overhaul, Islamabad, Tuning, FAQ)..."
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

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {[
              { id: 'all', label: 'All Portals' },
              { id: 'core', label: 'Main Pages' },
              { id: 'services', label: 'Services Catalogue' },
              { id: 'locations', label: 'Locations' },
              { id: 'blog', label: 'Car Care Guides' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeCategory === tab.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-[#0b121e] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: CORE PRIMARY WEBSITE PAGES */}
      {filteredMainPages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">Main Website Portals</h2>
                <p className="text-xs text-slate-400">Primary navigational hubs and essential company information</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
              {filteredMainPages.length} Pages
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMainPages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className="bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-1 cursor-pointer group shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-colors">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors flex items-center gap-1 font-bold">
                        Open Page <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 uppercase tracking-wider font-mono font-bold">
                      {item.category} Section
                    </span>
                    <span className="text-cyan-400 font-bold group-hover:underline">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION 2: SPECIALIZED SERVICES DIRECTORY */}
      {filteredServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">Services Catalogue Directory</h2>
                <p className="text-xs text-slate-400">Dedicated service breakdown pages with pricing, timelines & specs</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
              {filteredServices.length} Services
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map((service) => (
              <div
                key={service.slug}
                onClick={() => onNavigate('service-detail', service.slug)}
                className="bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-1 cursor-pointer group shadow-lg flex flex-col justify-between space-y-4"
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
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: WORKSHOP BRANCH LOCATIONS */}
      {filteredLocations.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">Workshop Branch Locations</h2>
                <p className="text-xs text-slate-400">Physical workshop facilities, addresses, directions & phone lines</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              {filteredLocations.length} Hubs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLocations.map((loc) => (
              <div
                key={loc.slug}
                className="bg-[#0b121e] border border-slate-800 hover:border-emerald-500/40 p-6 rounded-3xl transition-all group shadow-xl space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono">
                      {loc.city} Workshop Hub
                    </span>
                    <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors">
                      {loc.branchName}
                    </h3>
                  </div>
                  <button
                    onClick={() => onNavigate('location-detail', loc.slug)}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold transition-all border border-slate-800 flex items-center gap-1 shrink-0"
                  >
                    <span>View Hub</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {loc.hours.weekdays}
                  </span>
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-cyan-400 hover:underline font-bold font-mono"
                  >
                    📞 {loc.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: TECHNICAL BLOG & GUIDES */}
      {filteredBlogPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">Car Care Blog & Engineering Guides</h2>
                <p className="text-xs text-slate-400">Technical insights, PPF comparisons, and DIY maintenance advisories</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
              {filteredBlogPosts.length} Articles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBlogPosts.map((post) => (
              <div
                key={post.slug}
                onClick={() => onNavigate('blog-post', post.slug)}
                className="bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-1 cursor-pointer group shadow-lg flex flex-col justify-between space-y-4"
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
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 5: ACTION & UTILITY SHORTCUTS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#09111e] via-[#0d1727] to-cyan-950/40 border border-cyan-500/30 rounded-3xl p-8 space-y-6 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Direct Booking & Support Portals</h2>
              <p className="text-xs text-slate-400">Instant shortcuts to schedule appointments, request estimates, or get expert technical guidance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="p-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs flex items-center justify-between shadow-lg transition-all active:scale-95"
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
              href="tel:+923315008872"
              className="p-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-between shadow-lg transition-all active:scale-95"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Direct Workshop Hotline</span>
              </div>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-cyan-400 font-bold text-xs flex items-center justify-between border border-cyan-500/30 transition-all"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Contact & Hub Directory</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

