import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { company } from "@/data/company";
import { categories } from "@/data/categories";

export function Footer({ locale }: { locale: "tr" | "en" }) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-navy-100 bg-navy-950 text-navy-50">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo mono />
          <p className="mt-4 max-w-xs text-sm text-navy-50/70">{t("tagline")}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            {t("quickLinks")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-50/80">
            <li><Link href="/hakkimizda" className="hover:text-white">{tNav("about")}</Link></li>
            <li><Link href="/hizmetler" className="hover:text-white">{tNav("servicesMain")}</Link></li>
            <li><Link href="/bayilikler" className="hover:text-white">{tNav("dealers")}</Link></li>
            <li><Link href="/urunler" className="hover:text-white">{tNav("products")}</Link></li>
            <li><Link href="/ar-ge" className="hover:text-white">{tNav("rd")}</Link></li>
            <li><Link href="/kariyer" className="hover:text-white">{tNav("career")}</Link></li>
            <li><Link href="/sadakat-programi" className="hover:text-white">{tNav("loyalty")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            {t("categories")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-50/80">
            {categories.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link href={{ pathname: "/urunler/[slug]", params: { slug: c.slug } }} className="hover:text-white">
                  {c.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            {t("contact")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-50/80">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-orange-400" />
              <a href={`mailto:${company.emails.general}`} className="hover:text-white">
                {company.emails.general}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-orange-400" />
              <a href={`mailto:${company.emails.trade}`} className="hover:text-white">
                {company.emails.trade}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-orange-400" />
              <a href={`tel:${company.phone.href}`} className="hover:text-white">
                {company.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-orange-400" />
              <span>{company.address[locale]}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-1 py-5 text-xs text-navy-50/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalNameTr}. {t("rights")}
          </p>
          <p>{company.domain}</p>
        </Container>
      </div>
    </footer>
  );
}
