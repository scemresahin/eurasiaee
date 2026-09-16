import { getTranslations, setRequestLocale } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteForm } from "@/components/QuoteForm";
import { categories } from "@/data/categories";
import { company } from "@/data/company";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Eurasia" title={t("title")} subtitle={t("subtitle")} light />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-navy-100 bg-white p-7 sm:p-9">
            <h2 className="text-xl font-bold text-navy-900">{t("formTitle")}</h2>
            <p className="mt-2 text-sm text-slate-600">{t("formDesc")}</p>
            <div className="mt-7">
              <QuoteForm locale={locale} categories={categories} />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-7">
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy-900/60">
                {t("infoTitle")}
              </h3>

              <div className="mt-5 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-orange-500" />
                  <div>
                    <p className="font-semibold text-navy-900">{t("emailGeneral")}</p>
                    <a href={`mailto:${company.emails.general}`} className="text-slate-600 hover:text-orange-500">
                      {company.emails.general}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-orange-500" />
                  <div>
                    <p className="font-semibold text-navy-900">{t("emailTrade")}</p>
                    <a href={`mailto:${company.emails.trade}`} className="text-slate-600 hover:text-orange-500">
                      {company.emails.trade}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-orange-500" />
                  <div>
                    <p className="font-semibold text-navy-900">{t("phoneTitle")}</p>
                    <a href={`tel:${company.phone.href}`} className="text-slate-600 hover:text-orange-500">
                      {company.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-orange-500" />
                  <div>
                    <p className="font-semibold text-navy-900">{t("addressTitle")}</p>
                    <p className="text-slate-600">{company.address[locale]}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-navy-100 pt-5">
                <p className="text-xs font-bold uppercase tracking-wide text-navy-900/50">
                  {t("legalTitle")}
                </p>
                <p className="mt-1 text-sm text-slate-600">{company.legalNameTr}</p>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <h2 className="mb-5 text-sm font-bold uppercase tracking-wide text-navy-900/60">
            {t("mapTitle")}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-navy-100">
            <iframe
              src={company.mapEmbedSrc}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eurasia Endüstriyel Enerji - Konum"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
