import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Gauge } from 'lucide-react';

const SCROLL_THRESHOLD = 300;

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [fallbackIndex, setFallbackIndex] = useState(0);
  const rafIdRef = useRef<number | null>(null);

  const logoSources = [
    '/images/hypertune_logo_small.webp',
    '/images/hypertune_logo.webp',
  ];

  useEffect(() => {
    const updateVisibility = () => {
      const shouldShow = window.scrollY >= SCROLL_THRESHOLD;
      setIsVisible((prev) => (prev === shouldShow ? prev : shouldShow));
      rafIdRef.current = null;
    };

    const handleScroll = () => {
      if (rafIdRef.current !== null) return;
      rafIdRef.current = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const handleScrollToTop = () => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const handleImageError = () => {
    if (fallbackIndex < logoSources.length - 1) {
      setFallbackIndex((prev) => prev + 1);
    } else {
      setImgError(true);
    }
  };

  return (
    <div
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-[max(1.5rem,env(safe-area-inset-right))] z-50 transition-all duration-300 motion-reduce:transition-none ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none motion-reduce:translate-y-0'
      }`}
    >
      <button
        type="button"
        onClick={handleScrollToTop}
        aria-label="Back to top"
        title="Back to top"
        aria-hidden={!isVisible}
        tabIndex={isVisible ? 0 : -1}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#070b12] border-2 border-cyan-500/60 hover:border-cyan-400 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/35 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b12] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
      >
        {/* Official HyperTune Garage Logo */}
        <span className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
          {!imgError ? (
            <img
              src={logoSources[fallbackIndex]}
              srcSet="/images/hypertune_logo_small.webp 1x, /images/hypertune_logo.webp 2x"
              alt=""
              aria-hidden="true"
              width={56}
              height={56}
              loading="lazy"
              decoding="async"
              onError={handleImageError}
              className="w-full h-full rounded-full object-cover object-center block transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          ) : (
            <Gauge className="w-6 h-6 text-cyan-400 stroke-[2.5]" aria-hidden="true" />
          )}
        </span>

        {/* Branded Upward Arrow Indicator */}
        <span
          aria-hidden="true"
          className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 border-2 border-[#070b12] shadow-md shadow-cyan-500/35 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
        >
          <ArrowUp className="w-3.5 h-3.5 stroke-[3]" />
        </span>
      </button>
    </div>
  );
};
