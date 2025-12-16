import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Calculator, ArrowRight, MessageCircle, Clock, Scale, TrendingUp, Home, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";

const calculadoras = [
  {
    id: "trabalhista",
    title: "Calculadora Trabalhista",
    description: "Calcule suas verbas rescisórias: aviso prévio, FGTS, 13º salário, férias e multas.",
    icon: Briefcase,
    href: "/calculadora-trabalhista",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 dark:bg-amber-950/20",
    features: ["Aviso Prévio", "FGTS + Multa 40%", "13º Proporcional", "Férias + 1/3"]
  },
  {
    id: "horas-extras",
    title: "Calculadora de Horas Extras",
    description: "Calcule horas extras não pagas com adicional de 50%, 100% e todos os reflexos.",
    icon: Clock,
    href: "/calculadora-horas-extras",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 dark:bg-amber-950/20",
    features: ["Adicional 50%", "Feriados 100%", "Reflexos", "Ad. Noturno"]
  },
  {
    id: "pensao",
    title: "Calculadora de Pensão",
    description: "Estime o valor da pensão alimentícia baseado na renda e número de dependentes.",
    icon: Users,
    href: "/calculadora-pensao",
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50 dark:bg-blue-950/20",
    features: ["% sobre Renda", "Custos Especiais", "Múltiplos Filhos", "Valor Anual"]
  },
  {
    id: "partilha",
    title: "Calculadora de Partilha de Bens",
    description: "Estime a divisão de bens no divórcio conforme seu regime de casamento.",
    icon: Home,
    href: "/calculadora-partilha-bens",
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50 dark:bg-blue-950/20",
    features: ["Comunhão Parcial", "Comunhão Universal", "Separação Total", "Dívidas"]
  },
  {
    id: "aposentadoria",
    title: "Calculadora de Aposentadoria",
    description: "Verifique se você pode se aposentar e estime o valor do benefício INSS.",
    icon: Calculator,
    href: "/calculadora-aposentadoria",
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50 dark:bg-emerald-950/20",
    features: ["Idade Mínima", "Tempo Contribuição", "Valor Benefício", "Pós-Reforma"]
  },
  {
    id: "danos-morais",
    title: "Calculadora de Danos Morais",
    description: "Estime o valor da indenização por danos morais baseado em jurisprudência.",
    icon: Scale,
    href: "/calculadora-danos-morais",
    color: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-50 dark:bg-purple-950/20",
    features: ["Negativação", "Ofensa à Honra", "Discriminação", "Acidentes"]
  },
  {
    id: "atualizacao-divida",
    title: "Calculadora de Atualização de Dívida",
    description: "Atualize dívidas com correção monetária, juros de mora e multa.",
    icon: TrendingUp,
    href: "/calculadora-atualizacao-divida",
    color: "from-red-500 to-orange-500",
    bgLight: "bg-red-50 dark:bg-red-950/20",
    features: ["INPC/IPCA", "IGP-M/SELIC", "Juros 1% a.m.", "Multa 2%"]
  },
  {
    id: "aluguel",
    title: "Calculadora de Aluguel Atrasado",
    description: "Calcule o débito total do inquilino incluindo multa, juros e encargos.",
    icon: Building2,
    href: "/calculadora-aluguel-atrasado",
    color: "from-yellow-500 to-amber-500",
    bgLight: "bg-yellow-50 dark:bg-yellow-950/20",
    features: ["Aluguéis", "Multa", "IPTU/Cond.", "Correção"]
  }
];

const Calculadoras = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  return (
    <>
      <Helmet>
        <title>Calculadoras de Direitos | Calcule Grátis suas Verbas</title>
        <meta 
          name="description" 
          content="Calculadoras jurídicas gratuitas: calcule rescisão trabalhista, pensão alimentícia e mais. Descubra quanto você tem direito a receber." 
        />
        <meta name="keywords" content="calculadora trabalhista, calculadora pensão alimentícia, calcular rescisão, verbas rescisórias, direitos trabalhistas" />
        <link rel="canonical" href="/calculadoras" />
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Ferramentas Gratuitas
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Calculadoras de <span className="text-primary">Direitos</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Descubra quanto você pode ter direito a receber. Cálculos instantâneos e gratuitos 
                baseados na legislação brasileira.
              </p>
            </div>
          </div>
        </section>

        {/* Calculadoras Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {calculadoras.map((calc) => (
                <Card 
                  key={calc.id} 
                  className={`p-6 md:p-8 ${calc.bgLight} border-2 hover:shadow-lg transition-all group`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${calc.color} flex items-center justify-center mb-6`}>
                    <calc.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">{calc.title}</h2>
                  <p className="text-muted-foreground mb-6">{calc.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {calc.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs bg-background/80 px-3 py-1 rounded-full border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link to={calc.href}>
                    <Button className="w-full gap-2 group-hover:gap-3 transition-all">
                      Calcular Agora
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Prefere falar diretamente com um advogado?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos especialistas estão online agora para analisar seu caso gratuitamente.
              </p>
              <Button onClick={scrollToChat} size="lg" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Falar com Advogado Agora
              </Button>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h2>
              
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Os cálculos são precisos?</h3>
                  <p className="text-sm text-muted-foreground">
                    Nossas calculadoras fornecem estimativas baseadas em parâmetros gerais da legislação. 
                    O valor exato pode variar conforme as particularidades do seu caso.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Preciso pagar para usar?</h3>
                  <p className="text-sm text-muted-foreground">
                    Não! Todas as nossas calculadoras são 100% gratuitas. Você pode calcular quantas 
                    vezes quiser sem nenhum custo.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Meus dados são salvos?</h3>
                  <p className="text-sm text-muted-foreground">
                    Seus dados de cálculo não são armazenados. A calculadora roda localmente no seu 
                    navegador para máxima privacidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Calculadoras;
