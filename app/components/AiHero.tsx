"use client";

import { useEffect, useRef } from "react";
import { preload } from "react-dom";
import Hls from "hls.js";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const VIDEO_SRC =
  "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";

const POSTER_SRC = "/hero-static-banner-fallback.webp";

export default function AiHero() {
  preload(POSTER_SRC, { as: "image", fetchPriority: "high" });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPreferenceChange = () => { if (reducedMotion.matches) video.pause(); };
    reducedMotion.addEventListener("change", onPreferenceChange);
    if (reducedMotion.matches) return () => reducedMotion.removeEventListener("change", onPreferenceChange);

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (!reducedMotion.matches) void video.play().catch(() => {});
      });
      return () => {
        hls.destroy();
        reducedMotion.removeEventListener("change", onPreferenceChange);
      };
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_SRC;
      const onLoaded = () => {
        if (!reducedMotion.matches) void video.play().catch(() => {});
      };
      video.addEventListener("loadedmetadata", onLoaded);
      return () => {
        video.removeEventListener("loadedmetadata", onLoaded);
        reducedMotion.removeEventListener("change", onPreferenceChange);
      };
    }
    return () => reducedMotion.removeEventListener("change", onPreferenceChange);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-x-clip overflow-y-hidden bg-[#000000] text-white"
      aria-label="Hero"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        muted
        loop
        playsInline
        poster={POSTER_SRC}
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <div className="pointer-events-none absolute top-[-20%] left-[10%] h-[420px] w-[420px] bg-blue-900/20 blur-[100px] mix-blend-screen sm:left-[20%] sm:h-[600px] sm:w-[600px] sm:blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] bottom-[-10%] h-[360px] w-[360px] bg-indigo-900/20 blur-[100px] mix-blend-screen sm:right-[20%] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      <div className="relative z-10 mx-auto mt-20 flex min-h-screen max-w-5xl flex-col items-center justify-center space-y-8 px-4 pb-20 text-center sm:space-y-12 sm:px-6">
        <motion.p
          className="font-instrument-serif px-2 text-2xl leading-[1.15] text-white sm:px-0 sm:text-5xl lg:text-[48px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Websites, apps, AI, and SEO
        </motion.p>

        <motion.h1
          className="font-instrument-sans max-w-4xl text-5xl leading-[1.02] font-semibold tracking-tighter text-white sm:text-7xl lg:text-[92px]"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Websites, apps, and AI built for growth.
        </motion.h1>

        <motion.p
          className="font-instrument-sans max-w-xl px-2 text-base leading-[1.65] text-white sm:px-0 sm:text-[20px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We help startups and growing businesses launch websites, build apps,
          integrate AI, and get found. Clear scope, thoughtful design, and a practical
          path from idea to launch.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-6 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/contact" className="font-instrument-sans group inline-flex cursor-pointer items-center rounded-full bg-white py-2 pr-2 pl-6 text-lg font-medium text-[#0a0400] transition-colors hover:bg-neutral-100">
            Start a project
            <span className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#3054ff] transition-colors group-hover:bg-[#2040e0]">
              <ArrowRight className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
          </Link>

          <Link
            href="/work"
            className="font-instrument-sans group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white/70 backdrop-blur-sm transition-colors hover:bg-white/5 hover:text-white"
          >
            See Our Work
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
