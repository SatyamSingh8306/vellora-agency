import Link from "next/link";
import PageShell from "../components/PageShell";
import EcotoneFeature from "../components/EcotoneFeature";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/stories");

export default function StoriesPage() {
  return (
    <PageShell path="/stories">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-5 lg:px-10">
        <h1 className="font-instrument-serif max-w-2xl text-5xl leading-[1.08] sm:text-6xl">Good work should help the business.</h1>
        <p className="mt-4 mb-8 max-w-2xl text-lg leading-relaxed text-neutral-600">A closer look at the work, the customer journey, and what happened after launch.</p>
        <EcotoneFeature />
        <div className="border-t border-neutral-200 pt-8"><h2 className="font-instrument-serif text-3xl">Have a similar goal?</h2><p className="mt-3 text-neutral-600">Tell us about your business and what you want your website to achieve.</p><Link href="/contact" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-[#3054ff] px-6 py-3 font-medium text-white hover:bg-[#2040e0]">Start a project</Link></div>
      </div>
    </PageShell>
  );
}
