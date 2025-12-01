import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// LISTA COMPLETA DE ADVOGADOS PARA A IA
const LAWYERS_LIST = `ADVOGADOS DISPONÍVEIS:

FAMÍLIA (6 advogados):
1. maria-santos: Dra. Maria Santos - Divórcio e Separação
2. rafael-oliveira: Dr. Rafael Oliveira - Guarda de Filhos
3. juliana-costa: Dra. Juliana Costa - Pensão Alimentícia
4. fernando-lima: Dr. Fernando Lima - Alienação Parental
5. patricia-almeida: Dra. Patrícia Almeida - União Estável
6. rodrigo-barros: Dr. Rodrigo Barros - Inventário e Herança

TRABALHISTA (6 advogados):
7. ricardo-mendes: Dr. Ricardo Mendes - Demissão Sem Justa Causa
8. ana-rodrigues: Dra. Ana Rodrigues - Acidente de Trabalho
9. lucas-ferreira: Dr. Lucas Ferreira - Assédio Moral
10. carla-souza: Dra. Carla Souza - Assédio Sexual
11. paulo-martins: Dr. Paulo Martins - Horas Extras
12. beatriz-campos: Dra. Beatriz Campos - Rescisão Indireta

CIVIL (11 advogados):
13. gustavo-reis: Dr. Gustavo Reis - Cobranças e Dívidas
14. camila-nunes: Dra. Camila Nunes - Danos Morais
15. diego-santos: Dr. Diego Santos - Contratos
16. fernanda-lima: Dra. Fernanda Lima - Despejo e Locação
17. thiago-rocha: Dr. Thiago Rocha - Imóveis e Usucapião
18. marina-costa: Dra. Marina Costa - Direito do Consumidor
19. helena-vasconcelos: Dra. Helena Vasconcelos - Direito da Saúde / Planos / SUS / Cirurgias
20. gabriel-monteiro: Dr. Gabriel Monteiro - Crimes Digitais e Golpes (PIX, WhatsApp)
21. renata-machado: Dra. Renata Machado - Erro Médico
22. leonardo-prado: Dr. Leonardo Prado - Direito Aéreo (voos, bagagens)
23. cristina-torres: Dra. Cristina Torres - Multas de Trânsito

PREVIDENCIÁRIO (6 advogados):
24. andre-silva: Dr. André Silva - Aposentadoria
25. claudia-martins: Dra. Claudia Martins - Auxílio-Doença
26. marcos-oliveira: Dr. Marcos Oliveira - BPC/LOAS
27. isabela-santos: Dra. Isabela Santos - Pensão por Morte
28. renato-alves: Dr. Renato Alves - Revisão de Benefícios
29. sandra-lima: Dra. Sandra Lima - Aposentadoria Rural

PENAL (6 advogados):
30. roberto-costa: Dr. Roberto Costa - Flagrante e Prisão
31. vanessa-reis: Dra. Vanessa Reis - Habeas Corpus
32. joao-fernandes: Dr. João Fernandes - Violência Doméstica
33. larissa-souza: Dra. Larissa Souza - Crimes Patrimoniais
34. eduardo-gomes: Dr. Eduardo Gomes - Crimes de Trânsito
35. monica-alves: Dra. Mônica Alves - Defesa Criminal Geral`;

// Tool para orquestrar resposta
const orchestrateResponseTool = {
  type: "function",
  function: {
    name: "orchestrate_response",
    description: "Decide a ação e gera a resposta apropriada para o usuário",
    parameters: {
      type: "object",
      properties: {
        action: {
          type: "string",
          enum: ["normal_response", "suggest_transfer", "confirm_transfer", "deny_transfer", "specialist_greeting"],
          description: "Tipo de ação a executar"
        },
        response: {
          type: "string",
          description: "Texto da resposta para o usuário em português brasileiro informal"
        },
        target_lawyer_id: {
          type: "string",
          description: "ID do advogado para transferir (obrigatório se action for suggest_transfer ou confirm_transfer)"
        },
        target_lawyer_name: {
          type: "string", 
          description: "Nome completo do advogado (ex: 'Dra. Maria Santos')"
        },
        detected_specialty: {
          type: "string",
          description: "Especialidade detectada (familia, trabalhista, civil, previdenciario, penal)"
        },
        detected_problem: {
          type: "string",
          description: "Problema específico detectado (ex: 'divórcio', 'aposentadoria')"
        },
        confidence: {
          type: "number",
          description: "Confiança na decisão (0-1)"
        },
        reasoning: {
          type: "string",
          description: "Explicação breve da decisão"
        }
      },
      required: ["action", "response", "confidence", "reasoning"]
    }
  }
};

