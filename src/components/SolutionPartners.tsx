import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { solutionPartners } from "@/data/solution-partners";
import { asset } from "@/lib/base-path";

export async function SolutionPartners() {
  const t = await getTranslations("home");

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrowSolutionPartners")}
          title={t("solutionPartnersTitle")}
          subtitle={t("solutionPartnersSubtitle")}
          center
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {solutionPartners.map((p) => (
            <div
              key={p.name}
              className="flex h-28 items-center justify-center rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Image
                src={asset(p.logo)}
                alt={p.name}
                width={160}
                height={72}
                unoptimized
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
