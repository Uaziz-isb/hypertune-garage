import React from 'react';
import { PageId } from '../types';
import { locationsData } from '../data/locationsData';
import { ArrowLeft, MapPin, Phone, Clock, Navigation, CheckCircle2, Wrench, MessageCircle } from 'lucide-react';

interface LocationDetailProps {
  slug?: string;
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const LocationDetailView: React.FC<LocationDetailProps> = ({ slug, onNavigate, onOpenBooking }) => {
  const normalized = (slug || '').toLowerCase();
  const loc =
    locationsData.find((l) => l.slug === normalized || l.id === normalized) ||
    (normalized.includes('rawalpindi') || normalized.includes('i9') || normalized.includes('saddar')
      ? locationsData.find((l) => l.id.includes('rawalpindi'))
      : locationsData.find((l) => l.id.includes('islamabad'))) ||
    locationsData[0];

  return (
    <div className="pt-24 pb-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={() => onNavigate('locations')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0b121e] border border-slate-800 text-slate-300 hover:text-white font-bold text-xs"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400" />
          <span>Back to All Locations</span>
        </button>
      </div>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-cyan-400 font-bold text-xs uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{loc.city} Workshop Hub</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-black text-white">
            {loc.branchName}
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed">
            {loc.address}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#0b121e] border border-slate-800 rounded-2xl space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Direct Hotline:</span>
              <a href="tel:+923315008872" className="text-base font-black text-cyan-400 block hover:underline">
                0331-5008872
              </a>
            </div>
            <div className="p-4 bg-[#0b121e] border border-slate-800 rounded-2xl space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Working Hours:</span>
              <span className="text-xs font-bold text-white block">Sat - Thu: 10:00 AM - 10:00 PM</span>
              <span className="text-[11px] font-bold text-amber-400 block">Friday: CLOSED (Weekly Off)</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-white uppercase tracking-wider">Facility Specifications:</h3>
            <div className="space-y-2">
              {loc.workshopSpecs.map((spec, i) => (
                <div key={i} className="p-3 bg-[#0b121e] border border-slate-800 rounded-xl text-xs text-slate-200 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={loc.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/30"
            >
              <Navigation className="w-4 h-4 text-slate-950" />
              <span>Get Driving Directions</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-[#0b121e] border border-slate-800 text-white font-extrabold text-sm hover:bg-slate-800"
            >
              Book Service Here
            </button>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-800 h-96 lg:h-auto shadow-2xl">
          <iframe
            src={loc.googleMapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={loc.branchName}
          />
        </div>
      </section>
    </div>
  );
};
