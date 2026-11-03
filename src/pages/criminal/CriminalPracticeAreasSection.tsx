import { m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Banknote,
  Gavel,
  ShieldAlert,
  Pill,
  KeyRound,
  Scale,
} from 'lucide-react';

const practiceAreas = [
  {
    id: 'patrimonio',
    icon: Banknote,
    title: 'Crimes contra o patrimônio',
    description: 'Furto, roubo, estelionato, apropriação indébita e congêneres. Análise da prova desde a fase pré-processual.',
  },
  {
    id: 'juri',
    icon: Gavel,
    title: 'Tribunal do Júri',
    description: 'Acompanhamento integral do procedimento bifásico — da pronúncia ao Plenário —, com o cuidado que a tribuna exige.',
  },
  {
    id: 'maria-penha',
    icon: ShieldAlert,
    title: 'Violência doméstica · Lei Maria da Penha',
    description: 'Defesa técnica em medidas protetivas, ações penais e incidentes correlatos, atenta às particularidades probatórias.',
  },
  {
    id: 'drogas',
    icon: Pill,
    title: 'Lei de Drogas',
    description: 'Tráfico, associação, uso e modalidade privilegiada. Exame minucioso da abordagem policial e da cadeia de custódia.',
  },
  {
    id: 'execucao',
    icon: KeyRound,
    title: 'Execução Penal',
    description: 'Progressão de regime, livramento condicional, remição, indulto, comutação e incidentes da execução.',
  },
  {
    id: 'hc-recursos',
    icon: Scale,
    title: 'Habeas Corpus e recursos',
    description: 'Impetração em todas as instâncias, recursos ordinários, especial e extraordinário, e revisão criminal.',
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

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </m.div>
              );
            })}
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default CriminalPracticeAreasSection;
