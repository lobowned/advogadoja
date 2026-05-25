import PrevAreaPage from "@/components/prev/PrevAreaPage";
import { WHATSAPP_MESSAGES } from "@/lib/prev-config";

export default function PrevSalarioMaternidade() {
  return (
    <PrevAreaPage
      metaTitle="Salário-Maternidade do INSS — 120 dias remunerados | Como pedir"
      metaDescription="Salário-maternidade do INSS é pra gestante, adotante ou guardiã. Empregada, MEI, autônoma, doméstica — todas têm direito. INSS negou? A gente te ajuda."
      canonicalPath="/prev/salario-maternidade"
      breadcrumb="Em quais casos eu ajudo / Salário-Maternidade"
      lawyerId="claudia-martins"
      quizKey="salario-maternidade"
      palette="rose"
      stats={[
        { number: "120 dias", label: "Período de licença remunerada" },
        { number: "10 meses", label: "Carência (MEI, autônoma, facultativa)" },
        { number: "Até 180 dias", label: "Prazo para pedir após o parto" },
      ]}
      commonMistakes={[
        "Não contar tempo de período de graça quando desempregada — você pode ainda ter qualidade de segurada.",
        "Esquecer que MEI tem carência de 10 meses — pedir cedo demais é negativa garantida.",
        "Adotantes não saberem que têm 120 dias igual mãe biológica (regra mudou em 2009).",
        "Aceitar valor baixo da empresa (deveria ser salário integral pra CLT, não calculado errado).",
        "Perder o prazo de 180 dias após o parto pra pedir o benefício.",
      ]}
      heroTitle={
        <>
          Vai ser{" "}
          <span className="italic text-prev-gold">mãe?</span>
          <br />O INSS paga 120 dias.
        </>
      }
      heroSubtitle="O salário-maternidade é um direito de QUALQUER mulher que paga INSS — empregada, MEI, autônoma, doméstica, do campo. Mesmo desempregada pode ter direito. Mas o INSS é cheio de regra, e muita gente perde o que tem direito por falta de informação. Eu te ajudo a pedir e receber tudo."
      whoSectionTitle="Quem tem direito"
      whoItems={[
        "Empregada com carteira assinada (até doméstica) — recebe direto pelo empregador, sem carência.",
        "MEI, contribuinte individual e facultativa — precisa de 10 meses de contribuição (carência).",
        "Trabalhadora rural / segurada especial — precisa comprovar 10 meses de atividade rural nos últimos meses antes do parto.",
        "Desempregada com qualidade de segurada — quem perdeu o emprego recentemente e ainda está no período de graça do INSS pode pedir.",
        "Adotantes (qualquer idade da criança) e guardiãs judiciais também têm direito.",
        "Em caso de natimorto ou aborto não criminoso, também há direito (a partir de 23 semanas é maternidade integral; antes disso pode ser auxílio-doença).",
      ]}
      docsSectionTitle="O que você vai precisar"
      docsItems={[
        "RG, CPF e comprovante de endereço.",
        "Carteira de Trabalho ou comprovantes de quem paga INSS (carnês, declarações, contratos).",
        "Certidão de nascimento da criança (ou termo de adoção / guarda).",
        "Atestado médico com data prevista do parto (pra pedir antes do nascimento) ou data do parto.",
        "Pra rural: declaração do sindicato, notas de produtor, contratos de arrendamento.",
        "Pra desempregada: rescisão do último emprego, comprovantes de tentativa de emprego.",
      ]}
      strategyTitle="Como a gente conduz seu caso"
      strategyText={`Primeiro a gente confirma sua qualidade de segurada e calcula a carência exata — porque o INSS é rigoroso aqui. MEI e autônoma têm que ter 10 contribuições válidas antes do parto. Desempregada precisa ainda estar no período de graça (que pode chegar a 36 meses em alguns casos). Cada situação tem regra própria.

Depois orientamos o pedido pelo Meu INSS — pra empregada com carteira é a empresa que paga, mas pra todas as outras é o INSS direto. Acompanhamos o processo até o pagamento começar.

Quando o INSS nega (motivo mais comum: "perda da qualidade de segurada"), a gente analisa o histórico real. Em muitos casos o INSS conta carência errada, ou ignora vínculo informal que pode ser provado na Justiça. Aí entramos com ação — geralmente com tutela de urgência, porque licença-maternidade tem prazo curto.

Salário-maternidade pode ser pedido até 180 dias depois do parto, então não deixe pra depois — quanto antes pedir, antes recebe.`}
      faq={[
        {
          q: "Sou MEI. Tenho direito ao salário-maternidade?",
          a: "Tem sim. Mas precisa ter pago pelo menos 10 meses de INSS (mesmo que sejam contribuições do MEI, que é 5% do mínimo). Se você abriu MEI agora e ainda não tem 10 meses, pode complementar contribuições pra cumprir carência mais rápido. A gente te orienta.",
        },
        {
          q: "Quanto vou receber de salário-maternidade?",
          a: "Empregada com carteira: o último salário integral. MEI: 1 salário mínimo (porque a contribuição é sobre o mínimo). Autônoma e facultativa: média dos últimos 12 salários-de-contribuição. Rural / segurada especial: 1 salário mínimo. Doméstica: salário integral. São 120 dias (algumas empresas estendem pra 180 voluntariamente).",
        },
        {
          q: "Estou desempregada. Ainda dá pra pedir?",
          a: "Dá sim, se você ainda está no 'período de graça' do INSS — esse é o tempo em que você continua segurada mesmo sem contribuir. Vai de 12 a 36 meses depois da última contribuição, dependendo do seu histórico. Se a criança nascer dentro desse prazo, você tem direito. A gente analisa seu CNIS pra confirmar.",
        },
        {
          q: "Pedi pelo Meu INSS e negaram. Posso recorrer?",
          a: "Pode. Tem 2 caminhos: recurso administrativo na Junta de Recursos do INSS (30 dias pra pedir) ou ação direto na Justiça. Quando o motivo da negativa é discutível (perda da qualidade de segurada, cálculo errado de carência), Justiça costuma ser mais rápida e favorável. Pedimos tutela de urgência por causa do prazo da licença.",
        },
        {
          q: "Adotei uma criança. Tenho direito?",
          a: "Tem sim, e tem desde 2009. Não importa a idade da criança (antes era diferente por faixa etária). Adotantes e quem tem guarda judicial pra fins de adoção recebem 120 dias de salário-maternidade, igual mãe biológica. Mesmo casal homoafetivo: o casal escolhe quem fica com a licença.",
        },
        {
          q: "E se eu tiver gêmeos? Aumenta o período?",
          a: "Não, infelizmente o INSS continua pagando 120 dias mesmo em gestação múltipla. Algumas empresas e setores específicos (servidor público) têm regras diferentes, mas pelo INSS é o mesmo.",
        },
      ]}
      whatsappMessage={WHATSAPP_MESSAGES.salarioMaternidade}
    />
  );
}
