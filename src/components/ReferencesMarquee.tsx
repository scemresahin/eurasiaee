import Image from "next/image";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { references } from "@/data/references";
import { asset } from "@/lib/base-path";

export function ReferencesMarquee({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const doubled = [...references, ...references];

  return (
    <section className="border-y border-navy-100 bg-navy-50 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} center />
      </Container>

      <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12">
          {doubled.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex h-16 w-36 shrink-0 items-center justify-center grayscale opacity-70 transition-opacity hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={asset(p.logo)}
                alt={p.name}
                width={140}
                height={64}
                className="max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
