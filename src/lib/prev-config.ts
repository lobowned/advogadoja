/**
 * Configuração central da área /prev.
 */
export const LAWYER = {
  fullName: "Dr. {{NOME}} {{SOBRENOME}}",
  shortName: "Dr. {{NOME}}",
  oabNumber: "{{NUMERO}}",
  oabState: "{{UF}}",
  city: "{{CIDADE}}",
  state: "{{UF}}",
  yearsOfExperience: 0,
  whatsappNumber: "5571997036269",
  email: "contato@advogadoja.com.br",
  addressLine: "{{ENDEREÇO}}",
  businessHours: "Segunda a sexta, 9h às 18h",
  brandName: "Previdenciário",
  tagline: "Especialista em Direito Previdenciário",
  metaDescription:
    "Assessoria jurídica especializada em aposentadorias, auxílio-doença e BPC/LOAS. Atendimento humanizado, análise técnica do seu CNIS e estratégia personalizada.",
} as const;

export function whatsappLink(initialMessage: string): string {
  const encoded = encodeURIComponent(initialMessage);
  return `https://wa.me/${LAWYER.whatsappNumber}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  home: "Olá! Vi o site de vocês e gostaria de uma orientação sobre direito previdenciário.",
  aposentadorias:
    "Olá! Gostaria de uma análise sobre qual aposentadoria eu posso pedir. Pode me ajudar?",
  aposentadoriaIdade:
    "Olá! Estou perto da idade de aposentar e queria entender o que preciso para dar entrada.",
  aposentadoriaTempo:
    "Olá! Quero saber se já tenho tempo de contribuição suficiente para me aposentar.",
  aposentadoriaEspecial:
    "Olá! Trabalhei exposto a agentes nocivos e quero saber sobre aposentadoria especial.",
  aposentadoriaHibrida:
    "Olá! Tenho tempo de trabalho rural e urbano. Quero saber sobre aposentadoria híbrida.",
  aposentadoriaPCD:
    "Olá! Sou pessoa com deficiência e queria saber sobre aposentadoria da PCD.",
  auxilioDoenca:
    "Olá! Preciso de orientação sobre auxílio-doença (benefício por incapacidade).",
  invalidez:
    "Olá! Preciso de orientação sobre aposentadoria por invalidez (incapacidade permanente).",
  bpcLoas:
    "Olá! Preciso de orientação sobre BPC/LOAS (benefício assistencial).",
  sobre: "Olá! Vi o perfil do(a) advogado(a) e quero conversar sobre meu caso.",
  contato: "Olá! Quero agendar uma conversa sobre meu caso previdenciário.",
} as const;

export const PREV_AREAS = [
  {
    slug: "aposentadorias",
    title: "Aposentadorias",
    short: "Idade, tempo de INSS, atividade especial, rural",
    description:
      "Você está perto de se aposentar e não sabe o que pedir? A gente olha junto seu histórico do INSS e te indica o caminho que paga mais e demora menos.",
    icon: "Clock",
    imageKey: "aposentadoriaIdade",
  },
  {
    slug: "auxilio-doenca",
    title: "Auxílio-Doença",
    short: "Afastado do trabalho por doença",
    description:
      "INSS negou ou cortou seu auxílio-doença? A gente te ajuda a recorrer e, se precisar, ir pra Justiça — com perícia, laudos e tudo certo.",
    icon: "HeartPulse",
    imageKey: "auxilioDoenca",
  },
  {
    slug: "invalidez",
    title: "Aposentadoria por Invalidez",
    short: "Quando não pode mais trabalhar",
    description:
      "Quando a doença ou acidente impede de trabalhar pra sempre. Te explico como pedir a aposentadoria por invalidez e os 25% a mais pra quem precisa de cuidador.",
    icon: "ShieldAlert",
    imageKey: "invalidez",
  },
  {
    slug: "bpc-loas",
    title: "BPC / LOAS",
    short: "1 salário pra idoso ou pessoa com deficiência",
    description:
      "Idoso a partir de 65 anos ou pessoa com deficiência em família de baixa renda tem direito a 1 salário mínimo do governo todo mês.",
    icon: "HandHeart",
    imageKey: "bpcIdoso",
  },
] as const;

export const APOSENTADORIA_TYPES = [
  {
    slug: "aposentadoria-por-idade",
    title: "Aposentadoria por Idade",
    short: "65 anos (homem) / 62 anos (mulher), com tempo mínimo de contribuição",
    when: "Quando você atinge a idade mínima da Reforma da Previdência ou de uma regra de transição.",
  },
  {
    slug: "aposentadoria-por-idade",
    title: "Aposentadoria por Tempo de Contribuição",
    short: "Regras de transição da Reforma de 2019",
    when: "Para quem já contribuía antes da Reforma e pode optar por pedágios, pontos ou idade mínima progressiva.",
  },
  {
    slug: "aposentadoria-por-idade",
    title: "Aposentadoria Especial",
    short: "Exposição a agentes nocivos (15, 20 ou 25 anos)",
    when: "Para quem trabalhou exposto a ruído, calor, agentes químicos, biológicos, eletricidade ou outros riscos comprovados em PPP/LTCAT.",
  },
  {
    slug: "aposentadoria-por-idade",
    title: "Aposentadoria Híbrida",
    short: "Soma tempo rural + urbano",
    when: "Para quem trabalhou parte da vida no campo e parte na cidade, sem completar o tempo em nenhum dos regimes isolados.",
  },
  {
    slug: "aposentadoria-por-idade",
    title: "Aposentadoria da Pessoa com Deficiência",
    short: "Tempo reduzido conforme grau de deficiência",
    when: "Para pessoa com deficiência que contribuiu ao INSS e precisa de análise específica do grau e do tempo.",
  },
] as const;
