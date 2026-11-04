import PageShell from "../components/PageShell";
import EcotoneFeature from "../components/EcotoneFeature";
import WorkProjects from "../components/WorkProjects";
import EvilLink from "../components/EvilLink";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/work");

export default function WorkPage() {
  return (
    <PageShell path="/work">
      <header className="bg-neutral-950 px-6 py-16 text-white sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-[#8fa2ff]">Selected work</p>
          <div className="mt-4 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-instrument-serif max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">Interfaces built for real use.</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">Product sites and digital experiences designed, built, and shipped for ambitious teams.</p>
            </div>
            <EvilLink href="/contact" className="shrink-0">Start a project</EvilLink>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 pt-14 lg:px-10"><EcotoneFeature /></div>
      <WorkProjects />

      <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2rem] border border-[#3054ff]/15 bg-[#dce4ff] px-6 py-10 text-center sm:px-8 sm:py-12">
          <h2 className="font-instrument-serif text-4xl text-neutral-950">Have a product in mind?</h2>
          <p className="mx-auto mt-4 max-w-md text-neutral-600">Share the goal, the audience, and what needs to happen next.</p>
          <EvilLink href="/contact" className="mt-7">Start a project</EvilLink>
        </div>
      </div>
    </PageShell>
  );
}
