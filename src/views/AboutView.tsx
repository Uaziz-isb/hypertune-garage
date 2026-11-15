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
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Sparkles,
  Users,
  MapPin,
  ArrowRight,
  Shield,
  Car,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
  Video
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

const CAPABILITIES = [
  {
    icon: Cpu,
    title: '1. Automotive Diagnostics and Inspection',
    desc: 'Full-system ECU scans across engine, transmission, ABS, airbag, and hybrid battery modules, plus 200-point pre-purchase inspections with paint micron audits and cylinder scope checks.',
    slug: 'inspection-diagnostics',
    cta: 'Diagnostics & Inspection',
  },
  {
    icon: Wrench,
    title: '2. Engine Repair and Overhaul',
    desc: 'Cylinder head repairs, timing chain replacements, cooling flushes, ultrasonic fuel injector cleaning, and complete engine overhauls built to 0.001 mm tolerances with OEM parts.',
    slug: 'engine-services',
    cta: 'Engine Services',
    extra: { label: 'Cooling, Fuel & Exhaust', slug: 'cooling-fuel-exhaust' },
    highlight: true,
  },
  {
    icon: Settings,
    title: '3. Transmission and Drivetrain Services',
    desc: 'Automatic, CVT, manual, and dual-clutch (DCT/DSG) repairs covering TCU scanning, pressurized fluid exchanges, valve body solenoids, clutch adaptation, and 4x4 differentials.',
    slug: 'transmission-drivetrain',
    cta: 'Transmission Services',
  },
  {
    icon: Wrench,
    title: '4. Preventive Maintenance and Mechanical Repair',
    desc: 'Scheduled synthetic oil changes (0W-20, 5W-30, 5W-40), genuine OEM oil, air, cabin, and fuel filter replacements, spark plug service, and a 50-point vehicle safety check.',
    slug: 'maintenance-servicing',
    cta: 'Maintenance & Servicing',
  },
  {
    icon: Gauge,
    title: '5. Brake, Suspension and Steering Services',
    desc: 'Low-dust ceramic brake pads, rotor resurfacing, shock and suspension bushing replacement, air-suspension repair, steering rack service, and Italian 3D laser wheel alignment.',
    slug: 'brake-suspension-steering',
    cta: 'Brake & Suspension',
  },
  {
    icon: Wind,
    title: '6. Automotive AC and Electrical Diagnostics',
    desc: 'Automated R134a and R1234yf servicing, dry nitrogen leak testing, compressor rebuilds, parasitic battery drain tracing, oscilloscope testing, and ECU/BCM coding.',
    slug: 'car-ac-repair',
    cta: 'AC & Electrical',
  },
  {
    icon: Shield,
    title: '7. Paint Protection Film (PPF)',
    desc: 'Blade-free installation of self-healing aliphatic TPU film using computerized CAD pre-cut templates inside our dust-free cleanroom studio.',
    slug: 'paint-protection-film-ppf',
    cta: 'PPF Cleanroom Studio',
    highlight: true,
  },
  {
    icon: Sparkles,
    title: '8. Ceramic Coating and Detailing',
    desc: 'Micron-measured clear coat polishing removing swirl marks safely, followed by 9H nano-ceramic coating, 140°C interior steam extraction, and leather care.',
    slug: 'car-detailing',
    cta: 'Detailing & 9H Ceramic',
    highlight: true,
  },
  {
    icon: Car,
    title: '9. Vinyl Wrapping and Vehicle Protection',
    desc: 'Reversible cast vinyl color-change wraps in matte, satin, gloss, and carbon fiber finishes with trim disassembly, edge tucking, and 90°C post-heat curing.',
    slug: 'vehicle-wrap',
    cta: 'Vehicle Wrapping',
  },
  {
    icon: Award,
    title: '10. Body Repair, Paint and Restoration',
    desc: 'Paintless Dent Repair (PDR), collision frame alignment, spectrophotometer paint matching, paint booth refinishing, and custom body kit fitment.',
    slug: 'body-repair-paint',
    cta: 'Body Repair & Paint',
    extra: { label: 'Body Modification', slug: 'body-modification' },
  },
];

