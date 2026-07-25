import { Resend } from "resend";
import { NextResponse } from "next/server";
import { SITE } from "@/app/lib/seo";

const FROM = `Vellora Agency <${SITE.email}>`;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim().toLowerCase();

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const notify = await resend.emails.send({
      from: FROM,
      to: SITE.email,
      replyTo: email,
      subject: `New subscriber — ${email}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Subscriber</title>
          <style>
            body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { text-align: center; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px solid #e2e8f0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: bold; color: #1e4fc0; }
            .main-content { background: #ffffff; border-radius: 16px; padding: 32px; }
            .subject { margin: 0 0 16px; font-size: 22px; font-weight: bold; color: #0f172a; }
            .info { background: #f1f5f9; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; }
            .info p { margin: 0; font-size: 14px; color: #475569; }
            .footer { text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0; }
            .footer p { margin: 0 0 8px; font-size: 13px; color: #64748b; }
          </style>
        </head>
        <body>
          <table class="container" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td>
                <table class="header" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td align="center">
                      <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #1e4fc0;">Vellora Agency</h1>
                    </td>
                  </tr>
                </table>
                <table class="main-content" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #ffffff; border-radius: 16px; padding: 32px;">
                  <tr>
                    <td>
                      <h2 class="subject" style="margin: 0 0 16px; font-size: 22px; font-weight: bold; color: #0f172a;">New Newsletter Subscriber</h2>
                      <table class="info" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #f1f5f9; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px;">
                        <tr>
                          <td>
                            <p style="margin: 0; font-size: 14px; color: #475569;"><strong style="color: #1e293b;">Email:</strong> ${email}</p>
                          </td>
                        </tr>
                      </table>
                      <p style="margin: 0; font-size: 13px; color: #64748b;">Submitted from ${SITE.url}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `New newsletter subscriber\nEmail: ${email}\nFrom: ${SITE.url}`,
    });

    if (notify.error) {
      console.error("Resend notify error:", notify.error);
      return NextResponse.json(
        { error: "Could not send email. Please try again." },
        { status: 502 },
      );
    }

    const confirm = await resend.emails.send({
      from: FROM,
      to: email,
      subject: "You're on the list — Vellora Agency",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Vellora Agency</title>
          <style>
            body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { text-align: center; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px solid #e2e8f0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: bold; color: #1e4fc0; }
            .header p { margin: 8px 0 0; font-size: 14px; color: #64748b; }
            .main-content { background: #ffffff; border-radius: 16px; padding: 32px; }
            .subject { margin: 0 0 16px; font-size: 22px; font-weight: bold; color: #0f172a; }
            .message { margin-bottom: 24px; line-height: 1.7; color: #334155; }
            .message p { margin: 0 0 12px; }
            .divider { height: 1px; background: #e2e8f0; margin: 24px 0; }
            .cta { text-align: center; }
            .cta a { display: inline-block; background: #1e4fc0; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; }
            .footer { text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0; }
            .footer p { margin: 0 0 8px; font-size: 13px; color: #64748b; }
            .footer a { color: #1e4fc0; text-decoration: none; }
          </style>
        </head>
        <body>
          <table class="container" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td>
                <table class="header" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td align="center">
                      <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #1e4fc0;">Vellora Agency</h1>
                      <p style="margin: 8px 0 0; font-size: 14px; color: #64748b;">Websites that win clients, built to convert.</p>
                    </td>
                  </tr>
                </table>
                <table class="main-content" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #ffffff; border-radius: 16px; padding: 32px;">
                  <tr>
                    <td>
                      <h2 class="subject" style="margin: 0 0 16px; font-size: 22px; font-weight: bold; color: #0f172a;">Thanks for Subscribing!</h2>
                      <div class="message" style="margin-bottom: 24px; line-height: 1.7; color: #334155;">
                        <p style="margin: 0 0 12px;">You're now on the <strong>Vellora Agency</strong> list. We'll share updates on websites, apps, and SEO builds for startups.</p>
                        <p style="margin: 0 0 12px;">Want to talk about a project? Book a meeting or reply to this email.</p>
                      </div>
                      <div class="divider" style="height: 1px; background: #e2e8f0; margin: 24px 0;"></div>
                      <table class="cta" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td align="center">
                            <a href="${SITE.bookingUrl}" style="display: inline-block; background: #1e4fc0; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px;">Book a Meeting</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table class="footer" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td align="center">
                      <p style="margin: 0 0 8px; font-size: 13px; color: #64748b;">Visit us at <a href="${SITE.url}" style="color: #1e4fc0; text-decoration: none;">${SITE.url}</a></p>
                      <p style="margin: 0; font-size: 12px; color: #94a3b8;">© ${new Date().getFullYear()} Vellora Agency. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `Thanks for subscribing to Vellora Agency.\nBook a meeting: ${SITE.bookingUrl}\n${SITE.url}`,
    });

    if (confirm.error) {
      console.error("Resend confirm error:", confirm.error);
      // Subscriber was still captured via notify — treat as success
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
