import { m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Banknote,
  Heart,
  Gavel,
  ShieldAlert,
  Pill,
  Building2,
  Landmark,
  Laptop,
  KeyRound,
  Scale,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '5571997092633';

const practiceAreas = [
  {
    id: 'patrimonio',
    icon: Banknote,
    title: 'Crimes contra o patrimônio',
    description: 'Furto, roubo, estelionato, apropriação indébita e congêneres. Análise da prova desde a fase pré-processual.',
    services: ['Furto', 'Roubo', 'Estelionato', 'Apropriação indébita'],
    message: 'Olá! Preciso de orientação sobre crime contra o patrimônio.',
  },
  {
    id: 'pessoa',
    icon: Heart,
    title: 'Crimes contra a pessoa',
    description: 'Homicídio, lesão corporal, ameaça, perseguição e crimes de trânsito com resultado grave.',
    services: ['Homicídio', 'Lesão corporal', 'Ameaça', 'Crime de trânsito'],
    message: 'Olá! Preciso de orientação sobre crime contra a pessoa.',
  },
  {
    id: 'juri',
    icon: Gavel,
    title: 'Tribunal do Júri',
    description: 'Acompanhamento integral do procedimento bifásico — da pronúncia ao Plenário —, com o cuidado que a tribuna exige.',
    services: ['Pronúncia', 'Plenário', 'Recursos'],
    message: 'Olá! Preciso de defesa em processo de Tribunal do Júri.',
  },
  {
    id: 'maria-penha',
    icon: ShieldAlert,
    title: 'Violência doméstica · Lei Maria da Penha',
    description: 'Defesa técnica em medidas protetivas, ações penais e incidentes correlatos, atenta às particularidades probatórias.',
    services: ['Medidas protetivas', 'Ação penal', 'Recursos'],
    message: 'Olá! Preciso de defesa em processo de violência doméstica.',
  },
  {
    id: 'drogas',
    icon: Pill,
    title: 'Lei de Drogas',
    description: 'Tráfico, associação, uso e modalidade privilegiada. Exame minucioso da abordagem policial e da cadeia de custódia.',
    services: ['Tráfico', 'Associação', 'Tráfico privilegiado', 'Uso'],
    message: 'Olá! Preciso de orientação sobre Lei de Drogas.',
  },
  {
    id: 'economicos',
    icon: Building2,
    title: 'Crimes econômicos e empresariais',
    description: 'Ordem tributária e financeira, lavagem de capitais e responsabilização penal de pessoas jurídicas e seus administradores.',
    services: ['Crimes tributários', 'Lavagem', 'Crimes financeiros', 'Responsab. PJ'],
    message: 'Olá! Preciso de orientação sobre crime econômico/empresarial.',
  },
  {
    id: 'admin-publica',
    icon: Landmark,
    title: 'Crimes contra a Administração Pública',
    description: 'Peculato, corrupção, prevaricação e investigações correlatas, conduzidas com a discrição que o tema requer.',
    services: ['Peculato', 'Corrupção', 'Prevaricação'],
    message: 'Olá! Preciso de orientação sobre crime contra a Administração Pública.',
  },
  {
    id: 'ciberneticos',
    icon: Laptop,
    title: 'Crimes cibernéticos',
    description: 'Estelionatos digitais, invasão de dispositivo, divulgação não autorizada de conteúdo e crimes contra a honra em meio virtual.',
    services: ['Estelionato digital', 'Invasão', 'Crimes contra honra'],
    message: 'Olá! Preciso de orientação sobre crime cibernético.',
  },
  {
    id: 'execucao',
    icon: KeyRound,
    title: 'Execução Penal',
    description: 'Progressão de regime, livramento condicional, remição, indulto, comutação e incidentes da execução.',
    services: ['Progressão', 'Livramento', 'Remição', 'Indulto'],
    message: 'Olá! Preciso de orientação sobre execução penal.',
  },
  {
    id: 'hc-recursos',
    icon: Scale,
    title: 'Habeas Corpus e recursos',
    description: 'Impetração em todas as instâncias, recursos ordinários, especial e extraordinário, e revisão criminal.',
    services: ['Habeas corpus', 'Recurso especial', 'Recurso extraordinário', 'Revisão'],
    message: 'Olá! Preciso de orientação sobre habeas corpus/recurso criminal.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const CriminalPracticeAreasSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section ref={ref} id="areas" className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <m.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-12"
        >
          <m.div variants={fadeInUp} className="text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground px-1 py-2 mb-4 text-xs uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-border" />
              Áreas de atuação
              <span className="h-px w-8 bg-border" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Matérias em que o escritório atua
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Dentro do Direito Criminal, há especialidades. Estas são as nossas — do
              inquérito policial à execução da pena.
            </p>
          </m.div>

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
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  className="group relative bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-foreground/30 hover:shadow-sm"
                >
                  <div className="absolute left-0 top-6 bottom-6 w-px bg-border group-hover:bg-foreground/30 transition-colors" />

                  <div className="w-11 h-11 rounded-md bg-muted flex items-center justify-center mb-5 border border-border group-hover:border-foreground/20 transition-colors">
                    <Icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {area.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {area.services.slice(0, 3).map((service, i) => (
                      <span
                        key={i}
                        className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded font-medium border border-border"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleWhatsApp(area.message)}
                    className="text-sm text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-colors inline-flex items-center gap-1.5"
                  >
                    Falar com o escritório
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </m.div>
              );
            })}
          </m.div>

          <m.div variants={fadeInUp} className="text-center pt-4">
            <p className="text-muted-foreground mb-6 text-sm">
              Sua matéria não está listada acima? O escritório atua em todo o espectro do Direito Penal.
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleWhatsApp('Olá! Preciso falar com advogado criminalista.')}
              className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors px-8"
            >
              <MessageCircle className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Falar com o escritório
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
            </Button>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default CriminalPracticeAreasSection;
