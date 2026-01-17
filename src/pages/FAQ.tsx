import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import { Scale, HelpCircle, MessageCircle, Shield, Clock, CreditCard, Users, Phone } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: { question: string; answer: string }[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "atendimento",
    title: "Sobre o Atendimento",
    icon: <MessageCircle className="w-5 h-5" />,
    questions: [
      {
        question: "Como funciona o atendimento do Advogado Já?",
        answer: "O atendimento é simples e rápido. Você acessa nosso chat, descreve seu problema jurídico, e um de nossos advogados especializados irá atendê-lo imediatamente. A consulta inicial é gratuita e você pode tirar todas as suas dúvidas antes de decidir prosseguir com uma ação."
      },
      {
        question: "Preciso agendar horário para ser atendido?",
        answer: "Não é necessário agendamento. Nosso atendimento funciona de segunda a sexta, das 8h às 20h. Basta acessar o chat e iniciar sua conversa com um advogado."
      },
      {
        question: "O atendimento é confidencial?",
        answer: "Sim, absolutamente. Todas as conversas são protegidas pelo sigilo profissional advocatício. Nossas comunicações são criptografadas e seus dados estão seguros conosco."
      },
      {
        question: "Posso ser atendido pelo celular?",
        answer: "Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em smartphones e tablets. Você pode conversar com nossos advogados de qualquer dispositivo."
      }
    ]
  },
  {
    id: "advogados",
    title: "Sobre os Advogados",
    icon: <Users className="w-5 h-5" />,
    questions: [
      {
        question: "Os advogados são registrados na OAB?",
        answer: "Sim, todos os nossos advogados são devidamente registrados na Ordem dos Advogados do Brasil (OAB) e possuem experiência comprovada em suas áreas de atuação. Você pode verificar o registro de qualquer advogado no site da OAB."
      },
      {
        question: "Como são selecionados os advogados?",
        answer: "Nossos advogados passam por um rigoroso processo de seleção que avalia formação acadêmica, experiência profissional, especializações e histórico de atendimento. Trabalhamos apenas com profissionais experientes e comprometidos."
      },
      {
        question: "Posso escolher o advogado que vai me atender?",
        answer: "Você será direcionado automaticamente para um especialista na sua área de necessidade. Se preferir um advogado específico após o primeiro contato, podemos analisar a possibilidade."
      }
    ]
  },
  {
    id: "custos",
    title: "Custos e Pagamentos",
    icon: <CreditCard className="w-5 h-5" />,
    questions: [
      {
        question: "A consulta inicial é realmente gratuita?",
        answer: "Sim, a consulta inicial pelo chat é totalmente gratuita. Você pode descrever seu problema, tirar dúvidas e entender suas opções sem nenhum custo. Só há cobrança se você decidir contratar nossos serviços para uma ação judicial."
      },
      {
        question: "Como são cobrados os honorários?",
        answer: "Os honorários variam conforme a complexidade do caso e o tipo de ação. Após a análise do seu caso, o advogado apresentará uma proposta clara de honorários, que pode incluir pagamento único, parcelado ou acordo de êxito (percentual sobre o valor ganho)."
      },
      {
        question: "Vocês atendem casos com honorários de êxito?",
        answer: "Sim, para muitos tipos de casos (especialmente trabalhistas e previdenciários) podemos trabalhar com honorários de êxito, onde você só paga se ganhar a causa. Cada caso é analisado individualmente."
      },
      {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Aceitamos diversas formas de pagamento: PIX, cartão de crédito (parcelado), boleto bancário e transferência. Oferecemos condições flexíveis para facilitar o acesso à justiça."
      }
    ]
  },
  {
    id: "processo",
    title: "Sobre o Processo",
    icon: <Clock className="w-5 h-5" />,
    questions: [
      {
        question: "Quanto tempo demora um processo judicial?",
        answer: "O tempo varia muito conforme o tipo de ação, comarca e complexidade do caso. Ações trabalhistas costumam durar de 1 a 3 anos. Ações de família podem ser mais rápidas (meses) ou demorar anos. Seu advogado informará uma estimativa realista para seu caso específico."
      },
      {
        question: "Preciso ir ao fórum durante o processo?",
        answer: "Depende do tipo de ação. Muitos atos processuais hoje são feitos online. Quando há audiências presenciais, seu advogado irá acompanhá-lo e prepará-lo adequadamente."
      },
      {
        question: "Como acompanho o andamento do meu processo?",
        answer: "Você receberá atualizações regulares do seu advogado sobre cada movimentação importante. Além disso, pode consultar o andamento pelo sistema do tribunal usando o número do processo."
      },
      {
        question: "O que acontece se eu perder a causa?",
        answer: "Cada caso tem seus riscos, que serão explicados pelo advogado antes de você decidir. Em caso de derrota, pode haver condenação em custas e honorários da parte contrária, mas existem benefícios de justiça gratuita para quem não pode arcar com esses custos."
      }
    ]
  },
  {
    id: "areas",
    title: "Áreas de Atuação",
    icon: <Scale className="w-5 h-5" />,
    questions: [
      {
        question: "Em quais áreas do direito vocês atendem?",
        answer: "Atendemos nas principais áreas: Direito Trabalhista (demissão, horas extras, acidente de trabalho), Direito de Família (divórcio, pensão, guarda), Direito Civil (contratos, cobrança, danos), Direito Previdenciário (INSS, aposentadoria) e Direito Penal (defesa criminal)."
      },
      {
        question: "Vocês atendem causas de pequeno valor?",
        answer: "Sim, atendemos causas de todos os valores. Muitas vezes, causas consideradas 'pequenas' representam muito para quem está buscando seus direitos. Cada caso é tratado com a mesma seriedade e dedicação."
      },
      {
        question: "Atendem em todo o Brasil?",
        answer: "Sim, nosso atendimento online permite atender clientes de todo o Brasil. Para ações judiciais, contamos com uma rede de advogados correspondentes para audiências presenciais quando necessário."
      }
    ]
  },
  {
    id: "seguranca",
    title: "Segurança e Privacidade",
    icon: <Shield className="w-5 h-5" />,
    questions: [
      {
        question: "Meus dados estão seguros?",
        answer: "Sim, utilizamos criptografia de ponta a ponta em todas as comunicações. Seus dados são armazenados em servidores seguros e protegidos. Seguimos todas as normas da LGPD (Lei Geral de Proteção de Dados)."
      },
      {
        question: "Vocês compartilham informações com terceiros?",
        answer: "Não compartilhamos suas informações com terceiros sem sua autorização expressa. As únicas exceções são quando exigido por lei ou para o andamento do seu processo judicial."
      },
      {
        question: "Posso solicitar a exclusão dos meus dados?",
        answer: "Sim, você pode solicitar a exclusão dos seus dados a qualquer momento, conforme garantido pela LGPD. Basta entrar em contato conosco por email ou telefone."
      }
    ]
  }
];

