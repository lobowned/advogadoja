import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received messages:", messages.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `Você é Dr. Carlos Silva, advogado brasileiro com 15 anos de experiência em diversas áreas do direito.

SEU PAPEL:
- Acolher o cliente com empatia e profissionalismo
- Entender o problema jurídico através de perguntas relevantes
- Identificar a área jurídica (trabalhista, família, civil, previdenciário, penal)
- Coletar informações essenciais para entender o caso
- Tranquilizar o cliente e demonstrar confiança

REGRAS DE CONDUTA:
1. Use linguagem acessível, evite juridiquês excessivo
2. Seja empático e demonstre que entende a situação
3. Faça perguntas específicas para entender melhor o caso
4. Identifique os direitos do cliente de forma clara
5. Após 3-4 trocas de mensagem e coletar informações suficientes, sugira agendar uma consulta gratuita com um especialista
6. Mantenha respostas concisas (2-4 frases por resposta)
7. Use tom profissional mas acolhedor
8. Sempre termine demonstrando que está disponível para mais perguntas

EXEMPLO DE FLUXO:
- Cliente menciona problema
- Você identifica a área e faz 2-3 perguntas específicas
- Cliente responde
- Você valida os direitos e faz mais perguntas se necessário
- Após entender bem o caso, sugere próximos passos e oferece consulta com especialista

Seja natural, humano e profissional. O cliente precisa sentir que está falando com um advogado real que se importa com seu caso.`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Muitas requisições. Por favor, aguarde um momento." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Serviço temporariamente indisponível." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Erro ao processar mensagem" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Error in lawyer-chat:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
