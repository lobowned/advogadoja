import PrevAreaPage from "@/components/prev/PrevAreaPage";
import { WHATSAPP_MESSAGES } from "@/lib/prev-config";

export default function PrevBpcLoas() {
  return (
    <PrevAreaPage
      metaTitle="BPC / LOAS — Benefício Assistencial para Idoso e PCD"
      metaDescription="Benefício de Prestação Continuada (BPC/LOAS) de um salário mínimo para idosos de 65+ e pessoas com deficiência em situação de baixa renda. Como pedir, requisitos e o que fazer se for negado."
      canonicalPath="/prev/bpc-loas"
      breadcrumb="Áreas / BPC / LOAS"
      heroTitle={
        <>
          BPC/LOAS é direito,{" "}
          <span className="italic text-prev-gold">não favor</span>.
        </>
      }
      heroSubtitle="O Benefício de Prestação Continuada garante um salário mínimo por mês para idosos a partir de 65 anos e pessoas com deficiência em situação de baixa renda — sem precisar ter contribuído ao INSS. É um direito constitucional, mas o caminho até o pagamento costuma exigir paciência e técnica."
      whoSectionTitle="Quem se enquadra"
      whoItems={[
        "Pessoa idosa com 65 anos ou mais, brasileira ou portuguesa residente no Brasil.",
        "Pessoa com deficiência (PCD) de qualquer idade, com impedimento de longo prazo (mínimo 2 anos) que dificulte participação social em igualdade.",
        "Renda familiar per capita inferior a 1/4 do salário mínimo — com possibilidade de ampliação até 1/2 em casos específicos (custos com saúde, comprovação de miserabilidade).",
        "Quem não recebe outro benefício previdenciário ou assistencial — exceto assistência médica e pensão indenizatória.",
        "Inscrição ativa no CadÚnico (Cadastro Único do Governo Federal) atualizada.",
      ]}
      docsSectionTitle="Documentos para começar"
      docsItems={[
        "RG e CPF do requerente e de todos os membros da família que moram na mesma casa.",
        "Comprovante de residência atualizado.",
        "Comprovantes de renda de todos da família (carteira de trabalho, holerites, extratos, declarações).",
        "Inscrição no CadÚnico atualizada nos últimos 24 meses (CRAS do município faz).",
        "Em caso de PCD: laudos médicos detalhados (CID, tempo de evolução, impacto funcional), exames, relatórios de tratamento, receituários.",
        "Comprovantes de gastos com saúde, medicamentos contínuos, fraldas, cuidador (importantes para demonstrar miserabilidade ampliada).",
      ]}
      strategyTitle="Como conduzimos o pedido"
      strategyText={`O primeiro passo costuma ser garantir que o CadÚnico está atualizado e que a composição familiar está correta — sem isso o INSS indefere de cara. Depois orientamos a entrada do requerimento e a documentação médica, fundamental nos casos de PCD.

No caso de pessoa com deficiência, o INSS faz duas avaliações: médica e social. Preparamos o segurado e a família para ambas, garantindo que os impactos do dia a dia sejam adequadamente registrados. Avaliação superficial é a principal causa de indeferimento em PCD.

Se houver indeferimento pelo critério de renda, é possível demonstrar judicialmente a miserabilidade considerando despesas com saúde, medicamentos contínuos e outras condições — a chamada "renda ampliada". A jurisprudência reconhece esse ajuste há anos.

Quando o caso vai para o Judiciário, é comum conseguir tutela de urgência (pagamento imediato durante o processo) se houver risco grave — pessoa idosa ou PCD sem condições mínimas.`}
      faq={[
        {
          q: "Preciso ter contribuído ao INSS para receber BPC?",
          a: "Não. O BPC é um benefício assistencial, não previdenciário. Diferente da aposentadoria, ele não exige contribuição prévia. Por isso, qualquer pessoa que se enquadre nos critérios pode pedir — independentemente de ter ou não trabalho formal anterior.",
        },
        {
          q: "Recebo Bolsa Família. Posso pedir BPC?",
          a: "Sim, são benefícios distintos. Mas o valor do Bolsa Família entra no cálculo da renda familiar para fins de avaliação do BPC. Em alguns casos, ao começar a receber BPC o Bolsa pode ser ajustado. Vale análise caso a caso.",
        },
        {
          q: "O BPC dá direito a 13º?",
          a: "Não. O BPC paga 12 parcelas iguais ao salário mínimo por ano. Não tem 13º, não acumula com aposentadoria e não gera pensão por morte aos dependentes — é benefício pessoal e intransferível.",
        },
        {
          q: "Quanto tempo demora o pedido administrativo?",
          a: "O INSS tem prazo legal de 90 dias, mas na prática varia muito — especialmente em PCD, em razão das duas avaliações. Quando o prazo é descumprido ou o indeferimento é injusto, cabe ação judicial com pedido de tutela de urgência, frequentemente concedida.",
        },
        {
          q: "Posso trabalhar e continuar recebendo BPC?",
          a: "Existem regras específicas. A pessoa com deficiência pode trabalhar como aprendiz por até 2 anos sem perder o benefício (BPC fica suspenso temporariamente, sem perda). Em outros formatos, o ingresso na atividade remunerada formal geralmente cessa o benefício — mas pode haver hipóteses de retorno. É um ponto delicado que pede orientação prévia.",
        },
      ]}
      whatsappMessage={WHATSAPP_MESSAGES.bpcLoas}
    />
  );
}