const FACILITY_ITEMS = [
  ['Vehicle Inspections & Pre-Purchase Diagnostics:', 'Comprehensive vehicle health checks, clear diagnostic findings, and itemized repair recommendations to help customers make informed buying and maintenance decisions.'],
  ['Catalytic Cleaning:', 'Specialized cleaning removes carbon deposits and contaminants to support exhaust flow and engine efficiency.'],
  ['PPF & Ceramic Cleanroom:', 'Computerized CAD plotters cut TPU patterns off the vehicle—keeping blades off clear coat—paired with infrared curing lamps.'],
  ['Vehicle Tuning Service:', 'Precision ECU diagnostics and calibration optimize engine response, drivability, and vehicle performance.'],
];

const PROCESS_ITEMS = [
  ['Measurement Before Repair:', 'Technicians perform ECU fault scans, compression/leak-down tests, dry nitrogen AC pressure tests, or paint-depth micron audits before quoting labor.'],
  ['HD WhatsApp Proof & Itemized Quotes:', 'We send clear photos and teardown videos to your WhatsApp alongside a line-by-line quote for approval prior to work.'],
  ['Barcode-Verified OEM Parts & Fluids:', 'Repairs use genuine OEM spare parts, pure R134a/R1234yf refrigerants, and imported full-synthetic oils matched to factory viscosity.'],
];

const TRUST_PILLARS = [
  {
    icon: Users,
    title: 'Specialist Technicians',
    desc: 'Dedicated mechanics, auto-electricians, transmission specialists, painters, and PPF installers follow documented torque and inspection tolerances.',
  },
  {
    icon: Cpu,
    title: 'Precision Instrumentation',
    desc: 'We verify engine tolerances with 0.001 mm micrometers, paint depth with micron gauges, and electrical circuits with oscilloscopes.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Pricing',
    desc: 'Itemized quotes explain every component and labor step up front—zero hidden fees at vehicle delivery.',
  },
  {
    icon: CheckCircle2,
    title: 'Customer-First Updates',
    desc: 'Receive live inspection reports, diagnostic printouts, and practical maintenance guidance tailored to your car.',
  },
  {
    icon: Award,
    title: 'Twin-City Reputation',
    desc: 'Drivers across Islamabad and Rawalpindi rate HyperTune Garage 4.8 out of 5.0 for accurate diagnostics and clean bay execution.',
  },
  {
    icon: ShieldCheck,
    title: 'Performance • Protection • Perfection',
    desc: 'Mechanical reliability, cleanroom paint protection, and written warranty coverage come together under one Sector O-9 roof.',
  },
];

