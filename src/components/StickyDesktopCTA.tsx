import { useState, useEffect } from "react";
import { MessageCircle, X, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";
import { useTodayAttendances } from "@/hooks/useTodayAttendances";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyDesktopCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { onlineCount } = useLawyerPresence();
  const { todayCount } = useTodayAttendances();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if already dismissed this session
    const dismissed = sessionStorage.getItem("sticky-cta-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem("sticky-cta-dismissed", "true");
  };

  const handleClick = () => {
    // Scroll to chat section
    const chatSection = document.getElementById("chat-section");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Don't show on mobile or if dismissed
  if (isMobile || isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg animate-slide-down">
      <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Live indicators */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <Users className="w-4 h-4" />
              <span className="font-medium">{onlineCount} advogados online</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1.5 opacity-90">
              <Clock className="w-4 h-4" />
              <span>{todayCount} atendimentos hoje</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={handleClick}
            size="sm"
            variant="secondary"
            className="font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Falar com Advogado Agora
          </Button>

          <button
            onClick={handleDismiss}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyDesktopCTA;
