import React, { useState, useEffect, lazy, Suspense } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';
import { images } from '../data/images';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';

// Dynamic Lazy Imports for Below-the-Fold Heavy Widgets (Mobile Speed Optimization)
const CostEstimator = lazy(() => import('../components/CostEstimator').then((m) => ({ default: m.CostEstimator })));
const BeforeAfterSlider = lazy(() => import('../components/BeforeAfterSlider').then((m) => ({ default: m.BeforeAfterSlider })));
const GoogleReviewsWidget = lazy(() => import('../components/GoogleReviewsWidget').then((m) => ({ default: m.GoogleReviewsWidget })));
import {
  Wrench,
  ShieldCheck,
  Award,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Zap,
  Cpu,
  Sparkles,
  Video,
  Settings,
  Shield,
  ExternalLink,
  Navigation,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

const heroSlides = [
  {
    image: images.heroPorscheStudio,
    title: "HyperTune Garage Precision PPF Studio",
    tagline: "Ultra-Clear Self-Healing TPU • 10-Year Yellowing & Scratch Defense",
    badge: "HyperTune Garage Paint Protection",
  },
  {
    image: images.heroFortuner,
    title: "HyperTune Garage SUV & Sedan Armor Center",
    tagline: "Dust-Free Studio Wrapping • High-Impact Gravel & Stone Chip Protection",
    badge: "HyperTune Garage Vehicle Armor",
  },
  {
    image: images.heroEcuTuning,
    title: "HyperTune Garage Master OEM Diagnostics & Electrical Lab",
    tagline: "Live Sensor Telemetry • Computerized OEM Scanner Health Audits",
    badge: "HyperTune Garage Diagnostic Lab",
  },
  {
    image: images.heroG63Ceramic,
    title: "HyperTune Garage Hydrophobic Ceramic Shielding",
    tagline: "9H Nano-Ceramic Barrier • Paint Correction & Mirror Gloss Finish",
    badge: "HyperTune Garage Ceramic Studio",
  },
  {
    image: images.heroEngineOverhaul,
    title: "HyperTune Garage Precision Mechanical & Overhaul Lab",
    tagline: "0.001mm Tolerance Measuring • Dust-Free Overhaul & Transmission Restorations",
    badge: "HyperTune Garage Engine Lab",
  },
];

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const premiumIds = [
    'paint-protection-film-ppf',
    'car-detailing',
    'vehicle-wrap',
    'body-repair-paint',
    'body-modification',
  ];

  const filteredServices = activeCategory === 'premium'
    ? servicesData.filter((s) => premiumIds.includes(s.id))
    : activeCategory === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const activeHero = heroSlides[currentSlide];

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-3 sm:px-4 bg-slate-950 overflow-hidden">
        {/* Atmospheric Workshop Gradient Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#060c16] to-slate-950" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 sm:py-1.5 rounded-full text-cyan-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider max-w-full text-left">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
              <span className="truncate sm:whitespace-normal">Pakistan’s Premier PPF & Precision Automotive Workshop</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1] break-words">
              Paint Protection Film (PPF) & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Detailing Studio</span>
            </h1>

            {/* Subhead */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-2xl">
              Self-healing Paint Protection Film (PPF), Ceramic Coating, and mechanical repairs for Pakistan’s famous vehicle brands (Honda, Nissan, Changan, MG, Toyota, Suzuki, Hyundai, Kia, Haval) in <strong>Islamabad Flagship Hub</strong> & <strong>Rawalpindi</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/30 flex items-center justify-center gap-2.5 active:scale-95 transition-all"
              >
                <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 shrink-0" />
                <span>Book Service Appointment</span>
              </button>

              <a
                href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20want%20to%20get%20an%20instant%20PPF%20and%20repair%20estimate."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Instant WhatsApp Estimate</span>
              </a>
            </div>

            {/* Micro Trust Specs */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Self-Healing TPU (10-Yr Warranty)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Dust-Free Studio Installation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span>4.9 Star Rating (340+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive PPF Studio Carousel */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 group">
              {/* Animated Slide Container */}
              <div className="relative h-[290px] sm:h-[380px] md:h-[430px] w-full bg-slate-950">
                <img
                  key={activeHero.title + currentSlide}
                  src={activeHero.image}
                  alt={activeHero.title}
                  width={640}
                  height={430}
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                  fetchPriority={currentSlide === 0 ? "high" : "auto"}
                  decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = images.islamabadPpfStudio;
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out opacity-100 scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080e] via-transparent to-black/30 opacity-90" />
              </div>

              {/* Slider Controls (Prev / Next Arrows & Timer Bar) */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-950/70 border border-slate-700 text-white flex items-center justify-center opacity-85 hover:opacity-100 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all z-20 active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-950/70 border border-slate-700 text-white flex items-center justify-center opacity-85 hover:opacity-100 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all z-20 active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Floating Slide Details Box */}
              <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 bg-slate-950/92 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800 space-y-2 sm:space-y-3 shadow-2xl z-20">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black shrink-0">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-white font-extrabold text-xs sm:text-sm leading-tight truncate">{activeHero.title}</h4>
                      <p className="text-slate-300 text-[11px] sm:text-xs mt-0.5 line-clamp-1">{activeHero.tagline}</p>
                    </div>
                  </div>
                  <span className="hidden xs:inline-flex bg-cyan-500 text-slate-950 font-extrabold text-[9px] sm:text-[10px] uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shrink-0">
                    {activeHero.badge}
                  </span>
                </div>

                {/* Dots & Auto-rotation Progress Bar */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[10px]">
                  <div className="flex items-center gap-1.5">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 sm:h-2 rounded-full transition-all ${
                          idx === currentSlide ? 'w-5 sm:w-6 bg-cyan-400' : 'w-1.5 sm:w-2 bg-slate-700 hover:bg-slate-500'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-cyan-400 font-extrabold tracking-wider uppercase flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-spin" style={{ animationDuration: '5s' }} />
                    Auto-Rotating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HYPERTUNE GARAGE */}
      <section className="max-w-7xl mx-auto px-4 space-y-10 cv-auto">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl font-black text-white">Why Vehicle Owners Trust HyperTune Garage</h2>
          <p className="text-slate-400 text-sm">
            We bridge the gap between expensive dealership overhead and substandard roadside mechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Official Dealer-Level Diagnostics',
              desc: 'Equipped with Toyota Techstream, Honda HDS, Suzuki SDT-II, Hyundai GDS, Kia KDS, JLR Pathfinder, and OEM diagnostic scanners.',
              icon: Cpu,
            },
            {
              title: '100% Genuine Barcode Sourced Parts',
              desc: 'Direct import of Bosch, Lemförder, Sachs, Bilstein, and OEM manufacturer parts with full trace safety.',
              icon: ShieldCheck,
            },
            {
              title: '12-Month / 15,000 km Warranty',
              desc: 'Every mechanical overhaul, suspension component, and electrical module comes with our written guarantee.',
              icon: Shield,
            },
            {
              title: 'Master Certified Engineers',
              desc: 'Our technical team includes mechanical engineers and ECU software specialists trained on European standards.',
              icon: Settings,
            },
            {
              title: 'Live Video Inspection Reports',
              desc: 'Never pay for unverified work. Receive direct HD video proof of component wear before repair authorization.',
              icon: Video,
            },
            {
              title: 'State-of-the-Art Diagnostics & Alignment',
              desc: 'Featuring dealership-grade OEM diagnostic scanners, 3D laser wheel alignment rigs, and ultrasonic cleaners.',
              icon: Zap,
            },
          ].map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group space-y-3 shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 space-y-8 cv-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Automotive Engineering & Studio Offerings
            </span>
            <h2 className="text-3xl font-black text-white">All Main Services</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'premium', label: '★ 5 Premium Services' },
              { id: 'protection', label: 'PPF' },
              { id: 'detailing', label: 'Detailing' },
              { id: 'engine', label: 'Engine' },
              { id: 'diagnostics', label: 'Diagnostics' },
              { id: 'maintenance', label: 'Maintenance' },
              { id: 'suspension', label: 'Brakes & Suspension' },
              { id: 'transmission', label: 'Transmission' },
              { id: 'wrap', label: 'Vehicle Wrap' },
              { id: 'body', label: 'Body & Paint' },
              { id: 'modification', label: 'Body Kits' },
              { id: 'electrical', label: 'AC & Electrical' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md shadow-cyan-500/30'
                    : 'bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={250}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = images.islamabadPpfStudio;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-[#05080e]/90 text-cyan-400 border border-cyan-500/30 font-bold text-[10px] uppercase px-2.5 py-1 rounded-lg">
                    {service.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Est Range:</span>
                    <span className="font-extrabold text-cyan-400">{service.priceRange.split('-')[0]}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onNavigate('service-detail', service.slug)}
                  className="flex-1 py-2.5 rounded-xl bg-[#070c14] hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800 transition-colors text-center"
                >
                  Read Technical Specs
                </button>
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold transition-colors"
                  title="Book Service"
                  aria-label={`Book ${service.title}`}
                >
                  <Wrench className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE COST ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 cv-auto">
        <Suspense fallback={<div className="h-96 rounded-3xl bg-[#0b121e] animate-pulse border border-slate-800" />}>
          <CostEstimator onBookService={(serviceId) => onOpenBooking(serviceId)} />
        </Suspense>
      </section>

      {/* BEFORE & AFTER REPAIR RESTORATIONS */}
      <section className="max-w-7xl mx-auto px-4 space-y-8 cv-auto">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Craftsmanship Proof
          </span>
          <h2 className="text-3xl font-black text-white">Real Restoration & Tuning Work</h2>
          <p className="text-slate-400 text-sm">
            Drag the interactive slider to compare original vehicle condition with HyperTune Garage precision results.
          </p>
        </div>

        <Suspense fallback={<div className="h-96 rounded-3xl bg-[#0b121e] animate-pulse border border-slate-800" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeforeAfterSlider
              title="Haval H6 GT Full Body TPU Paint Protection Film (PPF)"
              beforeImage={images.havalStudioBefore}
              afterImage={images.havalStudioAfter}
              topBeforeTag="Before PPF"
              topAfterTag="After PPF"
              beforeLabel="Factory Maroon Finish"
              afterLabel="Self-Healing Mirror Armor"
            />

            <BeforeAfterSlider
              title="Toyota Land Cruiser TPU PPF & Ceramic Coating"
              beforeImage={images.toyotaStudioBefore}
              afterImage={images.toyotaStudioAfter}
              topBeforeTag="Before PPF"
              topAfterTag="After PPF"
              beforeLabel="Factory Metallic Grey"
              afterLabel="9H Hydrophobic Mirror Gloss"
            />
          </div>
        </Suspense>
      </section>

      {/* CUSTOMER REVIEWS & GOOGLE RATINGS + HYPERTUNE PERFORMANCE METRICS */}
      <section className="bg-[#070c14] border-y border-slate-800/80 py-16 px-4 cv-auto">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* HyperTune Performance Metrics */}
          <div className="bg-[#0b121e] border border-cyan-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
                Proven Operations & Track Record
              </span>
              <h3 className="text-2xl font-black text-white mt-1">HyperTune Performance Metrics</h3>
              <p className="text-xs text-cyan-400 font-semibold mt-0.5">HyperTune Garage - Islamabad Flagship Hub</p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              HyperTune Garage operates on rigorous engineering standards, pairing dealer-level diagnostic protocols with precision craftsmanship — and every service is measured, not guessed. Our diagnostic bays run dealer-grade German scan tools capable of reading OEM fault codes down to the millivolt, giving us a data-backed baseline before a single wrench turns. From computerized engine diagnostics and precision AC & auto electrical repair to blade-free Paint Protection Film (PPF) application in a certified dust-free cleanroom, our benchmark metrics reflect an unwavering commitment to automotive excellence. Combined with fully transparent, itemized pricing on every invoice, these benchmarks aren't marketing claims; they're the operating standard behind every vehicle that leaves our shop, engineered for measurable, long-term performance and superior longevity.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#070c14] border border-slate-800">
                <span className="text-3xl font-black text-cyan-400 block">15,000+</span>
                <span className="text-xs font-semibold text-slate-300">Vehicles Serviced</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#070c14] border border-slate-800">
                <span className="text-3xl font-black text-white block">99.4%</span>
                <span className="text-xs font-semibold text-slate-300">Client Satisfaction</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#070c14] border border-slate-800">
                <span className="text-3xl font-black text-white block">15+</span>
                <span className="text-xs font-semibold text-slate-300">Certified Master Techs</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#070c14] border border-slate-800">
                <span className="text-3xl font-black text-cyan-400 block">2</span>
                <span className="text-xs font-semibold text-slate-300">Mega Workshop Hubs</span>
              </div>
            </div>
          </div>

          {/* Live Google Business Profile Auto-Updating Reviews */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
                  Live Customer Ratings
                </span>
                <h2 className="text-3xl font-black text-white">Google Business Reviews (4.9 / 5.0)</h2>
              </div>
              <button
                onClick={() => onNavigate('testimonials')}
                className="px-4 py-2 rounded-xl bg-[#0b121e] border border-slate-800 text-slate-300 font-bold text-xs hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Read All 348+ Reviews</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>

            <Suspense fallback={<div className="h-64 rounded-3xl bg-[#0b121e] animate-pulse border border-slate-800" />}>
              <GoogleReviewsWidget compact={true} limit={3} showTitle={false} />
            </Suspense>
          </div>

        </div>
      </section>

      {/* 4-STEP SERVICE PROCESS */}
      <section className="max-w-7xl mx-auto px-4 space-y-10 cv-auto">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Transparent Workflow
          </span>
          <h2 className="text-3xl font-black text-white">Our 4-Step Repair & Service Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Book Appointment', desc: 'Reserve online or via WhatsApp. Flexible appointment scheduling across Islamabad & Rawalpindi.' },
            { step: '02', title: 'Computer Diagnostic', desc: 'Our master technicians execute an OEM scanner health audit and create an itemized estimate.' },
            { step: '03', title: 'Video Approval', desc: 'Receive HD video proof of worn parts. Work only starts upon your explicit digital authorization.' },
            { step: '04', title: 'Road Test & Warranty', desc: 'High-speed highway verification test, final cleaning, and delivery with 12-Month Written Warranty.' },
          ].map((s) => (
            <div key={s.step} className="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3 relative shadow-lg">
              <span className="text-4xl font-black text-cyan-500/30 block">{s.step}</span>
              <h3 className="text-base font-bold text-white">{s.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSHOP LOCATIONS */}
      <section className="max-w-7xl mx-auto px-4 space-y-8 cv-auto">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Visit Our Workshops
          </span>
          <h2 className="text-3xl font-black text-white">Islamabad & Rawalpindi Locations</h2>
          <p className="text-slate-400 text-xs">
            Experience dealer-grade automotive care at our active Islamabad Flagship Hub and upcoming Rawalpindi Hub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locationsData.map((loc) => (
            <div key={loc.id} className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 sm:grid-cols-12">
              <div className="sm:col-span-5 h-56 sm:h-auto relative">
                <img
                  src={loc.image}
                  alt={loc.branchName}
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = loc.isOperational ? images.workshopIslamabad : images.workshopRawalpindi;
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#05080e]/40" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs px-2.5 py-1 rounded-lg">
                    {loc.city} Hub
                  </span>
                  {loc.isOperational ? (
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold text-[10px] px-2 py-0.5 rounded-md">
                      Operational
                    </span>
                  ) : (
                    <span className="bg-amber-500 text-slate-950 font-black text-[10px] uppercase px-2 py-0.5 rounded-md">
                      Opening Soon
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-7 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-white">{loc.branchName}</h3>
                  {loc.isOperational ? (
                    <>
                      {loc.address && (
                        <p className="text-slate-300 text-xs flex items-start gap-1.5 leading-relaxed font-medium">
                          <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{loc.address}</span>
                        </p>
                      )}
                      {loc.hours && (
                        <p className="text-slate-400 text-xs flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                          <span>{loc.hours.weekdays}</span>
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-200 text-xs leading-relaxed italic">
                      &ldquo;{loc.statusNotice || 'Opening soon — our new branch is currently under development. Stay tuned for the official opening announcement.'}&rdquo;
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {loc.isOperational ? (
                    <>
                      <a
                        href="tel:+923330177717"
                        className="flex-1 py-2.5 px-3 rounded-xl bg-[#070c14] hover:bg-slate-800 text-white font-bold text-xs border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-cyan-400" />
                        <span>0333-0177717</span>
                      </a>
                      {loc.googleMapsDirectionsUrl && (
                        <a
                          href={loc.googleMapsDirectionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs transition-colors flex items-center gap-1 shrink-0"
                        >
                          <Navigation className="w-3.5 h-3.5 text-slate-950" />
                          <span>Directions</span>
                        </a>
                      )}
                      <button
                        onClick={onOpenBooking}
                        className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold text-xs transition-colors shrink-0"
                      >
                        Book Now
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => onNavigate('location-detail', loc.slug)}
                      className="w-full py-2.5 rounded-xl bg-[#070c14] hover:bg-slate-800 text-white font-bold text-xs border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Branch Info & Development Status</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE MAP LOCATION AT BOTTOM OF HOME PAGE */}
      <section className="max-w-7xl mx-auto px-4 space-y-6 cv-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="space-y-2">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Workshop Navigation & Pin
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Find HyperTune Garage on Google Maps</h2>
            <p className="text-xs text-slate-400 max-w-xl">
              Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan.
            </p>
          </div>
          <a
            href="https://www.google.com/maps?cid=17560337124718439273&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=PK&source=embed"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 shrink-0 transition-all active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        <GoogleMapEmbed
          title="HyperTune Garage Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.215!2d73.1345365!3d33.5622113!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfede5eabd2d83%3A0xf3b2d99386f26b69!2sHyperTune%20Garage!5e1!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk&maptype=satellite"
          containerHeight="h-[400px]"
          address="Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000"
        />
      </section>
    </div>
  );
};
