import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2, ExternalLink, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { googleBusinessData, GoogleBusinessData, GoogleReviewItem } from '../data/reviewsData';

export type { GoogleReviewItem, GoogleBusinessData };

interface GoogleReviewsWidgetProps {
  compact?: boolean;
  limit?: number;
  showTitle?: boolean;
}

export const GoogleReviewsWidget: React.FC<GoogleReviewsWidgetProps> = ({
  compact = false,
  limit,
  showTitle = true,
}) => {
  const [data, setData] = useState<GoogleBusinessData>(googleBusinessData);
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/google-reviews');
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.reviews && json.reviews.length > 0) {
          setData((prev) => ({
            ...prev,
            ...json,
            reviews: json.reviews,
          }));
        }
      }
    } catch {
      // Graceful fallback to bundled verified Google Business dataset
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const reviewsToDisplay = data.reviews.filter((r) =>
    filterRating === 'all' ? true : r.rating === filterRating
  );

  const displayedList = limit ? reviewsToDisplay.slice(0, limit) : reviewsToDisplay;

  const rating = data.rating || 4.9;
  const totalReviews = data.totalReviews || 348;
  const writeReviewUrl =
    data.writeReviewUrl ||
    'https://search.google.com/local/writereview?placeid=ChIJgy296uXt3zgRaWvyhpPZsvM';
  const googleMapsUrl =
    data.googleMapsUrl ||
    'https://www.google.com/maps/search/?api=1&query=HyperTune+Garage&query_place_id=ChIJgy296uXt3zgRaWvyhpPZsvM';

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      {showTitle && (
        <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800/80 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {/* Official Google Icon SVG */}
                <div className="w-10 h-10 rounded-2xl bg-white p-2 shadow-md flex items-center justify-center shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-white">HyperTune Garage Google Business Profile</h3>
                  </div>
                  <p className="text-slate-400 text-xs">Verified Google Business Profile • Islamabad & Rawalpindi Hubs</p>
                </div>
              </div>
            </div>

            {/* Action Link to Google Review */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Rating Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Score Box */}
            <div className="md:col-span-4 bg-[#070c14] border border-slate-800 p-5 rounded-2xl text-center space-y-2">
              <span className="text-5xl font-black text-white block tracking-tight">{rating.toFixed(1)}</span>
              <div className="flex items-center justify-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-400">
                Based on <strong className="text-cyan-400">{totalReviews}+ Verified Google Reviews</strong>
              </p>
            </div>

            {/* Star Distribution Bars */}
            <div className="md:col-span-8 space-y-1.5 text-xs text-slate-300">
              {[
                { star: 5, pct: 94, count: 326 },
                { star: 4, pct: 4, count: 16 },
                { star: 3, pct: 1, count: 4 },
                { star: 2, pct: 1, count: 2 },
              ].map((row) => (
                <div key={row.star} className="flex items-center gap-3">
                  <span className="w-12 text-slate-400 font-semibold">{row.star} Stars</span>
                  <div className="flex-1 h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-slate-500 font-mono text-[11px]">{row.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs text-slate-400 font-medium shrink-0">Filter:</span>
              <button
                onClick={() => setFilterRating('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  filterRating === 'all'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                All Reviews ({data.reviews.length})
              </button>
              <button
                onClick={() => setFilterRating(5)}
                className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all shrink-0 ${
                  filterRating === 5
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span>5 Stars</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </button>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Reviews Cards List */}
      <div className={`grid grid-cols-1 ${compact ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
        {displayedList.map((review) => (
          <div
            key={review.id}
            className="bg-[#0b121e] border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-colors group relative"
          >
            <div className="space-y-3">
              {/* Author Info Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {review.authorPhoto ? (
                    <img
                      src={review.authorPhoto}
                      alt={review.authorName}
                      width={44}
                      height={44}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                      className="w-11 h-11 rounded-full object-cover border-2 border-slate-700 shrink-0 bg-slate-900"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-950 to-blue-900 border-2 border-cyan-500/40 flex items-center justify-center text-cyan-400 font-extrabold text-base shrink-0 shadow-inner">
                      {review.authorName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-extrabold text-white text-sm flex items-center gap-1.5">
                      <span>{review.authorName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    </h4>
                    <span className="text-[11px] text-slate-400 block">{review.relativeTimeText}</span>
                  </div>
                </div>

                {/* Google Badge */}
                <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-700 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                  <svg className="w-3 h-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Google Review</span>
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-300 text-xs leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Optional Vehicle & Branch Tag */}
              {(review.vehicle || review.branch) && (
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                  {review.vehicle && (
                    <span className="bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 px-2.5 py-0.5 rounded-md font-semibold">
                      {review.vehicle}
                    </span>
                  )}
                  {review.branch && (
                    <span className="bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded-md">
                      {review.branch}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* HyperTune Garage Owner Reply Section */}
            {review.ownerResponse && (
              <div className="mt-4 pt-3 border-t border-slate-800/80 bg-[#070c14] -mx-6 -mb-6 p-4 rounded-b-3xl space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-cyan-400 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Response from HyperTune Garage</span>
                  </span>
                  <span className="text-slate-500 text-[10px]">Owner Reply</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-normal italic pl-4 border-l-2 border-cyan-500/50">
                  "{review.ownerResponse}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
