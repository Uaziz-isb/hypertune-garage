import React from 'react';
import { PageId } from '../types';
import { getServiceBySlug, servicesData } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  MapPin,
  Tag,
  Award
} from 'lucide-react';

interface ServiceDetailProps {
  slug?: string;
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailProps> = ({
  slug,
  onNavigate,
  onOpenBooking,
}) => {
  const service = getServiceBySlug(slug);

  // Filter 3 related services for internal linking
  const relatedServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  // Generate JSON-LD Schema (LocalBusiness + Service + Breadcrumb)
  const serviceUrl = `https://hypertunegarage.pk/services/${service.slug}`;
  const customSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://hypertunegarage.pk/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://hypertunegarage.pk/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: serviceUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        name: service.title,
        serviceType: service.subServices.join(', '),
        provider: {
          '@type': 'AutoRepair',
          name: 'HyperTune Garage',
          telephone: '+923315008872',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Plot 42, Service Road East, Sector G-8/4',
            addressLocality: 'Islamabad',
            addressRegion: 'ICT',
            postalCode: '44000',
            addressCountry: 'PK',
          },
        },
        areaServed: [
          { '@type': 'City', name: 'Islamabad' },
          { '@type': 'City', name: 'Rawalpindi' },
        ],
        description: service.shortDesc,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'PKR',
          price: service.priceRange,
        },
      },
    ],
  };

  return (
    <div className="pt-32 md:pt-36 pb-16 space-y-12">
      {/* SEO Head component */}
      <SEOHead
        title={service.seo.seoTitle}
        description={service.seo.metaDescription}
        keywords={service.seo.targetKeywords?.join(', ')}
        canonicalUrl={serviceUrl}
        ogImage={service.image}
        schema={customSchema}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-slate-800">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-cyan-400 transition-colors font-semibold"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-cyan-400 transition-colors font-semibold"
            >
              Services
            </button>
            <span>/</span>
            <span className="text-cyan-400 font-bold">{service.title}</span>
          </nav>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0b121e] border border-slate-800 text-slate-300 hover:text-white font-bold text-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>View All 13 Service Categories</span>
          </button>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-cyan-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Certified Service • Written Guarantee • Islamabad & Rawalpindi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {service.seo.h1Heading || service.title}
          </h1>

          <div className="p-4 bg-cyan-950/20 border border-cyan-500/20 rounded-2xl">
            <p className="text-cyan-200 text-sm font-semibold leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Sub-services & Price Table */}
          <div className="space-y-3 bg-[#0b121e] border border-cyan-500/30 rounded-2xl p-5 shadow-xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-cyan-400" />
                <span>Service & Sub-Service Price Breakdown:</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">Estimated Price (PKR)</span>
            </h2>
            <div className="divide-y divide-slate-800/80">
              {service.subServicePrices ? (
                service.subServicePrices.map((sub, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between text-xs gap-3">
                    <div className="flex items-center gap-2 text-slate-200 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{sub.name}</span>
                    </div>
                    <span className="font-extrabold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 rounded-lg text-xs shrink-0">
                      {sub.price}
                    </span>
                  </div>
                ))
              ) : (
                service.subServices.map((sub, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between text-xs gap-3">
                    <div className="flex items-center gap-2 text-slate-200 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{sub}</span>
                    </div>
                    <span className="font-extrabold text-cyan-400">{service.priceRange}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Quick Specs Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 bg-[#0b121e] border border-slate-800 rounded-2xl">
              <span className="text-[11px] text-slate-400 block font-semibold">Estimated Investment</span>
              <strong className="text-sm font-black text-cyan-400">{service.priceRange}</strong>
            </div>
            <div className="p-3.5 bg-[#0b121e] border border-slate-800 rounded-2xl">
              <span className="text-[11px] text-slate-400 block font-semibold">Turnaround Time</span>
              <strong className="text-sm font-black text-white">{service.estimatedTime}</strong>
            </div>
            <div className="p-3.5 bg-[#0b121e] border border-slate-800 rounded-2xl col-span-2 sm:col-span-1">
              <span className="text-[11px] text-slate-400 block font-semibold">Service Warranty</span>
              <strong className="text-sm font-black text-cyan-400">12 Months Written</strong>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={() => onOpenBooking(service.id)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/30 flex items-center gap-2 active:scale-95 transition-all"
            >
              <Wrench className="w-5 h-5 text-slate-950" />
              <span>Book Appointment For This Service</span>
            </button>
            <a
              href={`https://wa.me/923330177717?text=${encodeURIComponent(`Hi HyperTune Garage, I want to inquire about ${service.title} (${service.subServices.join(', ')}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center gap-2 active:scale-95 transition-all shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Inquire</span>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group">
            <img
              src={service.image}
              alt={`${service.title} - HyperTune Garage Islamabad & Rawalpindi`}
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs space-y-1">
              <span className="text-cyan-400 font-extrabold uppercase tracking-wide flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Available at Both Branches
              </span>
              <p className="text-slate-300 font-semibold">
                Sector G-8/4 Islamabad & Rawalpindi Saddar / I-9 Hub
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms / Diagnostic Flags */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest">
            <AlertTriangle className="w-4 h-4 text-cyan-400" />
            <span>Symptoms & Diagnostic Flags</span>
          </div>
          <h2 className="text-2xl font-black text-white">
            When Does Your Vehicle Need {service.title}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.symptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#070c14] border border-slate-800 text-xs font-bold text-slate-200 flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-extrabold">
                  !
                </span>
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Benefits & Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Key Engineering Benefits */}
        <div className="lg:col-span-6 bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span>Key Engineering Benefits</span>
          </h2>
          <ul className="space-y-3">
            {service.keyBenefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose HyperTune Garage */}
        <div className="lg:col-span-6 bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Why Choose HyperTune Garage</span>
          </h2>
          <ul className="space-y-3">
            {service.whyChooseUs.map((reason, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-extrabold flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                  ✓
                </span>
                <span className="font-semibold">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process & Workflow Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest">
            <Wrench className="w-4 h-4 text-cyan-400" />
            <span>Service Workflow</span>
          </div>
          <h2 className="text-2xl font-black text-white">
            Repair & Execution Process for {service.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {service.processSteps.map((step, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#070c14] border border-slate-800 space-y-3 relative group hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-cyan-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md shadow-cyan-500/20">
                    {i + 1}
                  </span>
                  <span className="text-[10px] text-slate-500 font-extrabold uppercase">
                    Step 0{i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Keywords & SEO Paragraph Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="p-6 md:p-8 bg-[#070c14] border border-cyan-500/20 rounded-3xl space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
            <Tag className="w-4 h-4 text-cyan-400" />
            <span>Target Keywords & SEO Coverage (Islamabad & Rawalpindi)</span>
          </div>

          {service.seo.keywordParagraph && (
            <div className="bg-[#0b121e] p-5 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">SEO Overview & Key Services Paragraph</h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                {service.seo.keywordParagraph}
              </p>
            </div>
          )}

          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Primary Indexed Keywords:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {service.seo.targetKeywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#0b121e] border border-slate-800 text-[11px] font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {service.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
              Expert Answers
            </span>
            <h2 className="text-2xl font-black text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-[#0b121e] border border-slate-800 rounded-2xl p-5 space-y-2">
                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Internal Links to Related Services */}
      <section className="max-w-7xl mx-auto px-4 space-y-6 pt-4 border-t border-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
              Explore More
            </span>
            <h2 className="text-xl font-black text-white">Related Automotive Services</h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <div
              key={rel.id}
              onClick={() => onNavigate('service-detail', rel.slug)}
              className="p-5 rounded-2xl bg-[#0b121e] border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer group space-y-3"
            >
              <div className="h-40 rounded-xl overflow-hidden relative">
                <img
                  src={rel.image}
                  alt={`${rel.title} - HyperTune Garage`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-transparent to-transparent" />
              </div>
              <h3 className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                {rel.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2">{rel.shortDesc}</p>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-cyan-400">
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
