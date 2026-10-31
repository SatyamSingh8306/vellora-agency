import { pageMetadata } from "../../lib/seo";
import PageShell from "../../components/PageShell";
import ContentPage from "../../components/ContentPage";
import Link from "next/link";

export const metadata = pageMetadata("/services/apps");

export default function AppsPage() {
  return (
    <PageShell path="/services/apps">
      <ContentPage
        eyebrow="Services · Apps"
        title="Web and mobile app development."
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
        <h2 className="text-xl font-semibold text-neutral-950">Build an MVP around one complete user journey</h2>
        <p>A useful first release lets a real person complete an important task. That could be a customer requesting a service, an operator managing a booking, or a user creating an account and reaching a first useful result. We work backward from that journey to identify the screens, data, permissions, and integrations that are essential. Features that do not support it can be discussed as later work.</p>
        <p>Scoping an MVP is more than shortening a feature list. It means deciding what happens when information is missing, an integration fails, or someone needs help. Those details affect whether people can use the product outside a demonstration. We document the boundaries of the first release and use review points to keep the build connected to the original customer problem.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Choose between a web app and a mobile app</h2>
        <p>A browser-based product can make sense for customer portals, booking workflows, dashboards, and tools people access from different devices. A mobile app may be appropriate when the product depends on a frequent mobile workflow or device capabilities. The right choice depends on your users, distribution plans, required features, and the ongoing work your team can support after launch.</p>
        <p>We discuss those tradeoffs before committing to a platform. React and Next.js support our web development work; React Native is an option for mobile builds. A marketing website and an app also have different jobs. If your immediate need is to explain an offering and collect interest, our <Link href="/services/websites" className="font-medium text-[#3054ff] underline underline-offset-4">website design and development service</Link> may be a more practical starting point.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Plan the accounts, data, and integrations</h2>
        <p>App development often involves more than visible screens. A scope may include sign-in, user roles, a database, third-party APIs, notifications, and administration tools. We identify which systems need to connect, who controls the relevant accounts, and what access the build requires. Integration dependencies are important because a change in an external service can affect the product even when your own code has not changed.</p>
        <p>We also discuss what the team needs for release and maintenance: environments, source code access, documentation, and responsibility for updates. Testing follows the agreed user journeys and the risks in the product. Where a workflow involves sensitive information or payments, those requirements need to be made explicit in discovery rather than added as an assumption near launch.</p>
        <p>If AI is part of the product, our <Link href="/services/ai" className="font-medium text-[#3054ff] underline underline-offset-4">AI development and integration service</Link> can be scoped alongside the application, including the data it uses, the task it supports, and how users review its output.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Scope, budget, and timing</h2>
        <p>We define the first release around the essential user journey, then agree on features, integrations, milestones, and cost in your proposal. Share your target launch date so we can discuss a realistic plan.</p>
        <h2 className="text-xl font-semibold text-neutral-950">What we need from you</h2>
        <p>Who will use the app, the problem it solves, and the features needed for the first release. Existing designs, API details, and examples are helpful, but you can start with an idea.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Handoff and ongoing costs</h2>
        <p>We document source code handoff, account access, revisions, and support in your scope. Hosting, app store accounts, paid APIs, and ongoing maintenance need their own budget unless included in the proposal.</p>
        <section aria-labelledby="app-questions">
          <h2 id="app-questions" className="mb-4 text-xl font-semibold text-neutral-950">App development questions</h2>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            <details className="py-4"><summary className="cursor-pointer font-semibold">Can you help when we only have an idea?</summary><p className="mt-3">Yes. Start with who the product is for, the problem they face, and what they should be able to do. Sketches, competing products, and conversations with potential users are helpful, but not required to inquire. We can discuss the smallest useful release and identify decisions that need more evidence before development.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">Can you build a dashboard or customer portal?</summary><p className="mt-3">These are examples of web app projects we can discuss. Share the data people need to see, the actions they should take, and the systems the portal must connect to. User permissions, administration workflows, and reporting requirements help define whether the project is a focused tool or a broader product build.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">What happens when the scope changes?</summary><p className="mt-3">New information can change a product during development. The proposal should explain review points and how additional work is agreed. We discuss the effect on deliverables and timing before expanding the build. Keeping a clear first-release boundary helps your team make a deliberate decision about what to include now and what to defer.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">What do we receive at handoff?</summary><p className="mt-3">Handoff details belong in the agreed scope: source code, relevant account access, setup instructions, and documentation for the delivered features. Ongoing support and third-party costs should also be clear. See our <Link href="/process" className="text-[#3054ff] underline underline-offset-4">project development process</Link> for how we move from discovery through reviews to release.</p></details>
          </div>
        </section>
      </ContentPage>
    </PageShell>
  );
}
