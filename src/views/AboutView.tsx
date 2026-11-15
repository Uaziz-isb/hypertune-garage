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

const WRAP = 'max-w-7xl mx-auto px-4';
const PANEL = 'bg-[#0b121e] border border-slate-800 rounded-3xl';
const CARD_CLS = `p-6 rounded-3xl bg-[#0b121e] border border-slate-800 space-y-3`;
const ICON_BOX_CLS = 'w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20';
const EYE_CLS = 'text-cyan-400 font-bold text-xs uppercase tracking-widest';
const H2_CLS = 'text-3xl font-black text-white';
const P_BODY = 'text-slate-300 text-sm leading-relaxed';
const P_XS = 'text-slate-400 text-xs leading-relaxed';
const IC4 = 'w-4 h-4 text-cyan-400';
const IC4S = `${IC4} shrink-0`;
const IFLEX = 'inline-flex items-center gap-1.5';
const BTN_DARK = 'px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 font-bold text-xs inline-flex items-center transition-colors';

const fallbackImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = images.workshopIslamabad;
};

type CapItem = [typeof Cpu, string, string, string, string, boolean?, [string, string]?];
const CAPABILITIES: CapItem[] = [
  [Cpu, '1. Automotive Diagnostics and Inspection', 'Full-system ECU scans across engine, transmission, ABS, airbag, and hybrid battery modules, plus 200-point pre-purchase inspections with paint micron audits and cylinder scope checks.', 'inspection-diagnostics', 'Diagnostics & Inspection'],
  [Wrench, '2. Engine Repair and Overhaul', 'Cylinder head repairs, timing chain replacements, cooling flushes, ultrasonic fuel injector cleaning, and complete engine overhauls built to 0.001 mm tolerances with OEM parts.', 'engine-services', 'Engine Services', true, ['Cooling, Fuel & Exhaust', 'cooling-fuel-exhaust']],
  [Settings, '3. Transmission and Drivetrain Services', 'Automatic, CVT, manual, and dual-clutch (DCT/DSG) repairs covering TCU scanning, pressurized fluid exchanges, valve body solenoids, clutch adaptation, and 4x4 differentials.', 'transmission-drivetrain', 'Transmission Services'],
  [Wrench, '4. Preventive Maintenance and Mechanical Repair', 'Scheduled synthetic oil changes (0W-20, 5W-30, 5W-40), genuine OEM oil, air, cabin, and fuel filter replacements, spark plug service, and a 50-point vehicle safety check.', 'maintenance-servicing', 'Maintenance & Servicing'],
  [Gauge, '5. Brake, Suspension and Steering Services', 'Low-dust ceramic brake pads, rotor resurfacing, shock and suspension bushing replacement, air-suspension repair, steering rack service, and Italian 3D laser wheel alignment.', 'brake-suspension-steering', 'Brake & Suspension'],
  [Wind, '6. Automotive AC and Electrical Diagnostics', 'Automated R134a and R1234yf servicing, dry nitrogen leak testing, compressor rebuilds, parasitic battery drain tracing, oscilloscope testing, and ECU/BCM coding.', 'car-ac-repair', 'AC & Electrical'],
  [Shield, '7. Paint Protection Film (PPF)', 'Blade-free installation of self-healing aliphatic TPU film using computerized CAD pre-cut templates inside our dust-free cleanroom studio.', 'paint-protection-film-ppf', 'PPF Cleanroom Studio', true],
  [Sparkles, '8. Ceramic Coating and Detailing', 'Micron-measured clear coat polishing removing swirl marks safely, followed by 9H nano-ceramic coating, 140°C interior steam extraction, and leather care.', 'car-detailing', 'Detailing & 9H Ceramic', true],
  [Car, '9. Vinyl Wrapping and Vehicle Protection', 'Reversible cast vinyl color-change wraps in matte, satin, gloss, and carbon fiber finishes with trim disassembly, edge tucking, and 90°C post-heat curing.', 'vehicle-wrap', 'Vehicle Wrapping'],
  [Award, '10. Body Repair, Paint and Restoration', 'Paintless Dent Repair (PDR), collision frame alignment, spectrophotometer paint matching, paint booth refinishing, and custom body kit fitment.', 'body-repair-paint', 'Body Repair & Paint', false, ['Body Modification', 'body-modification']],
];

