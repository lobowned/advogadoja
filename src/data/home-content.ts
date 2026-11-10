/**
 * Textos da página inicial. A página (Index, PracticeAreasSection, HomeDestaques, ObjecionsFAQ)
 * e o HTML pronto do vite-plugin-static-seo leem daqui, para o Bing e os robôs de IA, que não
 * rodam JavaScript, lerem o mesmo conteúdo que o Google vê depois do JavaScript.
 *
 * Leis citadas, conferidas no Planalto em 10/11/2026: Constituição, art. 7º, XXIX (prazo da ação
 * trabalhista); CDC, art. 27 (5 anos para reparação de dano por defeito do serviço).
 * Provimento OAB 205/2021: nada de promessa de resultado, consulta gratuita ou valor de honorário.
 */

export const HOME_H1 = "Riccio Advocacia: advogado em Salvador e online";

export const HOME_INTRO =
  "Escritório de advocacia digital do Dr. Gilberto Riccio (OAB/BA 46.638), com atendimento online pelo WhatsApp em Salvador e em toda a Bahia. Atua em direito trabalhista, previdenciário (INSS), família, consumidor, cível e criminal, e explica direitos, prazos e documentos em linguagem simples.";

export type HomeArea = {
  id: "trabalhista" | "familia" | "consumidor" | "previdenciario" | "civil" | "criminal";
  title: string;
  description: string;
  services: string[];
  /** Página da área no site. */
  href: string;
  /** Texto do link para a página da área ("Saiba mais sobre ..."). */
  linkLabel: string;
  /** Mensagem que abre no WhatsApp. */
  message: string;
};

export const HOME_AREAS: HomeArea[] = [
  {
    id: "trabalhista",
    title: "Trabalhista",
    description: "Demissão, horas extras, FGTS, assédio, rescisão",
    services: ["Rescisão indireta", "Verbas rescisórias", "Danos morais", "Assédio moral"],
    href: "/advogado-trabalhista",
    linkLabel: "direito trabalhista",
    message: "Olá! Preciso de orientação sobre um problema trabalhista.",
  },
  {
    id: "familia",
    title: "Família",
    description: "Divórcio, pensão, guarda de filhos, inventário",
    services: ["Divórcio", "Pensão alimentícia", "Guarda de filhos", "Inventário"],
    href: "/advogado-familia",
    linkLabel: "direito de família",
    message: "Olá! Preciso de orientação sobre um problema de família.",
  },
  {
    id: "consumidor",
    title: "Consumidor",
    description: "Voo cancelado, cobrança indevida, plano de saúde",
    services: ["Voo cancelado", "Nome sujo", "Plano de saúde", "Fraude bancária"],
    href: "/advogado-consumidor",
    linkLabel: "direito do consumidor",
    message: "Olá! Preciso de orientação sobre um problema de consumidor.",
  },
  {
    id: "previdenciario",
    title: "Previdenciário",
    description: "Aposentadoria, auxílio-doença, BPC/LOAS, pensão",
    services: ["Aposentadoria", "Auxílio-doença", "BPC/LOAS", "Pensão por morte"],
    href: "/advogado-previdenciario",
    linkLabel: "benefícios do INSS",
    message: "Olá! Preciso de orientação sobre um benefício do INSS.",
  },
  {
    id: "civil",
    title: "Civil",
    description: "Contratos, danos morais, herança, imóveis",
    services: ["Danos morais", "Contratos", "Herança", "Usucapião"],
    href: "/advogado-civil",
    linkLabel: "direito civil",
    message: "Olá! Preciso de orientação sobre um problema civil.",
  },
  {
    id: "criminal",
    title: "Criminal",
    description: "Defesa criminal, habeas corpus, recursos",
    services: ["Defesa criminal", "Habeas corpus", "Recursos", "Audiência de custódia"],
    href: "/advogado-criminal",
    linkLabel: "defesa criminal",
    message: "Olá! Preciso de orientação sobre um problema criminal.",
  },
];

/** Artigos novos e mais procurados, linkados da página inicial (a página mais forte do site). */
export const HOME_DESTAQUES: { href: string; area: string; label: string }[] = [
  {
    href: "/artigos/trabalhista/fim-da-escala-6x1-jornada-40-horas",
    area: "Trabalhista",
    label: "Fim da escala 6x1: jornada de 40 horas e duas folgas por semana",
  },
  {
    href: "/artigos/previdenciario/aposentadoria-2026-regras",
    area: "INSS",
    label: "Aposentadoria em 2026: regras de transição, idade mínima e pontos",
  },
  {
    href: "/artigos/previdenciario/auxilio-reclusao",
    area: "INSS",
    label: "Auxílio-reclusão em 2026: quem tem direito, limite de renda e valor",
  },
  {
    href: "/artigos/previdenciario/pericia-inss",
    area: "INSS",
    label: "Perícia do INSS: como funciona, o que levar e o que fazer se negarem",
  },
  {
    href: "/artigos/familia/execucao-alimentos-prisao-penhora",
    area: "Família",
    label: "Pensão alimentícia atrasada: como cobrar com prisão, penhora e desconto em folha",
  },
  {
    href: "/artigos/familia/regulamentacao-de-visitas",
    area: "Família",
    label: "Regulamentação de visitas: como funciona e o que fazer se descumprirem",
  },
  {
    href: "/artigos/penal/prisao-preventiva",
    area: "Criminal",
    label: "Prisão preventiva: quando cabe, quanto tempo dura e como revogar",
  },
  {
    href: "/artigos/consumidor/conta-de-luz-coelba-alta",
    area: "Consumidor",
    label: "Conta de luz da Coelba alta ou com erro: como contestar",
  },
];

