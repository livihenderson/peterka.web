import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Jaké cookies používá web Peterka & Kolektiv, k čemu slouží a jak je můžete spravovat.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

const sections: { n: string; t: string; body: React.ReactNode }[] = [
  {
    n: "I.",
    t: "Co jsou cookies",
    body: (
      <p>
        Cookies jsou drobné textové soubory, které prohlížeč ukládá na&nbsp;vašem
        zařízení při návštěvě webu. Slouží k&nbsp;tomu, aby si stránka pamatovala
        vaše předvolby, fungovala technicky správně a&nbsp;vy jste se k&nbsp;ní
        mohli pohodlně vrátit. Některé cookies jsou nezbytné pro běh webu,
        jiné jsou volitelné a&nbsp;používáme je jen s&nbsp;vaším souhlasem.
      </p>
    ),
  },
  {
    n: "II.",
    t: "Jaké cookies používáme",
    body: (
      <>
        <p>
          Náš web staví na&nbsp;principu <em>privacy by default</em> —
          ve&nbsp;výchozím stavu používáme pouze technicky nezbytné cookies.
          Žádné marketingové ani profilovací cookies třetích stran neumisťujeme
          bez&nbsp;vašeho výslovného souhlasu.
        </p>

        <div className="mt-8 space-y-6">
          <div className="border-t border-rule pt-6">
            <div className="flex items-baseline justify-between gap-6">
              <div>
                <div className="font-display italic text-moss text-xl">
                  Technicky nezbytné
                </div>
                <div className="mt-1 text-[15px] text-ink-soft">
                  Bez&nbsp;těchto cookies stránka nefunguje. Zajišťují
                  vykreslení obsahu, bezpečnost session a&nbsp;základní stav UI.
                </div>
              </div>
              <span className="shrink-0 font-mono text-[10px] tracking-[0.22em] uppercase text-brass-deep">
                Souhlas&nbsp;nevyžadují
              </span>
            </div>
          </div>

          <div className="border-t border-rule pt-6">
            <div className="flex items-baseline justify-between gap-6">
              <div>
                <div className="font-display italic text-moss text-xl">
                  Analytické (volitelné)
                </div>
                <div className="mt-1 text-[15px] text-ink-soft">
                  V&nbsp;případě nasazení slouží k&nbsp;agregovanému měření
                  návštěvnosti a&nbsp;ke&nbsp;zlepšování webu. Vždy jen
                  v&nbsp;anonymizované podobě a&nbsp;na&nbsp;základě uděleného
                  souhlasu.
                </div>
              </div>
              <span className="shrink-0 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                Volitelné
              </span>
            </div>
          </div>

          <div className="border-t border-rule pt-6">
            <div className="flex items-baseline justify-between gap-6">
              <div>
                <div className="font-display italic text-moss text-xl">
                  Marketingové
                </div>
                <div className="mt-1 text-[15px] text-ink-soft">
                  Nepoužíváme. Web neobsahuje reklamní, retargetingové ani
                  sociální měřicí pixely.
                </div>
              </div>
              <span className="shrink-0 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                Nepoužíváme
              </span>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    n: "III.",
    t: "Doba uložení",
    body: (
      <>
        <p>
          Technické cookies platí pouze po dobu trvání návštěvy (relační
          cookies) nebo do&nbsp;několika dnů. Pokud v&nbsp;budoucnu nasadíme
          analytické cookies, jejich platnost nepřekročí 13&nbsp;měsíců —
          v&nbsp;souladu s&nbsp;doporučením evropských dozorových úřadů.
        </p>
      </>
    ),
  },
  {
    n: "IV.",
    t: "Jak souhlas spravovat",
    body: (
      <>
        <p>
          Souhlas s&nbsp;volitelnými cookies můžete kdykoli udělit nebo odvolat
          v&nbsp;cookie liště, která se zobrazí při první návštěvě webu.
          Odvolání souhlasu nemá vliv na&nbsp;zákonnost zpracování provedeného
          do&nbsp;okamžiku odvolání.
        </p>
        <p className="mt-5">
          Cookies můžete rovněž spravovat přímo v&nbsp;nastavení vašeho
          prohlížeče — všechny moderní prohlížeče umožňují cookies blokovat
          nebo mazat:
        </p>
        <ul className="mt-5 space-y-2 text-[15px]">
          <li>
            —{" "}
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-moss underline decoration-rule underline-offset-4"
            >
              Google Chrome
            </a>
          </li>
          <li>
            —{" "}
            <a
              href="https://support.mozilla.org/cs/kb/cookies-informace-ktere-ukladaji-webove-stranky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-moss underline decoration-rule underline-offset-4"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            —{" "}
            <a
              href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-moss underline decoration-rule underline-offset-4"
            >
              Safari
            </a>
          </li>
          <li>
            —{" "}
            <a
              href="https://support.microsoft.com/cs-cz/microsoft-edge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-moss underline decoration-rule underline-offset-4"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    n: "V.",
    t: "Souvislost s ochranou údajů",
    body: (
      <p>
        Pokud jsou cookies osobním údajem, řídí se jejich zpracování rovněž
        našimi{" "}
        <Link
          href="/zasady-ochrany-udaju"
          className="text-moss underline decoration-rule underline-offset-4"
        >
          Zásadami ochrany osobních údajů
        </Link>
        .
      </p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <main className="bg-bone">
      {/* Header */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 80% at 12% 0%, rgba(201,164,113,0.16) 0%, rgba(242,235,221,0) 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
            § Právní část — Cookies
          </div>
          <h1
            className="mt-6 font-display text-ink text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.96] tracking-[-0.025em] max-w-[18ch]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
          >
            Drobné soubory,{" "}
            <span className="italic text-moss">které vás respektují.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-ink-soft">
            Náš web ve&nbsp;výchozím stavu nepoužívá nic víc, než&nbsp;co
            potřebuje, aby fungoval. Tady je přehled — bez&nbsp;právnické vaty.
          </p>
          <div className="mt-10 font-mono text-[10px] tracking-[0.28em] uppercase text-ink-mute">
            Účinné od&nbsp;MMXXVI · Naposledy aktualizováno&nbsp;[doplnit]
          </div>
          <div className="mt-10 h-px w-32 bg-rule" />
        </div>
      </section>

      {/* Body */}
      <section className="relative pb-32 md:pb-40">
        <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-y-16 md:gap-x-12">
            <aside className="col-span-12 lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                  Obsah
                </div>
                <ol className="mt-5 space-y-2.5 text-sm text-ink-soft">
                  {sections.map((s) => (
                    <li key={s.n}>
                      <a
                        href={`#${s.n.replace(".", "").toLowerCase()}`}
                        className="hover:text-moss transition-colors"
                      >
                        <span className="font-display num text-ink-mute mr-2">
                          {s.n}
                        </span>
                        {s.t}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <div className="col-span-12 lg:col-span-9 lg:pl-6 xl:pl-12 max-w-3xl">
              {sections.map((s) => (
                <article
                  key={s.n}
                  id={s.n.replace(".", "").toLowerCase()}
                  className="border-t border-rule first:border-t-0 py-12 md:py-16 first:pt-0"
                >
                  <div className="flex items-baseline gap-5">
                    <div
                      className="font-display num text-3xl text-brass-deep"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
                    >
                      {s.n}
                    </div>
                    <h2
                      className="font-display text-3xl md:text-4xl text-ink leading-[1.1] tracking-[-0.015em]"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
                    >
                      {s.t}
                    </h2>
                  </div>
                  <div className="mt-7 text-[16px] leading-[1.7] text-ink-soft">
                    {s.body}
                  </div>
                </article>
              ))}

              <div className="mt-16 pt-8 border-t border-rule font-mono text-[10px] tracking-[0.28em] uppercase text-ink-mute">
                <Link href="/" className="hover:text-moss">
                  ← Zpět na&nbsp;úvod
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