const FACILITY_ITEMS: [string, string][] = [
  ['Vehicle Inspections & Pre-Purchase Diagnostics:', 'Comprehensive vehicle health checks, clear diagnostic findings, and itemized repair recommendations to help customers make informed buying and maintenance decisions.'],
  ['Catalytic Cleaning:', 'Specialized cleaning removes carbon deposits and contaminants to support exhaust flow and engine efficiency.'],
  ['PPF & Ceramic Cleanroom:', 'Computerized CAD plotters cut TPU patterns off the vehicle—keeping blades off clear coat—paired with infrared curing lamps.'],
  ['Vehicle Tuning Service:', 'Precision ECU diagnostics and calibration optimize engine response, drivability, and vehicle performance.'],
];

const PROCESS_ITEMS: [string, string][] = [
  ['Measurement Before Repair:', 'Technicians perform ECU fault scans, compression/leak-down tests, dry nitrogen AC pressure tests, or paint-depth micron audits before quoting labor.'],
  ['HD WhatsApp Proof & Itemized Quotes:', 'We send clear photos and teardown videos to your WhatsApp alongside a line-by-line quote for approval prior to work.'],
  ['Barcode-Verified OEM Parts & Fluids:', 'Repairs use genuine OEM spare parts, pure R134a/R1234yf refrigerants, and imported full-synthetic oils matched to factory viscosity.'],
];

type CardTuple = [typeof Cpu, string, string];
const TRUST_PILLARS: CardTuple[] = [
  [Users, 'Specialist Technicians', 'Dedicated mechanics, auto-electricians, transmission specialists, painters, and PPF installers follow documented torque and inspection tolerances.'],
  [Cpu, 'Precision Instrumentation', 'We verify engine tolerances with 0.001 mm micrometers, paint depth with micron gauges, and electrical circuits with oscilloscopes.'],
  [ShieldCheck, 'Transparent Pricing', 'Itemized quotes explain every component and labor step up front—zero hidden fees at vehicle delivery.'],
  [CheckCircle2, 'Customer-First Updates', 'Receive live inspection reports, diagnostic printouts, and practical maintenance guidance tailored to your car.'],
  [Award, 'Twin-City Reputation', 'Drivers across Islamabad and Rawalpindi rate HyperTune Garage 4.8 out of 5.0 for accurate diagnostics and clean bay execution.'],
  [ShieldCheck, 'Performance • Protection • Perfection', 'Mechanical reliability, cleanroom paint protection, and written warranty coverage come together under one Sector O-9 roof.'],
];

const EXPERIENCE_CATEGORIES: CardTuple[] = [
  [Car, '1. Multi-Brand Vehicle Experience', 'Experience working with Japanese, German, European and other vehicle makes, from everyday cars to luxury and performance vehicles.'],
  [Cpu, '2. Diagnostic & Pre-Purchase Expertise', 'Vehicle health assessments, fault diagnosis, electronic system checks and pre-purchase inspections to help customers make informed decisions.'],
  [Wrench, '3. Mechanical Repair Experience', 'Hands-on work covering engine, transmission, suspension, braking, cooling and electrical systems.'],
  [Shield, '4. Vehicle Protection & Appearance', 'Practical experience in paint protection film, ceramic coating, detailing, vinyl wrapping and body refinishing.'],
  [ShieldCheck, '5. Customer-Focused Workshop Process', 'Inspection evidence, transparent findings, itemized estimates and customer approval before repair work begins.'],
];

