// Pool de mensagens para o componente DynamicSocialProof.
// Os números são determinísticos por dia (seed = data atual) para parecerem
// um contador real do dia e não "tremerem" a cada refresh.

export interface SocialProofMessage {
  id: string;
  text: (ctx: { city: string; count: number }) => string;
  needsCity?: boolean;
  needsCount?: boolean;
}

const FIRST_NAMES_M = ["João P.", "Carlos R.", "Pedro M.", "Lucas S.", "Rafael A.", "Bruno T.", "Marcos L."];
const FIRST_NAMES_F = ["Maria S.", "Ana C.", "Juliana R.", "Patricia M.", "Fernanda L.", "Camila B.", "Larissa O."];

const AREAS = [
  "trabalhista",
  "de família",
  "do consumidor",
  "previdenciário",
  "cível",
  "criminal",
];

// Seed simples baseada na data (YYYYMMDD) para variar 1x/dia.
const daySeed = () => {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
};

// PRNG determinístico (mulberry32).
const seeded = (seed: number) => {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

export const getDailyCount = (cityKey: string, min = 15, max = 42): number => {
  const rng = seeded(daySeed() + cityKey.length * 7);
  return Math.floor(rng() * (max - min + 1)) + min;
};

export const getRandomName = (): string => {
  const rng = seeded(Date.now());
  const pool = rng() > 0.5 ? FIRST_NAMES_F : FIRST_NAMES_M;
  return pool[Math.floor(rng() * pool.length)];
};

export const getRandomArea = (): string => {
  const rng = seeded(Date.now() + 1);
  return AREAS[Math.floor(rng() * AREAS.length)];
};

export const getRandomMinutesAgo = (): number => {
  const rng = seeded(Date.now() + 2);
  return Math.floor(rng() * 14) + 2; // 2-15 min
};

export const buildMessages = (city: string): string[] => {
  const count = getDailyCount(city || "default");
  const name1 = getRandomName();
  const name2 = getRandomName();
  const area1 = getRandomArea();
  const area2 = getRandomArea();
  const mins = getRandomMinutesAgo();

  const base = [
    `${count} pessoas consultaram hoje${city ? ` em ${city}` : ""}`,
    `${name1} acabou de falar com um advogado ${area1}`,
    `${name2} recebeu análise gratuita há ${mins} minutos`,
    `${Math.max(3, Math.floor(count / 3))} consultas ${area2} nas últimas 24h`,
    `Resposta média no WhatsApp: menos de 5 minutos`,
    `${name1} iniciou atendimento ${area1} agora há pouco`,
  ];

  if (city) {
    base.push(`Atendimento ativo em ${city} agora`);
    base.push(`${Math.max(2, Math.floor(count / 4))} novos casos em ${city} hoje`);
  }

  return base;
};
