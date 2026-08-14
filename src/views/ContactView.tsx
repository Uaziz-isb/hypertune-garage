import React, { useState } from 'react';
import { PageId } from '../types';
import { Logo } from '../components/Logo';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ExternalLink,
  Navigation,
  ChevronRight,
  ShieldCheck,
  Truck,
  Calendar,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Wrench,
  Compass
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [branch, setBranch] = useState('Islamabad Police Foundation Hub');
  const [serviceCategory, setServiceCategory] = useState('Paint Protection Film (PPF) & Detailing');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const waText = encodeURIComponent(
      `*New Contact Inquiry - HyperTune Garage*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🚗 *Vehicle:* ${vehicle || 'Not specified'}\n` +
      `🏢 *Preferred Hub:* ${branch}\n` +
      `🔧 *Service:* ${serviceCategory}\n` +
      `💬 *Message:* ${message}`
    );
    window.open(`https://wa.me/923330177717?text=${waText}`, '_blank');
  };

  const contactFaqs = [
    {
      q: "Do I need to book an appointment before visiting the workshop?",
      a: "While walk-in drive-through inspections are always welcome, we strongly recommend booking in advance for Paint Protection Film (PPF), ceramic coatings, and complex engine/gearbox diagnostics to ensure an assigned master technician and clean studio bay are ready for your vehicle."
    },
    {
      q: "What are your workshop working hours and weekly off days?",
      a: "Our Islamabad and Rawalpindi hubs operate Saturday through Thursday from 10:00 AM to 10:00 PM. Friday is our dedicated weekly off for deep studio maintenance and equipment calibration."
    },
    {
      q: "Do you offer vehicle pick-up and delivery in Islamabad/Rawalpindi?",
      a: "Yes! We provide scheduled executive concierge vehicle pick-up and drop-off services across Islamabad and Rawalpindi. Call our customer hotline at 0331-5008872 to arrange convenient vehicle transport."
    },
    {
      q: "Can I receive video updates and live progress of my car's repair?",
      a: "Yes, 100%. Every vehicle undergoes a computerized digital inspection, and our engineers send HD photo and video proof of diagnoses, parts replaced, and PPF installation steps directly to your WhatsApp."
    },
    {
      q: "What payment methods are accepted at HyperTune Garage?",
      a: "We accept Cash, Direct Bank Transfers (Raast / IBFT), Visa/MasterCard Debit & Credit Cards, and corporate purchase orders."
    }
  ];

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
          <span className="text-cyan-400 font-bold">Contact Us</span>
        </nav>
      </div>

      {/* Hero Header Section */}
      <section className="bg-[#05080e] border-y border-slate-800/80 py-12 md:py-16 px-4 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-extrabold text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official Support & Workshop Directory</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500">HyperTune Garage</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Connect directly with our master engineers in Islamabad & Rawalpindi for service inquiries, PPF consultations, OEM diagnostics, and priority workshop scheduling.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sat - Thu: 10:00 AM - 10:00 PM</span>
            </span>
            <span className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30 text-amber-300">
              <span>Friday: Closed (Weekly Maintenance)</span>
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30 text-emerald-300">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Avg WhatsApp Reply: &lt; 3 mins</span>
            </span>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Call Phone */}
          <a
            href="tel:+923315008872"
            className="group bg-[#0b121e] hover:bg-[#0e1726] border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 space-y-3 transition-all duration-300 shadow-lg hover:-translate-y-1 block"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">Direct Hotline</span>
              <p className="text-base font-black text-white group-hover:text-cyan-400 transition-colors">0331-5008872</p>
            </div>
            <p className="text-xs text-slate-400">Immediate mechanical inquiry & estimate support.</p>
          </a>

          {/* Card 2: WhatsApp */}
          <a
            href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20have%20an%20inquiry%20regarding%20car%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0b121e] hover:bg-[#0e1726] border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 space-y-3 transition-all duration-300 shadow-lg hover:-translate-y-1 block"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">Official WhatsApp</span>
              <p className="text-base font-black text-white group-hover:text-emerald-400 transition-colors">+92 333 0177717</p>
            </div>
            <p className="text-xs text-slate-400">Share vehicle photos & get instant quotes.</p>
          </a>

          {/* Card 3: Email */}
          <a
            href="mailto:info@hypertunegarage.pk"
            className="group bg-[#0b121e] hover:bg-[#0e1726] border border-slate-800 hover:border-blue-500/40 rounded-2xl p-5 space-y-3 transition-all duration-300 shadow-lg hover:-translate-y-1 block"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">Email Assistance</span>
              <p className="text-base font-black text-white group-hover:text-blue-400 transition-colors">info@hypertunegarage.pk</p>
            </div>
            <p className="text-xs text-slate-400">Corporate fleet inquiries & billing details.</p>
          </a>

          {/* Card 4: VIP Concierge Desk */}
          <button
            onClick={() => onOpenBooking()}
            className="group bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 hover:border-cyan-500/60 rounded-2xl p-5 space-y-3 transition-all duration-300 shadow-lg hover:-translate-y-1 block text-left w-full"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-cyan-300 font-bold block uppercase tracking-wider">VIP Booking Desk</span>
              <p className="text-base font-black text-white group-hover:text-cyan-300 transition-colors">Book Online</p>
            </div>
            <p className="text-xs text-slate-400">Reserve priority slot with 0-min waiting time.</p>
          </button>
        </div>
      </section>

      {/* Main Grid: Branches Details & Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Two Physical Branches */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Physical Workshop Locations
            </span>
            <h2 className="text-2xl font-black text-white">Visit Our Diagnostic Hubs</h2>
            <p className="text-xs text-slate-400">
              State-of-the-art repair facilities equipped with dust-free PPF studios, high-ceiling hydraulic lifts, and computerized German scanners.
            </p>
          </div>

          {/* Branch 1: Islamabad */}
          <div className="bg-[#0b121e] border border-cyan-500/30 rounded-3xl p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-wider inline-block mb-1">
                  Flagship Studio
                </span>
                <h3 className="text-lg font-black text-white">Islamabad Hub (Police Foundation)</h3>
              </div>
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" title="Active Hub" />
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Shop 1-G, Ground Floor, Central Ave, near Attock Petrol Pump, Block E Police Foundation, Islamabad, 44000, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sat - Thu: 10:00 AM - 10:00 PM <strong className="text-amber-400 ml-1">(Friday Closed)</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+923315008872" className="text-cyan-400 hover:underline font-bold">+92 331 5008872</a>
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href="https://www.google.com/maps?cid=17560337124718439273&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=PK&source=embed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
              <button
                onClick={() => onNavigate('location-detail', 'islamabad-police-foundation-hub')}
                className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all"
              >
                Hub Details
              </button>
            </div>
          </div>

          {/* Branch 2: Rawalpindi */}
          <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-wider inline-block mb-1">
                  Industrial Heavy Bay
                </span>
                <h3 className="text-lg font-black text-white">Rawalpindi Hub (I-9 / Saddar)</h3>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Plot 18, Sector I-9/3 Industrial Area, Rawalpindi / Islamabad Border, Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Sat - Thu: 10:00 AM - 10:00 PM <strong className="text-amber-400 ml-1">(Friday Closed)</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+923315008872" className="text-cyan-400 hover:underline font-bold">0331-5008872</a>
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20need%20directions%20to%20the%20Rawalpindi%20I-9%20Branch."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>WhatsApp Location</span>
              </a>
              <button
                onClick={() => onNavigate('location-detail', 'rawalpindi-i9-hub')}
                className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all"
              >
                Hub Details
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Direct Contact Form */}
        <div className="lg:col-span-7 bg-[#0b121e] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          <div className="mb-6 space-y-1">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
              Direct Workshop Dispatch
            </span>
            <h2 className="text-2xl font-black text-white">Send Us a Direct Message</h2>
            <p className="text-xs text-slate-400">
              Submit your vehicle requirements below. Our service advisors respond instantly with transparent quotes and available appointment slots.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Your Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Saad Alvi"
                    className="w-full bg-[#070c14] border border-slate-800 rounded-xl px-3.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Phone / WhatsApp <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0331 5008872"
                    className="w-full bg-[#070c14] border border-slate-800 rounded-xl px-3.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Vehicle Make & Model
                  </label>
                  <input
                    type="text"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    placeholder="e.g. Toyota Prado V8 / BMW 530i / Civic RS"
                    className="w-full bg-[#070c14] border border-slate-800 rounded-xl px-3.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Preferred Workshop Hub
                  </label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full bg-[#070c14] border border-slate-800 rounded-xl px-3.5 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  >
                    <option value="Islamabad Police Foundation Hub">Islamabad Hub (Police Foundation)</option>
                    <option value="Rawalpindi I-9 Hub">Rawalpindi Hub (Sector I-9/3)</option>
                    <option value="Executive Concierge Pickup">Executive Concierge Valet Pickup</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Service Category Needed
                </label>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="w-full bg-[#070c14] border border-slate-800 rounded-xl px-3.5 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="Paint Protection Film (PPF) & Detailing">Paint Protection Film (PPF) & Detailing</option>
                  <option value="Engine Overhaul & Rebuild">Engine Overhaul & Rebuilding</option>
                  <option value="ECU Remapping & Dyno Tuning">ECU Remapping & Performance Dyno Tuning</option>
                  <option value="Automatic / CVT Transmission Repair">Automatic / CVT Transmission Repair</option>
                  <option value="Brakes, Air Suspension & 3D Alignment">Brakes, Air Suspension & 3D Alignment</option>
                  <option value="Car AC Repair & Compressor Overhaul">Car AC Repair & Gas Recharge</option>
                  <option value="General Periodic Maintenance (50-Point Audit)">General Periodic Maintenance (50-Point Audit)</option>
                  <option value="Computer Diagnostics & Pre-Purchase Inspection">Computer Diagnostics & Pre-Purchase Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Message / Issue Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your vehicle issues, symptoms, requested PPF coverage, or preferred date/time..."
                  className="w-full bg-[#070c14] border border-slate-800 rounded-xl px-3.5 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan-500 focus:outline-none resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 transition-all active:scale-98"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Submit & Dispatch to WhatsApp Support</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Zero spam guarantee • 100% confidential vehicle records</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
              <h3 className="text-2xl font-black text-white">Message Prepared & Dispatched!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{name}</strong>. If your WhatsApp did not open automatically, click the direct WhatsApp button below to connect with our engineers.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/923330177717?text=${encodeURIComponent(
                    `*Contact Form Follow-up*\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Direct</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Google Map Location Pin Section */}
      <section className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="space-y-1.5">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Live GPS Workshop Coordinates
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white">HyperTune Garage Location Map</h2>
            <p className="text-xs text-slate-400 max-w-xl">
              Shop 1-G, Ground Floor, Central Ave, near Attock Petrol Pump, Block E Police Foundation, Islamabad, 44000, Pakistan.
            </p>
          </div>
          <a
            href="https://www.google.com/maps?cid=17560337124718439273&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=PK&source=embed"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 shrink-0 transition-all active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps App</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-[420px] w-full relative bg-[#070c14]">
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

      {/* Contact & Visiting FAQs */}
      <section className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            Common Questions
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white">Visiting & Booking FAQs</h2>
          <p className="text-xs text-slate-400">
            Everything you need to know before dropping by our Islamabad & Rawalpindi workshops.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {contactFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#0b121e] border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-900/60 transition-colors"
                >
                  <span className="text-sm font-black text-white">{faq.q}</span>
                  <span className={`text-cyan-400 font-black text-lg transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Brand Commitment Banner with Big Logo */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0b121e] border border-cyan-500/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-center py-4 px-2 scale-150 transform origin-center sm:origin-left my-2 shrink-0">
            <Logo onClick={() => onNavigate('home')} />
          </div>
          <div className="space-y-3 text-center md:text-right max-w-xl">
            <h3 className="text-xl md:text-2xl font-black text-white">HyperTune Garage Pakistan</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Official Hub: Block E Police Foundation, Islamabad & Sector I-9 Industrial Area, Rawalpindi.
              <br />
              Specializing in Paint Protection Film (PPF), Ceramic Detailing, Vehicle Wraps & Precision Engineering.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-end gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20"
              >
                Schedule Diagnostic Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

