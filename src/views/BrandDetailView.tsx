import React from 'react';
import { PageId } from '../types';
import { brandsData } from '../data/brandsData';
import { SEOHead } from '../components/SEOHead';
import {
  Wrench,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Phone,
  MessageSquare,
  ArrowRight,
  Calendar,
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface BrandDetailViewProps {
  slug?: string;
  onNavigate: (page: PageId, slug?: string) => void;
}

export const BrandDetailView: React.FC<BrandDetailViewProps> = ({ slug, onNavigate }) => {
  const brand = brandsData.find((b) => b.slug === slug) || brandsData[0];

  const brandSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: brand.name,
    description: brand.seo.description,
    url: `https://hypertunegarage.pk/brands/${brand.slug}/`,
    telephone: '+923330177717',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9',
      addressLocality: 'Islamabad',
      postalCode: '44000',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5651,
      longitude: 73.1362,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '22:00',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: brand.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen">
      <SEOHead
        title={brand.seo.title}
        description={brand.seo.description}
        keywords={brand.seo.keywords.join(', ')}
        path={`/brands/${brand.slug}/`}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [brandSchema, faqSchema],
        }}
      />

      {/* Breadcrumb Navigation */}
      <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <button onClick={() => onNavigate('home')} className="hover:text-cyan-400 transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => onNavigate('brands')} className="hover:text-cyan-400 transition-colors">Brand Specialists</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400 font-semibold truncate">{brand.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-gradient-to-b from-slate-900/80 via-slate-950 to-[#030712]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {brand.logoBadge}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {brand.name}
            </h1>
            <p className="mt-3 text-lg text-cyan-400 font-medium">
              {brand.tagline}
            </p>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              {brand.overview}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('booking', brand.slug)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
              >
                <Calendar className="w-4 h-4" /> Book {brand.logoBadge.replace('Master', '').trim()} Appointment
              </button>
              <a
                href={`https://wa.me/923330177717?text=${encodeURIComponent(`Hi HyperTune Garage, I need specialized service/diagnostics for my ${brand.name.split(' ')[0]}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl border border-slate-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp Specialist
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src={brand.heroImage}
                alt={brand.name}
                className="w-full h-80 object-cover"
                width={800}
                height={450}
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider">OEM Diagnostic Hardware</p>
                <p className="text-sm font-semibold text-white mt-0.5">{brand.diagnosticSoftware}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Models & Common Fault Solutions */}
          <div className="lg:col-span-8 space-y-12">
            {/* Models Covered */}
            <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Cpu className="w-6 h-6 text-cyan-400" />
                Chassis & Engine Models Serviced
              </h2>
              <p className="text-slate-400 text-sm mt-1 mb-6">
                Our technicians are factory-trained with dedicated tooling for all generation variants:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {brand.modelsCovered.map((model, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{model}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Issues & Engineering Fixes */}
            <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                Common Faults & Guaranteed Technical Fixes
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                Tested engineering protocols designed for extreme Pakistani summer temperatures and fuel conditions:
              </p>
              <div className="space-y-4">
                {brand.commonIssuesAndFixes.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-950/80 text-amber-400 border border-amber-500/30 text-xs flex items-center justify-center shrink-0 font-bold">
                        !
                      </span>
                      {item.issue}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed pl-7">
                      <span className="text-cyan-400 font-semibold">HyperTune Solution: </span>
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Workshop Services */}
            <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <Wrench className="w-6 h-6 text-cyan-400" />
                Specialized Workshop Services Offered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {brand.specializedServices.map((srv, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-cyan-400" />
                Frequently Asked Questions ({brand.name.split(' ')[0]})
              </h2>
              <div className="space-y-4">
                {brand.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <h3 className="text-base font-bold text-cyan-300 mb-2">{faq.question}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Quick Book & Valet Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Estimated Price Range</span>
                <p className="text-xl font-extrabold text-white mt-1">{brand.pricingRange}</p>
                <p className="text-xs text-slate-400 mt-1">Includes diagnostic scan, quote approval & video inspection report.</p>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Genuine OEM Spare Parts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dealer-Grade Diagnostic Hardware</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Insured Valet Vehicle Collection</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Up to 12-Month Written Warranty</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onNavigate('booking', brand.slug)}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  Schedule Brand Inspection <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+923330177717"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-cyan-400" /> Call Hotline (0333-0177717)
                </a>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200">
                <p className="font-semibold text-cyan-300 mb-1">Islamabad Flagship Hub:</p>
                <p className="text-slate-300">Block E Police Foundation, Sector O-9, Islamabad. 8 bays, cleanroom PPF studio & customer lounge.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Other Brand Specialists Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-1">Specialized Divisions</span>
            <h2 className="text-2xl font-bold text-white">Explore Other Brand Specialists</h2>
          </div>
          <button
            onClick={() => onNavigate('brands')}
            className="text-cyan-400 hover:text-cyan-300 text-xs font-bold inline-flex items-center gap-1 self-start sm:self-auto"
          >
            View All (24) Brands &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {brandsData
            .filter((b) => b.slug !== brand.slug)
            .slice(0, 12)
            .map((b) => (
              <button
                key={b.id}
                onClick={() => onNavigate('brand-detail', b.slug)}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 text-left transition-all group"
              >
                <span className="text-xs font-bold text-white group-hover:text-cyan-400 block truncate">
                  {b.name.split(' ')[0]}
                </span>
                <span className="text-[10px] text-slate-400 block truncate mt-0.5">
                  {b.logoBadge}
                </span>
              </button>
            ))}
        </div>
      </section>
    </div>
  );
};
