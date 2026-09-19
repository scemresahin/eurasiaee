import { getTranslations } from "next-intl/server";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "./Container";

export async function CatalogsTeaser() {
  const t = await getTranslations("home");

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-navy-100 bg-navy-50 p-10 text-center sm:p-14">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-orange-400">
            <FileText size={26} />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">{t("catalogTitle")}</h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-600">{t("catalogSubtitle")}</p>
          </div>
          <Link
            href="/kataloglar"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange-500"
          >
            {t("catalogCta")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
