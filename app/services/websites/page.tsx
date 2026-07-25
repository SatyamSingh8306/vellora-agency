import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import ContentPage from "../../components/ContentPage";

export const metadata: Metadata = {
  title: "Website Design & Development",
  description:
    "High-converting startup websites — marketing sites, product pages, and landing pages by Vellora Agency.",
  alternates: { canonical: "/services/websites" },
};

export default function WebsitesPage() {
  return (
    <PageShell>
      <ContentPage
        eyebrow="Services · Websites"
        title="Websites that win clients."
        description="We design and ship fast, SEO-ready marketing sites and product pages that turn visitors into conversations."
      >
        <p>
          Startups don&apos;t need another template. You need a site that
          explains the product clearly, loads instantly, and makes the next step
          obvious — demo, waitlist, or purchase.
        </p>
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          What&apos;s included
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-neutral-600">
          <li>Brand-led UI and conversion-focused structure</li>
          <li>Next.js / modern stack with strong Core Web Vitals</li>
          <li>CMS or content workflow when you need to ship updates yourself</li>
          <li>Analytics, SEO foundations, and launch support</li>
        </ul>
        <p>
          Typical engagements: marketing sites, product launches, redesigns, and
          landing systems for paid acquisition.
        </p>
      </ContentPage>
    </PageShell>
  );
}
