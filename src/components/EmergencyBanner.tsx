import React from 'react';
import { Phone, AlertTriangle, Truck, MessageCircle } from 'lucide-react';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 text-white py-3.5 px-4 shadow-lg shadow-cyan-950/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-slate-950/30 flex items-center justify-center shrink-0 animate-pulse border border-cyan-300/40">
            <AlertTriangle className="w-5 h-5 text-cyan-200" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-950 drop-shadow-sm">
              24/7 Roadside Breakdown & Towing Emergency Service
            </h4>
            <p className="text-xs text-cyan-100 hidden md:block">
              Stuck on Kashmir Highway, Islamabad Expressway, GT Road, or Motorway M-2? Flatbed towing dispatch available.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+923315008872"
            className="px-3.5 py-1.5 rounded-lg bg-slate-950 text-cyan-400 font-extrabold text-xs flex items-center gap-1.5 shadow-md hover:bg-slate-900 transition-colors border border-cyan-400/30"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Emergency: 0331-5008872</span>
          </a>
          <a
            href="https://wa.me/923330177717?text=EMERGENCY%20BREAKDOWN%3A%20I%20need%20immediate%20towing/assistance%20in%20Islamabad/Rawalpindi."
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md hover:bg-emerald-500 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Emergency</span>
          </a>
        </div>
      </div>
    </div>
  );
};
