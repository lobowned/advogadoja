import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useExitIntent } from "@/hooks/useExitIntent";
import { BookOpen, Check, Loader2 } from "lucide-react";

const ExitIntentPopup = () => {
  const { showPopup, setShowPopup, closePopup } = useExitIntent({ delay: 15000 });
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Salvar como lead com source específico
      await supabase.from("leads").insert({
        email: email.trim(),
        status: "newsletter",
        case_details: {
          source: "exit_intent",
          lead_magnet: "7_direitos"
        }
      });

      setIsSubscribed(true);
      toast({
        title: "Guia enviado!",
        description: "Verifique seu email em alguns minutos"
      });

      // Fechar popup após 2s
      setTimeout(() => {
        closePopup();
      }, 2000);
    } catch (error) {
      console.error("Error saving lead:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold mb-2">Guia Enviado!</h2>
            <p className="text-muted-foreground">
              Verifique seu email em alguns minutos
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent className="sm:max-w-md">
        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">
            Espere! Não vá embora sem saber seus direitos
          </h2>

          {/* Lead Magnet Description */}
          <p className="text-muted-foreground mb-4">
            Baixe grátis nosso guia exclusivo:
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 mb-4 border border-primary/20">
            <h3 className="font-bold text-primary text-lg">
              📚 7 Direitos que Você Não Sabia que Tinha
            </h3>
            <ul className="text-sm text-left mt-3 space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Horas extras não pagas</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Verbas rescisórias ocultas</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Direitos do consumidor esquecidos</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Benefícios previdenciários</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center"
              disabled={isLoading}
            />
            <Button
              type="submit"
              className="w-full bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Receber Guia Grátis"
              )}
            </Button>
          </form>

          {/* Skip link */}
          <button
            onClick={closePopup}
            className="text-xs text-muted-foreground mt-4 hover:underline"
          >
            Não, obrigado
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
