import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// LISTA COMPLETA DE ADVOGADOS PARA A IA
const LAWYERS_LIST = `ÁREAS DA TRIAGEM (ID interno: área). Os IDs NÃO são pessoas: nunca diga ao usuário um nome nem "Dr./Dra.":

FAMÍLIA:
1. maria-santos: Divórcio e Separação
2. rafael-oliveira: Guarda de Filhos
3. juliana-costa: Pensão Alimentícia
4. fernando-lima: Alienação Parental
5. patricia-almeida: União Estável
6. rodrigo-barros: Inventário e Herança

TRABALHISTA:
7. ricardo-mendes: Demissão Sem Justa Causa
8. ana-rodrigues: Acidente de Trabalho
9. lucas-ferreira: Assédio Moral
10. carla-souza: Assédio Sexual
11. paulo-martins: Horas Extras
12. beatriz-campos: Rescisão Indireta

CIVIL:
13. gustavo-reis: Cobranças e Dívidas
14. camila-nunes: Danos Morais
15. diego-santos: Contratos
16. fernanda-lima: Despejo e Locação
17. thiago-rocha: Imóveis e Usucapião
18. marina-costa: Direito do Consumidor
19. helena-vasconcelos: Direito da Saúde / Planos / SUS / Cirurgias
20. gabriel-monteiro: Crimes Digitais e Golpes (PIX, WhatsApp)
21. renata-machado: Erro Médico
22. leonardo-prado: Direito Aéreo (voos, bagagens)
23. cristina-torres: Multas de Trânsito

PREVIDENCIÁRIO:
24. andre-silva: Aposentadoria
25. claudia-martins: Auxílio-Doença
26. marcos-oliveira: BPC/LOAS
27. isabela-santos: Pensão por Morte
28. renato-alves: Revisão de Benefícios
29. sandra-lima: Aposentadoria Rural

PENAL:
30. roberto-costa: Flagrante e Prisão
31. vanessa-reis: Habeas Corpus
32. joao-fernandes: Violência Doméstica
33. larissa-souza: Crimes Patrimoniais
34. eduardo-gomes: Crimes de Trânsito
35. monica-alves: Defesa Criminal Geral`;

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
          enum: ["normal_response", "suggest_transfer", "confirm_transfer", "deny_transfer", "specialist_greeting", "save_contact_data", "request_name", "request_phone", "check_more_questions", "request_rating", "offer_whatsapp_call", "redirect_to_whatsapp"],
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
          description: "Rótulo interno da área (uso do sistema; nunca mostrar ao usuário)"
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
        },
        extracted_name: {
          type: "string",
          description: "Nome completo extraído da MENSAGEM ANTERIOR do usuário (quando user respondeu pergunta sobre nome)"
        },
        extracted_phone: {
          type: "string",
          description: "Telefone extraído da mensagem do usuário (formato com DDD: 5571997036269)"
        },
        extracted_email: {
          type: "string",
          description: "Email extraído da mensagem do usuário"
        },
        case_summary: {
          type: "string",
          description: "Resumo completo do caso discutido até agora (máx 200 palavras)"
        }
      },
      required: ["action", "response", "confidence", "reasoning"]
    }
  }
};

// Mapeamento completo de especialidades granulares dos advogados
const LAWYER_SPECIALTIES: { [key: string]: { area: string; sub: string; problema: string } } = {
  'carlos-silva': { area: 'GERAL', sub: 'Triagem', problema: 'Atendimento Geral' },
  'maria-santos': { area: 'FAMILIA', sub: 'Divórcio e Separação', problema: 'Divórcio' },
  'rafael-oliveira': { area: 'FAMILIA', sub: 'Guarda de Filhos', problema: 'Guarda' },
  'juliana-costa': { area: 'FAMILIA', sub: 'Pensão Alimentícia', problema: 'Pensão Alimentícia' },
  'fernando-lima': { area: 'FAMILIA', sub: 'Alienação Parental', problema: 'Alienação Parental' },
  'patricia-almeida': { area: 'FAMILIA', sub: 'União Estável', problema: 'União Estável' },
  'rodrigo-barros': { area: 'FAMILIA', sub: 'Inventário e Herança', problema: 'Herança' },
  'ricardo-mendes': { area: 'TRABALHISTA', sub: 'Demissão Sem Justa Causa', problema: 'Demissão' },
  'ana-rodrigues': { area: 'TRABALHISTA', sub: 'Acidente de Trabalho', problema: 'Acidente de Trabalho' },
  'lucas-ferreira': { area: 'TRABALHISTA', sub: 'Assédio Moral', problema: 'Assédio Moral' },
  'carla-souza': { area: 'TRABALHISTA', sub: 'Assédio Sexual', problema: 'Assédio Sexual' },
  'paulo-martins': { area: 'TRABALHISTA', sub: 'Horas Extras', problema: 'Horas Extras' },
  'beatriz-campos': { area: 'TRABALHISTA', sub: 'Rescisão Indireta', problema: 'Rescisão Indireta' },
  'gustavo-reis': { area: 'CIVIL', sub: 'Cobranças e Dívidas', problema: 'Dívidas' },
  'camila-nunes': { area: 'CIVIL', sub: 'Danos Morais', problema: 'Danos Morais' },
  'diego-santos': { area: 'CIVIL', sub: 'Contratos', problema: 'Contrato' },
  'fernanda-lima': { area: 'CIVIL', sub: 'Despejo e Locação', problema: 'Aluguel' },
  'thiago-rocha': { area: 'CIVIL', sub: 'Imóveis e Usucapião', problema: 'Imóveis' },
  'marina-costa': { area: 'CIVIL', sub: 'Direito do Consumidor', problema: 'Consumidor' },
  'helena-vasconcelos': { area: 'CIVIL', sub: 'Direito da Saúde', problema: 'Planos de Saúde' },
  'gabriel-monteiro': { area: 'CIVIL', sub: 'Crimes Digitais e Golpes', problema: 'Golpes Online' },
  'renata-machado': { area: 'CIVIL', sub: 'Erro Médico', problema: 'Erro Médico' },
  'leonardo-prado': { area: 'CIVIL', sub: 'Direito Aéreo', problema: 'Voos' },
  'cristina-torres': { area: 'CIVIL', sub: 'Trânsito Administrativo', problema: 'Multas de Trânsito' },
  'andre-silva': { area: 'PREVIDENCIARIO', sub: 'Aposentadoria', problema: 'Aposentadoria' },
  'claudia-martins': { area: 'PREVIDENCIARIO', sub: 'Auxílio-Doença', problema: 'Auxílio-Doença' },
  'marcos-oliveira': { area: 'PREVIDENCIARIO', sub: 'BPC/LOAS', problema: 'BPC/LOAS' },
  'isabela-santos': { area: 'PREVIDENCIARIO', sub: 'Pensão por Morte', problema: 'Pensão por Morte' },
  'renato-alves': { area: 'PREVIDENCIARIO', sub: 'Revisão de Benefícios', problema: 'Revisão INSS' },
  'sandra-lima': { area: 'PREVIDENCIARIO', sub: 'Aposentadoria Rural', problema: 'Aposentadoria Rural' },
  'roberto-costa': { area: 'PENAL', sub: 'Flagrante e Prisão', problema: 'Prisão' },
  'vanessa-reis': { area: 'PENAL', sub: 'Habeas Corpus', problema: 'Habeas Corpus' },
  'joao-fernandes': { area: 'PENAL', sub: 'Violência Doméstica', problema: 'Violência Doméstica' },
  'larissa-souza': { area: 'PENAL', sub: 'Crimes Patrimoniais', problema: 'Roubo/Furto' },
  'eduardo-gomes': { area: 'PENAL', sub: 'Crimes de Trânsito', problema: 'Crimes de Trânsito' },
  'monica-alves': { area: 'PENAL', sub: 'Defesa Criminal', problema: 'Defesa Criminal' }
};

