import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  HeartPulse,
  ShieldAlert,
  HandHeart,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

// Map de ícone string -> componente. Usar string no config evita import circular.
const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  HeartPulse,
  ShieldAlert,
  HandHeart,
};

interface PrevAreaCardProps {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  index?: number;
}

export default function PrevAreaCard({
  slug,
  title,
  short,
  description,
  icon,
  index = 0,
}: PrevAreaCardProps) {
  const Icon = ICON_MAP[icon] || Clock;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/prev/${slug}`}
        className="group relative block bg-white rounded-2xl p-7 border border-prev-navy/8 hover:border-prev-gold/40 hover:shadow-xl hover:shadow-prev-navy/5 transition-all duration-300 h-full"
      >
        {/* Ícone */}
        <div className="w-12 h-12 rounded-xl bg-prev-beige flex items-center justify-center mb-5 group-hover:bg-prev-gold/15 transition-colors">
          <Icon
            className="w-6 h-6 text-prev-navy group-hover:text-prev-gold transition-colors"
            strokeWidth={1.5}
          />
        </div>

        {/* Título + subtítulo */}
        <h3 className="font-serif text-xl text-prev-navy mb-1 leading-tight">
          {title}
        </h3>
        <p className="text-xs uppercase tracking-wider text-prev-navy/50 mb-4">
          {short}
        </p>

        {/* Descrição */}
        <p className="text-sm text-prev-navy/70 leading-relaxed mb-5">
          {description}
        </p>

        {/* CTA */}
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-prev-navy group-hover:text-prev-gold transition-colors">
          Saber mais
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </Link>
    </motion.div>
  );
}
