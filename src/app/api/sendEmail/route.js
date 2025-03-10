import sgMail from "@sendgrid/mail";

export async function POST(request) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    const { subject, text, html } = await request.json();

    if (!subject || !text || !html) {
      return new Response(
        JSON.stringify({ error: "Missing required fields in the request body." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const msg = { 
      to: process.env.SENDGRID_SENDER_EMAIL,
      from: process.env.SENDGRID_SENDER_EMAIL,
      subject,
      text,
      html,
    };

    await sgMail.send(msg);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Error sending email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
