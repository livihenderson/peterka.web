// Branded HTML e-mail for contact-form submissions.
// Palette mirrors app/globals.css ("Heritage Library" — bone parchment,
// deep forest, aged brass). Table-based + inline styles for e-mail clients.

const C = {
  bone: "#F2EBDD",
  boneWarm: "#EADFC8",
  paper: "#FBF7EE",
  ink: "#11140F",
  inkSoft: "#2C322B",
  inkMute: "#5C5F58",
  moss: "#1E3A2C",
  mossDeep: "#112318",
  brass: "#A6814E",
  brassLight: "#C9A471",
  brassDeep: "#7B5C36",
  rule: "#C5B89D",
  ruleDark: "#2A3329",
} as const;

// E-mail-safe stacks (custom webfonts don't load reliably in mail clients);
// Georgia echoes the site's editorial serif, the mono stack echoes the labels.
const SERIF = "Georgia, 'Times New Roman', Times, serif";
const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const MONO =
  "'SF Mono', SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";

export type ContactSubmission = {
  name: string;
  phone: string;
  email: string;
  message?: string;
  interests?: string[];
  /** Pre-formatted Czech date-time string. */
  submittedAt?: string;
};

function esc(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function contactSubject(d: ContactSubmission): string {
  const topic =
    d.interests && d.interests.length ? ` — ${d.interests.join(", ")}` : "";
  return `Nová poptávka z webu — ${d.name}${topic}`;
}

export function contactEmailText(d: ContactSubmission): string {
  const lines = [
    "NOVÁ POPTÁVKA Z WEBU — Peterka & Kolektiv",
    "",
    `Jméno:   ${d.name}`,
    `Telefon: ${d.phone}`,
    `E-mail:  ${d.email}`,
  ];
  if (d.interests && d.interests.length)
    lines.push(`Co řeší: ${d.interests.join(", ")}`);
  if (d.message && d.message.trim()) lines.push("", "Zpráva:", d.message.trim());
  if (d.submittedAt) lines.push("", `Odesláno: ${d.submittedAt}`);
  lines.push(
    "",
    "Tato zpráva přišla z kontaktního formuláře na webu.",
    "Odpovědět můžete přímo na tento e-mail.",
  );
  return lines.join("\n");
}

/** A label → value row. */
function row(label: string, valueHtml: string): string {
  return `
    <tr>
      <td style="padding:0 40px;">
        <div style="font-family:${MONO};font-size:10px;letter-spacing:2.6px;text-transform:uppercase;color:${C.brassDeep};padding-top:26px;">${esc(
          label,
        )}</div>
        <div style="font-family:${SANS};font-size:17px;line-height:1.5;color:${C.ink};padding-top:7px;">${valueHtml}</div>
        <div style="border-bottom:1px solid ${C.rule};margin-top:22px;line-height:1px;font-size:0;">&nbsp;</div>
      </td>
    </tr>`;
}

export function contactEmailHtml(d: ContactSubmission): string {
  const interests =
    d.interests && d.interests.length
      ? d.interests
          .map(
            (i) =>
              `<span style="display:inline-block;font-family:${MONO};font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:${C.moss};background:${C.boneWarm};border:1px solid ${C.rule};padding:5px 11px;margin:0 6px 6px 0;border-radius:2px;">${esc(
                i,
              )}</span>`,
          )
          .join("")
      : `<span style="color:${C.inkMute};font-style:italic;">Neuvedeno</span>`;

  const messageBlock =
    d.message && d.message.trim()
      ? `
    <tr>
      <td style="padding:0 40px;">
        <div style="font-family:${MONO};font-size:10px;letter-spacing:2.6px;text-transform:uppercase;color:${C.brassDeep};padding-top:26px;">Zpráva</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;">
          <tr>
            <td style="border-left:2px solid ${C.brass};background:${C.bone};padding:16px 20px;font-family:${SERIF};font-size:17px;line-height:1.6;color:${C.inkSoft};font-style:italic;">${esc(
              d.message.trim(),
            ).replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        <div style="border-bottom:1px solid ${C.rule};margin-top:22px;line-height:1px;font-size:0;">&nbsp;</div>
      </td>
    </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Nová poptávka</title>
</head>
<body style="margin:0;padding:0;background:${C.bone};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Nová poptávka z kontaktního formuláře — ${esc(
    d.name,
  )}, ${esc(d.phone)}.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.bone};padding:32px 16px;">
  <tr>
    <td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:${C.paper};border-top:3px solid ${C.brass};">

        <!-- Header band -->
        <tr>
          <td style="background:${C.moss};padding:38px 40px 32px;">
            <div style="font-family:${MONO};font-size:10px;letter-spacing:3px;text-transform:uppercase;color:${C.brassLight};">
              <span style="display:inline-block;width:22px;height:1px;background:${C.brass};vertical-align:middle;margin-right:10px;"></span>Kontaktní formulář
            </div>
            <div style="font-family:${SERIF};font-size:36px;line-height:1.05;color:${C.paper};padding-top:18px;letter-spacing:-0.5px;">
              Nová <span style="font-style:italic;color:${C.brassLight};">poptávka.</span>
            </div>
            <div style="font-family:${SANS};font-size:14px;line-height:1.55;color:rgba(251,247,238,0.72);padding-top:14px;max-width:380px;">
              Někdo vyplnil formulář na webu. Ozvěte se mu nejpozději do dvou pracovních dnů.
            </div>
          </td>
        </tr>

        <!-- Fields -->
        ${row("Jméno", esc(d.name))}
        ${row(
          "Telefon",
          `<a href="tel:${esc(d.phone).replace(/\s+/g, "")}" style="color:${C.moss};text-decoration:none;">${esc(
            d.phone,
          )}</a>`,
        )}
        ${row(
          "E-mail",
          `<a href="mailto:${esc(d.email)}" style="color:${C.moss};text-decoration:underline;">${esc(
            d.email,
          )}</a>`,
        )}
        <tr>
          <td style="padding:0 40px;">
            <div style="font-family:${MONO};font-size:10px;letter-spacing:2.6px;text-transform:uppercase;color:${C.brassDeep};padding-top:26px;">Co klient řeší</div>
            <div style="padding-top:11px;">${interests}</div>
            <div style="border-bottom:1px solid ${C.rule};margin-top:18px;line-height:1px;font-size:0;">&nbsp;</div>
          </td>
        </tr>
        ${messageBlock}

        <!-- Reply hint -->
        <tr>
          <td style="padding:30px 40px 36px;">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:${C.moss};border-radius:2px;">
                  <a href="mailto:${esc(d.email)}" style="display:inline-block;font-family:${MONO};font-size:12px;letter-spacing:1.6px;text-transform:uppercase;color:${C.paper};text-decoration:none;padding:13px 24px;">Odpovědět klientovi →</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:${C.boneWarm};padding:22px 40px;border-top:1px solid ${C.rule};">
            <div style="font-family:${MONO};font-size:10px;letter-spacing:1.8px;text-transform:uppercase;color:${C.inkMute};line-height:1.7;">
              Peterka &amp; Kolektiv · Kontaktní formulář${
                d.submittedAt
                  ? ` · ${esc(d.submittedAt)}`
                  : ""
              }<br>
              Odpovědět lze přímo na tento e-mail.
            </div>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}
