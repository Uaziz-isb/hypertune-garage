import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, ExternalLink, Sparkles } from 'lucide-react';

interface GoogleMapEmbedProps {
  src: string;
  title: string;
  className?: string;
  containerHeight?: string;
  googleMapsUrl?: string;
  address?: string;
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  src,
  title,
  className = '',
  containerHeight = 'h-[400px]',
  googleMapsUrl = 'https://www.google.com/maps?cid=17560337124718439273&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=PK&source=embed',
  address = 'Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className={`rounded-3xl overflow-hidden border border-slate-800 shadow-2xl ${containerHeight} w-full relative bg-[#070c14] ${className}`}
    >
      {isLoaded ? (
        <iframe
          title={title}
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter brightness-90 contrast-105 transition-opacity duration-500"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0b121e] to-[#070c14] space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10 animate-pulse">
            <MapPin className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 max-w-md">
            <h4 className="text-white font-black text-base flex items-center justify-center gap-2">
              <span>{title}</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">{address}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setIsLoaded(true)}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs transition-colors flex items-center gap-2 shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Load Interactive Satellite Map</span>
            </button>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs border border-slate-800 transition-colors flex items-center gap-1.5"
            >
              <span>Open Google Maps App</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
