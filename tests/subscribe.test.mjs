import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const code = ts.transpileModule(readFileSync("app/api/subscribe/route.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const confirmation = '<div class="vHW8K">Your response has been recorded.</div>';
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfCbbis9ElBkkzYQjCX7cjU2I3fGC7VlKoM-3w8ZqoIghJa_w/formResponse";

function handler({ configured = false, status = 200, html = confirmation, networkError = false, emailError = false, emailThrows = false } = {}) {
  const submissions = [];
  const emails = [];
  const exports = {};
  runInNewContext(code, {
    exports, Response, URLSearchParams, AbortSignal,
    console: { error() {} },
    process: { env: { RESEND_API_KEY: configured ? "test-key" : "" } },
    async fetch(url, options) {
      submissions.push({ url, options });
      if (networkError) throw new Error("Network unavailable");
      return new Response(html, { status });
    },
    require(name) {
      if (name === "next/server") return { NextResponse: Response };
      if (name === "@/app/lib/seo") return { SITE: { email: "agency@example.com", url: "https://agency.example", bookingUrl: "https://cal.example" } };
      if (name === "resend") return { Resend: class {
        emails = { send: async email => {
          assert.equal(submissions.length, 1, "Store in Google Forms before sending email");
          emails.push(email);
          if (emailThrows) throw new Error("Delivery unavailable");
          return emailError ? { error: { message: "Delivery failed" } } : { data: { id: "test" } };
        } };
      } };
      throw new Error(`Unexpected import: ${name}`);
    },
  });
  return {
    submissions, emails,
    post(body = { email: " Founder@Example.com " }) {
      return exports.POST(new Request("https://agency.example/api/subscribe", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: typeof body === "string" ? body : JSON.stringify(body),
      }));
    },
  };
}

test("saves normalized email in the specified Google Form without requiring Resend", async () => {
  const h = handler();
  const response = await h.post();
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  assert.equal(h.submissions.length, 1);
  assert.equal(h.submissions[0].url, formUrl);
  assert.equal(h.submissions[0].options.method, "POST");
  assert.equal(h.submissions[0].options.body.get("entry.1933550364"), "founder@example.com");
  assert.equal(h.emails.length, 0);
});

test("rejects invalid email input without contacting Google or sending emails", async () => {
  for (const body of ["{", null, {}, { email: 42 }, { email: [] }, { email: "invalid" }, { email: "<img>@example.com" }, { email: "x".repeat(250) + "@example.com" }]) {
    const h = handler();
    assert.equal((await h.post(body)).status, 400);
    assert.equal(h.submissions.length, 0);
    assert.equal(h.emails.length, 0);
  }
});

test("does not report success or send email when Google rejects or fails the save", async () => {
  for (const options of [{ status: 403 }, { html: '<form id="mG61Hd">Validation error</form>' }, { networkError: true }]) {
    const h = handler({ configured: true, ...options });
    const response = await h.post();
    assert.equal(response.status, 502);
    assert.equal((await response.json()).ok, undefined);
    assert.equal(h.emails.length, 0);
  }
});

test("preserves existing notification and confirmation emails after saving", async () => {
  const h = handler({ configured: true });
  assert.equal((await h.post()).status, 200);
  assert.equal(h.emails.length, 2);
  assert.equal(h.emails[0].to, "agency@example.com");
  assert.equal(h.emails[1].to, "founder@example.com");
});

test("an email failure does not turn a saved subscription into a failure", async () => {
  for (const options of [{ emailError: true }, { emailThrows: true }]) {
    const h = handler({ configured: true, ...options });
    const response = await h.post();
    assert.equal(response.status, 200);
    assert.equal((await response.json()).ok, true);
    assert.equal(h.submissions.length, 1);
  }
});
