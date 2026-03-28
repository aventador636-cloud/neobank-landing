"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollPhone({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable scroll effect on mobile to avoid stacking with phone-3d

    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    let lastScroll = -1;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const center = (rect.top + rect.height / 2) / vh;
      const progress = Math.max(-1, Math.min(1, (center - 0.5) * 2));

      const translateY = progress * -30;
      const rotateX = progress * 4;
      const rotateY = progress * -3;
      const scale = 1 + (1 - Math.abs(progress)) * 0.03;

      el.style.transform = `translateY(${translateY}px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    };

    const onScroll = () => {
      if (lastScroll === window.scrollY) return;
      lastScroll = window.scrollY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      style={isMobile ? undefined : { willChange: "transform", transition: "transform 0.15s ease-out" }}
    >
      {children}
    </div>
  );
}
