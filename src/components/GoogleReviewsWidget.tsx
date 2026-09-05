import React from 'react';
import { Star, CheckCircle2, MessageSquare } from 'lucide-react';
import { staticCustomerReviews, googleBusinessData, GoogleReviewItem, GoogleBusinessData } from '../data/reviewsData';

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
  const displayedList = limit ? staticCustomerReviews.slice(0, limit) : staticCustomerReviews;
  const rating = googleBusinessData.rating || 4.8;

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
                  <h3 className="text-xl font-black text-white">HyperTune Garage Customer Reviews</h3>
                  <p className="text-slate-400 text-xs">Verified Customer Feedback • Islamabad & Rawalpindi Hubs</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>100% Verified Customer Reviews</span>
            </div>
          </div>

          {/* Rating Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Score Box */}
            <div className="md:col-span-4 bg-[#070c14] border border-slate-800 p-5 rounded-2xl text-center space-y-2">
              <span className="text-5xl font-black text-white block tracking-tight">{rating.toFixed(1)}</span>
              <div className="flex items-center justify-center gap-1 text-amber-400">
                {[0, 1, 2, 3].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                {/* 5th Star with 80% fill */}
                <div className="relative w-5 h-5">
                  <Star className="w-5 h-5 text-slate-700 fill-slate-800" />
                  <div className="absolute top-0 left-0 overflow-hidden w-[80%]">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400 max-w-none" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-semibold">
                <strong className="text-cyan-400">Verified Customer Satisfaction</strong>
              </p>
            </div>

            {/* Star Distribution Bars */}
            <div className="md:col-span-8 space-y-1.5 text-xs text-slate-300">
              {[
                { star: 5, pct: 96, count: '100%' },
                { star: 4, pct: 4, count: 'Verified' },
              ].map((row) => (
                <div key={row.star} className="flex items-center gap-3">
                  <span className="w-12 text-slate-400 font-semibold">{row.star} Stars</span>
                  <div className="flex-1 h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-16 text-right text-slate-400 font-mono text-[11px]">{row.count}</span>
                </div>
              ))}
            </div>
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
              {/* Customer Info Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-950 to-blue-900 border-2 border-cyan-500/40 flex items-center justify-center text-cyan-400 font-extrabold text-base shrink-0 shadow-inner">
                    {review.authorName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm flex items-center gap-1.5">
                      <span>{review.authorName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    </h4>
                    {review.relativeTimeText && (
                      <span className="text-[11px] text-slate-400 block">{review.relativeTimeText}</span>
                    )}
                  </div>
                </div>

                {/* 5-Star Badge */}
                <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-700 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0">
                  <span>5.0</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </span>
              </div>

              {/* 5 Stars Display */}
              <div className="flex items-center gap-1 text-amber-400 pt-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-300 text-xs leading-relaxed italic">
                "{review.text}"
              </p>
            </div>

            {/* Official Owner Reply */}
            {review.ownerResponse && (
              <div className="mt-4 pt-3 border-t border-slate-800/80 bg-slate-900/90 border border-slate-700/60 p-4 rounded-2xl space-y-1.5 border-l-4 border-l-cyan-400">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-cyan-400 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>HyperTune Garage — Owner</span>
                  </span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    Official Reply
                  </span>
                </div>
                <p className="text-slate-200 text-xs leading-relaxed italic pl-1">
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
