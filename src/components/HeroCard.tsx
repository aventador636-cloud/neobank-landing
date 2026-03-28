"use client";

import { useRef, useState } from "react";

export default function HeroCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spinning, setSpinning] = useState(false);

  const handleTap = () => {
    if (spinning) return;
    setSpinning(true);
    const el = cardRef.current;
    if (!el) return;

    el.style.animation = "none";
    // Force reflow
    void el.offsetHeight;
    el.style.animation = "card-spin-360 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards";

    const onEnd = () => {
      el.style.animation = "";
      setSpinning(false);
      el.removeEventListener("animationend", onEnd);
    };
    el.addEventListener("animationend", onEnd);
  };

  return (
    <div className="relative flex justify-center lg:hidden py-4">
      {/* Glow behind card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-64 h-32 bg-accent/10 rounded-full blur-[80px] transition-all duration-700"
          style={spinning ? { opacity: 1, transform: "scale(1.3)" } : undefined}
        />
      </div>

      <div
        className="w-64 animate-float cursor-pointer"
        style={{ perspective: "800px" }}
        onClick={handleTap}
      >
        <div
          ref={cardRef}
          className="card-3d w-full rounded-xl relative overflow-hidden aspect-[1.586/1]"
          style={{
            background:
              "linear-gradient(145deg, #1a1a1e 0%, #222226 20%, #1c1c20 40%, #252529 60%, #1e1e22 80%, #1a1a1e 100%)",
            boxShadow:
              "0 8px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.4)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Brushed metal texture */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.008) 1px, rgba(255,255,255,0.008) 2px),
                repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.004) 4px, rgba(255,255,255,0.004) 5px)
              `,
              mixBlendMode: "overlay",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="relative z-10 flex flex-col justify-between h-full p-4">
            {/* Top row */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-1.5">
                <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="hcLogoDark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
                    </linearGradient>
                    <linearGradient id="hcLogoN" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#hcLogoDark)" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
                  <path d="M35 72V32h6l18 28V32h6v40h-6L41 44v28h-6z" fill="url(#hcLogoN)" />
                </svg>
                <p
                  className="text-[11px] font-extrabold tracking-[0.15em] uppercase"
                  style={{
                    color: "rgba(255,255,255,0.25)",
                    textShadow: "0 1px 1px rgba(0,0,0,0.6), 0 -1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  NeoBank
                </p>
              </div>
              {/* Mastercard */}
              <div className="flex flex-col items-end gap-0.5">
                <svg width="32" height="22" viewBox="0 0 52 34" fill="none">
                  <defs>
                    <radialGradient id="hcDiscL" cx="40%" cy="30%" r="50%" fx="35%" fy="25%">
                      <stop offset="0%" stopColor="#f0f0f4" />
                      <stop offset="15%" stopColor="#d8d8e0" />
                      <stop offset="40%" stopColor="#a0a0ac" />
                      <stop offset="70%" stopColor="#707078" />
                      <stop offset="100%" stopColor="#505058" />
                    </radialGradient>
                    <radialGradient id="hcDiscR" cx="55%" cy="30%" r="50%" fx="60%" fy="25%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="15%" stopColor="#e8e8f0" />
                      <stop offset="40%" stopColor="#b8b8c4" />
                      <stop offset="70%" stopColor="#888890" />
                      <stop offset="100%" stopColor="#606068" />
                    </radialGradient>
                    <clipPath id="hcClipLeft"><circle cx="18" cy="17" r="14" /></clipPath>
                    <linearGradient id="hcBlend" x1="20" y1="3" x2="32" y2="31" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(220,220,230,0.3)" />
                      <stop offset="50%" stopColor="rgba(180,180,190,0.15)" />
                      <stop offset="100%" stopColor="rgba(220,220,230,0.25)" />
                    </linearGradient>
                  </defs>
                  <circle cx="18" cy="17" r="14" fill="url(#hcDiscL)" />
                  <circle cx="34" cy="17" r="14" fill="url(#hcDiscR)" />
                  <circle cx="34" cy="17" r="14" fill="url(#hcBlend)" clipPath="url(#hcClipLeft)" />
                </svg>
              </div>
            </div>

            {/* Chip + contactless */}
            <div className="flex items-center gap-2">
              <svg width="30" height="22" viewBox="0 0 60 44" fill="none" className="flex-shrink-0">
                <defs>
                  <linearGradient id="hcChip" x1="0" y1="0" x2="60" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#d8d8e0" />
                    <stop offset="20%" stopColor="#a8a8b4" />
                    <stop offset="40%" stopColor="#e0e0e8" />
                    <stop offset="55%" stopColor="#b0b0bc" />
                    <stop offset="70%" stopColor="#c8c8d4" />
                    <stop offset="85%" stopColor="#9898a4" />
                    <stop offset="100%" stopColor="#b8b8c4" />
                  </linearGradient>
                </defs>
                <rect x="1" y="1" width="58" height="42" rx="5" fill="url(#hcChip)" />
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
              </svg>
            </div>

            {/* Card number */}
            <p className="text-emboss-strong font-mono text-[11px] tracking-[0.2em]">
              5420 •••• •••• 9010
            </p>

            {/* Bottom */}
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

          <div className="card-holo rounded-xl" />
          <div className="card-caustic rounded-xl" />
        </div>
      </div>
    </div>
  );
}
