"use client";

import { useEffect, useState, useRef } from "react";

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

function useAnimatedNumber(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { value, ref };
}

function formatBalance(n: number) {
  return n.toLocaleString("ru-RU");
}

export default function PhoneMockup() {
  const time = useCurrentTime();
  const { value: balance, ref: balanceRef } = useAnimatedNumber(124850);

  return (
    <div className="phone-wrapper">
      {/* Glow ring */}
      <div className="phone-glow" />

      <div className="phone-mockup phone-3d">
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-12 flex items-end justify-between px-6 pb-1 text-[10px] text-slate-400 z-5">
          <span>{time}</span>
          <div className="flex gap-1 items-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
            </svg>
          </div>
        </div>

        {/* App content */}
        <div className="absolute inset-0 top-14 px-5 pb-4 flex flex-col">
          {/* Greeting */}
          <p className="text-slate-400 text-xs mb-0.5">Добро пожаловать</p>
          <p className="text-white text-sm font-semibold mb-3">Андрей</p>

          {/* Balance card */}
          <div ref={balanceRef} className="glass-strong rounded-2xl p-3 mb-3">
            <p className="text-slate-400 text-[10px] mb-1">Основной счёт</p>
            <p className="text-white text-xl font-bold tracking-tight">
              ₽ {formatBalance(balance)}<span className="text-sm text-slate-400">,00</span>
            </p>
            <div className="flex gap-3 mt-2">
              <button className="bg-accent/10 text-accent text-[9px] px-3 py-1.5 rounded-full font-medium">
                Пополнить
              </button>
              <button className="bg-foreground/5 text-slate-400 text-[9px] px-3 py-1.5 rounded-full font-medium">
                Перевести
              </button>
            </div>
          </div>

          {/* Мои карты */}
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-white/60 text-[10px] font-medium tracking-wide">Мои карты</p>
            <p className="text-accent text-[8px] font-medium">+ Добавить</p>
          </div>

          {/* Mastercard — premium modern */}
          <div className="metal-card relative rounded-xl p-4 mb-2.5 overflow-hidden aspect-[1.586/1]">
            <div className="metal-texture" />
            {/* Top edge highlight — warm */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/12 to-transparent z-[2]" />
            {/* Horizontal ambient glow — right side */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-white/[0.03] to-transparent z-[1] pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Top — chip+contactless left, logo right */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Chip */}
                  <div className="w-6 h-[18px] rounded-[2px] overflow-hidden relative flex-shrink-0 opacity-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4b876] via-[#c9a94e] to-[#b8943d]" />
                    <div className="absolute inset-[1px] rounded-[1.5px] border border-[#a07e2f]/35" />
                    <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-[#a07e2f]/40" />
                    <div className="absolute top-0 bottom-0 left-1/3 w-[0.5px] bg-[#a07e2f]/35" />
                    <div className="absolute top-0 bottom-0 left-2/3 w-[0.5px] bg-[#a07e2f]/35" />
                  </div>
                  {/* Contactless */}
                  <svg className="w-5 h-5 opacity-50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 15.5a3 3 0 0 1 0-5" /><path d="M10.5 17.5a6 6 0 0 0 0-9" /><path d="M14 19.5a9 9 0 0 0 0-13" /><path d="M17.5 21.5a12 12 0 0 0 0-17" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="mcLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4f6ef7" />
                        <stop offset="100%" stopColor="#3b5de6" />
                      </linearGradient>
                      <linearGradient id="mcLogoShine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                      </linearGradient>
                      <linearGradient id="mcShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
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
                      <linearGradient id="mcLetterN" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#e0e7ff" />
                      </linearGradient>
                      <clipPath id="mcLogoClip">
                        <rect x="4" y="4" width="92" height="92" rx="22" />
                      </clipPath>
                      <filter id="mcShadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.2" />
                      </filter>
                    </defs>
                    <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#mcLogoBg)" />
                    <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#mcLogoShine)" />
                    <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#mcShimmer)" clipPath="url(#mcLogoClip)" />
                    <ellipse cx="50" cy="52" rx="36" ry="34" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" transform="rotate(-15, 50, 52)" />
                    <g filter="url(#mcShadow)">
                      <path d="M35 72V32h6l18 28V32h6v40h-6L41 44v28h-6z" fill="url(#mcLetterN)" />
                    </g>
                    <circle cx="26" cy="22" r="6" fill="rgba(255,255,255,0.15)" />
                  </svg>
                  <p className="text-white/80 text-[9px] font-bold tracking-[0.2em] uppercase">NeoBank</p>
                </div>
              </div>

              {/* Card number */}
              <p className="text-white/70 text-[11px] font-mono tracking-[0.2em]">
                5123 •••• •••• 4287
              </p>

              {/* Bottom — cardholder + Mastercard World Elite */}
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/45 text-[6px] uppercase tracking-[0.2em] mb-0.5">Cardholder</p>
                  <p className="text-white/80 text-[9px] font-semibold tracking-[0.12em] uppercase">Andrey Vlasov</p>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  {/* MC circles — metallic SVG */}
                  <svg width="28" height="18" viewBox="0 0 44 28" fill="none">
                    <defs>
                      <linearGradient id="mcCircleL" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#d0d0d8" />
                        <stop offset="40%" stopColor="#909098" />
                        <stop offset="70%" stopColor="#c8c8d0" />
                        <stop offset="100%" stopColor="#a0a0a8" />
                      </linearGradient>
                      <linearGradient id="mcCircleR" x1="16" y1="0" x2="44" y2="28" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#e0e0e8" />
                        <stop offset="35%" stopColor="#b0b0bc" />
                        <stop offset="65%" stopColor="#f0f0f4" />
                        <stop offset="100%" stopColor="#bcbcc8" />
                      </linearGradient>
                    </defs>
                    <circle cx="14" cy="14" r="13" fill="url(#mcCircleL)" opacity="0.85" />
                    <circle cx="30" cy="14" r="13" fill="url(#mcCircleR)" opacity="0.7" />
                  </svg>
                  <p className="text-white/50 text-[5px] tracking-[0.15em] uppercase font-medium">World Elite</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visa — premium modern */}
          <div className="visa-card relative rounded-xl p-4 overflow-hidden aspect-[1.586/1]">
            <div className="metal-texture" />
            {/* Top edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent z-[2]" />
            {/* Geometric shard — accent diagonal */}
            <div className="visa-card-shard z-[1]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Top — chip+contactless left, logo right */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Chip */}
                  <div className="w-6 h-[18px] rounded-[2px] overflow-hidden relative flex-shrink-0 opacity-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4b876] via-[#c9a94e] to-[#b8943d]" />
                    <div className="absolute inset-[1px] rounded-[1.5px] border border-[#a07e2f]/35" />
                    <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-[#a07e2f]/40" />
                    <div className="absolute top-0 bottom-0 left-1/3 w-[0.5px] bg-[#a07e2f]/35" />
                    <div className="absolute top-0 bottom-0 left-2/3 w-[0.5px] bg-[#a07e2f]/35" />
                  </div>
                  {/* Contactless */}
                  <svg className="w-5 h-5 opacity-50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 15.5a3 3 0 0 1 0-5" /><path d="M10.5 17.5a6 6 0 0 0 0-9" /><path d="M14 19.5a9 9 0 0 0 0-13" /><path d="M17.5 21.5a12 12 0 0 0 0-17" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                    <defs>
                      <linearGradient id="cardLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4f6ef7" />
                        <stop offset="100%" stopColor="#3b5de6" />
                      </linearGradient>
                      <linearGradient id="cardLogoShine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                      </linearGradient>
                      <linearGradient id="cardShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
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
                      <linearGradient id="cardLetterN" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#e0e7ff" />
                      </linearGradient>
                      <clipPath id="cardLogoClip">
                        <rect x="4" y="4" width="92" height="92" rx="22" />
                      </clipPath>
                      <filter id="cardShadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.2" />
                      </filter>
                    </defs>
                    <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#cardLogoBg)" />
                    <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#cardLogoShine)" />
                    <rect x="4" y="4" width="92" height="92" rx="22" fill="url(#cardShimmer)" clipPath="url(#cardLogoClip)" />
                    <ellipse cx="50" cy="52" rx="36" ry="34" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" transform="rotate(-15, 50, 52)" />
                    <g filter="url(#cardShadow)">
                      <path d="M35 72V32h6l18 28V32h6v40h-6L41 44v28h-6z" fill="url(#cardLetterN)" />
                    </g>
                    <circle cx="26" cy="22" r="6" fill="rgba(255,255,255,0.15)" />
                  </svg>
                  <p className="text-white/80 text-[9px] font-bold tracking-[0.2em] uppercase">NeoBank</p>
                </div>
              </div>

              {/* Card number */}
              <p className="text-white/70 text-[11px] font-mono tracking-[0.2em]">
                4276 •••• •••• 9031
              </p>

              {/* Bottom — cardholder + Visa Infinite */}
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/45 text-[6px] uppercase tracking-[0.2em] mb-0.5">Cardholder</p>
                  <p className="text-white/80 text-[9px] font-semibold tracking-[0.12em] uppercase">Andrey Vlasov</p>
                </div>
                <div className="flex flex-col items-end">
                  <svg width="48" height="20" viewBox="0 0 48 20" fill="none">
                    <defs>
                      <linearGradient id="visaMetal" x1="0" y1="0" x2="48" y2="20" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#e8e8f0" />
                        <stop offset="20%" stopColor="#a0a0b0" />
                        <stop offset="40%" stopColor="#f4f4fc" />
                        <stop offset="60%" stopColor="#b0b0c0" />
                        <stop offset="80%" stopColor="#e0e0ec" />
                        <stop offset="100%" stopColor="#c8c8d4" />
                      </linearGradient>
                    </defs>
                    <text x="48" y="15" textAnchor="end" fontFamily="system-ui, sans-serif" fontSize="17" fontWeight="700" fontStyle="italic" letterSpacing="1" fill="url(#visaMetal)">VISA</text>
                  </svg>
                  <p className="text-white/50 text-[6px] tracking-[0.2em] uppercase -mt-0.5 font-medium">Infinite</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around pt-3 border-t border-white/[0.06] mt-auto">
            {[
              { label: "Главная", icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-4.5v-5.5a1 1 0 00-1-1h-3a1 1 0 00-1 1V21H6a1 1 0 01-1-1V9.5z" />
                </svg>
              )},
              { label: "Карта", icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2.5" />
                  <path d="M2 10h20" />
                </svg>
              )},
              { label: "Платежи", icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 15l5-5 5 5" />
                  <path d="M12 10v10" />
                  <path d="M19.5 7.5c0-2.5-2-4.5-4.5-4.5H9C6.5 3 4.5 5 4.5 7.5" />
                </svg>
              )},
              { label: "Ещё", icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="6" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="12" cy="18" r="1.5" />
                </svg>
              )},
            ].map(({ label, icon }, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className={i === 0 ? "text-accent" : "text-white/25"}>
                  {icon}
                </div>
                <span
                  className={`text-[7px] ${i === 0 ? "text-accent font-medium" : "text-white/30"}`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
