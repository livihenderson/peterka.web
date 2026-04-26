const steps = [
  {
    n: "I",
    label: "Seznámení",
    when: "60–90 minut · zdarma",
    body:
      "Posloucháme. Zjišťujeme, kde stojíte a&nbsp;kam chcete jít. Bez prezentací, bez nátlaku, bez závazku.",
  },
  {
    n: "II",
    label: "Hloubková analýza",
    when: "1–2 týdny",
    body:
      "Zmapujeme celý finanční obraz — bydlení, příjmy, závazky, ochrana, investice. Najdeme slepá místa.",
  },
  {
    n: "III",
    label: "Strategie & doporučení",
    when: "Společná schůzka",
    body:
      "Předkládáme návrh — konkrétní kroky, alternativy, rizika a očekávané dopady. Vy rozhodujete o&nbsp;tempu.",
  },
  {
    n: "IV",
    label: "Dlouhodobá péče",
    when: "Ročně i ad-hoc",
    body:
      "Pravidelná revize, reakce na životní změny, daňový kalendář. Tým, který znáte, vás drží na&nbsp;cestě.",
  },
];

export default function Process() {
  return (
    <section id="proces" className="relative py-28 md:py-40 bg-bone-warm">
      <div className="mx-auto max-w-[88rem] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
              § 06 — Proces
            </div>
            <h2
              className="mt-6 font-display text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.02] tracking-[-0.025em] text-ink"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Čtyři kroky.<br />
              <span className="italic text-moss">Bez tlaku.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-lg leading-[1.6] text-ink-soft max-w-md">
              První schůzka nikdy nestojí korunu. Vyjádření zájmu je jediný
              závazek, který od&nbsp;vás potřebujeme — všechno ostatní je
              na&nbsp;nás.
            </p>
          </div>
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-px bg-rule border-t border-rule">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="reveal relative bg-bone-warm p-8 md:p-10 min-h-[260px] flex flex-col"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="font-display num text-5xl md:text-6xl text-brass leading-none"
                  style={{
                    fontVariationSettings:
                      "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                  }}
                >
                  {s.n}
                </span>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                  {s.when}
                </span>
              </div>
              <h3
                className="mt-8 font-display text-2xl md:text-3xl text-ink tracking-[-0.01em]"
                style={{
                  fontVariationSettings:
                    "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                }}
              >
                {s.label}
              </h3>
              <p
                className="mt-3 text-[15px] leading-[1.6] text-ink-soft"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[12.5px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
          >
            Začít prvním krokem
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
