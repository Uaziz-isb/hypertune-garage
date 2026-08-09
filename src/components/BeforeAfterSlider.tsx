import React, { useState } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
  title,
  beforeLabel = 'Before Repair / Tuning',
  afterLabel = 'After HyperTune Restoration',
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-white text-base md:text-lg">{title}</h4>
        <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Interactive Slider
        </span>
      </div>

      <div
        className="relative w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-800 shadow-2xl group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Invisible Range Input Overlay for 100% Reliable Dragging */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={handleSliderChange}
          aria-label={title}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />

        {/* After Image (Full width background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs px-3.5 py-1.5 rounded-xl shadow-lg shadow-cyan-500/20 z-10 pointer-events-none">
          {afterLabel}
        </span>

        {/* Before Image (Clipped width with authentic pre-restoration filter) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88] contrast-[0.95] sepia-[0.12] transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-4 left-4 bg-slate-950/90 text-slate-300 font-extrabold text-xs px-3.5 py-1.5 rounded-xl border border-slate-700/80 shadow-lg z-10 pointer-events-none">
            {beforeLabel}
          </span>
        </div>

        {/* Vertical Divider Line with Cyan Glow */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300 via-white to-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.9)] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Centered Drag Handle Badge */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center text-cyan-400 font-black text-xs transition-transform duration-200 group-hover:scale-110">
            <span className="tracking-tighter font-extrabold">◄►</span>
          </div>
        </div>
      </div>
    </div>
  );
};
