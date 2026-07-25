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
      setMessage("You're subscribed — check your inbox.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div>
      <form className="footer-subscribe-row" onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          required
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
