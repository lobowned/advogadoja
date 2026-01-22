import { Link } from "react-router-dom";
import { 
  Plane, 
  AlertCircle, 
  Heart, 
  CreditCard, 
  ShoppingBag, 
  Package,
  Syringe,
  Scale,
  Users,
  Home,
  Shield,
  Gavel,
  Calculator,
  MapPin,
  FileText,
  HelpCircle,
  Newspaper,
  Trophy,
  ChevronDown,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Consumer Landing Pages
const consumerProblems = [
  { title: "Voo Cancelado ou Atrasado", href: "/advogado-voo-cancelado-atrasado", icon: Plane, color: "text-blue-600" },
  { title: "Negativação Indevida (Nome Sujo)", href: "/advogado-negativacao-indevida", icon: AlertCircle, color: "text-red-600" },
  { title: "Plano de Saúde Negou Cobertura", href: "/advogado-plano-saude-cobertura-negada", icon: Heart, color: "text-pink-600" },
  { title: "Fraude Bancária / Golpe Pix", href: "/fraude-bancaria", icon: CreditCard, color: "text-orange-600" },
  { title: "Cobrança Indevida", href: "/advogado-cobranca-indevida", icon: ShoppingBag, color: "text-purple-600" },
  { title: "Produto Defeituoso", href: "/advogado-produto-defeituoso", icon: Package, color: "text-amber-600" },
];

// Surgery Injunctions
const surgeryInjunctions = [
  { title: "Cirurgia Negada (Geral)", href: "/liminar-cirurgia-negada", icon: Syringe, color: "text-red-500" },
  { title: "Cirurgia Bariátrica", href: "/liminar-cirurgia-bariatrica", icon: Syringe, color: "text-green-600" },
  { title: "Tratamento de Câncer", href: "/liminar-tratamento-cancer", icon: Syringe, color: "text-purple-600" },
  { title: "Cirurgia Ortopédica", href: "/liminar-cirurgia-ortopedica", icon: Syringe, color: "text-blue-600" },
  { title: "Cirurgia Cardíaca", href: "/liminar-cirurgia-cardiaca", icon: Syringe, color: "text-red-600" },
  { title: "Neurocirurgia", href: "/liminar-neurocirurgia", icon: Syringe, color: "text-indigo-600" },
  { title: "Cirurgia Oftalmológica", href: "/liminar-cirurgia-olhos", icon: Syringe, color: "text-cyan-600" },
];

// Practice Areas
const practiceAreas = [
  { title: "Direito do Consumidor", href: "/advogado-consumidor", icon: Shield, color: "text-emerald-600" },
  { title: "Direito Trabalhista", href: "/advogado-trabalhista", icon: Gavel, color: "text-blue-600" },
  { title: "Direito de Família", href: "/advogado-familia", icon: Users, color: "text-pink-600" },
  { title: "Direito Civil", href: "/advogado-civil", icon: Home, color: "text-amber-600" },
  { title: "Direito Previdenciário", href: "/advogado-previdenciario", icon: Shield, color: "text-green-600" },
  { title: "Direito Penal", href: "/advogado-penal", icon: Scale, color: "text-red-600" },
];

// Calculators grouped by area
const calculatorGroups = {
  consumidor: [
    { title: "Voo Cancelado", href: "/calculadora-voo-cancelado" },
    { title: "Negativação", href: "/calculadora-negativacao" },
    { title: "Devolução em Dobro", href: "/calculadora-devolucao-dobro" },
    { title: "Plano de Saúde", href: "/calculadora-plano-saude" },
    { title: "Fraude Bancária", href: "/calculadora-fraude-bancaria" },
    { title: "Liminar Cirurgia", href: "/calculadora-liminar-cirurgia" },
  ],
  trabalhista: [
    { title: "Rescisão Trabalhista", href: "/calculadora-trabalhista" },
    { title: "Horas Extras", href: "/calculadora-horas-extras" },
    { title: "FGTS", href: "/calculadora-fgts" },
    { title: "Seguro Desemprego", href: "/calculadora-seguro-desemprego" },
    { title: "Insalubridade", href: "/calculadora-insalubridade" },
  ],
  familia: [
    { title: "Pensão Alimentícia", href: "/calculadora-pensao" },
    { title: "Partilha de Bens", href: "/calculadora-partilha-bens" },
    { title: "Inventário", href: "/calculadora-inventario" },
  ],
  previdenciario: [
    { title: "Aposentadoria", href: "/calculadora-aposentadoria" },
    { title: "Auxílio-Doença", href: "/calculadora-auxilio-doenca" },
    { title: "BPC/LOAS", href: "/calculadora-bpc-loas" },
    { title: "Pensão por Morte", href: "/calculadora-pensao-morte" },
  ],
  civil: [
    { title: "Danos Morais", href: "/calculadora-danos-morais" },
    { title: "Atualização de Dívida", href: "/calculadora-atualizacao-divida" },
    { title: "Aluguel Atrasado", href: "/calculadora-aluguel-atrasado" },
    { title: "DPVAT", href: "/calculadora-dpvat" },
  ],
};

// Regional Hubs
const regionalHubs = [
  { title: "Bahia", href: "/advogado-bahia", cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari"] },
  { title: "São Paulo", href: "/advogado-sao-paulo", cities: ["São Paulo", "Campinas", "Guarulhos", "Santos"] },
  { title: "Rio de Janeiro", href: "/advogado-rio-de-janeiro", cities: ["Rio de Janeiro", "Niterói", "Duque de Caxias"] },
  { title: "Minas Gerais", href: "/advogado-minas-gerais", cities: ["Belo Horizonte", "Uberlândia", "Contagem"] },
];

// Resources
const resources = [
  { title: "Blog e Artigos", href: "/artigos", icon: FileText, count: "50+" },
  { title: "Perguntas Frequentes", href: "/perguntas", icon: HelpCircle, count: "300+" },
  { title: "Notícias Jurídicas", href: "/noticias", icon: Newspaper, count: "Diário" },
  { title: "Casos de Sucesso", href: "/casos-de-sucesso", icon: Trophy, count: "Real" },
];

interface ServiceCardProps {
  title: string;
  href: string;
  icon: React.ElementType;
  color?: string;
}

const ServiceCard = ({ title, href, icon: Icon, color = "text-primary" }: ServiceCardProps) => (
  <Link to={href} className="group">
    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
      <CardContent className="p-4 flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-muted ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="font-medium text-sm group-hover:text-primary transition-colors">
          {title}
        </span>
      </CardContent>
    </Card>
  </Link>
);

interface CollapsibleSectionProps {
  title: string;
  icon: React.ElementType;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection = ({ title, icon: Icon, badge, children, defaultOpen = false }: CollapsibleSectionProps) => {
  return (
    <Collapsible defaultOpen={defaultOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          className="w-full justify-between p-4 h-auto hover:bg-muted/50 group"
        >
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-primary" />
            <span className="font-semibold text-lg">{title}</span>
            {badge && (
              <Badge variant="secondary" className="ml-2">
                {badge}
              </Badge>
            )}
          </div>
          <ChevronDown className="w-5 h-5 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
};

const ServicesSection = () => {
  const totalCalculators = Object.values(calculatorGroups).flat().length;
  
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acesso rápido a todas as soluções jurídicas disponíveis. 
            Encontre o advogado certo para o seu caso.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {/* Consumer Problems */}
          <Card>
            <CollapsibleSection 
              title="Problemas do Consumidor" 
              icon={Shield} 
              badge="6 páginas"
              defaultOpen={true}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {consumerProblems.map((item) => (
                  <ServiceCard key={item.href} {...item} />
                ))}
              </div>
            </CollapsibleSection>
          </Card>

          {/* Surgery Injunctions */}
          <Card>
            <CollapsibleSection 
              title="Liminares de Cirurgia" 
              icon={Syringe} 
              badge="7 tipos"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {surgeryInjunctions.map((item) => (
                  <ServiceCard key={item.href} {...item} />
                ))}
              </div>
            </CollapsibleSection>
          </Card>

          {/* Practice Areas */}
          <Card>
            <CollapsibleSection 
              title="Áreas de Atuação" 
              icon={Scale} 
              badge="6 áreas"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {practiceAreas.map((item) => (
                  <ServiceCard key={item.href} {...item} />
                ))}
              </div>
            </CollapsibleSection>
          </Card>

          {/* Calculators */}
          <Card>
            <CollapsibleSection 
              title="Calculadoras Jurídicas" 
              icon={Calculator} 
              badge={`${totalCalculators} calculadoras`}
            >
              <div className="space-y-6">
                {Object.entries(calculatorGroups).map(([area, calcs]) => (
                  <div key={area}>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      {area === 'consumidor' && '🛡️ Consumidor'}
                      {area === 'trabalhista' && '⚖️ Trabalhista'}
                      {area === 'familia' && '👨‍👩‍👧 Família'}
                      {area === 'previdenciario' && '🏛️ Previdenciário'}
                      {area === 'civil' && '🏠 Civil'}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                      {calcs.map((calc) => (
                        <Link 
                          key={calc.href} 
                          to={calc.href}
                          className="p-3 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
                        >
                          {calc.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <Link to="/calculadoras" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                    Ver todas as calculadoras <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </CollapsibleSection>
          </Card>

          {/* Regional Coverage */}
          <Card>
            <CollapsibleSection 
              title="Atendimento Regional" 
              icon={MapPin} 
              badge="Brasil inteiro"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {regionalHubs.map((hub) => (
                  <Link key={hub.href} to={hub.href} className="group">
                    <Card className="hover:shadow-lg hover:border-primary/50 transition-all">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                          <MapPin className="w-5 h-5 text-primary" />
                          {hub.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground">
                          {hub.cities.join(" • ")} e mais
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="pt-4 border-t mt-4">
                <Link to="/sitemap" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                  Ver todas as 60+ cidades atendidas <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </CollapsibleSection>
          </Card>

          {/* Resources */}
          <Card>
            <CollapsibleSection 
              title="Recursos e Conteúdo" 
              icon={FileText} 
              badge="400+ páginas"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {resources.map((resource) => (
                  <Link key={resource.href} to={resource.href} className="group">
                    <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all text-center">
                      <CardContent className="p-4">
                        <resource.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">
                          {resource.title}
                        </p>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {resource.count}
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CollapsibleSection>
          </Card>

          {/* Sitemap Link */}
          <div className="text-center pt-8">
            <Link to="/sitemap">
              <Button variant="outline" size="lg" className="gap-2">
                <FileText className="w-5 h-5" />
                Ver Mapa Completo do Site (900+ páginas)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
