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
        // Se já tem transferência pendente, verificar confirmação
        if (existingPendingTransfer) {
          const confirmationPhrases = /\b(sim|quero|pode|claro|pode ser|ok|tá|ta|beleza|aceito|por favor|gostaria|vamos|queria|vamo|bora|autorizo|pode sim|tudo bem|tranquilo|blz)\b/i;
          const userConfirmed = confirmationPhrases.test(lastUserMessage.content.toLowerCase());
          
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
        } else {
          // Não tem transferência pendente, detectar nova especialidade
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
            // Em vez de transferir imediatamente, salvar como pendente e pedir autorização
            pendingTransferLawyer = newLawyerId;
            shouldAskPermission = true;
            console.log(`🤔 Detected specialty, asking permission to transfer to: ${newLawyerId}`);
            
            // Salvar pending transfer no banco
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
                  pending_transfer_lawyer: newLawyerId
                })
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
      
      const targetLawyerName = lawyerNames[pendingTransferLawyer] || 'especialista';
      
      // Retornar diretamente mensagem de permissão sem chamar IA
      const permissionMessages = [
        `Ah, isso é caso de ${targetLawyerName.split(' ').slice(1).join(' ')}. Posso te passar pra ${targetLawyerName.includes('Dra.') ? 'ela' : 'ele'} que é especialista nisso? 👍`,
        `Olha, esse caso é com ${targetLawyerName}. Transfiro pra ${targetLawyerName.includes('Dra.') ? 'ela' : 'ele'}?`,
        `Bom, aí é com ${targetLawyerName.split(' ').slice(1).join(' ')}. Passo pra ${targetLawyerName.includes('Dra.') ? 'ela' : 'ele'}? É especialista nisso.`,
      ];
      
      const randomMessage = permissionMessages[Math.floor(Math.random() * permissionMessages.length)];
      
      console.log("🤖 Returning hardcoded permission message:", randomMessage);
      
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
      
      systemPrompt = `⚠️ CRÍTICO: RESPONDA EXCLUSIVAMENTE EM PORTUGUÊS BRASILEIRO. NUNCA use inglês ou outros idiomas.

VOCÊ É ${lawyerName}, advogado especialista brasileiro.
SEU NOME É ${lawyerName}. SEU ID É ${currentLawyerId}.

${isFirstMessage ? `PRIMEIRA MENSAGEM (Transferência):
1. Diga: "Olá! Sou ${lawyerName}"
2. Mencione o problema: "Vi que você [problema específico]"
3. Faça UMA pergunta objetiva
MÁXIMO 2 frases. PORTUGUÊS BRASILEIRO APENAS.

Exemplo: "Olá! Sou ${lawyerName}. Vi que seu voo foi cancelado. Quando isso aconteceu?"
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
