import { getTranslations } from "next-intl/server";
import { Download, Info } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductsGrid } from "@/components/ProductsGrid";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { company } from "@/data/company";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });

  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Eurasia" title={t("title")} subtitle={t("subtitle")} light />
        </Container>
      </section>

      <div className="border-b border-navy-100 bg-orange-100">
        <Container className="flex flex-col gap-3 py-4 text-sm text-navy-900/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Info size={18} className="mt-0.5 shrink-0 text-orange-600" />
            {t("quoteNotice")}
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <a
              href={company.catalogs.en}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-4 py-2 text-xs font-bold text-white hover:bg-orange-500"
            >
              <Download size={14} />
              {t("downloadCatalogEn")}
            </a>
            <a
              href={company.catalogs.de}
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/20 bg-white px-4 py-2 text-xs font-bold text-navy-900 hover:border-orange-500 hover:text-orange-500"
            >
              <Download size={14} />
              {t("downloadCatalogDe")}
            </a>
          </div>
        </Container>
      </div>

      <section className="py-16 sm:py-20">
        <Container>
          <ProductsGrid products={products} categories={categories} locale={locale} />
        </Container>
      </section>
    </>
  );
}
