import React from 'react';
import { PageId } from '../types';
import { locationsData } from '../data/locationsData';
import { images } from '../data/images';
import { ArrowLeft, MapPin, Phone, Clock, Navigation, CheckCircle2, Sparkles, Building2, MessageCircle, Calendar } from 'lucide-react';

interface LocationDetailProps {
  slug?: string;
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const LocationDetailView: React.FC<LocationDetailProps> = ({ slug, onNavigate, onOpenBooking }) => {
  const loc = locationsData.find((l) => l.slug === slug) || locationsData[0];

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-12">
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
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-cyan-400 font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{loc.city} Hub</span>
            </div>
            {loc.isOperational ? (
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Fully Operational
              </span>
            ) : (
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/50 font-extrabold text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Opening Soon • Under Development
              </span>
            )}
          </div>

          <h1 className="text-3xl lg:text-4xl font-black text-white">
            {loc.branchName}
          </h1>

          {loc.isOperational ? (
            <>
              {loc.address && (
                <p className="text-slate-300 text-sm leading-relaxed">
                  {loc.address}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0b121e] border border-slate-800 rounded-2xl space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Direct Hotline:</span>
                  <a href={`tel:${loc.phone}`} className="text-base font-black text-cyan-400 block hover:underline">
                    0333-0177717
                  </a>
                </div>
                {loc.hours && (
                  <div className="p-4 bg-[#0b121e] border border-slate-800 rounded-2xl space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">Working Hours:</span>
                    <span className="text-xs font-bold text-white block">{loc.hours.weekdays}</span>
                    <span className="text-[11px] font-bold text-amber-400 block">Friday: CLOSED (Weekly Off)</span>
                  </div>
                )}
              </div>

              {loc.workshopSpecs && loc.workshopSpecs.length > 0 && (
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
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {loc.googleMapsDirectionsUrl && (
                  <a
                    href={loc.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/30"
                  >
                    <Navigation className="w-4 h-4 text-slate-950" />
                    <span>Get Driving Directions</span>
                  </a>
                )}
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-xl bg-[#0b121e] border border-slate-800 text-white font-extrabold text-sm hover:bg-slate-800"
                >
                  Book Service Here
                </button>
              </div>
            </>
          ) : (
            /* Opening Soon state: address, timings, and branch specs are removed */
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#0b121e] to-slate-900 border border-amber-500/30 space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Official Development Notice</span>
                </div>
                <p className="text-amber-100 text-base md:text-lg font-semibold italic leading-relaxed">
                  &ldquo;{loc.statusNotice || 'Opening soon — our new branch is currently under development. Stay tuned for the official opening announcement.'}&rdquo;
                </p>
              </div>

              <div className="p-5 bg-[#0b121e] border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>Active Workshop Services at Islamabad Hub</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  While our Rawalpindi Hub is currently being prepared to meet our high automotive standards, our master technicians and computerized studio are fully ready to welcome you at our <strong className="text-white">Islamabad Flagship Hub</strong>.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="px-3 py-1 bg-[#070c14] border border-slate-800 rounded-lg">✓ Paint Protection Film (PPF)</span>
                  <span className="px-3 py-1 bg-[#070c14] border border-slate-800 rounded-lg">✓ Ceramic & Graphene Coating</span>
                  <span className="px-3 py-1 bg-[#070c14] border border-slate-800 rounded-lg">✓ German & Japanese Diagnostics</span>
                  <span className="px-3 py-1 bg-[#070c14] border border-slate-800 rounded-lg">✓ Engine & Suspension Overhaul</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/30"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Book at Islamabad Flagship Hub</span>
                </button>
                <button
                  onClick={() => onNavigate('location-detail', 'islamabad-workshop-g8')}
                  className="px-6 py-3.5 rounded-xl bg-[#0b121e] border border-slate-800 text-white font-extrabold text-sm hover:bg-slate-800"
                >
                  View Islamabad Hub
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right side: Map or Opening Soon Preview */}
        <div className="lg:col-span-5">
          {loc.isOperational && loc.googleMapEmbedUrl ? (
            <div className="rounded-3xl overflow-hidden border border-slate-800 h-96 lg:h-full min-h-[380px] shadow-2xl">
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
          ) : (
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 h-96 lg:h-full min-h-[380px] shadow-2xl flex flex-col justify-between p-8 bg-[#0b121e]">
              <img
                src={loc.image}
                alt={loc.branchName}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = images.rawalpindiHubBay;
                }}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-[#0b121e]/80 to-transparent" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 font-black text-xs uppercase px-3 py-1 rounded-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  Opening Soon • Under Development
                </span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl font-black text-white">{loc.branchName}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our next-generation automotive care and diagnostic facility is coming to Rawalpindi. Stay tuned for the official opening announcement.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
