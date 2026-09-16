import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, Clock, Gift, Percent, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";

export default async function LoyaltyPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "loyalty" });

  const pillars = [
    { icon: Percent, label: locale === "tr" ? "Hacme Dayalı Avantajlar" : "Volume-Based Advantages" },
    { icon: Gift, label: locale === "tr" ? "Kampanya Duyuruları" : "Campaign Announcements" },
    { icon: Sparkles, label: locale === "tr" ? "Kademeli Program" : "Tiered Program" },
  ];

  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Eurasia" title={t("title")} subtitle={t("subtitle")} light />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5 text-slate-700 leading-relaxed">
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-full border border-navy-100 bg-navy-50 px-4 py-2.5 text-sm font-semibold text-navy-900"
                >
                  <p.icon size={16} className="text-orange-500" />
                  {p.label}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-navy-100 bg-white p-7">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <Clock size={20} />
            </div>
            <p className="text-xs font-bold uppercase tracking-wide text-navy-900/50">
              {t("statusLabel")}
            </p>
            <p className="mt-1 text-lg font-extrabold text-navy-900">{t("status")}</p>

            <div className="mt-6 border-t border-navy-100 pt-6">
              <h3 className="font-bold text-navy-900">{t("notifyTitle")}</h3>
              <p className="mt-2 text-sm text-slate-600">{t("notifyDesc")}</p>
              <a
                href={`mailto:${company.emails.general}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-500 transition-colors"
              >
                {t("notifyCta")}
                <ArrowRight size={16} />
              </a>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
