"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
  const [homeScrolled, setHomeScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        setHomeScrolled(window.scrollY > 24),
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const scrolled = isHome ? homeScrolled : true;
  const light = scrolled;

  const linkColor = light
    ? "text-neutral-600 hover:text-neutral-950"
    : "text-white/80 hover:text-white";
  const linkActive = light ? "text-neutral-950" : "text-white";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-2 rounded-full px-3 py-2 shadow-lg backdrop-blur-xl transition-colors duration-300 sm:gap-4 sm:px-5 ${
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
              className={`font-instrument-sans text-sm font-medium transition-colors ${linkColor} ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? linkActive
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <BookMeeting
            className={`font-instrument-sans hidden cursor-pointer text-sm font-medium transition-colors sm:block ${linkColor}`}
          >
            Book a Meeting
          </BookMeeting>
          <BookMeeting
            className={`font-instrument-sans cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm ${
              light ? "bg-neutral-950 text-white" : "bg-white text-black"
            }`}
          >
            Get Started
          </BookMeeting>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
              light
                ? "border-neutral-200 bg-white text-neutral-950"
                : "border-white/20 bg-black/40 text-white"
            }`}
          >
            {menuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`pointer-events-auto fixed inset-x-3 top-[68px] z-40 origin-top rounded-3xl border transition-all duration-200 md:hidden ${
          menuOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        } ${
          light
            ? "border-neutral-200/80 bg-white/95 text-neutral-950 shadow-xl shadow-black/5 backdrop-blur-xl"
            : "border-white/15 bg-black/85 text-white shadow-xl shadow-black/40 backdrop-blur-xl"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col p-3">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-instrument-sans flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                  light
                    ? "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                } ${
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? light
                      ? "bg-neutral-100 text-neutral-950"
                      : "bg-white/10 text-white"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 px-1 pb-1">
            <BookMeeting
              className={`font-instrument-sans flex w-full cursor-pointer items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                light ? "bg-neutral-950 text-white" : "bg-white text-black"
              }`}
            >
              Book a Meeting
            </BookMeeting>
          </li>
        </ul>
      </div>
    </header>
  );
}
