import PageShell from "../components/PageShell";
import InquiryForm from "../components/InquiryForm";
import BookMeeting from "../components/BookMeeting";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../lib/constants";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <PageShell path="/contact">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 pt-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:px-10">
        <div className="rounded-[2rem] bg-neutral-950 p-7 text-white sm:p-10 lg:sticky lg:top-28 lg:flex lg:h-[calc(100svh-8rem)] lg:flex-col lg:self-start">
          <p className="text-sm font-medium text-[#8fa2ff]">Start a project</p>
          <h1 className="font-instrument-serif mt-4 text-5xl leading-[1.04] sm:text-6xl">Good projects start with clarity.</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">Tell us what you&apos;re working on. A finished brief is optional.</p>
          <div className="mt-9 border-y border-white/15 py-6">
            <h2 className="font-semibold">What happens next?</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-white/65">
              <li>We review the goal and the help you need.</li><li>We reply with questions or a useful next step.</li><li>If it fits, we agree on scope, timing, and cost.</li>
            </ol>
          </div>
          <div className="mt-8 space-y-4 text-sm lg:mt-auto">
            <p>Email <a href={CONTACT_MAILTO} className="break-all font-medium text-[#8fa2ff] underline underline-offset-4">{CONTACT_EMAIL}</a></p>
            <BookMeeting className="min-h-11 text-left font-medium text-white/80 underline underline-offset-4">Book a 15-minute introduction</BookMeeting>
          </div>
        </div>
        <InquiryForm />
      </div>
    </PageShell>
  );
}
