import React from 'react';
import { PageId } from '../types';
import { GoogleReviewsWidget } from '../components/GoogleReviewsWidget';

interface TestimonialsViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const TestimonialsView: React.FC<TestimonialsViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-12">
      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Live Google Business Profile Ratings
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Google Reviews & Feedback
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Live auto-synced rating & reviews directly from HyperTune Garage Google Business Profile.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <GoogleReviewsWidget showTitle={true} />
      </section>

      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-8 space-y-4">
          <h3 className="text-2xl font-black text-white">Join Our Satisfied Vehicle Owners</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Book your service today and experience transparent digital inspection reports with video proof.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/30"
          >
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

