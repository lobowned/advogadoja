import { m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  Users, 
  ShoppingCart, 
  Heart, 
  Scale, 
  Shield,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '5571997036269';

const practiceAreas = [
  {
    id: 'trabalhista',
    icon: Briefcase,
    title: "Trabalhista",
    description: "Demissão, horas extras, FGTS, assédio, rescisão",
    services: ["Rescisão indireta", "Verbas rescisórias", "Danos morais", "Assédio moral"],
    color: "from-orange-500 to-orange-600",
    message: "Olá! Preciso de orientação sobre um problema trabalhista."
  },
  {
    id: 'familia',
    icon: Users,
    title: "Família",
    description: "Divórcio, pensão, guarda de filhos, inventário",
    services: ["Divórcio", "Pensão alimentícia", "Guarda de filhos", "Inventário"],
    color: "from-blue-500 to-blue-600",
    message: "Olá! Preciso de orientação sobre um problema de família."
  },
  {
    id: 'consumidor',
    icon: ShoppingCart,
    title: "Consumidor",
    description: "Voo cancelado, cobrança indevida, plano de saúde",
    services: ["Voo cancelado", "Nome sujo", "Plano de saúde", "Fraude bancária"],
    color: "from-emerald-500 to-emerald-600",
    message: "Olá! Preciso de orientação sobre um problema de consumidor."
  },
  {
    id: 'previdenciario',
    icon: Heart,
    title: "Previdenciário",
    description: "Aposentadoria, auxílio-doença, BPC/LOAS, pensão",
    services: ["Aposentadoria", "Auxílio-doença", "BPC/LOAS", "Pensão por morte"],
    color: "from-green-500 to-green-600",
    message: "Olá! Preciso de orientação sobre um benefício do INSS."
  },
  {
    id: 'civil',
    icon: Scale,
    title: "Civil",
    description: "Contratos, danos morais, herança, imóveis",
    services: ["Danos morais", "Contratos", "Herança", "Usucapião"],
    color: "from-purple-500 to-purple-600",
    message: "Olá! Preciso de orientação sobre um problema civil."
  },
  {
    id: 'criminal',
    icon: Shield,
    title: "Criminal",
    description: "Defesa criminal, habeas corpus, recursos",
    services: ["Defesa criminal", "Habeas corpus", "Recursos", "Audiência de custódia"],
    color: "from-red-500 to-red-600",
    message: "Olá! Preciso de orientação sobre um problema criminal."
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

const PracticeAreasSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30">
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
              <Scale className="h-5 w-5" />
              <span className="font-semibold">Áreas de Atuação</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Especialistas em <span className="text-primary">Todas as Áreas</span> do Direito
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha sua área e fale agora com um advogado especialista pelo WhatsApp.
              Atendimento rápido, seguro e sem compromisso.
            </p>
          </m.div>

          {/* Practice Areas Grid */}
          <m.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <m.div
                  key={area.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Direito {area.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {area.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {area.services.slice(0, 3).map((service, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleWhatsApp(area.message)}
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar pelo WhatsApp
                  </Button>
                </m.div>
              );
            })}
          </m.div>

          {/* CTA */}
          <m.div variants={fadeInUp} className="text-center pt-4">
            <p className="text-muted-foreground mb-4">
              Não sabe qual área se encaixa no seu caso? Fale conosco mesmo assim!
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

export default PracticeAreasSection;
