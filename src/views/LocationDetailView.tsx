import React from 'react';
import { PageId } from '../types';
import { locationsData } from '../data/locationsData';
import { images } from '../data/images';
import { ArrowLeft, MapPin, Phone, Clock, Navigation, CheckCircle2, MessageCircle, Sparkles, Building2 } from 'lucide-react';

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
          <span>Back to Locations</span>
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
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
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
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  {loc.address}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0b121e] border border-slate-800 rounded-2xl space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Direct Hotline:</span>
                  <a href={`tel:${loc.phone}`} className="text-base font-black text-cyan-400 block hover:underline">
                    {loc.phone}
                  </a>
                </div>
                {loc.hours && (
                  <div className="p-4 bg-[#0b121e] border border-slate-800 rounded-2xl space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">Working Hours:</span>
                    <span className="text-xs font-bold text-white block">{loc.hours.weekdays}</span>
                    <span className="text-[11px] font-bold text-amber-400 block">{loc.hours.friday}</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="p-5 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-200 text-sm leading-relaxed space-y-3">
              <p className="font-bold flex items-center gap-2 text-amber-300">
                <Sparkles className="w-4 h-4" />
                Upcoming Facility Announcement
              </p>
              <p>
                {loc.statusNotice || 'Opening soon — our new Rawalpindi branch is currently under development. Stay tuned for the official opening announcement.'}
              </p>
              <p className="text-xs text-slate-300">
                All Rawalpindi clients are currently served by our active Islamabad Flagship Hub. We provide insured valet vehicle pick-up & drop-off across all sectors of Rawalpindi (Saddar, Cantt, Bahria Town, DHA, Chaklala, Westridge).
              </p>
            </div>
          )}

          {loc.workshopSpecs && loc.workshopSpecs.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-white uppercase tracking-wider">
                {loc.isOperational ? 'Facility Specifications:' : 'Planned Specifications & Capabilities:'}
              </h3>
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
            {loc.isOperational ? (
              <>
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
              </>
            ) : (
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/30"
              >
                <span>Book Service at Islamabad Hub</span>
              </button>
            )}

            <a
              href={`https://wa.me/${loc.whatsapp || '923330177717'}?text=Hi%20HyperTune%20Garage%2C%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(loc.branchName)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

        {/* Right side: Map or Image */}
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
            <div className="rounded-3xl overflow-hidden border border-slate-800 h-96 lg:h-full min-h-[380px] shadow-2xl relative bg-[#0b121e] flex flex-col justify-end p-8">
              <img
                src={loc.image}
                alt={loc.branchName}
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-[#0b121e]/70 to-transparent" />
              <div className="relative z-10 space-y-3">
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs px-3 py-1 rounded-full font-bold inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Under Construction
                </span>
                <h4 className="text-xl font-black text-white">{loc.branchName}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our engineering team is setting up cutting-edge PPF Clean Rooms, 3D laser alignment bays, and master diagnostics workstations for our upcoming Rawalpindi Hub.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
