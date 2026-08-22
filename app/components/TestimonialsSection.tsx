"use client";

import { motion } from "motion/react";
import Image from "next/image";

const QUOTES = [
  {
    quote:
      "Our old site got compliments; this one gets customers. Inbound leads doubled within six weeks of launch, the site loads in under a second, and we finally look like the company we're pitching to be.",
    name: "Maya Chen",
    role: "Co-founder, Northline",
    scope: "Website + SEO",
    result: "2x inbound leads",
    photo: "/testimonials/maya-chen.jpg",
  },
  {
    quote:
      "We needed an app MVP without burning runway. They scoped honestly, shipped in five weeks instead of the promised six, and handed over code our own devs picked up and maintained without a single rewrite.",
    name: "Jordan Blake",
    role: "CEO, Parcelly",
    scope: "App build",
    result: "MVP in 5 weeks",
    photo: "/testimonials/jordan-blake.jpg",
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
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="font-instrument-sans rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
                    {item.scope}
                  </span>
                  <span className="font-instrument-sans rounded-full bg-[#3054ff]/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-[#3054ff] uppercase">
                    {item.result}
                  </span>
                </div>
                <p className="font-instrument-serif text-xl leading-[1.4] text-neutral-800 sm:text-2xl">
                  “{item.quote}”
                </p>
              </div>
              <footer className="font-instrument-sans mt-10 flex items-center gap-3 border-t border-neutral-100 pt-6">
                <Image
                  src={item.photo}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border border-neutral-200 object-cover"
                />
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
