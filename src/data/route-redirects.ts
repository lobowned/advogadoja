/**
 * Endereços antigos que só redirecionam: calculadoras aposentadas (estimavam indenização, chance ou
 * custas), páginas de outros estados, a antiga página de casos e landings duplicadas.
 * Usado em App.tsx (rotas <Navigate replace>) e em scripts/vite-plugin-static-seo.ts, que grava para
 * cada um um HTML mínimo com canonical + refresh para o destino (buscador sem JavaScript também segue).
 * Artigos fundidos ficam em article-redirects.ts.
 */
export interface RouteRedirect {
  from: string;
  to: string;
}

export const routeRedirects: RouteRedirect[] = [
  { from: "/casos-de-sucesso", to: "/" },
  { from: "/advogado-sao-paulo", to: "/" },
  { from: "/advogado-rio-de-janeiro", to: "/" },
  { from: "/advogado-minas-gerais", to: "/" },
  { from: "/perguntas-frequentes", to: "/perguntas" },
  { from: "/calculadora-danos-morais", to: "/artigos/civil/danos-morais" },
  { from: "/calculadora-inventario", to: "/artigos/familia/inventario-heranca" },
  { from: "/calculadora-dpvat", to: "/artigos/civil/acidente-transito-indenizacao" },
  { from: "/calculadora-voo-cancelado", to: "/artigos/consumidor/atraso-cancelamento-voo-direitos" },
  { from: "/calculadora-negativacao", to: "/artigos/consumidor/negativacao-indevida-spc-serasa" },
  { from: "/calculadora-plano-saude", to: "/artigos/consumidor/plano-saude-negativa-cobertura" },
  { from: "/calculadora-fraude-bancaria", to: "/artigos/consumidor/golpe-pix-como-recuperar-dinheiro" },
  { from: "/calculadora-liminar-cirurgia", to: "/artigos/consumidor/plano-saude-negativa-cobertura" },
  { from: "/advogado-voo-cancelado-atrasado", to: "/advogado-problemas-voo" },
  { from: "/voo-cancelado", to: "/advogado-problemas-voo" },
];
