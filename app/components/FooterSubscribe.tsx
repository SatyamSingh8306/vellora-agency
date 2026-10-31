"use client";

import { useState, type FormEvent } from "react";

export default function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage("You’re subscribed. Thanks for joining!");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div>
      <form className="footer-subscribe-row" onSubmit={onSubmit}>
        <label htmlFor="newsletter-email" className="sr-only">Email for newsletter updates</label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Subscribe"}
        </button>
      </form>
      <p className="mt-2 text-xs text-neutral-600">For project inquiries, use <a href="/contact" className="underline underline-offset-4">Start a project</a>.</p>
      {message ? (
        <p
          className={`footer-subscribe-msg ${
            status === "success" ? "is-success" : "is-error"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
