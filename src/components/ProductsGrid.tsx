"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ProductCard } from "./ProductCard";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";

export function ProductsGrid({
  products,
  categories,
  locale,
}: {
  products: Product[];
  categories: Category[];
  locale: "tr" | "en";
}) {
  const t = useTranslations("products");
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? products.filter((p) => p.categorySlug === active) : products;
  const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${
            active === null
              ? "bg-navy-900 text-white"
              : "bg-navy-50 text-navy-900 hover:bg-navy-100"
          }`}
        >
          {t("allCategories")}
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActive(c.slug)}
            className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${
              active === c.slug
                ? "bg-navy-900 text-white"
                : "bg-navy-50 text-navy-900 hover:bg-navy-100"
            }`}
          >
            {c.code}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            category={categoryBySlug[p.categorySlug]}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
