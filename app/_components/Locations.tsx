"use client";

import { useState } from "react";

const cities = [
  {
    id: "praha",
    name: "Praha",
    addr: "Vinohradská 184, Praha 3",
    lead: "Tomáš Peterka · Iva Petříková",
    cx: 290,
    cy: 175,
    note: "Centrální pobočka",
  },
  {
    id: "tabor",
    name: "Tábor",
    addr: "9. května 1282, Tábor",
    lead: "Lukáš Hořejší",
    cx: 300,
    cy: 245,
    note: "Jihočeský region",
  },
  {
    id: "cb",
    name: "České Budějovice",
    addr: "Lannova třída 16, Č. Budějovice",
    lead: "Josef Albrecht",
    cx: 270,
    cy: 295,
    note: "Jihočeský region",
  },
];

// Stylized Czech Republic outline. Hand-tuned approximation —
// recognizable westward bump (Cheb), Moravian eastern extension (Ostrava),
// Břeclav corner, and Šumava arc on the south.
const CZ_PATH =
  "M 70,210 Q 60,195 78,178 L 88,168 L 105,178 L 122,160 Q 138,152 158,160 L 192,148 Q 218,132 250,130 L 290,118 Q 320,110 350,114 L 388,108 L 422,116 L 458,108 L 498,116 Q 532,124 562,132 L 598,140 Q 622,148 642,160 L 668,148 L 690,168 Q 712,180 720,200 L 738,210 Q 748,228 738,250 L 720,268 Q 712,290 690,304 L 678,330 Q 660,344 632,348 L 600,364 Q 572,372 540,360 L 508,372 Q 478,378 448,372 L 412,382 Q 378,388 348,378 L 318,388 Q 286,392 258,378 L 228,372 Q 198,360 178,340 L 152,330 Q 130,316 118,294 L 96,280 Q 78,262 78,242 L 70,228 Z";

