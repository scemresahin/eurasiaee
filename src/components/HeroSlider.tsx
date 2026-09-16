"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "./Container";
import { company } from "@/data/company";

const slideImages = [
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566417110090-6b15a06ec800?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=2000&auto=format&fit=crop",
];

export function HeroSlider() {
  const t = useTranslations("home");
  const tSlides = useTranslations("heroSlides");
  const slideCount = slideImages.length;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slideCount);
    }, 6000);
    return () => clearInterval(id);
  }, [slideCount]);

  return (
    <section className="relative overflow-hidden bg-navy-950">
      {slideImages.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-40" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/50" />

      <Container className="relative py-24 sm:py-32">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
          {tSlides(`${active}.eyebrow`)}
        </p>
        <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white min-h-[2.2em] sm:min-h-[2.4em]">
          {tSlides(`${active}.title`)}
        </h1>
        <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-navy-50/80 min-h-[3.5em]">
          {tSlides(`${active}.desc`)}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={`mailto:${company.emails.general}`}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white hover:bg-orange-600 transition-colors"
          >
            {t("ctaPrimary")}
            <ArrowRight size={18} />
          </a>
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur hover:bg-white/15 transition-colors"
          >
            {t("ctaSecondary")}
          </Link>
        </div>

        <div className="mt-12 flex gap-2">
          {slideImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-orange-500" : "w-3 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
