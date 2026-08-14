import React from 'react';
import { PageId } from '../types';
import { images } from '../data/images';
import { 
  Award, 
  ShieldCheck, 
  Wrench, 
  Settings, 
  Cpu, 
  Gauge, 
  Wind, 
  Zap, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  DollarSign, 
  Users, 
  MapPin, 
  HeartHandshake,
  SearchCheck,
  Flame,
  ArrowRight,
  Shield,
  Activity,
  Car
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-24 pb-16 space-y-16">
      {/* Hero Banner Section */}
      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 text-center relative z-10">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Performance Automotive Workshop in Islamabad
          </span>
          <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">HyperTune Garage</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            HyperTune Garage Islamabad is a performance-focused automotive workshop specializing in vehicle tuning, advanced diagnostics, and high-quality mechanical services. Known for precision, reliability, and expert craftsmanship, HyperTune delivers customized solutions to enhance engine performance, efficiency, and overall driving experience for car enthusiasts and everyday drivers alike across Islamabad and Rawalpindi.
          </p>
        </div>
      </section>

      {/* Origin, Story & Workshop Cleanroom */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
            <Award className="w-4 h-4 text-cyan-400" />
            Our Precision & Engineering Craftsmanship
          </span>
          <h2 className="text-3xl font-black text-white">
            Redefining Car Maintenance & Tuning in Pakistan
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Founded with a passion for automotive perfection, HyperTune Garage bridges the gap between factory dealer standards and high-performance custom tuning. We combine years of hands-on experience with continuous training on the latest automotive technology, computer diagnostics, and engine remapping techniques.
          </p>
          <p className="text-slate-400 text-xs leading-relaxed">
            Whether you are maintaining your daily commuter or upgrading a turbocharged track build, our workshop features official dealer-level diagnostic interfaces, dust-free paint protection cleanrooms, state-of-the-art lifts, and specialized tuning rigs to ensure your vehicle performs at its absolute peak.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#0b121e] border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-cyan-400 block">15,000+</span>
              <span className="text-xs text-slate-300 font-medium">Vehicles Serviced & Tuned</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#0b121e] border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-cyan-400 block">100%</span>
              <span className="text-xs text-slate-300 font-medium">OEM Genuine Parts & Oils</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group">
            <img
              src={images.heroBanner}
              alt="HyperTune Garage Workshop Facilities Islamabad"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-semibold text-cyan-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Islamabad Police Foundation Hub & Workshop Facility
            </div>
          </div>
        </div>
      </section>

      {/* Core Specialized Services */}
      <section className="bg-[#0b121e] border-y border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
              Automotive Expertise
            </span>
            <h2 className="text-3xl font-black text-white">Our Core Services</h2>
            <p className="text-slate-400 text-xs">
              From routine mechanical care to aggressive forced induction power gains, we deliver complete automotive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Paint Protection Film (PPF)',
                desc: 'Self-healing computer pre-cut TPU Paint Protection Film (PPF) engineered to protect your vehicle factory paint against rock chips, scratches, and UV damage.',
                slug: 'paint-protection-film-ppf',
                highlight: true,
              },
              {
                icon: Sparkles,
                title: 'Car Detailing & Ceramic Coating',
                desc: 'Multi-stage paint correction, interior deep steam sanitation, and high-grade 9H hydrophobic ceramic coatings for showroom gloss and protection.',
                slug: 'car-detailing',
                highlight: true,
              },
              {
                icon: Activity,
                title: 'Engine Tuning & ECU Remapping',
                desc: 'Custom Stage 1, Stage 2, and TCU remapping with dyno-proven calibration for enhanced horsepower, torque, and crisp throttle response.',
                slug: 'engine-services',
                highlight: true,
              },
              {
                icon: Cpu,
                title: 'Advanced Diagnostics',
                desc: 'State-of-the-art diagnostic equipment to accurately identify and resolve engine, transmission, and electrical issues before they become costly problems.',
                slug: 'inspection-diagnostics',
              },
              {
                icon: Wrench,
                title: 'General Mechanical Repairs',
                desc: 'From routine engine maintenance to complex mechanical overhauls, our technicians handle everything with the same attention to detail as our performance work.',
                slug: 'maintenance-servicing',
              },
              {
                icon: Gauge,
                title: 'Suspension & Handling Upgrades',
                desc: 'Tailored setups for improved cornering, stability, and ride comfort, whether for daily driving or track use.',
                slug: 'brake-suspension-steering',
              },
              {
                icon: Wind,
                title: 'Exhaust & Intake Systems',
                desc: 'Custom installations designed to boost airflow, aggressive exhaust tone, and overall engine volumetric efficiency.',
                slug: 'engine-services',
              },
              {
                icon: Flame,
                title: 'Turbo & Forced Induction Services',
                desc: 'Installation, tuning, and maintenance of turbocharged and supercharged systems for serious horsepower and torque gains.',
                slug: 'engine-services',
              },
              {
                icon: SearchCheck,
                title: 'Pre-Purchase Inspections',
                desc: 'Thorough multi-point vehicle assessments giving buyers complete confidence and clear reports before making a purchase.',
                slug: 'inspection-diagnostics',
              },
            ].map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div 
                  key={idx} 
                  className={`p-6 rounded-3xl bg-[#070c14] border transition-all duration-300 space-y-4 group flex flex-col justify-between relative ${
                    srv.highlight 
                      ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/40' 
                      : 'border-slate-800/80 hover:border-cyan-500/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      {srv.highlight && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                          ★ Flagship Service
                        </span>
                      )}
                    </div>
                    <h3 className="font-extrabold text-lg text-white group-hover:text-cyan-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate('service-detail', srv.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-2"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose HyperTune Garage */}
      <section className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            The HyperTune Standard
          </span>
          <h2 className="text-3xl font-black text-white">Why Choose HyperTune Garage</h2>
          <p className="text-slate-400 text-xs">
            Built on a reputation across the local automotive community for reliability, craftsmanship, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: 'Expert Technicians',
              desc: 'Our team combines years of hands-on experience with continuous training on the latest automotive technology, computer diagnostics, and tuning techniques.',
            },
            {
              icon: Cpu,
              title: 'Precision Equipment',
              desc: 'We invest in industry-leading diagnostic and tuning tools to ensure every job is executed accurately the first time without guess-work.',
            },
            {
              icon: DollarSign,
              title: 'Transparent Pricing',
              desc: 'No hidden costs — just honest assessments, itemized breakdowns, and fair quotes before any work begins on your vehicle.',
            },
            {
              icon: HeartHandshake,
              title: 'Customer-First Approach',
              desc: 'Whether you are a daily commuter or a dedicated car enthusiast, we tailor our services strictly to your specific performance goals and budget.',
            },
            {
              icon: Award,
              title: 'Trusted in Islamabad & Rawalpindi',
              desc: 'We have built a premier reputation across the local automotive community for unwavering reliability, craftsmanship, and proven results.',
            },
            {
              icon: ShieldCheck,
              title: '100% Genuine Guarantee',
              desc: 'We use high-grade synthetic lubricants, original OEM replacement components, and certified paint protection films with official warranties.',
            },
          ].map((item, i) => {
            const IconC = item.icon;
            return (
              <div key={i} className="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold">
                  <IconC className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-white">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Promise Callout */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#0b121e] via-[#0d1829] to-[#0b121e] border border-cyan-500/30 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/10 blur-2xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            Our Brand Guarantee
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-white max-w-2xl mx-auto">
            "We treat every vehicle like it’s our own."
          </h2>

          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Combining technical expertise with genuine passion for cars. Whether you’re chasing extra horsepower, smoother performance, or simply want your vehicle running at its best, HyperTune Garage is here to make it happen.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/30 transition-all hover:scale-105"
            >
              Book Service Appointment
            </button>
            <a
              href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage,%20I%20want%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

