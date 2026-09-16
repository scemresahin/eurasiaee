import { useTranslations } from "next-intl";
import { Award } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

/**
 * Certificate images have not been supplied yet (the files received were
 * generic stock/template certificates, not Eurasia's own) — this renders
 * clearly-labeled placeholder slots instead of misrepresenting them.
 * Swap each placeholder for a real certificate image once available.
 */
export function CertificatesSection() {
  const t = useTranslations("home");

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Eurasia"
          title={t("certificatesTitle")}
          subtitle={t("certificatesSubtitle")}
          center
        />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-[3/4] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-navy-100 bg-navy-50 p-4 text-center"
            >
              <Award size={28} className="text-navy-900/30" />
              <span className="text-xs font-medium text-navy-900/40">
                {t("certificatesPlaceholder")}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
