import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, BadgeCheck } from "lucide-react";
import type { AppLocale } from "@/i18n/routing";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";
import { dealerships } from "@/data/dealerships";
import { asset } from "@/lib/base-path";

export default async function DealersPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "dealers" });

  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Eurasia" title={t("title")} subtitle={t("subtitle")} light />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <p className="max-w-3xl leading-relaxed text-slate-700">{t("intro")}</p>

          <div className="mt-12 space-y-8">
            {dealerships.map((d, i) => (
              <article
                key={d.id}
                className="grid overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-xl lg:grid-cols-5"
              >
                <div
                  className={`relative min-h-64 bg-navy-100 lg:col-span-2 lg:min-h-80 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={asset(d.image)}
                    alt={d.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: d.imagePosition ?? "center" }}
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-3">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                    <BadgeCheck size={14} />
                    {t("fieldLabel")}: {d.field[locale]}
                  </span>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900">{d.name}</h2>
                  <p className="mt-4 leading-relaxed text-slate-600">{d.description[locale]}</p>
                  <a
                    href={`mailto:${company.emails.general}?subject=${encodeURIComponent(
                      t("quoteSubject", { brand: d.name })
                    )}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-navy-900 transition-colors hover:text-orange-500"
                  >
                    {company.emails.general}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={`mailto:${company.emails.general}`}
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange-500"
            >
              {t("cta")}
              <ArrowRight size={18} />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
