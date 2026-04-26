"use client";

import { useState } from "react";
import { CZ_OUTLINE_D, CZ_VIEWBOX } from "./cz-map";

const cities = [
  {
    id: "praha",
    name: "Praha",
    addr: "Vinohradská 184, Praha 3",
    lead: "Tomáš Peterka · Iva Petříková",
    cx: 1877,
    cy: 1242,
    note: "Centrální pobočka",
  },
  {
    id: "tabor",
    name: "Tábor",
    addr: "9. května 1282, Tábor",
    lead: "Lukáš Hořejší",
    cx: 2047,
    cy: 2030,
    note: "Jihočeský region",
  },
  {
    id: "cb",
    name: "České Budějovice",
    addr: "Lannova třída 16, Č. Budějovice",
    lead: "Josef Albrecht",
    cx: 1905,
    cy: 2554,
    note: "Jihočeský region",
  },
];

// Scale factor relative to original 800-wide viewBox is ~6.68 — every
// stroke/font/marker is multiplied so on-screen rendering matches before.
const S = 6.68;

export default function Locations() {
  const [active, setActive] = useState<string | null>("praha");

  return (
    <section
      id="mapa"
      className="relative py-28 md:py-40 bg-moss text-paper overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-brass/40" />

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

        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-start">
          {/* Map */}
          <div className="col-span-12 lg:col-span-8 reveal">
            <div className="relative" style={{ aspectRatio: "5342 / 3123" }}>
              <svg
                viewBox={CZ_VIEWBOX}
                className="absolute inset-0 w-full h-full"
                fill="none"
              >
                <defs>
                  <pattern
                    id="hatch"
                    width={6 * S}
                    height={6 * S}
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(35)"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2={6 * S}
                      stroke="rgba(201,164,113,0.18)"
                      strokeWidth={1 * S}
                    />
                  </pattern>
                </defs>

                {/* Country fill — hatched */}
                <path
                  d={CZ_OUTLINE_D}
                  fill="url(#hatch)"
                  stroke="rgba(201,164,113,0.55)"
                  strokeWidth={6}
                  strokeLinejoin="round"
                />
                {/* Soft inner outline for depth */}
                <path
                  d={CZ_OUTLINE_D}
                  fill="none"
                  stroke="rgba(248,243,231,0.15)"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  transform="translate(0, 4)"
                />

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
                      <circle
                        cx={c.cx}
                        cy={c.cy}
                        r={isActive ? 7 * S : 5 * S}
                        fill={isActive ? "#C9A471" : "#F8F3E7"}
                        stroke={
                          isActive ? "#F8F3E7" : "rgba(201,164,113,0.6)"
                        }
                        strokeWidth={isActive ? 2 * S : 1 * S}
                        style={{
                          transition:
                            "all 400ms cubic-bezier(0.2,0.7,0.2,1)",
                        }}
                      />
                      {/* Leader line out to the label */}
                      <line
                        x1={c.cx}
                        y1={c.cy}
                        x2={c.cx + 28 * S}
                        y2={c.cy - 30 * S}
                        stroke="rgba(248,243,231,0.5)"
                        strokeWidth={0.8 * S}
                      />
                      <g
                        transform={`translate(${c.cx + 30 * S}, ${
                          c.cy - 32 * S
                        })`}
                      >
                        <text
                          fontFamily="var(--font-fraunces), serif"
                          fontSize={18 * S}
                          fontStyle="italic"
                          fill={
                            isActive ? "#F8F3E7" : "rgba(248,243,231,0.7)"
                          }
                        >
                          {c.name}
                        </text>
                        <text
                          y={14 * S}
                          fontFamily="var(--font-jetbrains), monospace"
                          fontSize={8.5 * S}
                          letterSpacing={2 * S}
                          fill="rgba(201,164,113,0.85)"
                        >
                          {c.note.toUpperCase()}
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* Compass rose — top right corner */}
                <g transform={`translate(${5342 - 280}, 200)`}>
                  <circle
                    cx="0"
                    cy="0"
                    r={22 * S}
                    fill="none"
                    stroke="rgba(201,164,113,0.4)"
                    strokeWidth={0.8 * S}
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r={14 * S}
                    fill="none"
                    stroke="rgba(201,164,113,0.25)"
                    strokeWidth={0.5 * S}
                  />
                  <line
                    x1="0"
                    y1={-22 * S}
                    x2="0"
                    y2={22 * S}
                    stroke="rgba(201,164,113,0.45)"
                    strokeWidth={0.8 * S}
                  />
                  <line
                    x1={-22 * S}
                    y1="0"
                    x2={22 * S}
                    y2="0"
                    stroke="rgba(201,164,113,0.45)"
                    strokeWidth={0.8 * S}
                  />
                  <text
                    y={-26 * S}
                    textAnchor="middle"
                    fontFamily="var(--font-jetbrains), monospace"
                    fontSize={9 * S}
                    fill="rgba(201,164,113,0.85)"
                    letterSpacing={2 * S}
                  >
                    N
                  </text>
                </g>

                {/* Tiny attribution — required by CC BY-SA source */}
                <g transform={`translate(${5342 - 80}, ${3123 - 30})`}>
                  <text
                    textAnchor="end"
                    fontFamily="var(--font-jetbrains), monospace"
                    fontSize={6 * S}
                    fill="rgba(248,243,231,0.32)"
                    letterSpacing={1.5 * S}
                  >
                    Mapa: Wikimedia Commons · CC BY-SA
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