// Função principal de orquestração
async function orchestrateChat(params: {
  messages: any[];
  currentLawyerId: string;
  sessionId: string;
  isTransfer: boolean;
  pendingTransfer: string | null;
  detectedProblem: string | null;
  apiKey: string;
}): Promise<{
  action: string;
  response: string;
  targetLawyerId?: string;
  targetLawyerName?: string;
  detectedSpecialty?: string;
  detectedProblem?: string;
  confidence: number;
  reasoning: string;
}> {
  
  const currentLawyerName = params.currentLawyerId === 'carlos-silva' 
    ? 'Dr. Carlos Silva (triagem geral)' 
    : 'Especialista';

  const systemPrompt = `Você é o ORQUESTRADOR INTELIGENTE do sistema de atendimento jurídico online. 
Seu trabalho é analisar o contexto completo e decidir a melhor ação a tomar.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 CONTEXTO ATUAL DA CONVERSA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Advogado atual: ${currentLawyerName}
- É transferência recente? ${params.isTransfer ? 'SIM (acabou de ser transferido)' : 'NÃO'}
- Transferência pendente aguardando confirmação? ${params.pendingTransfer ? `SIM (aguardando confirmação para ${params.pendingTransfer})` : 'NÃO'}
- Problema detectado anteriormente: ${params.detectedProblem || 'Nenhum'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👥 ${LAWYERS_LIST}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 REGRAS DE DECISÃO (use o tool):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ **normal_response**: Resposta normal de conversa
   ✅ Quando usar:
   - Saudações sem contexto jurídico ("oi", "olá", "bom dia")
   - Perguntas de esclarecimento
   - Continuação natural da conversa com especialista
   - Não há problema jurídico claro identificado
   ❌ NÃO use quando: houver problema jurídico claro que precisa de especialista
   
2️⃣ **suggest_transfer**: Sugerir transferência para especialista
   ✅ Quando usar:
   - Dr. Carlos detecta problema jurídico ESPECÍFICO
   - Usuário menciona problema jurídico claro (divórcio, demissão, acidente, etc.)
   - Tem confiança > 0.7 de que sabe qual especialista precisa
   ❌ NÃO use quando:
   - Já tem transferência pendente (a menos que seja área DIFERENTE)
   - É apenas saudação
   - Informação é vaga demais
   
3️⃣ **confirm_transfer**: Usuário CONFIRMOU transferência pendente
   ✅ Quando usar:
   - Há pending_transfer aguardando
   - Usuário disse: "sim", "pode", "ok", "beleza", "quero", "vamos", "aceito"
   - IMPORTANTE: Aceite erros de digitação comuns: "sikm", "simm", "okk", "pde"
   - Execute a transferência imediatamente
   ❌ NÃO use quando: não há pending_transfer
   
4️⃣ **deny_transfer**: Usuário NEGOU transferência
   ✅ Quando usar:
   - Há pending_transfer aguardando
   - Usuário disse: "não", "nao", "depois", "espera", "deixa", "agora não"
   - Aceite variações: "nai", "naum", "nn"
   - Continue conversa normalmente com Carlos
   ❌ NÃO use quando: não há pending_transfer

5️⃣ **specialist_greeting**: Primeira mensagem após transferência
   ✅ Quando usar:
   - isTransfer=true (acabou de ser transferido)
   - Advogado atual NÃO é Carlos
   - É a primeira mensagem do especialista
   - Apresente-se brevemente e pergunte sobre o caso
   ❌ NÃO use quando: não é transferência recente

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 ESTILO DAS RESPOSTAS (Brasileiro informal e natural):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Use linguagem coloquial: "vc", "pra", "né", "tá", "blz", "tranquilo"
- Emojis ocasionais (mas sem exagero): 👍 😊 ✅ 📋
- Máximo 2-3 frases curtas e diretas
- Seja empático e acolhedor
- VARIE as respostas para parecer humano (não repita sempre a mesma frase)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 EXEMPLOS DE RESPOSTAS PARA CADA ACTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

normal_response (Carlos conversando):
- "Entendi. Me conta mais sobre isso, quando aconteceu?"
- "Certo. E vc já tentou resolver isso de alguma forma?"
- "Ah sim. Tem algum documento sobre isso?"

suggest_transfer (Carlos sugere especialista):
- "Ah, isso aí é caso de herança. Posso te passar pro Dr. Rodrigo? Ele é especialista nisso 👍"
- "Bom, isso é questão trabalhista. Transfiro pra Dra. Ana que é expert em acidente de trabalho?"
- "Entendi. Melhor falar com a Dra. Maria, ela é especialista em divórcio. Transfiro?"

confirm_transfer (usuário confirmou):
- "Beleza! Só um instante que já te passo pro Dr. André 👍"
- "Ok, transferindo pra Dra. Maria agora..."
- "Perfeito! Já te conecto com o Dr. Roberto"

deny_transfer (usuário negou):
- "Tranquilo! Fica comigo então. Me conta melhor o que aconteceu"
- "Ok, sem problema. Vamos continuar conversando por aqui"
- "Blz! Então me explica melhor a situação"

specialist_greeting (especialista se apresentando):
- "Oi! Sou a Dra. Maria Santos. Vi que vc precisa de ajuda com divórcio. Me conta: vc e seu cônjuge já conversaram sobre isso?"
- "E aí! André Silva aqui. Sobre sua aposentadoria: vc já deu entrada no INSS ou ainda não?"
- "Olá! Sou o Dr. Roberto. Entendi que teve um problema criminal. Me diz: quando isso aconteceu?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ REGRAS CRÍTICAS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- SEMPRE use o tool orchestrate_response
- NUNCA sugira transferência 2x seguidas para o mesmo advogado
- SEMPRE aceite erros de digitação comuns (sikm=sim, nai=não)
- SEMPRE complete target_lawyer_id quando action for suggest_transfer ou confirm_transfer
- SEMPRE seja breve, informal e natural (máximo 3 frases)`;

  console.log("🧠 [ORCHESTRATOR] Starting analysis...");
  console.log("🧠 [ORCHESTRATOR] Current lawyer:", params.currentLawyerId);
  console.log("🧠 [ORCHESTRATOR] Pending transfer:", params.pendingTransfer);
  console.log("🧠 [ORCHESTRATOR] Is transfer:", params.isTransfer);
  
  try {
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${params.apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...params.messages
        ],
        tools: [orchestrateResponseTool],
        tool_choice: { type: "function", function: { name: "orchestrate_response" } }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ [ORCHESTRATOR] API Error:", response.status, errorText);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    
    if (!toolCall?.function?.arguments) {
      console.error("❌ [ORCHESTRATOR] No tool call in response");
      throw new Error("No tool call in response");
    }

    const decision = JSON.parse(toolCall.function.arguments);
    console.log("✅ [ORCHESTRATOR] Decision:", {
      action: decision.action,
      confidence: decision.confidence,
      reasoning: decision.reasoning,
      targetLawyer: decision.target_lawyer_id
    });

    return {
      action: decision.action,
      response: decision.response,
      targetLawyerId: decision.target_lawyer_id,
      targetLawyerName: decision.target_lawyer_name,
      detectedSpecialty: decision.detected_specialty,
      detectedProblem: decision.detected_problem,
      confidence: decision.confidence,
      reasoning: decision.reasoning
    };
  } catch (error) {
    console.error("❌ [ORCHESTRATOR] Exception:", error);
    // Fallback: resposta genérica
    return {
      action: "normal_response",
      response: "Desculpe, tive um problema técnico. Pode repetir sua pergunta?",
      confidence: 0,
      reasoning: "Error fallback"
    };
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, currentLawyerId, sessionId, isTransfer } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (!LOVABLE_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing environment variables");
    }

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📨 NEW REQUEST");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("Messages:", messages.length);
    console.log("Current lawyer:", currentLawyerId);
    console.log("Session:", sessionId);
    console.log("Is transfer:", isTransfer);

    // Criar cliente Supabase
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Buscar dados do lead
    let { data: leadData, error: leadError } = await supabase
      .from('leads')
      .select('*')
      .eq('session_id', sessionId)
      .maybeSingle();

    if (leadError) {
      console.error("❌ Error fetching lead:", leadError);
    }

    // Criar lead se não existir
    if (!leadData) {
      console.log("📝 Creating new lead for session:", sessionId);
      const { data: newLead, error: createError } = await supabase
        .from('leads')
        .insert({
          session_id: sessionId,
          assigned_lawyer: 'carlos-silva',
          status: 'new',
          message_count: 0,
          conversation_history: [],
          case_details: {}
        })
        .select()
        .single();
      
      if (createError) {
        console.error("❌ Error creating lead:", createError);
      } else {
        leadData = newLead;
        console.log("✅ Lead created:", newLead.id);
      }
    }

    console.log("📋 Lead data:", {
      id: leadData?.id,
      pendingTransfer: leadData?.pending_transfer_lawyer,
      assignedLawyer: leadData?.assigned_lawyer,
      detectedProblem: leadData?.detected_problem
    });

    // Chamar orquestrador (UMA única chamada de IA)
    const decision = await orchestrateChat({
      messages,
      currentLawyerId,
      sessionId,
      isTransfer: isTransfer || false,
      pendingTransfer: leadData?.pending_transfer_lawyer || null,
      detectedProblem: leadData?.detected_problem || null,
      apiKey: LOVABLE_API_KEY
    });

    console.log("🎯 [DECISION]", decision.action);
    console.log("💬 [RESPONSE]", decision.response.substring(0, 100));

    // Executar ações baseadas na decisão
    if (leadData?.id) {
      switch (decision.action) {
        case "suggest_transfer":
          // Salvar transferência pendente
          console.log("💾 Saving pending transfer:", decision.targetLawyerId);
          await supabase
            .from('leads')
            .update({
              pending_transfer_lawyer: decision.targetLawyerId,
              detected_problem: decision.detectedProblem,
              specialty: decision.detectedSpecialty,
              updated_at: new Date().toISOString()
            })
            .eq('id', leadData.id);
          break;
          
        case "confirm_transfer":
          // Executar transferência
          console.log("✅ Confirming transfer to:", decision.targetLawyerId);
          await supabase
            .from('leads')
            .update({
              pending_transfer_lawyer: null,
              assigned_lawyer: decision.targetLawyerId,
              specialty: decision.detectedSpecialty,
              detected_problem: decision.detectedProblem,
              updated_at: new Date().toISOString()
            })
            .eq('id', leadData.id);
          break;
          
        case "deny_transfer":
          // Limpar transferência pendente
          console.log("❌ Clearing pending transfer");
          await supabase
            .from('leads')
            .update({
              pending_transfer_lawyer: null,
              updated_at: new Date().toISOString()
            })
            .eq('id', leadData.id);
          break;
      }
    }

    // Retornar resposta em formato SSE
    const responseData = {
      choices: [
        {
          delta: {
            content: decision.response
          }
        }
      ],
      metadata: {
        action: decision.action,
        newLawyerId: decision.action === "confirm_transfer" ? decision.targetLawyerId : null,
        targetLawyerName: decision.targetLawyerName,
        confidence: decision.confidence
      }
    };

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("✅ REQUEST COMPLETED");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    return new Response(
      `data: ${JSON.stringify(responseData)}\n\ndata: [DONE]\n\n`,
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive'
        } 
      }
    );
    
  } catch (error) {
    console.error("❌ FATAL ERROR:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
