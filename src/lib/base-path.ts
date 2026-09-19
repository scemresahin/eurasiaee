// Single source of truth for the GitHub Pages sub-path (also used by next.config.ts).
// With images.unoptimized, next/image does not prefix local src paths, and raw
// <img>/<a>/<iframe> never do, so anything pointing into `public/` goes through asset().
export const basePath = "/eurasiaee";

export function asset(path: string): string {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
