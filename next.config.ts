import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // GitHub Pages is a static host: emit a fully static site into `out/`.
  output: "export",
  // Project page is served under https://scemresahin.github.io/eurasiaee, so the
  // app lives under this sub-path. basePath also prefixes assets automatically.
  basePath: "/eurasiaee",
  // GitHub Pages serves `/path/` -> `/path/index.html`; trailing slashes keep
  // directory-style URLs and asset paths resolving correctly.
  trailingSlash: true,
  images: {
    // No Next.js Image Optimization server on GitHub Pages.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
