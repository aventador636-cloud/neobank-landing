"use client";

import { useEffect, useState } from "react";

function useCurrentTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }));
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
    <div className="phone-mockup glass-shine">
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

      {/* App content */}
      <div className="absolute inset-0 top-14 px-5 pb-4 flex flex-col">
        {/* Greeting */}
        <p className="text-slate-400 text-xs mb-0.5">Добро пожаловать</p>
        <p className="text-white text-sm font-semibold mb-3">Андрей</p>

        {/* Balance card */}
        <div className="glass-strong rounded-2xl p-3 mb-3">
          <p className="text-slate-400 text-[10px] mb-1">Основной счёт</p>
          <p className="text-white text-xl font-bold tracking-tight">
            ₽ 124 850<span className="text-sm text-slate-400">.00</span>
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

        {/* Card preview */}
        <div className="relative rounded-2xl p-4 mb-3 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-blue-400/70" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-sm" />
          <div className="relative z-10">
            <p className="text-white/80 text-[9px] mb-3">NeoBank Virtual</p>
            <p className="text-white text-[13px] font-mono tracking-widest">
              •••• •••• •••• 4287
            </p>
            <div className="flex justify-between items-end mt-3">
              <p className="text-white/70 text-[9px]">09/28</p>
              <p className="text-white text-[11px] font-bold">VISA</p>
            </div>
          </div>
        </div>

        {/* Recent transactions */}
        <p className="text-slate-400 text-[10px] mb-2 font-medium">
          Последние операции
        </p>
        <div className="flex flex-col gap-2 flex-1">
          {[
            { name: "Яндекс Маркет", amount: "-2 490 ₽", icon: "🛒", color: "text-red-accent" },
            { name: "Пополнение", amount: "+50 000 ₽", icon: "💳", color: "text-emerald-500" },
            { name: "Spotify", amount: "-199 ₽", icon: "🎵", color: "text-red-accent" },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between glass-subtle rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">{tx.icon}</span>
                <span className="text-white text-[10px]">{tx.name}</span>
              </div>
              <span className={`text-[10px] font-medium ${tx.color}`}>{tx.amount}</span>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="flex justify-around pt-3 border-t border-foreground/5 mt-auto">
          {["Главная", "Карта", "Платежи", "Ещё"].map((label, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-4 h-4 rounded-full ${i === 0 ? "bg-accent" : "bg-foreground/10"}`} />
              <span className={`text-[7px] ${i === 0 ? "text-accent" : "text-slate-400"}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
