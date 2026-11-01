import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, Zap, Award, MessageSquare, UserCheck } from "lucide-react";
import { Lawyer, DynamicLawyer } from "@/data/lawyers";
import { getPersonalityByLawyerId } from "@/data/lawyer-personalities";

interface LawyerCredentialsPopupProps {
  lawyer: Lawyer | DynamicLawyer;
  children: React.ReactNode;
}

const LawyerCredentialsPopup = ({ lawyer, children }: LawyerCredentialsPopupProps) => {
  const [open, setOpen] = useState(false);
  const personality = getPersonalityByLawyerId(lawyer.id);
  const specializations = personality?.specializations || [lawyer.subSpecialty];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            Assistente Virtual
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header com foto e nome */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-4 border-primary/20">
              <AvatarImage src={lawyer.photo} alt={lawyer.name} />
              <AvatarFallback className="bg-primary/10 text-primary text-xl">
                {lawyer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">{lawyer.name}</h3>
              <p className="text-sm text-muted-foreground">{lawyer.subSpecialty}</p>
              <Badge variant="outline" className="mt-1 text-xs gap-1 border-primary/30 text-primary">
                <Bot className="w-3 h-3" />
                Assistente Virtual IA
              </Badge>
            </div>
          </div>

          {/* O que o AV faz */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <Zap className="w-5 h-5 mx-auto mb-1 text-emerald-500" />
              <p className="text-[11px] text-muted-foreground leading-tight">Responde em segundos, 24/7</p>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <MessageSquare className="w-5 h-5 mx-auto mb-1 text-primary" />
              <p className="text-[11px] text-muted-foreground leading-tight">Faz a triagem inicial do seu caso</p>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <UserCheck className="w-5 h-5 mx-auto mb-1 text-amber-600" />
              <p className="text-[11px] text-muted-foreground leading-tight">Encaminha pro Dr. Gilberto</p>
            </div>
          </div>

          {/* Especializações */}
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              Treinado em
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
            <h4 className="text-sm font-semibold mb-2">Sobre esta especialização</h4>
            <p className="text-sm text-muted-foreground">{lawyer.bio}</p>
          </div>

          {/* Transparência sobre o modelo */}
          <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-xs text-foreground/80 leading-relaxed">
              <strong className="text-primary">Como funciona:</strong> este assistente virtual é parte do atendimento inicial da{" "}
              <strong>Riccio Advocacia</strong>. Ele faz a triagem do seu caso e, assim que você for qualificado, o próprio{" "}
              <strong>Dr. Gilberto Riccio (OAB/BA 46.638)</strong> assume o atendimento pelo WhatsApp.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LawyerCredentialsPopup;
