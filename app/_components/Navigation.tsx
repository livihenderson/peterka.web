"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#filozofie", label: "Filozofie" },
  { href: "/#sluzby", label: "Služby" },
  { href: "/#tym", label: "Tým" },
  { href: "/#mapa", label: "Pobočky" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b border-rule/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 md:px-10 h-16 md:h-20">
        <Link href="/" className="group flex items-baseline gap-3 md:gap-4 select-none">
          <span
            className="font-display text-[1.9rem] md:text-[2.15rem] leading-none tracking-[-0.022em] text-ink"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
          >
            Peterka
          </span>
          <span className="hidden md:inline-flex items-baseline gap-2.5">
            <span
              className="font-display italic text-[1.4rem] leading-none text-moss translate-y-[1px]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              aria-hidden
            >
              &amp;
            </span>
            <span className="font-mono text-[11px] tracking-[0.34em] uppercase text-ink-soft">
              Kolektiv
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative font-sans text-[13px] tracking-[0.16em] uppercase text-ink-soft hover:text-moss transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-moss transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/#kontakt"
            className="group hidden md:inline-flex items-center gap-2 border border-ink/85 bg-ink text-paper px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase hover:bg-moss hover:border-moss transition-all duration-500"
          >
            Sjednat schůzku
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className="h-px bg-moss/70 origin-left"
        style={{ transform: `scaleX(${progress})`, transition: "transform 80ms linear" }}
      />

      {open && (
        <div className="md:hidden bg-bone border-t border-rule/60 px-6 py-8 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center bg-ink text-paper px-5 py-3 text-[12px] tracking-[0.18em] uppercase"
          >
            Sjednat schůzku →
          </Link>
        </div>
      )}
    </header>
  );
}
