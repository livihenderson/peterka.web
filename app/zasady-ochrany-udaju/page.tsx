import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů",
  description:
    "Jak Peterka & Kolektiv zpracovává osobní údaje klientů a návštěvníků webu — v souladu s GDPR a českými předpisy.",
  alternates: { canonical: "/zasady-ochrany-udaju" },
  robots: { index: true, follow: true },
};

const sections: { n: string; t: string; body: React.ReactNode }[] = [
  {
    n: "I.",
    t: "Správce osobních údajů",
    body: (
      <>
        <p>
          Správcem osobních údajů ve smyslu nařízení Evropského parlamentu
          a&nbsp;Rady (EU) 2016/679, o&nbsp;ochraně fyzických osob v&nbsp;souvislosti
          se zpracováním osobních údajů (dále jen „<strong>GDPR</strong>“),
          je společnost provozující značku <em>Peterka&nbsp;&amp;&nbsp;Kolektiv</em>{" "}
          pod skupinou Edo&nbsp;Finance.
        </p>
        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-[15px]">
          <li>
            <span className="text-ink-mute">Obchodní firma:</span>{" "}
            <span className="text-ink">[doplnit dle obchodního rejstříku]</span>
          </li>
          <li>
            <span className="text-ink-mute">IČO:</span>{" "}
            <span className="text-ink">[doplnit]</span>
          </li>
          <li>
            <span className="text-ink-mute">Sídlo:</span>{" "}
            <span className="text-ink">[doplnit]</span>
          </li>
          <li>
            <span className="text-ink-mute">E-mail:</span>{" "}
            <a href="mailto:kolektiv@peterka.cz" className="text-moss underline decoration-rule underline-offset-4">
              kolektiv@peterka.cz
            </a>
          </li>
        </ul>
        <p className="mt-5">
          Správce nejmenoval pověřence pro ochranu osobních údajů. Veškeré
          dotazy ke&nbsp;zpracování osobních údajů můžete směřovat na uvedenou
          e-mailovou adresu.
        </p>
      </>
    ),
  },
  {
    n: "II.",
    t: "Jaké údaje zpracováváme",
    body: (
      <>
        <p>
          Zpracováváme pouze ty osobní údaje, které nám sami poskytnete
          prostřednictvím kontaktního formuláře, e-mailu, telefonu nebo
          v&nbsp;průběhu naší spolupráce:
        </p>
        <ul className="mt-5 space-y-2 text-[15px]">
          <li>— jméno a&nbsp;příjmení,</li>
          <li>— telefonní číslo a&nbsp;e-mailovou adresu,</li>
          <li>— oblasti, ke&nbsp;kterým nás chcete oslovit,</li>
          <li>— další informace, které nám dobrovolně sdělíte ve&nbsp;zprávě nebo při schůzce.</li>
        </ul>
        <p className="mt-5">
          Po&nbsp;uzavření smluvního vztahu zpracováváme rovněž údaje vyžadované
          příslušnými právními předpisy v&nbsp;oblasti finančního zprostředkování
          — typicky datum narození, adresu bydliště, doklad totožnosti,
          finanční a&nbsp;majetkové poměry v&nbsp;rozsahu nezbytném pro posouzení
          vhodnosti služby.
        </p>
      </>
    ),
  },
  {
    n: "III.",
    t: "Účely a právní základy zpracování",
    body: (
      <>
        <ul className="space-y-5 text-[15px]">
          <li>
            <div className="font-display italic text-moss text-lg">
              Vyřízení poptávky a&nbsp;komunikace
            </div>
            <div className="mt-1 text-ink-soft">
              Právní základ — oprávněný zájem správce odpovědět na&nbsp;poptávku
              (čl.&nbsp;6 odst.&nbsp;1 písm.&nbsp;f GDPR), případně jednání
              o&nbsp;smlouvě (čl.&nbsp;6 odst.&nbsp;1 písm.&nbsp;b GDPR).
            </div>
          </li>
          <li>
            <div className="font-display italic text-moss text-lg">
              Zprostředkování finančních produktů
            </div>
            <div className="mt-1 text-ink-soft">
              Právní základ — plnění smlouvy (čl.&nbsp;6 odst.&nbsp;1 písm.&nbsp;b
              GDPR) a&nbsp;splnění právních povinností správce (čl.&nbsp;6 odst.&nbsp;1
              písm.&nbsp;c GDPR), zejména dle zákona č.&nbsp;170/2018&nbsp;Sb.,
              č.&nbsp;257/2016&nbsp;Sb. a&nbsp;č.&nbsp;253/2008&nbsp;Sb.
            </div>
          </li>
          <li>
            <div className="font-display italic text-moss text-lg">
              Vedení interní evidence a&nbsp;účetnictví
            </div>
            <div className="mt-1 text-ink-soft">
              Právní základ — splnění právních povinností (čl.&nbsp;6 odst.&nbsp;1
              písm.&nbsp;c GDPR).
            </div>
          </li>
          <li>
            <div className="font-display italic text-moss text-lg">
              Provoz webu a&nbsp;jeho zabezpečení
            </div>
            <div className="mt-1 text-ink-soft">
              Právní základ — oprávněný zájem správce (čl.&nbsp;6 odst.&nbsp;1
              písm.&nbsp;f GDPR). Více v&nbsp;sekci{" "}
              <Link href="/cookies" className="text-moss underline decoration-rule underline-offset-4">
                Cookies
              </Link>
              .
            </div>
          </li>
        </ul>
      </>
    ),
  },
  {
    n: "IV.",
    t: "Doba uchování",
    body: (
      <>
        <p>
          Osobní údaje uchováváme pouze po&nbsp;dobu nezbytně nutnou pro daný
          účel:
        </p>
        <ul className="mt-5 space-y-2 text-[15px]">
          <li>— u&nbsp;poptávek bez navazující smlouvy nejdéle 24&nbsp;měsíců od&nbsp;posledního kontaktu,</li>
          <li>— u&nbsp;klientů po&nbsp;dobu trvání smluvního vztahu a&nbsp;následně po&nbsp;dobu vyžadovanou právními předpisy (zpravidla 10&nbsp;let),</li>
          <li>— u&nbsp;účetních a&nbsp;daňových dokladů po&nbsp;dobu stanovenou zákonem.</li>
        </ul>
      </>
    ),
  },
  {
    n: "V.",
    t: "Příjemci a zpracovatelé",
    body: (
      <>
        <p>
          Vaše údaje nepředáváme třetím stranám pro marketingové účely.
          V&nbsp;nezbytné míře a&nbsp;na&nbsp;základě smluv o&nbsp;zpracování
          osobních údajů je můžeme zpřístupnit:
        </p>
        <ul className="mt-5 space-y-2 text-[15px]">
          <li>— skupině Edo&nbsp;Finance jako mateřské struktuře,</li>
          <li>— finančním institucím (banky, pojišťovny, investiční společnosti) pro účely zprostředkování konkrétního produktu,</li>
          <li>— poskytovatelům IT a&nbsp;e-mailových služeb v&nbsp;rozsahu provozního zázemí,</li>
          <li>— účetní kanceláři a&nbsp;právním poradcům správce,</li>
          <li>— orgánům veřejné moci, pokud nám to ukládá zákon (zejména ČNB, FAÚ, finanční úřad).</li>
        </ul>
        <p className="mt-5">
          Údaje nepředáváme do&nbsp;třetích zemí mimo EHP.
        </p>
      </>
    ),
  },
  {
    n: "VI.",
    t: "Vaše práva",
    body: (
      <>
        <p>V&nbsp;souladu s&nbsp;GDPR máte zejména následující práva:</p>
        <ul className="mt-5 space-y-2 text-[15px]">
          <li>— právo na&nbsp;přístup k&nbsp;osobním údajům,</li>
          <li>— právo na&nbsp;opravu nepřesných údajů,</li>
          <li>— právo na&nbsp;výmaz („právo být zapomenut“),</li>
          <li>— právo na&nbsp;omezení zpracování,</li>
          <li>— právo na&nbsp;přenositelnost údajů,</li>
          <li>— právo vznést námitku proti zpracování založenému na&nbsp;oprávněném zájmu,</li>
          <li>— právo odvolat udělený souhlas,</li>
          <li>
            — právo podat stížnost u&nbsp;dozorového úřadu, kterým je{" "}
            <a
              href="https://www.uoou.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-moss underline decoration-rule underline-offset-4"
            >
              Úřad pro ochranu osobních údajů
            </a>{" "}
            (Pplk.&nbsp;Sochora&nbsp;27, 170&nbsp;00&nbsp;Praha&nbsp;7).
          </li>
        </ul>
        <p className="mt-5">
          Žádost můžete uplatnit písemně na&nbsp;adresu sídla správce nebo
          e-mailem na{" "}
          <a href="mailto:kolektiv@peterka.cz" className="text-moss underline decoration-rule underline-offset-4">
            kolektiv@peterka.cz
          </a>
          . Vyřídíme ji bez zbytečného odkladu, nejpozději do&nbsp;30&nbsp;dnů.
        </p>
      </>
    ),
  },
  {
    n: "VII.",
    t: "Zabezpečení",
    body: (
      <>
        <p>
          Přijali jsme přiměřená technická a&nbsp;organizační opatření,
          která chrání osobní údaje před neoprávněným přístupem, ztrátou,
          zničením a&nbsp;zneužitím — od&nbsp;šifrované komunikace přes
          řízení přístupových oprávnění až po&nbsp;pravidelné zálohování.
        </p>
      </>
    ),
  },
  {
    n: "VIII.",
    t: "Změny zásad",
    body: (
      <>
        <p>
          Tyto zásady mohou být v&nbsp;čase upravovány. Aktuální znění je
          vždy dostupné na&nbsp;této stránce. O&nbsp;významných změnách budeme
          klienty informovat e-mailem.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
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
            § Právní část — Soukromí
          </div>
          <h1
            className="mt-6 font-display text-ink text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.96] tracking-[-0.025em] max-w-[18ch]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
          >
            Zásady ochrany{" "}
            <span className="italic text-moss">osobních údajů.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-ink-soft">
            Vaše údaje jsou s&nbsp;námi v&nbsp;bezpečí — zpracováváme je
            transparentně, v&nbsp;souladu s&nbsp;GDPR a&nbsp;jen v&nbsp;rozsahu,
            který je nezbytný pro&nbsp;naši práci pro&nbsp;vás.
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
