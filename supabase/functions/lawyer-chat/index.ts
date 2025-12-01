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

    // NÍVEL 1: Detecção específica por sub-especialidade (direciona para advogado específico)
    const detectSpecificLawyer = (text: string): string | null => {
      const lowerText = text.toLowerCase();
      
      // PLANO DE SAÚDE - Prioridade máxima
      if (/plano.*de?.*saúde|cirurgia.*negada|tratamento.*negado|medicamento.*negado|procedimento.*negado|cobertura.*negada|UTI.*negada|home.*care|unimed|bradesco.*saúde|amil|hapvida|sul.*américa|ANS|carência.*plano|reajuste.*abusivo.*saúde|autorização.*negada/i.test(lowerText)) {
        return 'helena-vasconcelos';
      }
      
      // GOLPES DIGITAIS / CRIMES CIBERNÉTICOS
      if (/golpe.*pix|golpe.*whatsapp|golpe.*internet|conta.*invadida|hackeado|hackear|perfil.*falso|vazamento.*dados|lgpd|fotos.*vazadas|nudes.*vazados|extorsão|ransomware|fake.*news|deepfake|stalker|perseguição.*online|fraude.*digital|phishing|crimes.*digitais/i.test(lowerText)) {
        return 'gabriel-monteiro';
      }
      
      // ERRO MÉDICO
      if (/erro.*médico|negligência.*médica|negligência.*hospitalar|cirurgia.*errada|diagnóstico.*errado|infecção.*hospitalar|imperícia|imprudência.*médica|parto.*errado|sequela|morte.*hospital|morte.*médico|tratamento.*errado|medicamento.*errado|médico.*errou|cirurgia.*mal.*feita/i.test(lowerText)) {
        return 'renata-machado';
      }
      
      // PROBLEMAS COM COMPANHIAS AÉREAS
      if (/voo.*cancelado|voo.*atrasado|overbooking|mala.*extraviada|bagagem.*perdida|companhia.*aérea|gol|latam|azul|avianca|reembolso.*passagem|conexão.*perdida|atraso.*aeroporto|perdi.*voo|extravio.*bagagem|não.*embarcaram/i.test(lowerText)) {
        return 'leonardo-prado';
      }
      
      // MULTAS DE TRÂNSITO (Administrativo)
      if (/multa.*trânsito|multa.*de.*trânsito|recurso.*multa|pontos.*cnh|suspensão.*cnh|cassação.*cnh|detran|radar|blitz|autuação|auto.*infração|jari|cetran|multa.*injusta|pontos.*carteira/i.test(lowerText)) {
        return 'cristina-torres';
      }
      
      // CONSUMIDOR - Prioridade alta (negativação indevida, etc.)
      if (/negativação|negativado|negativada|nome.*sujo|serasa|spc|boa.*vista|cobrança.*indevida|cobraram.*errado|fraude.*cartão|clonaram|não.*reconheço|débito.*automático/i.test(lowerText)) {
        return 'marina-costa';
      }
      
      // PENSÃO POR MORTE
      if (/pensão.*(por|de)?.*morte|pai.*morreu|mãe.*morreu|marido.*morreu|esposa.*morreu|viúva|viúvo|dependente.*faleceu/i.test(lowerText)) {
        return 'isabela-santos';
      }
      
      // ACIDENTE DE TRABALHO
      if (/acidente.*(de|no).*trabalho|machucou.*trabalho|lesão.*trabalho|doença.*ocupacional|CAT|afastado.*trabalho|LER|DORT/i.test(lowerText)) {
        return 'ana-rodrigues';
      }
      
      // ASSÉDIO MORAL
      if (/assédio.*moral|humilha|humilhado|humilhação|chefe.*xinga|ambiente.*hostil|perseguição.*trabalho|constrangimento.*trabalho/i.test(lowerText)) {
        return 'lucas-ferreira';
      }
      
      // ASSÉDIO SEXUAL
      if (/assédio.*sexual|cantada|investida.*sexual|importunação|abuso.*sexual.*trabalho|proposta.*indecente|toque.*indesejado/i.test(lowerText)) {
        return 'carla-souza';
      }
      
      // HORAS EXTRAS
      if (/hora.*extra|horas.*extras|não.*paga.*hora|banco.*de.*horas|adicional.*noturno|excesso.*jornada/i.test(lowerText)) {
        return 'paulo-martins';
      }
      
      // RESCISÃO INDIRETA
      if (/rescisão.*indireta|salário.*atrasado|não.*paga.*salário|falta.*grave.*empregador|forçando.*pedir.*demissão/i.test(lowerText)) {
        return 'beatriz-campos';
      }
      
      // DIVÓRCIO
      if (/divórcio|divorciar|separação|separar.*casal|quero.*me.*separar|ex-marido|ex-esposa|fim.*do.*casamento/i.test(lowerText)) {
        return 'maria-santos';
      }
      
      // GUARDA DE FILHOS
      if (/guarda.*(de|do|da)?.*(filho|filha|criança|menor)|visitação|convivência|não.*deixa.*ver|tirar.*guarda|perder.*guarda/i.test(lowerText)) {
        return 'rafael-oliveira';
      }
      
      // PENSÃO ALIMENTÍCIA
      if (/pensão.*alimentícia|pensão.*de.*alimentos|não.*paga.*pensão|pensão.*atrasada|aumentar.*pensão|diminuir.*pensão|exoneração/i.test(lowerText)) {
        return 'juliana-costa';
      }
      
      // ALIENAÇÃO PARENTAL
      if (/alienação.*parental|manipula|fala.*mal|afastar.*do.*pai|afastar.*da.*mãe|impede.*visita|dificulta.*convivência/i.test(lowerText)) {
        return 'fernando-lima';
      }
      
      // UNIÃO ESTÁVEL
      if (/união.*estável|companheiro|companheira|moramos.*juntos|vivemos.*juntos|reconhecer.*união|dissolução.*união/i.test(lowerText)) {
        return 'patricia-almeida';
      }
      
      // INVENTÁRIO E HERANÇA
      if (/herança|inventário|bens.*do.*falecido|partilha.*herança|herdeiro|espólio|testamento|arrolamento/i.test(lowerText)) {
        return 'rodrigo-barros';
      }
      
      // DEMISSÃO
      if (/demissão|demitido|demitida|mandaram.*embora|dispensado|perdeu.*emprego|justa.*causa|verbas.*rescisórias/i.test(lowerText)) {
        return 'ricardo-mendes';
      }
      
      // APOSENTADORIA
      if (/aposentadoria|aposentar|quero.*aposentar|já.*posso.*aposentar|tempo.*de.*contribuição|aposentadoria.*por.*idade/i.test(lowerText)) {
        return 'andre-silva';
      }
      
      // AUXÍLIO-DOENÇA
      if (/auxílio.*doença|auxílio-doença|negado.*auxílio|cortaram.*auxílio|perícia.*médica|não.*consigo.*trabalhar|afastado.*doença/i.test(lowerText)) {
        return 'claudia-martins';
      }
      
      // BPC/LOAS
      if (/bpc|loas|benefício.*assistencial|idoso.*carente|baixa.*renda|nunca.*contribui|deficiente.*carente/i.test(lowerText)) {
        return 'marcos-oliveira';
      }
      
      // REVISÃO DE BENEFÍCIOS
      if (/revisão.*benefício|revisar.*aposentadoria|benefício.*baixo|valor.*errado|buraco.*negro|teto.*previdenciário/i.test(lowerText)) {
        return 'renato-alves';
      }
      
      // APOSENTADORIA RURAL
      if (/rural|trabalhador.*rural|agricultura|roça|campo|lavrador|sitiante|meeiro|boia-fria|trabalho.*no.*campo/i.test(lowerText)) {
        return 'sandra-lima';
      }
      
      // FLAGRANTE E PRISÃO
      if (/preso|presa|flagrante|detido|delegacia|cadeia|algemado|audiência.*custódia|foi.*preso/i.test(lowerText)) {
        return 'roberto-costa';
      }
      
      // HABEAS CORPUS
      if (/habeas.*corpus|soltar|prisão.*preventiva|mandado.*prisão|preso.*injustamente|relaxamento|tirar.*da.*cadeia/i.test(lowerText)) {
        return 'vanessa-reis';
      }
      
      // VIOLÊNCIA DOMÉSTICA
      if (/violência.*doméstica|maria.*da.*penha|agressão|medida.*protetiva|espancou|bateu|agrediu|ameaça.*matar/i.test(lowerText)) {
        return 'joao-fernandes';
      }
      
      // CRIMES PATRIMONIAIS
      if (/roubo|furto|estelionato|receptação|roubaram|furtaram|caí.*em.*golpe|me.*roubaram/i.test(lowerText)) {
        return 'larissa-souza';
      }
      
      // CRIMES DE TRÂNSITO
      if (/acidente.*carro|acidente.*moto|dirigir.*embriagado|bêbado.*volante|alcoolemia|CNH.*cassada|atropelamento|bateu.*carro/i.test(lowerText)) {
        return 'eduardo-gomes';
      }
      
      // DEFESA CRIMINAL GERAL
      if (/processo.*criminal|denúncia|réu|inquérito|respondendo.*processo|defesa.*criminal/i.test(lowerText)) {
        return 'monica-alves';
      }
      
      // COBRANÇAS E DÍVIDAS
      if (/cobrança|dívida|devo.*dinheiro|devedor|empréstimo|cheque|promissória|execução|me.*cobrando|protesto/i.test(lowerText)) {
        return 'gustavo-reis';
      }
      
      // DANOS MORAIS (GERAL)
      if (/dano.*moral|ofensa|constrangimento|humilhação.*pública|injúria|difamação|calúnia|exposto.*ridículo/i.test(lowerText)) {
        return 'camila-nunes';
      }
      
      // CONTRATOS
      if (/contrato|descumpriu.*contrato|acordo|quebra.*de.*contrato|cláusula|rescisão.*contrato|não.*cumpriram/i.test(lowerText)) {
        return 'diego-santos';
      }
      
      // DESPEJO E LOCAÇÃO
      if (/despejo|aluguel|inquilino|locação|não.*paga.*aluguel|ação.*de.*despejo|locador|locatário/i.test(lowerText)) {
        return 'fernanda-lima';
      }
      
      // IMÓVEIS E USUCAPIÃO
      if (/usucapião|propriedade|posse|registro.*imóvel|escritura|regularização|morando.*há.*anos|invasão/i.test(lowerText)) {
        return 'thiago-rocha';
      }
      
      return null;
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
    if (sessionId && currentLawyerId !== 'carlos-silva') {
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
              problem_detected: true,
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
    
    if (currentLawyerId === 'carlos-silva' && messages.length > 0) {
      const lastUserMessage = messages.filter((m: any) => m.role === 'user').slice(-1)[0];
      if (lastUserMessage) {
        // NÍVEL 1: Tentar detectar advogado específico primeiro
        newLawyerId = detectSpecificLawyer(lastUserMessage.content);
        
        // NÍVEL 2: Se não encontrou específico, usar categoria geral
        if (!newLawyerId) {
          const detectedSpecialty = detectGeneralSpecialty(lastUserMessage.content);
          if (detectedSpecialty) {
            const specialists = lawyersBySpecialty[detectedSpecialty];
            newLawyerId = specialists[Math.floor(Math.random() * specialists.length)];
          }
        }
        
        if (newLawyerId) {
          needsTransfer = true;
          console.log(`Transferring to specific lawyer: ${newLawyerId}`);
        }
      }
    }

    // Definir prompt baseado no advogado atual
    let systemPrompt = `Você é Dr. Carlos Silva, advogado brasileiro generalista com 15 anos de experiência.

REGRAS DE COMUNICAÇÃO:

1. PARA SAUDAÇÕES SIMPLES (oi, olá, bom dia, boa tarde, boa noite, etc.):
   - Responda de forma direta, acolhedora e profissional
   - Exemplo: "Olá! Tudo bem? Sou o Dr. Carlos Silva, advogado. Em que posso ajudá-lo hoje?"
   - NÃO use "Hmm...", "compreendo sua situação" ou "pelo que você me relatou" para saudações
   - Mantenha a resposta simples e convidativa

2. QUANDO O USUÁRIO RELATAR UM PROBLEMA OU SITUAÇÃO:
   - Aí sim, use expressões naturais de advogado: "Hmm...", "Entendo...", "Veja bem..."
   - Demonstre que está analisando a situação
   - Faça perguntas específicas UMA de cada vez
   - Seja empático mas profissional

ESTILO GERAL:
- Frases curtas e diretas (2-4 frases por resposta)
- Tom conversacional, como se estivesse falando pessoalmente
- Use linguagem acessível
- Quando usar termos jurídicos, explique-os brevemente

EXPRESSÕES PARA USAR (APENAS QUANDO APROPRIADO):
- "Veja bem..." (ao explicar algo)
- "No seu caso específico..." (ao analisar situação)
- "Juridicamente falando..." (ao dar parecer)
- "Preciso entender melhor..." (ao pedir mais detalhes)
- "Hmm... isso é importante..." (ao refletir sobre o caso)
- "Pelo que você me relatou..." (ao recapitular)

SEU PAPEL:
- Acolher o cliente com profissionalismo
- Identificar a área jurídica do problema através de perguntas
- Quando identificar a área específica, informe que vai transferir para um especialista
- Use tom conversacional e empático

IMPORTANTE: Quando detectar uma área específica (família, trabalhista, civil, previdenciário, penal), diga algo como:
"Entendi... Vou conectar você com nosso especialista em [área], que poderá ajudá-lo melhor com esse tipo de caso."`;

    if (currentLawyerId !== 'carlos-silva') {
      // Verificar se é uma transferência (primeira mensagem do especialista)
      const isFirstMessage = isTransfer === true;
      
      systemPrompt = `Você é um advogado especialista brasileiro. Seja natural, direto e humano.

${isFirstMessage ? `IMPORTANTE: ESTA É SUA PRIMEIRA MENSAGEM (transferência de advogado)
- Se apresente brevemente com seu sobrenome (ex: "Oi! Sou Dr. Oliveira")
- Mostre que leu o caso: mencione o problema específico que foi relatado
- Faça UMA pergunta relevante para avançar o caso
- NÃO peça para repetir o problema
- NÃO diga "Como posso ajudá-lo?"

Exemplo: "Oi! Sou Dr. Oliveira. Vi que você quer entrar com processo de pensão. Vocês já tiveram algum acordo antes?"
` : ''}

ESTILO:
- Respostas curtas (máximo 2-3 frases)
- Tom conversacional, como uma pessoa real
- Evite formalidades excessivas e expressões artificiais
- NÃO use "Hmm...", "Veja bem...", "Juridicamente falando..." repetidamente
- NÃO repita saudações se já está no meio da conversa

FLUXO (IMPORTANTE):

1. ENTENDA O BÁSICO (1-2 mensagens):
   - Ouça o problema principal
   - Faça NO MÁXIMO 1-2 perguntas essenciais

2. DÊ VALOR IMEDIATO (mensagem 3-4):
   - Ofereça uma orientação prática útil
   - Mostre que pode ajudar
   - Seja específico sobre os próximos passos

3. PEÇA WHATSAPP CEDO (mensagem 4-6):
   Após dar a primeira orientação útil, diga naturalmente:
   "Me passa seu WhatsApp? Facilita pra eu te mandar mais detalhes e acompanhar melhor seu caso."
   
   OU variações como:
   "Seu WhatsApp? Assim consigo te passar documentos e manter contato."
   "Qual seu WhatsApp pra gente continuar? Fica mais fácil te ajudar."
   
   IMPORTANTE:
   - Peça WhatsApp LOGO após mostrar valor
   - NÃO espere o cliente "não ter mais dúvidas"
   - NÃO peça nome antes do WhatsApp
   - Capture enquanto o cliente está engajado

4. SE RECUSAR:
   - Continue ajudando sem insistir

O QUE NÃO FAZER:
- NÃO colete informações desnecessárias (nome completo de terceiros, localização exata, etc)
- NÃO faça recapitulações longas
- NÃO repita o que o cliente acabou de dizer
- NÃO estenda a conversa demais antes de pedir contato
- NÃO use tom robótico ou formal demais

LEMBRE-SE: O objetivo é capturar o lead ENQUANTO ele está engajado, não depois de esgotar todas as dúvidas.`;
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
