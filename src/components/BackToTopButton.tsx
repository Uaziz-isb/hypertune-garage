import React, { useEffect, useState } from 'react';
import { ArrowUp, Gauge } from 'lucide-react';

export const FLOATING_BTN_CLASS =
  'flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#070b12] border-2 border-cyan-500/60 hover:border-cyan-400 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/35 hover:scale-105 active:scale-95 transition-all cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b12] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setIsVisible(scrollY >= 300);
          rafId = 0;
        });
      }
    };

    setIsVisible(scrollY >= 300);
    addEventListener('scroll', onScroll, { passive: true });

    return () => {
      removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() =>
        scrollTo({
          top: 0,
          behavior: matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        })
      }
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`group relative ${FLOATING_BTN_CLASS} ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none motion-reduce:translate-y-0'
      }`}
    >
      {/* Official HyperTune Garage Logo */}
      <span className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
        {!imgError ? (
          <img
            src="/images/hypertune_logo_small.webp"
            srcSet="/images/hypertune_logo_small.webp 1x, /images/hypertune_logo.webp 2x"
            alt=""
            aria-hidden="true"
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="w-full h-full rounded-full object-cover transition-transform group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 stroke-[2.5]" aria-hidden="true" />
        )}
      </span>

      {/* Branded Upward Arrow Indicator */}
      <span
        aria-hidden="true"
        className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 border-2 border-[#070b12] shadow-md flex items-center justify-center transition-transform group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
      >
        <ArrowUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
      </span>
    </button>
  );
};
