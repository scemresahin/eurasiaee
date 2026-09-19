// Single source of truth for the deploy sub-path (also used by next.config.ts).
//
// The site is served at the ROOT of the custom domain (https://www.eurasiaee.com),
// so the default base path is empty. `basePath` is inlined into the client bundle
// at build time (see node_modules/next/dist/docs/.../basePath.md), so switching
// targets requires a rebuild.
//
// To build for the bare GitHub Pages project URL instead
// (https://scemresahin.github.io/eurasiaee), set the env var at build time:
//   NEXT_PUBLIC_BASE_PATH=/eurasiaee npm run build
//
// With images.unoptimized, next/image does not prefix local src paths, and raw
// <img>/<a>/<iframe> never do, so anything pointing into `public/` goes through asset().
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
