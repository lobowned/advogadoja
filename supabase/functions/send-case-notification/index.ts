import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  protocolId: string;
  nicheId: string;
  actionId: string;
  urgency?: string;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      protocolId,
      nicheId,
      actionId,
      urgency,
      clientName,
      clientEmail,
      clientPhone,
    }: NotificationRequest = await req.json();

    console.log("📧 Nova notificação de caso:", {
      protocolId,
      nicheId,
      actionId,
      urgency,
      clientName,
      clientEmail,
      clientPhone,
    });

    // TODO: Integrar com Resend ou outro serviço de email
    // Por enquanto, apenas loga os dados
    
    const nicheNames: Record<string, string> = {
      familia: "Direito de Família",
      trabalhista: "Direito Trabalhista",
      civil: "Direito Civil",
      previdenciario: "Direito Previdenciário",
      penal: "Direito Penal",
    };

    const emailContent = {
      to: "contato@escritorio.com.br", // Configure o email do escritório
      subject: `🔔 Novo Caso Recebido - ${protocolId}`,
      html: `
        <h1>Novo Caso Registrado</h1>
        <p><strong>Protocolo:</strong> ${protocolId}</p>
        <p><strong>Nicho:</strong> ${nicheNames[nicheId] || nicheId}</p>
        <p><strong>Tipo de Ação:</strong> ${actionId}</p>
        <p><strong>Urgência:</strong> ${urgency || "Não informada"}</p>
        <hr>
        <h2>Dados do Cliente</h2>
        <p><strong>Nome:</strong> ${clientName || "Não informado"}</p>
        <p><strong>Email:</strong> ${clientEmail || "Não informado"}</p>
        <p><strong>Telefone:</strong> ${clientPhone || "Não informado"}</p>
        <hr>
        <p><em>Acesse o painel administrativo para visualizar todos os detalhes.</em></p>
      `,
    };

    console.log("📨 Email preparado:", emailContent);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Notificação processada (email mock)" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("❌ Erro ao processar notificação:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
