/**
 * Configuração central da área /prev
 *
 * Edite UM arquivo só para personalizar nome do advogado, OAB,
 * WhatsApp, cidade, etc. — todas as páginas /prev/* leem daqui.
 *
 * Quando o Gilberto me passar os dados reais, basta atualizar
 * o objeto LAWYER abaixo.
 */

export const LAWYER = {
  // ---- DADOS PROFISSIONAIS ----
  fullName: "Dr. {{NOME}} {{SOBRENOME}}",
  shortName: "Dr. {{NOME}}",
  oabNumber: "{{NUMERO}}",
  oabState: "{{UF}}",
  city: "{{CIDADE}}",
  state: "{{UF}}",
  yearsOfExperience: 0, // número de anos atuando — preencher quando souber

  // ---- CONTATO ----
  // Número WhatsApp herdado do site atual (Salvador/BA). Troque para o
  // seu WhatsApp profissional pessoal/escritório.
  whatsappNumber: "5571997036269",
  email: "contato@advogadoja.com.br",
  addressLine: "{{ENDEREÇO}}", // ex: "Rua das Flores, 123, sala 45 — Salvador/BA"

  // Horários reais de atendimento (não prometer 24h se não atende 24h)
  businessHours: "Segunda a sexta, 9h às 18h",

  // ---- IDENTIDADE DA ÁREA ----
  brandName: "Previdenciário", // sub-marca dentro do Advogado Já
  tagline: "Especialista em Direito Previdenciário",
  metaDescription:
    "Assessoria jurídica especializada em aposentadorias, auxílio-doença e BPC/LOAS. Atendimento humanizado, análise técnica do seu CNIS e estratégia personalizada.",
} as const;

/**
 * Monta link do WhatsApp com mensagem contextual.
 * Cada página passa uma mensagem inicial diferente, então
 * no admin/CRM já chega o lead com contexto.
 */
export function whatsappLink(initialMessage: string): string {
  const encoded = encodeURIComponent(initialMessage);
  return `https://wa.me/${LAWYER.whatsappNumber}?text=${encoded}`;
}

/**
 * Mensagens-padrão por página — facilita qualificar lead.
 * Quando o lead chegar no seu WhatsApp já vai indicar a página
 * de origem, o que ajuda na priorização e no script de atendimento.
 */
export const WHATSAPP_MESSAGES = {
  home: "Olá! Vi o site de vocês e gostaria de uma orientação sobre direito previdenciário.",
  aposentadorias:
    "Olá! Gostaria de uma análise sobre qual aposentadoria eu posso pedir. Pode me ajudar?",
  aposentadoriaIdade:
    "Olá! Estou perto da idade de aposentar e queria entender o que preciso para dar entrada.",
  aposentadoriaTempo:
    "Olá! Quero saber se já tenho tempo de contribuição suficiente para me aposentar.",
  aposentadoriaEspecial:
    "Olá! Trabalhei (ou trabalho) exposto a agentes nocivos e quero saber sobre aposentadoria especial.",
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

/**
 * Lista de áreas exibida na home e no menu — ordem importa para SEO.
 * Cada área tem uma foto (PREV_IMAGES key) para o card.
 * Copy popular (sem juridiquês) — fala direto com o público.
 */
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
    slug: "aposentadoria-por-invalidez",
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
      "Idoso a partir de 65 anos ou pessoa com deficiência em família de baixa renda tem direito a 1 salário mínimo do governo todo mês. Não precisa nem ter contribuído ao INSS.",
    icon: "HandHeart",
    imageKey: "bpcIdoso",
  },
] as const;

/**
 * Tipos de aposentadoria — usados na página hub /prev/aposentadorias
 */
export const APOSENTADORIA_TYPES = [
  {
    slug: "aposentadoria-por-idade",
    title: "Aposentadoria por Idade",
    short: "65 anos (homem) / 62 anos (mulher), com tempo mínimo de contribuição",
    when: "Quando você atinge a idade mínima da Reforma da Previdência ou de uma regra de transição.",
  },
  {
    slug: "aposentadoria-tempo-de-contribuicao",
    title: "Aposentadoria por Tempo de Contribuição",
    short: "Regras de transição da Reforma de 2019",
    when: "Para quem já contribuía antes da Reforma e pode optar por pedágios, pontos ou idade mínima progressiva.",
  },
  {
    slug: "aposentadoria-especial",
    title: "Aposentadoria Especial",
    short: "Exposição a agentes nocivos (15, 20 ou 25 anos)",
    when: "Para quem trabalhou exposto a ruído, calor, agentes químicos, biológicos, eletricidade ou outros riscos comprovados em PPP/LTCAT.",
  },
  {
    slug: "aposentadoria-hibrida",
    title: "Aposentadoria Híbrida",
    short: "Soma tempo rural + urbano",
    when: "Para quem trabalhou parte da vida no campo e parte na cidade, sem completar o tempo em nenhum dos dois regimes isolados.",
  },
  {
    slug: "aposentadoria-pcd",
    title: "Aposentadoria da Pessoa com Deficiência",
    short: "Tempo reduzido conforme grau (leve, moderado, grave)",
    when: "Para segurados com deficiência comprovada por avaliação biopsicossocial — tempo reduzido em relação às regras comuns.",
  },
] as const;
