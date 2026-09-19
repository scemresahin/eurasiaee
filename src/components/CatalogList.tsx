"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Download, ExternalLink, Eye, FileText, Search, X } from "lucide-react";

export interface CatalogItem {
  id: string;
  url: string;
  cover: string;
  title: string;
  description: string;
  language: "tr" | "en" | "de";
  pages?: number;
  size: string;
}

const languageNames: Record<CatalogItem["language"], string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
};

export function CatalogList({ items }: { items: CatalogItem[] }) {
  const t = useTranslations("catalogs");
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<string | null>(null);
  const [preview, setPreview] = useState<CatalogItem | null>(null);

  const languages = useMemo(() => Array.from(new Set(items.map((i) => i.language))), [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    return items.filter(
      (i) =>
        (!language || i.language === language) &&
        (!q || `${i.title} ${i.description}`.toLocaleLowerCase().includes(q))
    );
  }, [items, query, language]);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [preview]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-full border border-navy-100 bg-white py-2.5 pl-11 pr-4 text-sm text-navy-900 outline-none focus:border-orange-500"
          />
        </div>

        {languages.length > 1 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-navy-900/50">{t("languageLabel")}</span>
            <button
              onClick={() => setLanguage(null)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${
                language === null ? "bg-navy-900 text-white" : "bg-navy-50 text-navy-900 hover:bg-navy-100"
              }`}
            >
              {t("filterAll")}
            </button>
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLanguage(l)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${
                  language === l ? "bg-navy-900 text-white" : "bg-navy-50 text-navy-900 hover:bg-navy-100"
                }`}
              >
                {languageNames[l]}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="mt-6 text-xs font-semibold text-navy-900/50">{t("count", { count: filtered.length })}</p>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-navy-100 p-10 text-center text-sm text-slate-500">
          {t("noResults")}
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((c) => (
            <article
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <button
                onClick={() => setPreview(c)}
                aria-label={`${t("preview")}: ${c.title}`}
                className="relative aspect-[3/4] w-full overflow-hidden bg-navy-100"
              >
                <Image
                  src={c.cover}
                  alt={c.title}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-navy-950/0 text-white opacity-0 transition-all group-hover:bg-navy-950/45 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-navy-900">
                    <Eye size={14} />
                    {t("preview")}
                  </span>
                </span>
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-navy-900">
                  {c.language}
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-sm font-bold leading-snug text-navy-900">{c.title}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-slate-600">{c.description}</p>
                <p className="mt-3 flex items-center gap-2 text-xs text-navy-900/50">
                  <FileText size={13} />
                  PDF
                  {c.size && <span>· {c.size}</span>}
                  {c.pages && <span>· {t("pages", { count: c.pages })}</span>}
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setPreview(c)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-navy-900/20 px-3 py-2 text-xs font-bold text-navy-900 transition-colors hover:border-orange-500 hover:text-orange-500"
                  >
                    <Eye size={14} />
                    {t("preview")}
                  </button>
                  <a
                    href={c.url}
                    download
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-navy-900 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-orange-500"
                  >
                    <Download size={14} />
                    {t("download")}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setPreview(null)}
        >
          <div
            className="flex h-full max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-navy-100 px-4 py-3 sm:px-6">
              <h3 className="truncate text-sm font-bold text-navy-900 sm:text-base">{preview.title}</h3>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={preview.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden items-center gap-1.5 rounded-full border border-navy-900/20 px-3 py-1.5 text-xs font-bold text-navy-900 hover:border-orange-500 hover:text-orange-500 sm:inline-flex"
                >
                  <ExternalLink size={14} />
                  {t("openInNewTab")}
                </a>
                <a
                  href={preview.url}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-orange-500"
                >
                  <Download size={14} />
                  {t("download")}
                </a>
                <button
                  onClick={() => setPreview(null)}
                  aria-label={t("close")}
                  className="rounded-full p-2 text-navy-900 hover:bg-navy-50"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <iframe
              src={`${preview.url}#view=FitH`}
              title={preview.title}
              className="w-full flex-1 bg-navy-50"
            />
            <p className="border-t border-navy-100 px-4 py-2 text-[0.7rem] text-slate-500 sm:px-6">
              {t("previewHint")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
