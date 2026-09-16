import { useTranslations } from "next-intl";
import { Download, FileText } from "lucide-react";
import { Container } from "./Container";
import { company } from "@/data/company";

export function CatalogDownload() {
  const t = useTranslations("home");

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-navy-100 bg-navy-50 p-10 sm:p-14 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-orange-400">
            <FileText size={26} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">{t("catalogTitle")}</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600 leading-relaxed">{t("catalogSubtitle")}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={company.catalogs.en}
              download
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white hover:bg-orange-500 transition-colors"
            >
              <Download size={16} />
              {t("catalogDownloadEn")}
            </a>
            <a
              href={company.catalogs.de}
              download
              className="inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-white px-6 py-3 text-sm font-bold text-navy-900 hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              <Download size={16} />
              {t("catalogDownloadDe")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
