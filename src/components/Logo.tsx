import React, { useState } from 'react';
import { Gauge } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  onClick?: () => void;
  scale?: number;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  onClick,
  scale = 1.0,
  showSubtitle = true,
}) => {
  const [imgError, setImgError] = useState(false);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  const fallbackSources = [
    '/images/hypertune_logo_small.webp',
    '/images/hypertune_logo.webp',
    'https://hypertunegarage.pk/images/hypertune_logo_small.webp',
  ];

  const textColor = variant === 'dark' ? 'text-white' : 'text-slate-950';
  const subTextColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-600';

  const boxSize = Math.round(48 * scale);
  const titleFontSize = (22 * scale).toFixed(1);
  const subFontSize = (10.5 * scale).toFixed(1);

  const handleImageError = () => {
    if (fallbackIndex < fallbackSources.length - 1) {
      setFallbackIndex((prev) => prev + 1);
    } else {
      setImgError(true);
    }
  };

  const currentLogoSrc = fallbackSources[fallbackIndex];

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2.5 sm:gap-3 font-bold tracking-tight select-none cursor-pointer group ${className}`}
      role="banner"
    >
      {/* HyperTune Garage Official Logo Mark - Trimmed Corners & Seamless Border Filling */}
      <div
        style={{ width: `${boxSize}px`, height: `${boxSize}px` }}
        className="relative flex items-center justify-center rounded-xl overflow-hidden border border-slate-700/80 shadow-md shadow-sky-500/10 shrink-0 group-hover:border-cyan-400 group-hover:shadow-cyan-500/30 transition-all duration-300 bg-black p-0"
      >
        {!imgError ? (
          <img
            src={currentLogoSrc}
            srcSet="/images/hypertune_logo_small.webp 1x, /images/hypertune_logo.webp 2x"
            alt="HyperTune Garage Official Logo"
            width={boxSize}
            height={boxSize}
            loading="eager"
            decoding="async"
            onError={handleImageError}
            className="w-full h-full object-cover object-center block rounded-[inherit] transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-cyan-400 w-full h-full bg-slate-950">
            <Gauge className="w-6 h-6 stroke-[2.5]" />
            <span className="text-[8px] font-black text-red-500 mt-0.5 leading-none">HT</span>
          </div>
        )}
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center">
          <span
            style={{ fontSize: `${titleFontSize}px` }}
            className={`font-black tracking-tight uppercase flex items-center ${textColor}`}
          >
            <span>HYPER</span>
            <span className="text-red-500 ml-0.5">TUNE</span>
          </span>
        </div>

        {showSubtitle && (
          <span
            style={{ fontSize: `${subFontSize}px` }}
            className={`font-bold tracking-widest uppercase mt-1 flex items-center gap-1.5 ${subTextColor}`}
          >
            <span className="hover:text-cyan-400 transition-colors">HYPERTUNEGARAGE.PK</span>
            <span className="text-red-500 font-black">•</span>
            <span>ISLAMABAD</span>
          </span>
        )}
      </div>
    </div>
  );
};
