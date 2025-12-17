import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useExitIntent } from "@/hooks/useExitIntent";
import { MessageCircle } from "lucide-react";

const ExitIntentPopup = () => {
  const { showPopup, setShowPopup, closePopup } = useExitIntent({ delay: 15000 });

  const whatsappNumber = "5571997036269";
  const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de falar com um advogado.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent className="sm:max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="text-center px-1 sm:px-2">
          {/* WhatsApp Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#25D366]" />
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Espere! Fale agora com um advogado
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
            Tire suas dúvidas gratuitamente pelo WhatsApp. 
            Atendimento rápido e sem compromisso.
          </p>

          {/* WhatsApp CTA Button */}
          <Button
            asChild
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white min-h-[52px] text-base sm:text-lg font-semibold"
            onClick={closePopup}
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Conversar pelo WhatsApp
            </a>
          </Button>

          {/* Skip link */}
          <button
            onClick={closePopup}
            className="text-sm text-muted-foreground mt-4 hover:underline py-3 px-6 min-h-[48px] touch-manipulation"
          >
            Agora não, obrigado
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
