import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Vellora Agency works — diagnose, design, build, and grow. A clear process for startup website, app, and SEO projects.",
  alternates: { canonical: "/process" },
};

const STEPS = [
  {
    num: "01",
    title: "Diagnose",
    desc: "Goals, audience, and constraints in one focused kickoff — no endless discovery theater.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Brand-led interfaces and information architecture that feel premium and convert under pressure.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Production-grade engineering: fast sites, solid apps, clean SEO foundations from day one.",
  },
  {
    num: "04",
    title: "Grow",
    desc: "Ship, measure, iterate. Optional retainers keep velocity high after launch.",
  },
] as const;

export default function ProcessPage() {
  return (
    <PageShell>
      <ContentPage
        eyebrow="Process"
        title="Brief to launch. No agency drag."
        description="Four clear steps so founders always know what happens next — and what they’re paying for."
      >
        <ol className="space-y-8">
          {STEPS.map((step) => (
            <li key={step.num} className="flex gap-5">
              <span className="font-instrument-sans text-sm font-semibold tracking-widest text-[#3054ff]">
                {step.num}
              </span>
              <div>
                <h2 className="font-instrument-sans text-xl font-semibold text-neutral-950">
                  {step.title}
                </h2>
                <p className="mt-2 text-neutral-600">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </ContentPage>
    </PageShell>
  );
}
