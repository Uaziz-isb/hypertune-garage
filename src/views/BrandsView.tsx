import React from 'react';
import { PageId } from '../types';
import { brandsData } from '../data/brandsData';
import { SEOHead } from '../components/SEOHead';
import { Shield, Wrench, CheckCircle2, ChevronRight, Phone, MessageSquare, Award, ArrowRight } from 'lucide-react';

interface BrandsViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
}

export const BrandsView: React.FC<BrandsViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen">
      <SEOHead
        title="Vehicle Brand Specialists in Islamabad & Rawalpindi | HyperTune Garage"
        description="Certified master technicians for Toyota, Honda, Suzuki, Hyundai, Kia, Changan, Haval, MG, BYD, Chery, Isuzu, FAW, Daihatsu, Nissan, Mitsubishi, Mazda, Subaru, Lexus, Land Rover, Range Rover, Jeep, Ford, Chevrolet & Volvo in Islamabad."
        keywords="toyota repair islamabad, honda specialist rawalpindi, suzuki service center, hyundai maintenance, kia sportage repair, changan workshop, haval specialist, byd ev service, lexus hybrid battery, land rover repair islamabad"
        path="/brands/"
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/60 via-[#030712] to-[#030712]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Specialized Brand Divisions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Factory-Grade Specialist Care for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">24 Vehicle Brands</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300">
            Dedicated master technicians, genuine OEM diagnostic scanners (Toyota Techstream, Honda HDS, Suzuki SDT-II, Hyundai GDS, Kia KDS, JLR Pathfinder, BYD VDS3.0, Nissan Consult, Subaru SSM4), and cleanroom overhaul bays in Islamabad and Rawalpindi.
          </p>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandsData.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onNavigate('brand-detail', brand.slug)}
              className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={brand.heroImage}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-cyan-600/90 text-white text-xs font-bold px-3 py-1 rounded-md backdrop-blur-sm">
                  {brand.logoBadge}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {brand.name}
                  </h2>
                  <p className="text-xs text-cyan-400/90 font-medium mt-1 mb-3">
                    {brand.tagline}
                  </p>
                  <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                    {brand.overview}
                  </p>

                  <div className="border-t border-slate-800 pt-3">
                    <p className="text-xs font-semibold text-slate-300 mb-2">Models Serviced:</p>
                    <ul className="text-xs text-slate-400 space-y-1">
                      {brand.modelsCovered.slice(0, 3).map((model, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                          <span className="truncate">{model}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Diagnostics: <span className="text-slate-200">{brand.diagnosticSoftware.split(',')[0]}</span>
                  </span>
                  <span className="text-cyan-400 text-xs font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Brand <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-12 bg-slate-900/80 border-t border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Need a Dealer-Grade Diagnostic Health Scan?</h3>
            <p className="text-slate-300 text-sm mt-1">Book your vehicle inspection at our Islamabad Flagship Hub or request insured valet pickup.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage,%20I%20would%20like%20to%20book%20a%20brand-specific%20diagnostic%20scan."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-emerald-900/30"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Specialist
            </a>
            <button
              onClick={() => onNavigate('booking')}
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Book Online <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
