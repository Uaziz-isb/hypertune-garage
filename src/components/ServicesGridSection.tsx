import React, { useState } from 'react';
import { Sparkles, Wrench } from 'lucide-react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { images } from '../data/images';

interface ServicesGridSectionProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

// Split out from HomeView so the 55KB servicesData file loads as its own chunk,
// after the hero/above-fold content has already painted (Mobile PageSpeed optimization).
export const ServicesGridSection: React.FC<ServicesGridSectionProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const premiumIds = [
    'paint-protection-film-ppf',
    'car-detailing',
    'vehicle-wrap',
    'body-repair-paint',
    'body-modification',
  ];

  const filteredServices = activeCategory === 'premium'
    ? servicesData.filter((s) => premiumIds.includes(s.id))
    : activeCategory === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 space-y-8 cv-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Automotive Engineering & Studio Offerings
          </span>
          <h2 className="text-3xl font-black text-white">All Main Services</h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All 13 Services' },
            { id: 'premium', label: '★ 5 Premium Services' },
            { id: 'protection', label: 'PPF' },
            { id: 'detailing', label: 'Detailing' },
            { id: 'engine', label: 'Engine' },
            { id: 'diagnostics', label: 'Diagnostics' },
            { id: 'maintenance', label: 'Maintenance' },
            { id: 'suspension', label: 'Brakes & Suspension' },
            { id: 'transmission', label: 'Transmission' },
            { id: 'wrap', label: 'Vehicle Wrap' },
            { id: 'body', label: 'Body & Paint' },
            { id: 'modification', label: 'Body Kits' },
            { id: 'hybrid', label: 'Hybrid & EV' },
            { id: 'tuning', label: 'ECU Tuning' },
            { id: 'electrical', label: 'AC & Electrical' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md shadow-cyan-500/30'
                  : 'bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = images.islamabadPpfStudio;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-transparent to-transparent" />
                <span className="absolute top-3 right-3 bg-[#05080e]/90 text-cyan-400 border border-cyan-500/30 font-bold text-[10px] uppercase px-2.5 py-1 rounded-lg">
                  {service.category}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Est Range:</span>
                  <span className="font-extrabold text-cyan-400">{service.priceRange.split('-')[0]}</span>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center gap-2">
              <button
                onClick={() => onNavigate('service-detail', service.slug)}
                className="flex-1 py-2.5 rounded-xl bg-[#070c14] hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800 transition-colors text-center"
              >
                Read Technical Specs
              </button>
              <button
                onClick={() => onOpenBooking(service.id)}
                className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold transition-colors"
                title="Book Service"
                aria-label={`Book ${service.title}`}
              >
                <Wrench className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
