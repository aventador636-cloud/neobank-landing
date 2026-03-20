"use client";

export function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="logoShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)">
            <animate attributeName="offset" values="-1;2" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="15%" stopColor="rgba(255,255,255,0.35)">
            <animate attributeName="offset" values="-0.85;2.15" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="30%" stopColor="rgba(255,255,255,0)">
            <animate attributeName="offset" values="-0.7;2.3" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        <linearGradient id="letterN" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
        <clipPath id="logoClip">
          <rect x="4" y="4" width="92" height="92" rx="22" />
        </clipPath>
        <filter id="innerShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Background rounded square */}
      <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#logoBg)" />

      {/* Static shine overlay */}
      <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#logoShine)" />

      {/* Animated shimmer */}
      <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#shimmer)" clipPath="url(#logoClip)" />

      {/* Orbital ring */}
      <ellipse
        cx="50"
        cy="52"
        rx="36"
        ry="34"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(-15, 50, 52)"
      />

      {/* Letter N */}
      <g filter="url(#innerShadow)">
        <path
          d="M35 72V32h6l18 28V32h6v40h-6L41 44v28h-6z"
          fill="url(#letterN)"
        />
      </g>

      {/* Small highlight dot */}
      <circle cx="26" cy="22" r="6" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export function LogoWordmark({ iconSize = 32 }: { iconSize?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoIcon size={iconSize} />
      <span className="font-bold text-lg tracking-tight text-white">
        Neobank
      </span>
    </div>
  );
}
