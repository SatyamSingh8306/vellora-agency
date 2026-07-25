"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookMeeting from "./BookMeeting";
import VelloraLogo from "./VelloraLogo";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Stories", href: "/stories" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const light = scrolled || !isHome;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-4 py-2.5 shadow-lg backdrop-blur-xl transition-colors duration-300 sm:px-5 ${
          light
            ? "border border-neutral-200/80 bg-white/90 text-neutral-950 shadow-black/5"
            : "border border-white/15 bg-black/55 text-white shadow-black/30"
        }`}
      >
        <Link href="/" aria-label="Vellora Agency home" className="shrink-0">
          <VelloraLogo
            tone={light ? "dark" : "light"}
            markSize="sm"
            nameClassName="text-sm sm:text-[17px]"
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-instrument-sans text-sm font-medium transition-colors ${
                light
                  ? "text-neutral-600 hover:text-neutral-950"
                  : "text-white/80 hover:text-white"
              } ${pathname === link.href || pathname.startsWith(link.href + "/") ? (light ? "text-neutral-950" : "text-white") : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <BookMeeting
            className={`font-instrument-sans hidden cursor-pointer text-sm font-medium transition-colors sm:block ${
              light
                ? "text-neutral-600 hover:text-neutral-950"
                : "text-white/80 hover:text-white"
            }`}
          >
            Book a Meeting
          </BookMeeting>
          <BookMeeting
            className={`font-instrument-sans cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5 ${
              light ? "bg-neutral-950 text-white" : "bg-white text-black"
            }`}
          >
            Get Started
          </BookMeeting>
        </div>
      </nav>
    </header>
  );
}
