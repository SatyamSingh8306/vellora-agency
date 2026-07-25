"use client";

import { motion } from "motion/react";

const QUOTES = [
  {
    quote:
      "Vellora Agency felt like a product team we could plug into overnight. Site launched fast, SEO started compounding, and we finally looked like the company we were becoming.",
    name: "Maya Chen",
    role: "Founder, Northline",
  },
  {
    quote:
      "We needed an app MVP without burning runway. They scoped honestly, shipped cleanly, and left us with code we could actually maintain.",
    name: "Jordan Blake",
    role: "CEO, Parcelly",
  },
] as const;

export default function TestimonialsSection() {
  return (
    <section id="stories" className="bg-[#f6f7f9] px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl sm:mb-14">
          <p className="font-instrument-sans mb-3 text-xs font-semibold tracking-[0.2em] text-[#3054ff] uppercase">
            Stories
          </p>
          <h2 className="font-instrument-serif text-[2.5rem] leading-[1.08] text-neutral-950 sm:text-5xl">
            Founders who needed speed — and still got craft.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {QUOTES.map((item, i) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-8 sm:p-10"
            >
              <p className="font-instrument-serif text-xl leading-[1.4] text-neutral-800 sm:text-2xl">
                “{item.quote}”
              </p>
              <footer className="font-instrument-sans mt-10 flex items-center gap-3 border-t border-neutral-100 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3054ff] text-sm font-semibold text-white">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-neutral-950">
                    {item.name}
                  </span>
                  <span className="block text-sm text-neutral-500">
                    {item.role}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
