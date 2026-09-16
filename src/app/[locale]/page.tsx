import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, ClipboardCheck, FileSearch, PackageCheck, ShieldCheck, Wrench, Zap } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { HeroSlider } from "@/components/HeroSlider";
import { StatsStrip } from "@/components/StatsStrip";
import { CertificatesSection } from "@/components/CertificatesSection";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { CatalogDownload } from "@/components/CatalogDownload";
import { categories } from "@/data/categories";
import { company } from "@/data/company";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });

  const process = [
    { icon: FileSearch, title: t("process1Title"), desc: t("process1Desc") },
    { icon: ClipboardCheck, title: t("process2Title"), desc: t("process2Desc") },
    { icon: ShieldCheck, title: t("process3Title"), desc: t("process3Desc") },
    { icon: Wrench, title: t("process4Title"), desc: t("process4Desc") },
    { icon: ClipboardCheck, title: t("process5Title"), desc: t("process5Desc") },
    { icon: PackageCheck, title: t("process6Title"), desc: t("process6Desc") },
  ];

  return (
    <>
      {/* HERO SLIDER */}
      <HeroSlider />

      {/* STATS */}
      <StatsStrip />

      {/* TRUST STRIP */}
      <div className="border-b border-navy-100 bg-navy-50">
        <Container className="flex items-center gap-3 py-4 text-xs sm:text-sm font-medium text-navy-900/70">
          <Zap size={16} className="shrink-0 text-orange-500" />
          {t("trustStrip")}
        </Container>
      </div>

      {/* SERVICES */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={locale === "tr" ? "Hizmetlerimiz" : "Our Services"}
            title={t("servicesTitle")}
            subtitle={t("servicesSubtitle")}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: t("service1Title"), desc: t("service1Desc") },
              { title: t("service2Title"), desc: t("service2Desc") },
              { title: t("service3Title"), desc: t("service3Desc") },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                  <Zap size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CATEGORIES */}
      <section className="bg-navy-50 py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={locale === "tr" ? "Ürün Kataloğu" : "Product Catalogue"}
              title={t("categoriesTitle")}
              subtitle={t("categoriesSubtitle")}
            />
            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-orange-500"
            >
              {t("categoriesCta")}
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 8).map((c) => (
              <CategoryCard key={c.slug} category={c} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={locale === "tr" ? "Süreç" : "Process"}
            title={t("processTitle")}
            subtitle={t("processSubtitle")}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-orange-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CERTIFICATES */}
      <CertificatesSection />

      {/* SOLUTION PARTNERS */}
      <PartnersMarquee
        eyebrow="Eurasia"
        title={t("partnersTitle")}
        subtitle={t("partnersSubtitle")}
      />

      {/* CATALOG DOWNLOAD */}
      <CatalogDownload />

      {/* LOYALTY TEASER */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 rounded-3xl bg-navy-900 p-10 sm:p-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                {locale === "tr" ? "Yakında" : "Coming Soon"}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t("loyaltyTeaserTitle")}
              </h2>
              <p className="mt-4 text-navy-50/75 leading-relaxed">{t("loyaltyTeaserDesc")}</p>
            </div>
            <div className="flex lg:justify-end">
              <Link
                href="/sadakat-programi"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white hover:bg-orange-600 transition-colors"
              >
                {t("loyaltyTeaserCta")}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24">
        <Container>
          <div className="rounded-3xl border border-navy-100 bg-navy-50 p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              {t("finalCtaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600 leading-relaxed">{t("finalCtaDesc")}</p>
            <a
              href={`mailto:${company.emails.general}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-bold text-white hover:bg-orange-500 transition-colors"
            >
              {t("finalCtaButton")}
              <ArrowRight size={18} />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
