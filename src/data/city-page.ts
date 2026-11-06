/**
 * Textos da página /advogado/<cidade>, usados pela página (CityLanding.tsx) e pela versão
 * pré-montada para buscadores (scripts/vite-plugin-static-seo.ts). Um lugar só para os dois.
 */
import type { CityData } from "./cities";

type CityRef = Pick<CityData, "name" | "stateCode">;

export const cityPageMeta = (city: CityRef) => ({
  title: `Advogado em ${city.name} ${city.stateCode} | Riccio Advocacia`,
  description: `Advogado em ${city.name} online. Atendimento jurídico online em Trabalhista, Família, Previdenciário e mais, para ${city.name} e região.`,
  intro: `Fale com o Dr. Gilberto Riccio (OAB/BA 46.638) pelo WhatsApp. Atendimento online para quem mora em ${city.name} e região.`,
});

/** Mesmas perguntas na página e no JSON-LD (o Google pede que o FAQPage reflita o texto visível). */
export const cityFaq = (city: CityRef) => [
  {
    q: `Como encontrar um advogado em ${city.name}?`,
    a: `Você pode falar com o advogado pelo WhatsApp ou pelo chat do site da Riccio Advocacia. O atendimento é online: basta clicar em "Falar com Advogado" e contar o caso.`,
  },
  {
    q: `Qual o valor de uma consulta com advogado em ${city.name}?`,
    a: "Os honorários dependem do tipo de caso e são combinados por escrito antes de qualquer ação. Conte o seu caso pelo WhatsApp: a primeira resposta indica o caminho e quais documentos reunir.",
  },
  {
    q: `O atendimento online tem validade em ${city.name}?`,
    a:
      city.stateCode === "BA"
        ? `Sim. A conversa, os documentos e a assinatura podem ser feitos a distância, e os processos na Bahia tramitam em meio eletrônico (PJe). Por isso dá para acompanhar um caso de ${city.name} sem escritório na cidade. O Dr. Gilberto Riccio é inscrito na OAB/BA sob o nº 46.638.`
        : "A conversa, os documentos e a assinatura podem ser feitos a distância. O Dr. Gilberto Riccio é inscrito na OAB/BA (nº 46.638); para casos fora da Bahia, ele diz logo no primeiro contato se pode atuar ou se é melhor procurar um advogado local.",
  },
];
