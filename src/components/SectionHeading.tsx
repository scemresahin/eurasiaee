import { clsx } from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  light,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={clsx("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={clsx(
            "mb-3 text-xs font-bold uppercase tracking-[0.2em]",
            light ? "text-orange-400" : "text-orange-500"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-3xl sm:text-4xl font-extrabold tracking-tight",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={clsx("mt-4 text-base leading-relaxed", light ? "text-navy-50/75" : "text-slate-600")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
