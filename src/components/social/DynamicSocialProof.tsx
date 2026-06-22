import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X, Users } from "lucide-react";
import { buildMessages } from "@/data/social-proof-messages";
import { brazilianCities } from "@/data/cities";
import { useIsMobile } from "@/hooks/use-mobile";
import { trackWhatsAppConversion } from "@/lib/trackWhatsApp";

const WHATSAPP_NUMBER = "5571997036269";
const DISMISS_KEY = "social_proof_dismissed";
const HIDE_PREFIXES = ["/admin", "/concluido", "/questionario", "/prev", "/conversao"];

const detectCityFromPath = (pathname: string): string => {
  const match = pathname.match(/-([a-z0-9-]+)$/);
  if (!match) return "";
  const slug = match[1];
  const city = brazilianCities.find((c) => c.slug === slug);
  return city?.name ?? "";
};

export const DynamicSocialProof = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const city = useMemo(() => detectCityFromPath(location.pathname), [location.pathname]);
  const messages = useMemo(() => buildMessages(city), [city]);

  const blocked = HIDE_PREFIXES.some((p) => location.pathname.startsWith(p));

  // dismiss flag from sessionStorage
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(DISMISS_KEY) === "1") setDismissed(true);
    } catch {
      // ignore
    }
  }, []);

  // appear after 8s
  useEffect(() => {
    if (blocked || isMobile || dismissed) return;
    const t = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(t);
  }, [blocked, isMobile, dismissed, location.pathname]);

  // rotate every 12s
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setFadeIn(true);
      }, 350);
    }, 12000);
    return () => clearInterval(interval);
  }, [visible, messages.length]);

  if (blocked || isMobile || dismissed || !visible) return null;

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
    setDismissed(true);
  };

  const handleClick = () => {
    const msg = city
      ? `Olá! Vi que tem atendimento ativo em ${city}. Preciso de orientação jurídica.`
      : "Olá! Preciso de orientação jurídica.";
    trackWhatsAppConversion();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => (e.key === "Enter" ? handleClick() : null)}
      className={`fixed bottom-5 left-5 z-40 max-w-[320px] cursor-pointer rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl ${
        fadeIn ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
      aria-label="Atividade recente — clique para falar no WhatsApp"
    >
      <div className="flex items-start gap-3 p-3 pr-8">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15">
          <Users className="h-4 w-4 text-[#1ea952]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-snug text-foreground">{messages[index]}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <MessageCircle className="h-3 w-3" /> Falar agora no WhatsApp
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-1.5 top-1.5 rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
        aria-label="Fechar"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default DynamicSocialProof;
