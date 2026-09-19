"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "./Container";
import { company } from "@/data/company";
import { asset } from "@/lib/base-path";

const slides = [
  { key: "s1", image: "/hero/electrical-contracting.jpg" },
  { key: "s2", image: "/hero/panel-production.jpg" },
  { key: "s3", image: "/hero/material-supply.jpg" },
  { key: "s4", image: "/hero/consulting.jpg" },
  { key: "s5", image: "/hero/testing-export.jpg" },
  { key: "s6", image: "/hero/port-software.jpg" },
] as const;

export function HeroSlider() {
  const t = useTranslations("home");
  const tServices = useTranslations("services");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = slides[active];

  return (
    <section className="relative overflow-hidden bg-navy-950">
      {slides.map((s, i) => (
        <Image
          key={s.key}
          src={asset(s.image)}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-60" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/20" />

      <Container className="relative py-24 sm:py-32">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
          {t("sliderEyebrow")}
        </p>
        <h1 className="min-h-[3.3em] max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {tServices(`${current.key}Title`)}
        </h1>
        <p className="mt-6 min-h-[3.5em] max-w-xl text-base leading-relaxed text-navy-50/85 sm:text-lg">
          {tServices(`${current.key}Desc`)}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={`mailto:${company.emails.general}`}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-orange-600"
          >
            {t("ctaPrimary")}
            <ArrowRight size={18} />
          </a>
          <Link
            href="/kataloglar"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
          >
            {t("ctaSecondary")}
          </Link>
        </div>

        <div className="mt-12 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.key}
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
