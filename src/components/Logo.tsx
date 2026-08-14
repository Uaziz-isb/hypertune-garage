import React from 'react';
import hypertuneLogo from '../assets/images/logo/hypertune-logo.webp';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  onClick?: () => void;
  scale?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', onClick }) => {
  const textColor = variant === 'dark' ? 'text-white' : 'text-slate-950';

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2.5 sm:gap-3 font-bold tracking-tight select-none cursor-pointer group ${className}`}
    >
      {/* HyperTune Garage Official Logo Mark */}
      <div 
        className="relative flex items-center justify-center rounded-xl bg-slate-950 border border-slate-800 shadow-md shadow-red-600/20 shrink-0 group-hover:scale-105 transition-transform overflow-hidden w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12"
      >
        <img
          src={hypertuneLogo}
          alt="HyperTune Garage Official Automotive Specialist Logo"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            target.src = '/images/logo/hypertune-logo.webp';
          }}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-0.5 right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse z-10" />
      </div>

      {/* Typography & Web Domain */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span 
            className={`text-base sm:text-xl md:text-2xl font-black tracking-tight uppercase ${textColor}`}
          >
            HYPER<span className="text-red-500">TUNE</span>
          </span>
        </div>
        <span 
          className="text-[8px] sm:text-[10px] md:text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-0.5 sm:mt-1 flex items-center gap-1"
        >
          <span className="truncate">HYPERTUNEGARAGE.PK</span>
          <span className="text-red-500 hidden xs:inline">•</span>
          <span className="hidden xs:inline">ISLAMABAD</span>
        </span>
      </div>
    </div>
  );
};
