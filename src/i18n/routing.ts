import { defineRouting } from "next-intl/routing";

const localizedPathnames = {
  "/": "/",
  "/hakkimizda": {
    tr: "/hakkimizda",
    en: "/about",
    de: "/ueber-uns",
  },
  "/hizmetler": {
    tr: "/hizmetler",
    en: "/services",
    de: "/leistungen",
  },
  "/bayilikler": {
    tr: "/bayilikler",
    en: "/dealerships",
    de: "/vertretungen",
  },
  "/urunler": {
    tr: "/urunler",
    en: "/products",
    de: "/produkte",
  },
  "/urunler/[slug]": {
    tr: "/urunler/[slug]",
    en: "/products/[slug]",
    de: "/produkte/[slug]",
  },
  "/kataloglar": {
    tr: "/kataloglar",
    en: "/catalogues",
    de: "/kataloge",
  },
  "/kariyer": {
    tr: "/kariyer",
    en: "/careers",
    de: "/karriere",
  },
  "/iletisim": {
    tr: "/iletisim",
    en: "/contact",
    de: "/kontakt",
  },
} as const;

// A static host (GitHub Pages) has no middleware to rewrite localized URLs such as
// /en/products -> /en/urunler, so exported pages exist only under the folder names.
// Set LOCALIZED_PATHS=1 to get translated URLs when deploying to a Node server.
const pathnames =
  process.env.LOCALIZED_PATHS === "1"
    ? localizedPathnames
    : (Object.fromEntries(Object.keys(localizedPathnames).map((k) => [k, k])) as {
        [K in keyof typeof localizedPathnames]: K;
      });

export const routing = defineRouting({
  locales: ["tr", "en", "de"],
  defaultLocale: "tr",
  pathnames,
});

export type AppLocale = (typeof routing.locales)[number];
export type AppPathnames = keyof typeof routing.pathnames;
