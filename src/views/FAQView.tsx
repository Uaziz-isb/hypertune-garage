import React, { useState, useMemo } from 'react';
import { PageId } from '../types';
import { faqData } from '../data/faqData';
import {
  ChevronDown,
  HelpCircle,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  FileText,
  Sparkles,
  Search,
  Wrench,
  Car,
  MapPin,
  MessageSquare,
  Phone,
  Calendar,
} from 'lucide-react';

interface FAQViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [openId, setOpenId] = useState<string>(faqData[0]?.id || 'faq-gen-1');
  const [activeCat, setActiveCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(faqData.map((f) => f.category)));
    return ['all', ...cats];
  }, []);

  const filtered = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return faqData.filter((faq) => {
      const matchesCat = activeCat === 'all' || faq.category === activeCat;
      if (!matchesCat) return false;
      if (!query) return true;

      const inQuestion = faq.question.toLowerCase().includes(query);
      const inAnswer = faq.answer.toLowerCase().includes(query);
      const inHighlights = faq.keyHighlights?.some((h) => h.toLowerCase().includes(query));
      const inTags = faq.tags?.some((t) => t.toLowerCase().includes(query));
      const inOverview = faq.comprehensiveOverview?.toLowerCase().includes(query);

      return inQuestion || inAnswer || inHighlights || inTags || inOverview;
    });
  }, [activeCat, searchQuery]);

  const handleServiceClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const slug = href.replace(/^\/services\/|\/$/g, '');
    onNavigate('service-detail', slug);
  };

  const handleBrandClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const slug = href.replace(/^\/brands\/|\/$/g, '');
    onNavigate('brand-detail', slug);
  };

  const handleLocationClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const slug = href.replace(/^\/locations\/|\/$/g, '');
    onNavigate('location-detail', slug);
  };

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-12">
      {/* Header Section */}
      <section className="bg-[#05080e] border-b border-slate-800 py-14 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-4 text-center">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest inline-flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Authoritative Technical Knowledge Base</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Detailed technical procedures, warranty guarantees, diagnostic protocols, and workshop guidelines for car owners across Islamabad and Rawalpindi.
          </p>

          {/* Search Bar Input */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search procedures (e.g. PPF, CVT fluid, Check Engine, Hybrid battery, BMW)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#0b121e] border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCat === cat
                  ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/25'
                  : 'bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800/80'
              }`}
            >
              {cat === 'all' ? 'All Questions' : cat}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            Showing <strong className="text-cyan-400">{filtered.length}</strong> {filtered.length === 1 ? 'question' : 'questions'}
            {activeCat !== 'all' ? ` in ${activeCat}` : ''}
            {searchQuery ? ` matching "${searchQuery}"` : ''}
          </span>
          {(activeCat !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setActiveCat('all');
                setSearchQuery('');
              }}
              className="text-cyan-400 hover:underline font-semibold"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-[#0b121e] border border-slate-800 rounded-3xl p-8 space-y-4">
              <HelpCircle className="w-12 h-12 text-slate-600 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-white font-bold text-base">No matching technical questions found</h3>
                <p className="text-slate-400 text-xs max-w-md mx-auto">
                  Have a specific question about your vehicle’s symptoms, estimate, or parts availability?
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage,%20I%20have%20a%20technical%20question%20regarding%20my%20car"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ask Master Tech on WhatsApp</span>
                </a>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Diagnostic Slot</span>
                </button>
              </div>
            </div>
          ) : (
            filtered.map((faq) => {
              const isOpen = openId === faq.id;
              const faqId = `faq-btn-${faq.id}`;
              const panelId = `faq-panel-${faq.id}`;
              const wordCount = faq.comprehensiveOverview
                ? faq.comprehensiveOverview.trim().split(/\s+/).length
                : 0;

              return (
                <div
                  key={faq.id}
                  className={`bg-[#0b121e] border rounded-2xl overflow-hidden transition-all ${
                    isOpen
                      ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/5'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    id={faqId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? '' : faq.id)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span className="flex items-start sm:items-center gap-3">
                      <div
                        className={`p-2 rounded-xl shrink-0 mt-0.5 sm:mt-0 ${
                          isOpen ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-900 text-slate-400'
                        }`}
                      >
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] text-cyan-400 font-semibold block uppercase tracking-wider mb-0.5">
                          {faq.category}
                        </span>
                        <span className="text-sm sm:text-base font-extrabold text-white leading-snug">
                          {faq.question}
                        </span>
                      </div>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={faqId}
                      className="px-5 sm:px-6 pb-6 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 space-y-5 animate-in fade-in duration-150"
                    >
                      <p className="text-slate-200 text-sm font-medium leading-relaxed">
                        {faq.answer}
                      </p>

                      {/* Key Highlights Bullet Box */}
                      {faq.keyHighlights && faq.keyHighlights.length > 0 && (
                        <div className="bg-[#070c14] border border-cyan-500/20 rounded-xl p-4 space-y-2">
                          <span className="text-cyan-400 font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-cyan-400" />
                            <span>Technical Specifications & Standards</span>
                          </span>
                          <ul className="space-y-2 pt-1">
                            {faq.keyHighlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Detailed Paragraph Breakdown */}
                      {faq.details && faq.details.length > 0 && (
                        <div className="space-y-2.5 pt-1">
                          {faq.details.map((paragraph, idx) => (
                            <div key={idx} className="bg-slate-900/40 border border-slate-800/60 p-3 rounded-xl">
                              <p className="text-slate-300 leading-relaxed text-xs">{paragraph}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 300+ Word Comprehensive Master Technical Response */}
                      {faq.comprehensiveOverview && (
                        <div className="bg-[#080e1a] border border-cyan-500/30 rounded-2xl p-4 sm:p-5 space-y-3 relative overflow-hidden">
                          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                            <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                              <FileText className="w-4 h-4 text-cyan-400" />
                              <span>Deep Technical Guide & Engineering Methodology</span>
                            </div>
                            <span className="text-[10px] text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-mono font-semibold">
                              {wordCount}+ Words
                            </span>
                          </div>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify space-y-2 font-normal">
                            {faq.comprehensiveOverview}
                          </p>
                        </div>
                      )}

                      {/* Two-Way Topical Internal Links Section */}
                      {(faq.relatedService || faq.relatedBrand || faq.relatedLocation || faq.relatedArticle) && (
                        <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2.5">
                          <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mr-1">
                            Explore Dedicated Hubs:
                          </span>

                          {faq.relatedService && (
                            <a
                              href={faq.relatedService.href}
                              onClick={(e) => handleServiceClick(e, faq.relatedService!.href)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 font-bold text-xs transition-colors"
                            >
                              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                              <span>{faq.relatedService.title}</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          )}

                          {faq.relatedArticle && (
                            <a
                              href={faq.relatedArticle.href}
                              onClick={(e) => {
                                e.preventDefault();
                                const slug = faq.relatedArticle!.href.replace('/blog/', '').replace('/', '');
                                onNavigate('blog-post', slug);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 font-bold text-xs transition-colors"
                            >
                              <FileText className="w-3.5 h-3.5 text-cyan-400" />
                              <span>{faq.relatedArticle.title}</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          )}

                          {faq.relatedBrand && (
                            <a
                              href={faq.relatedBrand.href}
                              onClick={(e) => handleBrandClick(e, faq.relatedBrand!.href)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 font-bold text-xs transition-colors"
                            >
                              <Car className="w-3.5 h-3.5 text-cyan-400" />
                              <span>{faq.relatedBrand.name}</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          )}

                          {faq.relatedLocation && (
                            <a
                              href={faq.relatedLocation.href}
                              onClick={(e) => handleLocationClick(e, faq.relatedLocation!.href)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 font-bold text-xs transition-colors"
                            >
                              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                              <span>{faq.relatedLocation.name}</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      )}

                      {/* Quick Call to Action Footer */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                        <span className="text-slate-400 text-[11px]">
                          Need immediate estimate or diagnostic slot for your car?
                        </span>
                        <div className="flex items-center gap-2">
                          <a
                            href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage,%20I%20would%20like%20to%20consult%20regarding%20my%20vehicle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 border border-emerald-500/30 font-bold text-xs inline-flex items-center gap-1 transition-colors"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </a>
                          <button
                            onClick={onOpenBooking}
                            className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
                          >
                            <span>Book Inspection Slot</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Global Conversion Banner */}
        <div className="bg-gradient-to-r from-[#070c14] via-[#0b121e] to-[#070c14] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Have a Complex Mechanical or Diagnostic Question?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Our certified master technicians in Sector O-9, Police Foundation, Islamabad offer free initial consultations and computerized system health checks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Workshop Bay</span>
            </button>
            <a
              href="tel:+923330177717"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call 0333-0177717</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
