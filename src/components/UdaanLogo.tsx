import React from 'react';

interface UdaanLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  className?: string;
  animate?: boolean;
}

export const UdaanLogo: React.FC<UdaanLogoProps> = ({
  size = 'md',
  showText = true,
  textColor = '#161616',
  className = '',
  animate = false,
}) => {
  const dimensions = {
    sm: { icon: 28, text: 'text-base', subtext: 'text-[8px]', gap: 'gap-2' },
    md: { icon: 36, text: 'text-xl', subtext: 'text-[9px]', gap: 'gap-2.5' },
    lg: { icon: 48, text: 'text-2xl', subtext: 'text-[10px]', gap: 'gap-3' },
    xl: { icon: 64, text: 'text-3xl', subtext: 'text-xs', gap: 'gap-4' },
  }[size];

  return (
    <div className={`inline-flex items-center ${dimensions.gap} select-none ${className}`}>
      {/* 3D-styled Emblem Mark */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-md transition-transform duration-300 group-hover:scale-105"
        style={{ width: dimensions.icon, height: dimensions.icon }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full drop-shadow-sm ${animate ? 'transition-all duration-500' : ''}`}
        >
          {/* Base Layer / Background Pill with subtle depth */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="12"
            fill="#173C2C"
            stroke="#0F291E"
            strokeWidth="1.5"
          />
          {/* Soft inner glow gradient */}
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="11"
            fill="url(#emerald_glow)"
            opacity="0.9"
          />

          {/* Ascending Path (Step 1 -> Step 2 -> Peak) */}
          <path
            d="M10 36 C 14 36, 17 31, 22 26 C 27 21, 31 16, 36 12"
            stroke="#FDFCF8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="0.5 0"
          />

          {/* Upward Ascending Horizon Arc / Wing of Progress */}
          <path
            d="M12 33 C 18 31, 26 25, 34 14 C 29 18, 22 24, 15 28 Z"
            fill="#EA580C"
            opacity="0.9"
          />

          {/* Milestone Node 1 (Discover) */}
          <circle cx="12" cy="35" r="2.5" fill="#FAF8F5" stroke="#173C2C" strokeWidth="1" />
          
          {/* Milestone Node 2 (Learn & Practice) */}
          <circle cx="22" cy="26" r="2.5" fill="#FBBF24" stroke="#173C2C" strokeWidth="1" />
          
          {/* Beacon / Radiant Destination Star (Opportunity Peak) */}
          <path
            d="M36 7 L37.5 11.5 L42 13 L37.5 14.5 L36 19 L34.5 14.5 L30 13 L34.5 11.5 Z"
            fill="#FBBF24"
          />
          <circle cx="36" cy="13" r="1.5" fill="#FFFFFF" />

          {/* Gradients */}
          <defs>
            <linearGradient id="emerald_glow" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E4D39" />
              <stop offset="0.6" stopColor="#173C2C" />
              <stop offset="1" stopColor="#0D241A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text Identity */}
      {showText && (
        <div className="flex flex-col text-left leading-none">
          <div className="flex items-center gap-1.5">
            <span 
              className={`editorial-title font-bold tracking-tight font-serif ${dimensions.text}`}
              style={{ color: textColor }}
            >
              UDAAN
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" title="Path of Progress" />
          </div>
          <span 
            className={`font-mono uppercase font-semibold tracking-widest text-[#78716C] mt-0.5 ${dimensions.subtext}`}
          >
            OPPORTUNITY NAVIGATOR
          </span>
        </div>
      )}
    </div>
  );
};
