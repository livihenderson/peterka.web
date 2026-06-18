import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// TEMPORARY SMTP diagnostic — token-gated, no secret values exposed.
// Remove this route once the contact form is confirmed working.
const TOKEN = "diag-7x9k2qf";

export async function GET(req: Request) {
  const url = new URL(req.url);
  if (url.searchParams.get("key") !== TOKEN) {
    return new Response("Not found", { status: 404 });
  }

  const secureRaw = process.env.SMTP_SECURE;
  const SMTP_SECURE =
    secureRaw === "true" || secureRaw === "false"
      ? secureRaw
      : secureRaw
        ? `(unexpected value, len ${secureRaw.length})`
        : null;

  const out: Record<string, unknown> = {
    env: {
      SMTP_HOST: process.env.SMTP_HOST ?? null,
      SMTP_PORT: process.env.SMTP_PORT ?? null,
      SMTP_SECURE,
      SMTP_USER: process.env.SMTP_USER ?? null,
      has_SMTP_PASS: !!process.env.SMTP_PASS,
      SMTP_PASS_len: (process.env.SMTP_PASS ?? "").length,
      CONTACT_TO: process.env.CONTACT_TO ?? null,
    },
  };

  const host = process.env.SMTP_HOST || "smtp.seznam.cz";
  for (const [port, secure] of [
    [465, true],
    [587, false],
  ] as const) {
    try {
      const nodemailer = (await import("nodemailer")).default;
      const t = nodemailer.createTransport({
        host,
        port,
        secure,
        connectionTimeout: 8000,
        greetingTimeout: 8000,
        socketTimeout: 8000,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      await t.verify();
      out[`port_${port}`] = "VERIFY OK";
    } catch (e) {
      const err = e as { code?: string; command?: string; message?: string; response?: string };
      out[`port_${port}`] = {
        code: err.code ?? null,
        command: err.command ?? null,
        message: (err.message ?? "").slice(0, 220),
        response: err.response ?? null,
      };
    }
  }

  return NextResponse.json(out);
}
