import PrevAreaPage from "@/components/prev/PrevAreaPage";
import { IllustrationFamily } from "@/components/prev/PrevIllustrations";
import { WHATSAPP_MESSAGES } from "@/lib/prev-config";

export default function PrevBpcLoas() {
  return (
    <PrevAreaPage
      metaTitle="BPC / LOAS — 1 salário pra idoso e pessoa com deficiência"
      metaDescription="BPC/LOAS é 1 salário mínimo todo mês pra idoso de 65+ ou pessoa com deficiência em família de baixa renda. Não precisa ter contribuído ao INSS. A gente te ajuda a pedir."
      canonicalPath="/prev/bpc-loas"
      breadcrumb="Em quais casos eu ajudo / BPC / LOAS"
      heroIllustration={<IllustrationFamily className="w-full h-auto" />}
      heroTitle={
        <>
          1 salário do governo,{" "}
          <span className="italic text-prev-gold">todo mês</span>.
        </>
      }
      heroSubtitle="O BPC/LOAS é um direito de quem mais precisa: idoso de 65 anos ou mais, ou pessoa com deficiência, em família com renda baixa. Não precisa ter trabalhado nem ter pago INSS um dia sequer. Mas tem regra, tem prova, e o INSS nega bastante. Eu te ajudo do começo ao fim."
      whoSectionTitle="Quem pode receber"
      whoItems={[
        "Idoso a partir de 65 anos, brasileiro ou português morando no Brasil.",
        "Pessoa com deficiência de qualquer idade — com impedimento de pelo menos 2 anos que dificulta vida em sociedade.",
        "Renda da família dividida pelo número de pessoas tem que dar menos de 1/4 do salário mínimo (em alguns casos é possível chegar até 1/2).",
        "Não pode estar recebendo outro benefício do INSS ou aposentadoria. Bolsa Família pode acumular.",
        "Família tem que estar inscrita no CadÚnico (o CRAS do seu bairro faz isso, é grátis).",
      ]}
      docsSectionTitle="Documentos para começar"
      docsItems={[
        "RG e CPF de todo mundo que mora na mesma casa.",
        "Comprovante de endereço recente.",
        "Comprovantes de renda de TODOS da casa (carteira, holerite, extrato, declaração).",
        "Inscrição no CadÚnico atualizada nos últimos 24 meses (vai no CRAS).",
        "Pra pessoa com deficiência: laudos médicos com CID, exames, relatórios, receitas de remédio contínuo.",
        "Comprovantes de gastos com saúde, fraldas, remédios, cuidador (importante pra ampliar o critério de renda).",
      ]}
      strategyTitle="Como funciona com a gente"
      strategyText={`Primeira coisa que a gente garante é o CadÚnico atualizado e a composição familiar correta — sem isso o INSS nega de cara. Depois orientamos como dar entrada no pedido e qual documentação reunir.

No caso de pessoa com deficiência, o INSS faz 2 avaliações: uma com médico, outra com assistente social. Preparamos você e a família pra ambas — porque é nisso que a maioria das pessoas perde o benefício (avaliação superficial, sem mostrar o impacto real no dia a dia).

Se o INSS negar por renda, a gente prova judicialmente que mesmo com a renda formal acima do limite, os gastos com saúde, medicamentos e cuidado fazem a família ser considerada vulnerável (chamada "renda ampliada"). A Justiça reconhece esse argumento há anos.

Casos urgentes (idoso sem condições, PCD sem atendimento) podem ter tutela de urgência — pagamento imediato durante o processo, quando o juiz vê que tem risco grave.`}
      faq={[
        {
          q: "Preciso ter contribuído pro INSS pra receber BPC?",
          a: "Não, não precisa. O BPC não é benefício do INSS no sentido de aposentadoria — é um direito constitucional pra quem mais precisa. Qualquer pessoa que se enquadre nos critérios (idade ou deficiência + renda baixa) pode pedir, mesmo que nunca tenha trabalhado de carteira assinada.",
        },
        {
          q: "Recebo Bolsa Família. Posso pedir BPC também?",
          a: "Pode sim. São benefícios diferentes. Mas o valor do Bolsa entra na conta da renda familiar pra avaliar o BPC. Quando começa a receber BPC, em alguns casos o Bolsa pode ser ajustado. Vale analisar caso a caso.",
        },
        {
          q: "BPC dá 13º?",
          a: "Não, o BPC não tem 13º. São 12 parcelas iguais a 1 salário mínimo por ano. Também não acumula com aposentadoria e não passa pra filhos/cônjuge se a pessoa morre — é benefício pessoal e intransferível.",
        },
        {
          q: "Quanto demora pra sair o BPC pelo INSS?",
          a: "Pela lei, o INSS tem 90 dias. Na prática varia, especialmente em pedido de pessoa com deficiência (são 2 avaliações). Quando passa muito do prazo ou nega injusto, a gente entra na Justiça com pedido de tutela de urgência — em casos urgentes, sai pagamento em poucas semanas.",
        },
        {
          q: "Pessoa com deficiência pode trabalhar e continuar com BPC?",
          a: "Existe regra específica. PCD pode trabalhar como aprendiz por até 2 anos sem perder o benefício (fica suspenso, não perdido). Em emprego formal comum, geralmente o BPC para — mas tem hipóteses de retorno se perder o emprego. É um ponto delicado, sempre vale conversar antes.",
        },
      ]}
      whatsappMessage={WHATSAPP_MESSAGES.bpcLoas}
    />
  );
}
