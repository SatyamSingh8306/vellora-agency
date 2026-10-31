import Link from "next/link";

const QUESTIONS = [
  { question: "Do I need a finished brief before getting in touch?", answer: "No. Tell us what your business does, what you want to improve, and any constraints you already know. Choose ‘Not sure yet’ on the inquiry form if you need help deciding where to start." },
  { question: "How do I get a proposal?", answer: "Share a short project brief through our inquiry form. We’ll discuss your goals and send a proposal tailored to the agreed scope before work begins." },
  { question: "How long will my project take?", answer: "Timing depends on the pages, features, content, and integrations you need. Share your desired launch date in your inquiry so we can discuss a realistic schedule before you commit." },
  { question: "Can you improve an existing website?", answer: "Yes. You can ask about a redesign, a specific customer journey, technical fixes, or SEO improvements. Share your current website and the problem you’re trying to solve." },
  { question: "What happens after I send an inquiry?", answer: "We review your project and reply by email with questions or a suggested next step. If it’s a fit, we discuss the deliverables, timing, and budget. You can book a call, but it isn’t required to make an inquiry." },
  { question: "What about handoff and support after launch?", answer: "We discuss handoff, access, documentation, and any ongoing maintenance in the project scope. Hosting, third-party subscriptions, content updates, and ongoing support should be explicitly included or priced separately in your proposal." },
];

export default function FaqSection() {
  return (
    <section className="bg-white px-6 py-16 sm:py-24 lg:px-10" aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div><h2 id="faq-heading" className="font-instrument-serif text-4xl leading-tight text-neutral-950 sm:text-5xl">Before we get started.</h2><p className="mt-5 max-w-sm leading-relaxed text-neutral-600">A few answers to help you decide whether we’re the right fit.</p><Link href="/contact" className="mt-6 inline-flex min-h-11 items-center font-semibold text-[#3054ff] underline underline-offset-4">Ask about your project</Link></div>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">{QUESTIONS.map(({ question, answer }) => <details key={question} className="group py-5"><summary className="cursor-pointer text-base font-semibold text-neutral-950 marker:text-[#3054ff]">{question}</summary><p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">{answer}</p></details>)}</div>
      </div>
    </section>
  );
}
