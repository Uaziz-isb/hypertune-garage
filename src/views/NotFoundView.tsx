import React from 'react';
import { PageId } from '../types';
import { SEOHead } from '../components/SEOHead';
import {
  Wrench,
  ShieldCheck,
  Compass,
  ArrowLeft,
  MessageCircle,
  MapPin,
  Car,
  Search
} from 'lucide-react';

interface NotFoundViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 md:pt-40 pb-20 px-4 max-w-5xl mx-auto">
      <SEOHead
        title="404 - Page Not Found | HyperTune Garage Islamabad"
        description="The requested page could not be found. Explore HyperTune Garage automotive services, brand specialists, and workshop locations in Islamabad & Rawalpindi."
        path="/404/"
      />

      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-500/30 px-4 py-1.5 rounded-full text-red-400 font-bold text-xs uppercase tracking-wider">
          <span>Error 404 • Page Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Oops! That Page Doesn't Exist
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          The link you followed may be broken, or the page may have been moved. Explore our precision automotive services, brand specialists, or book a service appointment.
        </p>

        {/* Quick Action Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigate('home')}
            className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/20 flex items-center gap-2 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
          <a
            href="https://wa.me/923330177717"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 active:scale-95 transition-all shadow-lg shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Directory Shortcuts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        <div
          onClick={() => onNavigate('services')}
          className="cursor-pointer group p-6 rounded-2xl bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl"
        >
          <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
            <Wrench className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            13 Core Services
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Paint Protection Film (PPF), ceramic detailing, engine overhauls, transmissions, AC recharging & diagnostics.
          </p>
        </div>

        <div
          onClick={() => onNavigate('brands')}
          className="cursor-pointer group p-6 rounded-2xl bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl"
        >
          <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
            <Car className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            Brand Specialists
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Specialist maintenance & OEM diagnostic rigs for BMW, Mercedes, Audi, Porsche, Toyota Hybrid, and 24 brands.
          </p>
        </div>

        <div
          onClick={() => onNavigate('locations')}
          className="cursor-pointer group p-6 rounded-2xl bg-[#0b121e] border border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl sm:col-span-2 lg:col-span-1"
        >
          <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            Workshop Locations
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Flagship Studio in Police Foundation (Sector O-9), Islamabad and our upcoming Rawalpindi Hub.
          </p>
        </div>
      </div>
    </div>
  );
};
