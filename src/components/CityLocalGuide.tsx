import type { CityData } from "@/data/cities";

interface CityLocalGuideProps {
  city: CityData;
  /** Optional area focus for the guide (ex.: "Direito do Consumidor", "Direito Trabalhista"). */
  area?: string;
  /** Optional tribunal info for the area (overrides courtInfo phrasing). */
  tribunalInfo?: string;
  /** Optional PROCON / órgão de defesa address line. */
  proconAddress?: string;
}

/**
 * Bloco prose longo e único por cidade — entre ~350 e ~500 palavras.
 *
 * Combina dados reais já existentes em cities.ts (população, região,
 * courtInfo, highlights, localContext) com variações deterministas de
 * narrativa para que cidades diferentes recebam ESTRUTURAS de texto
 * diferentes (não só dados trocados). Reduz o sinal de "template
 * repetido" que o Google penaliza como thin content.
 *
 * Não inventa estatísticas, decisões judiciais nem comarcas que não
 * estão nos dados de origem.
 */
export function CityLocalGuide({
  city,
  area = "atendimento jurídico generalista",
  tribunalInfo,
  proconAddress,
}: CityLocalGuideProps) {
  const variant = hashSlug(city.slug) % 3;
  const regionPhrase = REGION_PHRASES[city.region] ?? city.region;
  const courtText = tribunalInfo ?? city.courtInfo;

  // Três aberturas distintas, escolhidas por hash do slug
  const opening = [
    `${city.name} é uma das maiores cidades da região ${regionPhrase}, com população estimada em ${city.population} de habitantes. Esse porte traz para o dia a dia jurídico da cidade uma combinação característica: alto volume de demandas, varas judiciais sobrecarregadas e particularidades que só fazem sentido quando se conhece a realidade local.`,
    `Atuar com ${area} em ${city.name} exige entender o contexto da cidade. Com cerca de ${city.population} de habitantes e localizada na região ${regionPhrase} do país, a capital ${city.stateCode === "DF" ? "federal" : `do estado ${city.state.toLowerCase() === city.name.toLowerCase() ? "" : `de ${city.state}`}`.trim()} concentra um perfil próprio de litígios — diferente do que se vê em outras praças.`,
    `Quem busca ${area} em ${city.name} normalmente já entrou em contato com a rotina dos órgãos locais — fila no Procon, audiência no juizado especial, espera por perícia. Com ${city.population} de habitantes na região ${regionPhrase}, a cidade tem uma estrutura jurídica robusta, mas que exige conhecimento prático para ser usada bem.`,
  ][variant];

  // Bloco do tribunal — duas formulações alternativas
  const tribunalParagraph =
    variant === 0
      ? `Os processos da cidade tramitam principalmente no ${courtText}. Essa estrutura define prazos, jurisprudência aplicável e até mesmo a estratégia inicial — em muitos casos, o juizado especial cível resolve disputas de até 40 salários mínimos em poucos meses, sem necessidade de advogado para a parte autora, mas com chances bem maiores de êxito quando há acompanhamento técnico desde o primeiro contato.`
      : `Os litígios são distribuídos no ${courtText}, e isso importa porque cada tribunal tem suas próprias súmulas, entendimentos consolidados e ritmo de tramitação. Conhecer o tribunal competente é o que separa uma petição genérica de uma estratégia local — incluindo a opção, em causas menores, de usar o juizado especial cível (até 40 salários mínimos), que costuma ser mais rápido.`;

  // Bloco de destaques — converte highlights em prose corrida
  const highlightsParagraph =
    city.highlights.length > 0
      ? `Do ponto de vista do perfil econômico e social, ${city.name} se destaca por: ${city.highlights
          .map((h) => h.toLowerCase())
          .join("; ")}. Esses fatores impactam diretamente os tipos de causa mais comuns na cidade — desde questões de consumo ligadas ao setor predominante, até demandas trabalhistas, previdenciárias e cíveis que refletem a composição econômica local.`
      : "";

  // Contexto local — usa o campo localContext direto
  const contextParagraph = `${city.localContext} Por isso, atendimento jurídico em ${city.name} não é trabalho de "copiar e colar" peças prontas — é entender o perfil das demandas da cidade, os hábitos da Justiça local e quais teses já estão consolidadas no ${city.stateCode}.`;

  // Procon / órgão de defesa, se houver
  const proconParagraph = proconAddress
    ? `Antes de partir para a Justiça, vale lembrar que ${city.name} conta com canais administrativos de defesa do consumidor. ${proconAddress} Em muitos casos, uma reclamação bem feita no Procon ou no consumidor.gov.br resolve sem processo — mas, quando não resolve, ela serve como prova relevante no Judiciário.`
    : "";

  // Fechamento variável
  const closing = [
    `Se você mora em ${city.name} e está com um problema jurídico, o primeiro passo é entender em qual via o seu caso se resolve mais rápido: administrativa, juizado especial ou justiça comum. É exatamente sobre isso que conversamos no atendimento inicial pelo WhatsApp — sem custo e sem compromisso.`,
    `Para quem está em ${city.name}, a recomendação prática é simples: junte os documentos que você tem, descreva a situação em uma linha do tempo curta e fale com um advogado antes de aceitar acordo, assinar contrato ou desistir. A maior parte dos prejuízos que vemos vem de decisões tomadas sem orientação na hora certa.`,
    `Cada caso em ${city.name} tem um caminho próprio — alguns se resolvem em semanas pelo juizado, outros exigem ação na justiça comum, outros nem precisam de processo. O atendimento pelo WhatsApp serve justamente para identificar isso antes de gastar tempo e dinheiro em uma estratégia que não cabe ao seu problema.`,
  ][variant];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Guia jurídico de {city.name}: o que você precisa saber antes de
            procurar um advogado
          </h2>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-4 leading-relaxed">
            <p>{opening}</p>
            <p>{tribunalParagraph}</p>
            {highlightsParagraph && <p>{highlightsParagraph}</p>}
            <p>{contextParagraph}</p>
            {proconParagraph && <p>{proconParagraph}</p>}
            <p>{closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------

const REGION_PHRASES: Record<string, string> = {
  Sudeste: "Sudeste",
  Sul: "Sul",
  Nordeste: "Nordeste",
  Norte: "Norte",
  "Centro-Oeste": "Centro-Oeste",
};

/** Hash determinista simples (djb2-like) para escolher variante de texto. */
function hashSlug(slug: string): number {
  let h = 5381;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 33) ^ slug.charCodeAt(i);
  }
  return Math.abs(h);
}
