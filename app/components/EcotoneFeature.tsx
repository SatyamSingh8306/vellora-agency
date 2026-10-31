import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function EcotoneFeature() {
  return (
    <article className="mb-8 grid overflow-hidden rounded-2xl border border-neutral-200 bg-[#f6f7f9] lg:grid-cols-[1.1fr_0.9fr]">
      <div className="p-5 sm:p-6 lg:p-7">
        <p className="text-sm font-medium text-[#3054ff]">Client case study · Travel & tourism</p>
        <h2 className="font-instrument-serif mt-3 max-w-xl text-3xl leading-[1.1] text-neutral-950 sm:text-4xl">A website that brings in clients.</h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-600">We helped Ecotone Tours &amp; Travels build a website that connects people planning a trip with its local team.</p>
        <Link href="/work/ecotone" className="mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-8 hover:text-[#3054ff]">Read the Ecotone story <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
      <div className="flex flex-col justify-between gap-5 border-t border-neutral-200 bg-[#eaf0ff] p-5 sm:p-6 lg:border-t-0 lg:border-l lg:p-7">
        <div>
          <p className="text-xs font-medium text-neutral-600">Founder feedback · Summary</p>
          <p className="font-instrument-serif mt-3 text-xl leading-snug text-neutral-950 sm:text-2xl">Kevisi shared positive feedback on the website. Ecotone is now receiving clients through it.</p>
        </div>
        <div className="flex items-center gap-3 border-t border-[#3054ff]/15 pt-4">
          <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#3054ff]">K</span>
          <div><p className="text-sm font-semibold text-neutral-950">Kevisi</p><p className="text-xs text-neutral-600">Founder, Ecotone Tours &amp; Travels</p></div>
        </div>
      </div>
    </article>
  );
}
