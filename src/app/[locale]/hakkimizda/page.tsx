import { getTranslations, setRequestLocale } from "next-intl/server";
import { Layers, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { company } from "@/data/company";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  const values = [
    { icon: Layers, title: t("value1Title"), desc: t("value1Desc") },
    { icon: Wrench, title: t("value2Title"), desc: t("value2Desc") },
    { icon: ShieldCheck, title: t("value3Title"), desc: t("value3Desc") },
  ];

  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow={company.legalNameTr} title={t("title")} subtitle={t("subtitle")} light />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-5 text-slate-700 leading-relaxed">
          <p>{t("body1")}</p>
          <p>{t("body2")}</p>
          <p>{t("body3")}</p>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-extrabold text-navy-900">{t("valuesTitle")}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-navy-100 bg-white p-7">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                  <v.icon size={20} />
                </div>
                <h3 className="font-bold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PartnersMarquee eyebrow={company.legalNameTr} title={t("partnersTitle")} />
    </>
  );
}
