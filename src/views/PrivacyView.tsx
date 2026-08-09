import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Lock, FileText, CheckCircle2, PhoneCall, ArrowRight, Eye, Database, Bell } from 'lucide-react';

interface PrivacyViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-24 md:pt-28 pb-20 max-w-5xl mx-auto px-4 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-extrabold text-xs uppercase tracking-widest">
          <Lock className="w-3.5 h-3.5" />
          <span>Data Security & Protection Standards</span>
        </div>
        <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-black text-white">
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          At <span className="text-cyan-400 font-bold">HyperTune Garage</span>, we prioritize client confidentiality, vehicle data security, and total operational transparency across our Islamabad and Rawalpindi workshops.
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 p-2 bg-[#0a101d] border border-slate-800 rounded-2xl">
        <button
          onClick={() => onNavigate('privacy')}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20"
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
          className="px-5 py-2.5 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 font-bold text-xs flex items-center gap-2 transition-all border border-slate-800"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Warranty Specs</span>
        </button>
      </div>

      {/* Main Content Body */}
      <div className="bg-[#070c14] border border-slate-800/80 rounded-3xl p-6 md:p-10 text-slate-300 space-y-8 shadow-xl">
        {/* Effective Date & Notice */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs">
          <div>
            <span className="text-white font-bold block">Document Reference: HPG-PRIV-2025</span>
            <span className="text-slate-400">Effective Date: January 1, 2025 • Applies to all Islamabad & Rawalpindi branches</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-[11px]">
            ● Active Policy
          </span>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-cyan-400">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h2 className="text-xl font-extrabold text-white">Information We Collect</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed pl-11">
            HyperTune Garage collects essential operational details to manage your vehicle maintenance lifecycle, generate digital diagnostic reports, and issue valid warranty certificates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-11 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Database className="w-4 h-4 text-cyan-400" />
                <span>Vehicle Identification Data</span>
              </div>
              <p className="text-slate-400 leading-normal">
                Make, model, year, VIN number, license plate, mileage, engine code, and ECU software checksums for precise part matching and tuning records.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Bell className="w-4 h-4 text-cyan-400" />
                <span>Customer Contact Information</span>
              </div>
              <p className="text-slate-400 leading-normal">
                Name, mobile phone number, WhatsApp contact, and email address used strictly for job card updates, video inspection proofs, and invoicing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 border-t border-slate-800/80 pt-8">
          <div className="flex items-center gap-3 text-cyan-400">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h2 className="text-xl font-extrabold text-white">Digital Health Inspection Videos & Media</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed pl-11">
            As part of our standard operating procedure, master mechanics capture high-definition photos and video footage of worn components, oil condition, subframe bushings, and live OBD-II scanner readings.
          </p>
          <ul className="space-y-2.5 pl-11 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Diagnostic video clips are shared directly with you over secure WhatsApp threads for transparent job estimates.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Before-and-after work photos may be archived internally for quality assurance and warranty claim verification.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Public promotional usage of vehicle footage (such as PPF transformations or custom ECU dyno runs) is restricted to anonymized vehicle views with license plates digitally blurred upon request.</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 border-t border-slate-800/80 pt-8">
          <div className="flex items-center gap-3 text-cyan-400">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h2 className="text-xl font-extrabold text-white">Data Confidentiality & Zero Third-Party Selling</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed pl-11">
            We operate with strict privacy boundaries. HyperTune Garage <strong className="text-white">never sells, rents, or trades</strong> your personal information, phone number, or vehicle history to third-party telemarketers, insurance brokers, or advertisement networks.
          </p>
          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-slate-300 pl-11 flex items-start gap-3">
            <Eye className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              Your contact details are strictly accessed by authorized workshop service advisors and management to send job status updates, invoice receipts, and scheduled maintenance reminders.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 border-t border-slate-800/80 pt-8">
          <div className="flex items-center gap-3 text-cyan-400">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h2 className="text-xl font-extrabold text-white">Your Data Access Rights</h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed pl-11">
            You have full control over your customer profile. At any time, you may request a copy of your vehicle repair history log, update contact details, or request total removal of non-mandatory contact data.
          </p>
          <div className="pl-11 pt-2">
            <a
              href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20have%20a%20privacy%20or%20data%20request."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Contact Data Protection Advisor via WhatsApp (+92 333 0177717)</span>
            </a>
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0a1526] via-[#0e1e36] to-cyan-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-extrabold text-white">Have questions about workshop terms or warranty?</h3>
          <p className="text-slate-400 text-xs">Review our detailed Terms & Conditions or check full 12-Month Warranty Specs.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('terms')}
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 transition-all"
          >
            <span>Terms & Conditions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('warranty')}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Warranty Specs</span>
          </button>
        </div>
      </div>
    </div>
  );
};
