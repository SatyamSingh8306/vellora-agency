"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import BookMeeting from "./BookMeeting";

const SERVICES = [
  {
    index: "01",
    title: "Websites",
    href: "/services/websites",
    desc: "Marketing sites and product pages that load fast, look sharp, and turn visitors into customers.",
    price: "From $1,500",
  },
  {
    index: "02",
    title: "Apps",
    href: "/services/apps",
    desc: "iOS, Android, and web apps scoped for startups — clean UX, solid code, ready to launch.",
    price: "From $4,000",
  },
  {
    index: "03",
    title: "SEO",
    href: "/services/seo",
    desc: "Technical foundations and content systems that help you rank without pouring budget into ads.",
    price: "From $600/mo",
  },
  {
    index: "04",
    title: "Growth stack",
    href: "/services",
    desc: "Brand, integrations, and retainers so your digital presence keeps compounding after launch.",
    price: "Custom",
  },
] as const;

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="font-instrument-sans mb-3 text-xs font-semibold tracking-[0.2em] text-[#3054ff] uppercase">
            Services
          </p>
          <h2 className="font-instrument-serif text-[2.5rem] leading-[1.08] text-neutral-950 sm:text-5xl">
            Everything a startup needs to look — and perform — like a bigger brand.
          </h2>
          <p className="font-instrument-sans mt-5 max-w-md text-base leading-relaxed text-neutral-500">
            One partner for websites, apps, and SEO. Senior craft, clear scope,
            startup-friendly timelines.
          </p>
          <p className="font-instrument-sans mt-3 max-w-md text-sm leading-relaxed text-neutral-400">
            Most projects run $1,500–$10,000 — scoped and fixed before we
            start, no surprises.
          </p>
          <BookMeeting className="font-instrument-sans mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-neutral-950 transition-colors hover:text-[#3054ff]">
            Book a meeting
            <ArrowUpRight className="h-4 w-4" />
          </BookMeeting>
        </motion.div>

        <ul className="divide-y divide-neutral-200 border-t border-neutral-200">
          {SERVICES.map((service, i) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                href={service.href}
                className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 py-8 sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline sm:gap-x-8 sm:py-9"
              >
                <span className="font-instrument-sans text-sm font-medium text-neutral-300">
                  {service.index}
                </span>
                <div>
                  <h3 className="font-instrument-sans text-xl font-semibold tracking-tight text-neutral-950 transition-colors group-hover:text-[#3054ff] sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="font-instrument-sans mt-2 max-w-md text-[15px] leading-relaxed text-neutral-500">
                    {service.desc}
                  </p>
                  <span className="font-instrument-sans mt-3 inline-block text-[13px] font-semibold tracking-wide text-neutral-400">
                    {service.price}
                  </span>
                </div>
                <ArrowUpRight className="col-start-2 mt-1 h-5 w-5 text-neutral-300 transition-colors group-hover:text-[#3054ff] sm:col-start-auto sm:mt-0" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
