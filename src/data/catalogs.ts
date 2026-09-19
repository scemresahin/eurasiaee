import type { LocalizedText } from "./categories";

export interface Catalog {
  id: string;
  /** file name inside /public/catalogs */
  file: string;
  /** cover image inside /public/catalogs/covers */
  cover: string;
  title: LocalizedText;
  description: LocalizedText;
  /** language of the document itself */
  language: "tr" | "en" | "de";
  pages?: number;
}

/**
 * Add new catalogues here: drop the PDF into /public/catalogs (and an optional
 * cover into /public/catalogs/covers) and append an entry. The catalogues page
 * handles search, language filtering, preview and download automatically.
 */
export const catalogs: Catalog[] = [
  {
    id: "panel-en",
    file: "eurasia-panel-katalogu-en.pdf",
    cover: "eurasia-panel-katalogu-en.jpg",
    title: {
      tr: "Elektrik Panosu Çözümleri – Avrupa Ürün Kataloğu",
      en: "Electrical Panel Solutions – Europe Product Catalogue",
      de: "Schaltschranklösungen – Europa-Produktkatalog",
    },
    description: {
      tr: "17 pano ailesi, mühendislik esnekliği, kalite süreçleri ve RFQ'dan ihracata teslimat akışı. İngilizce.",
      en: "17 panel families, engineering flexibility, quality process and the RFQ-to-export workflow. English edition.",
      de: "17 Schaltschrankfamilien, Engineering-Flexibilität, Qualitätsprozess und der Ablauf von der Anfrage bis zum Export. Englische Ausgabe.",
    },
    language: "en",
    pages: 29,
  },
  {
    id: "panel-de",
    file: "eurasia-panel-katalogu-de.pdf",
    cover: "eurasia-panel-katalogu-de.jpg",
    title: {
      tr: "Elektrik Panosu Çözümleri – Avrupa Ürün Kataloğu",
      en: "Electrical Panel Solutions – Europe Product Catalogue",
      de: "Schaltschranklösungen – Europa-Produktkatalog",
    },
    description: {
      tr: "17 pano ailesi, mühendislik esnekliği, kalite süreçleri ve RFQ'dan ihracata teslimat akışı. Almanca.",
      en: "17 panel families, engineering flexibility, quality process and the RFQ-to-export workflow. German edition.",
      de: "17 Schaltschrankfamilien, Engineering-Flexibilität, Qualitätsprozess und der Ablauf von der Anfrage bis zum Export. Deutsche Ausgabe.",
    },
    language: "de",
    pages: 29,
  },
];
