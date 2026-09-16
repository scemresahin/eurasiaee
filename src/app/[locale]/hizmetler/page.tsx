import { getTranslations } from "next-intl/server";
import {
  FileSearch,
  PackageCheck,
  Repeat,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const tHome = await getTranslations({ locale, namespace: "home" });

  const services = [
    { icon: Zap, title: t("s1Title"), desc: t("s1Desc") },
    { icon: Wrench, title: t("s2Title"), desc: t("s2Desc") },
    { icon: PackageCheck, title: t("s3Title"), desc: t("s3Desc") },
    { icon: FileSearch, title: t("s4Title"), desc: t("s4Desc") },
    { icon: ShieldCheck, title: t("s5Title"), desc: t("s5Desc") },
    { icon: Repeat, title: t("s6Title"), desc: t("s6Desc") },
  ];

  const process = [
    tHome("process1Title"),
    tHome("process2Title"),
    tHome("process3Title"),
    tHome("process4Title"),
    tHome("process5Title"),
    tHome("process6Title"),
  ];

  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Eurasia" title={t("title")} subtitle={t("subtitle")} light />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                  <s.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-extrabold text-navy-900">{t("processTitle")}</h2>
          <div className="mt-10 flex flex-wrap gap-4">
            {process.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-full border border-navy-100 bg-white px-5 py-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-orange-400">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold text-navy-900">{step}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
