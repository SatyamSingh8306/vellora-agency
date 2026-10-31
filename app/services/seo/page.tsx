import { pageMetadata } from "../../lib/seo";
import PageShell from "../../components/PageShell";
import ContentPage from "../../components/ContentPage";
import Link from "next/link";

export const metadata = pageMetadata("/services/seo");

export default function SeoPage() {
  return (
    <PageShell path="/services/seo">
      <ContentPage
        eyebrow="Services · SEO"
        title="Technical SEO and on-page optimization."
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
          <li>Content planning around the searches your customers make</li>
          <li>Analytics, Search Console, and regular performance reviews</li>
        </ul>
        <p>
          Works best alongside a new site build — or as a focused engagement on
          a product that already has traction.
        </p>
        <h2 className="text-xl font-semibold text-neutral-950">Understand what search engines can discover</h2>
        <p>A technical SEO review starts with access and page structure. Important content needs a crawlable URL, working internal links, and indexing instructions that match your intentions. We look for issues such as broken pages, conflicting canonical URLs, accidental noindex tags, blocked resources, and sitemaps that list the wrong versions of pages. An audit should explain the affected pages and the evidence behind each recommendation.</p>
        <p>We also consider whether useful content is present in the initial HTML and whether JavaScript or third-party scripts make it difficult to reach. Mobile usability and page performance belong in the review because customers need to read and act on the site after finding it. Measurements need to distinguish a lab test from real user data; a good score in one test does not establish how every visitor experiences the website.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Match each page to a real customer question</h2>
        <p>On-page SEO is about helping a visitor understand whether a page answers their search. A service page should explain the service, who it suits, what an engagement can include, and what to do next. We review titles, headings, descriptions, image alternatives, and page relationships against that purpose. Adding the same keyword repeatedly is not a substitute for a useful explanation or evidence that the business can do the work.</p>
        <p>Content planning can identify missing questions, overlapping pages, or opportunities to make existing pages clearer. Internal links connect related topics so customers can move from an explanation to an appropriate service or example. Structured data describes the business and the purpose of a page using facts that match the visible content.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Turn an audit into an implementation plan</h2>
        <p>A useful audit separates issues that prevent discovery from improvements that can be scheduled later. The plan should name the affected URLs, the proposed fix, any dependency, and how to check the result. For example, fixing a broken canonical reference can be verified in the rendered page, while a change in organic inquiries needs a longer period of measurement and suitable tracking.</p>
        <p>If your website needs structural changes, the work may connect with our <Link href="/services/websites" className="font-medium text-[#3054ff] underline underline-offset-4">website development and redesign services</Link>. The <Link href="/work/ecotone" className="font-medium text-[#3054ff] underline underline-offset-4">Ecotone Tours &amp; Travels case study</Link> shows why we focus on a complete path from discovery to inquiry. Its reported business outcomes are context for the work, not a promise of the same result for another website.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Scope, budget, and expectations</h2>
        <p>We agree on the audit, fixes, content work, and reporting included in your engagement. Search results depend on your starting point, competition, and consistent work; ranking positions aren’t guaranteed.</p>
        <h2 className="text-xl font-semibold text-neutral-950">What we need from you</h2>
        <p>Your website, priority services or products, target customers and locations, and any existing performance reports. If account access is needed, we’ll explain which permissions are required.</p>
        <h2 className="text-xl font-semibold text-neutral-950">What progress looks like</h2>
        <p>We look at useful signals: relevant search visibility, clicks to important pages, and inquiries where tracking is available. The proposal sets out the reporting schedule and whether content writing or development work is included.</p>
        <section aria-labelledby="seo-questions">
          <h2 id="seo-questions" className="mb-4 text-xl font-semibold text-neutral-950">SEO service questions</h2>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            <details className="py-4"><summary className="cursor-pointer font-semibold">Can you guarantee a first-page ranking?</summary><p className="mt-3">No. Search visibility depends on the query, competition, site history, content, and search engine decisions. We can agree on specific work and explain how it will be checked. We do not promise a particular ranking, traffic increase, or timeline for business results simply because an optimization has been implemented.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">Does a new website still need SEO?</summary><p className="mt-3">A new website benefits from clear page structure, useful content, crawlable links, and correct indexing instructions from the start. A separate SEO engagement may make sense when search is a priority acquisition channel or there are existing issues to investigate. The right scope depends on what is already included in your website project.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">Will you need access to Search Console?</summary><p className="mt-3">Public pages can be reviewed without private account access. Search Console and analytics can provide additional information about discovery, queries, clicks, and customer actions. If that information is needed for the agreed work, we explain the required access and why. Account ownership and permissions should stay under your control.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">How will we know whether the work helped?</summary><p className="mt-3">First, we check whether the intended change is present and functioning. Then we review relevant search and business signals over time, where data is available. Reporting should distinguish implementation progress from outcomes, explain the limits of the evidence, and relate the next steps to your customers rather than a long list of vanity metrics.</p></details>
          </div>
        </section>
      </ContentPage>
    </PageShell>
  );
}
