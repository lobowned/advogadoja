import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Plane, 
  Smartphone, 
  Building2, 
  Heart, 
  ShoppingCart, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const problems = [
  {
    icon: Plane,
    title: "Aviação",
    description: "Voo cancelado, atraso, bagagem extraviada ou overbooking",
    examples: ["Indenização até R$ 15.000", "Sem sair de casa"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "Telecomunicações",
    description: "Cobrança indevida, internet lenta, serviço não contratado",
    examples: ["Devolução em dobro", "Danos morais"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Building2,
    title: "Bancos e Financeiras",
    description: "Empréstimo não contratado, juros abusivos, débito indevido",
    examples: ["Fraude bancária", "Cartão clonado"],
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Heart,
    title: "Planos de Saúde",
    description: "Negativa de procedimento, reajuste abusivo, cancelamento",
    examples: ["Liminar em 48h", "Cobertura garantida"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: ShoppingCart,
    title: "Compras Online",
    description: "Produto não entregue, defeituoso ou diferente do anunciado",
    examples: ["Reembolso + danos", "Marketplace responsável"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: AlertTriangle,
    title: "Negativação Indevida",
    description: "Nome sujo no SPC/Serasa sem motivo ou por dívida já paga",
    examples: ["Até R$ 10.000", "Dano moral presumido"],
    color: "from-amber-500 to-amber-600"
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

const ConsumerProblemsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollToChat = () => {
    const chatSection = document.getElementById('lawyer-chat');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-semibold">Problemas que Resolvemos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Você Teve Algum Desses Problemas?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clique no seu problema e fale agora com um advogado especialista. 
              Consulta gratuita e sem compromisso.
            </p>
          </motion.div>

          {/* Problems Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToChat}
                  className="group cursor-pointer bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {problem.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
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
                  
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Falar com advogado</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center pt-4">
            <p className="text-muted-foreground mb-4">
              Não encontrou seu problema? Fale conosco mesmo assim!
            </p>
            <Button 
              size="lg" 
              onClick={scrollToChat}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-all"
            >
              Falar com Advogado do Consumidor
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsumerProblemsSection;