export default function Locations() {
  const [active, setActive] = useState<string | null>("praha");

  return (
    <section
      id="mapa"
      className="relative py-28 md:py-40 bg-moss text-paper overflow-hidden"
    >
      {/* Top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-brass/40" />

      {/* Subtle radial */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-50"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 30%, rgba(201,164,113,0.10) 0%, rgba(30,58,44,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-light">
              § 05 — Lokality
            </div>
            <h2
              className="mt-6 font-display text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.02] tracking-[-0.025em]"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Tři místa.<br />
              <span className="italic text-brass-light">Jeden&nbsp;přístup.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:flex md:items-end">
            <p className="text-lg leading-[1.6] text-paper/80 max-w-md">
              Klienty obsluhujeme po&nbsp;celé republice — osobně, online,
              i&nbsp;u&nbsp;vás doma. Kdykoli chcete potřesení rukou, najdete
              nás v&nbsp;Praze, Českých Budějovicích nebo&nbsp;Táboře.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Map */}
          <div className="col-span-12 lg:col-span-8 reveal">
            <div className="relative aspect-[800/420]">
              <svg
                viewBox="0 0 800 420"
                className="absolute inset-0 w-full h-full"
                fill="none"
              >
                <defs>
                  <pattern
                    id="hatch"
                    width="6"
                    height="6"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(35)"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="6"
                      stroke="rgba(201,164,113,0.18)"
                      strokeWidth="1"
                    />
                  </pattern>
                  <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.02"
                      numOctaves="2"
                      seed="3"
                    />
                    <feDisplacementMap in="SourceGraphic" scale="2.4" />
                  </filter>
                </defs>

                {/* Outer shadow */}
                <path
                  d={CZ_PATH}
                  fill="url(#hatch)"
                  stroke="rgba(201,164,113,0.55)"
                  strokeWidth="1.2"
                  filter="url(#rough)"
                />
                {/* Inner subtle outline */}
                <path
                  d={CZ_PATH}
                  fill="none"
                  stroke="rgba(248,243,231,0.18)"
                  strokeWidth="0.6"
                />

                {/* Internal river / decorative line — abstracted Vltava */}
                <path
                  d="M 220,70 Q 240,140 280,200 Q 320,260 340,330 Q 360,380 360,400"
                  fill="none"
                  stroke="rgba(201,164,113,0.20)"
                  strokeWidth="0.8"
                  strokeDasharray="2 4"
                />

                {/* Grid label dots */}
                {Array.from({ length: 60 }).map((_, i) => {
                  const x = 60 + (i % 12) * 60;
                  const y = 130 + Math.floor(i / 12) * 50;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="0.6"
                      fill="rgba(248,243,231,0.10)"
                    />
                  );
                })}

                {/* City markers */}
                {cities.map((c) => {
                  const isActive = active === c.id;
                  return (
                    <g
                      key={c.id}
                      onMouseEnter={() => setActive(c.id)}
                      onClick={() => setActive(c.id)}
                      className="cursor-pointer"
                    >
                      {/* ping */}
                      {isActive && (
                        <circle
                          cx={c.cx}
                          cy={c.cy}
                          r="8"
                          fill="rgba(201,164,113,0.55)"
                          className="ping-soft"
                        />
                      )}
                      <circle
                        cx={c.cx}
                        cy={c.cy}
                        r={isActive ? 7 : 5}
                        fill={isActive ? "#C9A471" : "#F8F3E7"}
                        stroke={isActive ? "#F8F3E7" : "rgba(201,164,113,0.6)"}
                        strokeWidth={isActive ? 2 : 1}
                        style={{ transition: "all 400ms cubic-bezier(0.2,0.7,0.2,1)" }}
                      />
                      <line
                        x1={c.cx}
                        y1={c.cy}
                        x2={c.cx + 28}
                        y2={c.cy - 30}
                        stroke="rgba(248,243,231,0.5)"
                        strokeWidth="0.8"
                      />
                      <g
                        transform={`translate(${c.cx + 30}, ${c.cy - 32})`}
                        style={{ transition: "opacity 400ms" }}
                      >
                        <text
                          fontFamily="var(--font-fraunces), serif"
                          fontSize="18"
                          fontStyle="italic"
                          fill={isActive ? "#F8F3E7" : "rgba(248,243,231,0.7)"}
                        >
                          {c.name}
                        </text>
                        <text
                          y="14"
                          fontFamily="var(--font-jetbrains), monospace"
                          fontSize="8.5"
                          letterSpacing="2"
                          fill="rgba(201,164,113,0.85)"
                        >
                          {c.note.toUpperCase()}
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* Compass rose */}
                <g transform="translate(700, 60)">
                  <circle
                    cx="0"
                    cy="0"
                    r="22"
                    fill="none"
                    stroke="rgba(201,164,113,0.4)"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="14"
                    fill="none"
                    stroke="rgba(201,164,113,0.25)"
                    strokeWidth="0.5"
                  />
                  <line x1="0" y1="-22" x2="0" y2="22" stroke="rgba(201,164,113,0.45)" strokeWidth="0.8" />
                  <line x1="-22" y1="0" x2="22" y2="0" stroke="rgba(201,164,113,0.45)" strokeWidth="0.8" />
                  <text
                    y="-26"
                    textAnchor="middle"
                    fontFamily="var(--font-jetbrains), monospace"
                    fontSize="9"
                    fill="rgba(201,164,113,0.85)"
                    letterSpacing="2"
                  >
                    N
                  </text>
                </g>

                {/* Title plate */}
                <g transform="translate(60, 380)">
                  <text
                    fontFamily="var(--font-jetbrains), monospace"
                    fontSize="9"
                    fill="rgba(248,243,231,0.55)"
                    letterSpacing="3"
                  >
                    PŮSOBNOST · ČESKÁ REPUBLIKA · MMXXVI
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* City listings */}
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-light mb-6">
              Pobočky
            </div>
            <ol className="flex flex-col">
              {cities.map((c, i) => {
                const isActive = active === c.id;
                return (
                  <li
                    key={c.id}
                    onMouseEnter={() => setActive(c.id)}
                    className={`group relative cursor-pointer border-b border-rule-dark py-6 transition-colors duration-500 ${
                      isActive ? "bg-moss-deep" : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-4 px-2">
                      <span
                        className="font-display num text-3xl text-brass-light"
                        style={{
                          fontVariationSettings:
                            "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                        }}
                      >
                        0{i + 1}
                      </span>
                      <div className="flex-1">
                        <h3
                          className="font-display text-3xl tracking-[-0.02em] text-paper"
                          style={{
                            fontVariationSettings:
                              "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                          }}
                        >
                          {c.name}
                        </h3>
                        <p className="mt-1 text-paper/70 text-sm">{c.addr}</p>
                        <p className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-brass-light">
                          Vede · {c.lead}
                        </p>
                      </div>
                      <span
                        className={`text-paper/50 transition-all duration-500 ${
                          isActive ? "translate-x-1 text-brass-light" : ""
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p className="mt-10 text-sm leading-[1.6] text-paper/65 max-w-sm">
              Působnost po celé ČR · Schůzky možné u&nbsp;klienta i&nbsp;online ·
              Komunikace v&nbsp;češtině, angličtině a&nbsp;němčině.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
