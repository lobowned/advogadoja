/**
 * Chaves das páginas locais (`<área>-<cidade>`), sem o conteúdo.
 * Fica separado de local-pages.ts para o App montar as rotas sem carregar o texto das
 * 43 páginas no pacote principal. local-pages.ts usa LocalPageKey no tipo do objeto,
 * então o TypeScript acusa erro se uma chave existir num arquivo e faltar no outro.
 */
export const LOCAL_PAGE_KEYS = [
  "criminal-salvador",
  "criminal-camacari",
  "previdenciario-salvador",
  "previdenciario-camacari",
  "trabalhista-salvador",
  "trabalhista-camacari",
  "familia-salvador",
  "familia-camacari",
  "criminal-lauro-de-freitas",
  "previdenciario-lauro-de-freitas",
  "trabalhista-lauro-de-freitas",
  "familia-lauro-de-freitas",
  "consumidor-salvador",
  "consumidor-camacari",
  "consumidor-lauro-de-freitas",
  "criminal-feira-de-santana",
  "previdenciario-feira-de-santana",
  "trabalhista-feira-de-santana",
  "familia-feira-de-santana",
  "criminal-vitoria-da-conquista",
  "previdenciario-vitoria-da-conquista",
  "trabalhista-vitoria-da-conquista",
  "familia-vitoria-da-conquista",
  "criminal-ilheus",
  "previdenciario-ilheus",
  "trabalhista-ilheus",
  "familia-ilheus",
  "criminal-itabuna",
  "previdenciario-itabuna",
  "trabalhista-itabuna",
  "familia-itabuna",
  "criminal-juazeiro",
  "previdenciario-juazeiro",
  "trabalhista-juazeiro",
  "familia-juazeiro",
  "criminal-porto-seguro",
  "previdenciario-porto-seguro",
  "trabalhista-porto-seguro",
  "familia-porto-seguro",
  "criminal-barreiras",
  "previdenciario-barreiras",
  "trabalhista-barreiras",
  "familia-barreiras",
] as const;

export type LocalPageKey = (typeof LOCAL_PAGE_KEYS)[number];

/** Cidades e áreas com página local. A cidade pode ter hífen (lauro-de-freitas), a área não. */
export const LOCAL_CITY_NAMES: Record<string, string> = {
  salvador: "Salvador",
  camacari: "Camaçari",
  "lauro-de-freitas": "Lauro de Freitas",
  "feira-de-santana": "Feira de Santana",
  "vitoria-da-conquista": "Vitória da Conquista",
  ilheus: "Ilhéus",
  itabuna: "Itabuna",
  juazeiro: "Juazeiro",
  "porto-seguro": "Porto Seguro",
  barreiras: "Barreiras",
};

export const LOCAL_NICHE_NAMES: Record<string, string> = {
  criminal: "Criminal",
  previdenciario: "Previdenciário",
  trabalhista: "Trabalhista",
  familia: "Família",
  consumidor: "Consumidor",
};

/** Separa a chave só no PRIMEIRO hífen: "familia-lauro-de-freitas" → familia / lauro-de-freitas. */
export const splitLocalKey = (key: string) => {
  const i = key.indexOf("-");
  return { nicheSlug: key.slice(0, i), citySlug: key.slice(i + 1) };
};

export const LOCAL_PAGE_ROUTES = LOCAL_PAGE_KEYS.map((key) => ({ key, ...splitLocalKey(key) }));
