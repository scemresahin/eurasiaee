import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, CheckCircle2, Info, Settings2, Target } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { Container } from "@/components/Container";
import { categories, getCategoryBySlug } from "@/data/categories";
import { company } from "@/data/company";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const t = await getTranslations({ locale, namespace: "products" });
  const others = categories.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <Image src={category.image} alt="" fill priority className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
        <Container className="relative py-20 sm:py-24">
          <Link
            href="/urunler"
            className="mb-6 inline-block text-sm font-semibold text-orange-400 hover:text-orange-300"
          >
            ← {t("backToProducts")}
          </Link>
          <span className="mb-3 ml-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-wide text-white">
            {category.code}
          </span>
          <h1 className="max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">{category.name[locale]}</h1>
          <p className="mt-4 max-w-xl text-navy-50/80">{category.tagline[locale]}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy-900">
                <Info size={20} className="text-orange-500" />
                {t("overview")}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-600">{category.overview[locale]}</p>
              {category.note && (
                <p className="mt-4 rounded-xl bg-navy-50 p-4 text-sm leading-relaxed text-navy-900/70">
                  {category.note[locale]}
                </p>
              )}
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy-900">
                <Target size={20} className="text-orange-500" />
                {t("applications")}
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {category.applications.map((a, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="shrink-0 text-orange-500" />
                    {a[locale]}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-xl font-extrabold text-navy-900">
                <Settings2 size={20} className="text-orange-500" />
                {t("features")}
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {category.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-orange-500" />
                    {f[locale]}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-navy-900">{t("options")}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {category.options.map((o, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-navy-800" />
                    {o[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-navy-900 p-7 text-white">
              <h3 className="text-lg font-bold">{t("requestQuote")}</h3>
              <p className="mt-2 text-sm text-navy-50/75">{t("quoteNotice")}</p>
              <a
                href={`mailto:${company.emails.general}?subject=${encodeURIComponent(
                  t("quoteSubject", { name: category.name[locale] })
                )}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold transition-colors hover:bg-orange-600"
              >
                {company.emails.general}
                <ArrowRight size={16} />
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy-900/60">{t("moreCategories")}</h3>
              <ul className="mt-4 space-y-2">
                {others.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={{ pathname: "/urunler/[slug]", params: { slug: c.slug } }}
                      className="block rounded-lg border border-navy-100 px-4 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-orange-500 hover:text-orange-500"
                    >
                      {c.name[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