const SOCIALS: [string, string, typeof Instagram, string][] = [
  ['Instagram', 'https://www.instagram.com/hyper.tunegarage', Instagram, 'text-[#E4405F]'],
  ['Facebook', 'https://www.facebook.com/profile.php?id=61589327521589', Facebook, 'text-[#1877F2]'],
  ['TikTok', 'https://www.tiktok.com/@hypertune.garage', Video, 'text-[#00F2FE]'],
  ['YouTube', 'https://www.youtube.com/@HyperTuneGarage', Youtube, 'text-[#FF0000]'],
];

const renderChecklist = (items: [string, string][]) =>
  items.map(([title, body]) => (
    <li key={title} className="flex items-start gap-2.5">
      <CheckCircle2 className={`${IC4S} mt-0.5`} />
      <span>
        <strong className="text-white">{title}</strong> {body}
      </span>
    </li>
  ));

const renderFeatureGrid = (items: CardTuple[], useBorderedIcon?: boolean) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map(([IconC, title, desc]) => (
      <div key={title} className={CARD_CLS}>
        <div className={useBorderedIcon ? ICON_BOX_CLS : 'w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center'}>
          <IconC className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-base text-white">{title}</h3>
        <p className={P_XS}>{desc}</p>
      </div>
    ))}
  </div>
);

const headBox = (eye: React.ReactNode, h2: string, body: React.ReactNode, maxW = 'max-w-2xl', gap = 'space-y-2') => (
  <div className={`text-center ${gap} ${maxW} mx-auto`}>
    {eye}
    <h2 className={H2_CLS}>{h2}</h2>
    {body}
  </div>
);

