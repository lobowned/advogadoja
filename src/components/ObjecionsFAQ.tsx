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
  const [currentArea, setCurrentArea] = useState<string | null>('consumidor');
  
  useEffect(() => {
    // Priority: prop > query param > default to consumidor
    const areaFromParam = searchParams.get('area');
    setCurrentArea(detectedArea || areaFromParam || 'consumidor');
  }, [detectedArea, searchParams]);

  const objections = [
    {
      question: "Será que tenho direito mesmo?",
      answer: "O Código de Defesa do Consumidor (CDC) protege você em diversas situações: cobranças indevidas, produtos defeituosos, serviços não prestados, negativação indevida e muito mais. Nossa equipe analisa seu caso gratuitamente."
    },
    {
      question: "Processar empresa grande dá certo?",
      answer: "Sim! Bancos, operadoras, companhias aéreas e planos de saúde perdem milhares de processos todos os dias. O Judiciário é favorável ao consumidor na maioria dos casos. Temos experiência contra todas as grandes empresas."
    },
    {
      question: "Quanto tempo demora para resolver?",
      answer: "Depende do caso. Liminares (como plano de saúde negando cirurgia) podem sair em 24-48h. Processos no Juizado Especial levam de 3 a 6 meses. Ações comuns, de 1 a 2 anos. Avaliamos a melhor estratégia para seu caso."
    },
    {
      question: "Tenho que pagar algo para começar?",
      answer: "A consulta inicial é gratuita. Analisamos seu caso e explicamos suas chances. Muitos processos de consumidor podem ser feitos sem custo inicial, com honorários apenas em caso de vitória."
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
    <section className="py-20 bg-muted/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* H2 Principal da Seção FAQ */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Perguntas Frequentes sobre <span className="text-primary">Direito do Consumidor</span>
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
