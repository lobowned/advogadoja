import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

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

        <div className="divide-y divide-prev-navy/10 border-y border-prev-navy/10">
          {items.map((item, idx) => {
            const open = openIdx === idx;
            return (
              <div key={idx} className={open ? "bg-prev-beige/30" : ""}>
                <button
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="w-full text-left flex items-center justify-between gap-6 px-2 py-6 group"
                >
                  <span className="font-serif text-prev-navy text-lg sm:text-[1.35rem] leading-snug group-hover:text-prev-gold transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full border border-prev-gold/40 text-prev-gold flex items-center justify-center transition-transform duration-300 ${
                      open ? "rotate-45 bg-prev-gold/10" : ""
                    }`}
                  >
                    <Plus className="w-4 h-4" strokeWidth={1.8} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 pb-6 pr-12 text-prev-navy/72 leading-[1.75] text-[15.5px] max-w-[58ch]">
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
