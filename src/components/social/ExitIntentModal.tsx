import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, ShieldCheck, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { useExitIntent } from "@/hooks/useExitIntent";
import { hasSessionFlag, setSessionFlag } from "@/hooks/useSessionFlag";
import { trackGAEvent, trackWhatsAppConversion, WHATSAPP_CLICKED_FLAG } from "@/lib/trackWhatsApp";

const WHATSAPP_NUMBER = "5571997036269";
const EXIT_SHOWN_FLAG = "exit_intent_shown";
const HIDE_PREFIXES = ["/admin", "/concluido", "/questionario", "/prev", "/conversao"];

export const ExitIntentModal = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const blocked =
    HIDE_PREFIXES.some((p) => location.pathname.startsWith(p)) ||
    hasSessionFlag(EXIT_SHOWN_FLAG) ||
    hasSessionFlag(WHATSAPP_CLICKED_FLAG);

  const handleTrigger = useCallback(() => {
    if (hasSessionFlag(EXIT_SHOWN_FLAG)) return;
    if (hasSessionFlag(WHATSAPP_CLICKED_FLAG)) return;
    setSessionFlag(EXIT_SHOWN_FLAG);
    setOpen(true);
    trackGAEvent("exit_intent_shown", { path: location.pathname });
  }, [location.pathname]);

  useExitIntent({
    enabled: !isMobile && !blocked,
    minTimeOnPageMs: 10_000,
    onTrigger: handleTrigger,
  });

  const handleConvert = () => {
    trackGAEvent("exit_intent_converted", { path: location.pathname });
    trackWhatsAppConversion();
    const msg = "Olá! Vi a oferta de análise gratuita. Preciso de orientação jurídica.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setOpen(false);
  };

  if (isMobile) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Espera! Sua análise jurídica é gratuita.</DialogTitle>
          <DialogDescription className="text-base">
            Antes de sair — fale 2 minutos com um advogado pelo WhatsApp. Sem custo, sem compromisso.
          </DialogDescription>
        </DialogHeader>

        <div className="my-4 grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground">
          <div className="flex flex-col items-center gap-1">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span>OAB-BA</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Users className="h-5 w-5 text-primary" />
            <span>Atendimento humano</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Clock className="h-5 w-5 text-primary" />
            <span>Resposta em minutos</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            onClick={handleConvert}
            size="lg"
            className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#20BD5A]"
          >
            <MessageCircle className="h-5 w-5" />
            Falar agora no WhatsApp
          </Button>
          <Button onClick={() => setOpen(false)} variant="ghost" size="sm" className="w-full">
            Continuar no site
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentModal;
