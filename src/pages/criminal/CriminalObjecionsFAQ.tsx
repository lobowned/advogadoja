import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield } from "lucide-react";

const CriminalObjecionsFAQ = () => {
  const objections = [
    {
      question: "Quando devo procurar um advogado criminalista?",
      answer:
        "Quanto antes, melhor. A defesa que se constrói ainda no inquérito tem instrumentos que a defesa tardia já não dispõe. Esperar a denúncia — ou pior, a citação — é abrir mão de boa parte do que se poderia ter feito.",
    },
    {
      question: "E em caso de prisão em flagrante de um familiar?",
      answer:
        "Anote a delegacia, o nome da autoridade policial e, se possível, a tipificação preliminar. Em seguida, procure um advogado de confiança para acompanhar a lavratura do auto e a audiência de custódia, que ocorre em até vinte e quatro horas.",
    },
    {
      question: "O advogado garante resultado?",
      answer:
        "Não. O Código de Ética da OAB veda qualquer promessa nesse sentido. O que se compromete é a atuação técnica e diligente, fundada em legislação, doutrina e jurisprudência.",
    },
    {
      question: "O que eu contar fica entre nós?",
      answer:
        "Sim. O sigilo profissional é dever do advogado, protegido por lei, e aqui é levado a sério inclusive diante de autoridades.",
    },
    {
      question: "Atendem apenas em Camaçari?",
      answer:
        "Não. O escritório atua em todo o território nacional, mediante prévia avaliação do caso.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-muted-foreground px-1 py-2 mb-4 text-xs uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-border" />
              Perguntas Frequentes
              <span className="h-px w-8 bg-border" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Dúvidas comuns sobre Direito Criminal
            </h2>
          </div>

          {/* Dúvidas comuns */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                Suas dúvidas respondidas
              </h3>
              <p className="text-sm text-muted-foreground">
                Respostas diretas e honestas — sem promessas, sem rodeios.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-0 border-t border-border">
              {objections.map((objection, index) => (
                <AccordionItem
                  key={index}
                  value={`objection-${index}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 group">
                    <div className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-muted-foreground group-hover:text-foreground flex-shrink-0 mt-1 transition-colors" strokeWidth={1.5} />
                      <span className="font-medium text-foreground text-sm sm:text-base">
                        {objection.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-1 pb-5 pl-7 text-sm sm:text-base leading-relaxed">
                    {objection.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CriminalObjecionsFAQ;
