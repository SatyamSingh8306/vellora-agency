import Link from "next/link";
import EvilLink from "./EvilLink";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ContentPage({
  eyebrow,
  title,
  description,
  children,
}: ContentPageProps) {
  return (
    <article className="pb-24">
      <header className="border-b border-white/10 bg-neutral-950 px-6 py-16 text-white sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
          <p className="text-sm font-medium text-[#8fa2ff]">{eyebrow}</p>
          <div>
            <h1 className="font-instrument-serif max-w-4xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">{description}</p>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
      <div className="font-instrument-sans mt-14 max-w-3xl space-y-8 text-[17px] leading-[1.75] text-neutral-700 [&_a]:text-[#3054ff] [&_h2]:font-instrument-serif [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:leading-tight [&_h2]:text-neutral-950 [&_summary]:min-h-11 [&_summary]:py-2 [&_summary]:text-neutral-950 sm:mt-20">
        {children}
      </div>
      <div className="mt-16 flex max-w-3xl flex-wrap items-center gap-4 border-t border-neutral-300 pt-10">
        <EvilLink href="/contact">Start a project</EvilLink>
        <Link
          href="/"
          className="font-instrument-sans text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950"
        >
          ← Back home
        </Link>
      </div>
      </div>
    </article>
  );
}
