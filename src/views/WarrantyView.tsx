import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Award, CheckCircle2, AlertTriangle, FileCheck, PhoneCall, RefreshCw, Sparkles, Wrench, Lock, FileText, ArrowRight } from 'lucide-react';

interface WarrantyViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const WarrantyView: React.FC<WarrantyViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-20 max-w-5xl mx-auto px-4 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-extrabold text-xs uppercase tracking-widest">
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          <span>Industry-Leading Peace of Mind Assurance</span>
        </div>
        <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-black text-white">
          12-Month Warranty Specs
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Every repair, engine overhaul, transmission rebuild, and detailing project at <span className="text-cyan-400 font-bold">HyperTune Garage</span> is backed by our comprehensive warranty and barcode OEM part guarantee.
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 p-2 bg-[#0a101d] border border-slate-800 rounded-2xl">
        <button
          onClick={() => onNavigate('privacy')}
          className="px-5 py-2.5 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 font-bold text-xs flex items-center gap-2 transition-all border border-slate-800"
        >
          <Lock className="w-4 h-4" />
          <span>Privacy Policy</span>
        </button>
        <button
          onClick={() => onNavigate('terms')}
          className="px-5 py-2.5 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 font-bold text-xs flex items-center gap-2 transition-all border border-slate-800"
        >
          <FileText className="w-4 h-4" />
          <span>Terms & Conditions</span>
        </button>
        <button
          onClick={() => onNavigate('warranty')}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Warranty Specs</span>
        </button>
      </div>

      {/* 4 Feature Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#070c14] border border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-sm">12 Months / 15,000 KM</h3>
          <p className="text-slate-400 text-xs leading-relaxed">Standard coverage on all major mechanical repairs and overhaul jobs.</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#070c14] border border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <FileCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-sm">100% Genuine Barcode Parts</h3>
          <p className="text-slate-400 text-xs leading-relaxed">Direct manufacturer OEM parts with digital barcode verification.</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#070c14] border border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-sm">Up to 10-Year PPF Film Guarantee</h3>
          <p className="text-slate-400 text-xs leading-relaxed">Self-healing TPU film with non-yellowing & anti-bubbling warranty.</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#070c14] border border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-sm">Hassle-Free Direct Claims</h3>
          <p className="text-slate-400 text-xs leading-relaxed">Instant claim verification via WhatsApp or direct workshop visit.</p>
        </div>
      </div>

      {/* Main Breakdown Specs */}
      <div className="bg-[#070c14] border border-slate-800/80 rounded-3xl p-6 md:p-10 text-slate-300 space-y-10 shadow-xl">
        {/* Document Info Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs">
          <div>
            <span className="text-white font-bold block">Warranty Document Reference: HPG-WRN-2025</span>
            <span className="text-slate-400">Valid across Islamabad G-8 Hub & Rawalpindi / I-9 Industrial Branch</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-[11px]">
            ● Verified Workshop Protection
          </span>
        </div>

        {/* Breakdown by Service Category */}
        <section className="space-y-6">
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Wrench className="w-5 h-5 text-cyan-400" />
            <span>Coverage Specification Breakdown</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Engine & Overhaul */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-sm">Engine Repair & Overhaul</span>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 font-bold border border-cyan-500/30 text-[10px]">
                  12 Months / 15,000 KM
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Covers replaced internal engine parts (pistons, rings, bearings, valves, cylinder head gasket), machine work, and workshop assembly labor.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Includes free 1,000 KM post-overhaul checkup & oil inspection</span>
              </div>
            </div>

            {/* Transmission */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-sm">Automatic & CVT Transmission Rebuild</span>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 font-bold border border-cyan-500/30 text-[10px]">
                  12 Months / 15,000 KM
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Covers torque converter, solenoid body seals, clutch pack replacements, and diagnostic adaptation calibration.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Full fluid pressure & shift logic guarantee</span>
              </div>
            </div>

            {/* Brake & Suspension */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-sm">Suspension, Steering & Brakes</span>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 font-bold border border-cyan-500/30 text-[10px]">
                  6 Months to 12 Months
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Covers air struts, steering racks, shock absorbers, control arms, and brake calipers supplied and fitted by HyperTune.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Includes complimentary 3D laser alignment re-check</span>
              </div>
            </div>

            {/* PPF & Ceramic */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-sm">PPF Film & Ceramic Coating</span>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 font-bold border border-cyan-500/30 text-[10px]">
                  5 to 10 Year Film Warranty
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Covers TPU film yellowing, peeling, bubbling, delamination, and self-healing thermal reaction failure.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Includes free annual hydrophobic maintenance top-up</span>
              </div>
            </div>
          </div>
        </section>

        {/* Claim Procedure */}
        <section className="space-y-4 border-t border-slate-800/80 pt-8">
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-cyan-400" />
            <span>How to File a Fast Warranty Claim</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-[#09111e] border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-black text-lg block">Step 1</span>
              <span className="font-bold text-white block">Digital Verification</span>
              <p className="text-slate-400">Provide your digital invoice receipt or registered vehicle plate number to our service team.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#09111e] border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-black text-lg block">Step 2</span>
              <span className="font-bold text-white block">Workshop Inspection</span>
              <p className="text-slate-400">Bring the vehicle to any HyperTune location in Islamabad or Rawalpindi for quick computer diagnostic verification.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#09111e] border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-black text-lg block">Step 3</span>
              <span className="font-bold text-white block">Immediate Rectification</span>
              <p className="text-slate-400">Defective parts are replaced with brand new OEM units at zero cost for parts or labor.</p>
            </div>
          </div>
        </section>

        {/* Warranty Exclusions / Void Conditions */}
        <section className="space-y-4 border-t border-slate-800/80 pt-8">
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span>Standard Warranty Exclusions</span>
          </h2>
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-slate-300 space-y-2">
            <p className="text-amber-400 font-bold">The following conditions void warranty coverage:</p>
            <ul className="space-y-1.5 text-slate-400 list-disc list-inside">
              <li>Unauthorized modification or repair attempts by uncertified third-party roadside garages.</li>
              <li>Engine overheating or oil starvation caused by continuing to drive after low oil/coolant warning lights illuminate.</li>
              <li>Accidental collision damage, extreme off-road abuse, or water immersion (flooding).</li>
              <li>Client-supplied parts or non-recommended contaminated fuel/fluids.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a1526] via-[#0e1e36] to-cyan-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-extrabold text-white">Book Your Guaranteed Workshop Inspection Today</h3>
          <p className="text-slate-400 text-xs">Experience dealer-grade precision, digital inspection videos, and 12-Month warranty protection.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
          >
            Book Online Now
          </button>
          <a
            href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20want%20to%20inquire%20about%20warranty%20coverage."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 transition-all"
          >
            <PhoneCall className="w-4 h-4 text-cyan-400" />
            <span>WhatsApp Warranty Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
};
