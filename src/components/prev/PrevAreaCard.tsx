import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PrevAreaCardProps {
  slug: string;
  title: string;
  short: string;
  description: string;
  /** URL de foto (Unsplash ou própria) — se omitido, usa apenas ilustração */
  imageUrl?: string;
  imageAlt?: string;
  /** Ilustração SVG (componente React) - cobre o card quando não tem foto */
  illustration?: React.ReactNode;
  index?: number;
}

export default function PrevAreaCard({
  slug,
  title,
  short,
  description,
  imageUrl,
  imageAlt = "",
  illustration,
  index = 0,
}: PrevAreaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/prev/${slug}`}
        className="group relative block bg-white rounded-lg overflow-hidden border border-prev-navy/8 hover:border-prev-gold/50 hover:shadow-[0_18px_40px_-20px_rgba(11,27,43,0.25)] transition-all duration-500 h-full"
      >
        {/* Topo: foto editorial 4:5 */}
        <div className="aspect-[4/5] overflow-hidden bg-prev-beige relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-full object-cover scale-100 group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
          ) : illustration ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              {illustration}
            </div>
          ) : null}

          {/* Overlay navy gradient editorial */}
          <div className="absolute inset-0 bg-gradient-to-t from-prev-navy/70 via-prev-navy/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Eyebrow sobre a imagem */}
          <span className="absolute top-4 left-4 inline-flex items-center text-[10px] uppercase tracking-[0.22em] text-prev-gold font-semibold">
            <span className="w-6 h-px bg-prev-gold mr-2.5" />
            {short}
          </span>
        </div>

        {/* Conteúdo */}
        <div className="p-6 pt-5">
          <h3 className="font-serif text-[1.4rem] text-prev-navy mb-3 leading-[1.05] group-hover:text-prev-gold transition-colors">
            {title}
          </h3>
          <p className="text-[14.5px] text-prev-navy/70 leading-relaxed mb-5">
            {description}
          </p>

          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-prev-navy/70 group-hover:text-prev-gold transition-colors">
            <span className="w-5 h-px bg-current transition-all duration-500 group-hover:w-9" />
            Saber mais
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
