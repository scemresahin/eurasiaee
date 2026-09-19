import fs from "node:fs";
import path from "node:path";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CatalogList, type CatalogItem } from "@/components/CatalogList";
import { catalogs } from "@/data/catalogs";
import { asset } from "@/lib/base-path";

function formatSize(bytes: number) {
  const mb = bytes / 1_000_000;
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1000))} KB`;
}

export default async function CatalogsPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "catalogs" });

  const items: CatalogItem[] = catalogs.map((c) => {
    let size = "";
    try {
      size = formatSize(fs.statSync(path.join(process.cwd(), "public", "catalogs", c.file)).size);
    } catch {
      size = "";
    }
    return {
      id: c.id,
      url: asset(`/catalogs/${c.file}`),
      cover: asset(`/catalogs/covers/${c.cover}`),
      title: c.title[locale],
      description: c.description[locale],
      language: c.language,
      pages: c.pages,
      size,
    };
  });

  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Eurasia" title={t("title")} subtitle={t("subtitle")} light />
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <CatalogList items={items} />
        </Container>
      </section>
    </>
  );
}
