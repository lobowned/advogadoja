/**
 * Quiz de qualificação - 3 perguntas que aparecem ao clicar no WhatsApp.
 * Cada contexto (home + 5 áreas) tem seu próprio set de perguntas.
 *
 * No final, o usuário é encaminhado pro WhatsApp com a mensagem JÁ INCLUINDO
 * suas respostas — você (advogado) recebe um lead pré-qualificado.
 */

export interface QuizOption {
  label: string;
  value: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface QuizConfig {
  introTitle: string;
  introText: string;
  questions: [QuizQuestion, QuizQuestion, QuizQuestion];
  /** Tom da mensagem inicial que vai pro WhatsApp */
  whatsappIntro: string;
}

export const QUIZZES: Record<string, QuizConfig> = {
  home: {
    introTitle: "Antes de te direcionar pro WhatsApp",
    introText:
      "3 perguntas rápidas pra eu já chegar na conversa entendendo seu caso. Leva menos de 30 segundos.",
    whatsappIntro: "Olá! Vi o site e quero uma orientação previdenciária.",
    questions: [
      {
        question: "Qual benefício te interessa?",
        options: [
          { label: "Aposentadoria", value: "Aposentadoria" },
          { label: "Auxílio-Doença", value: "Auxílio-Doença" },
          { label: "Aposentadoria por Invalidez", value: "Invalidez" },
          { label: "BPC / LOAS", value: "BPC/LOAS" },
          { label: "Salário-Maternidade", value: "Salário-Maternidade" },
          { label: "Outro / Não sei", value: "Outro" },
        ],
      },
      {
        question: "Você já fez algum pedido no INSS sobre isso?",
        options: [
          { label: "Não, primeira vez", value: "Primeira vez" },
          { label: "Sim, está em análise", value: "Em análise" },
          { label: "Sim, foi negado", value: "Negado" },
          { label: "Recebia e foi cortado", value: "Cortado" },
        ],
      },
      {
        question: "Em qual cidade você está?",
        options: [
          { label: "Salvador / RMS", value: "Salvador" },
          { label: "Interior da Bahia", value: "Interior BA" },
          { label: "Outro estado", value: "Outro estado" },
        ],
      },
    ],
  },

  aposentadorias: {
    introTitle: "Antes de conversarmos sobre sua aposentadoria",
    introText:
      "3 perguntas rápidas pra eu chegar na conversa entendendo seu caso. Leva menos de 30 segundos.",
    whatsappIntro: "Olá! Quero uma análise sobre qual aposentadoria posso pedir.",
    questions: [
      {
        question: "Quando você começou a pagar INSS (carteira / autônomo / rural)?",
        options: [
          { label: "Antes de 1999", value: "Antes de 1999" },
          { label: "Entre 1999 e 2015", value: "1999-2015" },
          { label: "Depois de 2015", value: "Depois de 2015" },
          { label: "Não sei direito", value: "Não sei" },
        ],
      },
      {
        question: "Você já tentou pedir aposentadoria no INSS?",
        options: [
          { label: "Não, ainda não pedi", value: "Não pedi" },
          { label: "Pedi e está em análise", value: "Em análise" },
          { label: "Pedi e foi negado", value: "Negado" },
          { label: "Recebi valor baixo, quero revisar", value: "Valor baixo" },
        ],
      },
      {
        question: "Trabalhou em ambiente insalubre, perigoso, ou na roça?",
        options: [
          { label: "Sim, insalubre / perigoso", value: "Insalubre" },
          { label: "Sim, na roça", value: "Rural" },
          { label: "Os dois", value: "Insalubre + Rural" },
          { label: "Nenhum dos dois", value: "Nenhum" },
        ],
      },
    ],
  },

  "auxilio-doenca": {
    introTitle: "Antes de conversarmos sobre seu auxílio-doença",
    introText:
      "3 perguntas rápidas pra eu já chegar entendendo seu caso. Menos de 30 segundos.",
    whatsappIntro: "Olá! Preciso de orientação sobre auxílio-doença.",
    questions: [
      {
        question: "Em que situação você está agora?",
        options: [
          { label: "Médico me afastou, ainda não pedi no INSS", value: "Vou pedir" },
          { label: "Pedi no INSS, está em análise", value: "Em análise" },
          { label: "INSS NEGOU meu pedido", value: "Negado" },
          { label: "Recebia e o INSS CORTOU", value: "Cortado" },
        ],
      },
      {
        question: "Qual a área do problema de saúde?",
        options: [
          { label: "Coluna / Ortopédico", value: "Ortopédico" },
          { label: "Mental / Psiquiátrico", value: "Psiquiátrico" },
          { label: "Câncer ou doença grave", value: "Grave" },
          { label: "Cardíaco / Diabetes / Outro", value: "Outro" },
        ],
      },
      {
        question: "Você tem laudos médicos atualizados?",
        options: [
          { label: "Sim, completos e recentes", value: "Sim, completos" },
          { label: "Tenho alguns, mas antigos", value: "Antigos" },
          { label: "Não tenho, preciso providenciar", value: "Sem laudos" },
        ],
      },
    ],
  },

  "aposentadoria-por-invalidez": {
    introTitle: "Antes de conversarmos sobre invalidez",
    introText:
      "3 perguntas rápidas pra eu já entender seu caso.",
    whatsappIntro: "Olá! Preciso de orientação sobre aposentadoria por invalidez.",
    questions: [
      {
        question: "Qual a situação atual?",
        options: [
          { label: "Recebo auxílio-doença há tempo, médicos dizem que não tem volta", value: "Auxílio crônico" },
          { label: "Quero pedir invalidez direto", value: "Pedir direto" },
          { label: "INSS negou aposentadoria por invalidez", value: "Negado" },
          { label: "Recebia invalidez e o INSS cortou", value: "Cortado" },
        ],
      },
      {
        question: "Você precisa de outra pessoa pra cuidar de você no dia a dia?",
        options: [
          { label: "Sim, totalmente dependente", value: "Dependente total" },
          { label: "Sim, em algumas tarefas", value: "Dependência parcial" },
          { label: "Não, mas não consigo trabalhar", value: "Independente" },
        ],
      },
      {
        question: "Tem laudos detalhados (CID, prognóstico, especialista)?",
        options: [
          { label: "Sim, completos", value: "Completos" },
          { label: "Tenho alguns", value: "Parciais" },
          { label: "Preciso providenciar", value: "Sem laudos" },
        ],
      },
    ],
  },

  "bpc-loas": {
    introTitle: "Antes de conversarmos sobre BPC/LOAS",
    introText: "3 perguntas rápidas pra eu já entender sua situação.",
    whatsappIntro: "Olá! Preciso de orientação sobre BPC/LOAS.",
    questions: [
      {
        question: "O BPC é para quem?",
        options: [
          { label: "Idoso (65 anos ou mais)", value: "Idoso" },
          { label: "Pessoa com deficiência (qualquer idade)", value: "PCD" },
          { label: "Criança com deficiência", value: "Criança PCD" },
        ],
      },
      {
        question: "A família está inscrita no CadÚnico?",
        options: [
          { label: "Sim, atualizado nos últimos 2 anos", value: "Atualizado" },
          { label: "Sim, mas antigo", value: "Desatualizado" },
          { label: "Não / Não sei", value: "Sem CadÚnico" },
        ],
      },
      {
        question: "Já tentou pedir o BPC no INSS?",
        options: [
          { label: "Não, primeira vez", value: "Primeira vez" },
          { label: "Pedi, está em análise", value: "Em análise" },
          { label: "INSS negou (renda ou perícia)", value: "Negado" },
          { label: "Recebia e foi cortado", value: "Cortado" },
        ],
      },
    ],
  },

  "salario-maternidade": {
    introTitle: "Antes de conversarmos sobre o salário-maternidade",
    introText:
      "3 perguntas rápidas pra eu já chegar entendendo seu caso. Menos de 30 segundos.",
    whatsappIntro: "Olá! Preciso de orientação sobre Salário-Maternidade.",
    questions: [
      {
        question: "Qual a sua situação?",
        options: [
          { label: "Empregada com carteira assinada", value: "CLT" },
          { label: "MEI", value: "MEI" },
          { label: "Autônoma / Contribuinte individual", value: "Autônoma" },
          { label: "Doméstica", value: "Doméstica" },
          { label: "Desempregada", value: "Desempregada" },
          { label: "Trabalhadora rural", value: "Rural" },
        ],
      },
      {
        question: "Onde você está agora?",
        options: [
          { label: "Estou grávida (mais de 8 meses)", value: "Grávida 8m+" },
          { label: "Estou grávida (menos de 8 meses)", value: "Grávida -8m" },
          { label: "Bebê já nasceu (recentemente)", value: "Recém-nascido" },
          { label: "Adotei ou tenho guarda", value: "Adoção" },
        ],
      },
      {
        question: "Já tentou pedir no INSS?",
        options: [
          { label: "Não, primeira vez", value: "Primeira vez" },
          { label: "Pedi, em análise", value: "Em análise" },
          { label: "Pedi e foi negado", value: "Negado" },
          { label: "Empregador deveria pagar mas não pagou", value: "Empregador" },
        ],
      },
    ],
  },
};

/**
 * Monta a mensagem final do WhatsApp com as respostas do quiz.
 */
export function buildWhatsappMessage(
  quizKey: string,
  answers: [string, string, string],
): string {
  const quiz = QUIZZES[quizKey];
  if (!quiz) return "Olá! Vim pelo site.";

  const q = quiz.questions;
  return [
    quiz.whatsappIntro,
    "",
    "Respondi o questionário rápido do site:",
    `• ${q[0].question}`,
    `  → ${answers[0]}`,
    `• ${q[1].question}`,
    `  → ${answers[1]}`,
    `• ${q[2].question}`,
    `  → ${answers[2]}`,
  ].join("\n");
}
