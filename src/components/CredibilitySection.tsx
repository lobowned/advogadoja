import { Award, CheckCircle2 } from "lucide-react";
import TrustBadges from "./TrustBadges";
import StatsCounter from "./StatsCounter";
import PartnerLogos from "./PartnerLogos";
import { securityFeatures } from "@/data/credibility-data";

const CredibilitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Credibilidade e Segurança
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por Que Confiar na{" "}
            <span className="text-primary">Nossa Equipe?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Credenciados, certificados e comprometidos com a excelência no atendimento jurídico
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mb-16 md:mb-20">
          <TrustBadges />
        </div>

        {/* Stats Counter */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-foreground mb-8">
            Números que Falam por Si
          </h3>
          <StatsCounter />
        </div>

        {/* Security Features */}
        <div className="mb-16 md:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="
              p-6 md:p-8 rounded-2xl
              bg-gradient-to-br from-green-500/10 to-emerald-500/5
              border border-green-500/20
            ">
              <h3 className="text-center text-xl md:text-2xl font-semibold text-foreground mb-6">
                🔐 Sua Segurança é Nossa Prioridade
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div>
          <h3 className="text-center text-xl md:text-2xl font-semibold text-foreground mb-6">
            Afiliações e Parcerias Profissionais
          </h3>
          <PartnerLogos />
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            Membros ativos de associações e entidades reconhecidas nacionalmente
          </p>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
