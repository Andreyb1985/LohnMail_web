import { NextResponse } from "next/server";

/**
 * Kontaktformular-Endpunkt.
 *
 * Hier den tatsächlichen Versand anbinden, z. B.:
 *  - Resend (https://resend.com) — empfohlen auf Vercel
 *  - Nodemailer + eigener SMTP-Server
 *  - Eintrag in ein CRM / Google Sheet / Datenbank
 *
 * Beispiel mit Resend:
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "LohnMail <noreply@lohn-mail.de>",
 *     to: "support@lohn-mail.de",
 *     subject: `Testzugang-Anfrage: ${data.firmenname}`,
 *     text: JSON.stringify(data, null, 2),
 *   });
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Minimale Validierung
    if (!data.firmenname || !data.ansprechpartner || !data.email) {
      return NextResponse.json({ ok: false, error: "Pflichtfelder fehlen." }, { status: 400 });
    }

    // TODO: E-Mail-Versand / CRM-Anbindung hier einfügen.
    console.log("Neue Testzugang-Anfrage:", data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
