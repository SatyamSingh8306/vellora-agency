import Link from "next/link";
import BookMeeting from "./BookMeeting";
import { ArrowRight } from "lucide-react";

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
    <div className="mx-auto max-w-3xl px-6 pb-20 lg:px-10">
      <p className="font-instrument-sans mb-3 text-xs font-semibold tracking-[0.2em] text-[#3054ff] uppercase">
        {eyebrow}
      </p>
      <h1 className="font-instrument-serif text-4xl leading-[1.08] text-neutral-950 sm:text-5xl">
        {title}
      </h1>
      <p className="font-instrument-sans mt-5 text-lg leading-relaxed text-neutral-500">
        {description}
      </p>
      <div className="font-instrument-sans mt-12 space-y-8 text-base leading-relaxed text-neutral-700">
        {children}
      </div>
      <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-neutral-200 pt-10">
        <BookMeeting className="font-instrument-sans group inline-flex cursor-pointer items-center rounded-full bg-neutral-950 py-2 pr-2 pl-6 text-sm font-medium text-white transition-all hover:bg-neutral-800">
          Book a Meeting
          <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#3054ff] transition-colors group-hover:bg-[#2040e0]">
            <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
        </BookMeeting>
        <Link
          href="/"
          className="font-instrument-sans text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-950"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