const listCard = (IconL: typeof Cpu, title: string, items: [string, string][], extra?: React.ReactNode) => (
  <div className={`${PANEL} p-6 md:p-8 space-y-5`}>
    <div className="flex items-center gap-3">
      <div className={ICON_BOX_CLS}>
        <IconL className="w-5 h-5" />
      </div>
      <h3 className="font-extrabold text-lg text-white">{title}</h3>
    </div>
    <ul className="space-y-3 text-xs text-slate-300 leading-relaxed">
      {renderChecklist(items)}
      {extra}
    </ul>
  </div>
);

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenBooking }) => {
  const go = (p: PageId, s?: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(p, s);
  };

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-16">
      {/* Hero Banner */}
      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 text-center relative z-10">
          <span className={`${EYE_CLS} ${IFLEX} bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 rounded-full`}>
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
      <section className={`${WRAP} grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
        <div className="lg:col-span-6 space-y-5">
          <span className={`${EYE_CLS} flex items-center gap-1.5`}>
            <Award className={IC4} />
            Performance • Protection • Perfection
          </span>
          <h2 className={H2_CLS}>Who We Are</h2>
          <p className={P_BODY}>
            HyperTune Garage is an independent automotive workshop serving drivers across Islamabad and Rawalpindi from Shop 1-G, Ground Floor, Central Avenue, Block E Police Foundation, Sector O-9, Islamabad. Rawalpindi owners also access our flagship hub through insured valet pickup.
          </p>
          <p className={P_BODY}>
            We focus on Japanese, German, and luxury vehicles—including Toyota, Honda, Suzuki, Lexus, BMW, Mercedes-Benz, Audi, Porsche, and Land Rover, plus modern hybrids. Rather than guesswork part swapping, our technicians diagnose faults with platform-specific computer scanners, compression testing, and digital micron meters.
          </p>
          <p className={P_XS}>
            Specialist teams handle engine overhauls, automatic and CVT transmissions, electrical diagnostics, bodywork, and blade-free PPF installation. Before starting repairs, we send digital inspection reports, HD WhatsApp teardown videos, and clear itemized quotes for your approval.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              ['15,000+', 'Vehicles Serviced & Inspected'],
              ['100%', 'OEM Genuine Parts & Oils'],
            ].map(([val, lbl]) => (
              <div key={val} className="p-4 rounded-2xl bg-[#0b121e] border border-slate-800 space-y-1">
                <span className="text-2xl font-black text-cyan-400 block">{val}</span>
                <span className="text-xs text-slate-300 font-medium">{lbl}</span>
              </div>
            ))}
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
              onError={fallbackImg}
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

      {/* OUR STORY */}
      <section className={WRAP}>
        <div className={`${PANEL} p-6 md:p-10`}>
          <div className="space-y-4">
            <span className={`${EYE_CLS} ${IFLEX}`}>
              <Sparkles className={IC4} />
              About Our Workshop
            </span>
            <h2 className={H2_CLS}>Our Story</h2>
            <p className={`${P_BODY} w-[1150px] max-w-full`}>
              HyperTune Garage was built around a simple belief: every vehicle deserves professional care, honest advice and attention to detail. Serving Islamabad and Rawalpindi, we bring mechanical expertise, modern diagnostic practices and vehicle protection services together under one roof.
            </p>
            <p className={`${P_BODY} w-[1150px] max-w-full`}>
              From routine maintenance and complex repairs to pre-purchase inspections and premium vehicle protection, our focus is on understanding each vehicle&apos;s needs and recommending practical solutions. We believe in transparent communication, quality workmanship and helping customers make informed decisions at every stage.
            </p>
            <p className="text-cyan-400 font-extrabold text-sm tracking-wide pt-1">
              Performance • Protection • Perfection
            </p>
          </div>
        </div>
      </section>

      {/* TASK 2 — WHAT WE DO */}
      <section className="bg-[#0b121e] border-y border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-10">
          {headBox(
            <span className={EYE_CLS}>Complete Workshop Capabilities</span>,
            'What We Do',
            <p className={P_XS}>Explore all ten specialized workshop departments operating at our Sector O-9 facility.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITIES.map(([IconComp, title, desc, slug, cta, highlight, extra]) => (
              <div
                key={slug}
                className={`p-6 rounded-3xl bg-[#070c14] border transition-all duration-300 space-y-4 group flex flex-col justify-between ${
                  highlight ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/40' : 'border-slate-800/80 hover:border-cyan-500/40'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    {highlight && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                        Flagship Department
                      </span>
                    )}
                  </div>
                  <h3 className="font-extrabold text-lg text-white group-hover:text-cyan-400 transition-colors">
                    {title}
                  </h3>
                  <p className={P_XS}>{desc}</p>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
                  <a
                    href={`/services/${slug}/`}
                    onClick={go('service-detail', slug)}
                    className={`${IFLEX} text-xs font-bold text-cyan-400 hover:text-cyan-300`}
                  >
                    <span>{cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  {extra && (
                    <a
                      href={`/services/${extra[1]}/`}
                      onClick={go('service-detail', extra[1])}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <span>{extra[0]}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TASK 3 — EXPERIENCE, EXPERTISE & TRUST */}
      <section className={`${WRAP} space-y-12`}>
        {headBox(
          <span className={EYE_CLS}>Experience, Expertise & Trust</span>,
          'Workshop Facilities, Inspection Rigor & Quality Standards',
          <p className={P_XS}>Every vehicle follows a documented inspection workflow built on accurate measurement, genuine parts, and written warranty coverage.</p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {listCard(Cpu, 'Workshop Facilities & Equipment', FACILITY_ITEMS)}
          {listCard(
            ShieldCheck,
            'Transparent Inspection & Warranty Process',
            PROCESS_ITEMS,
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className={`${IC4S} mt-0.5`} />
              <span>
                <strong className="text-white">Written Warranty Protection:</strong> Engine and transmission rebuilds carry a written 12-month or 15,000 km warranty (plus a 1,000 km checkup), and TPU PPF includes up to a 10-year manufacturer film warranty.{' '}
                <a
                  href="/warranty-specs/"
                  onClick={go('warranty')}
                  className="text-cyan-400 hover:text-cyan-300 font-bold underline underline-offset-2"
                >
                  Read warranty specs
                </a>
                .
              </span>
            </li>
          )}
        </div>

        {renderFeatureGrid(TRUST_PILLARS)}
      </section>

      {/* AUTOMOTIVE EXPERIENCE & TECHNICAL EXPERTISE */}
      <section className={`${WRAP} space-y-10`}>
        {headBox(
          <span className={`${EYE_CLS} ${IFLEX}`}>
            <Award className={IC4} />
            Hands-On Multi-Brand Standards
          </span>,
          'Automotive Experience & Technical Expertise',
          <>
            <p className={P_BODY}>
              At HyperTune Garage, our experience is built around hands-on automotive care across multiple vehicle brands and service categories. From mechanical repairs and advanced diagnostics to pre-purchase inspections and vehicle protection, we focus on understanding each vehicle&apos;s condition before recommending the right solution.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Our approach combines systematic inspections, modern diagnostic equipment, practical workshop expertise and transparent communication—helping customers make confident decisions about their vehicles.
            </p>
          </>,
          'max-w-3xl',
          'space-y-4'
        )}

        {renderFeatureGrid(EXPERIENCE_CATEGORIES, true)}
      </section>

      {/* TASK 4 & TASK 5 — VERIFIED LOCATION & OFFICIAL CHANNELS */}
      <section className={WRAP}>
        <div className={`${PANEL} p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
          <div className="lg:col-span-7 space-y-4">
            <span className={`${EYE_CLS} flex items-center gap-1.5`}>
              <MapPin className={IC4} />
              Visit Our Islamabad Workshop
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              Police Foundation Sector O-9 Flagship Hub
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan. Relax in our air-conditioned lounge with Wi-Fi or book insured valet pickup from Rawalpindi.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-1">
              <span className={IFLEX}>
                <Clock className={IC4S} />
                <span>Sat – Thu: 10:00 AM – 10:00 PM (Friday Closed)</span>
              </span>
              <a href="tel:+923330177717" className={`${IFLEX} text-cyan-400 hover:text-cyan-300 font-bold`}>
                <Phone className="w-4 h-4 shrink-0" />
                <span>+92 333 0177717</span>
              </a>
              <a href="mailto:info@hypertunegarage.pk" className={`${IFLEX} text-slate-300 hover:text-cyan-400 font-medium`}>
                <Mail className={IC4S} />
                <span>info@hypertunegarage.pk</span>
              </a>
            </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
              {(
                [
                  [
                    'https://www.google.com/maps?cid=17560337124718439273&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=PK&source=embed',
                    'gap-2 text-white',
                    'Google Maps Directions',
                    undefined,
                    1,
                  ],
                  ['/locations/islamabad-workshop/', 'gap-1.5 text-cyan-400', 'Workshop Facility Details', go('location-detail', 'islamabad-workshop')],
                  ['/contact/', 'gap-1.5 text-slate-200 hover:text-white', 'Contact Page', go('contact')],
                ] as [string, string, string, ((e: React.MouseEvent) => void)?, number?][]
              ).map(([href, cls, label, click, ext]) => (
                <a
                  key={label}
                  href={href}
                  onClick={click}
                  target={ext ? '_blank' : undefined}
                  rel={ext ? 'noopener noreferrer' : undefined}
                  className={`${BTN_DARK} ${cls}`}
                >
                  {ext && <MapPin className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{label}</span>
                  {ext ? <ExternalLink className="w-3 h-3 text-slate-400" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#070c14] border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="font-extrabold text-sm text-white uppercase tracking-wider">
              Official HyperTune Garage Channels
            </h3>
            <p className={P_XS}>
              Follow our verified workshop channels for PPF installations, teardown inspections, and detailing builds.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SOCIALS.map(([name, href, SIcon, color]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-bold flex items-center justify-between transition-colors"
                  aria-label={`HyperTune Garage on ${name}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <SIcon className={`w-4 h-4 ${color}`} />
                    <span>{name}</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Callout */}
      <section className={WRAP}>
        <div className="bg-gradient-to-r from-[#0b121e] via-[#0d1829] to-[#0b121e] border border-cyan-500/30 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold">
            <CheckCircle2 className={IC4} />
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

