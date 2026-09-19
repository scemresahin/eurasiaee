import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { company } from "@/data/company";
import { asset } from "@/lib/base-path";

export async function SanayiSection() {
  const t = await getTranslations("home");

  return (
    <section className="bg-[#FFC80A] text-black">
      <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={asset("/brand/sanayi-elektrikcisi.png")}
            alt="Sanayi Elektrikçisi"
            width={1032}
            height={321}
            className="h-auto w-full max-w-md"
          />
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em]">{t("sanayiEyebrow")}</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">{t("sanayiText")}</h2>
          <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-black/80">{t("sanayiDesc")}</p>
          <a
            href={`mailto:${company.emails.trade}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-[#FFC80A] transition-transform hover:-translate-y-0.5"
          >
            {company.emails.trade}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
