import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/PageShell";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Vellora Agency services for startups — websites, apps, SEO, and growth systems built with senior craft.",
  alternates: { canonical: "/services" },
};

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
    href: "/services/seo",
    title: "SEO",
    desc: "Technical SEO and content systems that compound.",
  },
] as const;

export default function ServicesPage() {
  return (
    <PageShell>
      <ContentPage
        eyebrow="Services"
        title="What we build for startups."
        description="One partner for the stack that gets you found, trusted, and shipped — without enterprise bloat."
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
      </ContentPage>
    </PageShell>
  );
}
