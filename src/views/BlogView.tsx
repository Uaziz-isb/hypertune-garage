import React, { useState } from 'react';
import { PageId } from '../types';
import { blogData } from '../data/blogData';
import { images } from '../data/images';
import { SEOHead } from '../components/SEOHead';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'all',
    'Hybrid Tech',
    'German Cars',
    'PPF & Paint Protection',
    'Engine Care',
    'Maintenance Tips',
    'Buyer Guides',
    'Popular Brands',
  ];

  const filtered = activeCategory === 'all'
    ? blogData
    : blogData.filter((b) => b.category === activeCategory);

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-12">
      <SEOHead
        title="Car Maintenance Guides & Diagnostic Blog | HyperTune Garage"
        description="Authoritative automotive repair guides: P0A80 hybrid battery repair, BMW ISTA diagnostics, Audi DSG transmission fixes, PPF care & engine overhauls."
        keywords="car repair guides islamabad, hybrid battery guide p0a80, bmw drivetrain malfunction, audi dsg repair, ceramic coating vs ppf, synthetic oil guide pakistan"
        path="/blog/"
      />

      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Diagnostic & Maintenance Knowledge Hub
          </span>
          <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-black text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">HyperTune Garage</span> Technical Journal
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            In-depth engineering guides, OBD2 fault troubleshooting, hybrid battery restoration, and climate maintenance for Pakistani drivers.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/30'
                  : 'bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Guides & Articles' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <article
              key={post.id}
              onClick={() => onNavigate('blog-post', post.slug)}
              className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all cursor-pointer flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    width={400}
                    height={192}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = images.heroBanner;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b121e] via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-lg">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs text-cyan-400 font-bold group-hover:text-cyan-300">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-cyan-500/30 shrink-0">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">{post.author.name}</span>
                </div>
                <span className="flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
