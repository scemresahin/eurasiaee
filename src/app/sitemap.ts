import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { categories } from "@/data/categories";

const baseUrl = "https://www.eurasiaee.com";

const staticPaths = [
  "/",
  "/hakkimizda",
  "/hizmetler",
  "/bayilikler",
  "/urunler",
  "/ar-ge",
  "/kariyer",
  "/sadakat-programi",
  "/iletisim",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    entries.push({
      url: `${baseUrl}${getPathname({ locale: "tr", href: path })}`,
      alternates: {
        languages: {
          tr: `${baseUrl}${getPathname({ locale: "tr", href: path })}`,
          en: `${baseUrl}${getPathname({ locale: "en", href: path })}`,
        },
      },
    });
  }

  for (const category of categories) {
    const href = { pathname: "/urunler/[slug]" as const, params: { slug: category.slug } };
    entries.push({
      url: `${baseUrl}${getPathname({ locale: "tr", href })}`,
      alternates: {
        languages: {
          tr: `${baseUrl}${getPathname({ locale: "tr", href })}`,
          en: `${baseUrl}${getPathname({ locale: "en", href })}`,
        },
      },
    });
  }

  return entries;
}

export const dynamic = "force-static";
