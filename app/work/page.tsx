import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import BookMeeting from "../components/BookMeeting";
import WorkProjects from "../components/WorkProjects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected Vellora Agency work — Philorium, DynamisOS, AetherMind, Orkaive. Live product and marketing sites we've shipped.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-6 pb-6 lg:px-10">
        <p className="font-instrument-sans mb-3 text-xs font-semibold tracking-[0.2em] text-[#3054ff] uppercase">
          Work
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-instrument-serif text-4xl leading-[1.08] text-neutral-950 sm:text-5xl lg:text-6xl">
              Live builds we&apos;ve shipped.
            </h1>
            <p className="font-instrument-sans mt-5 text-lg leading-relaxed text-neutral-500">
              Product sites and experiences for ambitious teams — designed to
              look sharp, convert, and rank. Click any image to enlarge.
            </p>
          </div>
          <BookMeeting className="font-instrument-sans group inline-flex shrink-0 cursor-pointer items-center rounded-full bg-neutral-950 py-2 pr-2 pl-5 text-sm font-medium text-white transition-all hover:bg-neutral-800">
            Book a Meeting
            <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#3054ff] transition-colors group-hover:bg-[#2040e0]">
              <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
            </span>
          </BookMeeting>
        </div>
      </div>

      <WorkProjects />

      <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="rounded-3xl border border-neutral-200 bg-[#f6f7f9] px-8 py-12 text-center sm:px-12">
          <h2 className="font-instrument-serif text-3xl text-neutral-950 sm:text-4xl">
            Want a build that looks this sharp?
          </h2>
          <p className="font-instrument-sans mx-auto mt-4 max-w-md text-neutral-500">
            Book a call and we&apos;ll map scope, timeline, and budget for your
            site or product.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <BookMeeting className="font-instrument-sans group inline-flex cursor-pointer items-center rounded-full bg-neutral-950 py-2 pr-2 pl-5 text-sm font-medium text-white transition-all hover:bg-neutral-800">
              Book a Meeting
              <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#3054ff]">
                <ArrowRight className="h-4 w-4 text-white" />
              </span>
            </BookMeeting>
            <Link
              href="/services"
              className="font-instrument-sans text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950"
            >
              See services →
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
