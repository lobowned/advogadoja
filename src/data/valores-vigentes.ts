/**
 * Valores oficiais usados pelas calculadoras. ATUALIZAR TODO JANEIRO.
 * Um lugar só: as calculadoras e os textos leem daqui.
 *
 * Conferido em 06/11/2026 nas fontes oficiais:
 * - Salário mínimo 2026: R$ 1.621,00 (Decreto 12.797/2025).
 * - Piso e teto dos benefícios do INSS 2026: R$ 1.621,00 e R$ 8.475,55
 *   (Portaria Interministerial MPS/MF nº 13, de 9/1/2026).
 * - Seguro-desemprego 2026, vigência 11/1/2026 (MTE): até R$ 2.222,17 = 80% da média;
 *   de R$ 2.222,18 a R$ 3.703,99 = R$ 1.777,74 + 50% do que passar de R$ 2.222,17;
 *   acima de R$ 3.703,99 = R$ 2.518,65 (teto).
 */
export const ANO_VIGENTE = 2026;

export const SALARIO_MINIMO = 1621.0;

export const PISO_INSS = SALARIO_MINIMO;
export const TETO_INSS = 8475.55;

export const SEGURO_DESEMPREGO = {
  vigencia: "11/01/2026",
  faixa1Ate: 2222.17,
  faixa2Ate: 3703.99,
  faixa2Base: 1777.74,
  teto: 2518.65,
  piso: SALARIO_MINIMO,
} as const;

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
