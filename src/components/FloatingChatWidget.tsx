import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Bot, X } from "lucide-react";
import LawyerChatSection from "./LawyerChatSection";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type Area = "familia" | "trabalhista" | "civil" | "previdenciario" | "penal" | "geral";

export const INLINE_CHAT_ROUTES: RegExp[] = [
  /^\/$/,
  /^\/criminal$/,
  /^\/advogado-trabalhista-online$/,
  /^\/prev(\/|$)/,
];

const EXCLUDED_ROUTES: RegExp[] = [
  /^\/admin/,
  /^\/concluido/,
  /^\/questionario/,
  /^\/conversao/,
  /^\/sitemap/,
  /^\/privacidade/,
  /^\/termos-de-uso/,
  /^\/riccioadvocacia/,
];

function detectArea(pathname: string): { area: Area; defaultLawyerId?: string } {
  const p = pathname.toLowerCase();

  if (/criminal|penal/.test(p)) return { area: "penal" };
  if (/trabalhista|horas-extras|seguro-desemprego|fgts|insalubridade|rescisao/.test(p)) {
    return { area: "trabalhista" };
  }
  if (
    /^\/prev/.test(p) ||
    /previdenc|aposent|auxilio-doenca|bpc|salario-maternidade|pensao-morte|invalidez/.test(p)
  ) {
    return { area: "previdenciario" };
  }
  if (/familia|divorcio|partilha-bens|guarda|alimentos|inventario|pensao-alimenticia/.test(p)) {
    return { area: "familia" };
  }
  if (
    /consumidor|voo-cancelado|voo|negativa|plano-saude|fraude-bancaria|cobranca|produto-defeituoso|liminar|cartao-consignado|dpvat|danos-morais|devolucao|atualizacao-divida|aluguel/.test(p)
  ) {
    return { area: "civil" };
  }
  return { area: "geral" };
}

export const FloatingChatWidget = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hidden =
    INLINE_CHAT_ROUTES.some((r) => r.test(location.pathname)) ||
    EXCLUDED_ROUTES.some((r) => r.test(location.pathname));

  useEffect(() => {
    setHasNewMessage(true);
    setOpen(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, [location.pathname]);

  if (hidden) return null;

  const { area, defaultLawyerId } = detectArea(location.pathname);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setHasNewMessage(false);
        }}
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-center gap-2 bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white pl-3 pr-4 py-3 rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95"
        aria-label="Abrir chat com assistente virtual da Riccio Advocacia"
      >
        <span className="relative flex items-center justify-center h-8 w-8 rounded-full bg-white/15">
          <Bot className="w-5 h-5" />
          {hasNewMessage && (
            <span
              className="absolute top-0 right-0 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 ring-2 ring-whatsapp-send-btn animate-pulse"
              aria-hidden="true"
            />
          )}
        </span>
        <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
          Falar com advogado
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-3xl p-0 border-0 bg-transparent shadow-none sm:rounded-none [&>button]:top-3 [&>button]:right-3 [&>button]:bg-white/90 [&>button]:rounded-full [&>button]:p-1 [&>button]:z-10"
        >
          <DialogTitle className="sr-only">
            Chat com Assistente Virtual da Riccio Advocacia
          </DialogTitle>
          <div className="max-h-[92vh] overflow-y-auto rounded-xl bg-background">
            <LawyerChatSection area={area} defaultLawyerId={defaultLawyerId} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingChatWidget;
