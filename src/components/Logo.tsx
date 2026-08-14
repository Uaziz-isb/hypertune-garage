import React from 'react';
import { images } from '../data/images';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  onClick?: () => void;
  scale?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', onClick, scale = 1.0 }) => {
  const textColor = variant === 'dark' ? 'text-white' : 'text-slate-950';

  const boxSize = Math.round(50 * scale);
  const titleFontSize = (23 * scale).toFixed(1);
  const subFontSize = (11 * scale).toFixed(1);

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 font-bold tracking-tight select-none cursor-pointer ${className}`}
    >
      {/* HyperTune Garage Official Logo Mark */}
      <div 
        style={{ width: `${boxSize}px`, height: `${boxSize}px` }}
        className="relative flex items-center justify-center rounded-xl bg-slate-950 border border-slate-800 shadow-md shadow-red-600/20 shrink-0 group-hover:scale-105 transition-transform overflow-hidden"
      >
        <img
          src={images.defaultBrandLogo}
          alt="HyperTune Garage Logo"
          width={50}
          height={50}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse z-10" />
      </div>

      {/* Typography & Web Domain */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span 
            style={{ fontSize: `${titleFontSize}px` }}
            className={`font-black tracking-tight uppercase ${textColor}`}
          >
            HYPER<span className="text-red-500">TUNE</span>
          </span>
        </div>
        <span 
          style={{ fontSize: `${subFontSize}px` }}
          className="font-bold tracking-widest text-slate-400 uppercase mt-1 flex items-center gap-1"
        >
          <span>HYPERTUNEGARAGE.PK</span>
          <span className="text-red-500">•</span>
          <span>ISLAMABAD</span>
        </span>
      </div>
    </div>
  );
};
