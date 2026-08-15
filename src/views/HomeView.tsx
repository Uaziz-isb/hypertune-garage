import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';
import { reviewsData } from '../data/reviewsData';
import { images } from '../data/images';
import { CostEstimator } from '../components/CostEstimator';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GoogleReviewsWidget } from '../components/GoogleReviewsWidget';
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
  ChevronDown,
  ArrowRight,
  Bot,
  Zap,
  Cpu,
  Sparkles,
  Disc,
  Activity,
  Wind,
  Video,
  Settings,
  Shield,
  ThumbsUp,
  HelpCircle,
  ExternalLink,
  Navigation,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

const heroSlides = [
  {
    image: images.ppfHeroBanner,
    title: "HyperTune Garage Precision PPF Studio",
    tagline: "Ultra-Clear Self-Healing TPU • 10-Year Yellowing & Scratch Defense",
    badge: "HyperTune Garage Paint Protection",
  },
  {
    image: images.bannerPpf,
    title: "HyperTune Garage Dust-Free PPF Wrap Bay",
    tagline: "Hydrophobic Glass Gloss • Computerized CAD Pre-Cut Film Installation",
    badge: "HyperTune Garage Clean Room",
  },
  {
    image: images.ppfFortunerStudio,
    title: "HyperTune Garage SUV & Sedan Armor Center",
    tagline: "Dust-Free Studio Wrapping • High-Impact Gravel & Stone Chip Protection",
    badge: "HyperTune Garage Vehicle Armor",
  },
  {
    image: images.bannerDyno,
    title: "HyperTune Garage Dyno & ECU Remap Laboratory",
    tagline: "Live Sensor Telemetry • Custom Stage 1/2 Performance ECU Calibration",
    badge: "HyperTune Garage ECU & Tuning Lab",
  },
  {
    image: images.ppfSedanStudio,
    title: "HyperTune Garage Hydrophobic Ceramic Shielding",
    tagline: "9H Nano-Ceramic Barrier • Paint Correction & Mirror Gloss Finish",
    badge: "HyperTune Garage Ceramic Studio",
  },
  {
    image: images.bannerEngine,
    title: "HyperTune Garage Master Engine Rebuild Lab",
    tagline: "0.001mm Tolerance Measuring • Dust-Free Overhaul & Gearbox Restorations",
    badge: "HyperTune Garage Engine Lab",
  },
  {
    image: images.heroBanner,
    title: "HyperTune Garage Workshop & Service Bay",
    tagline: "Precision Maintenance • 3D Laser Alignment & Diagnostics",
    badge: "HyperTune Garage Islamabad & Rawalpindi",
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
      <section className="relative min-h-[85vh] flex items-center pt-32 md:pt-36 pb-16 px-4 bg-slate-950 overflow-hidden">
        {/* Background Image Carousel with Vignette */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <img
              key={slide.badge + idx}
              src={slide.image}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-105 ${
                idx === currentSlide ? 'opacity-40 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-cyan-400 font-bold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Pakistan’s Premier PPF & Precision Automotive Workshop</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Paint Protection Film (PPF) & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Detailing Studio</span>
            </h1>

            {/* Subhead */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Self-healing Paint Protection Film (PPF), Ceramic Coating, and mechanical repairs for Pakistan’s famous vehicle brands (Honda, Nissan, Changan, MG, Toyota, Suzuki, Hyundai, Kia, Haval) in <strong>Islamabad Police Foundation Hub</strong> & <strong>Rawalpindi I-9</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/30 flex items-center gap-2.5 active:scale-95 transition-all"
              >
                <Wrench className="w-5 h-5 text-slate-950" />
                <span>Book Service Appointment</span>
              </button>

              <a
                href="https://wa.me/923315008872?text=Hi%20HyperTune%20Garage%2C%20I%20want%20to%20get%20an%20instant%20PPF%20and%20repair%20estimate."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center gap-2 shadow-xl shadow-emerald-600/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp Estimate</span>
              </a>
            </div>

            {/* Micro Trust Specs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Self-Healing TPU Film (10-Yr Warranty)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>100% Dust-Free Studio Installation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>4.9 Star Rating (340+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive PPF Studio Carousel */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 group">
              {/* Animated Slide Container */}
              <div className="relative h-[360px] sm:h-[430px] w-full bg-slate-950">
                {heroSlides.map((slide, idx) => (
                  <img
                    key={slide.title + idx}
                    src={slide.image}
                    alt={slide.title}
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      idx === currentSlide
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080e] via-transparent to-black/30 opacity-90" />
              </div>

              {/* Slider Controls (Prev / Next Arrows & Timer Bar) */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-700 text-white flex items-center justify-center opacity-75 hover:opacity-100 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all z-20"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-700 text-white flex items-center justify-center opacity-75 hover:opacity-100 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all z-20"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Floating Slide Details Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 space-y-3 shadow-2xl z-20">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-sm leading-tight">{activeHero.title}</h4>
                      <p className="text-slate-300 text-xs mt-0.5">{activeHero.tagline}</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex bg-cyan-500 text-slate-950 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-lg shrink-0">
                    {activeHero.badge}
                  </span>
                </div>

                {/* Dots & Auto-rotation Progress Bar */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                  <div className="flex items-center gap-1.5">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentSlide ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-cyan-400 font-extrabold tracking-wider uppercase flex items-center gap-1">
                    <Clock className="w-3 h-3 animate-spin" style={{ animationDuration: '5s' }} />
                    Auto-Rotating (5s)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HYPERTUNE GARAGE */}
      <section className="max-w-7xl mx-auto px-4 space-y-10">
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
              desc: 'Equipped with BMW ISTA+, Mercedes Xentry, Audi ODIS, and Porsche PIWIS III software scanners.',
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
              title: 'State-of-the-Art Dyno & Cleaning',
              desc: 'Featuring a 4WD Mustang Dyno tuning cell, 3D laser wheel alignment rigs, and ultrasonic engine cleaners.',
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
      <section className="max-w-7xl mx-auto px-4 space-y-8">
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
              { id: 'all', label: 'All 13 Services' },
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
              { id: 'hybrid', label: 'Hybrid & EV' },
              { id: 'tuning', label: 'ECU Tuning' },
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
                    referrerPolicy="no-referrer"
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
                >
                  <Wrench className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE COST ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4">
        <CostEstimator onBookService={(serviceId) => onOpenBooking(serviceId)} />
      </section>

      {/* BEFORE & AFTER REPAIR RESTORATIONS */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Craftsmanship Proof
          </span>
          <h2 className="text-3xl font-black text-white">Real Restoration & Tuning Work</h2>
          <p className="text-slate-400 text-sm">
            Drag the interactive slider to compare original vehicle condition with HyperTune Garage precision results.
          </p>
        </div>

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
      </section>

      {/* CUSTOMER REVIEWS & GOOGLE RATINGS + HYPERTUNE PERFORMANCE METRICS */}
      <section className="bg-[#070c14] border-y border-slate-800/80 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* HyperTune Performance Metrics */}
          <div className="bg-[#0b121e] border border-cyan-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
                  Proven Operations & Track Record
                </span>
                <h3 className="text-2xl font-black text-white">HyperTune Performance Metrics</h3>
                <p className="text-xs text-slate-400">Islamabad Police Foundation Hub & Rawalpindi I-9 Workshop Facilities</p>
              </div>
              <div className="flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1.5 rounded-full text-cyan-400 font-bold text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span>Live Metrics</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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

            <div className="bg-[#070c14] p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs gap-2">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-300 font-medium">Live HD Video Inspection Proof</span>
              </div>
              <span className="text-cyan-400 font-bold">Standard on All Repairs</span>
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

            <GoogleReviewsWidget compact={true} limit={3} showTitle={false} />
          </div>

        </div>
      </section>

      {/* 4-STEP SERVICE PROCESS */}
      <section className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Transparent Workflow
          </span>
          <h2 className="text-3xl font-black text-white">Our 4-Step Repair & Service Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Book Appointment', desc: 'Reserve online or via WhatsApp. Flatbed towing pickup available across Islamabad & Rawalpindi.' },
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
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Visit Our Workshops
          </span>
          <h2 className="text-3xl font-black text-white">Islamabad & Rawalpindi Branches</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locationsData.map((loc) => (
            <div key={loc.id} className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 sm:grid-cols-12">
              <div className="sm:col-span-5 h-56 sm:h-auto relative">
                <img
                  src={loc.image}
                  alt={loc.branchName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#05080e]/40" />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs px-2.5 py-1 rounded-lg">
                  {loc.city} Hub
                </span>
              </div>

              <div className="sm:col-span-7 p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-white">{loc.branchName}</h3>
                  <p className="text-slate-400 text-xs flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </p>
                  <p className="text-slate-400 text-xs flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{loc.hours.weekdays}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <a
                    href="tel:+923330177717"
                    className="flex-1 py-2.5 rounded-xl bg-[#070c14] hover:bg-slate-800 text-white font-bold text-xs border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>0333-0177717</span>
                  </a>
                  <a
                    href={loc.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs transition-colors flex items-center gap-1 shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5 text-slate-950" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOOGLE MAP LOCATION AT BOTTOM OF HOME PAGE */}
      <section className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="space-y-2">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Workshop Navigation & Pin
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Find HyperTune Garage on Google Maps</h2>
            <p className="text-xs text-slate-400 max-w-xl">
              Shop 1-G, Ground Floor, Central Ave, near Attock Petrol Pump, Block E Police Foundation, Islamabad, 44000, Pakistan.
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=HyperTune+Garage&query_place_id=ChIJg2296t7t3z8RabZyjT3Zsg8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 shrink-0 transition-all active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-[400px] w-full relative bg-[#070c14]">
          <iframe
            title="HyperTune Garage Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.215!2d73.1345365!3d33.5622113!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfede5eabd2d83%3A0xf3b2d99386f26b69!2sHyperTune%20Garage!5e1!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk&maptype=satellite"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter brightness-90 contrast-105"
          />
        </div>
      </section>
    </div>
  );
};
