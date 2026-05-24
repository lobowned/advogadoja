import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

import { LAWYER, whatsappLink } from "@/lib/prev-config";
import {
  QUIZZES,
  buildWhatsappMessage,
  type QuizConfig,
} from "@/lib/prev-quizzes";

interface PrevQuizModalProps {
  /** Chave do quiz (home, aposentadorias, auxilio-doenca, etc.) */
  quizKey: string;
  /** Modal aberto? */
  open: boolean;
  onClose: () => void;
  /** Variante de paleta: padrão usa navy/gold, "rose" usa rosa da maternidade */
  palette?: "default" | "rose";
}

const PALETTES = {
  default: {
    accent: "#C9A961", // prev-gold
    accentBg: "rgba(201,169,97,0.15)",
    accentBorder: "rgba(201,169,97,0.3)",
    text: "#0B1B2B", // prev-navy
    textMuted: "rgba(11,27,43,0.65)",
    bg: "#FFFFFF",
    cardBg: "#F5F1EA", // prev-beige
    optionBg: "#F5F1EA",
    optionHoverBg: "rgba(201,169,97,0.18)",
  },
  rose: {
    accent: "#C56B7A", // prev-mat-rose deep
    accentBg: "rgba(232,163,176,0.25)",
    accentBorder: "rgba(232,163,176,0.45)",
    text: "#5C2D3A", // prev-mat-deep
    textMuted: "rgba(92,45,58,0.65)",
    bg: "#FFFFFF",
    cardBg: "#FDF2F4", // prev-mat-blush
    optionBg: "#FDF2F4",
    optionHoverBg: "rgba(232,163,176,0.3)",
  },
};

export default function PrevQuizModal({
  quizKey,
  open,
  onClose,
  palette = "default",
}: PrevQuizModalProps) {
  const quiz: QuizConfig | undefined = QUIZZES[quizKey];
  const [step, setStep] = useState(0); // 0 = intro, 1-3 = perguntas, 4 = resultado
  const [answers, setAnswers] = useState<[string?, string?, string?]>([
    undefined,
    undefined,
    undefined,
  ]);
  const p = PALETTES[palette];

  // Reset ao abrir
  useEffect(() => {
    if (open) {
      setStep(0);
      setAnswers([undefined, undefined, undefined]);
    }
  }, [open]);

  // ESC fecha modal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Trava scroll body
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!quiz) return null;

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers] as typeof answers;
    newAnswers[step - 1] = value;
    setAnswers(newAnswers);
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // resultado
    }
  };

  const handleSendWhatsapp = () => {
    const finalAnswers: [string, string, string] = [
      answers[0] || "—",
      answers[1] || "—",
      answers[2] || "—",
    ];
    const msg = buildWhatsappMessage(quizKey, finalAnswers);
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    onClose();
  };

  const progress = step === 0 ? 0 : step === 4 ? 100 : ((step - 1) / 3) * 100;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: p.bg }}
          >
            {/* Cabeçalho com barra de progresso */}
            <div className="relative px-6 pt-5 pb-3" style={{ backgroundColor: p.cardBg }}>
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-black/5 transition-colors"
                aria-label="Fechar"
                style={{ color: p.textMuted }}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-[11px] uppercase tracking-[0.15em] font-semibold"
                  style={{ color: p.accent }}
                >
                  {step === 0
                    ? "Pré-conversa"
                    : step === 4
                    ? "Pronto!"
                    : `Pergunta ${step} de 3`}
                </span>
                {step > 0 && step < 4 && (
                  <span className="text-xs" style={{ color: p.textMuted }}>
                    {Math.round(progress)}%
                  </span>
                )}
              </div>

              {/* Barra de progresso */}
              <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(0,0,0,0.08)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: p.accent }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2
                      className="font-serif text-2xl leading-tight mb-3"
                      style={{ color: p.text }}
                    >
                      {quiz.introTitle}
                    </h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: p.textMuted }}>
                      {quiz.introText}
                    </p>
                    <button
                      onClick={() => setStep(1)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1FB855] text-white px-6 py-3.5 rounded-full font-semibold text-base shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
                    >
                      Começar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleSendWhatsapp}
                      className="w-full mt-3 text-xs underline transition-colors"
                      style={{ color: p.textMuted }}
                    >
                      Pular e ir direto pro WhatsApp
                    </button>
                  </motion.div>
                )}

                {step >= 1 && step <= 3 && (
                  <motion.div
                    key={`q-${step}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3
                      className="font-serif text-xl leading-tight mb-5"
                      style={{ color: p.text }}
                    >
                      {quiz.questions[step - 1].question}
                    </h3>
                    <div className="space-y-2.5">
                      {quiz.questions[step - 1].options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer(opt.value)}
                          className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all hover:translate-x-1 border"
                          style={{
                            backgroundColor: p.optionBg,
                            color: p.text,
                            borderColor: "transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = p.optionHoverBg;
                            e.currentTarget.style.borderColor = p.accentBorder;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = p.optionBg;
                            e.currentTarget.style.borderColor = "transparent";
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    {step > 1 && (
                      <button
                        onClick={() => setStep(step - 1)}
                        className="mt-4 text-xs underline"
                        style={{ color: p.textMuted }}
                      >
                        ← Voltar à pergunta anterior
                      </button>
                    )}
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: p.accentBg }}
                    >
                      <CheckCircle2 className="w-7 h-7" style={{ color: p.accent }} strokeWidth={1.8} />
                    </div>
                    <h3
                      className="font-serif text-xl leading-tight mb-2 text-center"
                      style={{ color: p.text }}
                    >
                      Obrigado!
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-6 text-center"
                      style={{ color: p.textMuted }}
                    >
                      Suas respostas vão direto pro WhatsApp do advogado. Ele responde em até 2h úteis.
                    </p>

                    {/* Recap das respostas */}
                    <div
                      className="rounded-xl p-4 mb-5 space-y-2"
                      style={{ backgroundColor: p.cardBg }}
                    >
                      {answers.map((a, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <span
                            className="font-semibold mt-0.5"
                            style={{ color: p.accent }}
                          >
                            {i + 1}.
                          </span>
                          <span style={{ color: p.text }}>{a}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleSendWhatsapp}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-6 py-4 rounded-full font-semibold text-base shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                      Abrir WhatsApp
                    </button>
                    <p
                      className="text-[11px] text-center mt-3"
                      style={{ color: p.textMuted }}
                    >
                      Sigilo profissional — LGPD respeitada — OAB/{LAWYER.oabState}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
