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
 * Para adicionar nova área, basta incluir aqui e criar a página.
 */
export const PREV_AREAS = [
  {
    slug: "aposentadorias",
    title: "Aposentadorias",
    short: "Idade, tempo, especial, híbrida, PCD",
    description:
      "Análise do seu CNIS para identificar qual aposentadoria oferece o melhor benefício para você — considerando regras antigas, transição e novas após a Reforma.",
    icon: "Clock",
  },
  {
    slug: "auxilio-doenca",
    title: "Auxílio-Doença",
    short: "Benefício por incapacidade temporária",
    description:
      "Para quem está afastado do trabalho por motivo de saúde. Orientação completa para entrada, recurso e revisão administrativa ou judicial.",
    icon: "HeartPulse",
  },
  {
    slug: "aposentadoria-por-invalidez",
    title: "Aposentadoria por Invalidez",
    short: "Incapacidade permanente",
    description:
      "Quando a incapacidade para o trabalho se torna definitiva. Análise de laudos, perícia e estratégia para conversão do auxílio em aposentadoria.",
    icon: "ShieldAlert",
  },
  {
    slug: "bpc-loas",
    title: "BPC / LOAS",
    short: "Benefício assistencial",
    description:
      "Benefício de um salário mínimo para idosos a partir de 65 anos ou pessoas com deficiência em situação de baixa renda — sem necessidade de contribuição prévia ao INSS.",
    icon: "HandHeart",
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
