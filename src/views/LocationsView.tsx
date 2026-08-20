import React from 'react';
import { PageId } from '../types';
import { locationsData } from '../data/locationsData';
import { images } from '../data/images';
import { MapPin, Phone, Clock, ArrowRight, Building2, MessageCircle, Navigation, ExternalLink, Sparkles } from 'lucide-react';

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
            Workshop Network
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Workshop Locations
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Discover our premier HyperTune Garage facility in Islamabad and our upcoming Rawalpindi Hub currently under development.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {locationsData.map((loc) => (
          <div key={loc.id} className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
            <div>
              <div className="h-64 sm:h-72 relative">
                <img
                  src={loc.image}
                  alt={loc.branchName}
                  width={800}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = loc.isOperational ? images.workshopIslamabad : images.workshopRawalpindi;
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
                      Fully Operational
                    </span>
                  ) : (
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-[11px] px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Opening Soon
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-white">{loc.branchName}</h3>
                  <p className="text-xs text-cyan-400 font-bold mt-1">
                    {loc.isOperational
                      ? 'Official Automotive Detailing, PPF Cleanroom Studio & Precision Mechanical Center'
                      : 'Upcoming State-of-the-Art Automotive Facility'}
                  </p>
                </div>

                {loc.isOperational ? (
                  <div className="space-y-3 bg-[#070c14] border border-slate-800/80 rounded-2xl p-5">
                    {loc.address && (
                      <div className="flex items-start gap-3 text-xs text-slate-300">
                        <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{loc.address}</span>
                      </div>
                    )}

                    {loc.phone && (
                      <div className="flex items-center gap-3 text-xs text-slate-300">
                        <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                        <a href={`tel:${loc.phone}`} className="hover:text-cyan-400 font-bold">
                          {loc.phone}
                        </a>
                      </div>
                    )}

                    {loc.hours && (
                      <div className="flex items-start gap-3 text-xs text-slate-300">
                        <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-200">{loc.hours.weekdays}</p>
                          <p className="text-amber-400 font-bold">{loc.hours.friday}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-200 text-xs leading-relaxed">
                      <p className="font-bold mb-1 flex items-center gap-1.5 text-amber-300">
                        <Sparkles className="w-4 h-4" />
                        Facility Under Development
                      </p>
                      {loc.statusNotice || 'Opening soon — our new Rawalpindi facility is currently under development. Stay tuned for the official opening announcement.'}
                    </div>
                    <p className="text-xs text-slate-400">
                      In the meantime, all customer vehicle services, PPF applications, and diagnostics are fulfilled at our fully operational <span className="text-cyan-400 font-bold">Islamabad Flagship Hub</span> with concierge pick-up & drop-off available.
                    </p>
                  </div>
                )}

                {loc.workshopSpecs && loc.workshopSpecs.length > 0 && (
                  <div className="space-y-3">
                    <span className="text-xs font-extrabold text-slate-300 uppercase tracking-wider block">
                      {loc.isOperational ? 'Facility & Equipment Specifications:' : 'Planned Specifications:'}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {loc.workshopSpecs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-[#070c14]/60 border border-slate-800/60 rounded-xl px-3 py-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-slate-800/60 mt-4 flex flex-col sm:flex-row gap-3">
              {loc.isOperational ? (
                <>
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    <span>Book Appointment at Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={loc.googleMapsDirectionsUrl || "https://www.google.com/maps?cid=17560337124718439273&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=PK&source=embed"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4 text-cyan-400" />
                    <span>Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </>
              ) : (
                <>
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <span>Book at Islamabad Flagship Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20would%20like%20to%20inquire%20about%20the%20upcoming%20Rawalpindi%20Hub."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
