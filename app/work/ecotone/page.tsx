import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageShell from "../../components/PageShell";
import EvilLink from "../../components/EvilLink";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("/work/ecotone");

export default function EcotonePage() {
  return (
    <PageShell path="/work/ecotone">
      <article className="mx-auto max-w-6xl px-6 pb-24 pt-6 lg:px-10">
        <Link href="/work" className="text-sm font-medium text-neutral-600 underline underline-offset-4">Back to selected work</Link>
        <div className="mt-9 grid gap-10 rounded-[2rem] bg-neutral-950 p-7 text-white sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 lg:p-12">
          <div><p className="text-sm font-medium text-[#8fa2ff]">Ecotone Tours & Travels</p><h1 className="font-instrument-serif mt-4 text-5xl leading-[1.04] sm:text-6xl">A website that helps turn travel interest into client inquiries.</h1><p className="mt-6 text-lg leading-relaxed text-white/70">We helped a Nagaland travel business bring its offering online. Today, Ecotone receives clients through its website.</p></div>
          <div className="self-end"><dl className="space-y-5 text-sm"><div><dt className="text-white/50">Industry</dt><dd className="mt-1 font-medium">Travel & tourism</dd></div><div><dt className="text-white/50">Our involvement</dt><dd className="mt-1 font-medium">Website development support</dd></div><div><dt className="text-white/50">Business</dt><dd className="mt-1 font-medium">Locally guided travel in Nagaland and Northeast India</dd></div></dl><a href="https://www.ecotonetoursandtravels.com/" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950">Visit Ecotone’s website <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a></div>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <aside className="h-fit rounded-[2rem] bg-[#dce4ff] p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-[#3054ff]">The outcome</h2>
            <p className="font-instrument-serif mt-3 text-2xl leading-tight">An active channel for new clients.</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">Ecotone is receiving clients through the website, with improved visibility in relevant searches.</p>
            <div className="mt-4 border-t border-[#3054ff]/15 pt-4">
              <p className="text-sm font-semibold text-neutral-950">Kevisi</p>
              <p className="mt-1 text-xs text-neutral-600">Founder, Ecotone Tours &amp; Travels</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">Shared positive feedback on the website.</p>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-neutral-600">Feedback summary and results shared by Vellora.</p>
          </aside>
          <div className="space-y-10 leading-relaxed text-neutral-600">
            <section><h2 className="font-instrument-serif mb-4 text-3xl text-neutral-950">The business need</h2><p>Ecotone offers locally guided trips across Nagaland and Northeast India. A useful website needs to help prospective travellers understand the experiences available and take the next step toward planning a trip.</p></section>
            <section><h2 className="font-instrument-serif mb-4 text-3xl text-neutral-950">What visitors can do</h2><p>On Ecotone’s live website, visitors can explore destinations, browse experiences and itineraries, read travel guides, and send an inquiry with their dates and interests. Photography and practical trip information help them decide what to ask about.</p><ul className="mt-5 list-disc space-y-3 pl-5"><li>Discover the business’s destinations and travel experiences.</li><li>Find useful planning information through dedicated guides and itineraries.</li><li>Share a trip brief through the enquiry form or contact the team directly.</li></ul></section>
            <section><h2 className="font-instrument-serif mb-4 text-3xl text-neutral-950">Our contribution</h2><p>Vellora helped Ecotone build its website. The engagement is an example of our website work for a service business: giving potential customers a place to learn about the offering and get in touch.</p></section>
            <section><h2 className="font-instrument-serif mb-4 text-3xl text-neutral-950">Why it matters</h2><p>A business website earns its place when it supports a real customer journey. For Ecotone, that journey connects interest in a destination with a conversation about a trip. The client inquiries reported after launch are the most meaningful part of this story.</p></section>
          </div>
        </div>
        <div className="mt-16 rounded-[2rem] bg-[#dce4ff] p-7 sm:p-10"><h2 className="font-instrument-serif text-4xl">Want your website to support your business?</h2><p className="mt-3 text-neutral-600">Tell us what you offer and what visitors should do next.</p><EvilLink href="/contact" className="mt-6">Start a project</EvilLink></div>
      </article>
    </PageShell>
  );
}
