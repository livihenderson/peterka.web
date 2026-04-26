"use client";

import { useMemo, useState } from "react";

function formatCZK(n: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export default function HypotekaCalculator() {
  const [price, setPrice] = useState(7_500_000);
  const [own, setOwn] = useState(1_500_000);
  const [rate, setRate] = useState(5.0);
  const [years, setYears] = useState(30);

  const calc = useMemo(() => {
    const loan = Math.max(0, price - own);
    const r = rate / 100 / 12;
    const n = years * 12;
    const monthly =
      r === 0
        ? loan / n
        : (loan * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const overpay = total - loan;
    const ltv = price > 0 ? (loan / price) * 100 : 0;
    return { loan, monthly, total, overpay, ltv };
  }, [price, own, rate, years]);

  return (
    <div className="grid grid-cols-12 gap-px bg-rule border border-rule">
      <div className="col-span-12 lg:col-span-5 bg-bone-light p-8 md:p-12 flex flex-col gap-7">
        <Slider
          label="Cena nemovitosti"
          value={price}
          min={1_000_000}
          max={30_000_000}
          step={100_000}
          onChange={setPrice}
          format={formatCZK}
        />
        <Slider
          label="Vlastní zdroje"
          value={own}
          min={0}
          max={Math.min(price, 15_000_000)}
          step={50_000}
          onChange={setOwn}
          format={formatCZK}
          note={`LTV: ${calc.ltv.toFixed(0)} % · banka půjčí ${formatCZK(calc.loan)}`}
        />
        <Slider
          label="Úroková sazba"
          value={rate}
          min={3}
          max={8}
          step={0.1}
          onChange={setRate}
          format={(v) => `${v.toFixed(1)} % p.a.`}
          note="orientačně, dnešní tržní rozpětí 4,3–5,8 %"
        />
        <Slider
          label="Splatnost"
          value={years}
          min={5}
          max={30}
          step={1}
          onChange={setYears}
          format={(v) => `${v} let`}
        />
      </div>

      <div className="col-span-12 lg:col-span-7 bg-bone p-8 md:p-12 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule border border-rule">
          <Stat label="Měsíční splátka" value={formatCZK(calc.monthly)} accent="moss" />
          <Stat label="Výše úvěru" value={formatCZK(calc.loan)} />
          <Stat label="Celkem zaplaceno" value={formatCZK(calc.total)} />
          <Stat label="Z toho úroky" value={formatCZK(calc.overpay)} accent="brass" />
        </div>

        <div className="mt-10 max-w-md">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brass-deep">
            Co vám tato kalkulačka neřekne
          </div>
          <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft">
            Pojištění schopnosti splácet, daňový odpočet úroků, sankce
            za&nbsp;předčasné splacení, podmínky fixace, refinancovací okno.
            Toto všechno řešíme s&nbsp;vámi osobně — protože rozdíl mezi
            podobnými nabídkami často znamená stovky tisíc za&nbsp;celý
            horizont.
          </p>
        </div>
      </div>
    </div>
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
      <div className="flex items-baseline justify-between gap-3">
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
        className="mt-3 hyp-slider"
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
        .hyp-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 2px;
          outline: none;
          cursor: ew-resize;
        }
        .hyp-slider::-webkit-slider-thumb {
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
        .hyp-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .hyp-slider::-moz-range-thumb {
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
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
      >
        {value}
      </div>
    </div>
  );
}
