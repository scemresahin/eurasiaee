import { useTranslations } from "next-intl";
import { Briefcase, Globe2, MapPin } from "lucide-react";
import { Container } from "./Container";
import { company } from "@/data/company";

export function StatsStrip() {
  const t = useTranslations("home");

  const stats = [
    { icon: Globe2, value: company.stats.countries, label: t("statsCountries") },
    { icon: MapPin, value: company.stats.cities, label: t("statsCities") },
    { icon: Briefcase, value: company.stats.projects, label: t("statsProjects") },
  ];

  return (
    <div className="relative z-10 -mt-10 sm:-mt-12">
      <Container>
        <div className="grid grid-cols-3 divide-x divide-navy-100 rounded-2xl border border-navy-100 bg-white shadow-xl">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 px-3 py-6 sm:py-8 text-center">
              <s.icon size={22} className="text-orange-500" />
              <span className="text-2xl sm:text-3xl font-extrabold text-navy-900">{s.value}</span>
              <span className="text-xs sm:text-sm font-medium text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
