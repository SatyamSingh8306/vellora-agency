import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ContentPage from "../components/ContentPage";
import { SITE } from "../lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for the ${SITE.name} website and related inquiries.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell>
      <ContentPage
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated July 2026. By using this website, you agree to these terms."
      >
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          The site
        </h2>
        <p>
          Content on this site is for general information about {SITE.name}{" "}
          services. We may update pages without notice. Project work is governed
          by a separate agreement once we engage.
        </p>
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          No warranties
        </h2>
        <p>
          The site is provided as-is. We do not guarantee uninterrupted access
          or that all information will always be complete or current.
        </p>
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          Contact
        </h2>
        <p>
          Questions:{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-semibold text-[#3054ff]"
          >
            {SITE.email}
          </a>
          .
        </p>
      </ContentPage>
    </PageShell>
  );
}
