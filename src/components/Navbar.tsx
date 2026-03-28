"use client";

import { useState } from "react";
import { LogoWordmark } from "@/components/Logo";

const navItems = [
  { label: "Возможности", href: "#features" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "О нас", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between px-8 md:px-16 py-5">
      <LogoWordmark iconSize={36} />

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-slate-300 hover:text-foreground px-4 py-2 rounded-full hover:bg-white/5 transition-all"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Войти в личный кабинет"
          className="glass text-sm text-foreground px-5 py-2.5 rounded-full hover:bg-white/[0.06] transition-all"
        >
          Войти
        </button>

        {/* Burger — mobile only */}
        <button
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block w-5 h-[1.5px] bg-slate-300 rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-slate-300 rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-slate-300 rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl p-4 flex flex-col gap-1 bg-background/95 backdrop-blur-2xl border border-white/[0.08] shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300 hover:text-foreground px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
