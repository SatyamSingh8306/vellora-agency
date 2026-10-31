import PageShell from "../components/PageShell";
import InquiryForm from "../components/InquiryForm";
import BookMeeting from "../components/BookMeeting";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../lib/constants";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <PageShell path="/contact">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium text-[#3054ff]">Start a project</p>
          <h1 className="font-instrument-serif mt-4 text-5xl leading-[1.08] sm:text-6xl">Good projects start with a conversation.</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600">Tell us what you’re working on. You don’t need a finished brief, a technical specification, or a meeting in your calendar.</p>
          <div className="mt-9 border-y border-neutral-200 py-6">
            <h2 className="font-semibold">What happens next?</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-neutral-600">
              <li>We review your goals and the help you need.</li>
              <li>We reply with questions or a suggested next step.</li>
              <li>If it’s a fit, we agree on scope, timing, and cost before work begins.</li>
            </ol>
          </div>
          <div className="mt-8 space-y-4 text-sm">
            <p>Prefer email? <a href={CONTACT_MAILTO} className="break-all font-medium text-[#3054ff] underline underline-offset-4">{CONTACT_EMAIL}</a></p>
            <BookMeeting className="min-h-11 text-left font-medium text-neutral-700 underline underline-offset-4">Or book a 15-minute introduction</BookMeeting>
          </div>
        </div>
        <InquiryForm />
      </div>
    </PageShell>
  );
}
