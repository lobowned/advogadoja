export interface GuiaSecao {
  h2: string;
  paragrafos: string[];
}

export interface GuiaFaq {
  q: string;
  a: string;
}

export interface Guia {
  slug: string;
  /** Nome da área como aparece para o leitor. */
  area: string;
  /** Área aceita pelo LawyerChatSection. */
  chatArea: 'familia' | 'trabalhista' | 'civil' | 'previdenciario' | 'penal' | 'geral';
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  secoes: GuiaSecao[];
  faq: GuiaFaq[];
  /** URLs internas existentes: /artigos/:nicheId/:slug */
  artigosRelacionados: string[];
  /** URLs internas de páginas locais e de área. */
  paginasLocais: { href: string; label: string }[];
  whatsappText: string;
  atualizadoEm: string;
}
