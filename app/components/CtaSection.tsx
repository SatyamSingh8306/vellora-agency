"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import BookMeeting from "./BookMeeting";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../lib/constants";

export default function CtaSection() {
  return (
    <section id="inquire" className="bg-white px-6 py-16 sm:py-20 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-neutral-200 bg-[#f6f7f9] px-6 py-8 text-center sm:px-8 sm:py-10"
      >
        <p className="font-instrument-sans mb-3 text-xs font-semibold tracking-[0.2em] text-[#3054ff] uppercase">
          Start a project
        </p>
        <h2 className="font-instrument-serif mx-auto max-w-2xl text-[2.25rem] leading-[1.1] text-neutral-950 sm:text-5xl">
          Tell us what you’re working on.
        </h2>
        <p className="font-instrument-sans mx-auto mt-3 max-w-md text-base leading-relaxed text-neutral-500">
          Share your idea, your current website, or the problem you want to
          solve. We’ll help you work out the next step. No call required.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link href="/contact" className="font-instrument-sans group inline-flex cursor-pointer items-center rounded-full bg-neutral-950 py-2 pr-2 pl-6 text-base font-medium text-white transition-all hover:bg-neutral-800">
            Start a project
            <span className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#3054ff] transition-colors group-hover:bg-[#2040e0]">
              <ArrowRight className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
          </Link>
          <BookMeeting className="inline-flex min-h-12 items-center text-sm font-medium text-neutral-700 underline underline-offset-4">Prefer a call? Book 15 minutes</BookMeeting>
        </div>

        <p className="font-instrument-sans mt-4 text-sm text-neutral-500">
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
