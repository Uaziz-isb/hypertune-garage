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
              Selected Customer Testimonials
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Customer Testimonials & Feedback
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Selected testimonials shared by vehicle owners across Islamabad and Rawalpindi who have visited HyperTune Garage in Sector O-9, Islamabad.
          </p>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="bg-[#0b121e] border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span><strong>Sector O-9 Islamabad</strong> Flagship Workshop</span>
            </div>
            <div className="bg-[#0b121e] border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span><strong>Itemized Estimates</strong> Before Work Begins</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Google Reviews Widget */}
      <section className="max-w-7xl mx-auto px-4">
        <GoogleReviewsWidget showTitle={true} />
      </section>

      {/* Trust & Transparency Standard */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
              The HyperTune Transparency Standard
            </span>
            <h3 className="text-2xl font-black text-white">Why Islamabad & Rawalpindi Drivers Choose Us</h3>
            <p className="text-xs text-slate-400">
              Every repair, PPF installation, and maintenance package at HyperTune Garage follows clear diagnostic and estimating practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-[#070c14] border border-slate-800/80 p-5 rounded-2xl space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-sm">
                1
              </div>
              <h4 className="font-bold text-white text-sm">Clear Inspection Updates</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Before any part is replaced, we share inspection findings, fault scan results, and clear inspection photos—and short video updates when helpful—on WhatsApp.
              </p>
            </div>

            <div className="bg-[#070c14] border border-slate-800/80 p-5 rounded-2xl space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-sm">
                2
              </div>
              <h4 className="font-bold text-white text-sm">Vehicle-Matched Parts Options</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Approved replacement parts options for Japanese, European, Korean, and Chinese vehicles are confirmed on your itemized estimate.
              </p>
            </div>

            <div className="bg-[#070c14] border border-slate-800/80 p-5 rounded-2xl space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-sm">
                3
              </div>
              <h4 className="font-bold text-white text-sm">Written Parts Warranty Terms</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                For engine, brake/suspension/steering, transmission, and car AC repairs, eligible replacement parts may carry a written warranty of up to 12 months subject to supplier terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-[#0b121e] via-slate-900 to-[#0b121e] border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Book Your Next Visit to HyperTune Garage</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            Experience multi-brand computerized diagnostics, indoor studio bay PPF installations, and mechanical care at our Sector O-9 Islamabad workshop.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/30 active:scale-95 transition-all"
            >
              Book Service Appointment
            </button>
            <a
              href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
