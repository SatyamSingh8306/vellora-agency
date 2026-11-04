import Link from "next/link";
import { ArrowUpRight, Compass, Map, MessageCircle } from "lucide-react";

export default function EcotoneFeature() {
  return (
    <article className="grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-950 shadow-[0_24px_70px_rgba(0,0,0,0.16)] lg:grid-cols-[1.05fr_0.95fr]">
      <div className="flex flex-col justify-between p-7 text-white sm:p-10 lg:p-12">
        <div>
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#6f8aff]" aria-hidden="true" />
          <p className="text-sm font-medium text-[#aab8ff]">Ecotone Tours &amp; Travels</p>
        </div>
        <h2 className="font-instrument-serif mt-6 max-w-xl text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">
          A website that became a client channel.
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65">
          Visitors can discover trips across Northeast India, plan their journey, and contact Ecotone directly.
        </p>
        </div>
        <Link href="/work/ecotone" className="mt-9 inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-white px-5 py-2.5 font-semibold text-neutral-950 hover:bg-[#dce4ff]">
          Read the case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="flex flex-col justify-between gap-8 border-t border-[#3054ff]/20 bg-[#dce4ff] p-7 sm:p-10 lg:border-t-0 lg:border-l lg:p-12">
        <div>
          <p className="text-sm font-medium text-[#3054ff]">Reported outcome</p>
          <p className="font-instrument-serif mt-4 text-3xl leading-[1.08] text-neutral-950 sm:text-4xl">
            Ecotone is receiving clients through the website.
          </p>
        </div>
        <div className="border-y border-[#3054ff]/20 py-6">
          <p className="mb-5 text-xs font-semibold text-neutral-600">Visitor journey</p>
          <ol className="grid grid-cols-3 gap-3">
            {[[Compass, "Discover"], [Map, "Plan"], [MessageCircle, "Inquire"]].map(([Icon, label]) => (
              <li key={label as string} className="min-w-0">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#3054ff]"><Icon className="h-4 w-4" aria-hidden="true" /></span>
                <span className="mt-2 block text-xs font-semibold text-neutral-800">{label as string}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#3054ff] shadow-sm">K</span>
          <div><p className="text-sm font-semibold text-neutral-950">Kevisi</p><p className="text-xs text-neutral-600">Founder, Ecotone Tours &amp; Travels</p></div>
        </div>
      </div>
    </article>
  );
}
