import React from 'react';
import { PageId } from '../types';
import { FileText, Lock, ShieldCheck, CheckCircle2, AlertTriangle, Car, Wrench, ArrowRight } from 'lucide-react';

interface TermsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-24 md:pt-28 pb-20 max-w-5xl mx-auto px-4 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-extrabold text-xs uppercase tracking-widest">
          <FileText className="w-3.5 h-3.5" />
          <span>Workshop Service Governance & Agreement</span>
        </div>
        <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-black text-white">
          Terms & Conditions
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Clear, transparent operating terms for mechanical repairs, ECU remapping, vehicle storage, and spare parts authorization at <span className="text-cyan-400 font-bold">HyperTune Garage</span>.
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
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20"
        >
          <FileText className="w-4 h-4" />
          <span>Terms & Conditions</span>
        </button>
        <button
          onClick={() => onNavigate('warranty')}
          className="px-5 py-2.5 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 font-bold text-xs flex items-center gap-2 transition-all border border-slate-800"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Warranty Specs</span>
        </button>
      </div>

      {/* Main Content Body */}
      <div className="bg-[#070c14] border border-slate-800/80 rounded-3xl p-6 md:p-10 text-slate-300 space-y-8 shadow-xl">
        {/* Document Info Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs">
          <div>
            <span className="text-white font-bold block">Document Reference: HPG-TOS-2025</span>
            <span className="text-slate-400">Effective Date: January 1, 2025 • Applies to all Islamabad & Rawalpindi branches</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-extrabold text-[11px]">
            ● Standard Customer Agreement
          </span>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-cyan-400">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h2 className="text-xl font-extrabold text-white">Job Authorization & Work Estimates</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed pl-11">
            Before any teardown, mechanical repair, or ECU flashing begins, HyperTune Garage issues a digital job card and itemized estimate.
          </p>
          <ul className="space-y-2.5 pl-11 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Work begins only after explicit client approval provided via WhatsApp message, written estimate confirmation, or signed physical job card.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>If additional hidden damage (e.g., cracked cylinder block, worn clutch plate, metal filings in transmission pan) is discovered during teardown, work is paused and immediate video evidence is sent before proceeding with additional repair costs.</span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 border-t border-slate-800/80 pt-8">
          <div className="flex items-center gap-3 text-cyan-400">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h2 className="text-xl font-extrabold text-white">Genuine OEM Parts & Client-Supplied Components</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed pl-11">
            To uphold our high quality standards and back repairs with a 12-Month warranty, HyperTune Garage exclusively installs 100% genuine OEM spare parts with verifiable barcodes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-11 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>HyperTune Sourced Parts</span>
              </div>
              <p className="text-slate-400 leading-normal">
                Covered by our comprehensive 12-Month / 15,000 km warranty including both part replacement cost and workshop labor.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Client-Provided Spare Parts</span>
              </div>
              <p className="text-slate-400 leading-normal">
                If a customer supplies their own parts, installation labor is guaranteed for fitment, but no warranty is extended to the part itself or consequential damage.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 border-t border-slate-800/80 pt-8">
          <div className="flex items-center gap-3 text-cyan-400">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h2 className="text-xl font-extrabold text-white">Diagnostic Road Testing & Vehicle Handling</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed pl-11">
            By dropping off your vehicle at our Islamabad or Rawalpindi workshop, you authorize certified master engineers to operate the vehicle on public roads strictly for road testing, pre-repair fault reproduction, ECU logging, and post-repair quality verification.
          </p>
          <div className="pl-11 text-xs text-slate-400 space-y-2">
            <p className="flex items-center gap-2 text-slate-200 font-semibold">
              <Car className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Vehicles are stored in camera-monitored, gated facilities with 24/7 security.</span>
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 border-t border-slate-800/80 pt-8">
          <div className="flex items-center gap-3 text-cyan-400">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h2 className="text-xl font-extrabold text-white">Payment, Invoicing & Vehicle Delivery</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed pl-11">
            Full settlement of the invoice is due upon completion of services prior to vehicle handover. Payments are accepted via Cash, Direct Bank Transfer (IBFT), or Credit/Debit Cards.
          </p>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 pl-11">
            <span className="text-white font-bold block mb-1">Vehicle Pickup Window & Storage Notice</span>
            Customers are notified immediately upon job completion. Complimentary storage is provided for up to 5 business days after completion. Vehicles uncollected beyond 7 days without prior notification may incur a standard daily parking/holding charge.
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a1526] via-[#0e1e36] to-cyan-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-extrabold text-white">Need to check our 12-Month warranty coverage?</h3>
          <p className="text-slate-400 text-xs">Review full details on covered components, claim procedures, and warranty specs.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('warranty')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Read 12-Month Warranty Specs</span>
          </button>
        </div>
      </div>
    </div>
  );
};
