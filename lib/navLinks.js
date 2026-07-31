/** Primary site navigation (header desktop + mobile drawer). */
export const NAV_LINKS = [
  { href: "/", name: "Home" },
  { href: "/about", name: "Über mich" },
  { href: "/treatments/dripspas", name: "Dripspas" },
  { href: "/treatments/pdo-faden", name: "PDO Fäden", shortName: "PDO" },
  { href: "/treatments/doll-lips", name: "Doll Lips" },
  { href: "/treatments/hyaluronsaure", name: "Hyaluronsäure", shortName: "Hyaluron" },
  { href: "/treatments/skinbooster", name: "Skinbooster", shortName: "Booster" },
  { href: "/treatments/hypoxie-training", name: "Hypoxie-Training", shortName: "Hypoxie" },
  { href: "/contact", name: "Kontakt" },
];

/** Label for desktop header (compact below 1400px). */
export function navLinkLabel(link, compact) {
  if (compact && link.shortName) return link.shortName;
  return link.name;
}

/** Routes with a light hero / no dark image under the fixed header at scroll 0. */
const LIGHT_HEADER_PATHS = new Set([
  "/treatments",
  "/impressum",
  "/datenschutz",
  "/treatments/notox",
  "/treatments/liposana-3",
  "/treatments/drip-spa-infusionen",
]);

export function prefersLightHeader(pathname) {
  return LIGHT_HEADER_PATHS.has(pathname);
}
