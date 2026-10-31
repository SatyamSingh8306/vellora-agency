import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import CalProvider from "./CalProvider";
import PageSeo from "./PageSeo";
import type { PagePath } from "../lib/seo";

export default function PageShell({
  children,
  path,
}: {
  children: React.ReactNode;
  path: PagePath;
}) {
  return (
    <main id="main-content" className="min-h-screen bg-white text-neutral-950">
      <CalProvider />
      <Navbar />
      <div className="pt-28 sm:pt-32"><PageSeo path={path} />{children}</div>
      <SiteFooter />
    </main>
  );
}
