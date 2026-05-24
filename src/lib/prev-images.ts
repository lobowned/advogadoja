/**
 * Banco de imagens curado para a área /prev.
 * Todas do Pexels — fotos REAIS de idosos e PCDs, validadas visualmente.
 *
 * URL padrão Pexels CDN:
 * https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg?auto=compress&cs=tinysrgb&w={W}
 */

const pexels = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const PREV_IMAGES = {
  // ===== HERO PRINCIPAL =====
  heroCouple: {
    src: pexels(8871427, 1400),
    alt: "Casal de idosos abraçados em casa, com expressão carinhosa",
    credit: "Pexels",
  },
  heroSenior: {
    src: pexels(6248451, 1200),
    alt: "Senhora idosa sorrindo e acenando, sentada num sofá",
    credit: "Pexels",
  },

  // ===== APOSENTADORIAS =====
  aposentadoriaIdade: {
    src: pexels(6248451, 1000),
    alt: "Senhora idosa sorrindo e acenando",
    credit: "Pexels",
  },
  aposentadoriaTempo: {
    src: pexels(14319677, 1000),
    alt: "Senhora idosa sorrindo, em vestido florido",
    credit: "Pexels",
  },
  aposentadoriaRural: {
    src: pexels(13997839, 1000),
    alt: "Senhora idosa sorrindo, lendo livro em frente a uma casa colorida",
    credit: "Pexels",
  },
  aposentadoriaEspecial: {
    src: pexels(6873925, 1000),
    alt: "Senhora idosa sorrindo, segurando revista",
    credit: "Pexels",
  },

  // ===== AUXÍLIO-DOENÇA =====
  auxilioDoenca: {
    src: pexels(8376265, 1000),
    alt: "Médico em consulta atendendo paciente",
    credit: "Pexels",
  },
  auxilioDoencaSenior: {
    src: pexels(6873925, 1000),
    alt: "Senhora idosa em consulta",
    credit: "Pexels",
  },

  // ===== INVALIDEZ =====
  invalidez: {
    src: pexels(8527286, 1200),
    alt: "Casal feliz, mulher em cadeira de rodas, expressão de alegria",
    credit: "Pexels",
  },
  invalidezSuporte: {
    src: pexels(8127978, 1000),
    alt: "Homem em cadeira de rodas trabalhando com laptop, sorrindo",
    credit: "Pexels",
  },

  // ===== BPC / LOAS =====
  bpcIdoso: {
    src: pexels(19775974, 1000),
    alt: "Senhora idosa sorrindo, segurando xícara de café em casa",
    credit: "Pexels",
  },
  bpcFamilia: {
    src: pexels(5693000, 1000),
    alt: "Avó ensinando neta a tricotar em casa",
    credit: "Pexels",
  },
  bpcCuidador: {
    src: pexels(5257621, 1000),
    alt: "Senhora idosa sentada à mesa com xícara de café",
    credit: "Pexels",
  },

  // ===== ATENDIMENTO =====
  whatsapp: {
    src: pexels(6248451, 800),
    alt: "Senhora idosa sorrindo",
    credit: "Pexels",
  },
  documents: {
    src: pexels(5257621, 800),
    alt: "Senhora idosa lendo documento",
    credit: "Pexels",
  },
  lawyerPlaceholder: {
    src: pexels(8376265, 800),
    alt: "Placeholder — substituir por foto profissional do advogado",
    credit: "Placeholder Pexels",
  },
} as const;

export type PrevImageKey = keyof typeof PREV_IMAGES;
