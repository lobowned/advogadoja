import PrevAreaPage from "@/components/prev/PrevAreaPage";
import { WHATSAPP_MESSAGES } from "@/lib/prev-config";

export default function PrevAuxilioDoenca() {
  return (
    <PrevAreaPage
      metaTitle="Auxílio-Doença (Benefício por Incapacidade Temporária) — Advogado Previdenciário"
      metaDescription="Auxílio-doença para trabalhadores afastados por motivo de saúde. Análise do laudo, orientação para perícia, recurso e ação judicial."
      canonicalPath="/prev/auxilio-doenca"
      breadcrumb="Áreas / Auxílio-Doença"
      heroTitle={
        <>
          Quando a saúde{" "}
          <span className="italic text-prev-gold">não deixa trabalhar</span>,
          existe o auxílio.
        </>
      }
      heroSubtitle="O auxílio por incapacidade temporária — antigo auxílio-doença — é devido a quem fica afastado do trabalho por mais de 15 dias por doença ou acidente. Mas o INSS nega muito: laudos genéricos, perícias rápidas, períodos não reconhecidos. Saber pedir, recorrer ou ir ao Judiciário muda o desfecho."
      whoSectionTitle="Quem tem direito"
      whoItems={[
        "Trabalhador segurado do INSS (CLT, autônomo contribuinte, MEI, doméstico, facultativo) com qualidade de segurado mantida.",
        "Cumpriu a carência de 12 contribuições mensais — exceto em casos de acidente ou de algumas doenças listadas em lei, em que a carência é dispensada.",
        "Está incapacitado para o trabalho habitual por mais de 15 dias consecutivos, com comprovação médica.",
        "Em casos de acidente de trabalho ou doença ocupacional, não há carência e o benefício pode vir acompanhado de estabilidade ao retorno.",
      ]}
      docsSectionTitle="O que você vai precisar reunir"
      docsItems={[
        "Documento de identidade (RG ou CNH) e CPF.",
        "Carteira de Trabalho ou comprovante de inscrição no INSS (carnês, declarações).",
        "Laudos médicos atualizados — quanto mais detalhados, melhor (diagnóstico, CID, tempo estimado de afastamento).",
        "Exames complementares (imagens, laboratoriais) que sustentem o laudo.",
        "Receitas, atestados, comprovantes de tratamento em andamento.",
        "Em caso de acidente de trabalho: CAT (Comunicação de Acidente de Trabalho) emitida pela empresa.",
      ]}
      strategyTitle="Como conduzimos o caso"
      strategyText={`Primeiro entendemos o quadro clínico e cruzamos com o CNIS para confirmar carência e qualidade de segurado. Se o pedido administrativo ainda não foi feito, ajudamos a montar o requerimento e a preparar o segurado para a perícia médica do INSS — porque perícia mal feita é a principal causa de indeferimento evitável.

Quando há indeferimento ou cessação injusta do benefício, avaliamos se cabe recurso administrativo ou ação judicial — geralmente a via judicial é mais rápida e permite tutela de urgência se houver risco à saúde. No processo, podemos pedir nova perícia, juntar laudos atualizados e contestar conclusões superficiais.

Em paralelo, monitoramos prazos (a alta programada do INSS é uma das principais armadilhas) e orientamos sobre o pedido de prorrogação quando aplicável. Se a incapacidade evoluir para permanente, encaminhamos a conversão em aposentadoria por invalidez.`}
      faq={[
        {
          q: "O INSS negou meu auxílio. Posso recorrer?",
          a: "Sim. Existem duas vias: recurso administrativo (à Junta de Recursos do INSS, no prazo de 30 dias) ou ação judicial direta. Em geral, quando o motivo do indeferimento é a perícia médica, a via judicial costuma ser mais rápida — o juiz nomeia perito independente. Sempre avaliamos a melhor estratégia por caso.",
        },
        {
          q: "Posso receber auxílio sendo MEI ou autônomo?",
          a: "Sim, desde que esteja contribuindo regularmente para o INSS e tenha cumprido a carência de 12 meses. Para MEI, a contribuição mensal já dá cobertura. Quem contribuiu como facultativo ou contribuinte individual também tem direito, mantida a qualidade de segurado.",
        },
        {
          q: "Quanto recebo de auxílio-doença?",
          a: "Em regra, o valor é 91% do salário-de-benefício calculado pela média de todas as contribuições desde julho/1994 (regra atual). Existe um teto e nunca pode ser inferior ao salário mínimo. Erros no cálculo são comuns — sempre vale revisar.",
        },
        {
          q: "A empresa pode me demitir enquanto recebo auxílio-doença?",
          a: "Durante o recebimento o contrato fica suspenso (não pode haver dispensa). Quando o auxílio termina e o segurado retorna, em casos de acidente de trabalho ou doença ocupacional há estabilidade de 12 meses. Em doenças comuns, sem estabilidade legal, mas a dispensa logo após o retorno pode ser questionada como discriminatória se houver elementos.",
        },
        {
          q: "Recebi alta programada mas ainda não posso voltar a trabalhar. E agora?",
          a: "Você pode pedir prorrogação do benefício até 15 dias antes da data de alta — pelo Meu INSS ou pelo telefone 135. Se o pedido for negado, cabe recurso e/ou ação judicial. Continuar trabalhando incapacitado pode agravar a doença e gerar problemas trabalhistas; o melhor é agir nos prazos.",
        },
      ]}
      whatsappMessage={WHATSAPP_MESSAGES.auxilioDoenca}
    />
  );
}
