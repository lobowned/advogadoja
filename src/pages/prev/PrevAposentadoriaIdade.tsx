import PrevAreaPage from "@/components/prev/PrevAreaPage";
import { WHATSAPP_MESSAGES } from "@/lib/prev-config";

export default function PrevAposentadoriaIdade() {
  return (
    <PrevAreaPage
      metaTitle="Aposentadoria por Idade — Regra Permanente e Transições"
      metaDescription="Aposentadoria por idade no INSS após a Reforma de 2019: 65 anos (H) / 62 anos (M) com tempo mínimo de contribuição. Regras de transição e dicas para um benefício maior."
      canonicalPath="/prev/aposentadoria-por-idade"
      breadcrumb="Aposentadorias / Por Idade"
      heroTitle={
        <>
          Aposentadoria por{" "}
          <span className="italic text-prev-gold">idade</span> não é só
          completar idade.
        </>
      }
      heroSubtitle="A regra parece simples — chega a idade, aposenta — mas a Reforma de 2019 trouxe mudanças, regras de transição e cálculos que podem fazer muita diferença no valor final do benefício. Saber qual regra escolher pode significar centenas de reais a mais por mês."
      whoSectionTitle="Quem pode pedir"
      whoItems={[
        "Homens com 65 anos completos, mulheres com 62 anos completos (regra permanente após a Reforma).",
        "Mínimo de 20 anos de contribuição para homens, 15 anos para mulheres (contribuintes filiados ao INSS antes da Reforma mantêm a carência de 180 contribuições).",
        "Trabalhadores rurais: idade reduzida (60 anos H / 55 anos M) e comprovação de 15 anos de atividade rural.",
        "Quem já contribuía antes de 13/11/2019 pode optar pela regra de transição (idade progressiva), em que a idade mínima aumenta 6 meses a cada ano.",
      ]}
      docsSectionTitle="Documentação essencial"
      docsItems={[
        "RG, CPF, comprovante de residência, certidão de nascimento ou casamento.",
        "Carteira de Trabalho (todas, inclusive antigas) e PIS/PASEP/NIT.",
        "Carnês de contribuição como autônomo, contribuinte individual ou facultativo.",
        "CNIS atualizado — pode ser baixado pelo Meu INSS.",
        "Em caso de atividade rural: declaração do sindicato rural, notas fiscais de produtor, blocos de produtor, contratos de arrendamento ou parceria.",
        "Comprovantes de períodos especiais (PPP e LTCAT), caso queira computar tempo especial convertido em comum.",
      ]}
      strategyTitle="Como conduzimos o caso"
      strategyText={`Começamos analisando o CNIS para identificar todos os vínculos e contribuições reconhecidos — e os que faltam. Lacunas, vínculos sem CNPJ, períodos antigos não anotados e atividade rural costumam ser as principais causas de aposentadoria menor que a devida.

Em seguida fazemos uma simulação comparativa entre regra permanente e regras de transição (idade progressiva, pedágio, pontos). Nem sempre a "regra do momento" é a mais vantajosa — pode valer a pena esperar alguns meses para se enquadrar em outra regra com fator de cálculo melhor.

Antes de protocolar o pedido administrativo, garantimos que toda a documentação está em ordem. Pedidos mal instruídos geram indeferimento desnecessário e, quando o INSS indefere, o caminho administrativo de recurso é lento.

Se houver indeferimento injusto ou demora excessiva, partimos para a via judicial — onde também é possível reverter cálculos errados, reconhecer atividade especial ou rural e majorar o benefício.`}
      faq={[
        {
          q: "Vale mais a pena esperar ou pedir agora?",
          a: "Depende do seu coeficiente de cálculo. A regra permanente usa 60% da média + 2% por ano que exceder 20 (H) / 15 (M). Se você está perto de cumprir mais 1 ou 2 anos de contribuição, esperar pode aumentar significativamente o benefício. Só com simulação dá pra saber.",
        },
        {
          q: "Posso pedir aposentadoria por idade trabalhando ainda?",
          a: "Sim. Diferente da aposentadoria por invalidez, você pode continuar trabalhando após se aposentar por idade. O contrato de trabalho não se rompe automaticamente, mas o empregador pode dispensá-lo (com todas as verbas devidas). Em muitos casos vale combinar aposentadoria + salário.",
        },
        {
          q: "Quanto tempo o INSS demora para conceder?",
          a: "O prazo legal é de 45 dias após o protocolo. Na prática varia conforme a unidade — chega a 6 meses ou mais em alguns casos. Descumprido o prazo, é possível impetrar mandado de segurança para obrigar a análise.",
        },
        {
          q: "Trabalhei na roça quando jovem. Conta como tempo de contribuição?",
          a: "Pode contar — é o chamado período de atividade rural. A comprovação exige documentos da época (declaração do sindicato, notas, contratos) e às vezes prova testemunhal. Quando bem documentado, pode reduzir significativamente o tempo necessário ou viabilizar uma aposentadoria híbrida.",
        },
        {
          q: "Posso desistir e pedir uma aposentadoria melhor depois?",
          a: "É possível solicitar a desaposentação ou revisão em alguns casos, mas o tema tem jurisprudência restritiva. Por isso é tão importante pedir a aposentadoria certa logo na primeira vez — análise prévia bem feita evita problemas posteriores.",
        },
      ]}
      whatsappMessage={WHATSAPP_MESSAGES.aposentadoriaIdade}
    />
  );
}
