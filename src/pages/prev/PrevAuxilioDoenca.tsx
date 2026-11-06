import PrevAreaPage from "@/components/prev/PrevAreaPage";
import { WHATSAPP_MESSAGES } from "@/lib/prev-config";

export default function PrevAuxilioDoenca() {
  return (
    <PrevAreaPage
      metaTitle="Auxílio-Doença do INSS — INSS negou? Como recorrer"
      metaDescription="Auxílio-doença do INSS para trabalhador afastado por doença. INSS negou ou cortou? A gente te ajuda a recorrer e ir pra Justiça se precisar."
      canonicalPath="/prev/auxilio-doenca"
      breadcrumb="Em quais casos eu ajudo / Auxílio-Doença"
      lawyerId="claudia-martins"
      quizKey="auxilio-doenca"
      stats={[
        { number: "91%", label: "Do salário-de-benefício (regra geral)" },
        { number: "12 meses", label: "Carência mínima exigida (com exceções)" },
        { number: "30 dias", label: "Prazo para recorrer ao próprio INSS" },
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
          Auxílio-doença, do{" "}
          <span className="italic text-prev-gold">pedido</span> à concessão.
        </>
      }
      heroSubtitle="Você ficou doente e ainda não pediu, já pediu e foi negado, ou está em curso — conta sua situação que eu analiso e te indico o caminho. Sem juridiquês, sem promessa furada."
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
          a: "Pode sim. Tem 2 caminhos: recorrer pelo próprio INSS (Junta de Recursos, prazo de 30 dias) ou ir direto pra Justiça. Quando o motivo foi a perícia médica, ir pra Justiça costuma valer a pena, porque o juiz nomeia perito novo. Vou avaliar o seu caso e dizer qual o melhor caminho.",
        },
        {
          q: "Sou MEI / autônomo. Recebo auxílio-doença?",
          a: "Recebe sim. Se você paga INSS regularmente (pelo MEI ou como contribuinte individual) e já tem 12 contribuições, tem o mesmo direito de qualquer trabalhador. Acidente de qualquer natureza e algumas doenças graves dispensam essas 12 contribuições. Precisa estar com a qualidade de segurado quando ficar doente.",
        },
        {
          q: "Quanto vou receber de auxílio-doença?",
          a: "Em geral é 91% do salário de benefício (a média das contribuições desde julho de 1994), limitado à média dos últimos 12 salários de contribuição e ao teto do INSS, e nunca abaixo de 1 salário mínimo (Lei 8.213/1991, arts. 29, § 10, e 61). Erros no cálculo acontecem; vale conferir.",
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
