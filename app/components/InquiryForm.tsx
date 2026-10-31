"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import BookMeeting from "./BookMeeting";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "../lib/constants";

const inputClass = "mt-2 min-h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-950 placeholder:text-neutral-500 focus:border-[#3054ff] focus:outline-2 focus:outline-offset-2 focus:outline-[#3054ff] disabled:opacity-60";

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
      <div ref={feedback} tabIndex={-1} role="status" className="rounded-2xl border border-neutral-200 bg-[#f6f7f9] p-7 sm:p-10">
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
    <form onSubmit={onSubmit} className="rounded-2xl border border-neutral-200 bg-[#f6f7f9] p-6 sm:p-9" aria-busy={status === "sending"}>
      <h2 className="font-instrument-serif text-3xl">A little about your project.</h2>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">Only your name, email, service, and project brief are required. It’s fine if you’re still figuring things out.</p>
      <fieldset disabled={status === "sending"} className="mt-8 grid min-w-0 gap-6 sm:grid-cols-2">
        <legend className="sr-only">Project inquiry details</legend>
        <label className="text-sm font-medium">Your name <span aria-hidden="true">*</span><input className={inputClass} name="name" autoComplete="name" required maxLength={100} /></label>
        <label className="text-sm font-medium">Email <span aria-hidden="true">*</span><input className={inputClass} name="email" type="email" autoComplete="email" required maxLength={254} /></label>
        <label className="text-sm font-medium sm:col-span-2">Company or website <span className="font-normal text-neutral-500">(optional)</span><input className={inputClass} name="company" autoComplete="organization" maxLength={200} placeholder="Your business name or website address" /></label>
        <label className="text-sm font-medium sm:col-span-2">What do you need help with? <span aria-hidden="true">*</span>
          <select name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select a service</option>
            <option>Website</option><option>App or MVP</option><option>AI &amp; automation</option><option>SEO</option><option>Ongoing support</option><option>Not sure yet</option>
          </select>
        </label>
        <label className="text-sm font-medium">Budget <span className="font-normal text-neutral-500">(optional)</span>
          <input name="budget" maxLength={80} className={inputClass} placeholder="Share if you have a budget in mind" />
        </label>
        <label className="text-sm font-medium">Desired launch <span className="font-normal text-neutral-500">(optional)</span>
          <select name="timeline" defaultValue="" className={inputClass}>
            <option value="">Flexible / need advice</option><option>Within a month</option><option>In 1–3 months</option><option>In 3+ months</option><option>Exploring options</option>
          </select>
        </label>
        <label className="text-sm font-medium sm:col-span-2">What would you like to build or improve? <span aria-hidden="true">*</span>
          <textarea name="message" required minLength={20} maxLength={4000} rows={5} className={inputClass} placeholder="Tell us about your business, what you need, and what a good result would look like." aria-describedby="brief-help" />
          <span id="brief-help" className="mt-2 block font-normal text-neutral-500">20–4,000 characters. Please leave out passwords or sensitive information.</span>
        </label>
        <div hidden aria-hidden="true"><label>Leave this empty<input name="fax" tabIndex={-1} autoComplete="off" maxLength={200} /></label></div>
      </fieldset>
      <p className="mt-6 text-xs leading-relaxed text-neutral-600">We’ll use these details to respond to your inquiry. No newsletter signup. Read our <Link href="/privacy" className="underline underline-offset-4">privacy policy</Link>.</p>
      <div ref={feedback} tabIndex={-1} role={status === "error" ? "alert" : "status"} className="mt-4">
        {error && <p className="mb-4 text-sm text-red-700">{error} <a href={CONTACT_MAILTO} className="underline underline-offset-4">{CONTACT_EMAIL}</a></p>}
      </div>
      <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#3054ff] px-6 py-3 font-medium text-white transition-colors hover:bg-[#2040e0] disabled:cursor-wait disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending inquiry…" : "Send project inquiry"}<ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
