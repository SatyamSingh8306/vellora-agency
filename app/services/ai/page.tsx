import Link from "next/link";
import PageShell from "../../components/PageShell";
import ContentPage from "../../components/ContentPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("/services/ai");

export default function AiServicesPage() {
  return (
    <PageShell path="/services/ai">
      <ContentPage
        eyebrow="Services · AI & automation"
        title="AI development and workflow automation."
        description="Connect AI to a useful business task: help people find information, build product features, and reduce repetitive work across your existing tools."
      >
        <p>We help startups and growing businesses explore, build, and integrate AI into websites, applications, and everyday workflows. A useful starting point is a task your team already understands: answering recurring questions, finding relevant information, preparing a draft, or moving information between systems. We scope the integration around that task and the people responsible for its output.</p>
        <h2 className="text-xl font-semibold text-neutral-950">What an AI engagement can include</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>AI assistants for customer questions or internal team workflows</li>
          <li>Knowledge search across approved business content</li>
          <li>AI features integrated into an existing website or application</li>
          <li>Workflow automation connecting business tools and APIs</li>
          <li>Document processing, summaries, and drafting workflows</li>
          <li>Evaluation, review steps, and handoff for the agreed use case</li>
        </ul>
        <h2 className="text-xl font-semibold text-neutral-950">Start with the business task and the source of truth</h2>
        <p>Before choosing a model or an interface, we discuss what the person using the system needs to achieve. What information do they start with? What result should they receive? Which parts require judgment or approval? These questions help define the boundaries of the integration and whether AI is useful for the task at all. Some steps may be better handled by a straightforward rule or an existing tool.</p>
        <p>The information available to the system matters just as much as the interface. For a knowledge assistant, that might mean an approved set of product documents or internal guidance. For a document workflow, it might mean a defined input format and a person who checks the result. We identify the content owners, access requirements, and update process before treating the feature as ready for everyday use.</p>
        <h2 className="text-xl font-semibold text-neutral-950">AI assistants and knowledge search</h2>
        <p>An assistant can help users navigate a body of information or move through a defined process. We discuss which questions it should handle, what sources it may use, and when it should direct someone to a person. The experience can live inside a website or a product, depending on where your customers or team already work.</p>
        <p>For knowledge-based features, the project can include preparing content, retrieving relevant information, and showing the user enough context to review an answer. Testing should include missing information, unclear questions, and examples that should be handed off. The scope needs to describe what a useful answer looks like and how the team will maintain the underlying content after launch.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Automation that fits your existing tools</h2>
        <p>Workflow automation connects a trigger, the required processing, and a clear outcome. For example, a team might want help organizing incoming requests, extracting fields from a document, or preparing a response for review. We map the steps, the accounts involved, and the points where information needs checking before an action is taken.</p>
        <p>When an integration can change records or send information elsewhere, permissions and approval steps belong in the project design. We discuss failure handling, duplicate actions, and how someone can inspect what happened. The result should have an owner in your team and a practical way to recover when an external service becomes unavailable or returns an unexpected result.</p>
        <h2 className="text-xl font-semibold text-neutral-950">AI features inside websites and applications</h2>
        <p>AI work can be part of a new product or an addition to an existing one. A web app might need an assistant, a document review step, or a search interface. A business website might need help guiding visitors to the right information. We discuss where the feature belongs in the customer journey and how users can understand its limits while completing their task.</p>
        <p>For a new product, our <Link href="/services/apps" className="font-medium text-[#3054ff] underline underline-offset-4">web and mobile app development service</Link> can cover the surrounding accounts, interface, and data flows. For a public-facing site, our <Link href="/services/websites" className="font-medium text-[#3054ff] underline underline-offset-4">website design and development service</Link> can provide the content structure and inquiry journey around the integration.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Scope, evaluation, and handoff</h2>
        <p>An AI proposal should define the use case, the data and tools involved, the review process, and what will be delivered. We discuss examples for evaluating the feature, responsibilities for content updates, and any ongoing provider or hosting costs. Source code, account access, documentation, and support are agreed as part of the engagement.</p>
        <p>Tell us about the task you want to improve, the tools your team uses, and the information the system would need. Please leave passwords and confidential customer data out of the initial inquiry. Our <Link href="/process" className="font-medium text-[#3054ff] underline underline-offset-4">project process</Link> explains how we move from that first conversation to a scoped build.</p>
        <section aria-labelledby="ai-questions">
          <h2 id="ai-questions" className="mb-4 text-xl font-semibold text-neutral-950">AI development questions</h2>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            <details className="py-4"><summary className="cursor-pointer font-semibold">Can you add AI to our existing website or app?</summary><p className="mt-3">That can be scoped after reviewing the use case and the existing system. Share what you want the feature to do and where it should appear. Available APIs, account access, and the way your product stores information will influence the integration approach.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">Do we need to train our own AI model?</summary><p className="mt-3">The use case should determine the approach. An integration with an existing model and approved business information may be enough for some tasks. We discuss the requirements before proposing custom model work, so the project is based on what the product needs.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">Can people review AI output before it is used?</summary><p className="mt-3">Yes. Drafting, approval, and handoff steps can be part of the workflow. Tell us which actions need a person’s decision and which information must be checked. Those requirements help define permissions, interface behavior, and the release criteria.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">What ongoing work does an AI integration need?</summary><p className="mt-3">Depending on the integration, ongoing work can include maintaining source content, reviewing output quality, updating APIs, and monitoring provider usage. We discuss ownership and support before launch so your team knows which responsibilities it will retain.</p></details>
          </div>
        </section>
      </ContentPage>
    </PageShell>
  );
}
