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
  Copy,
  Check,
  Link,
  Share2,
  Code2
} from 'lucide-react';

interface SitemapViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const SitemapView: React.FC<SitemapViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedXml, setCopiedXml] = useState(false);
  const [showXmlModal, setShowXmlModal] = useState(false);

  const sitemapDirectUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}#sitemap`
    : 'https://hypertunegarage.com/#sitemap';

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(sitemapDirectUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  // Main high-level site pages
  const mainPages: { label: string; page: PageId; desc: string; icon: React.ElementType }[] = [
    { label: 'Home Page', page: 'home', desc: 'Main workshop overview, hero service highlights, and instant booking.', icon: Globe },
    { label: 'Services Catalogue', page: 'services', desc: 'Full catalogue of 13+ precision repair, protection, and tuning services.', icon: Wrench },
    { label: 'Workshop Locations', page: 'locations', desc: 'Islamabad G-8/4 Hub & Rawalpindi I-9 Branch directions and contacts.', icon: MapPin },
    { label: 'Work Gallery & Restorations', page: 'gallery', desc: 'Before & after high-resolution portfolio of PPF, paint & engine rebuilds.', icon: Sparkles },
    { label: 'Car Care Blog & Guides', page: 'blog', desc: 'Technical guides, ECU tuning tips, and maintenance articles by engineers.', icon: BookOpen },
    { label: 'Customer Reviews & Rating', page: 'testimonials', desc: 'Genuine 4.9-star Google reviews from BMW, Audi, Mercedes & Toyota owners.', icon: ShieldCheck },
    { label: 'Frequently Asked Questions', page: 'faq', desc: 'Detailed answers on repair warranties, pricing, turnaround, and parts.', icon: FileText },
    { label: 'About HyperTune Garage', page: 'about', desc: 'Company history, master technician credentials, and workshop specs.', icon: Layers },
    { label: 'Contact Us', page: 'contact', desc: 'Direct phone lines, WhatsApp links, email, and location maps.', icon: Phone },
    { label: '12-Month Warranty Specs', page: 'warranty', desc: 'Bumper-to-bumper 12-month / 15,000 km warranty coverage details.', icon: ShieldCheck },
    { label: 'Privacy Policy', page: 'privacy', desc: 'Customer data privacy standards, security, and cookie policies.', icon: FileText },
    { label: 'Terms & Conditions', page: 'terms', desc: 'Service agreements, estimate terms, and workshop repair policies.', icon: FileText },
  ];

  const xmlContent = useMemo(() => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://hypertunegarage.com';
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    xml += `  <url><loc>${baseUrl}/#sitemap</loc><priority>1.0</priority><changefreq>daily</changefreq></url>\n`;
    mainPages.forEach(p => {
      xml += `  <url><loc>${baseUrl}/#${p.page}</loc><priority>0.8</priority><changefreq>weekly</changefreq></url>\n`;
    });
    servicesData.forEach(s => {
      xml += `  <url><loc>${baseUrl}/#service-detail?slug=${s.slug}</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>\n`;
    });
    locationsData.forEach(l => {
      xml += `  <url><loc>${baseUrl}/#location-detail?slug=${l.slug}</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>\n`;
    });
    blogData.forEach(b => {
      xml += `  <url><loc>${baseUrl}/#blog-post?slug=${b.slug}</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>\n`;
    });
    xml += `</urlset>`;
    return xml;
  }, [mainPages]);

  const handleCopyXml = () => {
    navigator.clipboard.writeText(xmlContent);
    setCopiedXml(true);
    setTimeout(() => setCopiedXml(false), 2500);
  };

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
              Explore the complete hierarchy of HyperTune Garage. Navigate to primary views, specialized repair & tuning services, workshop locations in Islamabad & Rawalpindi, and technical blog articles.
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
          placeholder="Search site map links (e.g., PPF, Engine Overhaul, Islamabad, ECU Remap)..."
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
              <div
                key={item.page}
                onClick={() => onNavigate(item.page)}
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
              </div>
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
            <p className="text-xs text-slate-400">Individual precision repair, protection & remap service pages ({filteredServices.length} services)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.slug}
              onClick={() => onNavigate('service-detail', service.slug)}
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
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: WORKSHOP BRANCH LOCATIONS */}
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
                <button
                  onClick={() => onNavigate('location-detail', loc.slug)}
                  className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold transition-all border border-slate-800 flex items-center gap-1 shrink-0"
                >
                  <span>Branch Page</span>
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
            <div
              key={post.slug}
              onClick={() => onNavigate('blog-post', post.slug)}
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
            </div>
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
            <p className="text-xs text-slate-400">Instant shortcuts to book repairs, request estimates, or contact emergency towing</p>
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
            href="tel:+923315008872"
            className="p-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center justify-between shadow-lg transition-all active:scale-95"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>24/7 Hotline + Towing</span>
            </div>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={() => onNavigate('warranty')}
            className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-cyan-400 font-bold text-xs flex items-center justify-between border border-cyan-500/30 transition-all"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>12-Mo Warranty Specs</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
