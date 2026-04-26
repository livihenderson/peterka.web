"use client";

import { useMemo, useState } from "react";

function formatCZK(n: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

function formatNumber(n: number) {
  return new Intl.NumberFormat("cs-CZ", {
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export default function Calculator() {
  const [initial, setInitial] = useState(250_000);
  const [monthly, setMonthly] = useState(8_000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(7); // %

  const series = useMemo(() => {
    const points: { y: number; total: number; contrib: number }[] = [];
    const i = rate / 100 / 12;
    let bal = initial;
    let contrib = initial;
    points.push({ y: 0, total: bal, contrib });
    for (let m = 1; m <= years * 12; m++) {
      bal = bal * (1 + i) + monthly;
      contrib += monthly;
      if (m % 12 === 0) {
        points.push({ y: m / 12, total: bal, contrib });
      }
    }
    return points;
  }, [initial, monthly, years, rate]);

  const last = series[series.length - 1];
  const finalValue = last.total;
  const totalContrib = last.contrib;
  const gain = finalValue - totalContrib;

  // chart geometry
  const W = 800;
  const H = 320;
  const padX = 36;
  const padY = 24;
  const maxY = Math.max(finalValue, totalContrib) * 1.05;
  const xScale = (y: number) => padX + (y / years) * (W - padX * 2);
  const yScale = (v: number) =>
    H - padY - (v / maxY) * (H - padY * 2);

  const totalPath = series
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xScale(p.y).toFixed(1)},${yScale(p.total).toFixed(1)}`)
    .join(" ");
  const contribPath = series
    .map(
      (p, i) => `${i === 0 ? "M" : "L"} ${xScale(p.y).toFixed(1)},${yScale(p.contrib).toFixed(1)}`
    )
    .join(" ");
  const fillPath =
    `M ${xScale(0)},${yScale(0)} ` +
    series
      .map((p) => `L ${xScale(p.y).toFixed(1)},${yScale(p.total).toFixed(1)}`)
      .join(" ") +
    ` L ${xScale(years).toFixed(1)},${yScale(0)} Z`;

  return (
    <section
      id="kalkulacka"
      className="relative py-28 md:py-40 bg-bone overflow-hidden"
    >
      <div className="mx-auto max-w-[88rem] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
              § 07 — Nástroj
            </div>
            <h2
              className="mt-6 font-display text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.02] tracking-[-0.025em] text-ink"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Co dělá <span className="italic text-moss">čas </span>s&nbsp;penězi.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end">
            <p className="text-lg leading-[1.6] text-ink-soft max-w-md">
              Posuňte parametry a&nbsp;podívejte se, jak se chová složené úročení.
              Jde o&nbsp;modelovou ilustraci — na osobní strategii navrhneme
              vám&nbsp;na míru.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-px bg-rule border border-rule">
          {/* Inputs */}
          <div className="col-span-12 lg:col-span-5 bg-bone-light p-8 md:p-12 flex flex-col gap-8">
            <Slider
              label="Vstupní vklad"
              value={initial}
              min={0}
              max={5_000_000}
              step={50_000}
              onChange={setInitial}
              format={(v) => formatCZK(v)}
            />
            <Slider
              label="Měsíční vklad"
              value={monthly}
              min={0}
              max={50_000}
              step={500}
              onChange={setMonthly}
              format={(v) => formatCZK(v)}
            />
            <Slider
              label="Investiční horizont"
              value={years}
              min={1}
              max={40}
              step={1}
              onChange={setYears}
              format={(v) => `${v} let`}
            />
            <Slider
              label="Očekávaný roční výnos"
              value={rate}
              min={0}
              max={12}
              step={0.5}
              onChange={setRate}
              format={(v) => `${v.toFixed(1)} %`}
              note="historický průměr akciového trhu se pohybuje kolem 7–9 % p.a."
            />
          </div>

          {/* Chart + summary */}
          <div className="col-span-12 lg:col-span-7 bg-bone p-8 md:p-12 flex flex-col">
            {/* Headline numbers */}
            <div className="grid grid-cols-3 gap-px bg-rule border border-rule">
              <Stat
                label="Celkem za horizont"
                value={formatCZK(finalValue)}
                accent="moss"
              />
              <Stat
                label="Vaše vklady"
                value={formatCZK(totalContrib)}
              />
              <Stat
                label="Zisk z úročení"
                value={formatCZK(gain)}
                accent="brass"
              />
            </div>

            {/* Chart */}
            <div className="mt-8 relative aspect-[800/320] w-full">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <linearGradient id="totalFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(30,58,44,0.30)" />
                    <stop offset="100%" stopColor="rgba(30,58,44,0)" />
                  </linearGradient>
                </defs>

                {/* Y-axis ticks */}
                {[0.25, 0.5, 0.75, 1].map((t, i) => {
                  const y = yScale(maxY * t);
                  return (
                    <g key={i}>
                      <line
                        x1={padX}
                        y1={y}
                        x2={W - padX}
                        y2={y}
                        stroke="rgba(17,20,15,0.08)"
                        strokeDasharray="2 4"
                      />
                      <text
                        x={padX - 6}
                        y={y + 3}
                        textAnchor="end"
                        fontFamily="var(--font-jetbrains), monospace"
                        fontSize="9"
                        letterSpacing="1"
                        fill="rgba(17,20,15,0.45)"
                      >
                        {formatNumber(maxY * t).replace(/\s/g, " ")}
                      </text>
                    </g>
                  );
                })}

                {/* Fill */}
                <path d={fillPath} fill="url(#totalFill)" />

                {/* Contribution line */}
                <path
                  d={contribPath}
                  fill="none"
                  stroke="rgba(166,129,78,0.85)"
                  strokeWidth="1.4"
                  strokeDasharray="3 4"
                />
                {/* Total line */}
                <path
                  d={totalPath}
                  fill="none"
                  stroke="#1E3A2C"
                  strokeWidth="2"
                />

                {/* End markers */}
                <circle
                  cx={xScale(years)}
                  cy={yScale(finalValue)}
                  r="5"
                  fill="#1E3A2C"
                  stroke="#F2EBDD"
                  strokeWidth="2"
                />
                <circle
                  cx={xScale(years)}
                  cy={yScale(totalContrib)}
                  r="3.5"
                  fill="#A6814E"
                  stroke="#F2EBDD"
                  strokeWidth="1.5"
                />

                {/* X-axis years */}
                {[0, Math.round(years / 2), years].map((y, i) => (
                  <text
                    key={i}
                    x={xScale(y)}
                    y={H - 6}
                    textAnchor="middle"
                    fontFamily="var(--font-jetbrains), monospace"
                    fontSize="9"
                    letterSpacing="1"
                    fill="rgba(17,20,15,0.45)"
                  >
                    {y === 0 ? "DNES" : `+${y} LET`}
                  </text>
                ))}
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap items-center gap-6 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
              <span className="flex items-center gap-2">
                <span className="inline-block w-5 h-px bg-moss" />
                Hodnota portfolia
              </span>
              <span className="flex items-center gap-2">
                <span
                  className="inline-block w-5 h-px"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #A6814E 50%, transparent 50%)",
                    backgroundSize: "8px 1px",
                  }}
                />
                Vaše vklady
              </span>
              <span className="ml-auto italic font-display text-sm normal-case tracking-normal text-ink-soft">
                Modelová kalkulace · ne&nbsp;investiční doporučení.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  note,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  note?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-mute">
          {label}
        </label>
        <span
          className="font-display text-2xl text-ink num"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
        >
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="mt-3 peterka-slider"
        style={{
          background: `linear-gradient(to right, var(--moss) 0%, var(--moss) ${pct}%, var(--rule) ${pct}%, var(--rule) 100%)`,
        }}
        aria-label={label}
      />
      {note && (
        <p className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute/80">
          {note}
        </p>
      )}
      <style jsx>{`
        .peterka-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 2px;
          outline: none;
          cursor: ew-resize;
        }
        .peterka-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          background: var(--brass);
          border: 2px solid var(--bone);
          box-shadow: 0 0 0 1px var(--brass);
          border-radius: 50%;
          cursor: ew-resize;
          transition: transform 200ms;
        }
        .peterka-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .peterka-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: var(--brass);
          border: 2px solid var(--bone);
          box-shadow: 0 0 0 1px var(--brass);
          border-radius: 50%;
          cursor: ew-resize;
        }
      `}</style>
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: "moss" | "brass";
}) {
  const color =
    accent === "moss"
      ? "text-moss"
      : accent === "brass"
      ? "text-brass-deep"
      : "text-ink";
  return (
    <div className="bg-bone p-5 md:p-6">
      <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-ink-mute">
        {label}
      </div>
      <div
        className={`mt-3 font-display num text-2xl md:text-[1.7rem] leading-tight tracking-[-0.01em] ${color}`}
        style={{
          fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
        }}
      >
        {value}
      </div>
    </div>
  );
}
