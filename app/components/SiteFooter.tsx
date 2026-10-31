"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import BookMeeting from "./BookMeeting";
import VelloraLogo from "./VelloraLogo";
import FooterSubscribe from "./FooterSubscribe";
import { SITE } from "../lib/seo";
import "./SiteFooter.css";

const FOOTER_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4";

function fitWatermark() {
  const svg = document.getElementById("watermarkSvg");
  const text = document.getElementById("watermarkText");
  if (!svg || !(text instanceof SVGGraphicsElement)) return;
  try {
    const bbox = text.getBBox();
    let vx = bbox.x;
    let vw = bbox.width;
    const ctx = document.createElement("canvas").getContext("2d");
    if (ctx) {
      const style = getComputedStyle(text);
      ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      ctx.textAlign = "center";
      if ("letterSpacing" in ctx) {
        ctx.letterSpacing = style.letterSpacing;
      }
      const m = ctx.measureText(text.textContent ?? "");
      if (Number.isFinite(m.actualBoundingBoxLeft) && Number.isFinite(m.actualBoundingBoxRight)) {
        const half = Math.max(m.actualBoundingBoxLeft, m.actualBoundingBoxRight);
        vx = 500 - half;
        vw = half * 2;
      }
    }
    svg.setAttribute("viewBox", `${vx} ${bbox.y} ${vw} ${bbox.height}`);
  } catch {
    /* ignore */
  }
}

export default function SiteFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const video = videoRef.current;
      if (!video) return;
      if (preference.matches) video.pause();
      else void video.play().catch(() => {});
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const run = () => fitWatermark();
    if (document.fonts?.ready) {
      document.fonts.ready.then(run);
    } else {
      window.addEventListener("load", run);
    }
    window.addEventListener("resize", run);
    run();
    return () => {
      window.removeEventListener("load", run);
      window.removeEventListener("resize", run);
    };
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-wrapper">
        <div className="footer-left">
          <video
            ref={videoRef}
            className="footer-left-video"
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src={FOOTER_VIDEO} type="video/mp4" />
          </video>

          <div className="footer-logo">
            <VelloraLogo tone="light" />
          </div>

          <div className="footer-tagline-container">
            <p className="footer-tagline">
              Websites, apps, and AI,
              <br />
              <span>built for your business.</span>
            </p>
          </div>

          <div className="footer-social-row">
            <span className="footer-social-label">Stay in touch!</span>
            <div className="footer-social-icons">
              {/* Discord - commented out for now */}
              {/* <a
                href="#"
                className="social-icon"
                aria-label="Discord"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a> */}
              <a href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Vellora Agency on LinkedIn">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-lucky-graphic">
            <div className="lucky-cube">
              <span className="lucky-cube-mark">V</span>
            </div>
            <div className="lucky-text-row">
              <svg
                className="lucky-arrow"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 20 C 6 14, 10 9, 18 5" />
                <path d="M18 5 L 12 5" />
                <path d="M18 5 L 18 11" />
              </svg>
              <span className="lucky-text">Feeling lucky?</span>
            </div>
          </div>

          <div className="footer-right-top">
            <div className="footer-nav-cols">
              <div className="footer-col">
                <div className="footer-col-title">Navigation</div>
                <Link href="/services">Services</Link>
                <Link href="/work">Work</Link>
                <Link href="/process">Process</Link>
                <Link href="/stories">Client results</Link>
                <Link href="/contact">Start a project</Link>
              </div>
              <div className="footer-col">
                <div className="footer-col-title">Company</div>
                <Link href="/services/websites">Website design</Link>
                <Link href="/services/apps">App development</Link>
                <Link href="/services/ai">AI &amp; automation</Link>
                <Link href="/services/seo">SEO services</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <BookMeeting>Book a meeting</BookMeeting>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-cta-mini">
              <h4>Occasional notes from Vellora.<strong>Website, product, AI, and SEO updates.</strong></h4>
              <FooterSubscribe />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-watermark" aria-hidden="true">
        <svg
          id="watermarkSvg"
          viewBox="62 95 876 175"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            id="watermarkText"
            x="500"
            y="240"
            textAnchor="middle"
            fontSize="320"
          >
            Vellora
          </text>
        </svg>
      </div>
    </footer>
  );
}
