// Guias pilares (Pilar 2 do _planos/PLANO-SEO-ROBUSTO.md).
// Cada guia é a página-mãe da área: linka os artigos do cluster e as páginas locais.
import type { Guia } from "./guias/tipos";
import { guiaTrabalhista } from "./guias/trabalhista";
import { guiaPrevidenciario } from "./guias/previdenciario";
import { guiaFamilia } from "./guias/familia";
import { guiaConsumidor } from "./guias/consumidor";
import { guiaCriminal } from "./guias/criminal";

export type { Guia, GuiaSecao, GuiaFaq } from "./guias/tipos";

export const guias: Guia[] = [
  guiaTrabalhista,
  guiaPrevidenciario,
  guiaFamilia,
  guiaConsumidor,
  guiaCriminal,
];

export const getGuia = (slug: string | undefined) => guias.find((g) => g.slug === slug);

/** Âncora estável para o sumário a partir do H2. */
export const ancora = (texto: string) =>
  texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const contarPalavras = (g: Guia) =>
  [g.intro, ...g.secoes.flatMap((s) => [s.h2, ...s.paragrafos]), ...g.faq.flatMap((f) => [f.q, f.a])]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