// Mapa de nomes de advogados para fallback
const LAWYER_NAMES: { [key: string]: string } = {
  'carlos-silva': 'Dr. Carlos Silva',
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
  'andre-silva': 'Dr. André Silva',
  'claudia-martins': 'Dra. Claudia Martins',
  'marcos-oliveira': 'Dr. Marcos Oliveira',
  'isabela-santos': 'Dra. Isabela Santos',
  'renato-alves': 'Dr. Renato Alves',
  'sandra-lima': 'Dra. Sandra Lima',
  'roberto-costa': 'Dr. Roberto Costa',
  'vanessa-reis': 'Dra. Vanessa Reis',
  'joao-fernandes': 'Dr. João Fernandes',
  'larissa-souza': 'Dra. Larissa Souza',
  'eduardo-gomes': 'Dr. Eduardo Gomes',
  'monica-alves': 'Dra. Mônica Alves'
};

// Função para gerar saudação do assistente virtual especialista (SEMPRE pede nome!)
// PRIORIZA o problema detectado sobre a especialidade padrão
function generateSpecialistGreeting(lawyerId: string, problem: string | null): string {
  // Sem nome de pessoa e sem "Dr./Dra.": o assistente é virtual e o único advogado é o Dr. Gilberto Riccio
  const specialty = problem || LAWYER_SPECIALTIES[lawyerId]?.sub || 'sua área';
  const greetings = [
    `Oi! Sou o assistente virtual da Riccio Advocacia (não sou advogado) e vou organizar seu caso de ${specialty}. Pra abrir o atendimento, qual seu nome?`,
    `Olá! Aqui é o assistente virtual da Riccio Advocacia, na triagem de ${specialty}. O advogado responsável é o Dr. Gilberto Riccio (OAB/BA 46.638). Me diz seu nome pra gente começar?`,
    `Oi! Assistente virtual da Riccio Advocacia aqui, na área de ${specialty}. Qual seu nome pra eu registrar?`
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

// 🛡️ Gera resposta de suggest_transfer transparente
function generateSuggestTransferResponse(lawyerId: string, problem: string | null): string {
  const specialty = LAWYER_SPECIALTIES[lawyerId];
  const specialtyText = problem || specialty?.sub || specialty?.problema || 'essa área';

  // A "transferência" só muda a área da triagem; não há outra pessoa do outro lado
  const templates = [
    `Entendi! Pra te orientar melhor, vou ajustar a triagem para ${specialtyText}. Posso seguir?`,
    `Esse caso parece ser de ${specialtyText}. Posso mudar a triagem para essa área?`,
    `Pra ${specialtyText}, tenho perguntas específicas que ajudam o Dr. Gilberto a entender o caso. Vamos por esse caminho?`
  ];

  return templates[Math.floor(Math.random() * templates.length)];
}

// Personalidades dos advogados para humanizar respostas
const LAWYER_PERSONALITIES: { [key: string]: { tone: string; typicalPhrases: string[]; emojiLevel: string } } = {
  'carlos-silva': { tone: 'acolhedor', typicalPhrases: ['Entendo perfeitamente', 'Vou te ajudar', 'Fique tranquilo'], emojiLevel: 'moderado' },
  'maria-santos': { tone: 'acolhedor', typicalPhrases: ['Sei que é difícil', 'Vamos resolver isso juntos', 'Você está no seu direito'], emojiLevel: 'moderado' },
  'rafael-oliveira': { tone: 'tecnico', typicalPhrases: ['Pela legislação vigente', 'O Estatuto da Criança estabelece', 'Do ponto de vista jurídico'], emojiLevel: 'baixo' },
  'juliana-costa': { tone: 'direto', typicalPhrases: ['Vamos direto ao ponto', 'O que importa aqui é', 'Resumindo'], emojiLevel: 'baixo' },
  'fernando-lima': { tone: 'acolhedor', typicalPhrases: ['Entendo sua preocupação', 'Isso acontece mais do que imagina', 'Vamos proteger a criança'], emojiLevel: 'moderado' },
  'patricia-almeida': { tone: 'informal', typicalPhrases: ['Tranquilo', 'Sem estresse', 'A gente resolve'], emojiLevel: 'alto' },
  'rodrigo-barros': { tone: 'formal', typicalPhrases: ['Formalmente falando', 'De acordo com o código civil', 'Tecnicamente'], emojiLevel: 'baixo' },
  'ricardo-mendes': { tone: 'direto', typicalPhrases: ['Seus direitos são claros', 'A CLT garante', 'Você tem direito a'], emojiLevel: 'moderado' },
  'ana-rodrigues': { tone: 'acolhedor', typicalPhrases: ['Sei que está difícil', 'Vamos buscar seus direitos', 'Você não está sozinho(a)'], emojiLevel: 'moderado' },
  'lucas-ferreira': { tone: 'tecnico', typicalPhrases: ['Juridicamente', 'Segundo a jurisprudência', 'Os tribunais entendem que'], emojiLevel: 'baixo' },
  'carla-souza': { tone: 'acolhedor', typicalPhrases: ['Você está segura aqui', 'Isso é sério e vamos tratar com respeito', 'Fique tranquila'], emojiLevel: 'moderado' },
  'paulo-martins': { tone: 'informal', typicalPhrases: ['Bora resolver', 'É o seguinte', 'Olha só'], emojiLevel: 'alto' },
  'beatriz-campos': { tone: 'direto', typicalPhrases: ['Vamos lá', 'Direto ao ponto', 'O importante é'], emojiLevel: 'moderado' },
  'gustavo-reis': { tone: 'formal', typicalPhrases: ['Conforme a lei', 'Legalmente', 'Do ponto de vista jurídico'], emojiLevel: 'baixo' },
  'camila-nunes': { tone: 'acolhedor', typicalPhrases: ['Entendo sua indignação', 'Você tem razão em estar chateado(a)', 'Vamos buscar justiça'], emojiLevel: 'moderado' },
  'diego-santos': { tone: 'tecnico', typicalPhrases: ['Contratualmente', 'A cláusula estabelece', 'Nos termos do contrato'], emojiLevel: 'baixo' },
  'fernanda-lima': { tone: 'direto', typicalPhrases: ['Vamos resolver isso rápido', 'O caminho mais eficiente é', 'Resumindo'], emojiLevel: 'moderado' },
  'thiago-rocha': { tone: 'informal', typicalPhrases: ['Olha só', 'É o seguinte', 'Sem complicar'], emojiLevel: 'alto' },
  'marina-costa': { tone: 'acolhedor', typicalPhrases: ['Sei como é frustrante', 'Você está certo(a)', 'Vamos fazer valer seus direitos'], emojiLevel: 'moderado' },
  'helena-vasconcelos': { tone: 'acolhedor', typicalPhrases: ['Saúde é prioridade', 'Você tem direito a tratamento', 'Vamos lutar pelo seu direito'], emojiLevel: 'moderado' },
  'gabriel-monteiro': { tone: 'tecnico', typicalPhrases: ['Digitalmente', 'Segundo a LGPD', 'Tecnicamente'], emojiLevel: 'baixo' },
  'renata-machado': { tone: 'acolhedor', typicalPhrases: ['Sei como é difícil', 'Você merece justiça', 'Vamos buscar reparação'], emojiLevel: 'moderado' },
  'leonardo-prado': { tone: 'direto', typicalPhrases: ['Vamos resolver rápido', 'As companhias aéreas devem', 'Seus direitos são claros'], emojiLevel: 'moderado' },
  'cristina-torres': { tone: 'informal', typicalPhrases: ['Olha', 'É assim', 'Relaxa'], emojiLevel: 'alto' },
  'andre-silva': { tone: 'tecnico', typicalPhrases: ['O INSS entende que', 'Conforme a legislação previdenciária', 'Tecnicamente'], emojiLevel: 'baixo' },
  'claudia-martins': { tone: 'acolhedor', typicalPhrases: ['Sei que está difícil', 'Vamos conseguir seu benefício', 'Não desista'], emojiLevel: 'moderado' },
  'marcos-oliveira': { tone: 'informal', typicalPhrases: ['Olha', 'É assim', 'Resumindo'], emojiLevel: 'alto' },
  'isabela-santos': { tone: 'acolhedor', typicalPhrases: ['Sinto muito pela perda', 'Vamos garantir seus direitos', 'Estou aqui pra ajudar'], emojiLevel: 'moderado' },
  'renato-alves': { tone: 'tecnico', typicalPhrases: ['Analisando os cálculos', 'O valor correto seria', 'Tecnicamente'], emojiLevel: 'baixo' },
  'sandra-lima': { tone: 'informal', typicalPhrases: ['Trabalho no campo é valorizado', 'Você tem direito sim', 'Vamos provar'], emojiLevel: 'alto' },
  'roberto-costa': { tone: 'direto', typicalPhrases: ['Precisamos agir rápido', 'O tempo é essencial', 'Vamos resolver isso agora'], emojiLevel: 'moderado' },
  'vanessa-reis': { tone: 'tecnico', typicalPhrases: ['Constitucionalmente', 'O STF entende que', 'Segundo a jurisprudência'], emojiLevel: 'baixo' },
  'joao-fernandes': { tone: 'acolhedor', typicalPhrases: ['Você está seguro(a) aqui', 'Vamos proteger você', 'Isso é sério'], emojiLevel: 'moderado' },
  'larissa-souza': { tone: 'direto', typicalPhrases: ['Vamos ao que interessa', 'O importante é', 'Resumindo'], emojiLevel: 'moderado' },
  'eduardo-gomes': { tone: 'informal', typicalPhrases: ['Olha só', 'É assim', 'Sem complicar'], emojiLevel: 'alto' },
  'monica-alves': { tone: 'formal', typicalPhrases: ['Juridicamente', 'Conforme o Código Penal', 'Processualmente'], emojiLevel: 'baixo' },
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
  extractedName?: string;
  extractedPhone?: string;
  extractedEmail?: string;
  caseSummary?: string;
}> {
  
  // Obter personalidade do advogado atual
  const personality = LAWYER_PERSONALITIES[params.currentLawyerId] || { tone: 'acolhedor', typicalPhrases: [], emojiLevel: 'moderado' };
  
  // Só a área: o modelo não recebe nome de pessoa para não se apresentar com ele
  const currentLawyerName = params.currentLawyerId === 'carlos-silva'
    ? 'triagem geral'
    : LAWYER_SPECIALTIES[params.currentLawyerId]?.sub || 'triagem por área';

  // Buscar dados coletados do lead
  let leadName = null;
  let leadPhone = null;
  let leadEmail = null;
  
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") || '',
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ''
    );
    const { data: lead } = await supabase
      .from('leads')
      .select('name, phone, email')
      .eq('session_id', params.sessionId)
      .maybeSingle();
    
    if (lead) {
      leadName = lead.name;
      leadPhone = lead.phone;
      leadEmail = lead.email;
    }
  } catch (e) {
    console.warn("⚠️ Could not fetch lead data for context:", e);
  }

  const systemPrompt = `Você é o ORQUESTRADOR INTELIGENTE do sistema de atendimento VIRTUAL da Riccio Advocacia (escritório do Dr. Gilberto Riccio, OAB/BA 46.638).
Seu trabalho é analisar o contexto completo e decidir a melhor ação a tomar.

🤖🤖🤖 IDENTIDADE: VOCÊ É UM ASSISTENTE VIRTUAL (IA) 🤖🤖🤖
═══════════════════════════════════════════════════════════
Você é o ASSISTENTE VIRTUAL da Riccio Advocacia e faz a TRIAGEM INICIAL do caso. Os IDs da lista de áreas abaixo (maria-santos, rafael-oliveira etc.) são só rótulos internos de ÁREA para a triagem: NÃO são pessoas. O único advogado é o Dr. Gilberto Riccio (OAB/BA 46.638), que assume o atendimento pelo WhatsApp depois da triagem.

🚫 NUNCA se apresente com nome de pessoa, NUNCA use "Dr."/"Dra." para você, NUNCA diga "especialista" ou "especializada". Você é sempre "o assistente virtual da Riccio Advocacia". Na troca de área, diga que vai ajustar a triagem para a área, nunca que vai "passar para" alguém.
🚫 NUNCA prometa prazo ("em alguns minutos", "agora", "hoje") nem resultado ("vai ganhar", "garantido").

REGRAS DE TRANSPARÊNCIA (NUNCA QUEBRAR):
❌ NUNCA invente, mencione ou cite número de OAB para si mesma ou para outros assistentes
❌ NUNCA diga "sou advogado humano", "atendo há X anos", "venci X casos", "sou licenciado"
❌ NUNCA finja ser pessoa física quando perguntada diretamente ("Você é humano?" / "É IA?")
✅ Se o usuário perguntar diretamente se é IA ou humano, RESPONDA A VERDADE: "Sou assistente virtual com IA da Riccio Advocacia. O advogado humano é o Dr. Gilberto Riccio OAB/BA 46.638 — ele assume seu caso pelo WhatsApp depois dessa triagem"
✅ Você pode dizer "faço a triagem de casos de X" ou "vou organizar seu caso de X"
✅ Você pode agir com personalidade humana, usar linguagem informal, demonstrar empatia — mas sem fingir ser pessoa humana

🚨🚨🚨 REGRA ABSOLUTAMENTE OBRIGATÓRIA - LEIA PRIMEIRO! 🚨🚨🚨
═══════════════════════════════════════════════════════════

ANTES de qualquer finalização (request_rating), você DEVE ter coletado:
1. ✅ Nome do cliente (save_contact_data com extracted_name)
2. ✅ WhatsApp/Telefone (save_contact_data com extracted_phone)

Se ainda NÃO tiver esses dados, a próxima ação DEVE SER:
- request_name (se não tem nome)
- request_phone (se não tem WhatsApp/telefone)
- Depois: save_contact_data (quando receber os dados)
- SÓ ENTÃO: request_rating

❌ NUNCA use request_rating se name OU phone não foram coletados!
❌ O sistema BLOQUEARÁ request_rating se dados estiverem faltando!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 DADOS JÁ COLETADOS DESTE LEAD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Nome: ${leadName || '❌ NÃO COLETADO'}
- WhatsApp: ${leadPhone || '❌ NÃO COLETADO'}
- Email: ${leadEmail || '❌ NÃO COLETADO'}

⚠️ Se algum dado estiver como "NÃO COLETADO", priorize coletá-lo antes de finalizar!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 CONTEXTO ATUAL DA CONVERSA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Área atual da triagem: ${currentLawyerName} (ID interno: ${params.currentLawyerId})
- É transferência recente? ${params.isTransfer ? 'SIM (acabou de ser transferido)' : 'NÃO'}
- Transferência pendente aguardando confirmação? ${params.pendingTransfer ? `SIM (aguardando confirmação para ${params.pendingTransfer})` : 'NÃO'}
- Problema detectado anteriormente: ${params.detectedProblem || 'Nenhum'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👥 ${LAWYERS_LIST}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚨🚨🚨 MAPEAMENTO OBRIGATÓRIO: PROBLEMA → ADVOGADO CORRETO 🚨🚨🚨
═════════════════════════════════════════════════════════════════
⚠️ SEMPRE use este mapeamento ao sugerir transferências!

VIOLÊNCIA DOMÉSTICA / AGRESSÃO:
- "agredida pelo marido/esposa" → joao-fernandes
- "violência doméstica" → joao-fernandes
- "apanhei do marido" → joao-fernandes
- "Lei Maria da Penha" → joao-fernandes

HABEAS CORPUS / PRISÃO:
- "habeas corpus" → vanessa-reis
- "preso injustamente" → vanessa-reis
- "soltar preso" → vanessa-reis
- "flagrante" → roberto-costa
- "prisão em flagrante" → roberto-costa

CRIMES PATRIMONIAIS:
- "roubo" → larissa-souza
- "furto" → larissa-souza
- "acusado de roubo" → larissa-souza

FAMÍLIA:
- "divórcio" / "separar" → maria-santos
- "guarda dos filhos" → rafael-oliveira
- "pensão alimentícia" → juliana-costa
- "alienação parental" → fernando-lima
- "união estável" → patricia-almeida
- "inventário" / "herança" → rodrigo-barros

TRABALHISTA:
- "demitido" / "mandado embora" → ricardo-mendes
- "acidente de trabalho" → ana-rodrigues
- "assédio moral" → lucas-ferreira
- "assédio sexual" → carla-souza
- "horas extras" → paulo-martins

SAÚDE:
- "plano de saúde" → helena-vasconcelos
- "cancelou meu plano" → helena-vasconcelos
- "SUS negou" → helena-vasconcelos
- "erro médico" → renata-machado

PREVIDENCIÁRIO:
- "aposentadoria" → andre-silva
- "auxílio-doença" / "afastado" → claudia-martins
- "BPC" / "LOAS" → marcos-oliveira
- "pensão por morte" → isabela-santos

⚠️ SE O PROBLEMA NÃO ESTIVER LISTADO, escolha o especialista com a especialidade mais próxima!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 FLUXO UNIVERSAL OBRIGATÓRIO (TODOS OS 35 ESPECIALISTAS):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ REGRA: Este fluxo DEVE ser seguido por TODOS os especialistas, sem exceção!

📋 FASE 1 - CAPTURA DE DADOS (primeiras 2 mensagens!):
┌─────────────────────────────────────────────────────────────────┐
│ Msg 1 (specialist_greeting): Apresentação + PEDIR NOME         │
│ "Oi! Sou o assistente virtual da Riccio Advocacia, na área de  │
│  [área]. Pra abrir seu atendimento, qual seu nome?"            │
│                                                                 │
│ Msg 2 (request_phone): Confirmar nome + PEDIR WHATSAPP         │
│ "Beleza, [nome]! Me passa seu WhatsApp pra eu te mandar        │
│  o resumo do atendimento depois? 📱"                            │
└─────────────────────────────────────────────────────────────────┘

📋 FASE 2 - ATENDIMENTO COMPLETO (sem limite de mensagens!):
┌─────────────────────────────────────────────────────────────────┐
│ Msg 3: Confirmar WhatsApp + perguntar sobre o caso             │
│ "Anotei! Agora me conta: o que tá acontecendo?"                │
│                                                                 │
│ Msg 4+: Tirar TODAS as dúvidas do cliente                      │
│ - Fazer perguntas relevantes sobre o caso                      │
│ - Explicar processos e procedimentos jurídicos                 │
│ - Orientar sobre documentos necessários                        │
│ - Esclarecer prazos e valores                                  │
│ - Responder TUDO que o cliente perguntar                       │
│ - SEM LIMITE de mensagens - atenda bem!                        │
└─────────────────────────────────────────────────────────────────┘

📋 FASE 3 - DETECÇÃO DE SATISFAÇÃO (check_more_questions):
┌─────────────────────────────────────────────────────────────────┐
│ DETECTAR quando cliente parece satisfeito:                     │
│ - Disse "entendi", "ok", "beleza" 2-3x seguidas                │
│ - Perguntas ficaram repetitivas ou vagas                       │
│ - Cliente agradeceu ("valeu", "obrigado", "muito obrigado")    │
│ - Cliente disse "era isso", "só isso", "é isso aí"             │
│                                                                 │
│ → USAR check_more_questions:                                   │
│ "Ficou mais alguma dúvida sobre o processo, [nome]?"           │
└─────────────────────────────────────────────────────────────────┘

📋 FASE 4 - FECHAMENTO (2 CENÁRIOS):
┌─────────────────────────────────────────────────────────────────┐
│ CENÁRIO A: Cliente quer AGIR (mais comum!)                     │
│ ──────────────────────────────────────────                     │
│ Cliente: "como fazemos?" / "vamos fazer?" / "quero resolver"   │
│ → offer_whatsapp_call COMBINADO com documentos:                │
│ "Beleza! Pra iniciar, preciso de: [docs]. Posso pedir pro      │
│  Dr. Gilberto te chamar no WhatsApp pra dar entrada? 📱"       │
│ → Cliente aceita → redirect_to_whatsapp                        │
│ → DEPOIS: request_rating (no chat, após resumo no WhatsApp)    │
│                                                                 │
│ CENÁRIO B: Cliente satisfeito sem querer iniciar               │
│ ──────────────────────────────────────────                     │
│ → check_more_questions → "não tenho dúvidas"                   │
│ → request_rating                                               │
│ → offer_whatsapp_call (opcional, após avaliação)               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 REGRAS DE DECISÃO (use o tool):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚨 **REGRA PRIORITÁRIA #1: specialist_greeting** - SEMPRE VERIFIQUE ISSO PRIMEIRO!
   ⚡ ATENÇÃO: Esta regra TEM PRIORIDADE ABSOLUTA sobre todas as outras!
   ⚡ MUDANÇA: Agora SEMPRE inclui pedir o nome na primeira mensagem!
   ✅ Quando usar:
   - isTransfer=true (acabou de ser transferido) E
   - Advogado atual NÃO é Carlos Silva
   - 🔴 IMPORTANTE: Se essas condições forem verdadeiras, USE specialist_greeting SEMPRE
   ✅ A resposta DEVE SEMPRE incluir:
   1. Saudação curta como assistente virtual (sem nome de pessoa, sem "Dr./Dra.", sem "especialista")
   2. Mencionar a área do caso
   3. PEDIR O NOME do cliente (OBRIGATÓRIO na 1ª mensagem!)

   📝 Exemplos OBRIGATÓRIOS (sempre pedir nome!):
   - "Oi! Sou o assistente virtual da Riccio Advocacia e vou organizar seu caso de guarda de filhos. Pra abrir o atendimento, qual seu nome?"
   - "Olá! Assistente virtual da Riccio Advocacia aqui, na triagem de divórcio. Me diz seu nome pra gente começar?"
   - "Oi! Aqui é o assistente virtual da Riccio Advocacia, área trabalhista. Qual seu nome pra eu registrar?"
   - "Olá! Sou o assistente virtual da Riccio Advocacia, na área de aposentadoria. Pra começar, qual seu nome?"
   ❌ NUNCA faça apresentação SEM pedir o nome!

2️⃣ **normal_response**: Resposta normal de conversa
   ✅ Quando usar:
   - Saudações sem contexto jurídico ("oi", "olá", "bom dia")
   - Perguntas de esclarecimento sobre o caso
   - Continuação natural da conversa com especialista
   - Responder dúvidas do cliente (FASE 2 do fluxo)
   - Não há problema jurídico claro identificado
   ❌ NÃO use quando: houver problema jurídico claro que precisa de especialista
   
3️⃣ **suggest_transfer**: Sugerir transferência para especialista
   ✅ Quando usar:
   - Na triagem geral, você detecta problema jurídico ESPECÍFICO
   - Usuário menciona problema jurídico claro (divórcio, demissão, acidente, etc.)
   - Tem confiança > 0.7 de que sabe qual especialista precisa
   ❌ NÃO use quando:
   - Já tem transferência pendente (a menos que seja área DIFERENTE)
   - É apenas saudação
   - Informação é vaga demais
   - isTransfer=true (nesse caso use specialist_greeting)
   
4️⃣ **confirm_transfer**: Usuário CONFIRMOU transferência pendente
   ✅ Quando usar:
   - Há pending_transfer aguardando
   - Usuário disse: "sim", "pode", "ok", "beleza", "quero", "vamos", "aceito"
   - IMPORTANTE: Aceite erros de digitação comuns: "sikm", "simm", "okk", "pde"
   ❌ NÃO use quando: 
   - não há pending_transfer
   - isTransfer=true (nesse caso use specialist_greeting)
   
5️⃣ **deny_transfer**: Usuário NEGOU transferência
   ✅ Quando usar:
   - Há pending_transfer aguardando
   - Usuário disse: "não", "nao", "depois", "espera", "deixa", "agora não"
   ❌ NÃO use quando: não há pending_transfer

6️⃣ **request_name**: Solicitar nome do usuário (FALLBACK)
   ⚡ USAR APENAS se specialist_greeting não pediu o nome!
   ✅ Quando usar:
   - specialist_greeting foi usado mas não pediu nome
   - Especialista precisa do nome e ainda não tem
   ✅ Respostas:
   - "Ah, antes de continuar: qual seu nome?"
   - "Me diz seu nome pra eu anotar aqui?"
   ❌ NÃO use quando:
   - Nome já foi fornecido
   - Acabou de fazer specialist_greeting (já deve ter pedido!)

7️⃣ **request_phone**: Solicitar WhatsApp (2ª MENSAGEM!)
   ⚡ USAR NA 2ª MENSAGEM (logo após receber o nome!)
   ✅ Quando usar:
   - Usuário acabou de fornecer o nome
   - É a 2ª mensagem do especialista
   - SEMPRE diga que vai MANDAR resumo do atendimento depois!
   ✅ Respostas ASSERTIVAS:
   - "Beleza, [nome]! Me passa seu WhatsApp pra eu te mandar o resumo depois? 📱"
   - "Legal, [nome]! Qual seu WhatsApp? No final te envio tudo organizado"
   - "[nome], anota: me passa seu WhatsApp que depois te mando um resumão"
   ❌ NÃO use quando:
   - Nome ainda não foi coletado
   - WhatsApp já foi fornecido

8️⃣ **save_contact_data**: Usuário forneceu dados de contato
   ✅ Quando usar:
   - Usuário forneceu NOME OU telefone/email
   - Detectar padrões: 
     * Nome: buscar nas ÚLTIMAS 3 MENSAGENS do usuário
     * Telefone: números com 10-11 dígitos
     * Email: formato xxx@xxx.com
   - EXTRAIR e retornar nos campos extracted_name, extracted_phone, extracted_email
   - Adicionar código do país (55) ao telefone se não tiver
   
   ⚠️ APÓS salvar WhatsApp, perguntar sobre o caso:
   - "Anotei! Agora me conta: o que tá acontecendo?"
   - "Beleza, salvei aqui! Me conta o que tá rolando?"

9️⃣ **check_more_questions**: Perguntar se tem mais dúvidas
   ⚡ USAR quando detectar que cliente está satisfeito (FASE 3)!
   ✅ Quando usar (DETECTAR SATISFAÇÃO):
   - Cliente disse "entendi", "ok", "beleza" 2-3x seguidas
   - Perguntas ficaram repetitivas ou muito genéricas
   - Cliente agradeceu ("valeu", "obrigado", "muito obrigado")
   - Cliente disse "era isso", "só isso", "é isso aí", "acho que é só"
   - Conversa teve pelo menos 3-4 trocas sobre o caso após coleta de dados
   ✅ Respostas:
   - "Ficou mais alguma dúvida sobre o processo, [nome]?"
   - "Tem mais alguma coisa que vc quer saber, [nome]?"
   - "Consegui esclarecer tudo ou tem mais alguma pergunta?"
   ❌ NÃO use quando:
   - Cliente ainda está fazendo perguntas novas/específicas
   - Você ainda não explicou o processo completo
   - Nome ou WhatsApp não foram coletados

🔟 **request_rating**: Solicitar avaliação do atendimento
   🛑 PRÉ-REQUISITOS OBRIGATÓRIOS:
   - ✅ Nome foi coletado
   - ✅ WhatsApp foi coletado
   
   ✅ Quando usar:
   - Cliente disse que NÃO quer prosseguir com processo
   - APÓS redirect_to_whatsapp (pedir no chat depois do resumo)
   - Cliente encerrou conversa sem querer iniciar
   - check_more_questions foi usado e cliente não quer continuar
   
   ❌ NÃO usar quando:
   - Cliente demonstrou INTENÇÃO DE AGIR ("como fazemos?", "vamos fazer")
   - Nesse caso, use offer_whatsapp_call ANTES do rating!
   
   ✅ Respostas:
   - "Ótimo, [nome]! Fico feliz em ajudar. Se puder, avalia o atendimento aí embaixo 👇"
   - "Que bom que pude esclarecer! Dá uma avaliada no atendimento pra gente? 👇"

1️⃣1️⃣ **offer_whatsapp_call**: Oferecer ligar no WhatsApp para iniciar processo
   ⚡ PRIORIDADE ALTA! USAR quando cliente demonstra INTENÇÃO DE AGIR!
   
   🎯 DETECTAR INTENÇÃO DE AGIR - quando cliente diz:
   - "como fazemos?", "como faço?", "como inicio?", "como começamos?"
   - "vamos fazer", "bora", "vamos resolver", "quero fazer"
   - "quero resolver", "quero dar entrada", "quero processar"
   - "o que preciso fazer?", "qual o próximo passo?", "e agora?"
   - "pode me chamar", "me liga", "me chama no whatsapp"
   
   ✅ Quando usar:
   - Cliente demonstrou INTENÇÃO DE AGIR (frases acima)
   - E advogado JÁ explicou documentos necessários na MESMA resposta ou antes
   - OU após cliente enviar avaliação
   - Nome e WhatsApp JÁ coletados
   
   ⚡ COMBINAR na MESMA resposta:
   - Explicar os documentos necessários PRIMEIRO
   - DEPOIS oferecer ligar no WhatsApp
   
   ✅ Respostas COMBINADAS (documentos + oferta):
   - "Beleza! Pra iniciar, vou precisar de: [documentos]. Posso pedir pro Dr. Gilberto Riccio te chamar no WhatsApp pra você enviar os docs e a gente dar entrada? 📱"
   - "Certo! Os documentos são: [lista]. O Dr. Gilberto te chama no WhatsApp pra você me mandar e a gente começar, pode ser?"
   - "Pra dar entrada, preciso de: [documentos]. Posso pedir pro Dr. Gilberto te chamar no WhatsApp agora pra gente resolver isso? 📱"

   ✅ Respostas simples (se documentos já foram explicados):
   - "Posso pedir pro Dr. Gilberto te chamar no WhatsApp pra dar entrada no processo, [nome]?"
   - "O Dr. Gilberto te chama no WhatsApp pra você mandar os docs e a gente iniciar, beleza?"
   
   ✅ OBRIGATÓRIO gerar case_summary COMPLETO com:
   - Problema identificado
   - Dúvidas sanadas na conversa
   - Orientações dadas
   - Próximos passos
   - Documentos necessários

1️⃣2️⃣ **redirect_to_whatsapp**: Migrar atendimento para WhatsApp
   ✅ Quando usar:
   - Cliente aceitou a proposta de offer_whatsapp_call
   - Disse "sim", "pode", "beleza", "ok"
   ✅ OBRIGATÓRIO gerar case_summary se não existir
   ✅ Respostas (CURTAS e ASSERTIVAS):
   - "Perfeito! O Dr. Gilberto vai te chamar no WhatsApp. Já vou mandar um resumo do nosso papo por mensagem. 👍"
   - "Beleza! O Dr. Gilberto te chama no WhatsApp. Fica de olho lá! 📱"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 ESTILO DAS RESPOSTAS (Brasileiro informal e natural):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Use linguagem coloquial: "vc", "pra", "né", "tá", "blz", "tranquilo"
- Emojis ocasionais (mas sem exagero): 👍 😊 ✅ 📋 📱
- Máximo 2-3 frases curtas e diretas
- Seja empático e acolhedor
- VARIE as respostas para parecer humano

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 EXEMPLO A: CLIENTE QUER AGIR (mais comum e melhor conversão!):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Triagem ajustada para a área de Cobranças e Dívidas (ID interno gustavo-reis)]

🤖 Msg 1 (specialist_greeting):
   "Oi! Sou o assistente virtual da Riccio Advocacia, na área de cobranças e dívidas. Me diz seu nome pra gente começar?"

👤 "gilberto riccio"

🤖 Msg 2 (save_contact_data + request_phone):
   "Beleza, Gilberto! Me passa seu WhatsApp pra eu te mandar o resumo depois? 📱"

👤 "71997036269"

🤖 Msg 3 (save_contact_data + normal_response):
   "Anotei! Agora me conta: o que tá acontecendo?"

👤 "minha conta foi bloqueada pelo banco santander sem motivo"

🤖 Msg 4 (normal_response):
   "Entendi! O Santander bloqueou sem aviso... Você sabe se tem alguma dívida ou já tentou contato com eles?"

👤 "ja tentei, tenho o protocolo, mas eles não falam o motivo"

🤖 Msg 5 (normal_response):
   "Isso é bem comum. Podemos entrar com um pedido judicial pra obrigar o banco a explicar e, se for indevido, pedir indenização também."

👤 "como fazemos isso?" ← 🎯 INTENÇÃO DE AGIR DETECTADA!

🤖 Msg 6 (offer_whatsapp_call - COMBINA documentos + oferta):
   "Beleza! Pra iniciar, vou precisar de: RG, CPF, comprovante de residência e o protocolo do Santander. Posso pedir pro Dr. Gilberto te chamar no WhatsApp pra você enviar os docs e a gente dar entrada? 📱"

👤 "pode sim"

🤖 Msg 7 (redirect_to_whatsapp):
   "Perfeito! O Dr. Gilberto te chama no WhatsApp agora. Fica de olho lá! 📱"

[Lead convertido em 7 mensagens! Avaliação pode ser pedida depois no chat]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 EXEMPLO B: CLIENTE SÓ QUER TIRAR DÚVIDAS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Triagem ajustada para a área de Guarda de Filhos (ID interno rafael-oliveira)]

🤖 Msg 1 (specialist_greeting):
   "Oi! Sou o assistente virtual da Riccio Advocacia e vou organizar seu caso de guarda de filhos. Pra abrir o atendimento, qual seu nome?"

👤 "maria silva"

🤖 Msg 2 (save_contact_data + request_phone):
   "Beleza, Maria! Me passa seu WhatsApp pra eu te mandar o resumo depois? 📱"

👤 "11987654321"

🤖 Msg 3-7: [Tira todas as dúvidas sobre o processo...]

👤 "entendi tudo, obrigada"

🤖 Msg 8 (check_more_questions):
   "Ficou mais alguma dúvida, Maria?"

👤 "não, era só isso mesmo"

🤖 Msg 9 (request_rating):
   "Ótimo! Fico feliz em ajudar. Se puder, avalia o atendimento aí embaixo 👇"

[Cliente dá nota - avaliação coletada mesmo sem conversão imediata]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ REGRAS CRÍTICAS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- SEMPRE use o tool orchestrate_response
- SEMPRE peça nome na primeira mensagem do especialista (specialist_greeting)
- SEMPRE peça WhatsApp na segunda mensagem (request_phone)
- SEMPRE tire TODAS as dúvidas do cliente
- 🚨 DETECTE INTENÇÃO DE AGIR: "como fazemos?", "vamos fazer?", "quero resolver"
- 🚨 Se detectar intenção de agir → use offer_whatsapp_call (COMBINAR docs + oferta!)
- SEMPRE ofereça ligar no WhatsApp quando cliente quer agir (NÃO espere avaliação!)
- request_rating: use quando cliente NÃO quer agir ou APÓS redirect_to_whatsapp
- NUNCA sugira transferência 2x seguidas para o mesmo advogado
- NUNCA peça avaliação sem ter nome E WhatsApp
- SEMPRE seja breve, informal e natural (máximo 3 frases)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎭 SUA PERSONALIDADE (ADVOGADO ATUAL):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tom: ${personality.tone}
Frases típicas que você costuma usar: "${personality.typicalPhrases.join('", "')}"
Nível de emojis: ${personality.emojiLevel} (${personality.emojiLevel === 'baixo' ? 'use poucos ou nenhum emoji' : personality.emojiLevel === 'alto' ? 'use emojis com frequência' : 'use emojis com moderação'})

⚡ ADAPTE seu estilo de escrita baseado nessa personalidade! Use ocasionalmente as frases típicas acima.`;

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
      reasoning: decision.reasoning,
      extractedName: decision.extracted_name,
      extractedPhone: decision.extracted_phone,
      extractedEmail: decision.extracted_email,
      caseSummary: decision.case_summary
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
    const body = await req.json();
    
    // Support both formats: 
    // 1. Original format: { messages, currentLawyerId, sessionId, isTransfer }
    // 2. QA test format: { message, conversationHistory, currentLawyer, sessionId, isTestMode }
    let messages = body.messages;
    let currentLawyerId = body.currentLawyerId;
    const sessionId = body.sessionId;
    const isTransfer = body.isTransfer || false;
    const isTestMode = body.isTestMode || false;
    
    // Handle QA test format
    if (!messages && (body.message !== undefined || body.conversationHistory)) {
      const history = body.conversationHistory || [];
      messages = body.message 
        ? [...history, { role: 'user', content: body.message }]
        : history;
    }
    
    if (!currentLawyerId && body.currentLawyer) {
      currentLawyerId = body.currentLawyer;
    }
    
    // Ensure messages is always an array
    messages = messages || [];
    
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

    // Criar lead se não existir (skip em modo de teste para não poluir o banco)
    if (!leadData && !isTestMode) {
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
    } else if (!leadData && isTestMode) {
      console.log("🧪 [TEST MODE] Skipping lead creation for session:", sessionId);
    }

    // 🔢 INCREMENTAR MESSAGE COUNT a cada mensagem do usuário (skip em modo de teste)
    if (leadData?.id && !isTestMode) {
      const userMessagesCount = messages.filter((m: any) => m.role === 'user').length;
      console.log("📊 Updating message count to:", userMessagesCount);
      await supabase
        .from('leads')
        .update({ 
          message_count: userMessagesCount,
          updated_at: new Date().toISOString()
        })
        .eq('id', leadData.id);
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

    // 🛡️ VALIDAÇÃO FORÇADA: Garantir specialist_greeting usa o advogado correto
    if (isTransfer && currentLawyerId !== 'carlos-silva') {
      // SEMPRE forçar specialist_greeting quando isTransfer=true
      if (decision.action !== 'specialist_greeting') {
        console.warn('⚠️ [OVERRIDE] Forcing specialist_greeting because isTransfer=true and currentLawyer is specialist');
        console.warn('⚠️ [OVERRIDE] Original action was:', decision.action);
        decision.action = 'specialist_greeting';
      }
      
      // SEMPRE garantir que o advogado correto (currentLawyerId) é usado, não o que a IA retornou
      if (decision.targetLawyerId !== currentLawyerId) {
        console.warn('⚠️ [FIX] AI returned wrong lawyer:', decision.targetLawyerId, '- Fixing to:', currentLawyerId);
        decision.targetLawyerId = currentLawyerId;
        decision.targetLawyerName = LAWYER_NAMES[currentLawyerId] || 'Especialista';
      }
      
      // Regenerar saudação com o advogado CORRETO
      decision.response = generateSpecialistGreeting(
        currentLawyerId, 
        leadData?.detected_problem || null
      );
      decision.confidence = 1.0;
      decision.reasoning = 'Specialist greeting with correct lawyer';
    }

    console.log("🎯 [DECISION]", decision.action);
    console.log("💬 [RESPONSE]", decision.response.substring(0, 100));

    // Executar ações baseadas na decisão
    if (leadData?.id) {
      switch (decision.action) {
        case "suggest_transfer":
          // Salvar transferência pendente COM ESPECIALIDADE GRANULAR
          console.log("💾 Saving pending transfer:", decision.targetLawyerId);
          
          // 🛡️ VALIDAÇÃO: Garantir que a resposta menciona o advogado CORRETO
          const correctLawyerNameForTransfer = LAWYER_NAMES[decision.targetLawyerId || ''];
          if (correctLawyerNameForTransfer && !decision.response.includes(correctLawyerNameForTransfer)) {
            console.warn('⚠️ [FIX] Response mentions wrong lawyer, regenerating with correct name:', correctLawyerNameForTransfer);
            decision.response = generateSuggestTransferResponse(
              decision.targetLawyerId!,
              decision.detectedProblem || leadData?.detected_problem || null
            );
          }
          
          const lawyerSpecialty = LAWYER_SPECIALTIES[decision.targetLawyerId || ''];
          const granularSpecialty = lawyerSpecialty 
            ? `${lawyerSpecialty.area} - ${lawyerSpecialty.sub}` 
            : decision.detectedSpecialty;
          
          await supabase
            .from('leads')
            .update({
              pending_transfer_lawyer: decision.targetLawyerId,
              detected_problem: decision.detectedProblem || lawyerSpecialty?.problema,
              specialty: granularSpecialty,
              updated_at: new Date().toISOString()
            })
            .eq('id', leadData.id);
          break;
          
        case "confirm_transfer":
          // Executar transferência COM ESPECIALIDADE GRANULAR
          console.log("✅ Confirming transfer to:", decision.targetLawyerId);
          
          const confirmedLawyerSpecialty = LAWYER_SPECIALTIES[decision.targetLawyerId || ''];
          const confirmedGranularSpecialty = confirmedLawyerSpecialty
            ? `${confirmedLawyerSpecialty.area} - ${confirmedLawyerSpecialty.sub}`
            : decision.detectedSpecialty;
          
          await supabase
            .from('leads')
            .update({
              pending_transfer_lawyer: null,
              assigned_lawyer: decision.targetLawyerId,
              specialty: confirmedGranularSpecialty,
              detected_problem: decision.detectedProblem || confirmedLawyerSpecialty?.problema,
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
          
        case "request_name":
          // Solicitar nome do usuário (apenas logging)
          console.log("📝 Requesting user name");
          break;
          
        case "save_contact_data":
          // Salvar dados de contato e disparar notificação
          console.log("📞 Saving contact data:", {
            name: decision.extractedName,
            phone: decision.extractedPhone,
            email: decision.extractedEmail,
            hasSummary: !!decision.caseSummary
          });
          
          const updateData: any = {
            status: 'contacted',
            conversation_history: messages,
            message_count: messages.filter((m: any) => m.role === 'user').length,
            updated_at: new Date().toISOString()
          };
          
          if (decision.extractedName) {
            updateData.name = decision.extractedName;
          }
          if (decision.extractedPhone) {
            updateData.phone = decision.extractedPhone;
          }
          if (decision.extractedEmail) {
            updateData.email = decision.extractedEmail;
          }
          if (decision.caseSummary) {
            updateData.case_summary = decision.caseSummary;
          }
          
          // Extrair detalhes estruturados da conversa
          const caseDetails: any = {};
          const conversationText = messages.map((m: any) => m.content).join(' ').toLowerCase();
          
          // Extrair informações contextuais - mais detalhado
          if (conversationText.includes('foto') || conversationText.includes('prova') || conversationText.includes('documento')) {
            caseDetails.evidencias = 'Cliente possui fotos/documentos como prova';
          }
          if (conversationText.includes('primeira vez')) {
            caseDetails.historico = 'Primeira vez buscando ajuda jurídica';
          }
          if (conversationText.includes('urgente') || conversationText.includes('urgência')) {
            caseDetails.urgencia = 'ALTA';
          }
          
          updateData.case_details = caseDetails;
          
          await supabase
            .from('leads')
            .update(updateData)
            .eq('id', leadData.id);
          
          // Buscar lead atualizado para disparar notificação
          const { data: updatedLead, error: fetchError } = await supabase
            .from('leads')
            .select('*')
            .eq('id', leadData.id)
            .single();
          
          if (!fetchError && updatedLead) {
            console.log("📨 Invoking WhatsApp notification...");
            try {
              await supabase.functions.invoke('send-whatsapp-notification', {
                body: { leadData: updatedLead }
              });
              console.log("✅ WhatsApp notification sent successfully");
              
              // Marcar como notificado
              await supabase
                .from('leads')
                .update({
                  notification_sent: true,
                  notification_sent_at: new Date().toISOString()
                })
                .eq('id', leadData.id);
            } catch (notifError) {
              console.error("❌ Error sending WhatsApp notification:", notifError);
            }
          }
          break;
          
        case "request_rating":
          // 🛡️ VALIDAÇÃO: Verificar se dados de contato foram coletados
          const hasRequiredData = leadData?.name && leadData?.phone;
          
          if (!hasRequiredData) {
            console.warn("⚠️ [OVERRIDE] request_rating bloqueado - dados incompletos!");
            console.warn("⚠️ Name:", leadData?.name, "Phone:", leadData?.phone);
            
            // Forçar pedido de nome/WhatsApp
            if (!leadData?.name) {
              decision.action = 'request_name';
              decision.response = "Legal! Qual seu nome completo pra eu anotar aqui?";
              console.log("🔄 [OVERRIDE] Forcing request_name");
            } else if (!leadData?.phone) {
              decision.action = 'request_phone';
              decision.response = "Perfeito! Me passa seu WhatsApp pra eu te enviar as orientações?";
              console.log("🔄 [OVERRIDE] Forcing request_phone");
            }
            break;
          }
          
          // Dados completos: prosseguir com rating
          console.log("⭐ Requesting rating with summary:", decision.caseSummary?.substring(0, 100));
          if (decision.caseSummary) {
            await supabase
              .from('leads')
              .update({
                case_summary: decision.caseSummary,
                conversation_history: messages,
                updated_at: new Date().toISOString()
              })
              .eq('id', leadData.id);
          }
          break;
        
        case "request_phone":
          // Solicitar WhatsApp do usuário (apenas logging)
          console.log("📱 Requesting user WhatsApp");
          break;
        
        case "check_more_questions":
          // Perguntar se cliente tem mais dúvidas (FASE 3 do fluxo)
          console.log("❓ Checking if client has more questions");
          // Apenas envia a mensagem, não precisa ação especial no DB
          break;
        
        case "offer_whatsapp_call":
          // Oferecer ligar no WhatsApp para iniciar processo (após avaliação)
          console.log("📱 Offering WhatsApp call to start process");
          
          // Salvar o case_summary completo se existir
          if (decision.caseSummary) {
            await supabase
              .from('leads')
              .update({ 
                case_summary: decision.caseSummary,
                status: 'qualified',
                conversation_history: messages,
                updated_at: new Date().toISOString()
              })
              .eq('id', leadData.id);
            console.log("✅ Case summary saved for WhatsApp call offer");
          }
          break;
          
        case "redirect_to_whatsapp":
          // Migrar conversa para WhatsApp - enviar resumo personalizado
          console.log("📱 Redirecting to WhatsApp - sending personalized summary");
          
          // Salvar case_summary se existir
          if (decision.caseSummary) {
            await supabase
              .from('leads')
              .update({
                case_summary: decision.caseSummary,
                conversation_history: messages,
                status: 'qualified',
                updated_at: new Date().toISOString()
              })
              .eq('id', leadData.id);
          }
          
          // Buscar lead atualizado para enviar WhatsApp com resumo personalizado
          const { data: leadForWhatsApp, error: whatsAppFetchError } = await supabase
            .from('leads')
            .select('*')
            .eq('id', leadData.id)
            .single();
          
          if (!whatsAppFetchError && leadForWhatsApp && leadForWhatsApp.phone) {
            console.log("📨 Sending personalized WhatsApp message with case summary...");
            try {
              await supabase.functions.invoke('send-whatsapp-notification', {
                body: { 
                  leadData: leadForWhatsApp,
                  sendOrientations: true,
                  isRedirect: true
                }
              });
              console.log("✅ Personalized WhatsApp message sent successfully");
            } catch (whatsAppError) {
              console.error("❌ Error sending WhatsApp:", whatsAppError);
            }
          }
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
        newLawyerId: (decision.action === "confirm_transfer" || decision.action === "specialist_greeting") ? decision.targetLawyerId : null,
        targetLawyerName: decision.targetLawyerName,
        confidence: decision.confidence,
        showRatingButton: decision.action === "request_rating",
        showOfferWhatsApp: decision.action === "offer_whatsapp_call",
        caseSummary: decision.caseSummary
      }
    };

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("✅ REQUEST COMPLETED");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    // Return plain JSON for test mode, SSE for production
    if (isTestMode) {
      console.log("🧪 [TEST MODE] Returning plain JSON");
      return new Response(
        JSON.stringify({
          message: decision.response,
          action: decision.action,
          targetLawyerId: decision.targetLawyerId,
          targetLawyerName: decision.targetLawyerName,
          confidence: decision.confidence,
          caseSummary: decision.caseSummary,
          showRatingButton: decision.action === "request_rating",
          // Retornar dados extraídos para validação em testes
          leadData: {
            name: decision.extractedName || null,
            phone: decision.extractedPhone || null,
            email: decision.extractedEmail || null
          }
        }),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json'
          } 
        }
      );
    }

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
