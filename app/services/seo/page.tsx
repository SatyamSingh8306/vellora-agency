import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import ContentPage from "../../components/ContentPage";

export const metadata: Metadata = {
  title: "SEO Optimization",
  description:
    "Technical SEO and content architecture for startups — get found without burning ad spend. Vellora Agency SEO services.",
  alternates: { canonical: "/services/seo" },
};

export default function SeoPage() {
  return (
    <PageShell>
      <ContentPage
        eyebrow="Services · SEO"
        title="SEO that compounds."
        description="Technical foundations, content structure, and measurement so organic growth keeps working after launch."
      >
        <p>
          We set startups up to rank for the searches that matter — not vanity
          keywords. That means crawlable architecture, fast pages, clear
          intent mapping, and content systems you can actually maintain.
        </p>
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          What&apos;s included
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-neutral-600">
          <li>Technical SEO audits and site health fixes</li>
          <li>On-page structure, schema, and metadata</li>
          <li>Content hubs and keyword mapping for your ICP</li>
          <li>Analytics, Search Console, and iteration loops</li>
        </ul>
        <p>
          Works best alongside a new site build — or as a focused engagement on
          a product that already has traction.
        </p>
      </ContentPage>
    </PageShell>
  );
}
