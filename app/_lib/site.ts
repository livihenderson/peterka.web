/**
 * Single source of truth for site-wide identity, NAP (name/address/phone),
 * and the route list. Consumed by metadata, robots, sitemap, manifest and the
 * JSON-LD structured data so they can never drift apart.
 */

export const SITE_URL = "https://peterkakolektiv.cz";

export const SITE_NAME = "Peterka & Kolektiv";
export const SITE_TAGLINE = "Privátní finanční dům";

export const CONTACT = {
  phone: "+420774567833",
  phoneDisplay: "+420 774 567 833",
  email: "peterka.kolektiv@email.cz",
} as const;

/** The four branches — addresses mirror app/_components/Locations.tsx. */
export const BRANCHES = [
  {
    id: "praha",
    name: "Praha",
    streetAddress: "V parku 2335/20, Chodov",
    postalCode: "148 00",
    addressLocality: "Praha",
    lead: "Lukáš Hořejší",
  },
  {
    id: "tabor",
    name: "Tábor",
    streetAddress: "Kpt. Jaroše 24",
    postalCode: "390 03",
    addressLocality: "Tábor",
    lead: "Tomáš Peterka",
  },
  {
    id: "cb",
    name: "České Budějovice",
    streetAddress: "Karla IV. 93/3",
    postalCode: "370 01",
    addressLocality: "České Budějovice",
    lead: "Jakub Záleský",
  },
  {
    id: "sobeslav",
    name: "Soběslav",
    streetAddress: "Dolní nábřeží 41/5",
    postalCode: "392 01",
    addressLocality: "Soběslav",
    lead: "Dušan Kozel",
  },
] as const;

/** Service subpages — used for the sitemap and Service structured data. */
export const SERVICES = [
  { slug: "investice", name: "Investice" },
  { slug: "hypoteky", name: "Hypotéky" },
  { slug: "pojisteni", name: "Pojištění" },
  { slug: "firmy", name: "Firemní finance" },
] as const;

/** Lower-priority but still-indexable legal pages. */
export const LEGAL_PAGES = [
  { slug: "zasady-ochrany-udaju" },
  { slug: "cookies" },
] as const;
