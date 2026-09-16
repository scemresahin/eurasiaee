import { getTranslations } from "next-intl/server";
import { ArrowRight, BookOpen, Percent, Wrench } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";

export default async function DealersPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "dealers" });

  const benefits = [
    { icon: Wrench, title: t("benefit1Title"), desc: t("benefit1Desc") },
    { icon: Percent, title: t("benefit2Title"), desc: t("benefit2Desc") },
    { icon: BookOpen, title: t("benefit3Title"), desc: t("benefit3Desc") },
  ];

  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Eurasia" title={t("title")} subtitle={t("subtitle")} light />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-5 text-slate-700 leading-relaxed">
          <p>{t("body1")}</p>
          <p>{t("body2")}</p>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-2xl border border-navy-100 bg-white p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                  <b.icon size={20} />
                </div>
                <h3 className="font-bold text-navy-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="text-center">
          <a
            href={`mailto:${company.emails.general}?subject=${encodeURIComponent(
              locale === "tr" ? "Bayilik Başvurusu" : "Dealership Application"
            )}`}
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-bold text-white hover:bg-orange-500 transition-colors"
          >
            {t("cta")}
            <ArrowRight size={18} />
          </a>
        </Container>
      </section>
    </>
  );
}
