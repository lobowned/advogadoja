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
          enum: ["normal_response", "suggest_transfer", "confirm_transfer", "deny_transfer", "specialist_greeting", "save_contact_data", "request_name", "request_phone", "request_rating"],
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

// Função para gerar saudação de especialista como fallback
function generateSpecialistGreeting(lawyerId: string, problem: string | null): string {
  const lawyerName = LAWYER_NAMES[lawyerId] || 'especialista';
  const greetings = [
    `Oi! Sou ${lawyerName}. Vi que vc precisa de ajuda${problem ? ` com ${problem}` : ''}. Me conta mais sobre o seu caso?`,
    `E aí! ${lawyerName} aqui. Sobre ${problem || 'seu caso'}: me diz o que aconteceu?`,
    `Olá! Sou ${lawyerName}. Entendi que vc tem uma questão${problem ? ` de ${problem}` : ''}. Como posso te ajudar?`
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

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
  
  const currentLawyerName = params.currentLawyerId === 'carlos-silva' 
    ? 'Dr. Carlos Silva (triagem geral)' 
    : 'Especialista';

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

  const systemPrompt = `Você é o ORQUESTRADOR INTELIGENTE do sistema de atendimento jurídico online. 
Seu trabalho é analisar o contexto completo e decidir a melhor ação a tomar.

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
- Advogado atual: ${currentLawyerName}
- É transferência recente? ${params.isTransfer ? 'SIM (acabou de ser transferido)' : 'NÃO'}
- Transferência pendente aguardando confirmação? ${params.pendingTransfer ? `SIM (aguardando confirmação para ${params.pendingTransfer})` : 'NÃO'}
- Problema detectado anteriormente: ${params.detectedProblem || 'Nenhum'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👥 ${LAWYERS_LIST}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 FLUXO OBRIGATÓRIO DO ESPECIALISTA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ Saudação e perguntar sobre o caso (1-3 mensagens)
2️⃣ Entender os detalhes do problema (fazer 2-3 perguntas relevantes)
3️⃣ Dar orientação inicial breve
4️⃣ OBRIGATÓRIO: Pedir nome ("Qual seu nome completo?") - use request_name
5️⃣ OBRIGATÓRIO: Pedir WhatsApp ("Me passa seu WhatsApp?") - use request_phone
6️⃣ Confirmar próximos passos
7️⃣ SÓ ENTÃO: request_rating (se cliente se despedir)

⚠️ IMPORTANTE: Não pule as etapas 4 e 5! O sistema bloqueará request_rating sem esses dados.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 REGRAS DE DECISÃO (use o tool):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚨 **REGRA PRIORITÁRIA #1: specialist_greeting** - SEMPRE VERIFIQUE ISSO PRIMEIRO!
   ⚡ ATENÇÃO: Esta regra TEM PRIORIDADE ABSOLUTA sobre todas as outras!
   ✅ Quando usar:
   - isTransfer=true (acabou de ser transferido) E
   - Advogado atual NÃO é Carlos Silva
   - 🔴 IMPORTANTE: Se essas condições forem verdadeiras, USE specialist_greeting SEMPRE
   - 🔴 IGNORE qualquer outro contexto do histórico (confirmações, "pode ser", etc.)
   - Apresente-se brevemente como o especialista e pergunte sobre o caso
   ❌ NÃO use quando: não é transferência recente OU advogado é Carlos

2️⃣ **normal_response**: Resposta normal de conversa
   ✅ Quando usar:
   - Saudações sem contexto jurídico ("oi", "olá", "bom dia")
   - Perguntas de esclarecimento
   - Continuação natural da conversa com especialista
   - Não há problema jurídico claro identificado
   ❌ NÃO use quando: houver problema jurídico claro que precisa de especialista
   
3️⃣ **suggest_transfer**: Sugerir transferência para especialista
   ✅ Quando usar:
   - Dr. Carlos detecta problema jurídico ESPECÍFICO
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
   - Execute a transferência imediatamente
   ❌ NÃO use quando: 
   - não há pending_transfer
   - isTransfer=true (nesse caso use specialist_greeting)
   
5️⃣ **deny_transfer**: Usuário NEGOU transferência
   ✅ Quando usar:
   - Há pending_transfer aguardando
   - Usuário disse: "não", "nao", "depois", "espera", "deixa", "agora não"
   - Aceite variações: "nai", "naum", "nn"
   - Continue conversa normalmente com Carlos
   ❌ NÃO use quando: não há pending_transfer

6️⃣ **request_name**: Solicitar nome do usuário
   ✅ Quando usar:
   - Após 2-4 mensagens de conversa relevante sobre o caso
   - Usuário já explicou o problema básico
   - Ainda NÃO foi coletado o nome (verifique DADOS JÁ COLETADOS acima!)
   - Especialista entendeu o caso e quer formalizar
   ✅ Resposta deve ser:
   - Natural e contextualizada ao caso
   - Informal: "Qual seu nome pra eu anotar aqui?"
   - Variar: "Me diz seu nome completo?"
   ❌ NÃO use quando:
   - Conversa ainda está no início (menos de 2 mensagens)
   - Nome já foi fornecido (verifique DADOS JÁ COLETADOS!)
   - Usuário está apenas fazendo pergunta genérica

7️⃣ **request_phone**: Solicitar WhatsApp do usuário
   ✅ Quando usar:
   - APÓS coletar o nome (request_name)
   - Especialista entendeu o problema
   - Ainda NÃO foi coletado o telefone (verifique DADOS JÁ COLETADOS acima!)
   - Antes de propor próximos passos
   ✅ Respostas:
   - "Legal! Me passa seu WhatsApp pra eu te enviar as orientações?"
   - "Perfeito! Qual seu número de WhatsApp?"
   - "Beleza! Pra finalizar, me dá seu WhatsApp?"
   ❌ NÃO use quando:
   - Nome ainda não foi coletado (primeiro request_name!)
   - WhatsApp já foi fornecido (verifique DADOS JÁ COLETADOS!)

8️⃣ **save_contact_data**: Usuário forneceu dados de contato
     ✅ Quando usar:
     - Usuário forneceu NOME OU telefone/email
     - Detectar padrões: 
       * Nome: buscar nas ÚLTIMAS 3 MENSAGENS do usuário, não apenas na anterior
       * Usar regex robusto: /^[A-ZÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝ][a-zàáâãäåçèéêëìíîïñòóôõöùúûüý]+(\s+[A-ZÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝ]?[a-zàáâãäåçèéêëìíîïñòóôõöùúûüý]+)+$/
       * Telefone: números com 10-11 dígitos (71997036269, 5571997036269)
       * Email: formato xxx@xxx.com
     - 🔴 CRÍTICO: Buscar nome nas últimas 3 mensagens do usuário
     - Aceitar nomes com 2+ palavras (ex: "Gilberto", "Maria Silva", "João Pedro Santos")
     - Se não encontrar padrão perfeito, usar a mensagem completa se tiver 2-5 palavras
     - EXTRAIR e retornar nos campos extracted_name, extracted_phone e extracted_email
     - Adicionar código do país (55) ao telefone se não tiver
     - OBRIGATÓRIO: Gerar case_summary com resumo completo (max 150 palavras)
     - Responder confirmando os dados de forma específica
     ❌ NÃO use quando: mensagem não contém dados de contato

9️⃣ **request_rating**: Solicitar avaliação do atendimento
   🛑 PRÉ-REQUISITOS OBRIGATÓRIOS (verificar ANTES de usar):
   - ✅ Nome foi coletado? (verifique DADOS JÁ COLETADOS acima!)
   - ✅ WhatsApp foi coletado? (verifique DADOS JÁ COLETADOS acima!)
   - ❌ Se QUALQUER UM faltar: NÃO use request_rating! Use request_name ou request_phone!
   
   ✅ Quando usar (APENAS se pré-requisitos atendidos):
   - Usuário se despede EXPLICITAMENTE: "tchau", "até", "valeu", "obrigado", "vlw"
   - Agendamento FOI CONFIRMADO com data/hora específica
   - Todos os dados de contato foram coletados
   - ❌ NÃO use para: "ok", "acho que sim", "entendi", "beleza" (são continuação!)
   
   ✅ OBRIGATÓRIO:
   - Gerar case_summary resumindo TODO o caso discutido
   - Incluir: problema do cliente, contexto, próximos passos acordados
   - Resposta deve convidar para avaliar o atendimento de forma natural
   
   ❌ BLOQUEIOS AUTOMÁTICOS:
   - Sistema BLOQUEARÁ se nome ou phone não foram coletados
   - Nesse caso, voltará para request_name ou request_phone automaticamente
   
   📝 Exemplos de resposta:
   - "Combinado então! Se puder, avalia nosso atendimento aí embaixo pra gente melhorar sempre 👍"
   - "Beleza! Fico feliz em ajudar. Quando puder, dá uma avaliada no atendimento, blz?"
   - "Perfeito! Se quiser, avalia a gente aqui embaixo. Até mais! 😊"

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

request_name (solicitando nome):
- "Legal! Qual seu nome completo pra eu anotar aqui?"
- "Perfeito. Me diz seu nome?"
- "Blz! E qual seu nome?"

request_phone (solicitando WhatsApp):
- "Legal! Me passa seu WhatsApp pra eu te enviar as orientações?"
- "Perfeito! Qual seu número de WhatsApp?"
- "Beleza! Pra finalizar, me dá seu WhatsApp?"

save_contact_data (confirmando dados de contato):
- "Perfeito! Anotei seu telefone 71997036269 e email lobowned@gmail.com. Agora vou formalizar o agendamento 👍"
- "Ótimo! Recebi seus dados de contato. Te envio a confirmação no email que vc passou"
- "Beleza! Já tenho seus dados aqui. Vou te mandar as instruções por email e WhatsApp"

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

    // 🔢 INCREMENTAR MESSAGE COUNT a cada mensagem do usuário
    if (leadData?.id) {
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

    // 🛡️ VALIDAÇÃO FORÇADA: Garantir specialist_greeting quando necessário
    if (isTransfer && currentLawyerId !== 'carlos-silva' && decision.action !== 'specialist_greeting') {
      console.warn('⚠️ [OVERRIDE] Forcing specialist_greeting because isTransfer=true and currentLawyer is specialist');
      console.warn('⚠️ [OVERRIDE] Original action was:', decision.action);
      
      // Forçar action e gerar saudação de fallback
      decision.action = 'specialist_greeting';
      decision.response = generateSpecialistGreeting(
        currentLawyerId, 
        leadData?.detected_problem || null
      );
      decision.confidence = 1.0;
      decision.reasoning = 'Forced specialist greeting override';
    }

    console.log("🎯 [DECISION]", decision.action);
    console.log("💬 [RESPONSE]", decision.response.substring(0, 100));

    // Executar ações baseadas na decisão
    if (leadData?.id) {
      switch (decision.action) {
        case "suggest_transfer":
          // Salvar transferência pendente COM ESPECIALIDADE GRANULAR
          console.log("💾 Saving pending transfer:", decision.targetLawyerId);
          
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
        confidence: decision.confidence,
        showRatingButton: decision.action === "request_rating",
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
          showRatingButton: decision.action === "request_rating"
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
