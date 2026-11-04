"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ImageLightbox from "./ImageLightbox";
import { WORK_PROJECTS, projectShots } from "../lib/works";

export default function WorkProjects() {
  const [lightbox, setLightbox] = useState<{
    projectSlug: string;
    index: number;
  } | null>(null);

  const activeProject = WORK_PROJECTS.find(
    (p) => p.slug === lightbox?.projectSlug,
  );
  const activeShots = activeProject ? projectShots(activeProject) : [];

  return (
    <>
      <div className="mx-auto max-w-6xl space-y-24 px-6 pb-24 pt-14 sm:space-y-32 sm:pt-20 lg:px-10">
        {WORK_PROJECTS.map((project, index) => {
          const shots = projectShots(project);
          return (
            <article
              key={project.slug}
              id={project.slug}
              className="scroll-mt-32"
            >
              <div className="mb-7 grid gap-5 border-t border-neutral-300 pt-7 sm:mb-9 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
                <div>
                  <p className="text-sm font-medium text-[#3054ff]">
                    {String(index + 1).padStart(2, "0")} · {project.category}
                  </p>
                  <h2 className="font-instrument-serif mt-3 text-4xl leading-none text-neutral-950 sm:text-5xl">
                    {project.name}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 lg:col-start-2">
                    {project.summary}
                  </p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-neutral-950 transition-colors hover:text-[#3054ff] lg:col-start-2"
                >
                  Visit live site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <button
                type="button"
                onClick={() =>
                  setLightbox({ projectSlug: project.slug, index: 0 })
                }
                className="group block w-full cursor-zoom-in overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 p-1.5 text-left shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src={project.hero}
                  alt={`${project.name} hero screenshot`}
                  width={1600}
                  height={1000}
                  className="h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  sizes="(max-width: 1150px) 100vw, 1150px"
                  priority={index === 0}
                />
              </button>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="font-instrument-sans rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {project.gallery.length > 0 ? (
                <div
                  className={`mt-6 grid gap-4 ${
                    project.gallery.length === 1
                      ? "sm:grid-cols-1"
                      : project.gallery.length === 2
                        ? "sm:grid-cols-2"
                        : "sm:grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {project.gallery.map((shot, galleryIndex) => (
                    <button
                      key={shot.src}
                      type="button"
                      onClick={() =>
                        setLightbox({
                          projectSlug: project.slug,
                          index: galleryIndex + 1,
                        })
                      }
                      className="group cursor-zoom-in overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 text-left"
                    >
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={900}
                        height={600}
                        className="h-auto w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      {shot.label ? (
                        <span className="font-instrument-sans block border-t border-neutral-100 px-3 py-2 text-xs font-medium text-neutral-500">
                          {shot.label}
                        </span>
                      ) : null}
                    </button>
                  ))}
                </div>
              ) : null}

              <p className="font-instrument-sans mt-3 text-xs text-neutral-400">
                Click any image to enlarge · {shots.length} shots
              </p>
            </article>
          );
        })}
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
    </>
  );
}
