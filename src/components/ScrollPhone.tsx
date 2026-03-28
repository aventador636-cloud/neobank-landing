"use client";

import { useEffect, useRef } from "react";

export default function ScrollPhone({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    let lastScroll = -1;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Element center position relative to viewport (0 = top, 1 = bottom)
      const center = (rect.top + rect.height / 2) / vh;
      // Normalize to -1 (above) ... 0 (center) ... 1 (below)
      const progress = Math.max(-1, Math.min(1, (center - 0.5) * 2));

      // Parallax — shift Y by up to 30px
      const translateY = progress * -30;

      // Subtle tilt — rotateX ±4°, rotateY ±3°
      const rotateX = progress * 4;
      const rotateY = progress * -3;

      // Subtle scale — slightly bigger at center
      const scale = 1 + (1 - Math.abs(progress)) * 0.03;

      el.style.transform = `translateY(${translateY}px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    };

    const onScroll = () => {
      if (lastScroll === window.scrollY) return;
      lastScroll = window.scrollY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    // Initial position
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ willChange: "transform", transition: "transform 0.15s ease-out" }}
    >
      {children}
    </div>
  );
}
