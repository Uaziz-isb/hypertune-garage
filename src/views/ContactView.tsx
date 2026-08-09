import React, { useState } from 'react';
import { PageId } from '../types';
import { Logo } from '../components/Logo';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, ExternalLink, Navigation } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const waText = encodeURIComponent(
      `*New Contact Message - HyperTune Garage*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Message:* ${message}`
    );
    window.open(`https://wa.me/923330177717?text=${waText}`, '_blank');
  };

  return (
    <div className="pt-24 pb-16 space-y-12">
      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-black text-white">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">HyperTune Garage</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Reach out directly to our master engineering team in Islamabad & Rawalpindi for immediate assistance, roadside towing, or diagnostic inquiries.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
            <h3 className="text-xl font-black text-white">Direct Hotlines & Support</h3>

            {/* Islamabad */}
            <div className="space-y-2 border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Islamabad Hub (Police Foundation):
              </span>
              <p className="text-xs text-slate-300">Shop 1-G, Ground Floor, Central Ave, near Attock Petrol Pump, Block E Police Foundation, Islamabad, 44000, Pakistan</p>
              <a href="tel:+923330177717" className="text-base font-black text-white hover:text-cyan-400 block">
                +92 333 0177717
              </a>
            </div>

            {/* Rawalpindi */}
            <div className="space-y-2 border-b border-slate-800 pb-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                Rawalpindi Branch (I-9 / Saddar):
              </span>
              <p className="text-xs text-slate-300">Plot 18, Sector I-9/3 Industrial Area</p>
              <a href="tel:+923330177717" className="text-base font-black text-white hover:text-cyan-400 block">
                0333-0177717
              </a>
            </div>

            {/* Hours */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                Working Hours:
              </span>
              <p className="text-xs text-slate-200 font-bold">Saturday - Thursday: 10:00 AM - 10:00 PM</p>
              <p className="text-xs text-amber-400 font-extrabold flex items-center gap-1">
                <span>• Friday: CLOSED (Weekly Off)</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open Instant WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-black text-white">Send Us a Direct Message</h3>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Saad Alvi"
                  className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0331 5008872"
                  className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Message / Inquiry Details *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Inquire about ECU tuning, Toyota/Honda/Suzuki repairs, PPF studio booking..."
                  className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Submit Message</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto" />
              <h3 className="text-2xl font-black text-white">Message Delivered!</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Thank you, {name}. Our customer support representative will call or WhatsApp you within 15 minutes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </section>

      {/* GOOGLE MAP LOCATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0b121e] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="space-y-2">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Workshop Location Pin
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white">HyperTune Garage Location Map</h2>
            <p className="text-xs text-slate-400 max-w-xl">
              Shop 1-G, Ground Floor, Central Ave, near Attock Petrol Pump, Block E Police Foundation, Islamabad, 44000, Pakistan.
            </p>
          </div>
          <a
            href="https://www.google.com/maps/place/HyperTune+Garage/@33.5622113,73.1345365,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfede5eabd2d83:0xf3b2d99386f26b69!8m2!3d33.5622113!4d73.1345365"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 shrink-0 transition-all active:scale-95"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
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

        {/* LOGO UNDER GOOGLE MAP - 150% BIGGER SIZE */}
        <div className="bg-[#0b121e] border border-cyan-500/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-center py-4 px-2 scale-150 transform origin-center sm:origin-left my-2 shrink-0">
            <Logo onClick={() => onNavigate('home')} />
          </div>
          <div className="space-y-2 text-center md:text-right max-w-xl">
            <h3 className="text-xl md:text-2xl font-black text-white">HyperTune Garage Pakistan</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Official Hub: Block E Police Foundation, Islamabad & Sector I-9 Industrial Area, Rawalpindi.
              <br />
              Specializing in Paint Protection Film (PPF), Ceramic Detailing, Vehicle Wraps & Precision Engineering.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
