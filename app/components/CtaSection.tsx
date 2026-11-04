"use client";

import { motion } from "motion/react";
import Image from "next/image";
import BookMeeting from "./BookMeeting";
import EvilLink from "./EvilLink";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../lib/constants";

export default function CtaSection() {
  return (
    <section id="inquire" className="bg-white px-6 py-12 sm:py-16 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#3054ff]/15 bg-[#edf1ff] lg:grid-cols-[1fr_0.85fr]"
      >
        <div className="p-6 sm:p-8 lg:p-9">
          <h2 className="font-instrument-serif max-w-2xl text-[2.1rem] leading-[1.08] text-neutral-950 sm:text-4xl">
            Tell us what you&apos;re building.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
            Bring the idea or the problem. We&apos;ll help define the next step.
          </p>

        <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <EvilLink href="/contact" className="min-h-12 px-6 text-base">Start a project</EvilLink>
          <BookMeeting className="inline-flex min-h-12 items-center text-sm font-medium text-neutral-700 underline underline-offset-4">Book 15 minutes</BookMeeting>
        </div>

        <p className="font-instrument-sans mt-4 text-sm text-neutral-600">
          Or email{" "}
          <a
            href={CONTACT_MAILTO}
            className="font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-[#3054ff] hover:decoration-[#3054ff]"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        </div>
        <div className="relative h-56 overflow-hidden bg-neutral-950 sm:h-64 lg:h-[320px]">
          <Image src="/cta-product-studio.png" alt="An idea evolving from wireframe geometry into a finished digital product" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 42vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3054ff]/35 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