export type HomeFaq = { question: string; answer: string };

/** Dúvidas que costumam travar quem ainda não procurou um advogado. */
export const HOME_OBJECOES: HomeFaq[] = [
  {
    question: "Será que tenho direito mesmo?",
    answer:
      "Depende dos fatos e das provas. A lei protege o trabalhador, o segurado do INSS, o consumidor e a família em muitas situações, e a análise do caso mostra se há direito e qual é o caminho, dentro ou fora da Justiça.",
  },
  {
    question: "Processar empresa grande dá certo?",
    answer:
      "Bancos, operadoras, companhias aéreas e planos de saúde respondem pelos danos que causam ao consumidor como qualquer outro fornecedor. O resultado depende das provas e do caso concreto, e ninguém pode garantir o desfecho de um processo.",
  },
  {
    question: "Quanto tempo demora para resolver?",
    answer:
      "Depende do caso. Em urgência, como cirurgia negada pelo plano de saúde, o pedido pode ser levado ao plantão judiciário, inclusive à noite e em fins de semana; quem decide o prazo é o juiz. Processos no Juizado Especial costumam levar alguns meses, e ações comuns, mais tempo. O caminho é avaliado caso a caso.",
  },
  {
    question: "Tenho que pagar algo para começar?",
    answer:
      "Os honorários são combinados por escrito antes de qualquer ação e dependem do tipo de caso, conforme a tabela da OAB/BA. O primeiro passo é contar o que aconteceu pelo WhatsApp, para entender o caso e os documentos necessários.",
  },
];

/** Perguntas gerais, de todas as áreas. */
export const HOME_FAQ: HomeFaq[] = [
  {
    question: "Como funciona o atendimento online?",
    answer:
      "Você conta o que aconteceu pelo WhatsApp ou pelo atendimento virtual do site e envia os documentos por foto ou PDF. O Dr. Gilberto Riccio analisa o caso e explica os caminhos possíveis, com os prazos e os documentos de cada um. O escritório é digital, sem endereço físico, e o acompanhamento do processo também é feito à distância.",
  },
  {
    question: "Em quais áreas o escritório atua?",
    answer:
      "Direito trabalhista, previdenciário (INSS), família, consumidor, cível e criminal. Cada área tem uma página e um guia com os direitos mais procurados, os documentos e os prazos.",
  },
  {
    question: "O escritório atende em quais cidades?",
    answer:
      "O foco é a Bahia, onde o Dr. Gilberto Riccio tem inscrição na OAB (OAB/BA 46.638), com atendimento online em Salvador, Camaçari, Lauro de Freitas, Feira de Santana e no restante do estado. Casos de outros estados são avaliados um a um.",
  },
  {
    question: "Quais documentos devo separar?",
    answer:
      "Documento com foto, CPF e comprovante de residência, mais o que prova o que aconteceu: contrato, carteira de trabalho e contracheques, extrato do CNIS no Meu INSS, laudos, prints de conversas, notas fiscais e protocolos de reclamação. Os guias de cada área listam os documentos de cada assunto.",
  },
  {
    question: "Existe prazo para entrar na Justiça?",
    answer:
      "Sim, e perder o prazo pode significar perder o direito. Os prazos mudam conforme o assunto: a ação trabalhista deve ser proposta em até 2 anos depois do fim do contrato, cobrando os últimos 5 anos (Constituição, art. 7º, XXIX), e o pedido de reparação de danos causados por defeito de um serviço prescreve em 5 anos (Código de Defesa do Consumidor, art. 27). Por isso, não deixe para depois.",
  },
  {
    question: "Posso acompanhar o andamento do meu processo?",
    answer:
      "Sim, você terá acesso a todas as atualizações do seu processo e poderá entrar em contato sempre que tiver dúvidas. A transparência e a comunicação contínua são pilares do atendimento.",
  },
  {
    question: "Posso fazer uma consulta antes de decidir?",
    answer:
      "Sim, a primeira conversa serve para entender seu caso, esclarecer dúvidas e avaliar os caminhos possíveis. É também a oportunidade de conhecer o método de trabalho antes de qualquer contratação.",
  },
];
