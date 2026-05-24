import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface PrevFaqProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}

export default function PrevFaq({
  title = "Perguntas frequentes",
  subtitle = "Tire suas dúvidas mais comuns antes de conversarmos.",
  items,
}: PrevFaqProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
            Dúvidas comuns
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-3">
            {title}
          </h2>
          <p className="text-prev-navy/65">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const open = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors ${
                  open
                    ? "border-prev-gold/40 bg-prev-beige/40"
                    : "border-prev-navy/10 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="w-full text-left flex items-center justify-between gap-4 px-6 py-5"
                >
                  <span className="font-medium text-prev-navy text-base sm:text-lg leading-snug">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-prev-navy/5 flex items-center justify-center">
                    {open ? (
                      <Minus className="w-4 h-4 text-prev-navy" />
                    ) : (
                      <Plus className="w-4 h-4 text-prev-navy" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-prev-navy/70 leading-relaxed text-[15px]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
