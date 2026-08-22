"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import BookMeeting from "./BookMeeting";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../lib/constants";

export default function CtaSection() {
  return (
    <section id="inquire" className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-neutral-200 bg-[#f6f7f9] px-8 py-14 text-center sm:px-12 sm:py-16"
      >
        <p className="font-instrument-sans mb-3 text-xs font-semibold tracking-[0.2em] text-[#3054ff] uppercase">
          Book a meeting
        </p>
        <h2 className="font-instrument-serif mx-auto max-w-2xl text-[2.25rem] leading-[1.1] text-neutral-950 sm:text-5xl">
          Ready for a site, app, or SEO system that moves the needle?
        </h2>
        <p className="font-instrument-sans mx-auto mt-5 max-w-md text-base leading-relaxed text-neutral-500">
          Grab a free call. We&apos;ll map scope, timeline, and budget — clear
          and pressure-free.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <BookMeeting className="font-instrument-sans group inline-flex cursor-pointer items-center rounded-full bg-neutral-950 py-2 pr-2 pl-6 text-base font-medium text-white transition-all hover:bg-neutral-800">
            Book a Meeting
            <span className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#3054ff] transition-colors group-hover:bg-[#2040e0]">
              <ArrowRight className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
          </BookMeeting>
        </div>

        <p className="font-instrument-sans mt-6 text-sm text-neutral-400">
          Prefer email?{" "}
          <a
            href={CONTACT_MAILTO}
            className="font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-[#3054ff] hover:decoration-[#3054ff]"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </motion.div>
    </section>
  );
}
