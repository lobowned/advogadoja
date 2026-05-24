import PrevAreaPage from "@/components/prev/PrevAreaPage";
import { WHATSAPP_MESSAGES } from "@/lib/prev-config";
import { PREV_IMAGES } from "@/lib/prev-images";

export default function PrevInvalidez() {
  return (
    <PrevAreaPage
      metaTitle="Aposentadoria por Invalidez — Quando não dá mais pra trabalhar | INSS"
      metaDescription="Aposentadoria por invalidez é pra quem não tem mais como trabalhar de forma permanente. INSS negou? Cortou seu benefício? A gente te ajuda."
      canonicalPath="/prev/aposentadoria-por-invalidez"
      breadcrumb="Em quais casos eu ajudo / Aposentadoria por Invalidez"
      quizKey="aposentadoria-por-invalidez"
      heroImage={PREV_IMAGES.invalidez}
      stats={[
        { number: "60% + 2%", label: "Coeficiente (com bônus por anos extras)" },
        { number: "+25%", label: "Adicional pra quem precisa de cuidador" },
        { number: "2 anos", label: "Periodicidade da perícia de revisão" },
      ]}
      commonMistakes={[
        "Pedir invalidez sem laudo de especialista detalhado (CID, prognóstico, impossibilidade de reabilitação).",
        "Aceitar perícia superficial do INSS sem questionar — Justiça nomeia perito independente, melhor qualidade.",
        "Esquecer de pedir o adicional de 25% — muitas vezes esquecido mesmo quando o paciente precisa de cuidador.",
        "Voltar a trabalhar enquanto recebe — cessa o benefício imediatamente.",
        "Não preparar para a perícia de revisão (a cada 2 anos) — laudos desatualizados podem fazer perder.",
      ]}
      heroTitle={
        <>
          Não consegue mais{" "}
          <span className="italic text-prev-gold">trabalhar?</span>
        </>
      }
      heroSubtitle="Quando a doença ou acidente impede de trabalhar pra sempre, a aposentadoria por invalidez existe pra isso. Mas o INSS é rigoroso na perícia, nega muito caso e até corta benefícios já concedidos. A gente luta pelo seu direito, do começo ao fim."
      whoSectionTitle="Quem tem direito"
      whoItems={[
        "Quem paga INSS regularmente e cumpriu pelo menos 12 meses de carência (dispensado em acidente ou doença grave).",
        "Não tem mais condições de trabalhar — comprovado por perícia médica.",
        "Não dá pra ser reabilitado pra outra função compatível com a limitação.",
        "Em alguns casos (acidente, doença grave) nem precisa do tempo mínimo de contribuição.",
        "Quem precisa de cuidador permanente tem direito a 25% a mais sobre o benefício (chamado 'grande invalidez').",
      ]}
      docsSectionTitle="O que reunir"
      docsItems={[
        "RG, CPF, comprovante de endereço, Carteira de Trabalho, PIS/PASEP.",
        "Laudos médicos detalhados — diagnóstico, prognóstico, se é definitivo.",
        "Histórico médico (cirurgias, internações, tratamentos contínuos).",
        "Exames de imagem, sangue, neurológicos — tudo que comprove o problema.",
        "Receitas de remédios contínuos.",
        "Em acidente de trabalho: CAT (Comunicação de Acidente de Trabalho), boletim de ocorrência se for o caso.",
        "Se precisa de cuidador: comprovantes de gasto com pessoa cuidando (recibos, contratos).",
      ]}
      strategyTitle="Como a gente conduz seu caso"
      strategyText={`Em muitos casos, a aposentadoria por invalidez vem da conversão do auxílio-doença — quando aquela incapacidade que parecia temporária se confirma permanente. A gente trabalha com sua documentação médica completa pra sustentar a perícia, juntando laudos de especialistas, exames de imagem e histórico clínico.

Quando o INSS nega ou corta antes da hora, vamos pra Justiça. No processo, o juiz costuma nomear perito independente — o que geralmente traz uma avaliação mais cuidadosa do que a perícia rápida do INSS.

Avaliamos também o direito ao acréscimo de 25% (chamado 'grande invalidez'), que é pra quem precisa de outra pessoa cuidando — banho, comida, locomoção. Esse extra nem sempre é concedido administrativamente, mas a gente luta pra conseguir.

Por fim, monitoramos o benefício depois de concedido — o INSS pode chamar pra perícia de revisão a cada 2 anos. A gente prepara você pra essas reavaliações com laudos atualizados.`}
      faq={[
        {
          q: "Qual a diferença entre auxílio-doença e aposentadoria por invalidez?",
          a: "Auxílio-doença é quando a incapacidade é TEMPORÁRIA — você fica afastado, trata e volta a trabalhar. Aposentadoria por invalidez é quando a incapacidade é PERMANENTE — não tem mais como voltar a trabalhar nem ser reabilitado em outra função.",
        },
        {
          q: "Quanto recebe quem aposenta por invalidez?",
          a: "Em geral, 60% da média de tudo que ganhou contribuindo + 2% por ano que excedeu 20 (homem) ou 15 (mulher). Em caso de acidente de trabalho ou doença profissional, é 100% da média. Pode ter acréscimo de 25% pra quem precisa de cuidador.",
        },
        {
          q: "Posso trabalhar recebendo aposentadoria por invalidez?",
          a: "Não. Diferente da aposentadoria comum, voltar a trabalhar cessa o benefício — a premissa é que você não consegue mesmo trabalhar. Se você melhorar, o INSS pode encaminhar pra reabilitação profissional pra outra função.",
        },
        {
          q: "INSS pode cortar minha aposentadoria depois de concedida?",
          a: "Pode, em revisão administrativa (a cada 2 anos) ou se entender que houve recuperação. Tem proteção pra idoso e pra quem está há muito tempo no benefício. Se cortarem injustamente, a gente reverte na Justiça com perícia nova.",
        },
        {
          q: "Como conseguir o adicional de 25%?",
          a: "Você precisa comprovar que precisa de assistência permanente de outra pessoa — com laudo médico específico, comprovantes de gastos com cuidador, relatos detalhados. Tem uma lista no Decreto 3.048/99 (cegueira total, paralisia, perda de membros, etc.) mas mesmo fora dessa lista dá pra pedir judicialmente conforme cada caso.",
        },
      ]}
      whatsappMessage={WHATSAPP_MESSAGES.invalidez}
    />
  );
}
