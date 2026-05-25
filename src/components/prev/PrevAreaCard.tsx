import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PrevAreaCardProps {
  slug: string;
  title: string;
  short: string;
  description: string;
  index?: number;
}

export default function PrevAreaCard({
  slug,
  title,
  short,
  description,
  index = 1,
}: PrevAreaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Link
        to={`/prev/${slug}`}
        className="group block h-full bg-prev-paper border border-prev-rule p-7 sm:p-8 transition-colors duration-500 hover:border-prev-accent/40"
      >
        {/* Eyebrow: número + label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[10px] uppercase tracking-[0.22em] text-prev-accent font-semibold">
            {short}
          </span>
          <span className="w-4 h-px bg-prev-accent/30" />
          <span className="font-serif text-prev-accent/60 text-sm tnum">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        {/* Título */}
        <h3 className="font-serif text-2xl sm:text-[1.65rem] text-prev-ink leading-[1.1] mb-4">
          {title}
        </h3>

        {/* Hairline */}
        <div className="w-8 h-px bg-prev-accent/40 mb-5" />

        {/* Descrição */}
        <p className="text-[14.5px] text-prev-ink/65 leading-relaxed mb-8 line-clamp-2">
          {description}
        </p>

        {/* Link rodapé */}
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-prev-ink/50 group-hover:text-prev-accent transition-colors duration-500">
          <span className="w-5 h-px bg-current transition-all duration-500 group-hover:w-9" />
          Saber mais
          <ArrowUpRight
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            strokeWidth={2}
          />
        </span>
      </Link>
    </motion.div>
  );
}
