import React from 'react';
import { PageId } from '../types';
import { locationsData } from '../data/locationsData';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

interface LocationsViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const LocationsView: React.FC<LocationsViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-12">
      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Twin City Facilities
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Workshop Locations
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Conveniently situated to serve vehicle owners across Islamabad (G-8, F-6, F-7, F-10, DHA) and Rawalpindi (Saddar, I-9, Airport Road).
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {locationsData.map((loc) => (
          <div key={loc.id} className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
            <div>
              <div className="h-64 relative bg-slate-900">
                <img
                  src={loc.image}
                  alt={loc.branchName}
                  width={600}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-lg">
                  {loc.city} Hub
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{loc.branchName}</h3>
                <p className="text-xs text-slate-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>
                <p className="text-xs text-slate-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Sat - Thu: 10:00 AM - 10:00 PM <strong className="text-amber-400 font-bold ml-1">(Friday Off)</strong></span>
                </p>

                <div className="pt-2 space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Workshop Specifications:
                  </span>
                  <div className="space-y-1 text-xs text-slate-300">
                    {loc.workshopSpecs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-cyan-400">✓</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center gap-2">
              <button
                onClick={() => onNavigate('location-detail', loc.slug)}
                className="flex-1 py-3 rounded-xl bg-[#070c14] hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800 text-center transition-colors flex items-center justify-center gap-1"
              >
                <span>View Full Branch Specs</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
              <a
                href={`tel:${loc.phone}`}
                className="px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>Call</span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
