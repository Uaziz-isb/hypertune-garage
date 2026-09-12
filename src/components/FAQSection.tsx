import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { PageId } from '../types';

export interface FAQItemSimple {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItemSimple[];
  pageType: 'service' | 'brand';
  contextName?: string;
  onNavigate?: (page: PageId, slug?: string) => void;
  onOpenBooking?: () => void;
  centralFaqAnchorText?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'Expert Answers & Technical Procedures',
  faqs,
  pageType,
  contextName,
  onNavigate,
  onOpenBooking,
  centralFaqAnchorText = 'Explore the complete HyperTune Garage FAQ Knowledge Hub',
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 space-y-6">
      <div className="text-center space-y-2">
        <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
          {subtitle}
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          {title}
        </h2>
        {contextName && (
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Clear, transparent technical guidance for {contextName} owners across Islamabad and Rawalpindi.
          </p>
        )}
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          const faqId = `faq-item-${idx}`;
          const contentId = `faq-content-${idx}`;

          return (
            <div
              key={idx}
              className={`bg-[#0b121e] border rounded-2xl overflow-hidden transition-all ${
                isOpen ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/5' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                id={faqId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span className="flex items-start sm:items-center gap-3">
                  <div
                    className={`p-1.5 sm:p-2 rounded-xl shrink-0 mt-0.5 sm:mt-0 ${
                      isOpen ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-cyan-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={faqId}
                  className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-150"
                >
                  <p className="pt-2">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Contextual Internal Link to Central FAQ Page */}
      <div className="bg-gradient-to-r from-slate-950 via-[#0b121e] to-slate-950 border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <span className="text-slate-400 text-xs font-semibold block">
            Have additional repair, warranty, or scheduling questions?
          </span>
          <p className="text-white text-xs sm:text-sm font-bold">
            Browse our centralized knowledge library covering warranty terms, booking, and all workshop procedures.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/faq/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('faq');
              }
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 font-bold text-xs transition-colors"
          >
            <span>{centralFaqAnchorText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          {onOpenBooking && (
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Book Service</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
