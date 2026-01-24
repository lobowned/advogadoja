import { m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Plane, 
  Smartphone, 
  Building2, 
  Heart, 
  ShoppingCart, 
  AlertTriangle,
  Briefcase,
  Users,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '5571997036269';

const problems = [
  {
    icon: Plane,
    title: "Voo Cancelado",
    description: "Voo cancelado, atraso, bagagem extraviada ou overbooking",
    examples: ["Indenização até R$ 15.000", "Sem sair de casa"],
    color: "from-blue-500 to-blue-600",
    message: "Olá! Tive um problema com voo cancelado e preciso de orientação."
  },
  {
    icon: Briefcase,
    title: "Demissão Injusta",
    description: "Demitido sem justa causa, verbas não pagas, assédio no trabalho",
    examples: ["Verbas rescisórias", "Danos morais"],
    color: "from-orange-500 to-orange-600",
    message: "Olá! Fui demitido e acredito que tenho direitos a receber."
  },
  {
    icon: Users,
    title: "Divórcio e Pensão",
    description: "Separação, guarda de filhos, pensão alimentícia, partilha de bens",
    examples: ["Divórcio rápido", "Pensão justa"],
    color: "from-pink-500 to-pink-600",
    message: "Olá! Preciso de orientação sobre divórcio/pensão alimentícia."
  },
  {
    icon: Building2,
    title: "Bancos e Financeiras",
    description: "Empréstimo não contratado, juros abusivos, débito indevido",
    examples: ["Fraude bancária", "Cartão clonado"],
    color: "from-emerald-500 to-emerald-600",
    message: "Olá! Tive um problema com banco/financeira e preciso de ajuda."
  },
  {
    icon: Heart,
    title: "Planos de Saúde",
    description: "Negativa de procedimento, reajuste abusivo, cancelamento",
    examples: ["Liminar em 48h", "Cobertura garantida"],
    color: "from-red-500 to-red-600",
    message: "Olá! O plano de saúde negou meu procedimento e preciso de ajuda."
  },
  {
    icon: Heart,
    title: "Aposentadoria INSS",
    description: "Benefício negado, aposentadoria atrasada, auxílio-doença",
    examples: ["Recurso INSS", "BPC/LOAS"],
    color: "from-green-500 to-green-600",
    message: "Olá! Tive um benefício negado pelo INSS e preciso de ajuda."
  },
  {
    icon: ShoppingCart,
    title: "Compras Online",
    description: "Produto não entregue, defeituoso ou diferente do anunciado",
    examples: ["Reembolso + danos", "Marketplace responsável"],
    color: "from-purple-500 to-purple-600",
    message: "Olá! Tive um problema com compra online e preciso de ajuda."
  },
  {
    icon: AlertTriangle,
    title: "Nome Sujo Indevido",
    description: "Nome sujo no SPC/Serasa sem motivo ou por dívida já paga",
    examples: ["Até R$ 10.000", "Dano moral presumido"],
    color: "from-amber-500 to-amber-600",
    message: "Olá! Meu nome foi negativado indevidamente e preciso de ajuda."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const LegalProblemsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Header */}
          <m.div variants={fadeInUp} className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">Problemas que Resolvemos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Problemas <span className="text-primary">Jurídicos</span> Mais Comuns
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clique no seu problema e fale agora com um advogado especialista pelo WhatsApp. 
              Consulta gratuita e sem compromisso.
            </p>
          </m.div>

          {/* Problems Grid */}
          <m.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <m.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleWhatsApp(problem.message)}
                  className="group cursor-pointer bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {problem.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {problem.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {problem.examples.map((example, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-[#25D366] font-medium text-sm group-hover:gap-2 transition-all">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </m.div>
              );
            })}
          </m.div>

          {/* CTA */}
          <m.div variants={fadeInUp} className="text-center pt-4">
            <p className="text-muted-foreground mb-4">
              Não encontrou seu problema? Fale conosco mesmo assim!
            </p>
            <Button 
              size="lg" 
              onClick={() => handleWhatsApp("Olá! Preciso de orientação jurídica.")}
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Advogado Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default LegalProblemsSection;
