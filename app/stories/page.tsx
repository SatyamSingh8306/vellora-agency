import { pageMetadata } from "../lib/seo";
import PageShell from "../components/PageShell";
import ContentPage from "../components/ContentPage";

export const metadata = pageMetadata({
  title: "Customer Stories",
  description:
    "What founders say about working with Vellora Agency on websites, apps, and SEO.",
  path: "/stories",
});

const QUOTES = [
  {
    quote:
      "Vellora Agency felt like a product team we could plug into overnight. Site launched fast, SEO started compounding, and we finally looked like the company we were becoming.",
    name: "Maya Chen",
    role: "Founder, Northline",
  },
  {
    quote:
      "We needed an app MVP without burning runway. They scoped honestly, shipped cleanly, and left us with code we could actually maintain.",
    name: "Jordan Blake",
    role: "CEO, Parcelly",
  },
] as const;

export default function StoriesPage() {
  return (
    <PageShell>
      <ContentPage
        eyebrow="Stories"
        title="Founders who needed speed — and still got craft."
        description="A few notes from teams we've partnered with on websites, apps, and growth systems."
      >
        <div className="space-y-10">
          {QUOTES.map((item) => (
            <blockquote
              key={item.name}
              className="border-l-2 border-[#3054ff]/40 pl-5"
            >
              <p className="font-instrument-serif text-xl leading-relaxed text-neutral-800">
                “{item.quote}”
              </p>
              <footer className="mt-4 text-sm">
                <span className="font-semibold text-neutral-950">{item.name}</span>
                <span className="text-neutral-500"> · {item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </ContentPage>
    </PageShell>
  );
}
