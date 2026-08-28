import React, { useState } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { images } from '../data/images';
import { SEOHead } from '../components/SEOHead';
import {
  Wrench,
  Clock,
  ArrowRight,
  ShieldCheck,
  Shield,
  Sparkles,
  Cpu,
  Activity,
  Disc,
  Settings,
  Wind,
  Zap,
  Flame,
  Search,
  Palette,
  CheckCircle2
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

// Map service icon names to Lucide icon components
const iconMap: Record<string, React.ElementType> = {
  Cpu: Cpu,
  Activity: Activity,
  Disc: Disc,
  Settings: Settings,
  Wind: Wind,
  Zap: Zap,
  Flame: Flame,
  Search: Search,
  Palette: Palette,
  ShieldCheck: ShieldCheck,
  Shield: Shield,
  Sparkles: Sparkles,
  Wrench: Wrench,
};

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeTab);

  const categoryFilters = [
    { id: 'all', label: 'All 13 Services' },
    { id: 'protection', label: 'Paint Protection Film (PPF)' },
    { id: 'detailing', label: 'Car Detailing & Ceramic' },
    { id: 'engine', label: 'Engine Overhaul & Services' },
    { id: 'diagnostics', label: 'Inspection & Diagnostics' },
    { id: 'maintenance', label: 'Maintenance & Servicing' },
    { id: 'suspension', label: 'Brake, Suspension & Steering' },
    { id: 'transmission', label: 'Transmission & Drivetrain' },
    { id: 'wrap', label: 'Vehicle Wrap & Color' },
    { id: 'body', label: 'Body Repair & Oven Paint' },
    { id: 'modification', label: 'Body Kit & Modification' },
    { id: 'hybrid', label: 'Hybrid & EV Battery' },
    { id: 'electrical', label: 'Car AC & Auto Electrical' },
  ];

  return (
    <div className="pt-32 md:pt-36 pb-16 space-y-12">
      <SEOHead
        title="Automotive Services Catalogue | HyperTune Garage Islamabad & Rawalpindi"
        description="Explore 12 specialized automotive service categories in Islamabad & Rawalpindi: Engine Overhaul, Maintenance, Brakes, Transmission, Hybrid Battery, AC & Electrical, Diagnostics, Body Repair, PPF & Detailing."
        canonicalUrl="https://hypertunegarage.pk/services"
      />

      {/* Header Banner */}
      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-cyan-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>12 Core Automotive Service Categories • Dealer-Level Standards</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Automotive Services & Specializations
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            HyperTune Garage offers 13 comprehensive automotive service categories across Islamabad & Rawalpindi. Each service is executed by certified engineers utilizing state-of-the-art diagnostic equipment and 100% genuine OEM parts.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categoryFilters.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 10 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            return (
              <div
                key={service.id}
                className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-cyan-950/40"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - HyperTune Garage`}
                      width={400}
                      height={224}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = images.islamabadPpfStudio;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-[#0b121e]/40 to-transparent" />
                    
                    {/* Floating Icon & Category Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-lg">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="absolute top-4 right-4 bg-cyan-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 font-extrabold text-[10px] uppercase px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6 space-y-4">
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h2>

                    {/* Sub-services & Individual Price Ranges */}
                    <div className="space-y-1.5 bg-[#070c14] p-3 rounded-2xl border border-slate-800/80">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                        Sub-Service Price Ranges:
                      </span>
                      {service.subServicePrices ? (
                        service.subServicePrices.map((sub, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[11px] gap-2">
                            <span className="font-semibold text-slate-300 flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                              <span className="truncate">{sub.name}</span>
                            </span>
                            <span className="font-extrabold text-cyan-400 shrink-0 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                              {sub.price}
                            </span>
                          </div>
                        ))
                      ) : (
                        service.subServices.map((sub, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[11px] gap-2">
                            <span className="font-semibold text-slate-300 flex items-center gap-1.5 truncate">
                              <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                              <span className="truncate">{sub}</span>
                            </span>
                          </div>
                        ))
                      )}
                    </div>

                    {/* 40-60 Words SEO Description */}
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        {service.estimatedTime}
                      </span>
                      <span className="font-extrabold text-cyan-400">{service.priceRange}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => onNavigate('service-detail', service.slug)}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-slate-900 to-[#070c14] hover:bg-slate-800 text-cyan-400 font-bold text-xs border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/30 active:scale-95 transition-all"
                  >
                    <Wrench className="w-4 h-4 text-slate-950" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
