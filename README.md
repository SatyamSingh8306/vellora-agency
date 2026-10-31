This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Copy `.env.example` to `.env` and configure `RESEND_API_KEY`. The sending domain
for `velloraagency@dynamisos.in` must be verified in Resend. Project inquiries from
`/contact` are saved to the inquiry Google Form first. When Resend is configured,
a best-effort notification is delivered only to the agency inbox, with the visitor's
email as the reply-to. No visitor confirmation email is sent. If Google rejects
the save, the form keeps the entered details so visitors can retry.

The inquiry form uses these Google Forms fields:
- Name: `entry.1278966519`
- Email: `entry.1345342282`
- Company / website: `entry.270022966`
- Budget: `entry.995107335`
- Desired launch: `entry.241727090`
- Project brief (including selected service): `entry.1249656100`

Both Google Forms must remain public and accept responses. Storage confirmation
depends on Google's response-page markup, which may change.

`npm test` checks inquiry validation, fixed-recipient delivery, spam controls,
and failure handling with a mocked email provider; it sends no real emails.
The built-in rate limit is per server instance. Use a shared rate limiter if
traffic or a multi-instance deployment requires stronger abuse protection.

Footer newsletter subscriptions are saved to the Vellora Google Form, using
email field `entry.1933550364`. The form must remain public and accept responses.
Resend notification and confirmation emails are best effort after Google confirms
the save; a missing Resend key does not prevent subscription storage.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
