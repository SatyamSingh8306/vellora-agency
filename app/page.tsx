import Navbar from "./components/Navbar";
import AiHero from "./components/AiHero";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import WorkSection from "./components/WorkSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import SiteFooter from "./components/SiteFooter";
import CalProvider from "./components/CalProvider";
import { pageMetadata } from "./lib/seo";
import PageSeo from "./components/PageSeo";

export const metadata = pageMetadata("/");

export default function Home() {
  return (
    <main id="main-content">
      <PageSeo path="/" />
      <CalProvider />
      <Navbar />
      <AiHero />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
