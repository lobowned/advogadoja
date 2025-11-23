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
    description: 'Divórcio, guarda, pensão alimentícia e união estável',
    icon: Users,
    color: 'text-blue-600',
    actions: familiaActions,
  },
  {
    id: 'trabalhista',
    name: 'Direito Trabalhista',
    description: 'Demissão, assédio, horas extras e direitos trabalhistas',
    icon: Briefcase,
    color: 'text-orange-600',
    actions: trabalhistaActions,
  },
  {
    id: 'civil',
    name: 'Direito Civil',
    description: 'Cobrança, danos morais, contratos e questões patrimoniais',
    icon: Scale,
    color: 'text-purple-600',
    actions: civilActions,
  },
  {
    id: 'previdenciario',
    name: 'Direito Previdenciário',
    description: 'Aposentadoria, auxílio-doença, BPC/LOAS e revisões',
    icon: Heart,
    color: 'text-green-600',
    actions: previdenciarioActions,
  },
  {
    id: 'penal',
    name: 'Direito Penal',
    description: 'Defesa criminal, habeas corpus e acompanhamento policial',
    icon: Shield,
    color: 'text-red-600',
    actions: penalActions,
  },
];
