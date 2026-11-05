/**
 * Artigos fundidos (canibalização). Cada `from` saiu dos dados e redireciona para `to`.
 * Usado em App.tsx (rotas <Navigate replace>) e em scripts/generate-sitemap.ts (exclusão).
 */
export interface ArticleRedirect {
  from: string;
  to: string;
}

export const articleRedirects: ArticleRedirect[] = [
  { from: "/artigos/familia/guarda", to: "/artigos/familia/guarda-filhos-compartilhada-unilateral" },
  { from: "/artigos/trabalhista/rescisao-indireta-quando-empregado-demite-empresa", to: "/artigos/trabalhista/rescisao-indireta" },
  { from: "/artigos/trabalhista/desvio-de-funcao", to: "/artigos/trabalhista/desvio-funcao-acumulo-funcoes" },
  { from: "/artigos/trabalhista/trabalho-noturno-adicional", to: "/artigos/trabalhista/adicional-noturno-calcular-direitos" },
  { from: "/artigos/penal/habeas-corpus-liberdade", to: "/artigos/penal/habeas-corpus" },
  { from: "/artigos/penal/defesa-flagrante", to: "/artigos/penal/prisao-flagrante-direitos" },
  { from: "/artigos/previdenciario/aposentadoria-novas-regras-2025", to: "/artigos/previdenciario/aposentadoria" },
  { from: "/artigos/previdenciario/tempo-de-contribuicao-regras-transicao", to: "/artigos/previdenciario/aposentadoria" },
  { from: "/artigos/previdenciario/aposentadoria-invalidez", to: "/artigos/previdenciario/aposentadoria-por-invalidez-incapacidade-permanente" },
  { from: "/artigos/previdenciario/pensao-por-morte-quem-tem-direito", to: "/artigos/previdenciario/pensao-por-morte" },
  { from: "/artigos/civil/negativacao-indevida-nome-sujo", to: "/artigos/consumidor/negativacao-indevida-spc-serasa" },
  { from: "/artigos/consumidor/plano-saude-negou-cirurgia-direitos", to: "/artigos/consumidor/plano-saude-negativa-cobertura" },
  { from: "/artigos/consumidor/liminar-plano-saude-48-horas", to: "/artigos/consumidor/plano-saude-negativa-cobertura" },
  { from: "/blog/plano-saude-negou-cirurgia-liminar", to: "/artigos/consumidor/plano-saude-negativa-cobertura" },
  { from: "/artigos/consumidor/compras-online-direito-arrependimento", to: "/artigos/consumidor/direito-arrependimento-compras-online-7-dias" },
  { from: "/artigos/consumidor/devolucao-dobro-cobranca-indevida", to: "/artigos/consumidor/cobranca-indevida-restituicao-dobro" },
  { from: "/artigos/consumidor/overbooking-direitos-indenizacao", to: "/artigos/consumidor/overbooking-extravio-bagagem" },
];

export const redirectedPaths = new Set(articleRedirects.map((r) => r.from));
