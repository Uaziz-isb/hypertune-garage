import React, { useState } from 'react';
import { PageId } from '../types';
import { faqData } from '../data/faqData';
import { ChevronDown, HelpCircle, CheckCircle2, ShieldCheck, ArrowRight, FileText, Sparkles } from 'lucide-react';

interface FAQViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [activeCat, setActiveCat] = useState<string>('all');

  const filtered = activeCat === 'all'
    ? faqData
    : faqData.filter((f) => f.category === activeCat);

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-12">
      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Detailed Technical Guide & Procedures</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Comprehensive, 300+ word technical explanations covering Paint Protection Film (PPF), popular Pakistani vehicle diagnostics, engine overhaul specifications, hybrid battery testing, and workshop procedures.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            'all',
            'PPF & Paint Protection',
            'Popular Car Brands',
            'Engine & Overhaul',
            'Hybrid & EV',
            'General & Booking',
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCat === cat
                  ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/30'
                  : 'bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Questions' : cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((faq) => {
            const isOpen = openId === faq.id;
            const wordCount = faq.comprehensiveOverview ? faq.comprehensiveOverview.trim().split(/\s+/).length : 0;
            return (
              <div
                key={faq.id}
                className={`bg-[#0b121e] border rounded-2xl overflow-hidden transition-all ${
                  isOpen ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/5' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 hover:text-cyan-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl shrink-0 ${isOpen ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-900 text-slate-400'}`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-cyan-400 font-semibold block uppercase tracking-wider mb-0.5">{faq.category}</span>
                      <span className="text-sm md:text-base font-extrabold text-white">{faq.question}</span>
                    </div>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 space-y-5 animate-in fade-in duration-150">
                    <p className="text-slate-200 text-sm font-medium leading-relaxed">{faq.answer}</p>

                    {/* Key Highlights Bullet Box */}
                    {faq.keyHighlights && faq.keyHighlights.length > 0 && (
                      <div className="bg-[#070c14] border border-cyan-500/20 rounded-xl p-4 space-y-2">
                        <span className="text-cyan-400 font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-cyan-400" />
                          <span>Key Service Highlights</span>
                        </span>
                        <ul className="space-y-2 pt-1">
                          {faq.keyHighlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 300+ Word Comprehensive Master Technical Response */}
                    {faq.comprehensiveOverview && (
                      <div className="bg-[#080e1a] border border-cyan-500/30 rounded-2xl p-5 space-y-3 relative overflow-hidden">
                        <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                            <FileText className="w-4 h-4 text-cyan-400" />
                            <span>Detailed Procedure & Technical Report</span>
                          </div>
                          <span className="text-[10px] text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-mono font-semibold">
                            {wordCount}+ Words Report
                          </span>
                        </div>
                        <p className="text-slate-300 text-xs md:text-sm leading-relaxed text-justify space-y-2 font-normal">
                          {faq.comprehensiveOverview}
                        </p>
                      </div>
                    )}

                    {/* Detailed Paragraph Breakdown */}
                    {faq.details && faq.details.length > 0 && (
                      <div className="space-y-3 pt-2 border-t border-slate-800/60">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider text-slate-400">Process Milestones & Specifications</h4>
                        {faq.details.map((paragraph, idx) => (
                          <div key={idx} className="bg-slate-900/50 border border-slate-800/80 p-3.5 rounded-xl space-y-1">
                            <p className="text-slate-300 leading-relaxed text-xs">{paragraph}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Quick Call to Action */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                      <span className="text-slate-400 text-[11px]">Have specific technical questions for your vehicle model?</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={onOpenBooking}
                          className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
                        >
                          <span>Book Inspection Slot</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};


