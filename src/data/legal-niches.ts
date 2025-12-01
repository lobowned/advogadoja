import { LegalNiche } from "@/types/legal-flows";
import { Users, Briefcase, Scale, Heart, Shield } from "lucide-react";
import { familiaActions } from "./legal-actions/familia";
import { trabalhistaActions } from "./legal-actions/trabalhista";
import { civilActions } from "./legal-actions/civil";
import { previdenciarioActions } from "./legal-actions/previdenciario";
import { penalActions } from "./legal-actions/penal";

export const legalNiches: LegalNiche[] = [
  {
    id: 'familia',
    name: 'Direito de Família',
    description: 'Separação, guarda de filhos, pensão - quando a família precisa de solução jurídica',
    icon: Users,
    color: 'text-blue-600',
    actions: familiaActions,
  },
  {
    id: 'trabalhista',
    name: 'Direito Trabalhista',
    description: 'Mandaram você embora injustamente? Tem direitos não pagos? Sofreu assédio?',
    icon: Briefcase,
    color: 'text-orange-600',
    actions: trabalhistaActions,
  },
  {
    id: 'civil',
    name: 'Direito Civil',
    description: 'Prejuízo financeiro, danos morais, contratos descumpridos - você não está sozinho',
    icon: Scale,
    color: 'text-purple-600',
    actions: civilActions,
  },
  {
    id: 'previdenciario',
    name: 'Direito Previdenciário',
    description: 'Seu benefício foi negado? Aposentadoria atrasada? Vamos resolver juntos',
    icon: Heart,
    color: 'text-green-600',
    actions: previdenciarioActions,
  },
  {
    id: 'penal',
    name: 'Direito Penal',
    description: 'Acusado injustamente? Vítima de crime? Defesa ou acusação com estratégia sólida',
    icon: Shield,
    color: 'text-red-600',
    actions: penalActions,
  },
];
