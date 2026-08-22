import type { Metadata } from "next";

export const SITE = {
  name: "Vellora Agency",
  shortName: "Vellora",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vellora.dynamisos.in",
  tagline: "Websites, Apps, AI & Automation for Startups",
  description:
    "Vellora Agency is a tech agency for small startups. We design and build high-converting websites, mobile apps, AI solutions, and automation systems with senior craft and startup speed.",
  email: "velloraagency@dynamisos.in",
  bookingUrl: "https://cal.com/satyam-singh-oshgny/15min",
  locale: "en_US",
  twitterSite: "@Satyam8306",
  keywords: [
    "startup website agency",
    "web design for startups",
    "mobile app development",
    "SEO for startups",
    "MVP development agency",
    "Next.js agency",
    "AI solutions for startups",
    "automation systems",
    "AI development agency",
    "business automation",
    "Vellora Agency",
    "Vellora",
  ],
} as const;

export const OG_IMAGE_PATH = "/opengraph-image";

/**
 * Complete per-page metadata (title, canonical, OpenGraph, Twitter) so every
 * route gets correct share previews. The banner image is the generated OG
 * image at /opengraph-image; segments can override it with their own
 * opengraph-image file convention if needed.
 */
export function pageMetadata(options: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${options.title} | ${SITE.name}`;
  const images = [
    {
      url: OG_IMAGE_PATH,
      width: 1200,
      height: 630,
      alt: `${SITE.name} — ${SITE.tagline}`,
    },
  ];

  return {
    title: options.title,
    description: options.description,
    alternates: { canonical: options.path },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: `${SITE.url}${options.path}`,
      siteName: SITE.name,
      title: fullTitle,
      description: options.description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.twitterSite,
      title: fullTitle,
      description: options.description,
      images,
    },
  };
}
