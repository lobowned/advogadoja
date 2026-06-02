import { m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Siren,
  ScrollText,
  FileWarning,
  Search,
  ShieldAlert,
  KeyRound,
  Gavel,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '5571997092633';

const problems = [
  {
    icon: Siren,
    title: 'Prisão em Flagrante',
    description: 'Familiar detido em flagrante. Audiência de custódia em até 24h.',
    examples: ['Plantão 24h', 'Acompanhamento desde a delegacia'],
    message: 'Olá! Um familiar foi preso em flagrante e preciso de orientação urgente.',
    urgent: true,
  },
  {
    icon: ScrollText,
    title: 'Intimação para Depor',
    description: 'Recebeu intimação para prestar depoimento como investigado, testemunha ou suspeito.',
    examples: ['Direito ao silêncio', 'Acompanhamento técnico'],
    message: 'Olá! Fui intimado a depor e preciso de orientação.',
    urgent: false,
  },
  {
    icon: FileWarning,
    title: 'Inquérito Policial',
    description: 'Investigação em curso. Estratégia desde a fase pré-processual.',
    examples: ['Defesa antecipada', 'Trancamento'],
    message: 'Olá! Estou sendo investigado em inquérito policial.',
    urgent: false,
  },
  {
    icon: Search,
    title: 'Mandado de Busca',
    description: 'Mandado de busca e apreensão na residência, empresa ou veículo.',
    examples: ['Análise de legalidade', 'Acompanhamento'],
    message: 'Olá! Tive mandado de busca cumprido e preciso de orientação.',
    urgent: true,
  },
  {
    icon: ShieldAlert,
    title: 'Medida Protetiva',
    description: 'Aplicação ou descumprimento de medida protetiva em violência doméstica.',
    examples: ['Defesa técnica', 'Revisão de medida'],
    message: 'Olá! Preciso de orientação sobre medida protetiva (Maria da Penha).',
    urgent: false,
  },
  {
    icon: Gavel,
    title: 'Denúncia Recebida',
    description: 'Foi denunciado pelo Ministério Público. Recebeu citação para responder à ação penal.',
    examples: ['Resposta à acusação', 'Estratégia de defesa'],
    message: 'Olá! Fui denunciado em ação penal e preciso de defesa.',
    urgent: false,
  },
  {
    icon: KeyRound,
    title: 'Execução da Pena',
    description: 'Progressão de regime, livramento condicional, remição, indulto e comutação.',
    examples: ['Progressão', 'Livramento condicional'],
    message: 'Olá! Preciso de orientação sobre execução penal/progressão.',
    urgent: false,
  },
  {
    icon: AlertTriangle,
    title: 'Recurso Criminal',
    description: 'Apelação, recurso especial, recurso extraordinário, revisão criminal e habeas corpus.',
    examples: ['Apelação', 'HC', 'Revisão'],
    message: 'Olá! Preciso interpor recurso em processo criminal.',
    urgent: false,
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

const CriminalProblemsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <m.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-12"
        >
          <m.div variants={fadeInUp} className="text-center">
            <div className="inline-flex items-center gap-2 text-background/60 px-1 py-2 mb-4 text-xs uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-background/30" />
              Atendimento de urgência
              <span className="h-px w-8 bg-background/30" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
              Quando o tempo aperta
            </h2>
            <p className="text-base text-background/70 max-w-2xl mx-auto">
              Prisões em flagrante, conduções coercitivas, mandados de busca — quase
              sempre vêm sem aviso, e fora do horário comercial. Acione o escritório
              imediatamente.
            </p>
          </m.div>

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
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleWhatsApp(problem.message)}
                  className="group cursor-pointer bg-background/5 border border-background/10 rounded-lg p-6 transition-all duration-300 hover:border-background/30 hover:bg-background/10"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-md bg-background/10 flex items-center justify-center border border-background/20">
                      <Icon className="w-5 h-5 text-background" strokeWidth={1.5} />
                    </div>
                    {problem.urgent && (
                      <span className="text-[10px] uppercase tracking-[0.15em] text-background/60 border border-background/30 px-2 py-0.5 rounded">
                        Urgência
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-background mb-2 leading-snug">
                    {problem.title}
                  </h3>

                  <p className="text-background/60 text-sm leading-relaxed mb-5 line-clamp-2">
                    {problem.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {problem.examples.map((example, i) => (
                      <span
                        key={i}
                        className="text-xs text-background/70 px-2 py-0.5 rounded border border-background/20 font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-background text-sm group-hover:gap-2 transition-all border-t border-background/10 pt-4">
                    <span>Acionar plantão</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </div>
                </m.div>
              );
            })}
          </m.div>

          <m.div variants={fadeInUp} className="text-center pt-4 max-w-2xl mx-auto">
            <p className="text-background/70 mb-2 italic font-light text-sm leading-relaxed">
              "O direito ao silêncio e à assistência de advogado é garantia constitucional
              — art. 5º, LXIII, CF. Exerça-o desde o primeiro instante."
            </p>
            <p className="text-background/60 mb-6 text-sm">
              Familiares ou interessados podem acionar o escritório no plantão 24h.
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleWhatsApp('Olá! Preciso falar com advogado criminalista — urgência.')}
              className="border-background/40 bg-transparent text-background hover:bg-background hover:text-foreground transition-colors px-8"
            >
              <MessageCircle className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Plantão criminal 24h
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
            </Button>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default CriminalProblemsSection;
