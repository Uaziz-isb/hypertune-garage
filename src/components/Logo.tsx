import React from 'react';
import hypertuneLogo from '../assets/images/hypertune_logo_new_1785539043513.jpg';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', onClick }) => {
  const textColor = variant === 'dark' ? 'text-white' : 'text-slate-950';

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 font-bold tracking-tight select-none cursor-pointer ${className}`}
    >
      {/* HyperTune Garage Official Logo Mark */}
      <div className="relative flex items-center justify-center w-[50px] h-[50px] rounded-xl bg-slate-950 border border-slate-800 shadow-md shadow-red-600/20 shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
        <img
          src={hypertuneLogo}
          alt="HyperTune Garage Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse z-10" />
      </div>

      {/* Typography & Web Domain */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className={`text-[23px] font-black tracking-tight uppercase ${textColor}`}>
            HYPER<span className="text-red-500">TUNE</span>
          </span>
        </div>
        <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-1 flex items-center gap-1">
          <span>HYPERTUNEGARAGE.PK</span>
          <span className="text-red-500">•</span>
          <span>ISLAMABAD</span>
        </span>
      </div>
    </div>
  );
};
