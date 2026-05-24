import PrevAreaPage from "@/components/prev/PrevAreaPage";
import { WHATSAPP_MESSAGES } from "@/lib/prev-config";

export default function PrevInvalidez() {
  return (
    <PrevAreaPage
      metaTitle="Aposentadoria por Invalidez (Incapacidade Permanente) — INSS"
      metaDescription="Aposentadoria por incapacidade permanente para trabalhadores que não podem mais exercer atividade. Conversão do auxílio-doença, perícia, valor e adicional de 25%."
      canonicalPath="/prev/aposentadoria-por-invalidez"
      breadcrumb="Áreas / Aposentadoria por Invalidez"
      heroTitle={
        <>
          Quando a incapacidade se torna{" "}
          <span className="italic text-prev-gold">permanente</span>.
        </>
      }
      heroSubtitle="A aposentadoria por incapacidade permanente — antiga aposentadoria por invalidez — é o benefício para quem não tem mais condições de exercer qualquer atividade que lhe garanta o sustento, mesmo após tratamento e reabilitação. Em alguns casos, há ainda um adicional de 25% para quem precisa de assistência permanente de terceiros."
      whoSectionTitle="Quem se enquadra"
      whoItems={[
        "Segurado do INSS com qualidade de segurado mantida e carência cumprida (12 contribuições — dispensada em acidente ou doenças graves listadas).",
        "Apresenta incapacidade total e permanente para o trabalho, comprovada por perícia médica.",
        "Não pode ser reabilitado para outra função compatível com sua limitação.",
        "Casos especiais (acidente, doenças graves) podem dispensar a carência.",
        "Possibilidade de adicional de 25% sobre o benefício para quem precisa de assistência permanente de outra pessoa.",
      ]}
      docsSectionTitle="Documentação para o pedido"
      docsItems={[
        "RG, CPF, comprovante de residência, CTPS, PIS/PASEP.",
        "Laudos médicos atualizados e detalhados — CID, prognóstico, irreversibilidade.",
        "Histórico médico completo (cirurgias, internações, tratamentos contínuos).",
        "Exames complementares (imagens, laboratoriais, neuropsicológicos).",
        "Receitas de medicação contínua e prescrições.",
        "Em caso de acidente: CAT (Comunicação de Acidente de Trabalho), boletim de ocorrência.",
        "Se necessário cuidador: comprovação de despesas com pessoa cuidadora.",
      ]}
      strategyTitle="Como conduzimos"
      strategyText={`Em muitos casos, a aposentadoria por invalidez é uma conversão do auxílio-doença — quando a incapacidade inicialmente temporária se confirma permanente. Trabalhamos com a documentação médica completa para sustentar a perícia, juntando laudos de especialistas, exames de imagem e histórico clínico.

Quando o INSS nega ou cessa o benefício prematuramente, partimos para a via judicial. No processo, é comum o juiz nomear perito independente, o que costuma trazer avaliação mais cuidadosa que a perícia administrativa.

Avaliamos também o direito ao adicional de 25%, conhecido como "grande invalidez", devido a quem precisa de assistência permanente de outra pessoa para atos básicos da vida (banho, alimentação, locomoção). Esse acréscimo nem sempre é concedido administrativamente.

Por fim, monitoramos a manutenção do benefício — o INSS pode convocar para perícia de revisão a cada 2 anos. Preparamos o segurado para essas reavaliações com laudos atualizados e acompanhamento contínuo.`}
      faq={[
        {
          q: "Qual a diferença entre aposentadoria por invalidez e auxílio-doença?",
          a: "Auxílio-doença é para incapacidade temporária — o trabalhador pode voltar ao trabalho após tratamento. Aposentadoria por invalidez (hoje aposentadoria por incapacidade permanente) é para quem não tem mais condições de trabalhar de forma definitiva, sem possibilidade de reabilitação para outra função.",
        },
        {
          q: "Quanto recebe quem se aposenta por invalidez?",
          a: "Em regra, 60% da média de todos os salários de contribuição + 2% por ano que exceder 20 (H) ou 15 (M). Em caso de acidente de trabalho, doença profissional ou acidente de qualquer natureza, o benefício é 100% da média. Pode haver acréscimo de 25% para quem precisa de assistência permanente.",
        },
        {
          q: "Posso trabalhar recebendo aposentadoria por invalidez?",
          a: "Não. Diferente da aposentadoria comum, voltar a exercer atividade remunerada cessa o benefício — a premissa é justamente a impossibilidade de trabalhar. Em casos de melhora, o INSS pode encaminhar para reabilitação profissional.",
        },
        {
          q: "O INSS pode cancelar minha aposentadoria depois de concedida?",
          a: "Pode, em caso de recuperação da capacidade ou em revisão administrativa (a cada 2 anos, em regra). Existe proteção para idosos e segurados há muito tempo em benefício. Cessação injusta pode ser revertida judicialmente com novo laudo pericial.",
        },
        {
          q: "Como conseguir o adicional de 25%?",
          a: "É necessário comprovar a necessidade de assistência permanente de terceiros — laudos médicos específicos, relatórios de cuidador, comprovação de despesas. Lista do anexo do Decreto 3.048/99 traz exemplos (cegueira total, paralisia, perda de membros). Mesmo fora dessa lista, é possível pleitear judicialmente conforme o caso concreto.",
        },
      ]}
      whatsappMessage={WHATSAPP_MESSAGES.invalidez}
    />
  );
}
