"use client";

import { useState } from "react";
import Image from "next/image";

type RestMember = {
  img: string;
  name: string;
  focus: string;
  years: string;
  city: string;
  note: string;
};

const rest: RestMember[] = [
  {
    img: "/mrazek.png",
    name: "Tomáš Mrázek",
    focus: "Hypotéky",
    years: "3 roky",
    city: "Praha",
    note: "Financování bydlení a&nbsp;refinancování. Úvěrové strategie pro&nbsp;mladé rodiny.",
  },
  {
    img: "/lacina.png",
    name: "Tomáš Lacina",
    focus: "Investice",
    years: "2 roky",
    city: "České Budějovice",
    note: "Pravidelné investování a&nbsp;budování rezerv. Portfolia pro&nbsp;začínající investory.",
  },
  {
    img: "/jakub.png",
    name: "Jakub Záleský",
    focus: "Pojištění",
    years: "3 roky",
    city: "Soběslav",
    note: "Zajištění příjmu a&nbsp;ochrana rodiny. Revize starých smluv.",
  },
  {
    img: "/iveta .png",
    name: "Iveta Barancová",
    focus: "Investice",
    years: "4 roky",
    city: "Praha",
    note: "Dlouhodobá portfolia rodin a&nbsp;péče o&nbsp;klientské vztahy.",
  },
  {
    img: "/bolito.PNG",
    name: "Josef Bolen",
    focus: "Hypotéky",
    years: "4 roky",
    city: "Praha",
    note: "Financování investičních nemovitostí a&nbsp;developerských záměrů.",
  },
  {
    img: "/tomas_profile.PNG",
    name: "Tomáš Hořejší",
    focus: "Pojištění",
    years: "4 roky",
    city: "Tábor",
    note: "Korporátní programy a&nbsp;pojištění odpovědnosti pro&nbsp;podnikatele.",
  },
  {
    img: "/modre_vlasy.PNG",
    name: "Erika Kofroňová",
    focus: "Finanční plánování",
    years: "2 roky",
    city: "Praha",
    note: "Rodinné rozpočty, rezervy a&nbsp;penzijní příprava. První finanční plán pro&nbsp;mladé rodiny.",
  },
];

export default function TeamRest() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-14 md:mt-20">
      {/* Toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="tym-zbytek"
        className="group flex w-full items-center gap-5 border-t border-b border-rule py-5 text-left transition-colors hover:border-rule-dark"
      >
        <span
          className={`relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
            open
              ? "border-moss bg-moss text-paper"
              : "border-ink/30 text-ink group-hover:border-moss group-hover:text-moss"
          }`}
        >
          <span
            className={`text-lg leading-none transition-transform duration-500 ${
              open ? "rotate-45" : "group-hover:rotate-90"
            }`}
          >
            +
          </span>
        </span>
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink">
          Zbytek našeho týmu
        </span>
        <span className="ml-auto font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute num">
          {rest.length} lidí
        </span>
      </button>

      {/* Collapsible roster */}
      <div
        id="tym-zbytek"
        className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-14 pt-10 md:pt-14 pb-2">
            {rest.map((m, i) => (
              <article
                key={m.name}
                className={`flex gap-5 md:gap-6 transition-all duration-700 ease-out ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: open ? `${150 + i * 80}ms` : "0ms" }}
              >
                <div className="relative w-36 sm:w-44 lg:w-40 xl:w-52 aspect-[3/4] shrink-0 overflow-hidden bg-moss-deep">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 144px, (max-width: 1280px) 176px, 208px"
                    className="object-cover portrait-treatment-strong"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col py-1">
                  <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-brass-deep">
                    {m.city}
                  </div>
                  <h3
                    className="mt-3 font-display text-3xl xl:text-[2.4rem] leading-[0.98] tracking-[-0.02em] text-ink"
                  >
                    {m.name.split(" ")[0]}<br />
                    <span className="italic text-moss">
                      {m.name.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                  <p
                    className="mt-3 text-sm leading-[1.55] text-ink-soft"
                    dangerouslySetInnerHTML={{ __html: m.note }}
                  />
                  <div className="mt-auto flex items-center gap-4 pt-3 border-t border-rule font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                    <span>{m.focus}</span>
                    <span className="ml-auto num">{m.years}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
