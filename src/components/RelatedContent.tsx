import { Link } from "react-router-dom";
import { Calculator, FileText, HelpCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogArticles } from "@/data/blog-articles";
import { programmaticFAQs } from "@/data/programmatic-faqs";
import { calculatorInfo, CalculatorType, CalculatorInfo } from "@/data/calculator-config";

interface RelatedContentProps {
  currentType: "calculator" | "article" | "faq";
  nicheId?: string;
  currentSlug?: string;
  limit?: number;
}

const RelatedContent = ({
  currentType,
  nicheId = "consumidor",
  currentSlug,
  limit = 3,
}: RelatedContentProps) => {
  // Get related articles
  const relatedArticles = blogArticles
    .filter((a) => a.nicheId === nicheId && a.slug !== currentSlug)
    .slice(0, limit);

  // Get related calculators
  const calculatorTypes: CalculatorType[] = Object.keys(calculatorInfo) as CalculatorType[];
  const nicheCalculators = calculatorTypes.filter((key) => {
    const info = calculatorInfo[key];
    // Map calculator to niches
    const calcNicheMap: Record<string, string[]> = {
      labor: ["trabalhista"],
      alimony: ["familia"],
      retirement: ["previdenciario"],
      overtime: ["trabalhista"],
      unemployment: ["trabalhista"],
      fgts: ["trabalhista"],
      hazardPay: ["trabalhista"],
      assetDivision: ["familia", "civil"],
      inventory: ["civil", "familia"],
      deathPension: ["previdenciario"],
      sicknessAid: ["previdenciario"],
      bpcLoas: ["previdenciario"],
      moralDamages: ["civil", "consumidor"],
      debtUpdate: ["civil"],
      rentArrears: ["civil"],
      dpvat: ["civil"],
      flightDelay: ["consumidor"],
      negativacao: ["consumidor"],
      devolucaoEmDobro: ["consumidor"],
      planoSaude: ["consumidor"],
      fraudeBancaria: ["consumidor"],
    };
    return calcNicheMap[key]?.includes(nicheId);
  });

  // Get related FAQs
  const relatedFaqs = programmaticFAQs
    .filter((faq) => {
      const faqNiche = faq.id.split("-")[0];
      return faqNiche === nicheId && faq.slug !== currentSlug;
    })
    .slice(0, limit);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Conteúdo Relacionado</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Related Articles */}
          {currentType !== "article" && relatedArticles.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Artigos Relacionados</h3>
              </div>
              {relatedArticles.slice(0, 2).map((article) => (
                <Link key={article.id} to={`/blog/${article.slug}`}>
                  <Card className="hover:shadow-md transition-shadow hover:border-primary/50">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-sm line-clamp-2 mb-2">
                        {article.title}
                      </h4>
                      <div className="flex items-center text-xs text-primary">
                        <span>Ler artigo</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Related Calculators */}
          {currentType !== "calculator" && nicheCalculators.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Calculadoras Úteis</h3>
              </div>
              {nicheCalculators.slice(0, 2).map((calcType) => {
                const info = calculatorInfo[calcType];
                return (
                  <Link key={calcType} to={info.url}>
                    <Card className="hover:shadow-md transition-shadow hover:border-primary/50">
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2 text-xs">
                          Gratuita
                        </Badge>
                        <h4 className="font-medium text-sm line-clamp-2 mb-2">
                          {info.title}
                        </h4>
                        <div className="flex items-center text-xs text-primary">
                          <span>Calcular agora</span>
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Related FAQs */}
          {currentType !== "faq" && relatedFaqs.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Perguntas Frequentes</h3>
              </div>
              {relatedFaqs.slice(0, 2).map((faq) => (
                <Link key={faq.id} to={`/perguntas/${faq.slug}`}>
                  <Card className="hover:shadow-md transition-shadow hover:border-primary/50">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-sm line-clamp-2 mb-2">
                        {faq.question}
                      </h4>
                      <div className="flex items-center text-xs text-primary">
                        <span>Ver resposta</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <span>Falar com advogado especializado</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
