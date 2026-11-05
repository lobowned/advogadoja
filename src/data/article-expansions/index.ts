/**
 * Expansões dos artigos curtos, por área. Chave: "<nicheId>/<slug>".
 * Aplicadas no fim de blog-articles.ts (seções e FAQ extras).
 * Imports explícitos (sem import.meta.glob) para funcionar também no tsx do sitemap.
 */
import type { ArticleExpansion } from "./types";
import trabalhista from "./trabalhista";
import penal from "./penal";
import previdenciario from "./previdenciario";
import familia from "./familia";
import consumidor from "./consumidor";
import civil from "./civil";

export type { ArticleExpansion };

export const articleExpansions: Record<string, ArticleExpansion> = {
  ...trabalhista,
  ...penal,
  ...previdenciario,
  ...familia,
  ...consumidor,
  ...civil,
};
