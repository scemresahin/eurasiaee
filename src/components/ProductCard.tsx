import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";
import type { Category } from "@/data/categories";

export function ProductCard({
  product,
  category,
  locale,
}: {
  product: Product;
  category: Category;
  locale: "tr" | "en";
}) {
  return (
    <Link
      href={{ pathname: "/urunler/[slug]", params: { slug: category.slug } }}
      className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-3xl bg-navy-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
    >
      <Image
        src={category.image}
        alt={product.name[locale]}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* soft bokeh-style highlights */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute left-6 top-16 h-16 w-16 rounded-full bg-white/20 blur-2xl" />

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-950/95 via-navy-950/50 to-transparent" />

      <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-bold tracking-wide text-navy-900">
        {category.code}
      </span>

      <div className="relative mt-auto flex items-start gap-3 p-6">
        <span className="mt-1.5 h-6 w-1 shrink-0 rounded-full bg-orange-500" />
        <div>
          <h3 className="text-xl font-extrabold leading-tight text-white">{category.code}</h3>
          <p className="mt-1.5 text-sm leading-snug text-navy-50/85">{product.name[locale]}</p>
          <p className="mt-1 text-xs text-navy-50/60">{product.spec[locale]}</p>
        </div>
      </div>
    </Link>
  );
}
