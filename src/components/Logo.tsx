import { clsx } from "clsx";
import { basePath } from "@/lib/base-path";

export function Logo({ className, mono }: { className?: string; mono?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/logo.svg`}
      alt="Eurasia Endüstriyel Enerji"
      className={clsx("h-10 w-auto sm:h-11", mono && "brightness-0 invert", className)}
    />
  );
}
