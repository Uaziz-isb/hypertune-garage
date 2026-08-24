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

      {/* Local Sector Coverage & Doorstep Valet Area Guide */}
      <section className="max-w-7xl mx-auto px-4 pt-6 pb-8">
        <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="max-w-3xl">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Islamabad & Rawalpindi Service Zones</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Local Area Coverage & Insured Valet Pickup
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Whether you are located in Sector O-9, DHA, Bahria Town, or central Islamabad F/G Sectors, we provide comprehensive workshop access with insured flatbed concierge pickup for major jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#070c14] border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white">Sector O-9 & Police Foundation</h3>
                <span className="text-[10px] bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800/50 font-bold">Flagship Hub</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">Central Avenue Block E. Full 8-bay facility, PPF clean room, 3D laser alignment & diagnostic lab.</p>
              <div className="text-[11px] text-cyan-300 font-medium">Areas: PWD, Media Town, CBR Town, Police Foundation</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070c14] border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white">DHA & Bahria Town</h3>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-bold">8–12 mins</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">Concierge valet vehicle pickup for luxury European sports cars, SUVs, PPF and engine overhauls.</p>
              <div className="text-[11px] text-cyan-300 font-medium">Areas: DHA Phase 1, 2, 3, 5 & Bahria Phases 1–8</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070c14] border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white">Sectors F-6, F-7, F-8, F-10, F-11</h3>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-bold">Valet Available</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">Executive diagnostics, periodic maintenance, and ceramic detailing with insured vehicle transport.</p>
              <div className="text-[11px] text-cyan-300 font-medium">Areas: F-6 Super, F-7 Jinnah, F-10/F-11 Markaz</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070c14] border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white">Sectors G-8, G-9, G-10, G-11, I-8</h3>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-bold">Full Maintenance</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">Computerized scanning, 3D laser alignment, synthetic oil packages, and brake overhauls.</p>
              <div className="text-[11px] text-cyan-300 font-medium">Areas: G-8, G-9, G-10, G-11, G-13 & I-8 Markaz</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070c14] border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white">Gulberg Greens & E-11</h3>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-bold">Direct Access</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">SUV & Sedan ceramic coating, PPF armor, suspension upgrades, and factory servicing.</p>
              <div className="text-[11px] text-cyan-300 font-medium">Areas: Gulberg Greens, E-11, B-17, Park View</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#070c14] border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white">Rawalpindi Cantt, Saddar & Chaklala</h3>
                <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800/50 font-bold">Expansion Hub</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">Expansion hub under development. Doorstep valet collection active for Rawalpindi residents.</p>
              <div className="text-[11px] text-cyan-300 font-medium">Areas: Saddar, Mall Road, Chaklala 3, Westridge</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
