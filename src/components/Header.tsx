"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { company } from "@/data/company";
import { categories } from "@/data/categories";

const navItems = [
  { href: "/", key: "home" },
  { href: "/hakkimizda", key: "about" },
  {
    key: "services",
    children: [
      { href: "/hizmetler", key: "servicesMain" },
      { href: "/bayilikler", key: "dealers" },
    ],
  },
  { href: "/urunler", key: "products", mega: true },
  { href: "/kataloglar", key: "catalogs" },
  { href: "/kariyer", key: "career" },
  { href: "/iletisim", key: "contact" },
] as const;

const localeOptions: { code: AppLocale; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const routeParams = useParams();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  function switchLocale(next: AppLocale) {
    if (pathname === "/urunler/[slug]") {
      router.replace(
        { pathname, params: { slug: routeParams.slug as string } },
        { locale: next }
      );
    } else {
      router.replace(pathname, { locale: next });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            if ("mega" in item) {
              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-navy-900/80 hover:text-orange-500 transition-colors"
                  >
                    {t(item.key)}
                    <ChevronDown size={14} />
                  </Link>
                  {productsOpen && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                      <div className="grid w-[640px] grid-cols-3 gap-1 rounded-xl border border-navy-100 bg-white p-4 shadow-xl">
                        {categories.map((c) => (
                          <Link
                            key={c.slug}
                            href={{ pathname: "/urunler/[slug]", params: { slug: c.slug } }}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-navy-900 hover:bg-navy-50 hover:text-orange-500"
                          >
                            {c.name[locale]}
                          </Link>
                        ))}
                        <Link
                          href="/urunler"
                          className="col-span-3 mt-1 rounded-lg border-t border-navy-100 px-3 pt-3 text-sm font-bold text-orange-500 hover:text-orange-600"
                        >
                          {t("products")} →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if ("children" in item) {
              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-navy-900/80 hover:text-orange-500 transition-colors">
                    {t(item.key)}
                    <ChevronDown size={14} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full pt-3">
                      <div className="w-56 rounded-xl border border-navy-100 bg-white py-2 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm font-medium text-navy-900 hover:bg-navy-50 hover:text-orange-500"
                          >
                            {t(child.key)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-navy-900/80 hover:text-orange-500 transition-colors"
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm font-semibold text-navy-900/70">
            {localeOptions.map((o, i) => (
              <span key={o.code} className="flex items-center gap-1">
                {i > 0 && <span className="text-navy-100">/</span>}
                <button
                  onClick={() => switchLocale(o.code)}
                  className={locale === o.code ? "text-orange-500" : "hover:text-orange-500"}
                >
                  {o.label}
                </button>
              </span>
            ))}
          </div>
          <a
            href={`mailto:${company.emails.general}`}
            className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-500 transition-colors"
          >
            {t("cta")}
          </a>
        </div>

        <button
          className="lg:hidden text-navy-900"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("menu")}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-navy-100 bg-white">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              if ("mega" in item) {
                return (
                  <div key={item.key}>
                    <button
                      onClick={() => setMobileProductsOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-navy-900 hover:bg-navy-50"
                    >
                      {t(item.key)}
                      <ChevronDown
                        size={16}
                        className={mobileProductsOpen ? "rotate-180 transition-transform" : "transition-transform"}
                      />
                    </button>
                    {mobileProductsOpen && (
                      <div className="ml-3 grid grid-cols-2 gap-1 border-l border-navy-100 pl-3">
                        {categories.map((c) => (
                          <Link
                            key={c.slug}
                            href={{ pathname: "/urunler/[slug]", params: { slug: c.slug } }}
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-3 py-2 text-xs font-medium text-navy-900/80 hover:bg-navy-50"
                          >
                            {c.name[locale]}
                          </Link>
                        ))}
                        <Link
                          href="/urunler"
                          onClick={() => setOpen(false)}
                          className="col-span-2 rounded-lg px-3 py-2 text-xs font-bold text-orange-500"
                        >
                          {t("products")} →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if ("children" in item) {
                return (
                  <div key={item.key}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-navy-900 hover:bg-navy-50"
                    >
                      {t(item.key)}
                      <ChevronDown
                        size={16}
                        className={mobileServicesOpen ? "rotate-180 transition-transform" : "transition-transform"}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-3 border-l border-navy-100 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.key}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-900/80 hover:bg-navy-50"
                          >
                            {t(child.key)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-900 hover:bg-navy-50"
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center justify-between px-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-navy-900/70">
                {localeOptions.map((o, i) => (
                  <span key={o.code} className="flex items-center gap-2">
                    {i > 0 && <span>/</span>}
                    <button onClick={() => switchLocale(o.code)} className={locale === o.code ? "text-orange-500" : ""}>
                      {o.label}
                    </button>
                  </span>
                ))}
              </div>
              <a
                href={`mailto:${company.emails.general}`}
                className="rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white"
              >
                {t("cta")}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
