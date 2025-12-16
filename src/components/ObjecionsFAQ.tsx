import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, Shield, FileQuestion, HelpCircle, Briefcase, Heart, Building, Scale, ShoppingCart } from "lucide-react";
import { faqsByArea, defaultFAQs, type AreaFAQ } from "@/data/faq-by-area";

interface ObjecionsFAQProps {
  detectedArea?: string | null;
}

const areaIcons: Record<string, React.ElementType> = {
  trabalhista: Briefcase,
  familia: Heart,
  previdenciario: Building,
  civil: Scale,
  consumidor: ShoppingCart
};

const areaLabels: Record<string, string> = {
  trabalhista: 'Trabalhista',
  familia: 'Família',
  previdenciario: 'Previdenciário',
  civil: 'Civil',
  consumidor: 'Consumidor'
};

const ObjecionsFAQ = ({ detectedArea }: ObjecionsFAQProps) => {
  const [searchParams] = useSearchParams();
  const [currentArea, setCurrentArea] = useState<string | null>(null);
  
  useEffect(() => {
    // Priority: prop > query param > null
    const areaFromParam = searchParams.get('area');
    setCurrentArea(detectedArea || areaFromParam || null);
  }, [detectedArea, searchParams]);

  const objections = [
    {
      question: "Tenho medo de não resolver meu problema",
      answer: "Você terá clareza total sobre riscos, caminhos e estratégias disponíveis. A transparência é a base do trabalho realizado. Nenhuma promessa irreal será feita — apenas análise técnica honesta e fundamentada."
    },
    {
      question: "Já falei com outros advogados e não senti confiança",
      answer: "Aqui você recebe explicações diretas, fundamentadas e sem promessas irreais. O atendimento é baseado em ética profissional, comunicação clara e estratégia bem definida desde o primeiro contato."
    },
    {
      question: "Meu caso é muito complicado",
      answer: "Quanto mais complexo o caso, mais essencial é uma atuação estratégica e especializada. Casos difíceis exigem análise profunda, experiência comprovada e dedicação total — exatamente o que será oferecido."
    },
    {
      question: "Não entendo nada de assuntos jurídicos",
      answer: "Você será guiado passo a passo, em linguagem simples e objetiva. Todo o processo será explicado de forma clara, sem jargões complicados, para que você entenda exatamente o que está acontecendo e possa tomar decisões informadas."
    }
  ];

  const generalFaqs = [
    {
      question: "Como funciona o atendimento?",
      answer: "O atendimento começa com uma análise completa do seu caso, seguida pela elaboração de uma estratégia personalizada. Você terá acompanhamento contínuo durante todo o processo, com atualizações regulares e acesso direto ao advogado responsável."
    },
    {
      question: "Quanto tempo demora para resolver meu caso?",
      answer: "O prazo varia conforme a complexidade e natureza do caso. Durante a análise inicial, você receberá uma estimativa realista baseada em casos similares e na legislação vigente. O compromisso é com a celeridade possível sem comprometer a qualidade da defesa."
    },
    {
      question: "Posso acompanhar o andamento do meu processo?",
      answer: "Sim, você terá acesso a todas as atualizações do seu processo e poderá entrar em contato sempre que tiver dúvidas. A transparência e comunicação contínua são pilares fundamentais do atendimento."
    },
    {
      question: "Qual é o investimento necessário?",
      answer: "Os honorários são definidos após a análise do caso, considerando a complexidade, tempo estimado e estratégias necessárias. Você receberá uma proposta clara e transparente antes de qualquer compromisso, com todas as condições especificadas."
    },
    {
      question: "O escritório atua em todo o Brasil?",
      answer: "Sim, o escritório está capacitado para atuar em processos em todo território nacional, utilizando recursos digitais e presenciais conforme a necessidade de cada caso."
    },
    {
      question: "Posso fazer uma consulta antes de decidir?",
      answer: "Sim, a primeira consulta serve para entender seu caso, esclarecer dúvidas e avaliar as melhores estratégias. É uma oportunidade para você conhecer o método de trabalho e sentir confiança na condução do seu caso."
    }
  ];

  // Get area-specific FAQs
  const areaFaqs = currentArea && faqsByArea[currentArea] ? faqsByArea[currentArea] : [];
  const AreaIcon = currentArea && areaIcons[currentArea] ? areaIcons[currentArea] : null;
  const areaLabel = currentArea && areaLabels[currentArea] ? areaLabels[currentArea] : null;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Objections Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full mb-4">
                <AlertCircle className="h-5 w-5" />
                <span className="font-semibold">Preocupações Comuns</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Suas Dúvidas Respondidas
              </h2>
              <p className="text-lg text-muted-foreground">
                Entendemos suas preocupações. Veja respostas diretas e honestas.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {objections.map((objection, index) => (
                <AccordionItem
                  key={index}
                  value={`objection-${index}`}
                  className="bg-card border border-border rounded-lg px-4 sm:px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="font-semibold text-foreground text-sm sm:text-base">
                        {objection.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-3 sm:pt-4 pl-6 sm:pl-8 text-sm sm:text-base">
                    {objection.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Area-Specific FAQ Section (Dynamic) */}
          {areaFaqs.length > 0 && AreaIcon && areaLabel && (
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-full mb-4">
                  <AreaIcon className="h-5 w-5" />
                  <span className="font-semibold">Dúvidas sobre {areaLabel}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Perguntas Específicas de {areaLabel}
                </h2>
                <p className="text-muted-foreground">
                  Respostas para as dúvidas mais comuns nesta área do direito.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {areaFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`area-faq-${index}`}
                    className="bg-gradient-to-r from-amber-500/5 to-amber-500/10 border border-amber-500/20 rounded-lg px-4 sm:px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <AreaIcon className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span className="font-semibold text-foreground text-sm sm:text-base">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-3 sm:pt-4 pl-6 sm:pl-8 text-sm sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* General FAQ Section */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <HelpCircle className="h-5 w-5" />
                <span className="font-semibold">Perguntas Frequentes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                FAQ - Tire Todas as Suas Dúvidas
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {generalFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-lg px-4 sm:px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <FileQuestion className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="font-semibold text-foreground text-sm sm:text-base">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-3 sm:pt-4 pl-6 sm:pl-8 text-sm sm:text-base">
                    {faq.answer}
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

export default ObjecionsFAQ;
