import { pageMetadata } from "../../lib/seo";
import PageShell from "../../components/PageShell";
import ContentPage from "../../components/ContentPage";

export const metadata = pageMetadata({
  title: "App Development",
  description:
    "Mobile and web app development for startups — MVPs, dashboards, and production-ready products by Vellora Agency.",
  path: "/services/apps",
});

export default function AppsPage() {
  return (
    <PageShell>
      <ContentPage
        eyebrow="Services · Apps"
        title="Apps that ship without burning runway."
        description="Scoped MVPs and product builds with clean UX, solid architecture, and code your team can keep owning."
      >
        <p>
          We help founders move from idea to usable product — web apps, mobile
          apps, and internal tools — without bloated timelines or throwaway
          prototypes.
        </p>
        <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
          What&apos;s included
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-neutral-600">
          <li>Product scoping and UX flows that protect runway</li>
          <li>React / Next.js / React Native builds</li>
          <li>Auth, dashboards, APIs, and integrations</li>
          <li>Handoff docs and maintainable architecture</li>
        </ul>
        <p>
          Ideal for: MVP launches, customer portals, operator dashboards, and
          first mobile releases.
        </p>
      </ContentPage>
    </PageShell>
  );
}
