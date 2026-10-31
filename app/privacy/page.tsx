import PageShell from "../components/PageShell";
import ContentPage from "../components/ContentPage";
import { SITE, pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/privacy");

export default function PrivacyPage() {
  return (
    <PageShell path="/privacy">
      <ContentPage
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated July 2026. This policy explains what information we collect when you use the ${SITE.name} website and how we use it.`}
      >
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          Information we collect
        </h2>
        <p>
          If you submit a project inquiry, book a meeting, subscribe, or email us, we receive the details
          you choose to share (such as name, email, company, project notes,
          budget, and preferred timing). Inquiry details are used to respond to
          your project and do not sign you up for marketing emails. Analytics
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
          Newsletter email addresses and project inquiry details are stored as
          responses in separate Google Forms.
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
