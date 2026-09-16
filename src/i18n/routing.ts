import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  pathnames: {
    "/": "/",
    "/hakkimizda": {
      tr: "/hakkimizda",
      en: "/about",
    },
    "/hizmetler": {
      tr: "/hizmetler",
      en: "/services",
    },
    "/urunler": {
      tr: "/urunler",
      en: "/products",
    },
    "/urunler/[slug]": {
      tr: "/urunler/[slug]",
      en: "/products/[slug]",
    },
    "/bayilikler": {
      tr: "/bayilikler",
      en: "/dealers",
    },
    "/ar-ge": {
      tr: "/ar-ge",
      en: "/rd-projects",
    },
    "/kariyer": {
      tr: "/kariyer",
      en: "/careers",
    },
    "/sadakat-programi": {
      tr: "/sadakat-programi",
      en: "/loyalty-program",
    },
    "/iletisim": {
      tr: "/iletisim",
      en: "/contact",
    },
  },
});

export type AppPathnames = keyof typeof routing.pathnames;
