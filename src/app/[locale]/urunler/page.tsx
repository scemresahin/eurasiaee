import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { Container } from "@/components/Container";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "products" });

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(240,127,29,0.22),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(48,90,125,0.55),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px]" />
      <Container className="relative py-24">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-orange-400">Eurasia</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t("heroTitle")}
        </h1>
        <Link
          href="/kataloglar"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-orange-600"
        >
          {t("heroCta")}
          <ArrowRight size={18} />
        </Link>
      </Container>
    </section>
  );
}
