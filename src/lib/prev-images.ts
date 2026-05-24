/**
 * Banco de imagens curado para a área /prev.
 *
 * Todas as fotos são do Unsplash (licença gratuita para uso comercial,
 * sem necessidade de atribuição, mas atribuição é apreciada).
 * URLs com parâmetros: ?w=largura&q=qualidade&auto=format para
 * otimização automática (WebP/AVIF quando suportado).
 *
 * Para trocar uma imagem, basta substituir o ID no Unsplash.
 * Para usar foto própria, basta substituir a URL inteira.
 */

const u = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const PREV_IMAGES = {
  // ===== HERO PRINCIPAL =====
  // Idosa sorrindo (calorosa, acolhedora) - principal foto da home
  heroSenior: {
    src: u("photo-1559963110-71b394e7494d", 1400),
    alt: "Senhora idosa sorrindo confiante",
    credit: "Foto: Andrea Piacquadio via Unsplash",
  },

  // Casal de idosos juntos, abraçados (família, segurança)
  heroCouple: {
    src: u("photo-1577741314755-048d8525d31e", 1400),
    alt: "Casal de idosos juntos, com expressão tranquila",
    credit: "Unsplash",
  },

  // ===== APOSENTADORIAS =====
  aposentadoriaIdade: {
    src: u("photo-1581579186913-45ac3e6efe93", 1000),
    alt: "Senhor idoso lendo jornal em casa",
    credit: "Unsplash",
  },
  aposentadoriaTempo: {
    src: u("photo-1565884280295-98eb83e41c65", 1000),
    alt: "Mãos de trabalhador idoso",
    credit: "Unsplash",
  },
  aposentadoriaRural: {
    src: u("photo-1500382017468-9049fed747ef", 1000),
    alt: "Campo agrícola com trabalhador rural",
    credit: "Unsplash",
  },
  aposentadoriaEspecial: {
    src: u("photo-1581094794329-c8112a89af12", 1000),
    alt: "Trabalhador em ambiente industrial usando equipamento de proteção",
    credit: "Unsplash",
  },

  // ===== AUXÍLIO-DOENÇA =====
  auxilioDoenca: {
    src: u("photo-1631815589968-fdb09a223b1e", 1000),
    alt: "Paciente em consulta médica",
    credit: "Unsplash",
  },
  auxilioDoencaSenior: {
    src: u("photo-1551601651-2a8555f1a136", 1000),
    alt: "Médico examinando paciente",
    credit: "Unsplash",
  },

  // ===== INVALIDEZ =====
  invalidez: {
    src: u("photo-1607358316066-5d6042b94d24", 1000),
    alt: "Pessoa em cadeira de rodas em ambiente acessível",
    credit: "Unsplash",
  },
  invalidezSuporte: {
    src: u("photo-1576765608535-5f04d1e3f289", 1000),
    alt: "Pessoa recebendo apoio em casa",
    credit: "Unsplash",
  },

  // ===== BPC / LOAS =====
  bpcIdoso: {
    src: u("photo-1447752875215-b2761acb3c5d", 1000),
    alt: "Idoso em casa com expressão serena",
    credit: "Unsplash",
  },
  bpcFamilia: {
    src: u("photo-1609220136736-443140cffec6", 1000),
    alt: "Família multigeracional reunida em casa",
    credit: "Unsplash",
  },
  bpcCuidador: {
    src: u("photo-1576765608535-5f04d1e3f289", 1000),
    alt: "Cuidadora ajudando pessoa idosa em casa",
    credit: "Unsplash",
  },

  // ===== ATENDIMENTO / CONFIANÇA =====
  // Conversa por celular - reforça WhatsApp
  whatsapp: {
    src: u("photo-1591348278863-a8fb3887e2aa", 800),
    alt: "Pessoa idosa usando celular",
    credit: "Unsplash",
  },

  // Documentos (mostra organização, técnica)
  documents: {
    src: u("photo-1450101499163-c8848c66ca85", 800),
    alt: "Mãos analisando documentos",
    credit: "Unsplash",
  },

  // ===== PLACEHOLDER PARA FOTO DO ADVOGADO =====
  // (substituir por foto profissional do Gilberto)
  lawyerPlaceholder: {
    src: u("photo-1560250097-0b93528c311a", 800),
    alt: "Placeholder — substituir por foto profissional do advogado",
    credit: "Placeholder Unsplash",
  },
} as const;

export type PrevImageKey = keyof typeof PREV_IMAGES;
