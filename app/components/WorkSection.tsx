"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import BookMeeting from "./BookMeeting";
import ImageLightbox from "./ImageLightbox";
import { WORK_PROJECTS, projectShots } from "../lib/works";

export default function WorkSection() {
  const [lightbox, setLightbox] = useState<{
    projectSlug: string;
    index: number;
  } | null>(null);

  const activeProject = WORK_PROJECTS.find(
    (p) => p.slug === lightbox?.projectSlug,
  );
  const activeShots = activeProject ? projectShots(activeProject) : [];

  return (
    <section id="work" className="bg-white px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-instrument-sans mb-3 text-xs font-semibold tracking-[0.2em] text-[#3054ff] uppercase">
              Work
            </p>
            <h2 className="font-instrument-serif text-[2.5rem] leading-[1.08] text-neutral-950 sm:text-5xl">
              Live builds we&apos;ve shipped.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="font-instrument-sans inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 transition-colors hover:text-[#3054ff]"
            >
              View all work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <BookMeeting className="font-instrument-sans inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-neutral-500 transition-colors hover:text-[#3054ff]">
              Book a meeting
            </BookMeeting>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {WORK_PROJECTS.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              <button
                type="button"
                onClick={() =>
                  setLightbox({ projectSlug: project.slug, index: 0 })
                }
                className="group block w-full cursor-zoom-in overflow-hidden bg-neutral-100 text-left"
              >
                <Image
                  src={project.hero}
                  alt={`${project.name} preview`}
                  width={800}
                  height={500}
                  className="h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </button>
              <Link
                href={`/work#${project.slug}`}
                className="flex items-start justify-between gap-3 p-5"
              >
                <div>
                  <p className="font-instrument-sans text-xs tracking-wider text-neutral-400 uppercase">
                    {project.category}
                  </p>
                  <h3 className="font-instrument-sans mt-1 text-xl font-semibold text-neutral-950 transition-colors hover:text-[#3054ff]">
                    {project.name}
                  </h3>
                  <p className="font-instrument-serif mt-1 text-[#3054ff]">
                    {project.focus}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-neutral-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageLightbox
        shots={activeShots}
        index={lightbox?.index ?? 0}
        open={Boolean(lightbox)}
        onClose={() => setLightbox(null)}
        onIndexChange={(next) =>
          setLightbox((prev) => (prev ? { ...prev, index: next } : prev))
        }
      />
    </section>
  );
}
