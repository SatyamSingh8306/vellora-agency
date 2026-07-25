import { Resend } from "resend";
import { NextResponse } from "next/server";
import { SITE } from "@/app/lib/seo";

const FROM = `Vellora Agency <${SITE.email}>`;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      to?: string;
      subject?: string;
      message?: string;
      clientName?: string;
    };

    const { to, subject, message, clientName } = body;

    // Validate required fields
    if (!to || !EMAIL_RE.test(to)) {
      return NextResponse.json(
        { error: "Please provide a valid recipient email address." },
        { status: 400 },
      );
    }

    if (!subject || subject.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide a subject." },
        { status: 400 },
      );
    }

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide a message." },
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

    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
        <style>
          body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
          .header { text-align: center; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px solid #e2e8f0; }
          .header h1 { margin: 0; font-size: 28px; font-weight: bold; color: #1e4fc0; }
          .header p { margin: 8px 0 0; font-size: 14px; color: #64748b; }
          .main-content { background: #ffffff; border-radius: 16px; padding: 32px; }
          .subject { margin: 0 0 16px; font-size: 22px; font-weight: bold; color: #0f172a; }
          .sender-info { background: #f1f5f9; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; }
          .sender-info p { margin: 0; font-size: 14px; color: #475569; }
          .message { margin-bottom: 24px; line-height: 1.7; color: #334155; white-space: pre-wrap; }
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
              
              <!-- Header -->
              <table class="header" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #1e4fc0;">Vellora Agency</h1>
                    <p style="margin: 8px 0 0; font-size: 14px; color: #64748b;">Websites that win clients, built to convert.</p>
                  </td>
                </tr>
              </table>

              <!-- Main Content -->
              <table class="main-content" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #ffffff; border-radius: 16px; padding: 32px;">
                <tr>
                  <td>
                    
                    <!-- Subject -->
                    <h2 class="subject" style="margin: 0 0 16px; font-size: 22px; font-weight: bold; color: #0f172a;">${subject}</h2>

                    <!-- Sender Info -->
                    ${clientName ? `
                    <table class="sender-info" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #f1f5f9; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px;">
                      <tr>
                        <td>
                          <p style="margin: 0; font-size: 14px; color: #475569;"><strong style="color: #1e293b;">From:</strong> ${clientName}</p>
                        </td>
                      </tr>
                    </table>
                    ` : ''}

                    <!-- Message -->
                    <div class="message" style="margin-bottom: 24px; line-height: 1.7; color: #334155; white-space: pre-wrap;">${message}</div>

                    <!-- Divider -->
                    <div class="divider" style="height: 1px; background: #e2e8f0; margin: 24px 0;"></div>

                    <!-- CTA -->
                    <table class="cta" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td align="center">
                          <a href="${SITE.url}" style="display: inline-block; background: #1e4fc0; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px;">Visit Vellora Agency</a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Footer -->
              <table class="footer" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 8px; font-size: 13px; color: #64748b;">This email was sent from <a href="${SITE.url}" style="color: #1e4fc0; text-decoration: none;">${SITE.url}</a></p>
                    <p style="margin: 0; font-size: 12px; color: #94a3b8;">© ${new Date().getFullYear()} Vellora Agency. All rights reserved.</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const textContent = `
${subject}
${clientName ? `From: ${clientName}` : ''}

${message}

---
Sent from Vellora Agency (${SITE.url})
    `;

    const result = await resend.emails.send({
      from: FROM,
      to: to,
      subject: subject,
      html: emailContent,
      text: textContent.trim(),
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Could not send email. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, messageId: result.data?.id });
  } catch (err) {
    console.error("Send email API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
