import { SITE } from "../lib/seo";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    slogan: SITE.tagline,
    image: `${SITE.url}/opengraph-image`,
    logo: `${SITE.url}/opengraph-image`,
    sameAs: [SITE.bookingUrl],
    areaServed: "Worldwide",
    serviceType: [
      "Website Design",
      "Website Development",
      "Mobile App Development",
      "Search Engine Optimization",
      "Digital Growth Consulting",
    ],
    knowsAbout: [
      "Web design",
      "Web development",
      "Mobile apps",
      "SEO",
      "Startup growth",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Startup Website Design & Development",
          description:
            "High-performance marketing websites and product pages built to convert.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile & Web App Development",
          description:
            "iOS, Android, and web apps scoped for startups — clean UX and production-ready code.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimization for Startups",
          description:
            "Technical SEO, content architecture, and systems that compound organic growth.",
        },
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en",
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE.url}/opengraph-image`,
    },
  };

  const schemas = [organization, website, webpage];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@id"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
