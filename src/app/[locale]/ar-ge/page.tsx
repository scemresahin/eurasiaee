import { getTranslations } from "next-intl/server";
import { FlaskConical } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { rdProjects } from "@/data/rd-projects";

export default async function RdPage({
  params,
}: {
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rd" });

  return (
    <>
      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Eurasia" title={t("title")} subtitle={t("subtitle")} light />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <p className="max-w-2xl text-slate-600 leading-relaxed">{t("intro")}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {rdProjects.map((project) => (
              <div key={project.id} className="rounded-2xl border border-navy-100 bg-white p-7">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                      <FlaskConical size={18} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide text-navy-900/50">
                      {project.program}
                    </span>
                  </div>
                  <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-900">
                    {project.status[locale]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-900">{project.title[locale]}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{project.summary[locale]}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-xs text-slate-500">{t("disclaimer")}</p>
        </Container>
      </section>
    </>
  );
}
