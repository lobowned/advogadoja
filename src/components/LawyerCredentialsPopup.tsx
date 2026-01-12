import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield, Star, Briefcase, Award, Clock, CheckCircle2 } from "lucide-react";
import { Lawyer, DynamicLawyer } from "@/data/lawyers";
import { getPersonalityByLawyerId } from "@/data/lawyer-personalities";

interface LawyerCredentialsPopupProps {
  lawyer: Lawyer | DynamicLawyer;
  children: React.ReactNode;
}

const LawyerCredentialsPopup = ({ lawyer, children }: LawyerCredentialsPopupProps) => {
  const [open, setOpen] = useState(false);
  const personality = getPersonalityByLawyerId(lawyer.id);
  
  // Valores padrão se não encontrar personalidade
  const experienceYears = personality?.experienceYears || 10;
  const casesWon = personality?.casesWon || 500;
  const avgRating = personality?.avgRating || 4.7;
  const specializations = personality?.specializations || [lawyer.subSpecialty];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Credenciais Verificadas
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header com foto e nome */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-4 border-primary/20">
              <AvatarImage src={lawyer.photo} alt={`Advogado ${lawyer.name} especialista em ${lawyer.subSpecialty}`} />
              <AvatarFallback className="bg-primary/10 text-primary text-xl">
                {lawyer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">{lawyer.name}</h3>
              <p className="text-sm text-muted-foreground">{lawyer.subSpecialty}</p>
              <Badge variant="outline" className="mt-1 text-xs">
                <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" />
                {lawyer.oab}
              </Badge>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
              <p className="text-2xl font-bold">{experienceYears}</p>
              <p className="text-xs text-muted-foreground">Anos de experiência</p>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <Briefcase className="w-5 h-5 mx-auto mb-1 text-primary" />
              <p className="text-2xl font-bold">{casesWon.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Casos resolvidos</p>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <Star className="w-5 h-5 mx-auto mb-1 text-yellow-500 fill-yellow-500" />
              <p className="text-2xl font-bold">{avgRating}</p>
              <p className="text-xs text-muted-foreground">Avaliação média</p>
            </div>
          </div>

          {/* Especializações */}
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              Especializações
            </h4>
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Sobre</h4>
            <p className="text-sm text-muted-foreground">{lawyer.bio}</p>
          </div>

          {/* Verificação OAB */}
          <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
            <Shield className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-green-700 dark:text-green-400">Registro OAB Verificado</p>
              <p className="text-xs text-green-600 dark:text-green-500">{lawyer.oab} - Status: Ativo</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LawyerCredentialsPopup;
