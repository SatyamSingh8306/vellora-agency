"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import BookMeeting from "./BookMeeting";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../lib/constants";
import MinimalButton from "@/components/evil-buttons/minimal";

const inputClass = "mt-1.5 min-h-9 w-full rounded-lg border border-neutral-300 bg-[#f7f7f2] px-3.5 py-1.5 text-sm text-neutral-950 placeholder:text-neutral-500 focus:border-[#3054ff] focus:outline-2 focus:outline-offset-2 focus:outline-[#3054ff] disabled:opacity-60";
const services = ["Website", "App or MVP", "AI & automation", "SEO", "Ongoing support", "Not sure yet"];

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const pending = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error(result.error || "Your inquiry wasn’t sent. Please try again or email us directly.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Check your connection and try again, or email us directly.");
    } finally {
      pending.current = false;
      requestAnimationFrame(() => feedback.current?.focus());
    }
  }

  if (status === "success") {
    return (
      <div ref={feedback} tabIndex={-1} role="status" className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-10">
        <CheckCircle2 className="mb-6 h-10 w-10 text-[#3054ff]" aria-hidden="true" />
        <h2 className="font-instrument-serif text-4xl">Your inquiry has been received.</h2>
        <p className="mt-4 leading-relaxed text-neutral-600">Thanks for telling us about your project. We’ll review your brief and reply to the email you provided with questions or a suggested next step.</p>
        <p className="mt-6 text-sm text-neutral-600">Want to talk it through while you wait? Booking a call is optional.</p>
        <BookMeeting className="mt-4 inline-flex min-h-12 items-center gap-3 rounded-full bg-neutral-950 px-6 py-3 font-medium text-white">Book a 15-minute call <ArrowRight className="h-4 w-4" aria-hidden="true" /></BookMeeting>
        <Link href="/work/ecotone" className="mt-6 block text-sm font-semibold text-[#3054ff] underline underline-offset-4">Explore the Ecotone case study</Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]" aria-busy={status === "sending"}>
      <header className="border-b border-neutral-200 bg-[#f7f7f2] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3054ff]">Start a project</p>
        <h2 className="font-instrument-serif mt-2 text-4xl">Tell us what you need.</h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">Four essentials. The rest can wait.</p>
      </header>
      <fieldset disabled={status === "sending"} className="space-y-8 p-6 sm:p-8">
        <legend className="sr-only">Project inquiry details</legend>
        <section aria-labelledby="contact-fields" className="grid min-w-0 gap-5 sm:grid-cols-2">
          <h3 id="contact-fields" className="font-instrument-serif text-2xl sm:col-span-2"><span className="mr-2 text-[#3054ff]">01</span>Your details</h3>
          <label className="text-sm font-medium">Your name <span aria-hidden="true">*</span><input className={inputClass} name="name" autoComplete="name" required maxLength={100} /></label>
          <label className="text-sm font-medium">Email <span aria-hidden="true">*</span><input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={254} /></label>
          <label className="text-sm font-medium sm:col-span-2">Company or website <span className="font-normal text-neutral-500">(optional)</span><input className={inputClass} name="company" autoComplete="organization" maxLength={200} placeholder="Business name or website" /></label>
        </section>
        <section aria-labelledby="service-fields">
          <h3 id="service-fields" className="font-instrument-serif text-2xl"><span className="mr-2 text-[#3054ff]">02</span>Choose a service <span aria-hidden="true">*</span></h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {services.map((service) => (
              <label key={service} className="cursor-pointer">
                <input className="peer sr-only" type="radio" name="service" value={service} required />
                <span className="flex min-h-9 items-center justify-between rounded-xl border border-neutral-200 px-3.5 py-1.5 text-sm font-medium transition hover:border-neutral-400 peer-checked:border-[#3054ff] peer-checked:bg-[#eef1ff] peer-checked:text-[#1738d1] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#3054ff]">{service}<span aria-hidden="true" className="h-2 w-2 rounded-full border border-current" /></span>
              </label>
            ))}
          </div>
        </section>
        <section aria-labelledby="brief-field">
          <h3 id="brief-field" className="font-instrument-serif text-2xl"><span className="mr-2 text-[#3054ff]">03</span>Your brief <span aria-hidden="true">*</span></h3>
          <label className="mt-4 block text-sm font-medium">What would you like to build or improve?
            <textarea name="message" required minLength={20} maxLength={4000} rows={5} className={inputClass} placeholder="What are you building, and what would a good result look like?" aria-describedby="brief-help" />
            <span id="brief-help" className="mt-2 block font-normal text-neutral-500">20–4,000 characters. Please leave out passwords or sensitive information.</span>
          </label>
        </section>
        <details className="rounded-xl border border-neutral-200 bg-[#f7f7f2] p-4">
          <summary className="cursor-pointer text-sm font-semibold">Add budget and timing <span className="font-normal text-neutral-500">(optional)</span></summary>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">Budget<input name="budget" maxLength={80} className={inputClass} placeholder="If you have one in mind" /></label>
            <label className="text-sm font-medium">Desired launch<select name="timeline" defaultValue="" className={inputClass}><option value="">Flexible / need advice</option><option>Within a month</option><option>In 1–3 months</option><option>In 3+ months</option><option>Exploring options</option></select></label>
          </div>
        </details>
        <div hidden aria-hidden="true"><label>Leave this empty<input name="fax" tabIndex={-1} autoComplete="off" maxLength={200} /></label></div>
        <p className="text-xs leading-relaxed text-neutral-600">We’ll use these details to respond to your inquiry. No newsletter signup. Read our <Link href="/privacy" className="underline underline-offset-4">privacy policy</Link>.</p>
        <div ref={feedback} tabIndex={-1} role={status === "error" ? "alert" : "status"}>{error && <p className="text-sm text-red-700">{error} <a href={CONTACT_MAILTO} className="underline underline-offset-4">{CONTACT_EMAIL}</a></p>}</div>
        <MinimalButton type="submit" disabled={status === "sending"} className="min-h-12 w-full px-6 sm:w-auto">{status === "sending" ? "Sending inquiry…" : "Send project inquiry"}</MinimalButton>
      </fieldset>
    </form>
  );
}
