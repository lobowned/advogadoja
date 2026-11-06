/**
 * Conteúdo das 6 páginas de área (/advogado-<area>). Fica num arquivo de dados para o
 * gerador de páginas pré-montadas (scripts/vite-plugin-static-seo.ts) também usar.
 */
export interface NicheData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroDescription: string;
  benefits: string[];
  commonCases: { title: string; description: string }[];
  /** Prazos e regras da lei (com a fonte) — nada de número de resultado ou de clientes. */
  stats: { value: string; label: string }[];
  /** Guia pilar da área (/guia/<slug>) */
  guideSlug?: string;
  /** Área das páginas locais (/advogado-<area>-<cidade>) */
  localNiche?: string;
  whatsappText: string;
}

// Conteúdo revisado em 06/11/2026: sem estatística inventada, sem "especialista",
// sem "consulta grátis" e sem promessa de resultado (Provimento OAB 205/2021).
export const nicheData: Record<string, NicheData> = {
  consumidor: {
    id: "consumidor",
    slug: "advogado-consumidor",
    title: "Advogado do Consumidor Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado do Consumidor Online | Riccio Advocacia",
    metaDescription:
      "Voo cancelado, nome negativado, plano de saúde que negou, fraude no Pix ou cobrança indevida: entenda seus direitos e fale com um advogado pelo WhatsApp.",
    keywords: ["advogado consumidor", "voo cancelado", "negativação indevida", "plano de saúde negou", "fraude bancária", "cobrança indevida", "direito do consumidor"],
    heroDescription:
      "Atuação em problemas de consumo: voo cancelado, negativação indevida, negativa de plano de saúde, fraudes bancárias e cobranças indevidas. Atendimento online, com análise dos documentos do seu caso.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Análise dos documentos do seu caso",
      "Explicação clara de direitos, prazos e riscos",
      "Advogado inscrito na OAB/BA 46.638",
      "Sigilo profissional",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Voo Cancelado", description: "Cancelamento, atraso, overbooking e bagagem" },
      { title: "Negativação Indevida", description: "Nome no SPC/Serasa por dívida que não existe" },
      { title: "Plano de Saúde Negou", description: "Cirurgia, exame ou tratamento negado" },
      { title: "Fraude Bancária", description: "Pix, cartão clonado, empréstimo não contratado" },
    ],
    stats: [
      { value: "5 anos", label: "para pedir reparação por dano (CDC, art. 27)" },
      { value: "90 dias", label: "para reclamar de defeito em produto durável (CDC, art. 26)" },
      { value: "7 dias", label: "de arrependimento em compra fora da loja (CDC, art. 49)" },
    ],
    guideSlug: "consumidor",
    localNiche: "consumidor",
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema de consumidor e gostaria de orientação.",
  },
  trabalhista: {
    id: "trabalhista",
    slug: "advogado-trabalhista",
    title: "Advogado Trabalhista Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado Trabalhista Online | Riccio Advocacia",
    metaDescription:
      "Demissão, verbas rescisórias, horas extras, acidente de trabalho ou assédio moral: entenda seus direitos e fale com um advogado trabalhista pelo WhatsApp.",
    keywords: ["advogado trabalhista", "demissão sem justa causa", "horas extras", "verbas rescisórias", "direitos trabalhistas", "reclamação trabalhista"],
    heroDescription:
      "Atuação em demissão, verbas rescisórias, horas extras, acidente de trabalho, assédio moral e trabalho sem carteira assinada. Atendimento online, com conferência dos seus documentos e cálculos.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Conferência do termo de rescisão e dos cálculos",
      "Explicação clara de direitos, prazos e riscos",
      "Advogado inscrito na OAB/BA 46.638",
      "Sigilo profissional",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Demissão sem Justa Causa", description: "Verbas rescisórias, FGTS, seguro-desemprego" },
      { title: "Horas Extras", description: "Cobrança de horas extras não pagas" },
      { title: "Acidente de Trabalho", description: "Estabilidade e indenização" },
      { title: "Assédio Moral", description: "Provas, rescisão indireta e indenização" },
    ],
    stats: [
      { value: "2 anos", label: "para entrar com a ação depois de sair do emprego (CF, art. 7º, XXIX)" },
      { value: "5 anos", label: "de direitos que podem ser cobrados (CF, art. 7º, XXIX)" },
      { value: "10 dias", label: "para a empresa pagar a rescisão (CLT, art. 477, § 6º)" },
    ],
    guideSlug: "trabalhista",
    localNiche: "trabalhista",
    whatsappText: "Olá, Dr. Gilberto. Preciso de orientação trabalhista.",
  },
  familia: {
    id: "familia",
    slug: "advogado-familia",
    title: "Advogado de Família Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado de Família Online | Riccio Advocacia",
    metaDescription:
      "Divórcio, pensão alimentícia, guarda, união estável e inventário: entenda seus direitos e fale com um advogado de família pelo WhatsApp, com sigilo.",
    keywords: ["advogado família", "divórcio", "pensão alimentícia", "guarda de filhos", "união estável", "inventário"],
    heroDescription:
      "Atuação em divórcio, pensão alimentícia, guarda e convivência, união estável e inventário. Atendimento online e discreto, com orientação sobre acordo em cartório ou ação na Justiça.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Sigilo profissional",
      "Orientação sobre acordo ou ação judicial",
      "Advogado inscrito na OAB/BA 46.638",
      "Divórcio e inventário em cartório quando a lei permite",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Divórcio Consensual", description: "Com acordo, em cartório ou na Justiça" },
      { title: "Pensão Alimentícia", description: "Fixação, revisão ou cobrança" },
      { title: "Guarda de Filhos", description: "Compartilhada ou unilateral, e convivência" },
      { title: "União Estável", description: "Reconhecimento ou dissolução" },
    ],
    stats: [
      { value: "Cartório", label: "divórcio com acordo pode ser feito por escritura (CPC, art. 733)" },
      { value: "3 meses", label: "prisão máxima por dívida de pensão (CPC, art. 528, § 3º)" },
      { value: "18 anos", label: "não encerra a pensão sozinho: precisa de decisão (Súmula 358 do STJ)" },
    ],
    guideSlug: "familia",
    localNiche: "familia",
    whatsappText: "Olá, Dr. Gilberto. Preciso de orientação em direito de família.",
  },
  civil: {
    id: "civil",
    slug: "advogado-civil",
    title: "Advogado Cível Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado Cível Online | Riccio Advocacia",
    metaDescription:
      "Danos morais, contratos, cobrança, despejo e indenizações: entenda seus direitos e fale com um advogado pelo WhatsApp. Atendimento online.",
    keywords: ["advogado cível", "advogado civil", "danos morais", "contrato", "cobrança judicial", "despejo"],
    heroDescription:
      "Atuação em danos morais e materiais, contratos, cobranças, despejo e conflitos de vizinhança. Atendimento online, com análise de documentos e orientação sobre acordo ou ação.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Análise de contratos e documentos",
      "Tentativa de acordo antes do processo, quando possível",
      "Advogado inscrito na OAB/BA 46.638",
      "Sigilo profissional",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Danos Morais", description: "Ofensas, constrangimento, negativação indevida" },
      { title: "Cobrança de Dívidas", description: "Cobrança e defesa em cobrança" },
      { title: "Contratos", description: "Análise, revisão e rescisão" },
      { title: "Despejo", description: "Falta de pagamento e fim do contrato" },
    ],
    stats: [
      { value: "3 anos", label: "para pedir indenização por dano (CC, art. 206, § 3º, V)" },
      { value: "40 SM", label: "limite de valor do Juizado Especial Cível (Lei 9.099, art. 3º)" },
      { value: "20 SM", label: "até esse valor, dá para ir ao Juizado sem advogado (Lei 9.099, art. 9º)" },
    ],
    whatsappText: "Olá, Dr. Gilberto. Preciso de orientação em uma questão cível.",
  },
  previdenciario: {
    id: "previdenciario",
    slug: "advogado-previdenciario",
    title: "Advogado Previdenciário Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado Previdenciário Online | INSS | Riccio Advocacia",
    metaDescription:
      "Aposentadoria, auxílio-doença, BPC/LOAS, pensão por morte ou benefício negado pelo INSS: entenda seus direitos e fale com um advogado pelo WhatsApp.",
    keywords: ["advogado previdenciário", "advogado INSS", "aposentadoria", "auxílio-doença", "BPC LOAS", "benefício negado"],
    heroDescription:
      "Atuação em aposentadorias, auxílio-doença, BPC/LOAS, pensão por morte, revisões e benefícios negados pelo INSS. Atendimento online, com conferência do CNIS e dos prazos.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Conferência do CNIS e do histórico de contribuições",
      "Recurso administrativo ou ação judicial, conforme o caso",
      "Advogado inscrito na OAB/BA 46.638",
      "Sigilo profissional",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Aposentadoria", description: "Por idade, tempo de contribuição ou especial" },
      { title: "Auxílio-Doença", description: "Negado ou cessado pelo INSS" },
      { title: "BPC/LOAS", description: "Benefício assistencial para idoso ou pessoa com deficiência" },
      { title: "Revisão de Benefício", description: "Erros de cálculo e tempo não contado" },
    ],
    stats: [
      { value: "30 dias", label: "para recorrer da decisão do INSS (Decreto 3.048/1999, art. 305)" },
      { value: "10 anos", label: "para pedir revisão do benefício (Lei 8.213/1991, art. 103)" },
      { value: "65 anos", label: "idade do BPC para a pessoa idosa (Lei 8.742/1993, art. 20)" },
    ],
    guideSlug: "previdenciario",
    localNiche: "previdenciario",
    whatsappText: "Olá, Dr. Gilberto. Preciso de orientação sobre benefício do INSS.",
  },
  penal: {
    id: "penal",
    slug: "advogado-criminal",
    title: "Advogado Criminal Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado Criminal Online | Riccio Advocacia",
    metaDescription:
      "Prisão em flagrante, audiência de custódia, habeas corpus e defesa em inquérito ou processo: fale com um advogado criminal pelo WhatsApp, com sigilo.",
    keywords: ["advogado criminal", "advogado criminalista", "habeas corpus", "prisão em flagrante", "audiência de custódia", "defesa criminal"],
    heroDescription:
      "Atuação em prisão em flagrante, audiência de custódia, habeas corpus, inquérito policial e processo criminal, na defesa e na assistência à vítima. Atendimento online e sigiloso.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Sigilo profissional",
      "Acompanhamento de inquérito e processo",
      "Advogado inscrito na OAB/BA 46.638",
      "Orientação sobre audiência de custódia e liberdade",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Prisão em Flagrante", description: "Audiência de custódia e liberdade" },
      { title: "Habeas Corpus", description: "Contra prisão ou ameaça ilegal" },
      { title: "Violência Doméstica", description: "Defesa ou proteção da vítima" },
      { title: "Crimes Patrimoniais", description: "Furto, roubo, estelionato" },
    ],
    stats: [
      { value: "24 horas", label: "prazo para a audiência de custódia após a prisão (CPP, art. 310)" },
      { value: "10 dias", label: "prazo da resposta à acusação (CPP, art. 396)" },
      { value: "Habeas corpus", label: "cabe contra prisão ou ameaça ilegal (CF, art. 5º, LXVIII)" },
    ],
    guideSlug: "criminal",
    localNiche: "criminal",
    whatsappText: "Olá, Dr. Gilberto. Preciso de orientação em uma questão criminal.",
  },
};
