import PrevAreaPage from "@/components/prev/PrevAreaPage";
import { WHATSAPP_MESSAGES } from "@/lib/prev-config";
import { PREV_IMAGES } from "@/lib/prev-images";

export default function PrevAposentadoriaIdade() {
  return (
    <PrevAreaPage
      metaTitle="Aposentadoria por Idade — 65 anos (homem) / 62 (mulher) | Como pedir"
      metaDescription="Aposentadoria por idade no INSS: homem com 65, mulher com 62. Veja quanto tempo de INSS precisa, regras de transição e como pedir o valor maior possível."
      canonicalPath="/prev/aposentadoria-por-idade"
      breadcrumb="Aposentadorias / Por idade"
      quizKey="aposentadorias"
      heroImage={PREV_IMAGES.aposentadoriaIdade}
      stats={[
        { number: "65/62", label: "Idade mínima (homem/mulher)" },
        { number: "20/15", label: "Anos mínimos de INSS (h/m)" },
        { number: "+30%", label: "Diferença média entre regra nova e transição" },
      ]}
      commonMistakes={[
        "Pedir pela regra nova sem simular as regras de transição (em muitos casos a transição paga mais e demora menos).",
        "Não anexar PPP/LTCAT quando trabalhou em ambiente insalubre — perde direito ao tempo especial (que pode aumentar 40-67% do tempo).",
        "Ignorar tempo de roça antigo — declaração de sindicato + testemunhas pode reduzir muito a idade necessária.",
        "Esquecer carnês antigos de autônomo ou MEI que somam tempo de contribuição.",
        "Pedir sem revisar o CNIS — vínculos faltando ou com datas erradas são MUITO comuns e o INSS não corrige sozinho.",
      ]}
      heroTitle={
        <>
          Está perto de{" "}
          <span className="italic text-prev-gold">aposentar?</span>
        </>
      }
      heroSubtitle="Atingir a idade é só uma parte. O que o povo não sabe é que tem várias formas de pedir aposentadoria — e escolher a errada pode te fazer perder dinheiro todo mês, pelo resto da vida. A gente olha junto seu CNIS e escolhe o caminho que paga mais."
      whoSectionTitle="Quem pode pedir"
      whoItems={[
        "Homem com 65 anos e mulher com 62 anos (regra nova, depois da Reforma de 2019).",
        "Pelo menos 20 anos de INSS pra homem, 15 anos pra mulher (quem já contribuía antes da Reforma só precisa de 15 anos no caso do homem).",
        "Trabalhador rural: idade menor (60 anos pra homem, 55 pra mulher) e tem que provar 15 anos de roça.",
        "Quem já pagava INSS antes de 13/11/2019 pode escolher uma regra de transição — em muitos casos paga mais que a regra nova.",
      ]}
      docsSectionTitle="Documentação que você vai precisar"
      docsItems={[
        "RG, CPF, comprovante de endereço, certidão de nascimento ou casamento.",
        "Todas as Carteiras de Trabalho (até as antigas!) e número do PIS/PASEP.",
        "Carnês de quem pagou como autônomo, MEI ou facultativo.",
        "Extrato do CNIS atualizado — você baixa no app Meu INSS (a gente te ensina).",
        "Trabalhou na roça? Declaração do sindicato rural, notas de produtor, contratos.",
        "Trabalhou em ambiente insalubre/perigoso? PPP e LTCAT da empresa (a gente explica o que é).",
      ]}
      strategyTitle="Por que vale conversar antes de pedir"
      strategyText={`Pedir aposentadoria sem análise prévia é o erro mais comum — e o mais caro. O INSS aprova pela regra que ele "viu primeiro", não pela que paga mais. Por isso muita gente recebe o mínimo quando podia receber bem mais.

A gente começa olhando seu CNIS completo: o que tá certo, o que falta, vínculos antigos que sumiram, períodos rurais não anotados, trabalho insalubre que pode virar tempo especial. Esses ajustes podem aumentar muito o valor final do benefício — ou viabilizar uma aposentadoria que pelo CNIS atual seria negada.

Depois fazemos a simulação comparando regra nova (mais rígida) com todas as regras de transição (pedágio, pontos, idade progressiva). Em muitos casos vale a pena esperar 6 meses pra cair numa regra com cálculo melhor.

Só aí montamos o pedido, com toda documentação certa, pra não dar problema na análise. Se o INSS demorar ou negar, a gente vai pra Justiça.`}
      faq={[
        {
          q: "Vale mais a pena pedir agora ou esperar?",
          a: "Depende muito do seu caso. A regra nova paga 60% da média + 2% por ano que passar de 20 (homem) ou 15 (mulher). Se você está perto de cumprir mais 1 ou 2 anos de INSS, esperar um pouco aumenta bem o benefício. Em alguns casos vale esperar uma regra de transição melhor. Só com simulação você descobre.",
        },
        {
          q: "Posso continuar trabalhando depois que aposentar?",
          a: "Pode sim. Aposentadoria por idade não impede de trabalhar. Você continua com carteira assinada normal, recebe aposentadoria + salário. A empresa pode te demitir, mas tem que pagar todas as verbas. Muita gente aposenta e continua trabalhando — é direito seu.",
        },
        {
          q: "INSS demora quanto pra liberar?",
          a: "Pela lei, 45 dias depois do pedido. Na prática varia: 1 a 6 meses em muitos casos, mais em outros. Se passar muito do prazo, dá pra entrar com mandado de segurança pra obrigar o INSS a analisar. A gente faz isso.",
        },
        {
          q: "Trabalhei na roça quando era novo, conta como INSS?",
          a: "Conta sim! É o que chama 'tempo rural'. Pra provar precisa de documentos da época (declaração de sindicato, notas, contratos), e às vezes prova com testemunha. Quando bem documentado, pode reduzir muito o tempo necessário ou viabilizar aposentadoria híbrida (rural + urbano).",
        },
        {
          q: "Pedi e veio valor baixo. Posso desistir e pedir outra?",
          a: "Em alguns casos dá pra revisar ou pedir outra modalidade, mas o tema é complicado e a Justiça nem sempre aceita. Por isso é tão importante pedir a aposentadoria certa logo na primeira vez — uma análise prévia bem feita evita esse problema todo.",
        },
      ]}
      whatsappMessage={WHATSAPP_MESSAGES.aposentadoriaIdade}
    />
  );
}
