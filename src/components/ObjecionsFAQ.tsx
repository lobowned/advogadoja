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
import { HOME_FAQ, HOME_OBJECOES } from "@/data/home-content";

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
  // Na home não há área: as perguntas são gerais. Com ?area= (ou detectedArea), entra o bloco da área.
  const [currentArea, setCurrentArea] = useState<string | null>(null);

  useEffect(() => {
    const areaFromParam = searchParams.get('area');
    setCurrentArea(detectedArea || areaFromParam || null);
  }, [detectedArea, searchParams]);

  // Textos em src/data/home-content.ts (os mesmos vão no HTML pronto e no FAQPage da home).
  const objections = HOME_OBJECOES;
  const generalFaqs = HOME_FAQ;

  // Get area-specific FAQs
  const areaFaqs = currentArea && faqsByArea[currentArea] ? faqsByArea[currentArea] : [];
  const AreaIcon = currentArea && areaIcons[currentArea] ? areaIcons[currentArea] : null;
  const areaLabel = currentArea && areaLabels[currentArea] ? areaLabels[currentArea] : null;

  return (
    <section className="py-20 bg-muted/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* H2 Principal da Seção FAQ */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {areaLabel ? (
                <>Perguntas Frequentes sobre <span className="text-primary">{areaLabel === 'Consumidor' ? 'Direito do Consumidor' : areaLabel}</span></>
              ) : (
                <>Perguntas <span className="text-primary">frequentes</span></>
              )}
            </h2>
          </div>

          {/* Objections Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full mb-4">
                <AlertCircle className="h-5 w-5" />
                <span className="font-semibold">Preocupações Comuns</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Suas Dúvidas Respondidas
              </h3>
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
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Perguntas Específicas de {areaLabel}
                </h3>
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
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                FAQ - Tire Todas as Suas Dúvidas
              </h3>
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
