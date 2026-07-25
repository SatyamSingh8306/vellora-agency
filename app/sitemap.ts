import type { MetadataRoute } from "next";
import { SITE } from "./lib/seo";

const routes = [
  "",
  "/services",
  "/services/websites",
  "/services/apps",
  "/services/seo",
  "/work",
  "/process",
  "/stories",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
