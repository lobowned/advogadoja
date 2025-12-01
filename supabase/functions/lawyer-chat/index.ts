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
    const { messages, currentLawyerId } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received messages:", messages.length, "Current lawyer:", currentLawyerId);

    // Detectar área jurídica baseado em palavras-chave
    const detectSpecialty = (text: string): string | null => {
      const lowerText = text.toLowerCase();
      
      // Família
      if (/divórcio|separação|separar|guarda|filho|filha|pensão|alimento|união estável|herança|inventário/i.test(lowerText)) {
        return 'familia';
      }
      
      // Trabalhista
      if (/demissão|demitido|trabalho|emprego|patrão|acidente.*trabalho|assédio.*moral|assédio.*sexual|hora.*extra/i.test(lowerText)) {
        return 'trabalhista';
      }
      
      // Civil
      if (/cobrança|dívida|dano.*moral|contrato|despejo|aluguel|imóvel|consumidor/i.test(lowerText)) {
        return 'civil';
      }
      
      // Previdenciário
      if (/aposentadoria|inss|benefício|auxílio.*doença|bpc|loas|pensão.*morte/i.test(lowerText)) {
        return 'previdenciario';
      }
      
      // Penal
      if (/preso|prisão|crime|polícia|acusado|habeas corpus|violência doméstica|roubo|furto/i.test(lowerText)) {
        return 'penal';
      }
      
      return null;
    };

    // Lista de advogados por especialidade
    const lawyersBySpecialty: Record<string, string[]> = {
      familia: ['maria-santos', 'rafael-oliveira', 'juliana-costa', 'fernando-lima', 'patricia-almeida', 'rodrigo-barros'],
      trabalhista: ['ricardo-mendes', 'ana-rodrigues', 'lucas-ferreira', 'carla-souza', 'paulo-martins', 'beatriz-campos'],
      civil: ['gustavo-reis', 'camila-nunes', 'diego-santos', 'fernanda-lima', 'thiago-rocha', 'marina-costa'],
      previdenciario: ['andre-silva', 'claudia-martins', 'marcos-oliveira', 'isabela-santos', 'renato-alves', 'sandra-lima'],
      penal: ['roberto-costa', 'vanessa-reis', 'joao-fernandes', 'larissa-souza', 'eduardo-gomes', 'monica-alves'],
    };

    // Verificar se precisa transferir
    let needsTransfer = false;
    let newLawyerId: string | null = null;
    
    if (currentLawyerId === 'carlos-silva' && messages.length > 0) {
      const lastUserMessage = messages.filter((m: any) => m.role === 'user').slice(-1)[0];
      if (lastUserMessage) {
        const detectedSpecialty = detectSpecialty(lastUserMessage.content);
        if (detectedSpecialty) {
          const specialists = lawyersBySpecialty[detectedSpecialty];
          newLawyerId = specialists[Math.floor(Math.random() * specialists.length)];
          needsTransfer = true;
        }
      }
    }

    // Definir prompt baseado no advogado atual
    let systemPrompt = `Você é Dr. Carlos Silva, advogado brasileiro generalista com 15 anos de experiência.

SEU PAPEL:
- Acolher o cliente com empatia e profissionalismo
- Fazer perguntas para entender o problema
- Quando identificar a área jurídica específica, informe que vai transferir para um especialista
- Use linguagem acessível e respostas concisas (2-3 frases)

IMPORTANTE: Quando detectar uma área específica (família, trabalhista, civil, previdenciário, penal), diga algo como:
"Entendo sua situação. Vou transferir você para nosso especialista em [área], que poderá ajudá-lo melhor com esse caso."`;

    if (currentLawyerId !== 'carlos-silva') {
      systemPrompt = `Você é um advogado especialista brasileiro.

SEU PAPEL:
- Continue a conversa de forma natural
- Use seu conhecimento especializado na área
- Faça perguntas específicas para entender o caso
- Demonstre expertise e empatia
- Respostas concisas (2-4 frases)
- Após entender o caso, sugira próximos passos`;
    }

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
            content: systemPrompt
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

    // Se precisa transferir, enviar dados de transferência antes do stream
    if (needsTransfer && newLawyerId) {
      const encoder = new TextEncoder();
      const transferData = `data: ${JSON.stringify({ transfer: true, newLawyerId })}\n\n`;
      
      // Criar novo stream com dados de transferência + response original
      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();
      
      // Escrever dados de transferência
      writer.write(encoder.encode(transferData));
      
      // Pipe o response original
      response.body?.pipeTo(writable);
      
      return new Response(readable, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
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
