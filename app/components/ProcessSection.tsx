"use client";

import { motion } from "motion/react";
import { Code2, PenTool, Rocket, Search } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Diagnose",
    desc: "Goals, audience, and constraints in one focused kickoff — no endless discovery.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design",
    desc: "Interfaces and structure that feel premium and convert under real pressure.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build",
    desc: "Production code: fast sites, solid apps, SEO foundations from day one.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Grow",
    desc: "Ship, measure, iterate. Retainers available when you want ongoing velocity.",
  },
] as const;

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#f6f7f9] px-6 py-16 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <h2 className="font-instrument-serif text-[2.5rem] leading-[1.08] text-neutral-950 sm:text-5xl">
            Brief to launch. No agency drag.
          </h2>
          <p className="font-instrument-sans mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-600">
            Four clear steps so founders always know what happens next.
          </p>
        </div>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div className="absolute top-10 right-[12%] left-[12%] hidden h-px origin-left bg-[#3054ff]/30 lg:block" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 1.1 }} />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-[1.75rem] border border-neutral-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <motion.span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3054ff] text-white shadow-[0_8px_20px_rgba(48,84,255,0.25)]" whileInView={{ scale: [0.6, 1.12, 1] }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.12 }}>
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </motion.span>
              <span className="mt-5 block text-xs font-semibold text-[#3054ff]">{step.num}</span>
              <h3 className="font-instrument-sans mt-3 text-lg font-semibold text-neutral-950">
                {step.title}
              </h3>
              <p className="font-instrument-sans mt-2 text-sm leading-relaxed text-neutral-600">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
