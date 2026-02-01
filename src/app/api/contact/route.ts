// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Envoi email
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Utilise ton domaine vérifié
      to: 'ton-email@example.com',
      replyTo: email,
      subject: `Contact de ${name}`,
      text: `
Nom: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
