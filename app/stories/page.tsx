import PageShell from "../components/PageShell";
import EcotoneFeature from "../components/EcotoneFeature";
import EvilLink from "../components/EvilLink";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/stories");

export default function StoriesPage() {
  return (
    <PageShell path="/stories">
      <header className="bg-neutral-950 px-6 py-16 text-white sm:py-20 lg:px-10"><div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-[#8fa2ff]">Client results</p>
        <h1 className="font-instrument-serif mt-4 max-w-3xl text-5xl leading-[1.02] sm:text-7xl">Good work should help the business.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">A closer look at the customer journey and what happened after launch.</p>
      </div></header>
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <EcotoneFeature />
        <div className="mt-16 border-t border-neutral-300 pt-10"><h2 className="font-instrument-serif text-4xl">Have a similar goal?</h2><p className="mt-3 text-neutral-600">Tell us what you want your website to achieve.</p><EvilLink href="/contact" className="mt-6">Start a project</EvilLink></div>
      </div>
    </PageShell>
  );
}
