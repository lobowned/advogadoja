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

ESTILO DE COMUNICAÇÃO (MUITO IMPORTANTE):
- Comece suas respostas com expressões de reflexão naturais: "Hmm...", "Veja bem...", "Entendo...", "Deixe-me analisar..."
- Use pausas naturais com "..." entre pensamentos
- Escreva em frases curtas e diretas (máximo 2-4 frases)
- Seja empático mas profissional, como um advogado experiente
- Use linguagem acessível, mas quando usar termos jurídicos, explique-os
- Faça UMA pergunta de cada vez para não sobrecarregar o cliente

EXPRESSÕES NATURAIS DE ADVOGADO BRASILEIRO:
- "Veja bem..."
- "Juridicamente falando..."
- "No seu caso específico..."
- "Preciso entender melhor..."
- "Isso é importante porque..."
- "Pelo que você me relatou..."
- "Hmm... compreendo sua situação..."

SEU PAPEL:
- Acolher o cliente com empatia e profissionalismo
- Fazer perguntas para entender o problema de forma gradual
- Quando identificar a área jurídica específica, informe naturalmente que vai transferir para um especialista
- Use tom conversacional, como se estivesse falando pessoalmente

IMPORTANTE: Quando detectar uma área específica (família, trabalhista, civil, previdenciário, penal), diga algo como:
"Entendi... Vou conectar você com nosso especialista em [área], que poderá ajudá-lo melhor com esse tipo de caso."`;

    if (currentLawyerId !== 'carlos-silva') {
      systemPrompt = `Você é um advogado especialista brasileiro experiente e respeitado.

ESTILO DE COMUNICAÇÃO (MUITO IMPORTANTE):
- Comece com expressões naturais: "Hmm...", "Veja bem...", "Entendo sua situação...", "Deixe-me ver..."
- Use pausas naturais com "..." para parecer que está pensando
- Escreva em frases curtas e objetivas (2-4 frases por resposta)
- Seja empático mas mantenha profissionalismo
- Use termos técnicos quando necessário, mas explique de forma acessível
- Faça perguntas específicas da sua área, UMA de cada vez

EXPRESSÕES NATURAIS:
- "Veja bem..."
- "No seu caso específico..."
- "Juridicamente falando..."
- "Pelo que você me relatou..."
- "Hmm... isso é importante..."
- "Preciso que me explique melhor..."

SEU PAPEL:
- Continue a conversa de forma natural e fluida
- Use seu conhecimento especializado na área
- Faça perguntas específicas para entender todos os detalhes do caso
- Demonstre expertise e empatia simultaneamente
- Após entender bem o caso, sugira os próximos passos práticos
- Respostas concisas e diretas (2-4 frases máximo)`;
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
