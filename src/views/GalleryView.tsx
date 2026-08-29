import React, { useState } from 'react';
import { PageId } from '../types';
import { galleryData } from '../data/galleryData';
import { images } from '../data/images';
import { Sparkles, ZoomIn, X } from 'lucide-react';

interface GalleryViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeCat, setActiveCat] = useState('all');
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const filtered = activeCat === 'all'
    ? galleryData
    : galleryData.filter((g) => g.category === activeCat);

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-12">
      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Visual Proof of Craftsmanship
          </span>
          <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-black text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">HyperTune Garage</span> Workshop Gallery
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            High-resolution photography from our Islamabad & Rawalpindi workshops featuring precision engine overhauls, transmission repairs on popular brands, and 9H ceramic PPF detailing.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['all', 'Engine Overhaul', 'Transmission & Gearbox', 'Popular Brands Repair', 'Ceramic & PPF', 'Suspension & Brakes', 'Hybrid Battery'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCat === cat
                  ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/30'
                  : 'bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Portfolio' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item.image)}
              className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-all group shadow-xl"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = images.heroBanner;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-[#0b121e]/20 to-transparent" />
                <span className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-lg">
                  {item.category}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/60 backdrop-blur-xs">
                  <ZoomIn className="w-8 h-8 text-cyan-400" />
                </div>
              </div>

              <div className="p-5 space-y-1">
                <span className="text-[11px] font-bold text-cyan-400">{item.vehicle}</span>
                <h3 className="font-bold text-base text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-cyan-400 font-bold"
              aria-label="Close Image Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeModalImage}
              alt="Gallery Preview"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full rounded-2xl shadow-2xl max-h-[85vh] object-contain border border-slate-800"
            />
          </div>
        </div>
      )}
    </div>
  );
};
