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

const WHATSAPP_NUMBER = '5571997092633';

const practiceAreas = [
  {
    id: 'trabalhista',
    icon: Briefcase,
    title: "Trabalhista",
    description: "Demissão, horas extras, FGTS, assédio, rescisão",
    services: ["Rescisão indireta", "Verbas rescisórias", "Danos morais", "Assédio moral"],
    message: "Olá! Preciso de orientação sobre um problema trabalhista."
  },
  {
    id: 'familia',
    icon: Users,
    title: "Família",
    description: "Divórcio, pensão, guarda de filhos, inventário",
    services: ["Divórcio", "Pensão alimentícia", "Guarda de filhos", "Inventário"],
    message: "Olá! Preciso de orientação sobre um problema de família."
  },
  {
    id: 'consumidor',
    icon: ShoppingCart,
    title: "Consumidor",
    description: "Voo cancelado, cobrança indevida, plano de saúde",
    services: ["Voo cancelado", "Nome sujo", "Plano de saúde", "Fraude bancária"],
    message: "Olá! Preciso de orientação sobre um problema de consumidor."
  },
  {
    id: 'previdenciario',
    icon: Heart,
    title: "Previdenciário",
    description: "Aposentadoria, auxílio-doença, BPC/LOAS, pensão",
    services: ["Aposentadoria", "Auxílio-doença", "BPC/LOAS", "Pensão por morte"],
    message: "Olá! Preciso de orientação sobre um benefício do INSS."
  },
  {
    id: 'civil',
    icon: Scale,
    title: "Civil",
    description: "Contratos, danos morais, herança, imóveis",
    services: ["Danos morais", "Contratos", "Herança", "Usucapião"],
    message: "Olá! Preciso de orientação sobre um problema civil."
  },
  {
    id: 'criminal',
    icon: Shield,
    title: "Criminal",
    description: "Defesa criminal, habeas corpus, recursos",
    services: ["Defesa criminal", "Habeas corpus", "Recursos", "Audiência de custódia"],
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
    <section ref={ref} className="py-16 sm:py-20 bg-background border-b border-accent/30">
      <div className="container mx-auto px-4">
        <m.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Header */}
          <m.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.25em] uppercase text-accent">
                Áreas de atuação
              </span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4 leading-tight">
              Um escritório, <em className="not-italic text-primary">seis áreas</em> do direito.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
              Atendimento generalista com advogados especializados. Do trabalhista
              ao criminal, conduzimos cada caso com a discrição e a estratégia
              que ele exige.
            </p>
          </m.div>

          {/* Practice Areas Grid */}
          <m.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/30 border border-accent/30"
          >
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <m.article
                  key={area.id}
                  variants={fadeInUp}
                  className="group bg-card p-7 sm:p-8 transition-colors duration-300 hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 border border-accent/60 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-accent">
                      Direito
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-foreground mb-3">
                    {area.title}
                  </h3>

                  <p className="text-sm text-muted-foreground font-sans mb-5 leading-relaxed">
                    {area.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {area.services.slice(0, 3).map((service, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-sans text-foreground/80">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleWhatsApp(area.message)}
                    className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
                  >
                    Falar com advogado
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </m.article>
              );
            })}
          </m.div>

          {/* CTA */}
          <m.div variants={fadeInUp} className="text-center pt-4">
            <p className="text-muted-foreground font-sans mb-5 text-sm sm:text-base">
              Não sabe em qual área se enquadra seu caso? Fale conosco — orientamos sem compromisso.
            </p>
            <Button
              size="lg"
              onClick={() => handleWhatsApp("Olá! Preciso falar com um advogado.")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium rounded-sm px-8 h-12 shadow-button"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Advogado
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
