// Cloudflare Pages Function - Email Handler
// Uses MailChannels API (free for Cloudflare Workers)

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface Env {
  // Add environment variables here if needed
}

// Pages Function handler
export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  try {
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

    // Send email using MailChannels (free with Cloudflare Workers)
    // Docs: https://blog.cloudflare.com/sending-email-from-workers-with-mailchannels
    const emailResponse = await fetch(
      "https://api.mailchannels.net/tx/v1/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email: "mateuseduardobene@gmail.com",
                  name: "Mateus Eduardo",
                },
              ],
            },
          ],
          from: {
            email: "noreply@portfolio-mateus.pages.dev",
            name: "Portfolio Contact Form",
          },
          reply_to: {
            email: data.email,
            name: data.name,
          },
          subject: `[Portfolio] Nova mensagem de ${data.name}`,
          content: [
            {
              type: "text/plain",
              value: `Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem:\n${data.message}`,
            },
            {
              type: "text/html",
              value: `
              <h2>Nova mensagem do Portfolio</h2>
              <p><strong>Nome:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${
                data.email
              }</a></p>
              <hr>
              <h3>Mensagem:</h3>
              <p>${data.message.replace(/\n/g, "<br>")}</p>
            `,
            },
          ],
        }),
      }
    );

    if (emailResponse.ok) {
      // Return success JSON
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
      const errorText = await emailResponse.text();
      console.error("MailChannels error:", errorText);

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
