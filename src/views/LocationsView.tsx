import React from 'react';
import { PageId } from '../types';
import { locationsData } from '../data/locationsData';
import { images } from '../data/images';
import { MapPin, Phone, Clock, ArrowRight, Sparkles, Building2, MessageCircle } from 'lucide-react';

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
            Twin City Network
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Workshop Locations
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Discover HyperTune Garage facilities serving premium vehicle owners across Islamabad and Rawalpindi.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {locationsData.map((loc) => (
          <div key={loc.id} className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
            <div>
              <div className="h-64 relative">
                <img
                  src={loc.image}
                  alt={loc.branchName}
                  width={600}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = images.islamabadPpfStudio;
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-slate-950/40 to-transparent" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-lg">
                    {loc.city} Hub
                  </span>
                  {loc.isOperational ? (
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold text-[11px] px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Open & Operational
                    </span>
                  ) : (
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/50 font-extrabold text-[11px] px-2.5 py-0.5 rounded-lg flex items-center gap-1.5 backdrop-blur-sm">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Opening Soon
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{loc.branchName}</h3>

                {loc.isOperational ? (
                  <>
                    {loc.address && (
                      <p className="text-xs text-slate-300 flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </p>
                    )}
                    {loc.hours && (
                      <p className="text-xs text-slate-300 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Sat - Thu: 10:00 AM - 10:00 PM <strong className="text-amber-400 font-bold ml-1">(Friday Off)</strong></span>
                      </p>
                    )}

                    {loc.workshopSpecs && loc.workshopSpecs.length > 0 && (
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
                    )}
                  </>
                ) : (
                  /* Opening soon branch: address, timing, and specs removed */
                  <div className="space-y-4 pt-1">
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm leading-relaxed">
                      <p className="font-medium italic">
                        &ldquo;{loc.statusNotice || 'Opening soon — our new branch is currently under development. Stay tuned for the official opening announcement.'}&rdquo;
                      </p>
                    </div>

                    <div className="p-3.5 bg-[#070c14] border border-slate-800 rounded-xl space-y-1.5 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Current Service Availability:</span>
                      </div>
                      <p>
                        All detailing, PPF applications, mechanical repairs, and computerized diagnostics are currently welcomed at our fully-equipped <strong className="text-slate-200">Islamabad Flagship Hub</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center gap-2">
              <button
                onClick={() => onNavigate('location-detail', loc.slug)}
                className="flex-1 py-3 rounded-xl bg-[#070c14] hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800 text-center transition-colors flex items-center justify-center gap-1"
              >
                <span>{loc.isOperational ? 'View Full Branch Specs' : 'View Branch Info'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
              {loc.isOperational && loc.phone && (
                <a
                  href={`tel:${loc.phone}`}
                  className="px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>Call</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
