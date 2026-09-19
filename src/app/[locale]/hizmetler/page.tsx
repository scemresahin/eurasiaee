import { getTranslations, setRequestLocale } from "next-intl/server";
import { ClipboardCheck, FileSearch, PackageCheck, ShieldCheck, Wrench, Zap, Anchor, Cpu, FlaskConical } from "lucide-react";
import type { AppLocale } from "@/i18n/routing";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services" });
  const tHome = await getTranslations({ locale, namespace: "home" });

  const services = [
    { icon: Zap, title: t("s1Title"), desc: t("s1Desc") },
    { icon: Cpu, title: t("s2Title"), desc: t("s2Desc") },
    { icon: PackageCheck, title: t("s3Title"), desc: t("s3Desc") },
    { icon: FlaskConical, title: t("s4Title"), desc: t("s4Desc") },
    { icon: ShieldCheck, title: t("s5Title"), desc: t("s5Desc") },
    { icon: Anchor, title: t("s6Title"), desc: t("s6Desc") },
  ];

  const steps = [
    { icon: FileSearch, title: tHome("process1Title") },
    { icon: ClipboardCheck, title: tHome("process2Title") },
    { icon: ShieldCheck, title: tHome("process3Title") },
    { icon: Wrench, title: tHome("process4Title") },
    { icon: ClipboardCheck, title: tHome("process5Title") },
    { icon: PackageCheck, title: tHome("process6Title") },
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

      <section className="bg-navy-50 py-16 sm:py-24">
        <Container>
          <h2 className="text-2xl font-extrabold text-navy-900">{t("processTitle")}</h2>

          {/* Desktop: single-row horizontal timeline */}
          <ol className="relative mt-16 hidden grid-cols-6 lg:grid">
            <span
              aria-hidden
              className="absolute left-[8.333%] right-[8.333%] top-6 h-0.5 bg-gradient-to-r from-orange-500 via-orange-400 to-navy-900/30"
            />
            {steps.map((s, i) => (
              <li key={i} className="relative flex flex-col items-center px-2 text-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-navy-50 bg-navy-900 text-orange-400 shadow">
                  <s.icon size={18} />
                </span>
                <span className="mt-4 text-xs font-bold tracking-widest text-orange-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 text-sm font-bold leading-snug text-navy-900">{s.title}</span>
              </li>
            ))}
          </ol>

          {/* Mobile / tablet: vertical timeline */}
          <ol className="relative mt-10 space-y-8 border-l-2 border-orange-500/40 pl-8 lg:hidden">
            {steps.map((s, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[3.2rem] flex h-10 w-10 items-center justify-center rounded-full border-4 border-navy-50 bg-navy-900 text-orange-400">
                  <s.icon size={16} />
                </span>
                <span className="text-xs font-bold tracking-widest text-orange-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-bold text-navy-900">{s.title}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
