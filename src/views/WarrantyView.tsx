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
          <span>Clear Workshop Terms &amp; Written Coverage</span>
        </div>
        <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-black text-white">
          Warranty &amp; Service Terms
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Review how workmanship coverage, parts options, and product terms are confirmed on your <span className="text-cyan-400 font-bold">HyperTune Garage</span> estimate and final service invoice.
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
          <h3 className="font-bold text-white text-sm">Service-Specific Coverage</h3>
          <p className="text-slate-400 text-xs leading-relaxed">Written warranty terms depend on the repair scope and are stated on your job invoice.</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#070c14] border border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <FileCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-sm">Verified Parts Options</h3>
          <p className="text-slate-400 text-xs leading-relaxed">Workshop-supplied OEM or approved aftermarket part options are confirmed before fitting.</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#070c14] border border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-sm">Product Line Terms</h3>
          <p className="text-slate-400 text-xs leading-relaxed">PPF and coating coverage follows the specific film or product line selected at booking.</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#070c14] border border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-sm">Direct Invoice Verification</h3>
          <p className="text-slate-400 text-xs leading-relaxed">Submit your invoice receipt or vehicle registration via WhatsApp or at our workshop.</p>
        </div>
      </div>

      {/* Main Breakdown Specs */}
      <div className="bg-[#070c14] border border-slate-800/80 rounded-3xl p-6 md:p-10 text-slate-300 space-y-10 shadow-xl">
        {/* Document Info Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs">
          <div>
            <span className="text-white font-bold block">Workshop Coverage &amp; Verification Policy</span>
            <span className="text-slate-400">Applies to approved jobs at HyperTune Garage Islamabad Flagship Hub (serving Islamabad &amp; Rawalpindi)</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-[11px]">
            ● Written Terms Per Job
          </span>
        </div>

        {/* Breakdown by Service Category */}
        <section className="space-y-6">
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Wrench className="w-5 h-5 text-cyan-400" />
            <span>12-Month Written Parts Warranty — Eligible Repair Services</span>
          </h2>

          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-slate-300 leading-relaxed">
            <strong className="text-emerald-400 block mb-1">12-Month Written Parts Warranty</strong>
            Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer&apos;s or supplier&apos;s warranty terms, component eligibility and applicable conditions. Exact coverage is confirmed on the service estimate and final invoice. Labour, consumables and unrelated components are not automatically covered.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Engine & Overhaul */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-sm">Engine Overhaul &amp; Repair</span>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 font-bold border border-cyan-500/30 text-[10px]">
                  12-Month Parts Terms
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer&apos;s or supplier&apos;s warranty terms, component eligibility and applicable conditions.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Coverage confirmed on estimate and final invoice</span>
              </div>
            </div>

            {/* Transmission */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-sm">Transmission &amp; Drivetrain Repair</span>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 font-bold border border-cyan-500/30 text-[10px]">
                  12-Month Parts Terms
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer&apos;s or supplier&apos;s warranty terms, component eligibility and applicable conditions.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Road-test and fluid-level check completed before delivery</span>
              </div>
            </div>

            {/* Brake & Suspension */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-sm">Brake, Suspension &amp; Steering</span>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 font-bold border border-cyan-500/30 text-[10px]">
                  12-Month Parts Terms
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer&apos;s or supplier&apos;s warranty terms, component eligibility and applicable conditions.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Component eligibility specified in writing on invoice</span>
              </div>
            </div>

            {/* Car AC Repair */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-sm">Car AC Repair &amp; Cooling</span>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 font-bold border border-cyan-500/30 text-[10px]">
                  12-Month Parts Terms
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Eligible replacement parts may carry a written warranty of up to 12 months, subject to the individual manufacturer&apos;s or supplier&apos;s warranty terms, component eligibility and applicable conditions.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Pressure check and part terms recorded at handover</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
            <strong className="text-white">PPF, Ceramic Coating &amp; Other Services:</strong> Protection films, ceramic coatings, maintenance consumables, and body/wrap services follow the specific product-line terms and service scope confirmed on your estimate at booking rather than the 12-month repair parts warranty.
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
              <p className="text-slate-400">Bring the vehicle to our HyperTune Garage Islamabad Flagship Hub for physical and diagnostic verification.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#09111e] border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-black text-lg block">Step 3</span>
              <span className="font-bold text-white block">Scope Rectification</span>
              <p className="text-slate-400">Eligible faults covered under your written invoice terms are rectified according to the approved scope.</p>
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
              <li>Unauthorized modification or repair attempts by third-party garages.</li>
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
          <h3 className="text-xl font-extrabold text-white">Book Your Workshop Inspection Today</h3>
          <p className="text-slate-400 text-xs">Receive a clear diagnostic evaluation, itemized estimate, and written service terms before work begins.</p>
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
