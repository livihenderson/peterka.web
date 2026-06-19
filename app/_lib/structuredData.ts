/**
 * schema.org JSON-LD builders. Rendered as <script type="application/ld+json">
 * from Server Components (see app/layout.tsx and the service pages).
 *
 * Graph shape: one Organization (the brand) + a WebSite + one FinancialService
 * per branch + the three founders as Person nodes. Everything is cross-linked
 * by @id so Google can resolve a single entity across the four locations.
 */

import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  CONTACT,
  BRANCHES,
} from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO = `${SITE_URL}/apple-icon.png`;

const FOUNDERS = [
  {
    name: "Tomáš Peterka",
    jobTitle: "Zakladatel · Privátní finance",
    knowsAbout: ["Privátní finance", "Investice", "Mezigenerační péče o majetek"],
  },
  {
    name: "Lukáš Hořejší",
    jobTitle: "Investice · Privátní portfolia",
    knowsAbout: ["Investice", "Privátní portfolia", "Dlouhodobé strategie"],
  },
  {
    name: "Dušan Kozel",
    jobTitle: "Úvěry · Pojištění",
    knowsAbout: ["Hypotéky", "Úvěry", "Pojištění"],
  },
] as const;

function postalAddress(b: (typeof BRANCHES)[number]) {
  return {
    "@type": "PostalAddress",
    streetAddress: b.streetAddress,
    addressLocality: b.addressLocality,
    postalCode: b.postalCode,
    addressCountry: "CZ",
  };
}

/** Site-wide @graph for the root layout. */
export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "FinancialService"],
        "@id": ORG_ID,
        name: SITE_NAME,
        alternateName: SITE_TAGLINE,
        url: SITE_URL,
        logo: LOGO,
        image: LOGO,
        description:
          "Komplexní soukromá péče o váš majetek, vaši rodinu a vaše záměry — investice, hypotéky, pojištění a nemovitosti pod jednou střechou.",
        telephone: CONTACT.phone,
        email: CONTACT.email,
        parentOrganization: { "@type": "Organization", name: "Edo Finance" },
        foundingDate: "2010",
        areaServed: { "@type": "Country", name: "Česká republika" },
        address: postalAddress(BRANCHES[0]),
        founder: FOUNDERS.map((f) => ({
          "@type": "Person",
          name: f.name,
          jobTitle: f.jobTitle,
          worksFor: { "@id": ORG_ID },
          knowsAbout: [...f.knowsAbout],
        })),
        location: BRANCHES.map((b) => ({
          "@type": "FinancialService",
          "@id": `${SITE_URL}/#branch-${b.id}`,
          name: `${SITE_NAME} — ${b.name}`,
          parentOrganization: { "@id": ORG_ID },
          address: postalAddress(b),
          telephone: CONTACT.phone,
          email: CONTACT.email,
          areaServed: { "@type": "City", name: b.addressLocality },
        })),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "cs-CZ",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/** Per-service-page graph: a BreadcrumbList + a Service offered by the brand. */
export function servicePageGraph(opts: {
  slug: string;
  name: string;
  description: string;
}) {
  const url = `${SITE_URL}/sluzby/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Služby",
            item: `${SITE_URL}/#sluzby`,
          },
          { "@type": "ListItem", position: 3, name: opts.name, item: url },
        ],
      },
      {
        "@type": "Service",
        name: opts.name,
        serviceType: opts.name,
        description: opts.description,
        url,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "Česká republika" },
      },
    ],
  };
}

/** Serialize a JSON-LD object for safe inlining in a <script> tag. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
