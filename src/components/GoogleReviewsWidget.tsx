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

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      {showTitle && (
        <div className="bg-[#0b121e] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div className="space-y-1.5">
              <h2 className="text-xl font-black text-white">Selected Customer Testimonials</h2>
              <p className="text-slate-400 text-xs">
                Shared feedback from vehicle owners serviced at HyperTune Garage in Sector O-9, Islamabad.
              </p>
            </div>

            <a
              href={googleBusinessData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs text-cyan-400 font-bold transition-colors shrink-0"
            >
              <span>View on Google Maps</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            The cards below highlight selected customer testimonials and workshop replies. They represent individual customer feedback rather than a complete aggregate of all reviews.
          </p>
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
                    <h3 className="font-extrabold text-white text-sm">
                      <span>{review.authorName}</span>
                    </h3>
                    {review.relativeTimeText && (
                      <span className="text-[11px] text-slate-400 block">{review.relativeTimeText}</span>
                    )}
                  </div>
                </div>

                {/* Star Display Badge */}
                <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-700 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0">
                  <span>{review.rating}.0</span>
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
              <p className={`text-slate-300 text-xs leading-relaxed italic${compact ? ' text-justify' : ''}`}>
                "{review.text}"
              </p>
            </div>

            {/* Owner Reply */}
            {review.ownerResponse && (
              <div className="mt-4 pt-3 border-t border-slate-800/80 bg-slate-900/90 border border-slate-700/60 p-4 rounded-2xl space-y-1.5 border-l-4 border-l-cyan-400">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-cyan-400 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>HyperTune Garage — Owner</span>
                  </span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    Owner Response
                  </span>
                </div>
                <p className={`text-slate-200 text-xs leading-relaxed italic pl-1${compact ? ' text-justify' : ''}`}>
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
