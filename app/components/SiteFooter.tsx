"use client";

import { useEffect } from "react";
import Link from "next/link";
import BookMeeting from "./BookMeeting";
import VelloraLogo from "./VelloraLogo";
import FooterSubscribe from "./FooterSubscribe";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../lib/constants";
import "./SiteFooter.css";

const FOOTER_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4";

function fitWatermark() {
  const svg = document.getElementById("watermarkSvg");
  const text = document.getElementById("watermarkText");
  if (!svg || !(text instanceof SVGGraphicsElement)) return;
  try {
    const bbox = text.getBBox();
    svg.setAttribute(
      "viewBox",
      `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`,
    );
  } catch {
    /* ignore */
  }
}

export default function SiteFooter() {
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
    <section className="footer-section">
      <div className="footer-wrapper">
        <div className="footer-left">
          <video
            className="footer-left-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={FOOTER_VIDEO} type="video/mp4" />
          </video>

          <div className="footer-logo">
            <VelloraLogo tone="light" />
          </div>

          <div className="footer-tagline-container">
            <p className="footer-tagline">
              Websites that win clients,
              <br />
              <span>built to convert.</span>
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
              <a href="https://x.com/Satyam8306" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/satyam8306/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://github.com/SatyamSingh8306" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
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
                <Link href="/stories">Stories</Link>
                <BookMeeting>Inquire</BookMeeting>
              </div>
              <div className="footer-col">
                <div className="footer-col-title">Company</div>
                <Link href="/services/websites">Websites</Link>
                <Link href="/services/apps">Apps</Link>
                <Link href="/services/seo">SEO</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <BookMeeting>Book a meeting</BookMeeting>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 Vellora Agency. All rights reserved.{" "}
              <a
                href={CONTACT_MAILTO}
                className="footer-copyright-link"
                aria-label={`Email us at ${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <div className="footer-cta-mini">
              <h4>
                Ready for a site that sells?
                <br />
                <strong>Let&apos;s build with Vellora Agency.</strong>
              </h4>
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
    </section>
  );
}
