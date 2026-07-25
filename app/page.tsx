import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import AiHero from "./components/AiHero";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import WorkSection from "./components/WorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaSection from "./components/CtaSection";
import SiteFooter from "./components/SiteFooter";
import CalProvider from "./components/CalProvider";
import { SITE } from "./lib/seo";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main-content">
      <CalProvider />
      <Navbar />
      <AiHero />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <TestimonialsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
