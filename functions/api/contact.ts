// Cloudflare Pages Function - Email Handler
// Uses Resend API for sending emails

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface Env {
  RESEND_API_KEY: string;
}

// Pages Function handler
export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  try {
    // Check for API key
    if (!context.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Configuração do servidor incompleta.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const formData = await context.request.formData();

    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Todos os campos são obrigatórios",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email inválido",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Send email using Resend API
    // Docs: https://resend.com/docs/api-reference/emails/send-email
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>", // Use your verified domain or onboarding@resend.dev for testing
        to: ["mateuseduardobene@gmail.com"],
        reply_to: data.email,
        subject: `[Portfolio] Nova mensagem de ${data.name}`,
        html: `
          <h2>Nova mensagem do Portfolio</h2>
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${
          data.email
        }</a></p>
          <hr>
          <h3>Mensagem:</h3>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
        text: `Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem:\n${data.message}`,
      }),
    });

    const responseData = await emailResponse.json();

    if (emailResponse.ok) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Email enviado com sucesso!",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      console.error("Resend error:", JSON.stringify(responseData));

      return new Response(
        JSON.stringify({
          success: false,
          error: "Erro ao enviar email. Tente novamente.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Erro interno. Tente novamente mais tarde.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
