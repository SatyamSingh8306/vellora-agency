"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import ImageLightbox from "./ImageLightbox";
import EcotoneFeature from "./EcotoneFeature";
import { WORK_PROJECTS, projectShots, type WorkProject } from "../lib/works";

const CARD_LAYOUTS = [
  "top-[3%] left-[1%] w-[76vw] max-w-[420px] md:top-[7%] md:left-[5%] md:w-[38%]",
  "top-[27%] right-[1%] w-[68vw] max-w-[380px] md:top-[12%] md:right-[4%] md:w-[34%]",
  "bottom-[5%] left-[1%] w-[70vw] max-w-[390px] md:bottom-[7%] md:left-[17%] md:w-[33%]",
  "right-[1%] bottom-[1%] w-[72vw] max-w-[410px] md:right-[7%] md:bottom-[5%] md:w-[36%]",
  "top-[44%] left-[10%] w-[55vw] max-w-[310px] md:top-[38%] md:left-[41%] md:w-[24%]",
  "top-[58%] right-[3%] w-[58vw] max-w-[330px] md:top-[52%] md:right-[20%] md:w-[26%]",
] as const;

const CARD_ROTATIONS = [-4, 5, 3, -3, -6, 7] as const;

const SHOWCASE_CARDS = [
  { project: WORK_PROJECTS[0], src: WORK_PROJECTS[0].hero, label: WORK_PROJECTS[0].name, shotIndex: 0 },
  { project: WORK_PROJECTS[1], src: WORK_PROJECTS[1].hero, label: WORK_PROJECTS[1].name, shotIndex: 0 },
  { project: WORK_PROJECTS[2], src: WORK_PROJECTS[2].hero, label: WORK_PROJECTS[2].name, shotIndex: 0 },
  { project: WORK_PROJECTS[3], src: WORK_PROJECTS[3].hero, label: WORK_PROJECTS[3].name, shotIndex: 0 },
  { project: WORK_PROJECTS[0], src: WORK_PROJECTS[0].gallery[0].src, label: "Hall of Minds", shotIndex: 1 },
  { project: WORK_PROJECTS[3], src: WORK_PROJECTS[3].gallery[1].src, label: "Agent builder", shotIndex: 2 },
] as const;

function DraggableProjectCard({
  project,
  src,
  label,
  index,
  containerRef,
  onPreview,
}: {
  project: WorkProject;
  src: string;
  label: string;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onPreview: () => void;
}) {
  const [zIndex, setZIndex] = useState(index + 1);

  function bringToFront() {
    const cards = containerRef.current?.querySelectorAll("[data-drag-card]");
    const highest = Math.max(
      0,
      ...Array.from(cards ?? [], (card) =>
        Number.parseInt(window.getComputedStyle(card).zIndex, 10) || 0,
      ),
    );
    setZIndex(highest + 1);
  }

  return (
    <motion.article
      data-drag-card
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      onPointerDown={bringToFront}
      whileDrag={{ scale: 1.025, rotate: 0 }}
      style={{ zIndex, rotate: CARD_ROTATIONS[index] }}
      className={`absolute cursor-grab overflow-hidden rounded-2xl border border-white/15 bg-white p-1.5 pb-0 shadow-[0_22px_60px_rgba(0,0,0,0.4)] active:cursor-grabbing ${CARD_LAYOUTS[index]}`}
    >
      <button
        type="button"
        onClick={onPreview}
        className="block aspect-video w-full overflow-hidden rounded-xl bg-neutral-900 text-left"
        aria-label={`Preview ${project.name}`}
      >
        <Image
          src={src}
          alt={`${project.name} ${label} preview`}
          width={800}
          height={500}
          className="h-full w-full object-cover object-top"
          sizes="(max-width: 768px) 76vw, 38vw"
        />
      </button>
      <Link
        href={`/work#${project.slug}`}
        className="flex items-center justify-between gap-3 px-3 py-3 text-neutral-950"
      >
        <span>
          <span className="block text-xs font-medium text-neutral-600">{project.category}</span>
          <span className="font-instrument-serif block text-xl leading-tight">{label}</span>
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-[#3054ff]" aria-hidden="true" />
      </Link>
    </motion.article>
  );
}

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<{
    projectSlug: string;
    index: number;
  } | null>(null);

  const activeProject = WORK_PROJECTS.find(
    (p) => p.slug === lightbox?.projectSlug,
  );
  const activeShots = activeProject ? projectShots(activeProject) : [];

  return (
    <section id="work" className="overflow-hidden bg-neutral-950 py-16 text-white sm:py-24">
      <div>
        <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-5 px-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between lg:px-10">
          <div>
            <h2 className="font-instrument-serif max-w-2xl text-[2.5rem] leading-[1.08] text-white sm:text-5xl">
              Products we&apos;ve brought to life.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">Explore the work. Drag the cards on larger screens or swipe through them on mobile.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="font-instrument-sans inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-[#8096ff]"
            >
              View all work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="font-instrument-sans inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors hover:text-white">Start a project</Link>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative hidden min-h-[780px] w-full overflow-hidden bg-neutral-950 md:block lg:min-h-screen"
        >
          <p className="pointer-events-none absolute inset-0 grid place-items-center font-instrument-sans text-[25vw] font-black tracking-[-0.08em] text-neutral-800 select-none md:text-[200px]">
            WORK<span className="text-[#3054ff]">.</span>
          </p>
          <p className="absolute top-5 right-6 z-20 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
            Drag to explore
          </p>
          {SHOWCASE_CARDS.map(({ project, src, label, shotIndex }, i) => (
            <DraggableProjectCard
              key={`${project.slug}-${shotIndex}`}
              project={project}
              src={src}
              label={label}
              index={i}
              containerRef={containerRef}
              onPreview={() => setLightbox({ projectSlug: project.slug, index: shotIndex })}
            />
          ))}
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-5 md:hidden">
          {WORK_PROJECTS.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="w-[84vw] max-w-sm shrink-0 snap-center overflow-hidden rounded-2xl border border-white/15 bg-white p-1.5 pb-0 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setLightbox({ projectSlug: project.slug, index: 0 })}
                className="block aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900"
                aria-label={`Preview ${project.name}`}
              >
                <Image src={project.hero} alt={`${project.name} preview`} width={800} height={600} className="h-full w-full object-cover object-top" sizes="84vw" />
              </button>
              <Link href={`/work#${project.slug}`} className="flex min-h-20 items-center justify-between gap-3 px-3 py-3 text-neutral-950">
                <span>
                  <span className="block text-xs font-medium text-neutral-600">{project.category}</span>
                  <span className="font-instrument-serif block text-2xl leading-tight">{project.name}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#3054ff]" aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-6 lg:px-10">
          <EcotoneFeature />
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
