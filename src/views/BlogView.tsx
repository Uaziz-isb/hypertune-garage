import React, { useState } from 'react';
import { PageId } from '../types';
import { blogArticlesListingData } from '../data/blogData';
import { servicesData } from '../data/servicesData';
import { serviceGuideMap, serviceShortLabels } from '../data/guideData';
import { images } from '../data/images';
import { SEOHead } from '../components/SEOHead';
import { Clock, ArrowRight, Wrench } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Dynamically map each current service to its dedicated technical guide
  const serviceGuides = servicesData
    .map((service) => {
      const guide = serviceGuideMap[service.slug];
      if (!guide) return null;
      return { service, guide };
    })
    .filter((item): item is { service: (typeof servicesData)[0]; guide: (typeof serviceGuideMap)[string] } => item !== null);

  const categories = [
    'all',
    'Hybrid Tech',
    'German Cars',
    'Popular Brands',
  ];

  const filtered = activeCategory === 'all'
    ? blogArticlesListingData
    : blogArticlesListingData.filter((b) => b.category === activeCategory);

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-16">
      <SEOHead
        title="Automotive Repair & Car Care Guides | HyperTune Garage"
        description="Read technical car care guides, diagnostic advice, maintenance tips, PPF comparisons and vehicle repair insights from HyperTune Garage in Islamabad."
        path="/blog/"
      />

      {/* Header Banner */}
      <section className="bg-[#05080e] border-b border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Diagnostic &amp; Maintenance Knowledge Hub
          </span>
          <h1 className="text-3xl md:text-[48px] md:leading-[48px] font-black text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">HyperTune Garage</span> Technical Journal
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            In-depth engineering guides, OBD2 fault troubleshooting, hybrid battery restoration, and climate maintenance for Pakistani drivers.
          </p>
        </div>
      </section>

      {/* Dedicated Service Guides Section */}
      <section id="service-guides" className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="space-y-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Workshop Service Manuals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Service Guides
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              Every HyperTune Garage service features a dedicated technical diagnostic &amp; maintenance guide covering Pakistani climate adaptations, OEM tolerances, and troubleshooting.
            </p>
          </div>

          {/* Service Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-2 pt-2">
            {serviceGuides.map(({ service: s, guide }) => (
              <a
                key={s.id}
                href={`/blog/${guide.slug}/`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('blog-post', guide.slug);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold transition-all bg-[#0b121e] text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              >
                {serviceShortLabels[s.slug] || s.title}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceGuides.map(({ service, guide }) => (
            <article
              key={service.id}
              id={`service-guide-${service.slug}`}
              className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <a
                  href={`/blog/${guide.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog-post', guide.slug);
                  }}
                  className="h-48 relative overflow-hidden block"
                  aria-label={`Read ${guide.title}`}
                >
                  <img
                    src={service.image}
                    alt={guide.title}
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
                    Service Guide
                  </span>
                </a>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2 text-[11px]">
                    <a
                      href={`/services/${service.slug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', service.slug);
                      }}
                      className="text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                    >
                      <span>Service:</span>
                      <span className="underline decoration-cyan-500/40 hover:decoration-cyan-400">{service.title}</span>
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    <a
                      href={`/blog/${guide.slug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('blog-post', guide.slug);
                      }}
                    >
                      {guide.title}
                    </a>
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between text-xs">
                <a
                  href={`/services/${service.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service-detail', service.slug);
                  }}
                  className="text-slate-400 hover:text-white transition-colors text-[11px]"
                >
                  View Service &rarr;
                </a>
                <a
                  href={`/blog/${guide.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog-post', guide.slug);
                  }}
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold"
                >
                  <span>{guide.buttonText || 'Read Technical Guide'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Guides & Articles Section */}
      <section id="all-articles" className="max-w-7xl mx-auto px-4 space-y-8 pt-8 border-t border-slate-800/80">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Complete Technical Library
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Blogs &amp; Articles
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Filter our entire archive of technical guides by category—including German diagnostics, hybrid high-voltage repair, buyer checklists, and seasonal maintenance.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
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
              id={`blog-post-${post.slug}`}
              className="bg-[#0b121e] border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <a
                  href={`/blog/${post.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog-post', post.slug);
                  }}
                  className="h-48 relative overflow-hidden block"
                  aria-label={`Read ${post.title}`}
                >
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
                </a>

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
                    <a
                      href={`/blog/${post.slug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('blog-post', post.slug);
                      }}
                    >
                      {post.title}
                    </a>
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
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">{post.author.name}</span>
                </div>
                <a
                  href={`/blog/${post.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog-post', post.slug);
                  }}
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
