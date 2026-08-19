import React, { useState } from 'react';
import { Calculator, Clock, ShieldCheck, CheckCircle2, Wrench } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface CostEstimatorProps {
  onBookService?: (serviceId: string) => void;
}

const estimatorBrands = [
  { id: 'honda', name: 'Honda' },
  { id: 'toyota', name: 'Toyota' },
  { id: 'nissan', name: 'Nissan' },
  { id: 'suzuki', name: 'Suzuki' },
  { id: 'changan', name: 'Changan' },
  { id: 'mg', name: 'MG' },
  { id: 'hyundai', name: 'Hyundai / Kia' },
];

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onBookService }) => {
  const [selectedBrand, setSelectedBrand] = useState('toyota');
  const [selectedServiceId, setSelectedServiceId] = useState('ecu-tuning');

  const activeService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];
  const activeBrand = estimatorBrands.find((b) => b.id === selectedBrand) || estimatorBrands[0];

  return (
    <div className="bg-[#0b121e] border border-cyan-500/20 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold">
          <Calculator className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Instant Repair & Maintenance Cost Estimator</h3>
          <p className="text-xs text-slate-400">Select your vehicle & required service to view estimated repair costs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-4">
          {/* Brand Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
              1. Select Vehicle Make
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {estimatorBrands.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBrand(b.id)}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all text-center ${
                    selectedBrand === b.id
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20 font-extrabold'
                      : 'bg-[#070c14] text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
              2. Select Required Service
            </label>
            <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
              {servicesData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedServiceId(s.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold border transition-all text-left ${
                    selectedServiceId === s.id
                      ? 'bg-cyan-950/40 border-cyan-500 text-white'
                      : 'bg-[#070c14] text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="truncate pr-2">{s.title}</span>
                  <span className="text-cyan-400/80 text-[11px] shrink-0 font-semibold">{s.priceRange.split('-')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Estimate Output Box */}
        <div className="lg:col-span-6 bg-[#070c14] border border-cyan-500/20 rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
                  Estimated Repair Cost
                </span>
                <h4 className="text-lg font-black text-white">{activeService.title}</h4>
                <p className="text-xs text-cyan-400 font-semibold mt-0.5">Vehicle: {activeBrand.name}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Est Price Range</span>
                <span className="text-lg md:text-xl font-black text-cyan-400">
                  {activeService.priceRange}
                </span>
              </div>
            </div>

            <div className="py-4 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Estimated Time Required: <strong className="text-white">{activeService.estimatedTime}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Included Protection: <strong className="text-white">12-Month / 15,000km Warranty</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Parts Guarantee: <strong className="text-white">100% Genuine OEM Barcode Sourced</strong></span>
              </div>

              {activeService.subServicePrices && activeService.subServicePrices.length > 0 && (
                <div className="pt-3 border-t border-slate-800 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Sub-Service Price List:
                  </span>
                  {activeService.subServicePrices.map((sub, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[11px] bg-[#0b121e] px-2.5 py-1 rounded-lg border border-slate-800">
                      <span className="text-slate-300 font-semibold">{sub.name}</span>
                      <span className="text-cyan-400 font-bold">{sub.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {onBookService && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onBookService(selectedServiceId)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all"
                >
                  <Wrench className="w-4 h-4 text-slate-950" />
                  <span>Book Service Appointment for this Estimate</span>
                </button>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 text-center italic">
            * Estimated price range based on standard vehicle specs. Final quote confirmed after diagnostic evaluation.
          </div>
        </div>
      </div>
    </div>
  );
};
