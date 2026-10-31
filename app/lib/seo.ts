import type { Metadata } from "next";

export const SITE = {
  name: "Vellora Agency",
  shortName: "Vellora",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vellora.dynamisos.in").origin,
  tagline: "Websites, Apps, AI & SEO for Growing Businesses",
  description: "Vellora Agency builds business websites, web and mobile apps, AI integrations, and SEO foundations for startups and growing businesses. Explore our work.",
  email: "velloraagency@dynamisos.in",
  bookingUrl: "https://cal.com/satyam-singh-oshgny/15min",
  linkedinUrl: "https://www.linkedin.com/showcase/vellora-agency",
  locale: "en_US",
} as const;

export const OG_IMAGE_PATH = "/opengraph-image.jpg";

type PageDefinition = {
  title: string;
  description: string;
  label: string;
  parent?: "/services" | "/work";
  type?: "WebPage" | "CollectionPage" | "ContactPage";
  serviceType?: string;
};

// Shared by metadata, structured data, breadcrumbs, and the sitemap.
export const SEO_PAGES = {
  "/": {
    title: "Websites, Apps, AI & SEO Services",
    description: SITE.description,
    label: "Home",
  },
  "/services": {
    title: "Website, App, AI & SEO Development Services",
    description: "Explore website design, app development, AI integrations, workflow automation, and technical SEO. Find the right support for your next business project.",
    label: "Services", type: "CollectionPage",
  },
  "/services/websites": {
    title: "Website Design & Development Services",
    description: "Get a business website built around your customers: responsive design, landing pages, content editing, SEO foundations, and a clear inquiry journey.",
    label: "Website design", parent: "/services", serviceType: "Website design and development",
  },
  "/services/apps": {
    title: "Web & Mobile App Development for Startups",
    description: "Turn a product idea into a focused MVP, web app, customer portal, or mobile app. Plan essential features, integrations, launch, and code handoff with Vellora.",
    label: "App development", parent: "/services", serviceType: "Web and mobile app development",
  },
  "/services/seo": {
    title: "Technical SEO & On-Page Optimization",
    description: "Help customers find your business with technical SEO audits, on-page optimization, content planning, and search performance reviews. Discuss your website.",
    label: "SEO services", parent: "/services", serviceType: "Technical SEO and on-page optimization",
  },
  "/services/ai": {
    title: "AI Development & Workflow Automation",
    description: "Add AI assistants, knowledge search, and workflow automation to your business. Vellora scopes AI integrations around your data, users, and existing tools.",
    label: "AI services", parent: "/services", serviceType: "AI development, integrations, and workflow automation",
  },
  "/work": {
    title: "Website Portfolio & Client Case Studies",
    description: "See Vellora’s website and product portfolio, including Ecotone Tours & Travels. Explore live builds, interface details, and the thinking behind the work.",
    label: "Our work", type: "CollectionPage",
  },
  "/work/ecotone": {
    title: "Ecotone Tours & Travels Website Case Study",
    description: "See how Vellora helped Ecotone Tours & Travels build a business website that connects travel discovery with client inquiries, with feedback from founder Kevisi.",
    label: "Ecotone case study", parent: "/work",
  },
  "/contact": {
    title: "Start a Website, App, AI or SEO Project",
    description: "Tell Vellora about your website, app, AI, or SEO project. Share a short brief, explain what you need, and get a suggested next step. Call booking is optional.",
    label: "Contact", type: "ContactPage",
  },
  "/process": {
    title: "Our Website, App & AI Development Process",
    description: "See how Vellora scopes, designs, and builds websites, apps, and AI integrations, with clear deliverables, review points, launch checks, and ongoing support.",
    label: "Our process",
  },
  "/stories": {
    title: "Client Results & Website Success Stories",
    description: "Read about Vellora’s work with Ecotone Tours & Travels, founder feedback, and how a business website can turn interest into conversations with new clients.",
    label: "Client results", type: "CollectionPage",
  },
  "/privacy": {
    title: "Privacy Policy & Inquiry Data",
    description: "Learn how Vellora Agency handles project inquiries, newsletter subscriptions, Google Forms storage, scheduling, and email delivery on this website.",
    label: "Privacy policy",
  },
  "/terms": {
    title: "Website Terms of Service",
    description: "Read the terms for using the Vellora Agency website and sending project inquiries. Website, app, AI, and SEO projects use a separate agreement.",
    label: "Terms of service",
  },
} as const satisfies Record<string, PageDefinition>;

export type PagePath = keyof typeof SEO_PAGES;

export function pageMetadata(path: PagePath): Metadata {
  const page = SEO_PAGES[path];
  const title = `${page.title} | ${SITE.name}`;
  const images = [{ url: `${SITE.url}${OG_IMAGE_PATH}`, width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` }];
  return {
    title: path === "/" ? { absolute: title } : page.title,
    description: page.description,
    alternates: { canonical: new URL(path, SITE.url).href },
    openGraph: { type: "website", locale: SITE.locale, url: new URL(path, SITE.url).href, siteName: SITE.name, title, description: page.description, images },
    twitter: { card: "summary_large_image", title, description: page.description, images },
  };
}

export function pageBreadcrumbs(path: PagePath) {
  const page: PageDefinition = SEO_PAGES[path];
  const items: { path: PagePath; name: string }[] = [{ path: "/", name: "Home" }];
  if (page.parent) items.push({ path: page.parent, name: SEO_PAGES[page.parent].label });
  if (path !== "/") items.push({ path, name: page.label });
  return items;
}

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization", "@id": `${SITE.url}/#organization`,
        name: SITE.name, alternateName: SITE.shortName, url: SITE.url,
        description: SITE.description, email: SITE.email,
        logo: { "@type": "ImageObject", url: `${SITE.url}/icon.svg` },
        image: `${SITE.url}${OG_IMAGE_PATH}`,
        sameAs: [SITE.linkedinUrl],
        contactPoint: { "@type": "ContactPoint", email: SITE.email, contactType: "Project inquiries", url: `${SITE.url}/contact` },
      },
      {
        "@type": "WebSite", "@id": `${SITE.url}/#website`,
        name: SITE.name, alternateName: SITE.shortName, url: SITE.url,
        description: SITE.description, inLanguage: "en",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };
}

export function pageGraph(path: PagePath) {
  const page: PageDefinition = SEO_PAGES[path];
  const url = new URL(path, SITE.url).href;
  const breadcrumbId = `${url}#breadcrumb`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.type || "WebPage", "@id": `${url}#webpage`,
        url, name: `${page.title} | ${SITE.name}`, description: page.description,
        inLanguage: "en", isPartOf: { "@id": `${SITE.url}/#website` },
        publisher: { "@id": `${SITE.url}/#organization` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${SITE.url}${OG_IMAGE_PATH}` },
        ...(path !== "/" && { breadcrumb: { "@id": breadcrumbId } }),
        ...(page.serviceType && { mainEntity: { "@id": `${url}#service` } }),
      },
      ...(path === "/" ? [] : [{
        "@type": "BreadcrumbList", "@id": breadcrumbId,
        itemListElement: pageBreadcrumbs(path).map((item, index) => ({
          "@type": "ListItem", position: index + 1, name: item.name, item: new URL(item.path, SITE.url).href,
        })),
      }]),
      ...(page.serviceType ? [{
        "@type": "Service", "@id": `${url}#service`, url,
        name: page.serviceType, serviceType: page.serviceType, description: page.description,
        provider: { "@id": `${SITE.url}/#organization` }, mainEntityOfPage: { "@id": `${url}#webpage` },
      }] : []),
    ],
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
