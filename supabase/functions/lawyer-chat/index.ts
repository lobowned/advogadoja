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
    const { messages, currentLawyerId, sessionId, messageCount, isTransfer } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    // VERIFICAÇÃO CRÍTICA: Garantir que variáveis de ambiente existem
    if (!LOVABLE_API_KEY) {
      console.error("❌ LOVABLE_API_KEY is missing");
      throw new Error("LOVABLE_API_KEY is not configured");
    }
    if (!SUPABASE_URL) {
      console.error("❌ SUPABASE_URL is missing");
      throw new Error("SUPABASE_URL is not configured");
    }
    if (!SUPABASE_SERVICE_ROLE_KEY) {
      console.error("❌ SUPABASE_SERVICE_ROLE_KEY is missing");
      throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured");
    }

    console.log("✅ All environment variables loaded");
    console.log("📨 Received messages:", messages.length, "Current lawyer:", currentLawyerId, "Session:", sessionId);

    // FUNÇÃO DE CRIAÇÃO DE ADVOGADO DINÂMICO
    const createDynamicLawyer = (specialty: string, subSpecialty: string): any => {
      const specialtyNames: Record<string, { name: string; gender: string; photo: string }> = {
        tributario: { 
          name: 'Dr. Eduardo Fiscal', 
          gender: 'M',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
        },
        ambiental: { 
          name: 'Dra. Carolina Verde', 
          gender: 'F',
          photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop'
        },
        imobiliario: { 
          name: 'Dr. Henrique Imóveis', 
          gender: 'M',
          photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
        },
        bancario: { 
          name: 'Dra. Luciana Bancária', 
          gender: 'F',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop'
        },
        empresarial: { 
          name: 'Dr. Roberto Empresarial', 
          gender: 'M',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop'
        },
        administrativo: { 
          name: 'Dra. Fernanda Administrativa', 
          gender: 'F',
          photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop'
        },
        internacional: { 
          name: 'Dr. Paulo Internacional', 
          gender: 'M',
          photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
        },
        eleitoral: { 
          name: 'Dra. Beatriz Eleitoral', 
          gender: 'F',
          photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
        },
      };
      
      const specialtyData = specialtyNames[specialty.toLowerCase()] || {
        name: `Dr. Especialista em ${subSpecialty}`,
        gender: 'M',
        photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop'
      };
      
      return {
        id: `dynamic-${specialty}-${Date.now()}`,
        name: specialtyData.name,
        photo: specialtyData.photo,
        oab: 'OAB/SP Virtual',
        specialty,
        subSpecialty,
        bio: `Especialista em ${subSpecialty} com ampla experiência na área.`,
        isVirtual: true,
        gender: specialtyData.gender,
        keywords: []
      };
    };

    // VERIFICAÇÃO DE SAUDAÇÃO (para evitar detecção agressiva)
    const isGreetingOnly = (text: string): boolean => {
      const greetings = /^(oi|olá|ola|olá!|oi!|hey|hi|e aí|eae|eai|boa tarde|bom dia|boa noite|oie|oiee|oiii|opa|salve|fala|tudo bem|td bem|tudo bom|beleza|blz)[\!\?\.\s]*$/i;
      return greetings.test(text.trim());
    };

    // LISTA COMPLETA DE ADVOGADOS PARA A IA
    const lawyersListForAI = `ADVOGADOS DISPONÍVEIS:

FAMÍLIA (6 advogados):
1. maria-santos: Divórcio e Separação
2. rafael-oliveira: Guarda de Filhos
3. juliana-costa: Pensão Alimentícia
4. fernando-lima: Alienação Parental
5. patricia-almeida: União Estável
6. rodrigo-barros: Inventário e Herança

TRABALHISTA (6 advogados):
7. ricardo-mendes: Demissão Sem Justa Causa
8. ana-rodrigues: Acidente de Trabalho
9. lucas-ferreira: Assédio Moral
10. carla-souza: Assédio Sexual
11. paulo-martins: Horas Extras
12. beatriz-campos: Rescisão Indireta

CIVIL (11 advogados):
13. gustavo-reis: Cobranças e Dívidas
14. camila-nunes: Danos Morais
15. diego-santos: Contratos
16. fernanda-lima: Despejo e Locação
17. thiago-rocha: Imóveis e Usucapião
18. marina-costa: Direito do Consumidor
19. helena-vasconcelos: Direito da Saúde / Planos / SUS / Cirurgias
20. gabriel-monteiro: Crimes Digitais e Golpes (PIX, WhatsApp, Invasão)
21. renata-machado: Erro Médico
22. leonardo-prado: Direito Aéreo (voos, bagagens)
23. cristina-torres: Multas de Trânsito (recurso, CNH)

PREVIDENCIÁRIO (6 advogados):
24. andre-silva: Aposentadoria
25. claudia-martins: Auxílio-Doença
26. marcos-oliveira: BPC/LOAS
27. isabela-santos: Pensão por Morte
28. renato-alves: Revisão de Benefícios
29. sandra-lima: Aposentadoria Rural

PENAL (6 advogados):
30. roberto-costa: Flagrante e Prisão
31. vanessa-reis: Habeas Corpus
32. joao-fernandes: Violência Doméstica
33. larissa-souza: Crimes Patrimoniais
34. eduardo-gomes: Crimes de Trânsito
35. monica-alves: Defesa Criminal Geral`;

    // TOOL DE DETECÇÃO DE ESPECIALIDADE
    const detectSpecialtyTool = {
      type: "function",
      function: {
        name: "detect_legal_specialty",
        description: "Detecta a especialidade jurídica do problema do usuário e sugere o advogado mais adequado",
        parameters: {
          type: "object",
          properties: {
            specialty: {
              type: "string",
              enum: ["familia", "trabalhista", "civil", "previdenciario", "penal", "tributario", "ambiental", "imobiliario", "bancario", "empresarial", "administrativo", "internacional", "eleitoral", "outro"],
              description: "Área do direito identificada"
            },
            subSpecialty: {
              type: "string",
              description: "Sub-especialidade específica (ex: 'divórcio', 'cirurgia bariátrica SUS', 'golpe PIX')"
            },
            suggestedLawyerId: {
              type: "string",
              description: "ID do advogado mais adequado da lista, ou 'DYNAMIC' se não houver nenhum adequado"
            },
            confidence: {
              type: "number",
              description: "Confiança na detecção de 0 a 1"
            },
            reasoning: {
              type: "string",
              description: "Explicação breve do motivo da escolha"
            }
          },
          required: ["specialty", "subSpecialty", "confidence", "reasoning"]
        }
      }
    };

    // DETECÇÃO INTELIGENTE COM IA
    const detectSpecialtyWithAI = async (userMessage: string, conversationHistory: any[]): Promise<{
      lawyerId: string | null;
      dynamicLawyer: any | null;
      specialty: string;
      subSpecialty: string;
      confidence: number;
    }> => {
      try {
        console.log("🧠 [AI DETECTION] Analyzing:", userMessage.substring(0, 100));
        
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
                content: `Você é um sistema de triagem jurídica brasileira.

⚠️ REGRA CRÍTICA - QUANDO NÃO USAR O TOOL:
- Se a mensagem for apenas uma SAUDAÇÃO (oi, olá, bom dia, etc.) sem problema jurídico → NÃO use o tool
- Se a mensagem for pergunta genérica sem contexto jurídico → NÃO use o tool
- Se não conseguir identificar problema jurídico claro → NÃO use o tool
- NUNCA sugira transferência para saudações ou perguntas vagas

Só USE O TOOL quando identificar um PROBLEMA JURÍDICO CLARAMENTE DEFINIDO.

Quando usar o tool, analise:
1. A área do direito (família, trabalhista, civil, previdenciário, penal, etc.)
2. A sub-especialidade específica
3. O advogado mais adequado da lista abaixo

${lawyersListForAI}

IMPORTANTE:
- Se NENHUM advogado da lista for adequado, retorne suggestedLawyerId: "DYNAMIC"
- Para casos de cirurgia bariátrica, SUS, tratamento pelo SUS: helena-vasconcelos
- Para casos de anulação de casamento: rodrigo-barros
- Para casos de retificação de registro, mudança de nome: patricia-almeida
- Para problemas tributários, fiscais, imposto: DYNAMIC (tributario)
- Para problemas ambientais: DYNAMIC (ambiental)
- Para responsabilidade civil do Estado, prefeitura: DYNAMIC (administrativo)
- Seja específico na subSpecialty para ajudar a criar o advogado dinâmico se necessário`
              },
              ...conversationHistory.slice(-10),
              { role: "user", content: userMessage }
            ],
            tools: [detectSpecialtyTool],
            tool_choice: "auto"
          }),
        });

        if (!response.ok) {
          console.error("❌ [AI DETECTION] Error:", response.status);
          return { lawyerId: null, dynamicLawyer: null, specialty: 'geral', subSpecialty: '', confidence: 0 };
        }

        const data = await response.json();
        const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
        
        if (toolCall) {
          const args = JSON.parse(toolCall.function.arguments);
          console.log("🧠 [AI DETECTION] Result:", args);
          
          // Verificar se o reasoning indica informações insuficientes
          if (args.reasoning && (
            args.reasoning.toLowerCase().includes('insuficiente') || 
            args.reasoning.toLowerCase().includes('não forneceu') ||
            args.reasoning.toLowerCase().includes('sem contexto') ||
            args.reasoning.toLowerCase().includes('saudação') ||
            args.reasoning.toLowerCase().includes('apenas cumprimentou')
          )) {
            console.log("⚠️ [AI DETECTION] Insufficient context detected, skipping transfer");
            return { lawyerId: null, dynamicLawyer: null, specialty: 'geral', subSpecialty: '', confidence: 0 };
          }
          
          // Se sugeriu criar advogado dinâmico
          if (args.suggestedLawyerId === 'DYNAMIC' && args.confidence > 0.6) {
            const dynamicLawyer = createDynamicLawyer(args.specialty, args.subSpecialty);
            console.log("✨ [DYNAMIC LAWYER] Created:", dynamicLawyer.name);
            
            return {
              lawyerId: dynamicLawyer.id,
              dynamicLawyer,
              specialty: args.specialty,
              subSpecialty: args.subSpecialty,
              confidence: args.confidence
            };
          }
          
          // Advogado existente
          return {
            lawyerId: args.suggestedLawyerId,
            dynamicLawyer: null,
            specialty: args.specialty,
            subSpecialty: args.subSpecialty,
            confidence: args.confidence
          };
        }
        
        return { lawyerId: null, dynamicLawyer: null, specialty: 'geral', subSpecialty: '', confidence: 0 };
      } catch (error) {
        console.error("❌ [AI DETECTION] Exception:", error);
        return { lawyerId: null, dynamicLawyer: null, specialty: 'geral', subSpecialty: '', confidence: 0 };
      }
    };

    // NÍVEL 2: Detecção geral por categoria (fallback quando não encontra advogado específico)
    const detectGeneralSpecialty = (text: string): string | null => {
      const lowerText = text.toLowerCase();
      
      // Família
      if (/divórcio|separação|guarda|filho|filha|pensão|alimento|união.*estável|herança|inventário|casamento|cônjuge/i.test(lowerText)) {
        return 'familia';
      }
      
      // Trabalhista
      if (/demissão|demitido|trabalho|emprego|patrão|acidente.*trabalho|assédio|hora.*extra|rescisão|salário/i.test(lowerText)) {
        return 'trabalhista';
      }
      
      // Civil
      if (/cobrança|dívida|dano|contrato|despejo|aluguel|imóvel|consumidor|locação|propriedade/i.test(lowerText)) {
        return 'civil';
      }
      
      // Previdenciário
      if (/aposentadoria|inss|benefício|auxílio|bpc|loas|pensão.*morte|perícia|rural/i.test(lowerText)) {
        return 'previdenciario';
      }
      
      // Penal
      if (/preso|prisão|crime|polícia|acusado|habeas|violência|roubo|furto|trânsito|denúncia/i.test(lowerText)) {
        return 'penal';
      }
      
      return null;
    };

    // Lista de advogados por especialidade
    const lawyersBySpecialty: Record<string, string[]> = {
      familia: ['maria-santos', 'rafael-oliveira', 'juliana-costa', 'fernando-lima', 'patricia-almeida', 'rodrigo-barros'],
      trabalhista: ['ricardo-mendes', 'ana-rodrigues', 'lucas-ferreira', 'carla-souza', 'paulo-martins', 'beatriz-campos'],
      civil: ['gustavo-reis', 'camila-nunes', 'diego-santos', 'fernanda-lima', 'thiago-rocha', 'marina-costa', 'helena-vasconcelos', 'gabriel-monteiro', 'renata-machado', 'leonardo-prado', 'cristina-torres'],
      previdenciario: ['andre-silva', 'claudia-martins', 'marcos-oliveira', 'isabela-santos', 'renato-alves', 'sandra-lima'],
      penal: ['roberto-costa', 'vanessa-reis', 'joao-fernandes', 'larissa-souza', 'eduardo-gomes', 'monica-alves'],
    };

    // Map lawyer IDs to their specialties
    const getSpecialtyFromLawyerId = (lawyerId: string): string | null => {
      const specialtyMap: Record<string, string> = {
        'carlos-silva': 'geral',
        'maria-santos': 'familia',
        'rafael-oliveira': 'familia',
        'juliana-costa': 'familia',
        'fernando-lima': 'familia',
        'patricia-almeida': 'familia',
        'rodrigo-barros': 'familia',
        'ricardo-mendes': 'trabalhista',
        'ana-rodrigues': 'trabalhista',
        'lucas-ferreira': 'trabalhista',
        'carla-souza': 'trabalhista',
        'paulo-martins': 'trabalhista',
        'beatriz-campos': 'trabalhista',
        'gustavo-reis': 'civil',
        'camila-nunes': 'civil',
        'diego-santos': 'civil',
        'fernanda-lima': 'civil',
        'thiago-rocha': 'civil',
        'marina-costa': 'civil',
        'helena-vasconcelos': 'civil',
        'gabriel-monteiro': 'civil',
        'renata-machado': 'civil',
        'leonardo-prado': 'civil',
        'cristina-torres': 'civil',
        'andre-silva': 'previdenciario',
        'claudia-martins': 'previdenciario',
        'marcos-oliveira': 'previdenciario',
        'isabela-santos': 'previdenciario',
        'renato-alves': 'previdenciario',
        'sandra-lima': 'previdenciario',
        'roberto-costa': 'penal',
        'vanessa-reis': 'penal',
        'joao-fernandes': 'penal',
        'larissa-souza': 'penal',
        'eduardo-gomes': 'penal',
        'monica-alves': 'penal',
      };
      return specialtyMap[lawyerId] || null;
    };

    // LEAD COLLECTION LOGIC
    let needsLeadCollection = false;
    let leadData: { hasName: boolean; hasContact: boolean; problemDetected: boolean; specialty?: string; leadId?: string; notificationSent?: boolean } = {
      hasName: false,
      hasContact: false,
      problemDetected: false
    };

    // Check if we need to collect lead info (always check, not just after 5 messages)
    if (sessionId) {
      try {
        console.log("🔍 Checking for existing lead with session:", sessionId);
        
        // Check existing lead in database
        const leadCheckResponse = await fetch(`${SUPABASE_URL}/rest/v1/leads?session_id=eq.${sessionId}&select=*`, {
          headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY!,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
          }
        });
        
        if (!leadCheckResponse.ok) {
          console.error("❌ Failed to check leads:", leadCheckResponse.status, await leadCheckResponse.text());
          throw new Error("Failed to check existing leads");
        }
        
        const existingLeads = await leadCheckResponse.json();
        console.log("📊 Existing leads found:", existingLeads.length);
        
        if (existingLeads && existingLeads.length > 0) {
          const lead = existingLeads[0];
          leadData.hasName = !!lead.name;
          leadData.hasContact = !!(lead.phone || lead.email);
          leadData.problemDetected = !!lead.specialty;
          leadData.leadId = lead.id;
          leadData.notificationSent = lead.notification_sent || false;
          
          console.log("✅ Lead exists:", { 
            leadId: leadData.leadId, 
            hasName: leadData.hasName, 
            hasContact: leadData.hasContact,
            notificationSent: leadData.notificationSent
          });
          
          // Update message count and conversation history
          const updateResponse = await fetch(`${SUPABASE_URL}/rest/v1/leads?session_id=eq.${sessionId}`, {
            method: 'PATCH',
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY!,
              'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
              message_count: messageCount,
              conversation_history: messages
            })
          });
          
          if (!updateResponse.ok) {
            console.error("❌ Failed to update lead:", await updateResponse.text());
          } else {
            console.log("✅ Lead updated with message count:", messageCount);
          }

          // DISPARO DE NOTIFICAÇÃO: Se tem nome + WhatsApp + 8+ mensagens + não enviou ainda
          console.log("📲 Checking notification conditions:", {
            hasName: leadData.hasName,
            hasContact: leadData.hasContact,
            messageCount,
            notificationSent: leadData.notificationSent
          });
          
          if (leadData.hasName && leadData.hasContact && messageCount >= 8 && !leadData.notificationSent) {
            console.log("🚀 Triggering WhatsApp notification for lead:", leadData.leadId);
            
            // Gerar resumo do caso usando a IA
            try {
              const summaryPrompt = `Com base nesta conversa, crie um resumo profissional do caso jurídico em 2-3 frases, incluindo:
- Problema principal
- Fatos relevantes mencionados
- Próximos passos sugeridos

Seja objetivo e direto.`;

              const summaryResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${LOVABLE_API_KEY}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  model: "google/gemini-2.5-flash",
                  messages: [
                    ...messages,
                    { role: "user", content: summaryPrompt }
                  ],
                  stream: false,
                }),
              });

              let caseSummary = "Resumo não disponível";
              if (summaryResponse.ok) {
                const summaryData = await summaryResponse.json();
                caseSummary = summaryData.choices?.[0]?.message?.content || caseSummary;
              }

              // Salvar resumo no banco
              const saveSummaryResponse = await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${leadData.leadId}`, {
                method: 'PATCH',
                headers: {
                  'apikey': SUPABASE_SERVICE_ROLE_KEY!,
                  'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                  'Content-Type': 'application/json',
                  'Prefer': 'return=minimal'
                },
                body: JSON.stringify({
                  case_summary: caseSummary,
                  case_details: {
                    message_count: messageCount,
                    conversation_started: messages[0]?.content || "",
                    last_message: messages[messages.length - 1]?.content || ""
                  }
                })
              });
              
              if (!saveSummaryResponse.ok) {
                console.error("❌ Failed to save case summary:", await saveSummaryResponse.text());
              } else {
                console.log("✅ Case summary saved");
              }

              // Buscar dados completos do lead para enviar
              const fullLeadResponse = await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${leadData.leadId}&select=*`, {
                headers: {
                  'apikey': SUPABASE_SERVICE_ROLE_KEY!,
                  'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
                }
              });
              
              if (!fullLeadResponse.ok) {
                console.error("❌ Failed to fetch full lead data:", await fullLeadResponse.text());
                throw new Error("Failed to fetch full lead data");
              }

              const fullLeadData = await fullLeadResponse.json();
              console.log("📋 Full lead data retrieved:", fullLeadData.length > 0);
              
              if (fullLeadData && fullLeadData.length > 0) {
                // Chamar edge function de notificação via Supabase client
                console.log("📤 Sending WhatsApp notification for lead:", leadData.leadId);
                
                const notificationResult = await fetch(`${SUPABASE_URL}/functions/v1/send-whatsapp-notification`, {
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    leadData: fullLeadData[0]
                  })
                });
                
                if (!notificationResult.ok) {
                  const errorText = await notificationResult.text();
                  console.error("❌ Failed to send WhatsApp notification:", notificationResult.status, errorText);
                } else {
                  console.log("✅ WhatsApp notification API called successfully");
                }

                // Marcar notificação como enviada
                const markSentResponse = await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${leadData.leadId}`, {
                  method: 'PATCH',
                  headers: {
                    'apikey': SUPABASE_SERVICE_ROLE_KEY!,
                    'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                  },
                  body: JSON.stringify({
                    notification_sent: true,
                    notification_sent_at: new Date().toISOString()
                  })
                });
                
                if (!markSentResponse.ok) {
                  console.error("❌ Failed to mark notification as sent:", await markSentResponse.text());
                } else {
                  console.log("✅ Notification marked as sent for lead:", leadData.leadId);
                }
              }
            } catch (notificationError) {
              console.error("Error sending notification:", notificationError);
              // Não falhar a requisição principal por erro na notificação
            }
          }
          
        } else {
          // Create new lead entry (CRIAR IMEDIATAMENTE, não esperar 5 mensagens)
          console.log("🆕 Creating new lead for session:", sessionId);
          
          const createLeadResponse = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY!,
              'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=representation'
            },
            body: JSON.stringify({
              session_id: sessionId,
              message_count: messageCount,
              assigned_lawyer: currentLawyerId,
              specialty: getSpecialtyFromLawyerId(currentLawyerId),
              conversation_history: messages
            })
          });
          
          if (!createLeadResponse.ok) {
            const errorText = await createLeadResponse.text();
            console.error("❌ Failed to create lead:", createLeadResponse.status, errorText);
            throw new Error(`Failed to create lead: ${errorText}`);
          }
          
          const createdLead = await createLeadResponse.json();
          console.log("✅ Lead created successfully:", createdLead[0]?.id);
          
          leadData.problemDetected = true;
          leadData.leadId = createdLead[0]?.id;
        }

        // Detect if user accepted WhatsApp continuation
        const lastUserMessage = messages.filter((m: any) => m.role === 'user').slice(-1)[0]?.content.toLowerCase() || '';
        const acceptPatterns = /\b(sim|quero|pode|claro|pode ser|ok|tá|ta|beleza|aceito|por favor|gostaria|vamos|queria|vamo|bora)\b/i;
        const userAcceptedWhatsApp = acceptPatterns.test(lastUserMessage);
        
        // Check if specialist just asked about WhatsApp continuation
        const lastAssistantMessage = messages.filter((m: any) => m.role === 'assistant').slice(-2)[0]?.content.toLowerCase() || '';
        const askedAboutWhatsApp = lastAssistantMessage.includes('whatsapp') && 
                                   (lastAssistantMessage.includes('gostaria') || 
                                    lastAssistantMessage.includes('continuar') || 
                                    lastAssistantMessage.includes('prosseguir'));
        
        // If user accepted and we don't have their name yet, start collecting
        if (userAcceptedWhatsApp && askedAboutWhatsApp && !leadData.hasName) {
          needsLeadCollection = true;
          console.log("💬 Lead accepted WhatsApp, collecting name");
        } 
        // If we have name but no contact, ask for contact
        else if (leadData.hasName && !leadData.hasContact) {
          needsLeadCollection = true;
          console.log("💬 Has name, collecting contact");
        }
        
      } catch (error) {
        console.error("❌ Error checking/creating lead:", error);
      }
    }
    
    // Verificar se precisa transferir
    let needsTransfer = false;
    let newLawyerId: string | null = null;
    let pendingTransferLawyer: string | null = null;
    let shouldAskPermission = false;
    
    if (currentLawyerId === 'carlos-silva' && messages.length > 0) {
      const lastUserMessage = messages.filter((m: any) => m.role === 'user').slice(-1)[0];
      
      // Verificar se já existe transferência pendente
      let existingPendingTransfer: string | null = null;
      if (sessionId && leadData.leadId) {
        try {
          const pendingCheckResponse = await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${leadData.leadId}&select=pending_transfer_lawyer`, {
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY!,
              'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
            }
          });
          
          if (pendingCheckResponse.ok) {
            const pendingData = await pendingCheckResponse.json();
            existingPendingTransfer = pendingData[0]?.pending_transfer_lawyer;
            console.log("📋 Pending transfer check:", existingPendingTransfer);
          }
        } catch (error) {
          console.error("Error checking pending transfer:", error);
        }
      }
      
      if (lastUserMessage) {
        // Sempre detectar a especialidade da mensagem atual primeiro
        let currentDetection = null;
        if (!isGreetingOnly(lastUserMessage.content)) {
          currentDetection = await detectSpecialtyWithAI(lastUserMessage.content, messages);
          console.log("🔍 [CONTEXT CHECK] Current detection:", currentDetection);
        }
        
        // Se já tem transferência pendente, verificar confirmação OU mudança de contexto
        if (existingPendingTransfer) {
          // Se detectou NOVA especialidade diferente da pendente, substituir
          if (currentDetection?.lawyerId && currentDetection.confidence > 0.75 && currentDetection.lawyerId !== existingPendingTransfer) {
            console.log(`🔄 [CONTEXT CHANGE] New specialty detected, replacing pending transfer`);
            console.log(`   Old: ${existingPendingTransfer}`);
            console.log(`   New: ${currentDetection.lawyerId}`);
            
            // Limpar transferência antiga e sugerir nova
            newLawyerId = currentDetection.lawyerId;
            pendingTransferLawyer = newLawyerId;
            shouldAskPermission = true;
            
            // Atualizar no banco
            if (sessionId && leadData.leadId) {
              const updateData: any = {
                pending_transfer_lawyer: newLawyerId,
                detected_problem: currentDetection.subSpecialty
              };
              
              if (currentDetection.dynamicLawyer) {
                updateData.dynamic_lawyer = currentDetection.dynamicLawyer;
                console.log("✨ [DYNAMIC LAWYER] Saved to lead:", currentDetection.dynamicLawyer.name);
              }
              
              console.log("📝 [DETECTED PROBLEM] Saved:", currentDetection.subSpecialty);
              
              await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${leadData.leadId}`, {
                method: 'PATCH',
                headers: {
                  'apikey': SUPABASE_SERVICE_ROLE_KEY!,
                  'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                  'Content-Type': 'application/json',
                  'Prefer': 'return=minimal'
                },
                body: JSON.stringify(updateData)
              });
            }
          } 
          // Se NÃO detectou nova especialidade, verificar confirmação da pendente
          else {
            // Regex mais flexível para capturar variações de digitação (ssim, sssim, etc.)
            const confirmationPhrases = /(s+im|sim|quero|pode|claro|pode ser|ok|tá|ta|beleza|aceito|por favor|gostaria|vamos|queria|vamo|bora|autorizo|pode sim|tudo bem|tranquilo|blz|isso|exato|correto|afirmativo)/i;
            const userConfirmed = confirmationPhrases.test(lastUserMessage.content.toLowerCase());
            
            console.log(`🔍 [CONFIRMATION CHECK] User message: "${lastUserMessage.content}" | Confirmed: ${userConfirmed}`);
            
            if (userConfirmed) {
              needsTransfer = true;
              newLawyerId = existingPendingTransfer;
              console.log(`✅ User confirmed transfer to: ${newLawyerId}`);
              
              // Limpar pending transfer após confirmação
              if (sessionId && leadData.leadId) {
                await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${leadData.leadId}`, {
                  method: 'PATCH',
                  headers: {
                    'apikey': SUPABASE_SERVICE_ROLE_KEY!,
                    'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                  },
                  body: JSON.stringify({
                    pending_transfer_lawyer: null
                  })
                });
              }
            } else {
              console.log("❌ User did not confirm transfer, continuing with Carlos");
            }
          }
        } else {
          // Não tem transferência pendente
          if (currentDetection?.lawyerId && currentDetection.confidence > 0.75) {
            newLawyerId = currentDetection.lawyerId;
            pendingTransferLawyer = newLawyerId;
            shouldAskPermission = true;
            console.log(`🤔 [AI DETECTION] Asking permission to transfer to: ${newLawyerId} (confidence: ${currentDetection.confidence})`);
            
            // Salvar pending transfer, advogado dinâmico e problema detectado no banco
            if (sessionId && leadData.leadId) {
              const updateData: any = {
                pending_transfer_lawyer: newLawyerId,
                detected_problem: currentDetection.subSpecialty
              };
              
              if (currentDetection.dynamicLawyer) {
                updateData.dynamic_lawyer = currentDetection.dynamicLawyer;
                console.log("✨ [DYNAMIC LAWYER] Saved to lead:", currentDetection.dynamicLawyer.name);
              }
              
              console.log("📝 [DETECTED PROBLEM] Saved:", currentDetection.subSpecialty);
              
              await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${leadData.leadId}`, {
                method: 'PATCH',
                headers: {
                  'apikey': SUPABASE_SERVICE_ROLE_KEY!,
                  'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                  'Content-Type': 'application/json',
                  'Prefer': 'return=minimal'
                },
                body: JSON.stringify(updateData)
              });
            }
          }
        }
      }
    }

    // Definir prompt baseado no advogado atual
    let systemPrompt = `Você é Dr. Carlos Silva, advogado brasileiro de 38 anos.

⚠️ REGRA CRÍTICA - NÃO REPITA APRESENTAÇÃO:
Você JÁ se apresentou na primeira mensagem automática ("Olá! Sou o Dr. Carlos Silva. Em que posso ajudá-lo hoje?").
NUNCA mais diga "Sou o Dr. Carlos Silva" ou se apresente novamente.

PERSONALIDADE - VOCÊ FALA COMO UM BRASILEIRO REAL:
✅ Use: "vc", "pq", "tbm", "né", "tá", "pra"
✅ Use emojis ocasionalmente: 😊, 👍, 🤔, 😕 (não em toda mensagem)
✅ Comece frases com: "Ah", "Então", "Olha", "Bom", "Eita", "Poxa"
✅ Contrações: "tá", "tô", "vou", "é"
✅ Perguntas curtas e diretas

❌ Evite: "Hmm...", "Compreendo sua situação", "Pelo que você me relatou"
❌ Evite: Formalidade excessiva tipo "juridicamente falando"
❌ Evite: Repetir o que a pessoa disse
❌ Evite: Sempre fazer pergunta - às vezes só comente

COMO VOCÊ FALA (exemplos reais):
✅ "Ah entendi. Seria tipo uma doação em vida ou é mais pra herança?"
✅ "Olha, nesse caso a gente precisa ver se tem testamento"
✅ "Então, tem algumas opções aí"
✅ "Eita, situação complicada 😕"
✅ "Ah sim, isso é inventário. Seus pais ainda são vivos?"
✅ "Vc tem algum documento sobre isso?"
✅ "Bom, aí depende né. Seria doação ou herança?"
✅ "Poxa, que situação difícil"

TAMANHO DAS RESPOSTAS:
- MÁXIMO 1-3 frases curtas
- Vá direto ao ponto
- Se for perguntar algo, pergunte direto sem rodeios

REGRAS IMPORTANTES:
1. NUNCA repita o que a pessoa disse de volta pra ela
2. NÃO use formalidades excessivas
3. Às vezes use "vc" ao invés de "você" 
4. Às vezes use "pq" ao invés de "porque"
5. Às vezes só dê uma resposta curta sem perguntar nada
6. Seja natural como se tivesse mandando mensagem no WhatsApp

TRANSFERÊNCIA:
Quando identificar área específica, fale direto:
✅ "Ah entendi. Vou te passar pra Dra. Maria, ela é especialista nisso"
✅ "Bom, esse caso é da Dra. Juliana. Vou te conectar com ela agora"
❌ "Perfeito! Vou te passar agora para a Dra. Maria Santos, nossa especialista..."

VARIAÇÃO DE ESTILO (use diferentes formas):
- Às vezes mais sério, às vezes mais casual
- Às vezes emoji, às vezes não
- Às vezes abreviação, às vezes palavra completa
- Varie o tamanho: 1 frase, 2 frases, raramente 3`;

    // Se detectou especialidade, retornar mensagem hardcoded de autorização
    if (shouldAskPermission && pendingTransferLawyer) {
      // Buscar informações do advogado (pode ser dinâmico)
      let targetLawyerName = 'especialista';
      let targetGender = 'M';
      
      // Verificar se é advogado dinâmico
      if (pendingTransferLawyer.startsWith('dynamic-')) {
        try {
          const leadResponse = await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${leadData.leadId}&select=dynamic_lawyer`, {
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY!,
              'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
            }
          });
          
          if (leadResponse.ok) {
            const leadDataResult = await leadResponse.json();
            const dynamicLawyer = leadDataResult[0]?.dynamic_lawyer;
            if (dynamicLawyer) {
              targetLawyerName = dynamicLawyer.name;
              targetGender = dynamicLawyer.gender || 'M';
              console.log("✨ [DYNAMIC LAWYER] Using:", targetLawyerName);
            }
          }
        } catch (error) {
          console.error("Error fetching dynamic lawyer:", error);
        }
      } else {
        // Advogado estático
        const lawyerNames: Record<string, { name: string; gender: string }> = {
          'maria-santos': { name: 'Dra. Maria Santos', gender: 'F' },
          'rafael-oliveira': { name: 'Dr. Rafael Oliveira', gender: 'M' },
          'juliana-costa': { name: 'Dra. Juliana Costa', gender: 'F' },
          'fernando-lima': { name: 'Dr. Fernando Lima', gender: 'M' },
          'patricia-almeida': { name: 'Dra. Patrícia Almeida', gender: 'F' },
          'rodrigo-barros': { name: 'Dr. Rodrigo Barros', gender: 'M' },
          'ricardo-mendes': { name: 'Dr. Ricardo Mendes', gender: 'M' },
          'ana-rodrigues': { name: 'Dra. Ana Rodrigues', gender: 'F' },
          'lucas-ferreira': { name: 'Dr. Lucas Ferreira', gender: 'M' },
          'carla-souza': { name: 'Dra. Carla Souza', gender: 'F' },
          'paulo-martins': { name: 'Dr. Paulo Martins', gender: 'M' },
          'beatriz-campos': { name: 'Dra. Beatriz Campos', gender: 'F' },
          'andre-silva': { name: 'Dr. André Silva', gender: 'M' },
          'claudia-martins': { name: 'Dra. Cláudia Martins', gender: 'F' },
          'marcos-oliveira': { name: 'Dr. Marcos Oliveira', gender: 'M' },
          'isabela-santos': { name: 'Dra. Isabela Santos', gender: 'F' },
          'renato-alves': { name: 'Dr. Renato Alves', gender: 'M' },
          'sandra-lima': { name: 'Dra. Sandra Lima', gender: 'F' },
          'roberto-costa': { name: 'Dr. Roberto Costa', gender: 'M' },
          'vanessa-reis': { name: 'Dra. Vanessa Reis', gender: 'F' },
          'joao-fernandes': { name: 'Dr. João Fernandes', gender: 'M' },
          'larissa-souza': { name: 'Dra. Larissa Souza', gender: 'F' },
          'eduardo-gomes': { name: 'Dr. Eduardo Gomes', gender: 'M' },
          'monica-alves': { name: 'Dra. Mônica Alves', gender: 'F' },
          'gustavo-reis': { name: 'Dr. Gustavo Reis', gender: 'M' },
          'camila-nunes': { name: 'Dra. Camila Nunes', gender: 'F' },
          'diego-santos': { name: 'Dr. Diego Santos', gender: 'M' },
          'fernanda-lima': { name: 'Dra. Fernanda Lima', gender: 'F' },
          'thiago-rocha': { name: 'Dr. Thiago Rocha', gender: 'M' },
          'marina-costa': { name: 'Dra. Marina Costa', gender: 'F' },
          'helena-vasconcelos': { name: 'Dra. Helena Vasconcelos', gender: 'F' },
          'gabriel-monteiro': { name: 'Dr. Gabriel Monteiro', gender: 'M' },
          'renata-machado': { name: 'Dra. Renata Machado', gender: 'F' },
          'leonardo-prado': { name: 'Dr. Leonardo Prado', gender: 'M' },
          'cristina-torres': { name: 'Dra. Cristina Torres', gender: 'F' },
        };
        
        const lawyerData = lawyerNames[pendingTransferLawyer];
        if (lawyerData) {
          targetLawyerName = lawyerData.name;
          targetGender = lawyerData.gender;
        }
      }
      
      const pronoun = targetGender === 'F' ? 'ela' : 'ele';
      const shortName = targetLawyerName.split(' ').slice(1).join(' ');
      
      // Retornar diretamente mensagem de permissão sem chamar IA
      const permissionMessages = [
        `Ah, isso é caso de ${shortName}. Posso te passar pra ${pronoun} que é especialista nisso? 👍`,
        `Olha, esse caso é com ${targetLawyerName}. Transfiro pra ${pronoun}?`,
        `Bom, aí é com ${shortName}. Passo pra ${pronoun}? É especialista nisso.`,
      ];
      
      const randomMessage = permissionMessages[Math.floor(Math.random() * permissionMessages.length)];
      
      console.log("🤖 Returning permission message for:", targetLawyerName);
      
      // Retornar diretamente sem chamar a IA
      return new Response(
        `data: ${JSON.stringify({ choices: [{ delta: { content: randomMessage } }] })}\n\ndata: [DONE]\n\n`,
        { headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' } }
      );
    }

    if (currentLawyerId !== 'carlos-silva') {
      // Obter nome do advogado atual
      const lawyerNames: Record<string, string> = {
        'maria-santos': 'Dra. Maria Santos',
        'rafael-oliveira': 'Dr. Rafael Oliveira',
        'juliana-costa': 'Dra. Juliana Costa',
        'fernando-lima': 'Dr. Fernando Lima',
        'patricia-almeida': 'Dra. Patrícia Almeida',
        'rodrigo-barros': 'Dr. Rodrigo Barros',
        'ricardo-mendes': 'Dr. Ricardo Mendes',
        'ana-rodrigues': 'Dra. Ana Rodrigues',
        'lucas-ferreira': 'Dr. Lucas Ferreira',
        'carla-souza': 'Dra. Carla Souza',
        'paulo-martins': 'Dr. Paulo Martins',
        'beatriz-campos': 'Dra. Beatriz Campos',
        'andre-silva': 'Dr. André Silva',
        'claudia-martins': 'Dra. Cláudia Martins',
        'marcos-oliveira': 'Dr. Marcos Oliveira',
        'isabela-santos': 'Dra. Isabela Santos',
        'renato-alves': 'Dr. Renato Alves',
        'sandra-lima': 'Dra. Sandra Lima',
        'roberto-costa': 'Dr. Roberto Costa',
        'vanessa-reis': 'Dra. Vanessa Reis',
        'joao-fernandes': 'Dr. João Fernandes',
        'larissa-souza': 'Dra. Larissa Souza',
        'eduardo-gomes': 'Dr. Eduardo Gomes',
        'monica-alves': 'Dra. Mônica Alves',
        'gustavo-reis': 'Dr. Gustavo Reis',
        'camila-nunes': 'Dra. Camila Nunes',
        'diego-santos': 'Dr. Diego Santos',
        'fernanda-lima': 'Dra. Fernanda Lima',
        'thiago-rocha': 'Dr. Thiago Rocha',
        'marina-costa': 'Dra. Marina Costa',
        'helena-vasconcelos': 'Dra. Helena Vasconcelos',
        'gabriel-monteiro': 'Dr. Gabriel Monteiro',
        'renata-machado': 'Dra. Renata Machado',
        'leonardo-prado': 'Dr. Leonardo Prado',
        'cristina-torres': 'Dra. Cristina Torres',
      };
      
      const lawyerName = lawyerNames[currentLawyerId] || 'Dr./Dra. Especialista';
      
      // Verificar se é uma transferência (primeira mensagem do especialista)
      const isFirstMessage = isTransfer === true;
      
      // Buscar o problema detectado do banco quando é primeira mensagem
      let userProblem = '';
      if (isFirstMessage && sessionId) {
        try {
          const leadResponse = await fetch(`${SUPABASE_URL}/rest/v1/leads?session_id=eq.${sessionId}&select=detected_problem`, {
            headers: {
              'apikey': SUPABASE_SERVICE_ROLE_KEY!,
              'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
            }
          });
          
          if (leadResponse.ok) {
            const leadDataResult = await leadResponse.json();
            userProblem = leadDataResult[0]?.detected_problem || '';
            console.log('📋 [FIRST MESSAGE] User problem retrieved:', userProblem);
          }
        } catch (error) {
          console.error("Error fetching detected problem:", error);
        }
      }
      
      systemPrompt = `⚠️ CRÍTICO: RESPONDA EXCLUSIVAMENTE EM PORTUGUÊS BRASILEIRO. NUNCA use inglês ou outros idiomas.

VOCÊ É ${lawyerName}, advogado especialista brasileiro.
SEU NOME É ${lawyerName}. SEU ID É ${currentLawyerId}.

${isFirstMessage ? `PRIMEIRA MENSAGEM (Transferência):
O problema do usuário é: "${userProblem || 'precisa de ajuda jurídica'}"

RESPONDA EXATAMENTE assim:
"Olá! Sou ${lawyerName.split(' ')[1]} ${lawyerName.split(' ')[2] || ''}. Vi que você precisa de ${userProblem || 'ajuda jurídica'}. [pergunta específica e direta sobre o caso]"

EXEMPLOS:
- Para "autorização para uso de canabidiol": "Olá! Sou a Dra. Helena. Vi que você precisa de autorização para canabidiol. É pra você ou pra um familiar?"
- Para "cirurgia bariátrica pelo SUS": "Olá! Sou a Dra. Helena. Vi que você precisa de cirurgia bariátrica pelo SUS. Já passou por consulta com nutricionista?"
- Para "divórcio consensual": "Olá! Sou a Dra. Maria. Vi que você precisa de divórcio consensual. Vocês já têm acordo sobre partilha?"

SEJA NATURAL, BRASILEIRO E DIRETO. Use "você" ou "vc", faça uma pergunta específica relevante ao caso.
` : ''}

ESTILO (Brasileiro Natural):
- Máximo 2-3 frases curtas
- Use: "vc", "pra", "né", "tá"
- Emojis ocasionais: 😊, 👍, 😕
- NÃO use "Hmm...", "Veja bem...", "Compreendo sua situação"

FLUXO RÁPIDO:
1. Pergunte o essencial (1-2 mensagens)
2. Dê orientação prática
3. Peça WhatsApp: "Me passa seu WhatsApp? Facilita pra eu te ajudar melhor"

PROIBIDO:
- Inglês ou qualquer língua que não seja português
- Repetir o que o cliente disse
- Formalidade excessiva
- Textos longos`;
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

    // Se precisa coletar lead, enviar dados de coleta antes do stream
    if (needsLeadCollection) {
      const encoder = new TextEncoder();
      let leadQuestion = '';
      
      if (!leadData.hasName) {
        leadQuestion = 'Qual é o seu nome?';
      } else if (!leadData.hasContact) {
        leadQuestion = 'Qual o seu WhatsApp para contato?';
      }
      
      const leadCollectionData = `data: ${JSON.stringify({ collectLead: true, question: leadQuestion })}\n\n`;
      
      // Usar TransformStream com abordagem manual
      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();
      
      // Processar em background
      (async () => {
        try {
          // Primeiro, escrever dados de coleta
          await writer.write(encoder.encode(leadCollectionData));
          
          // Depois, copiar a resposta da IA
          if (response.body) {
            const reader = response.body.getReader();
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              await writer.write(value);
            }
          }
        } catch (error) {
          console.error("Error streaming lead collection response:", error);
        } finally {
          await writer.close();
        }
      })();
      
      return new Response(readable, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    }
    
    // Se precisa transferir, enviar dados de transferência antes do stream
    if (needsTransfer && newLawyerId) {
      const encoder = new TextEncoder();
      const transferData = `data: ${JSON.stringify({ transfer: true, newLawyerId })}\n\n`;
      
      // Usar TransformStream com abordagem manual
      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();
      
      // Processar em background
      (async () => {
        try {
          // Primeiro, escrever dados de transferência
          await writer.write(encoder.encode(transferData));
          
          // Depois, copiar a resposta da IA
          if (response.body) {
            const reader = response.body.getReader();
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              await writer.write(value);
            }
          }
        } catch (error) {
          console.error("Error streaming transfer response:", error);
        } finally {
          await writer.close();
        }
      })();
      
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
