/**
 * Advogado responsável pelo site e autor dos guias, artigos e respostas.
 * Página própria em /advogado-gilberto-riccio (sinal de autoria e confiança para o Google).
 * Só dados verificáveis: inscrição na OAB, CNPJ e forma de atendimento.
 */
export const AUTHOR_PATH = "/advogado-gilberto-riccio";
export const AUTHOR_URL = `https://riccioadvocacia.online${AUTHOR_PATH}`;
export const AUTHOR_NAME = "Gilberto Riccio";
export const AUTHOR_OAB = "OAB/BA 46.638";
export const OFFICE_CNPJ = "50.947.818/0001-94";

export const authorSchema = {
  "@type": "Person",
  "@id": `${AUTHOR_URL}#pessoa`,
  name: AUTHOR_NAME,
  url: AUTHOR_URL,
  jobTitle: "Advogado",
  identifier: AUTHOR_OAB,
  worksFor: {
    "@type": "LegalService",
    "@id": "https://riccioadvocacia.online/#legalservice",
    name: "Riccio Advocacia",
    url: "https://riccioadvocacia.online/",
  },
};
