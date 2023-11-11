import { Resend } from 'resend';

import { EmailTemplate } from '@/components/partials/email';

const resend = new Resend(process.env.KEY_EMAIL);

export async function POST(req: Request) {
  const data = await req.json();

  try {
    await resend.emails.send({
      from: "Formulario de contacto <onboarding@resend.dev>",
      to: ["beltrannicolasalejo@gmail.com"],
      subject: "Mensaje de mi portafolio web full stack",
      reply_to: data.email,
      react: EmailTemplate({ data }),
      text: ""
    });

    return Response.json(true);
  } catch (error) {
    return Response.json(false)
  }
}