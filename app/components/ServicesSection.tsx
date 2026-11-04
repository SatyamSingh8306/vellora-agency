"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import EvilLink from "./EvilLink";

const SERVICES = [
  { title: "Websites", href: "/services/websites", desc: "Fast, focused sites that explain the offer and move visitors to act." },
  { title: "Apps", href: "/services/apps", desc: "Useful web and mobile products shaped around the first essential journey." },
  { title: "SEO", href: "/services/seo", desc: "Technical foundations and content structure built for lasting discovery." },
  { title: "AI & automation", href: "/services/ai", desc: "Practical AI features and workflows connected to a real business task." },
] as const;

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#3054ff] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-10">
        <div className="grid gap-8 pb-12 sm:pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <h2 className="font-instrument-serif max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Choose the outcome. We&apos;ll shape the build.
          </h2>
          <div className="lg:pb-2">
            <p className="max-w-md text-lg leading-relaxed text-white/75">
              Start with what needs to change—not a list of features or a fixed technology.
            </p>
            <EvilLink href="/contact" className="mt-6 min-h-12 px-6">Tell us the goal</EvilLink>
          </div>
        </div>

        <ul className="border-y border-white/25">
          {SERVICES.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, x: index % 2 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.45 }}
              className="border-b border-white/25 last:border-b-0"
            >
              <Link href={service.href} className="group -mx-5 grid gap-4 px-5 py-7 transition-colors hover:bg-white hover:text-neutral-950 sm:grid-cols-[4rem_0.8fr_1.1fr_auto] sm:items-center sm:gap-6 sm:py-8">
                <span className="text-sm font-medium text-white/55 transition-colors group-hover:text-[#3054ff]">0{index + 1}</span>
                <h3 className="font-instrument-serif text-3xl leading-none sm:text-4xl">{service.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-white/70 transition-colors group-hover:text-neutral-600 sm:text-base">{service.desc}</p>
                <ArrowUpRight className="h-6 w-6 text-white/65 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#3054ff]" aria-hidden="true" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
