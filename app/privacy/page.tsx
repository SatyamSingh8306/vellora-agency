import PageShell from "../components/PageShell";
import ContentPage from "../components/ContentPage";
import { SITE, pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name} — how we handle information on this site.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell>
      <ContentPage
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated July 2026. This policy explains what information we collect when you use the ${SITE.name} website and how we use it.`}
      >
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          Information we collect
        </h2>
        <p>
          If you book a meeting, subscribe, or email us, we receive the details
          you choose to share (such as name, email, and project notes). Analytics
          tools may collect anonymous usage data like pages viewed and approximate
          location.
        </p>
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          How we use it
        </h2>
        <p>
          We use contact details to respond to inquiries, send subscription
          updates you requested, and schedule calls. We use aggregate analytics
          to improve the site. We do not sell your personal information.
        </p>
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          Third parties
        </h2>
        <p>
          Scheduling may be handled via Cal.com. Email delivery may be handled
          via Resend. Hosting and analytics providers may process data as needed
          to operate the site. Review their policies for details.
        </p>
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          Contact
        </h2>
        <p>
          Questions about privacy:{" "}
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
