import { NextResponse } from "next/server";
import {
  contactEmailHtml,
  contactEmailText,
  contactSubject,
  type ContactSubmission,
} from "../../_lib/contactEmail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// During testing the recipient defaults here; set CONTACT_TO to override
// (production → peterka.kolektiv@email.cz).
const FALLBACK_TO = "henderson.prg1@gmail.com";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// Verifies a reCAPTCHA v3 token. If RECAPTCHA_SECRET isn't configured the
// check is skipped (so the form works before spam protection is wired up).
async function passesRecaptcha(token: unknown): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) return true;
  if (!token || typeof token !== "string") return false;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success?: boolean; score?: number };
    const threshold = Number(process.env.RECAPTCHA_SCORE_THRESHOLD ?? "0.5");
    return (
      data.success === true &&
      (typeof data.score !== "number" || data.score >= threshold)
    );
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Neplatný požadavek." },
      { status: 400 },
    );
  }

  // Honeypot — bots fill hidden fields; silently accept and drop.
  if (String(body.company ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const phone = String(body.phone ?? "").trim().slice(0, 60);
  const email = String(body.email ?? "").trim().slice(0, 160);
  const message = String(body.message ?? "").trim().slice(0, 4000);
  const interests = Array.isArray(body.interests)
    ? body.interests.map((s) => String(s).slice(0, 60)).slice(0, 12)
    : [];

  if (!name || !phone || !email) {
    return NextResponse.json(
      { ok: false, error: "Vyplňte prosím jméno, telefon i e-mail." },
      { status: 422 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Zadejte prosím platný e-mail." },
      { status: 422 },
    );
  }

  if (!(await passesRecaptcha(body.recaptchaToken))) {
    return NextResponse.json(
      { ok: false, error: "Ověření proti spamu neprošlo. Zkuste to prosím znovu." },
      { status: 400 },
    );
  }

  const submittedAt = new Intl.DateTimeFormat("cs-CZ", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Prague",
  }).format(new Date());

  const submission: ContactSubmission = {
    name,
    phone,
    email,
    message,
    interests,
    submittedAt,
  };
  const subject = contactSubject(submission);
  const html = contactEmailHtml(submission);
  const text = contactEmailText(submission);

  const to = process.env.CONTACT_TO || FALLBACK_TO;
  const host = process.env.SMTP_HOST;

  // No SMTP configured yet: in dev, log the e-mail so the flow is testable;
  // in production, report the service isn't set up.
  if (!host) {
    if (process.env.NODE_ENV !== "production") {
      console.log(
        `\n[contact] SMTP not configured — would send to ${to}\nSubject: ${subject}\n\n${text}\n`,
      );
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json(
      { ok: false, error: "E-mailová služba zatím není nastavená." },
      { status: 503 },
    );
  }

  // Host + user configured but the password secret hasn't been added yet —
  // fail fast instead of hanging on the SMTP connection.
  if (process.env.SMTP_USER && !process.env.SMTP_PASS) {
    console.warn("[contact] SMTP_PASS not set — cannot send.");
    return NextResponse.json(
      { ok: false, error: "E-mailová služba zatím není nastavená." },
      { status: 503 },
    );
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  // Port 465 is implicit TLS; everything else (e.g. 587) uses STARTTLS.
  // Derived purely from the port so a mis-set SMTP_SECURE can't break it.
  const secure = port === 465;
  const fromAddr = process.env.MAIL_FROM || process.env.SMTP_USER || "";
  const fromName = process.env.MAIL_FROM_NAME || "Peterka & Kolektiv";

  try {
    const nodemailer = (await import("nodemailer")).default;
    const transport = nodemailer.createTransport({
      host,
      port,
      secure,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
    await transport.sendMail({
      from: fromAddr ? `"${fromName}" <${fromAddr}>` : undefined,
      to,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (e) {
    console.error("[contact] send failed:", e);
    return NextResponse.json(
      { ok: false, error: "E-mail se nepodařilo odeslat. Zkuste to prosím později." },
      { status: 502 },
    );
  }
}
