import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import CalProvider from "./CalProvider";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="main-content" className="min-h-screen bg-white text-neutral-950">
      <CalProvider />
      <Navbar />
      <div className="pt-28 sm:pt-32">{children}</div>
      <SiteFooter />
    </main>
  );
}
