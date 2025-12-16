// FAQs contextuais por área jurídica
export interface AreaFAQ {
  question: string;
  answer: string;
}

export const faqsByArea: Record<string, AreaFAQ[]> = {
  trabalhista: [
    {
      question: "Quanto tempo tenho para entrar com processo trabalhista?",
      answer: "Você tem até 2 anos após o fim do contrato de trabalho para ajuizar uma reclamação trabalhista. Os direitos podem ser cobrados dos últimos 5 anos trabalhados."
    },
    {
      question: "O que são verbas rescisórias?",
      answer: "São os valores devidos ao trabalhador quando o contrato de trabalho termina: saldo de salário, férias proporcionais + 1/3, 13º proporcional, aviso prévio, multa de 40% do FGTS (em demissão sem justa causa) e liberação do FGTS e seguro-desemprego."
    },
    {
      question: "Posso processar a empresa mesmo ainda trabalhando nela?",
      answer: "Sim, é possível. Porém, é importante avaliar os riscos e a estratégia com um advogado, pois pode haver impactos no ambiente de trabalho."
    },
    {
      question: "O que fazer se a empresa não pagou horas extras?",
      answer: "Guarde registros de ponto, mensagens, testemunhas e qualquer prova do horário trabalhado. É possível cobrar as horas extras com acréscimo de 50% (dias úteis) ou 100% (domingos e feriados)."
    }
  ],
  familia: [
    {
      question: "Como funciona a guarda compartilhada?",
      answer: "Na guarda compartilhada, ambos os pais participam das decisões importantes sobre a vida dos filhos (educação, saúde, etc.). A residência pode ser alternada ou fixa, mas as responsabilidades são divididas."
    },
    {
      question: "Posso pedir revisão de pensão alimentícia?",
      answer: "Sim, sempre que houver mudança significativa na situação financeira de quem paga ou nas necessidades de quem recebe. A revisão pode ser para aumentar ou diminuir o valor."
    },
    {
      question: "Quanto tempo demora um processo de divórcio?",
      answer: "O divórcio consensual (quando há acordo) pode ser feito em cartório em poucos dias. O litigioso (com disputas) pode levar de 6 meses a alguns anos, dependendo das questões envolvidas."
    },
    {
      question: "Como é calculada a pensão alimentícia?",
      answer: "Não há fórmula fixa, mas considera-se a necessidade de quem recebe e a capacidade de quem paga. Valores comuns variam de 20% a 33% da renda líquida, mas cada caso é analisado individualmente."
    }
  ],
  previdenciario: [
    {
      question: "Quanto tempo demora para sair a aposentadoria?",
      answer: "O INSS tem prazo de 45 dias para analisar o pedido. Na prática, pode demorar de 2 a 6 meses. Se negar, o processo judicial pode levar de 1 a 3 anos."
    },
    {
      question: "O que fazer se o INSS negar meu benefício?",
      answer: "Você pode recorrer administrativamente (recurso ao CRPS) ou judicialmente. O mais importante é entender o motivo da negativa para montar a estratégia correta."
    },
    {
      question: "Posso trabalhar recebendo aposentadoria?",
      answer: "Depende do tipo: aposentadoria por idade/tempo permite trabalhar. Aposentadoria por invalidez não permite trabalho que demonstre recuperação da capacidade. Auxílio-doença também não permite."
    },
    {
      question: "Como comprovar tempo de trabalho rural?",
      answer: "Com documentos como certidão de casamento com profissão, contratos de arrendamento, notas fiscais de venda de produtos, declaração de sindicato rural, e testemunhas que conheceram o trabalho."
    }
  ],
  civil: [
    {
      question: "Como funciona um processo de inventário?",
      answer: "O inventário pode ser judicial ou extrajudicial (em cartório, quando todos são maiores e concordam). Envolve levantamento de bens, pagamento de dívidas e impostos, e divisão entre herdeiros."
    },
    {
      question: "Qual o prazo para abrir inventário?",
      answer: "O prazo legal é de 60 dias após o falecimento. Atrasos podem gerar multa sobre o ITCMD (imposto de herança), que varia de estado para estado."
    },
    {
      question: "É possível resolver disputas sem ir à Justiça?",
      answer: "Sim, através de mediação, conciliação ou arbitragem. Essas alternativas são geralmente mais rápidas e menos custosas que o processo judicial tradicional."
    }
  ],
  consumidor: [
    {
      question: "Posso ser indenizado por nome negativado indevidamente?",
      answer: "Sim. A negativação indevida gera dano moral presumido. Os valores variam conforme o caso, mas podem chegar a 10 salários mínimos ou mais em situações graves."
    },
    {
      question: "Qual o prazo para reclamar de defeito em produto?",
      answer: "30 dias para produtos não duráveis e 90 dias para produtos duráveis, contados da entrega. Em caso de vício oculto (defeito que aparece depois), o prazo começa quando o defeito é descoberto."
    },
    {
      question: "A empresa pode cobrar taxa de cancelamento?",
      answer: "Depende do contrato e do serviço. Em compras à distância (internet, telefone), há direito de arrependimento em 7 dias sem qualquer custo. Fora isso, multas abusivas podem ser contestadas."
    }
  ]
};

export const defaultFAQs: AreaFAQ[] = [
  {
    question: "Como funciona o atendimento?",
    answer: "O atendimento começa com uma análise completa do seu caso, seguida pela elaboração de uma estratégia personalizada. Você terá acompanhamento contínuo durante todo o processo."
  },
  {
    question: "Qual é o investimento necessário?",
    answer: "Os honorários são definidos após a análise do caso. Você receberá uma proposta clara e transparente antes de qualquer compromisso."
  }
];