const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/hyper.tunegarage', icon: Instagram, color: 'text-[#E4405F]' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61589327521589', icon: Facebook, color: 'text-[#1877F2]' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@hypertune.garage', icon: Video, color: 'text-[#00F2FE]' },
  { name: 'YouTube', href: 'https://www.youtube.com/@HyperTuneGarage', icon: Youtube, color: 'text-[#FF0000]' },
];

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-16">
      {/* Hero Banner */}
      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 text-center relative z-10">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Islamabad & Rawalpindi Automotive Service Center
          </span>
          <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">HyperTune Garage</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            HyperTune Garage delivers precision mechanical engineering, computerized diagnostics, and cleanroom paint protection for drivers across Islamabad and Rawalpindi—built around Performance • Protection • Perfection.
          </p>
        </div>
      </section>

      {/* TASK 1 — WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
            <Award className="w-4 h-4 text-cyan-400" />
            Performance • Protection • Perfection
          </span>
          <h2 className="text-3xl font-black text-white">Who We Are</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            HyperTune Garage is an independent automotive workshop serving drivers across Islamabad and Rawalpindi from Shop 1-G, Ground Floor, Central Avenue, Block E Police Foundation, Sector O-9, Islamabad. Rawalpindi owners also access our flagship hub through insured valet pickup.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            We focus on Japanese, German, and luxury vehicles—including Toyota, Honda, Suzuki, Lexus, BMW, Mercedes-Benz, Audi, Porsche, and Land Rover, plus modern hybrids. Rather than guesswork part swapping, our technicians diagnose faults with platform-specific computer scanners, compression testing, and digital micron meters.
          </p>
          <p className="text-slate-400 text-xs leading-relaxed">
            Specialist teams handle engine overhauls, automatic and CVT transmissions, electrical diagnostics, bodywork, and blade-free PPF installation. Before starting repairs, we send digital inspection reports, HD WhatsApp teardown videos, and clear itemized quotes for your approval.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#0b121e] border border-slate-800 space-y-1">
              <span className="text-2xl font-black text-cyan-400 block">15,000+</span>
              <span className="text-xs text-slate-300 font-medium">Vehicles Serviced & Inspected</span>
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
              src={images.aboutPpfStudio}
              alt="HyperTune Garage Precision Workshop & PPF Cleanroom Studio Islamabad"
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = images.workshopIslamabad;
              }}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-semibold text-cyan-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Sector O-9, Police Foundation — Islamabad Flagship Hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* TASK 2 — WHAT WE DO */}
      <section className="bg-[#0b121e] border-y border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
              Complete Workshop Capabilities
            </span>
            <h2 className="text-3xl font-black text-white">What We Do</h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              Explore all ten specialized workshop departments operating at our Sector O-9 facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITIES.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.slug}
                  className={`p-6 rounded-3xl bg-[#070c14] border transition-all duration-300 space-y-4 group flex flex-col justify-between ${
                    srv.highlight ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/40' : 'border-slate-800/80 hover:border-cyan-500/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      {srv.highlight && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                          Flagship Department
                        </span>
                      )}
                    </div>
                    <h3 className="font-extrabold text-lg text-white group-hover:text-cyan-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{srv.desc}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
                    <a
                      href={`/services/${srv.slug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', srv.slug);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                    >
                      <span>{srv.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    {srv.extra && (
                      <a
                        href={`/services/${srv.extra.slug}/`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('service-detail', srv.extra!.slug);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        <span>{srv.extra.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TASK 3 — EXPERIENCE, EXPERTISE & TRUST */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Experience, Expertise & Trust
          </span>
          <h2 className="text-3xl font-black text-white">
            Workshop Facilities, Inspection Rigor & Quality Standards
          </h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            Every vehicle follows a documented inspection workflow built on accurate measurement, genuine parts, and written warranty coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg text-white">Workshop Facilities & Equipment</h3>
            </div>
            <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
              {FACILITY_ITEMS.map(([title, body]) => (
                <li key={title} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">{title}</strong> {body}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg text-white">Transparent Inspection & Warranty Process</h3>
            </div>
            <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
              {PROCESS_ITEMS.map(([title, body]) => (
                <li key={title} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">{title}</strong> {body}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Written Warranty Protection:</strong> Engine and transmission rebuilds carry a written 12-month or 15,000 km warranty (plus a 1,000 km checkup), and TPU PPF includes up to a 10-year manufacturer film warranty.{' '}
                  <a
                    href="/warranty-specs/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('warranty');
                    }}
                    className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-2"
                  >
                    Read warranty specs
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_PILLARS.map((item) => {
            const IconC = item.icon;
            return (
              <div key={item.title} className="p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                  <IconC className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-white">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TASK 4 & TASK 5 — VERIFIED LOCATION & OFFICIAL CHANNELS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Visit Our Islamabad Workshop
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              Police Foundation Sector O-9 Flagship Hub
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan. Relax in our air-conditioned lounge with Wi-Fi or book insured valet pickup from Rawalpindi.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sat – Thu: 10:00 AM – 10:00 PM (Friday Closed)</span>
              </span>
              <a href="tel:+923330177717" className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+92 333 0177717</span>
              </a>
              <a href="mailto:info@hypertunegarage.pk" className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 font-medium">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>info@hypertunegarage.pk</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.google.com/maps?cid=17560337124718439273&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=PK&source=embed"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs inline-flex items-center gap-2 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="/locations/islamabad-workshop/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('location-detail', 'islamabad-workshop');
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Workshop Facility Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/contact/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#070c14] border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="font-extrabold text-sm text-white uppercase tracking-wider">
              Official HyperTune Garage Channels
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Follow our verified workshop channels for PPF installations, teardown inspections, and detailing builds.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SOCIALS.map((s) => {
                const SIcon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-bold flex items-center justify-between transition-colors"
                    aria-label={`HyperTune Garage on ${s.name}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <SIcon className={`w-4 h-4 ${s.color}`} />
                      <span>{s.name}</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Callout */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#0b121e] via-[#0d1829] to-[#0b121e] border border-cyan-500/30 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/10 blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Our Commitment — Performance • Protection • Perfection</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-white max-w-2xl mx-auto">
            "We treat every vehicle like it’s our own."
          </h2>

          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Our workshop pairs technical diagnostics with genuine care for your vehicle—whether you need engine repair, a 200-point inspection, or self-healing TPU Paint Protection Film in Islamabad and Rawalpindi.
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

