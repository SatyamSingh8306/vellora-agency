import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const code = ts.transpileModule(readFileSync("app/api/send-email/route.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const valid = { name: "A founder", email: "founder@example.com", service: "Website", message: "We need a website for our growing business." };

function handler({ configured = true, deliveryError = false, throws = false, storageStatus = 200, storageHtml = '<div class="vHW8K">Your response has been recorded.</div>', storageThrows = false } = {}) {
  const sent = [];
  const submissions = [];
  const exports = {};
  let now = 1_000_000;
  class Clock extends Date { static now() { return now; } }
  runInNewContext(code, {
    exports, Request, Response, Buffer, URL, URLSearchParams, AbortSignal, Date: Clock,
    fetch: async (url, options) => {
      submissions.push({ url, options });
      if (storageThrows) throw new Error("Storage unavailable");
      return new Response(storageHtml, { status: storageStatus });
    },
    console: { error() {} },
    process: { env: { RESEND_API_KEY: configured ? "test-key" : "" } },
    require(name) {
      if (name === "../../lib/seo") return { SITE: { email: "agency@example.com", url: "https://agency.example" } };
      if (name === "resend") return { Resend: class {
        emails = { send: async (email) => {
          assert.equal(submissions.length, sent.length + 1, "Store the inquiry before sending email");
          sent.push(email);
          if (throws) throw new Error("provider unavailable");
          return deliveryError ? { error: { message: "provider error" } } : { data: { id: "test" } };
        } };
      } };
      throw new Error(`Unexpected import: ${name}`);
    },
  });
  return {
    sent,
    submissions,
    advance() { now += 15 * 60 * 1000 + 1; },
    post(body = valid, extraHeaders = {}) {
      return exports.POST(new Request("https://agency.example/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json", Origin: "https://agency.example", ...extraHeaders },
        body: typeof body === "string" ? body : JSON.stringify(body),
      }));
    },
  };
}

test("sends only to the agency with a reply-to; supplied HTML stays plain text", async () => {
  const h = handler();
  const response = await h.post({ ...valid, name: " <script>alert(1)</script> ", to: "attacker@example.com", message: "<script>alert('test')</script> A project brief." });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  assert.equal(h.sent.length, 1);
  assert.equal(h.sent[0].to, "agency@example.com");
  assert.equal(h.sent[0].replyTo, valid.email);
  assert.equal(h.sent[0].html, undefined);
  assert.match(h.sent[0].text, /<script>/);
  assert.equal(h.sent[0].subject, "New project inquiry — Vellora Agency");
});

test("rejects malformed JSON, wrong field types, missing fields and invalid choices", async () => {
  for (const body of ["{", null, [], {}, { ...valid, email: [] }, { ...valid, name: 12 }, { ...valid, message: "Too short" }, { ...valid, message: "x".repeat(4001) }, { ...valid, email: "no-email" }, { ...valid, email: "a@example.com\r\nBcc: x@example.com" }, { ...valid, service: "Something else" }]) {
    const h = handler();
    assert.equal((await h.post(body)).status, 400);
    assert.equal(h.sent.length, 0);
    assert.equal(h.submissions.length, 0);
  }
});

test("blocks other origins, wrong content types and oversized bodies", async () => {
  const h = handler();
  assert.equal((await h.post(valid, { Origin: "https://other.example" })).status, 403);
  assert.equal((await h.post(valid, { "Content-Type": "text/plain" })).status, 415);
  assert.equal((await h.post("x".repeat(16_001))).status, 413);
  assert.equal((await h.post(valid, { "Content-Length": "16001" })).status, 413);
  assert.equal(h.sent.length, 0);
  assert.equal(h.submissions.length, 0);
});

test("silently discards honeypot submissions without sending email", async () => {
  const h = handler();
  assert.equal((await h.post({ ...valid, fax: "spam" })).status, 200);
  assert.equal(h.sent.length, 0);
  assert.equal(h.submissions.length, 0);
});

test("throttles attempts and accepts submissions after the window expires", async () => {
  const h = handler();
  for (let i = 0; i < 5; i++) assert.equal((await h.post()).status, 200);
  const blocked = await h.post();
  assert.equal(blocked.status, 429);
  assert.equal(blocked.headers.get("Retry-After"), "900");
  assert.equal(h.sent.length, 5);
  assert.equal(h.submissions.length, 5);
  h.advance();
  assert.equal((await h.post()).status, 200);
});

test("stores inquiries without Resend and retains success when email delivery fails", async () => {
  const missing = handler({ configured: false });
  assert.equal((await missing.post()).status, 200);
  assert.equal(missing.sent.length, 0);
  assert.equal(missing.submissions.length, 1);
  for (const options of [{ deliveryError: true }, { throws: true }]) {
    const response = await handler(options).post();
    assert.equal(response.status, 200);
    assert.equal((await response.json()).ok, true);
  }
});

test("maps all six inquiry fields to the new Google Form and retains the selected service", async () => {
  const h = handler({ configured: false });
  const response = await h.post({ ...valid, company: "Example business", budget: "To discuss", timeline: "Within a month" });
  assert.equal(response.status, 200);
  assert.equal(h.submissions[0].url, "https://docs.google.com/forms/d/e/1FAIpQLSe9r0Kn5xU6YLIco0Sks0ZEB1a14vtiuxhjqPB4uUxXCGTBfQ/formResponse");
  assert.equal(h.submissions[0].options.method, "POST");
  const data = h.submissions[0].options.body;
  assert.deepEqual(Object.fromEntries(data), {
    "entry.1278966519": valid.name,
    "entry.1345342282": valid.email,
    "entry.270022966": "Example business",
    "entry.995107335": "To discuss",
    "entry.241727090": "Within a month",
    "entry.1249656100": `Service: Website\n\n${valid.message}`,
  });
});

test("uses clear defaults for optional inquiry fields", async () => {
  const h = handler({ configured: false });
  assert.equal((await h.post()).status, 200);
  const data = h.submissions[0].options.body;
  assert.equal(data.get("entry.270022966"), "Not provided");
  assert.equal(data.get("entry.995107335"), "Needs guidance");
  assert.equal(data.get("entry.241727090"), "Flexible");
});

test("accepts AI service inquiries and retains the service in Google Forms", async () => {
  const h = handler({ configured: false });
  const response = await h.post({ ...valid, service: "AI & automation" });
  assert.equal(response.status, 200);
  assert.match(h.submissions[0].options.body.get("entry.1249656100"), /^Service: AI & automation\n\n/);
});

test("does not report success or send email when Google fails or returns a validation page", async () => {
  for (const options of [{ storageStatus: 403 }, { storageHtml: '<form id="mG61Hd">Validation error</form>' }, { storageThrows: true }]) {
    const h = handler(options);
    const response = await h.post();
    assert.equal(response.status, 502);
    assert.equal((await response.json()).ok, undefined);
    assert.equal(h.sent.length, 0);
  }
});
