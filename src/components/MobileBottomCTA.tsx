import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users } from "lucide-react";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";

interface MobileBottomCTAProps {
  onCtaClick: () => void;
  chatVisible?: boolean;
}

const MobileBottomCTA = ({ onCtaClick, chatVisible = false }: MobileBottomCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { onlineCount } = useLawyerPresence();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px from top
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow && !chatVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [chatVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-bottom animate-fade-in">
      {/* Gradient fade for smooth transition */}
      <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="bg-background/95 backdrop-blur-md border-t border-border/50 px-4 py-3 shadow-lg">
        <div className="flex items-center gap-3">
          {/* Online indicator */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
            <div className="w-2 h-2 bg-whatsapp-send-btn rounded-full animate-pulse" />
            <Users className="w-3.5 h-3.5" />
            <span>{onlineCount}</span>
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={onCtaClick}
            className="flex-1 bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white font-semibold min-h-[52px] text-base shadow-lg active:scale-[0.98] transition-transform"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Falar com Advogado
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileBottomCTA;