const FAQ = () => {
  // Schema.org FAQPage
  const allQuestions = faqCategories.flatMap(cat => cat.questions);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Perguntas Frequentes | Advogado Já</title>
        <meta 
          name="description" 
          content="Tire suas dúvidas sobre o Advogado Já. Como funciona, custos, áreas de atuação, segurança e mais. Perguntas frequentes sobre consulta jurídica online." 
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/perguntas-frequentes" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-2">
              <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-bold text-base sm:text-lg">Advogado Já</span>
              </Link>
              <div className="flex items-center gap-1 sm:gap-2">
                <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3 min-h-[44px]">
                  <Link to="/artigos">Artigos</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-3 min-h-[44px]">
                  <Link to="/">
                    <span className="hidden xs:inline">Falar com Advogado</span>
                    <span className="xs:hidden">Falar</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <BackButton to="/" label="Voltar ao início" className="mb-6" />
            <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre o Advogado Já. Se não encontrar o que procura, 
              fale conosco pelo chat.
            </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            {faqCategories.map((category) => (
              <Card key={category.id}>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <span className="text-primary">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="text-left text-sm sm:text-base py-4 min-h-[44px]">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Não encontrou sua dúvida?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Fale agora com um advogado. Estamos prontos para ajudar você.
            </p>
            <Button asChild size="lg">
              <Link to="/">Falar com Advogado Agora</Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Já | OAB/BA 46.638</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/termos-de-uso" className="hover:text-foreground transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default FAQ;