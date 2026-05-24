import PrevAreaPage from "@/components/prev/PrevAreaPage";
import { WHATSAPP_MESSAGES } from "@/lib/prev-config";

export default function PrevAuxilioDoenca() {
  return (
    <PrevAreaPage
      metaTitle="Auxílio-Doença do INSS — INSS negou? Como recorrer"
      metaDescription="Auxílio-doença do INSS para trabalhador afastado por doença. INSS negou ou cortou? A gente te ajuda a recorrer e ir pra Justiça se precisar."
      canonicalPath="/prev/auxilio-doenca"
      breadcrumb="Em quais casos eu ajudo / Auxílio-Doença"
      quizKey="auxilio-doenca"
      stats={[
        { number: "37%", label: "Dos pedidos são negados administrativamente" },
        { number: "12 meses", label: "Carência mínima exigida (com exceções)" },
        { number: "8-18 meses", label: "Tempo médio na Justiça Federal" },
      ]}
      commonMistakes={[
        "Ir na perícia sem laudos médicos completos e atualizados — principal causa de negativa.",
        "Não pedir prorrogação até 15 dias ANTES da data de alta (perde o direito de continuar recebendo).",
        "Aceitar a alta médica do INSS sem questionar quando ainda não tem condição de trabalhar.",
        "Em acidente de trabalho, deixar a empresa não emitir a CAT — sem isso, perde a estabilidade de 12 meses no retorno.",
        "Tentar resolver sozinho recursos administrativos cheios de tecnicidade.",
      ]}
      heroTitle={
        <>
          INSS{" "}
          <span className="italic text-prev-gold">negou</span> seu
          auxílio-doença?
        </>
      }
      heroSubtitle="Você ficou doente, parou de trabalhar, foi pedir auxílio e o INSS negou ou cortou. Calma. Isso acontece muito — geralmente por perícia mal feita, falta de laudo ou erro do INSS. A gente analisa seu caso e mostra o caminho pra reverter."
      whoSectionTitle="Quem tem direito ao auxílio-doença?"
      whoItems={[
        "Quem paga INSS (carteira assinada, MEI, autônomo, doméstica, contribuinte facultativo).",
        "Já contribuiu por pelo menos 12 meses — em casos de acidente ou algumas doenças graves, esse tempo é dispensado.",
        "Está afastado do trabalho por mais de 15 dias por causa de doença ou acidente, com comprovação médica.",
        "Em acidente de trabalho ou doença ocupacional não precisa de carência e você ainda tem 12 meses de estabilidade quando voltar.",
      ]}
      docsSectionTitle="O que você vai precisar"
      docsItems={[
        "RG, CPF e comprovante de endereço.",
        "Carteira de Trabalho ou comprovantes de quem paga INSS (carnês, declarações).",
        "Laudos médicos atualizados — quanto mais detalhe, melhor (diagnóstico, CID, tempo de afastamento).",
        "Exames (imagens, sangue, tudo que comprove o problema).",
        "Receitas dos remédios que você está tomando, atestados, comprovantes de tratamento.",
        "Em caso de acidente de trabalho: CAT (a empresa que tem que emitir).",
      ]}
      strategyTitle="Como eu trabalho seu caso"
      strategyText={`Primeiro a gente olha junto sua situação: tempo de INSS, qual a doença, se já fez perícia, se já foi negado. Se ainda não pediu, eu te ajudo a montar o pedido e te preparo pra perícia — porque perícia mal feita é a principal causa de INSS negar.

Se o INSS já negou ou cortou, a gente vê se vale a pena recorrer pelo próprio INSS (mais lento) ou ir direto pra Justiça (mais rápido em muitos casos). Na Justiça, o juiz costuma nomear um perito novo, o que ajuda muito quando a perícia do INSS foi superficial.

Em casos urgentes (você sem renda, doença grave, sem condições de esperar), entramos com pedido de tutela de urgência — o juiz pode mandar o INSS começar a pagar enquanto o processo continua.

Se sua incapacidade vira permanente, a gente converte em aposentadoria por invalidez sem você precisar abrir outro processo.`}
      faq={[
        {
          q: "INSS negou. E agora, posso recorrer?",
          a: "Pode sim. Tem 2 caminhos: recorrer pelo próprio INSS (Junta de Recursos, prazo de 30 dias) ou ir direto pra Justiça. Quando o motivo foi a perícia médica, ir pra Justiça costuma ser mais rápido e mais favorável — o juiz nomeia perito novo. Vou avaliar o seu caso e dizer qual o melhor caminho.",
        },
        {
          q: "Sou MEI / autônomo. Recebo auxílio-doença?",
          a: "Recebe sim. Se você paga INSS regularmente (pelo MEI ou como contribuinte individual) e já contribuiu por pelo menos 12 meses, tem direito igual qualquer outro trabalhador. Só precisa estar com o INSS em dia quando ficar doente.",
        },
        {
          q: "Quanto vou receber de auxílio-doença?",
          a: "Em geral é 91% do salário-de-benefício, calculado pela média de tudo que você ganhou desde julho/1994. Tem teto máximo (igual ao salário do INSS) e mínimo (1 salário mínimo). Erros no cálculo são comuns — sempre vale conferir.",
        },
        {
          q: "Meu chefe pode me demitir enquanto recebo auxílio?",
          a: "Não. Enquanto você recebe auxílio-doença, seu contrato fica suspenso (sem demissão). Quando o auxílio termina, em caso de acidente de trabalho ou doença ocupacional você tem 12 meses de estabilidade. Em doença comum, sem estabilidade legal — mas se a empresa demitir logo no retorno por causa da doença, pode dar pra questionar.",
        },
        {
          q: "O INSS deu alta mas eu não posso voltar a trabalhar.",
          a: "Você pode pedir prorrogação do benefício até 15 dias antes da data de alta — pelo Meu INSS ou ligando 135. Se negarem, cabe recurso ou ação na Justiça (com pedido de tutela de urgência se for grave). Voltar a trabalhar doente pode piorar tudo. Não deixa pra última hora.",
        },
      ]}
      whatsappMessage={WHATSAPP_MESSAGES.auxilioDoenca}
    />
  );
}
