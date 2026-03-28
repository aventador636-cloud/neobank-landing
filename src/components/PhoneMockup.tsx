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
          <div className="glass-strong rounded-2xl p-3 mb-3">
            <p className="text-slate-400 text-[10px] mb-1">Основной счёт</p>
            <p className="text-white text-xl font-bold tracking-tight">
              ₽ 124 850<span className="text-sm text-slate-400">,00</span>
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

          {/* Mastercard — metal */}
          <div className="metal-card relative rounded-xl p-4 mb-2.5 overflow-hidden aspect-[1.586/1]">
            <div className="metal-texture" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-[2]" />
            <svg className="absolute -top-2 -right-2 w-24 h-24 opacity-[0.04]" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.3">
              <circle cx="50" cy="50" r="45" /><circle cx="50" cy="50" r="35" /><circle cx="50" cy="50" r="25" />
              <line x1="5" y1="50" x2="95" y2="50" /><line x1="50" y1="5" x2="50" y2="95" />
              <line x1="15" y1="15" x2="85" y2="85" /><line x1="85" y1="15" x2="15" y2="85" />
            </svg>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <p className="text-white/40 text-[8px] font-semibold tracking-[0.25em] uppercase">NeoBank</p>
                <p className="text-white/25 text-[6px] tracking-[0.2em] uppercase">World Elite</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-6 rounded-[3px] overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4b876] via-[#c9a94e] to-[#b8943d]" />
                  <div className="absolute inset-[1.5px] rounded-[2px] border border-[#a07e2f]/40" />
                  <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-[#a07e2f]/50" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-[0.5px] bg-[#a07e2f]/40" />
                  <div className="absolute top-0 bottom-0 left-2/3 w-[0.5px] bg-[#a07e2f]/40" />
                </div>
                <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 15.5a3 3 0 0 1 0-5" /><path d="M10.5 17.5a6 6 0 0 0 0-9" /><path d="M14 19.5a9 9 0 0 0 0-13" /><path d="M17.5 21.5a12 12 0 0 0 0-17" />
                </svg>
              </div>
              <p className="card-embossed text-[11px] font-mono tracking-[0.2em]">
                5123 •••• •••• 4287
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/20 text-[5px] uppercase tracking-[0.15em] mb-0.5">Valid thru</p>
                  <p className="card-embossed text-[8px] font-mono">09/28</p>
                </div>
                <div className="flex -space-x-1.5">
                  <div className="w-4 h-4 rounded-full mc-circle-left" />
                  <div className="w-4 h-4 rounded-full mc-circle-right" />
                </div>
              </div>
            </div>
          </div>

          {/* Visa — dark premium */}
          <div className="visa-card relative rounded-xl p-4 overflow-hidden aspect-[1.586/1]">
            <div className="metal-texture" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-[2]" />
            {/* Subtle diagonal lines pattern */}
            <svg className="absolute bottom-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 200 130" fill="none" stroke="white" strokeWidth="0.3">
              <line x1="0" y1="130" x2="200" y2="0" /><line x1="40" y1="130" x2="200" y2="26" />
              <line x1="80" y1="130" x2="200" y2="52" /><line x1="120" y1="130" x2="200" y2="78" />
              <line x1="160" y1="130" x2="200" y2="104" />
            </svg>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <p className="text-white/40 text-[8px] font-semibold tracking-[0.25em] uppercase">NeoBank</p>
                <p className="text-white/25 text-[6px] tracking-[0.2em] uppercase">Infinite</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-6 rounded-[3px] overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4b876] via-[#c9a94e] to-[#b8943d]" />
                  <div className="absolute inset-[1.5px] rounded-[2px] border border-[#a07e2f]/40" />
                  <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-[#a07e2f]/50" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-[0.5px] bg-[#a07e2f]/40" />
                  <div className="absolute top-0 bottom-0 left-2/3 w-[0.5px] bg-[#a07e2f]/40" />
                </div>
                <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 15.5a3 3 0 0 1 0-5" /><path d="M10.5 17.5a6 6 0 0 0 0-9" /><path d="M14 19.5a9 9 0 0 0 0-13" /><path d="M17.5 21.5a12 12 0 0 0 0-17" />
                </svg>
              </div>
              <p className="card-embossed text-[11px] font-mono tracking-[0.2em]">
                4276 •••• •••• 9031
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/20 text-[5px] uppercase tracking-[0.15em] mb-0.5">Valid thru</p>
                  <p className="card-embossed text-[8px] font-mono">11/29</p>
                </div>
                {/* Visa logo — metallic */}
                <p className="visa-logo text-[13px] font-bold italic tracking-wide">VISA</p>
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
