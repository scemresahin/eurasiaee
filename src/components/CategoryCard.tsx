import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Category } from "@/data/categories";

export function CategoryCard({
  category,
  locale,
}: {
  category: Category;
  locale: "tr" | "en";
}) {
  return (
    <Link
      href={{ pathname: "/urunler/[slug]", params: { slug: category.slug } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-44 w-full overflow-hidden bg-navy-100">
        <Image
          src={category.image}
          alt={category.name[locale]}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-navy-950/0" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-bold tracking-wide text-navy-900">
          {category.code}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-navy-900 group-hover:text-orange-500 transition-colors">
          {category.name[locale]}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-2">
          {category.tagline[locale]}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 group-hover:text-orange-500 transition-colors">
          {locale === "tr" ? "İncele" : "Explore"}
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
