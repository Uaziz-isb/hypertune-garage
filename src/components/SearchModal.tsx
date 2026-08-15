import React, { useState } from 'react';
import { X, Search, ChevronRight, Wrench, ShieldCheck, MapPin, BookOpen, HelpCircle } from 'lucide-react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { blogData } from '../data/blogData';
import { faqData } from '../data/faqData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId, slug?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedServices = q
    ? servicesData.filter(
        (s) => s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q)
      )
    : [];

  const matchedBlogs = q
    ? blogData.filter(
        (b) => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)
      )
    : [];

  const matchedFaqs = q
    ? faqData.filter(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      )
    : [];

  const totalResults = matchedServices.length + matchedBlogs.length + matchedFaqs.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-[#05080e]/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0b121e] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
        {/* Search Bar Input */}
        <div className="p-4 border-b border-cyan-500/20 flex items-center gap-3 bg-[#070c14]">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services (ECU tuning, oil change), advice, FAQs..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 text-xs">
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {!q ? (
            <div className="text-center py-8 text-slate-500 space-y-3">
              <Search className="w-10 h-10 text-slate-700 mx-auto" />
              <p className="text-sm">Type a search term above to instantly find workshop services, brand diagnostics, blog articles, and FAQs.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
                <span className="text-slate-400">Popular searches:</span>
                {['Engine Overhaul', 'PPF Studio', 'Prius Battery', 'Oil Change', '3D Alignment'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-lg bg-[#070c14] border border-slate-800 text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-8 text-slate-400 space-y-2">
              <p className="font-bold text-white">No exact matches found for "{query}".</p>
              <p className="text-xs">Try searching for keywords like "BMW", "Suspension", "Oil Change", or "Battery".</p>
            </div>
          ) : (
            <>
              {/* Matched Services */}
              {matchedServices.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                    Services ({matchedServices.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchedServices.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          onClose();
                          onNavigate('service-detail', s.slug);
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-xl bg-[#070c14] hover:bg-slate-900 border border-slate-800 text-left transition-colors group"
                      >
                        <div>
                          <h5 className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                            {s.title}
                          </h5>
                          <p className="text-xs text-slate-400 line-clamp-1">{s.shortDesc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Blogs */}
              {matchedBlogs.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    Blog Articles ({matchedBlogs.length})
                  </h4>
                  <div className="space-y-1.5">
                    {matchedBlogs.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => {
                          onClose();
                          onNavigate('blog-post', b.slug);
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-xl bg-[#070c14] hover:bg-slate-900 border border-slate-800 text-left transition-colors group"
                      >
                        <div>
                          <h5 className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                            {b.title}
                          </h5>
                          <p className="text-xs text-slate-400 line-clamp-1">{b.excerpt}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
