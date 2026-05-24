import { useState, ReactNode } from "react";
import PrevQuizModal from "./PrevQuizModal";

interface PrevWhatsappButtonProps {
  /** Slug do quiz (home, aposentadorias, auxilio-doenca, etc.) */
  quizKey: string;
  /** Variante de paleta */
  palette?: "default" | "rose";
  /** Classes Tailwind aplicadas ao botão */
  className?: string;
  /** Conteúdo do botão (geralmente: ícone + texto) */
  children: ReactNode;
  /** ID/href opcional (a11y) */
  ariaLabel?: string;
}

/**
 * Botão que abre o quiz de qualificação e, ao fim, encaminha pro WhatsApp.
 * Substitui os antigos <a href={whatsappLink(...)}>.
 */
export default function PrevWhatsappButton({
  quizKey,
  palette = "default",
  className,
  children,
  ariaLabel,
}: PrevWhatsappButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-label={ariaLabel || "Falar pelo WhatsApp"}
      >
        {children}
      </button>
      <PrevQuizModal
        quizKey={quizKey}
        open={open}
        onClose={() => setOpen(false)}
        palette={palette}
      />
    </>
  );
}
