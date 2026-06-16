import { contactEmailHtml, type ContactSubmission } from "../../../_lib/contactEmail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Dev-only preview of the contact-form e-mail with sample data.
// Open http://localhost:3000/api/contact/preview
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return new Response("Not found", { status: 404 });
  }
  const sample: ContactSubmission = {
    name: "Jan Novák",
    phone: "+420 777 123 456",
    email: "jan.novak@example.cz",
    interests: ["Hypotéky", "Pojištění"],
    message:
      "Dobrý den, kupujeme byt v Táboře a řešíme hypotéku. Zároveň bychom rádi probrali životní pojištění pro celou rodinu. Děkuji, Jan.",
    submittedAt: new Intl.DateTimeFormat("cs-CZ", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Europe/Prague",
    }).format(new Date()),
  };
  return new Response(contactEmailHtml(sample), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
