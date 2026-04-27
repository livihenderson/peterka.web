"use client";

import { useEffect, useRef, useState } from "react";

const stats: {
  prefix?: string;
  value: number;
  suffix?: string;
  lbl: string;
  sub: string;
}[] = [
  { value: 41, suffix: "+", lbl: "let zkušeností", sub: "v součtu napříč týmem" },
  { value: 100, suffix: "%", lbl: "nezávislost", sub: "v doporučeních klientům" },
  { value: 5, lbl: "oblastí péče", sub: "pod jednou střechou" },
  { prefix: "+", value: 900, lbl: "klientů", sub: "v součtu napříč týmem" },
];

function CountUp({
  end,
  duration = 1600,
  delay = 0,
}: {
  end: number;
  duration?: number;
  delay?: number;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(end);
      return;
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
              const eased = 1 - Math.pow(1 - t, 4);
              setN(Math.round(end * eased));
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
  }, [end, duration, delay]);

  return <span ref={ref}>{n}</span>;
}

export default function Authority() {
  return (
    <section className="relative bg-moss text-paper overflow-hidden">
      {/* Edge hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-brass/40" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-brass/40" />

      <div className="mx-auto max-w-[88rem] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass">
              § 01 — Výchozí body
            </div>
            <h2
              className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Čísla, která <span className="italic">stojí </span>za přístupem.
            </h2>
            <p className="mt-6 max-w-md text-paper/75 leading-relaxed">
              Naši klienti nepřicházejí pro produkt. Přicházejí proto, že hledají
              tým, který bude jejich dlouhodobým partnerem — v dobrých i&nbsp;složitých
              chvílích života.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-rule-dark">
            {stats.map((s, i) => (
              <div
                key={i}
                className="reveal bg-moss p-7 md:p-8 flex flex-col justify-between min-h-[180px]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="font-display num text-5xl md:text-6xl leading-[0.9] tracking-[-0.02em]"
                  style={{
                    fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                  }}
                >
                  {s.prefix}
                  <CountUp end={s.value} delay={i * 120} />
                  {s.suffix}
                </div>
                <div className="mt-6">
                  <div className="font-display text-lg italic text-brass-light">
                    {s.lbl}
                  </div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.22em] uppercase text-paper/60">
                    {s.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
