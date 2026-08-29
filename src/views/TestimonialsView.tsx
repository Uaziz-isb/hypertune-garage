import React from 'react';
import { PageId } from '../types';
import { GoogleReviewsWidget } from '../components/GoogleReviewsWidget';
import { Star, ShieldCheck, CheckCircle2, MessageCircle, Phone, ArrowRight, ExternalLink } from 'lucide-react';

interface TestimonialsViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const TestimonialsView: React.FC<TestimonialsViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-12">
      {/* Header Banner */}
      <section className="bg-[#05080e] border-b border-slate-800 py-14 sm:py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
              Verified Google Business Profile Ratings
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Customer Reviews & Feedback
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Authentic, verified reviews directly from Google Business Profile submitted by vehicle owners across Islamabad and Rawalpindi.
          </p>

          {/* Quick Metrics Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="bg-[#0b121e] border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-2 text-xs">
              <span className="text-amber-400 font-black text-sm">4.9 / 5.0</span>
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="bg-[#0b121e] border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span><strong>348+</strong> Verified Customer Reviews</span>
            </div>
            <div className="bg-[#0b121e] border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span><strong>94%</strong> 5-Star Rating Ratio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Google Reviews Widget */}
      <section className="max-w-7xl mx-auto px-4">
        <GoogleReviewsWidget showTitle={true} />
      </section>

      {/* Trust & Transparency Guarantee */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
              The HyperTune Transparency Standard
            </span>
            <h3 className="text-2xl font-black text-white">Why Islamabad & Rawalpindi Drivers Trust Us</h3>
            <p className="text-xs text-slate-400">
              Every repair, PPF installation, and maintenance package at HyperTune Garage is executed under strict quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-[#070c14] border border-slate-800/80 p-5 rounded-2xl space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-sm">
                1
              </div>
              <h4 className="font-bold text-white text-sm">Digital Video Inspection Proof</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Before any part is replaced, we send clear HD video footage and diagnostic scan reports directly to your WhatsApp.
              </p>
            </div>

            <div className="bg-[#070c14] border border-slate-800/80 p-5 rounded-2xl space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-sm">
                2
              </div>
              <h4 className="font-bold text-white text-sm">100% Genuine OEM Parts</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Direct imported OEM replacement parts for Toyota, Honda, BMW, Mercedes, Audi, and Porsche with full manufacturer packaging.
              </p>
            </div>

            <div className="bg-[#070c14] border border-slate-800/80 p-5 rounded-2xl space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-sm">
                3
              </div>
              <h4 className="font-bold text-white text-sm">12-Month Repair Warranty</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                All major engine overhauls, mechatronics rebuilds, and electrical repairs come backed with our 12-month / 20,000 km warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-[#0b121e] via-slate-900 to-[#0b121e] border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Join Our Satisfied Vehicle Owners</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            Experience dealer-grade care, climate-controlled cleanroom PPF installations, and certified master diagnostics at HyperTune Garage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/30 active:scale-95 transition-all"
            >
              Book Service Appointment
            </button>
            <a
              href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage,%20I%20saw%20your%20Google%20reviews%20and%20would%20like%20to%20inquire%20about%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition-all"
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
