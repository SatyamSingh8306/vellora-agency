import { Resend } from "resend";
import { SITE } from "../../lib/seo";

// shortcut: limits apply per server instance; use shared storage if inquiry traffic grows.
const attempts = new Map<string, { count: number; expires: number }>();
const WINDOW = 15 * 60 * 1000;
const MAX_BODY = 16_000;
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe9r0Kn5xU6YLIco0Sks0ZEB1a14vtiuxhjqPB4uUxXCGTBfQ/formResponse";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin && origin !== new URL(SITE.url).origin) {
    return Response.json({ error: "Please send your inquiry from our website." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Please submit the project inquiry form." }, { status: 415 });
  }
  const now = Date.now();
  for (const [key, value] of attempts) {
    if (value.expires <= now) attempts.delete(key);
  }
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const attempt = attempts.get(ip) ?? { count: 0, expires: now + WINDOW };
  if (attempt.count >= 5 || (!attempts.has(ip) && attempts.size >= 10_000)) {
    return Response.json(
      { error: "Too many attempts. Please try again in 15 minutes or email us directly." },
      { status: 429, headers: { "Retry-After": "900" } },
    );
  }
  attempt.count++;
  attempts.set(ip, attempt);

  let body: unknown;
  try {
    if (Number(request.headers.get("content-length")) > MAX_BODY) {
      return Response.json({ error: "Please keep your inquiry under 16 KB." }, { status: 413 });
    }
    const reader = request.body?.getReader();
    if (!reader) return Response.json({ error: "Please complete the inquiry form." }, { status: 400 });
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY) {
        await reader.cancel();
        return Response.json({ error: "Please keep your inquiry under 16 KB." }, { status: 413 });
      }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return Response.json({ error: "Please submit a valid inquiry." }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "Please complete the inquiry form." }, { status: 400 });
  }
  const fields = body as Record<string, unknown>;
  const limits: Record<string, number> = { name: 100, email: 254, company: 200, service: 80, budget: 80, timeline: 120, message: 4000, fax: 200 };
  for (const [key, max] of Object.entries(limits)) {
    if (fields[key] !== undefined && (typeof fields[key] !== "string" || fields[key].length > max)) {
      return Response.json({ error: `Please check the ${key} field and its length.` }, { status: 400 });
    }
  }
  if (fields.fax) return Response.json({ ok: true });
  const name = (fields.name as string | undefined)?.trim();
  const email = (fields.email as string | undefined)?.trim();
  const message = (fields.message as string | undefined)?.trim();
  const service = (fields.service as string | undefined)?.trim();
  if (!name || !email || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) || !message || message.length < 20 || !service || /[\r\n]/.test(name)) {
    return Response.json({ error: "Add your name, a valid email, a service, and at least 20 characters about your project." }, { status: 400 });
  }
  if (!["Website", "App or MVP", "AI & automation", "SEO", "Ongoing support", "Not sure yet"].includes(service)) {
    return Response.json({ error: "Please choose one of the listed services." }, { status: 400 });
  }
  let stored = false;
  try {
    const response = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      body: new URLSearchParams({
        "entry.1278966519": name,
        "entry.1345342282": email,
        "entry.270022966": (fields.company as string | undefined)?.trim() || "Not provided",
        "entry.995107335": (fields.budget as string | undefined)?.trim() || "Needs guidance",
        "entry.241727090": (fields.timeline as string | undefined)?.trim() || "Flexible",
        "entry.1249656100": `Service: ${service}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(15_000),
    });
    const confirmation = await response.text();
    // shortcut: Google Forms confirms through HTML; revisit if its confirmation markup changes.
    if (!response.ok || !confirmation.includes('class="vHW8K"')) {
      return Response.json({ error: "Your inquiry wasn’t saved. Please try again or email us directly." }, { status: 502 });
    }
    stored = true;
    if (!process.env.RESEND_API_KEY) return Response.json({ ok: true });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: `Vellora Agency <${SITE.email}>`,
      to: SITE.email,
      replyTo: email,
      subject: "New project inquiry — Vellora Agency",
      text: [
        `Name: ${name}`, `Email: ${email}`, `Company / website: ${fields.company || "Not provided"}`,
        `Service: ${service}`, `Budget: ${fields.budget || "Needs guidance"}`, `Timeline: ${fields.timeline || "Flexible"}`,
        "", "Project brief:", message,
      ].join("\n"),
    });
    if (result.error) {
      console.error("Project inquiry saved; notification email failed");
    }
    return Response.json({ ok: true });
  } catch {
    if (stored) {
      console.error("Project inquiry saved; notification email failed");
      return Response.json({ ok: true });
    }
    console.error("Project inquiry storage failed");
    return Response.json({ error: "Your inquiry wasn’t saved. Please try again or email us directly." }, { status: 502 });
  }
}
