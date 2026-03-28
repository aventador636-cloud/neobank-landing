"use client";

import { useEffect, useState } from "react";

function useCurrentTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
}

export default function PhoneMockup() {
  const time = useCurrentTime();

  return (
    <div className="phone-wrapper">
      {/* Glow ring */}
      <div className="phone-glow" />

      <div className="phone-mockup phone-3d">
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-12 flex items-end justify-between px-6 pb-1 text-[10px] text-slate-400 z-5">
          <span>{time}</span>
          <div className="flex gap-1 items-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
            </svg>
          </div>
        </div>

        {/* App content — clean card-focused layout */}
        <div className="absolute inset-0 top-14 px-5 pb-5 flex flex-col items-center">
          {/* NeoBank logo — large, prominent */}
          <div className="flex items-center gap-2.5 mt-2 mb-8">
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
              <defs>
                <linearGradient id="phoneLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4f6ef7" />
                  <stop offset="100%" stopColor="#3b5de6" />
                </linearGradient>
                <linearGradient id="phoneLogoShine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#phoneLogo)" />
              <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#phoneLogoShine)" />
              <path d="M35 72V32h6l18 28V32h6v40h-6L41 44v28h-6z" fill="white" />
            </svg>
            <span className="text-white text-lg font-bold tracking-tight">NeoBank</span>
          </div>

          {/* Premium Black Metal Card */}
          <div className="card-3d-wrap w-full">
          <div className="card-3d w-full rounded-xl relative overflow-hidden aspect-[1.586/1]"
            style={{
              background: "linear-gradient(145deg, #1a1a1e 0%, #222226 20%, #1c1c20 40%, #252529 60%, #1e1e22 80%, #1a1a1e 100%)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.4)",
            }}
          >
            {/* Brushed metal texture */}
            <div className="absolute inset-0" style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 1px,
                  rgba(255,255,255,0.008) 1px,
                  rgba(255,255,255,0.008) 2px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 4px,
                  rgba(255,255,255,0.004) 4px,
                  rgba(255,255,255,0.004) 5px
                )
              `,
              mixBlendMode: "overlay",
            }} />
            {/* Subtle top edge light */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            <div className="relative z-10 flex flex-col justify-between h-full p-4">
              {/* Top row — NeoBank logo embossed + Mastercard */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-1.5">
                  {/* Logo icon — dark premium */}
                  <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="cardLogoDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                      </linearGradient>
                      <linearGradient id="cardLogoN" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#cardLogoDark)" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                    <path d="M35 72V32h6l18 28V32h6v40h-6L41 44v28h-6z" fill="url(#cardLogoN)" />
                  </svg>
                  <p className="text-[11px] font-extrabold tracking-[0.15em] uppercase" style={{
                    color: "rgba(255,255,255,0.25)",
                    textShadow: "0 1px 1px rgba(0,0,0,0.6), 0 -1px 0 rgba(255,255,255,0.04)",
                  }}>NeoBank</p>
                </div>
                {/* Mastercard — 3D metallic discs */}
                <div className="flex flex-col items-end gap-0.5">
                  <svg width="32" height="22" viewBox="0 0 52 34" fill="none">
                    <defs>
                      {/* Left disc — dark silver with 3D depth */}
                      <radialGradient id="mcDiscL" cx="40%" cy="30%" r="50%" fx="35%" fy="25%">
                        <stop offset="0%" stopColor="#f0f0f4" />
                        <stop offset="15%" stopColor="#d8d8e0" />
                        <stop offset="40%" stopColor="#a0a0ac" />
                        <stop offset="70%" stopColor="#707078" />
                        <stop offset="100%" stopColor="#505058" />
                      </radialGradient>
                      {/* Left disc edge bevel */}
                      <radialGradient id="mcBevelL" cx="50%" cy="50%" r="50%">
                        <stop offset="85%" stopColor="rgba(0,0,0,0)" />
                        <stop offset="95%" stopColor="rgba(0,0,0,0.2)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
                      </radialGradient>
                      {/* Left highlight arc */}
                      <linearGradient id="mcHiL" x1="8" y1="4" x2="20" y2="18" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                        <stop offset="40%" stopColor="rgba(255,255,255,0.15)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                      </linearGradient>
                      {/* Right disc — lighter platinum */}
                      <radialGradient id="mcDiscR" cx="55%" cy="30%" r="50%" fx="60%" fy="25%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="15%" stopColor="#e8e8f0" />
                        <stop offset="40%" stopColor="#b8b8c4" />
                        <stop offset="70%" stopColor="#888890" />
                        <stop offset="100%" stopColor="#606068" />
                      </radialGradient>
                      <radialGradient id="mcBevelR" cx="50%" cy="50%" r="50%">
                        <stop offset="85%" stopColor="rgba(0,0,0,0)" />
                        <stop offset="95%" stopColor="rgba(0,0,0,0.15)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
                      </radialGradient>
                      <linearGradient id="mcHiR" x1="28" y1="4" x2="40" y2="18" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                        <stop offset="40%" stopColor="rgba(255,255,255,0.1)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                      </linearGradient>
                      {/* Overlap blend */}
                      <linearGradient id="mcBlend" x1="20" y1="3" x2="32" y2="31" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="rgba(220,220,230,0.3)" />
                        <stop offset="50%" stopColor="rgba(180,180,190,0.15)" />
                        <stop offset="100%" stopColor="rgba(220,220,230,0.25)" />
                      </linearGradient>
                      <clipPath id="mcClipLeft"><circle cx="18" cy="17" r="14" /></clipPath>
                      <filter id="mcShadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.4" />
                      </filter>
                    </defs>
                    {/* Left disc */}
                    <g filter="url(#mcShadow)">
                      <circle cx="18" cy="17" r="14" fill="url(#mcDiscL)" />
                      <circle cx="18" cy="17" r="14" fill="url(#mcBevelL)" />
                      <circle cx="18" cy="17" r="14" fill="url(#mcHiL)" />
                      <circle cx="18" cy="17" r="13.5" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
                    </g>
                    {/* Right disc */}
                    <g filter="url(#mcShadow)">
                      <circle cx="34" cy="17" r="14" fill="url(#mcDiscR)" />
                      <circle cx="34" cy="17" r="14" fill="url(#mcBevelR)" />
                      <circle cx="34" cy="17" r="14" fill="url(#mcHiR)" />
                      <circle cx="34" cy="17" r="13.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                    </g>
                    {/* Overlap highlight */}
                    <circle cx="34" cy="17" r="14" fill="url(#mcBlend)" clipPath="url(#mcClipLeft)" />
                  </svg>
                  <p className="text-[4.5px] tracking-[0.12em] uppercase" style={{
                    color: "rgba(255,255,255,0.22)",
                    textShadow: "0 1px 1px rgba(0,0,0,0.5), 0 -0.5px 0 rgba(255,255,255,0.03)",
                  }}>mastercard</p>
                </div>
              </div>

              {/* Middle — chip + contactless */}
              <div className="flex items-center gap-2">
                {/* Chip — premium silver/platinum metal */}
                <svg width="30" height="22" viewBox="0 0 60 44" fill="none" className="flex-shrink-0">
                  <defs>
                    <linearGradient id="chipBody" x1="0" y1="0" x2="60" y2="44" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#d8d8e0" />
                      <stop offset="20%" stopColor="#a8a8b4" />
                      <stop offset="40%" stopColor="#e0e0e8" />
                      <stop offset="55%" stopColor="#b0b0bc" />
                      <stop offset="70%" stopColor="#c8c8d4" />
                      <stop offset="85%" stopColor="#9898a4" />
                      <stop offset="100%" stopColor="#b8b8c4" />
                    </linearGradient>
                    <linearGradient id="chipShine" x1="0" y1="0" x2="0" y2="44" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="30%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="70%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                  </defs>
                  {/* Chip body */}
                  <rect x="1" y="1" width="58" height="42" rx="5" fill="url(#chipBody)" />
                  <rect x="1" y="1" width="58" height="42" rx="5" fill="url(#chipShine)" />
                  <rect x="1" y="1" width="58" height="42" rx="5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                  {/* Contact pads */}
                  <line x1="0" y1="22" x2="60" y2="22" stroke="rgba(100,100,112,0.4)" strokeWidth="0.8" />
                  <line x1="20" y1="1" x2="20" y2="43" stroke="rgba(100,100,112,0.35)" strokeWidth="0.8" />
                  <line x1="40" y1="1" x2="40" y2="43" stroke="rgba(100,100,112,0.35)" strokeWidth="0.8" />
                  <rect x="20" y="10" width="20" height="24" rx="2" fill="none" stroke="rgba(100,100,112,0.25)" strokeWidth="0.8" />
                </svg>
                {/* Contactless */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 15.5a3 3 0 0 1 0-5" />
                  <path d="M10.5 17.5a6 6 0 0 0 0-9" />
                  <path d="M14 19.5a9 9 0 0 0 0-13" />
                  <path d="M17.5 21.5a12 12 0 0 0 0-17" />
                </svg>
              </div>

              {/* Card number — embossed */}
              <p className="text-emboss-strong font-mono text-[11px] tracking-[0.2em]">5420 •••• •••• 9010</p>

              {/* Bottom — cardholder + valid thru + BLACK METAL */}
              <div className="flex items-end justify-between">
                <div className="flex gap-4 items-end">
                  <div>
                    <p className="text-[5px] uppercase tracking-[0.15em] mb-0.5" style={{ color: "rgba(255,255,255,0.15)" }}>Cardholder Name</p>
                    <p className="text-emboss text-[8px] font-semibold tracking-[0.12em] uppercase">Cardholder Name</p>
                  </div>
                  <div>
                    <p className="text-[5px] uppercase tracking-[0.1em] mb-0.5" style={{ color: "rgba(255,255,255,0.15)" }}>Valid Thru</p>
                    <p className="text-emboss text-[8px] font-semibold tracking-[0.1em]">12/28</p>
                  </div>
                </div>
                <p className="text-emboss text-[6px] font-bold tracking-[0.2em] uppercase">Black Metal</p>
              </div>
            </div>

            {/* Holographic refraction + caustic light */}
            <div className="card-holo rounded-xl" />
            <div className="card-caustic rounded-xl" />
          </div>
          </div>

          {/* Visa Signature — premium dark metal, accent blue + silver */}
          <div className="card-3d-wrap w-full mt-2.5">
          <div className="card-3d w-full rounded-xl relative overflow-hidden aspect-[1.586/1]"
            style={{
              animationDelay: "-4s",
              background: "linear-gradient(145deg, #141420 0%, #1a1a2a 20%, #161624 40%, #1e1e30 60%, #181828 80%, #141420 100%)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.4)",
            }}
          >
            {/* Brushed metal texture */}
            <div className="absolute inset-0" style={{
              background: `
                repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.008) 1px, rgba(255,255,255,0.008) 2px),
                repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.004) 4px, rgba(255,255,255,0.004) 5px)
              `,
              mixBlendMode: "overlay",
            }} />
            {/* Geometric wireframe — accent blue */}
            <svg className="absolute right-0 top-0 w-[60%] h-full opacity-[0.07]" viewBox="0 0 200 130" fill="none" preserveAspectRatio="xMaxYMid slice">
              <polygon points="120,10 180,30 160,70" stroke="#7c8cf5" strokeWidth="0.5" fill="none" />
              <polygon points="140,5 200,20 190,65 150,50" stroke="#7c8cf5" strokeWidth="0.5" fill="none" />
              <polygon points="100,40 150,25 170,60 130,80" stroke="#7c8cf5" strokeWidth="0.5" fill="none" />
              <polygon points="130,70 185,55 200,90 160,100" stroke="#7c8cf5" strokeWidth="0.5" fill="none" />
              <polygon points="110,80 160,95 140,125 100,110" stroke="#7c8cf5" strokeWidth="0.5" fill="none" />
              <polygon points="155,85 200,75 200,115 170,120" stroke="#7c8cf5" strokeWidth="0.5" fill="none" />
              <line x1="120" y1="10" x2="150" y2="50" stroke="#7c8cf5" strokeWidth="0.3" />
              <line x1="180" y1="30" x2="130" y2="80" stroke="#7c8cf5" strokeWidth="0.3" />
              <line x1="170" y1="60" x2="200" y2="90" stroke="#7c8cf5" strokeWidth="0.3" />
              <line x1="140" y1="5" x2="100" y2="40" stroke="#7c8cf5" strokeWidth="0.3" />
              <circle cx="120" cy="10" r="1.5" fill="#7c8cf5" opacity="0.4" />
              <circle cx="180" cy="30" r="1.5" fill="#7c8cf5" opacity="0.4" />
              <circle cx="150" cy="50" r="1.5" fill="#7c8cf5" opacity="0.3" />
              <circle cx="130" cy="80" r="1.5" fill="#7c8cf5" opacity="0.3" />
              <circle cx="170" cy="60" r="1.5" fill="#7c8cf5" opacity="0.4" />
            </svg>
            {/* Accent diagonal shard — subtle */}
            <div className="absolute left-0 top-0 w-[40%] h-full bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent pointer-events-none" />
            {/* Top edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

            <div className="relative z-10 flex flex-col justify-between h-full p-4">
              {/* Top row — NeoBank logo + VISA */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-1.5">
                  <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="visaCardLogo2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(124,140,245,0.15)" />
                        <stop offset="100%" stopColor="rgba(124,140,245,0.05)" />
                      </linearGradient>
                      <linearGradient id="visaCardN2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                        <stop offset="50%" stopColor="rgba(200,200,220,0.2)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#visaCardLogo2)" stroke="rgba(124,140,245,0.1)" strokeWidth="1.5" />
                    <path d="M35 72V32h6l18 28V32h6v40h-6L41 44v28h-6z" fill="url(#visaCardN2)" />
                  </svg>
                  <p className="text-[11px] font-extrabold tracking-[0.15em] uppercase" style={{
                    color: "rgba(255,255,255,0.25)",
                    textShadow: "0 1px 1px rgba(0,0,0,0.6), 0 -1px 0 rgba(255,255,255,0.04)",
                  }}>NeoBank</p>
                </div>
                {/* VISA — silver/platinum metallic */}
                <div className="flex flex-col items-end">
                  <svg width="40" height="16" viewBox="0 0 50 18" fill="none">
                    <defs>
                      <linearGradient id="visaSilver" x1="0" y1="0" x2="50" y2="18" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#e0e0ec" />
                        <stop offset="25%" stopColor="#a0a0b4" />
                        <stop offset="50%" stopColor="#f0f0f8" />
                        <stop offset="75%" stopColor="#9898ac" />
                        <stop offset="100%" stopColor="#c8c8d8" />
                      </linearGradient>
                    </defs>
                    <text x="50" y="14" textAnchor="end" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="800" fontStyle="italic" letterSpacing="1.5" fill="url(#visaSilver)">VISA</text>
                  </svg>
                  <p className="text-[5px] tracking-[0.15em] uppercase -mt-0.5" style={{
                    color: "rgba(255,255,255,0.2)",
                    textShadow: "0 1px 1px rgba(0,0,0,0.5)",
                  }}>Signature</p>
                </div>
              </div>

              {/* Middle — chip + contactless */}
              <div className="flex items-center gap-2">
                {/* Chip — silver/platinum like Mastercard */}
                <svg width="30" height="22" viewBox="0 0 60 44" fill="none" className="flex-shrink-0">
                  <defs>
                    <linearGradient id="visaChip2" x1="0" y1="0" x2="60" y2="44" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#d8d8e0" />
                      <stop offset="20%" stopColor="#a8a8b4" />
                      <stop offset="40%" stopColor="#e0e0e8" />
                      <stop offset="55%" stopColor="#b0b0bc" />
                      <stop offset="70%" stopColor="#c8c8d4" />
                      <stop offset="85%" stopColor="#9898a4" />
                      <stop offset="100%" stopColor="#b8b8c4" />
                    </linearGradient>
                    <linearGradient id="visaChipShine2" x1="0" y1="0" x2="0" y2="44" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="30%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                  </defs>
                  <rect x="1" y="1" width="58" height="42" rx="5" fill="url(#visaChip2)" />
                  <rect x="1" y="1" width="58" height="42" rx="5" fill="url(#visaChipShine2)" />
                  <rect x="1" y="1" width="58" height="42" rx="5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                  <line x1="0" y1="22" x2="60" y2="22" stroke="rgba(100,100,112,0.4)" strokeWidth="0.8" />
                  <line x1="20" y1="1" x2="20" y2="43" stroke="rgba(100,100,112,0.35)" strokeWidth="0.8" />
                  <line x1="40" y1="1" x2="40" y2="43" stroke="rgba(100,100,112,0.35)" strokeWidth="0.8" />
                  <rect x="20" y="10" width="20" height="24" rx="2" fill="none" stroke="rgba(100,100,112,0.25)" strokeWidth="0.8" />
                </svg>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 15.5a3 3 0 0 1 0-5" />
                  <path d="M10.5 17.5a6 6 0 0 0 0-9" />
                  <path d="M14 19.5a9 9 0 0 0 0-13" />
                  <path d="M17.5 21.5a12 12 0 0 0 0-17" />
                </svg>
              </div>

              {/* Card number — embossed */}
              <p className="text-emboss-strong font-mono text-[11px] tracking-[0.2em]">4276 •••• •••• 9031</p>

              {/* Bottom — cardholder + valid thru + Signature */}
              <div className="flex items-end justify-between">
                <div className="flex gap-4 items-end">
                  <div>
                    <p className="text-[5px] uppercase tracking-[0.15em] mb-0.5" style={{ color: "rgba(255,255,255,0.15)" }}>Cardholder Name</p>
                    <p className="text-emboss text-[8px] font-semibold tracking-[0.12em] uppercase">Cardholder Name</p>
                  </div>
                  <div>
                    <p className="text-[5px] uppercase tracking-[0.1em] mb-0.5" style={{ color: "rgba(255,255,255,0.15)" }}>Valid Thru</p>
                    <p className="text-emboss text-[8px] font-semibold tracking-[0.1em]">12/28</p>
                  </div>
                </div>
                <p className="text-emboss text-[6px] font-bold tracking-[0.2em] uppercase">Signature</p>
              </div>
            </div>

            {/* Holographic refraction + caustic light */}
            <div className="card-holo rounded-xl" />
            <div className="card-caustic rounded-xl" />
          </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Success indicator */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-white/70 text-sm font-medium">Карта готова</p>
          </div>
        </div>
      </div>
    </div>
  );
}
