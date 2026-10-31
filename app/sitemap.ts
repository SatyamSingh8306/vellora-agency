import type { MetadataRoute } from "next";
import { SEO_PAGES, SITE } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(SEO_PAGES).map(path => ({ url: new URL(path, SITE.url).href }));
}
