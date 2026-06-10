"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates every number inside a stat string from 0 to its final value
 * once the element scrolls into view — text around the numbers stays put,
 * so values like "70 %", "−40 %", "7–9 %", "2 světy" or "0 Kč" all work.
 */
export default function StatValue({
  value,
  delay = 0,
  duration = 1600,
}: {
  value: string;
  delay?: number;
  duration?: number;
}) {
  const [p, setP] = useState(0); // eased progress 0..1
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const raf = requestAnimationFrame(() => setP(1));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const startAt = performance.now() + delay;
            const tick = (now: number) => {
              if (now < startAt) {
                requestAnimationFrame(tick);
                return;
              }
              const t = Math.min(1, (now - startAt) / duration);
              setP(1 - Math.pow(1 - t, 4));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, duration]);

  return (
    <span ref={ref}>
      {value.split(/(\d+)/).map((part, i) =>
        /^\d+$/.test(part) ? (
          <span key={i}>{Math.round(Number(part) * p)}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}
