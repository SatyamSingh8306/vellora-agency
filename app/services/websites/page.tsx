import { pageMetadata } from "../../lib/seo";
import PageShell from "../../components/PageShell";
import ContentPage from "../../components/ContentPage";
import Link from "next/link";

export const metadata = pageMetadata("/services/websites");

export default function WebsitesPage() {
  return (
    <PageShell path="/services/websites">
      <ContentPage
        eyebrow="Services · Websites"
        title="Website design and development."
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
        <h2 className="text-xl font-semibold text-neutral-950">A business website built around your customers</h2>
        <p>A website for a service business needs to explain what you do, show why someone should trust you, and make an inquiry straightforward. A startup marketing website might instead need to introduce an unfamiliar product and lead visitors toward a demo. We start with that decision, because the right page structure depends on the person using the site and the action that matters to your business.</p>
        <p>That work can include planning the navigation, writing clear page outlines, choosing what belongs on a service page, and deciding where proof should appear. Existing brand assets, customer questions, and examples of successful projects help make the content specific. We use those inputs to give each important page a job rather than filling the site with interchangeable sections.</p>
        <h2 className="text-xl font-semibold text-neutral-950">From landing pages to a website you can maintain</h2>
        <p>A focused landing page can support a single campaign or launch. A business website may need separate service pages, a portfolio, a contact journey, and a way to update content. We discuss which approach fits your situation and whether you need a content management system. The goal is a site your team can work with after launch, with editing responsibilities agreed in advance.</p>
        <p>Responsive layouts, readable text, keyboard access, descriptive links, and useful form feedback are part of the customer experience. We also consider image sizes and page structure as the design develops. These decisions help avoid a site that looks good in a presentation but becomes difficult to read, load, or use on a phone.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Website launch, search foundations, and measurement</h2>
        <p>Before launch, the agreed checks can cover key pages, contact submissions, navigation, mobile layouts, and account access. Search foundations include page titles, descriptions, crawlable links, canonical URLs, and a sitemap where appropriate. Analytics and inquiry tracking are discussed with you so the site can be evaluated against useful actions rather than appearance alone.</p>
        <p>A website launch does not guarantee traffic or leads. It gives your business a clearer destination for search, referrals, and campaigns. If organic discovery is a priority, our <Link href="/services/seo" className="font-medium text-[#3054ff] underline underline-offset-4">technical SEO and on-page optimization services</Link> can be scoped alongside the build. If customers need accounts, dashboards, or workflows, consider our <Link href="/services/apps" className="font-medium text-[#3054ff] underline underline-offset-4">web app development services</Link>.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Scope, budget, and timing</h2>
        <p>The number of pages, content needs, and integrations shape your proposal. We agree on deliverables, design reviews, and a launch schedule before work begins.</p>
        <h2 className="text-xl font-semibold text-neutral-950">What we need from you</h2>
        <p>A short description of your business, the action you want visitors to take, and any existing website, branding, or content. If you need help with copy or photography, mention it so it can be included in the proposal.</p>
        <h2 className="text-xl font-semibold text-neutral-950">Handoff and ongoing costs</h2>
        <p>Your proposal will set out site access, handoff, revisions, and launch support. Domain registration, hosting, paid tools, and ongoing maintenance are discussed separately unless explicitly included.</p>
        <div className="rounded-2xl bg-[#f6f7f9] p-6"><h2 className="text-xl font-semibold text-neutral-950">See a real business website</h2><p className="mt-3">We helped Ecotone Tours &amp; Travels build a website that now brings in clients.</p><Link href="/work/ecotone" className="mt-4 inline-flex min-h-11 items-center font-semibold text-[#3054ff] underline underline-offset-4">Read the Ecotone case study</Link></div>
        <section aria-labelledby="website-questions">
          <h2 id="website-questions" className="mb-4 text-xl font-semibold text-neutral-950">Website design questions</h2>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            <details className="py-4"><summary className="cursor-pointer font-semibold">Can you redesign our existing website?</summary><p className="mt-3">Yes. Share the current site and explain what is not working: unclear services, outdated design, difficult editing, slow pages, or a weak inquiry journey. A redesign can preserve useful content and existing URLs where appropriate. We discuss what needs to change and how redirects will be handled if pages move.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">Can our team update the website after launch?</summary><p className="mt-3">That depends on the content workflow included in the project. Tell us which pages your team needs to edit and how frequently they change. We can scope a CMS or a simpler editing workflow, then document account access, training, and the changes that will still need development support.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">Do we need to provide copy and images?</summary><p className="mt-3">Existing copy, branding, photography, and customer feedback are useful starting points. If those are missing, mention it in your inquiry. Content planning, copywriting, image sourcing, and photography have different responsibilities and licensing needs, so we make clear what is included before setting a launch schedule.</p></details>
            <details className="py-4"><summary className="cursor-pointer font-semibold">How do we start a website project?</summary><p className="mt-3">Send your current website or a short description of your business, your audience, and the action you want visitors to take. Add any target launch date or necessary integrations. You do not need a technical brief. Our <Link href="/process" className="text-[#3054ff] underline underline-offset-4">design and development process</Link> explains the review points between the first conversation and launch.</p></details>
          </div>
        </section>
      </ContentPage>
    </PageShell>
  );
}
