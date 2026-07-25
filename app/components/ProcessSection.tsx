"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    num: "01",
    title: "Diagnose",
    desc: "Goals, audience, and constraints in one focused kickoff — no endless discovery.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Interfaces and structure that feel premium and convert under real pressure.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Production code: fast sites, solid apps, SEO foundations from day one.",
  },
  {
    num: "04",
    title: "Grow",
    desc: "Ship, measure, iterate. Retainers available when you want ongoing velocity.",
  },
] as const;

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#f6f7f9] px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <p className="font-instrument-sans mb-3 text-xs font-semibold tracking-[0.2em] text-[#3054ff] uppercase">
            Process
          </p>
          <h2 className="font-instrument-serif text-[2.5rem] leading-[1.08] text-neutral-950 sm:text-5xl">
            Brief to launch. No agency drag.
          </h2>
          <p className="font-instrument-sans mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-500">
            Four clear steps so founders always know what happens next.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white p-7 sm:p-8"
            >
              <span className="font-instrument-sans text-xs font-semibold tracking-widest text-[#3054ff]">
                {step.num}
              </span>
              <h3 className="font-instrument-sans mt-5 text-lg font-semibold text-neutral-950">
                {step.title}
              </h3>
              <p className="font-instrument-sans mt-2 text-sm leading-relaxed text-neutral-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
