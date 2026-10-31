import { pageMetadata } from "../lib/seo";
import Link from "next/link";
import PageShell from "../components/PageShell";
import ContentPage from "../components/ContentPage";

export const metadata = pageMetadata("/services");

const LINKS = [
  {
    href: "/services/websites",
    title: "Websites",
    desc: "Marketing sites and product pages built to convert.",
  },
  {
    href: "/services/apps",
    title: "Apps",
    desc: "iOS, Android, and web apps scoped for early-stage teams.",
  },
  {
    href: "/services/ai",
    title: "AI & automation",
    desc: "AI assistants, integrations, and automation for business workflows.",
  },
  {
    href: "/services/seo",
    title: "SEO",
    desc: "Technical SEO and content systems that compound.",
  },
] as const;

export default function ServicesPage() {
  return (
    <PageShell path="/services">
      <ContentPage
        eyebrow="Services"
        title="Websites, apps, AI, and SEO."
        description="Digital services for startups and growing businesses. Choose a service, or tell us what you’re trying to achieve."
      >
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex flex-col gap-1 py-6 transition-colors hover:text-[#3054ff] sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <span className="text-xl font-semibold text-neutral-950 group-hover:text-[#3054ff]">
                  {item.title}
                </span>
                <span className="text-sm text-neutral-500 sm:text-right">
                  {item.desc}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <section id="support" className="scroll-mt-32"><h2 className="text-xl font-semibold text-neutral-950">Support after launch</h2><p className="mt-3">Need help with maintenance, content changes, or new integrations? Ongoing support is scoped around your website or app. We agree on responsibilities, availability, and pricing before starting.</p></section>
        <section><h2 className="text-xl font-semibold text-neutral-950">Clear scope before you commit</h2><p className="mt-3">Each proposal is tailored to your project and sets out the deliverables, schedule, review points, handoff, and any ongoing costs.</p></section>
      </ContentPage>
    </PageShell>
  );
}
