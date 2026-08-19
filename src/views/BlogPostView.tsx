import React from 'react';
import { PageId } from '../types';
import { blogData } from '../data/blogData';
import { images } from '../data/images';
import { ArrowLeft, Clock, Calendar, User, Share2, Wrench, ChevronRight } from 'lucide-react';

interface BlogPostProps {
  slug?: string;
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const BlogPostView: React.FC<BlogPostProps> = ({ slug, onNavigate, onOpenBooking }) => {
  const post = blogData.find((b) => b.slug === slug) || blogData[0];

  return (
    <div className="pt-28 sm:pt-32 md:pt-36 pb-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0b121e] border border-slate-800 text-slate-300 hover:text-white font-bold text-xs"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400" />
          <span>Back to Blog Journal</span>
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Article Header */}
        <div className="space-y-4 text-center">
          <span className="bg-cyan-950/60 text-cyan-400 font-bold text-xs uppercase px-3 py-1 rounded-full border border-cyan-500/30">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-cyan-400" />
              <span className="text-white font-bold">{post.author.name}</span> ({post.author.role})
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{post.publishedDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden border border-slate-800 h-80 sm:h-[420px] shadow-2xl">
          <img
            src={post.featuredImage}
            alt={post.title}
            width={800}
            height={420}
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = images.heroBanner;
            }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags & Share */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400">Tags:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="bg-[#0b121e] border border-slate-800 px-2.5 py-1 rounded-md text-xs text-slate-300">
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: post.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0b121e] text-slate-300 font-bold text-xs hover:text-white border border-slate-800"
          >
            <Share2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Share Article</span>
          </button>
        </div>

        {/* Call to action */}
        <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-black text-white">Need Expert Diagnostic Care for Your Vehicle?</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Schedule a diagnostic check at our Islamabad Flagship Hub or Rawalpindi workshop.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/30"
          >
            Book Workshop Inspection Now
          </button>
        </div>
      </article>
    </div>
  );
};
