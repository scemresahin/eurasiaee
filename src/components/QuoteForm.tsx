"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Paperclip, Send } from "lucide-react";
import { company } from "@/data/company";
import type { Category } from "@/data/categories";

export function QuoteForm({
  locale,
  categories,
  presetCategory,
}: {
  locale: "tr" | "en";
  categories: Category[];
  presetCategory?: string;
}) {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState(presetCategory ?? "");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0] ?? null);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject =
      locale === "tr"
        ? `Teklif Talebi${category ? " - " + category : ""} - ${companyName || name}`
        : `Quote Request${category ? " - " + category : ""} - ${companyName || name}`;

    const lines =
      locale === "tr"
        ? [
            `Ad Soyad: ${name}`,
            `Firma: ${companyName}`,
            `E-posta: ${email}`,
            `Telefon: ${phone}`,
            category ? `İlgilendiği Kategori: ${category}` : "",
            "",
            "Mesaj:",
            message,
            file ? `\n(Lütfen "${file.name}" dosyasını bu e-postaya elle ekleyin.)` : "",
          ]
        : [
            `Name: ${name}`,
            `Company: ${companyName}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            category ? `Category of interest: ${category}` : "",
            "",
            "Message:",
            message,
            file ? `\n(Please attach "${file.name}" to this email manually.)` : "",
          ];

    const body = lines.filter(Boolean).join("\n");
    const mailto = `mailto:${company.emails.general}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("nameLabel")} value={name} onChange={setName} required />
        <Field label={t("companyLabel")} value={companyName} onChange={setCompanyName} />
        <Field label={t("emailLabel")} value={email} onChange={setEmail} type="email" required />
        <Field label={t("phoneLabel")} value={phone} onChange={setPhone} type="tel" />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy-900">
          {t("categoryLabel")}
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-orange-500"
        >
          <option value="">{t("categoryPlaceholder")}</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.name[locale]}>
              {c.name[locale]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy-900">
          {t("messageLabel")}
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("messagePlaceholder")}
          rows={5}
          className="w-full rounded-lg border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy-900">
          {t("fileLabel")}
        </label>
        <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-navy-100 bg-navy-50 px-4 py-3 text-sm text-navy-900/70 hover:border-orange-500">
          <Paperclip size={16} className="shrink-0 text-orange-500" />
          <span className="truncate">{file ? file.name : t("fileSelected") + "..."}</span>
          <input type="file" onChange={handleFileChange} className="hidden" />
        </label>
        <p className="mt-1.5 text-xs text-slate-500">{t("fileNote")}</p>
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
      >
        <Send size={16} />
        {t("submit")}
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy-900">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-lg border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-orange-500"
      />
    </div>
  );
}
