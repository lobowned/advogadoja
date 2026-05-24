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
        className="group relative block bg-white rounded-2xl overflow-hidden border border-prev-navy/8 hover:border-prev-gold/40 hover:shadow-xl hover:shadow-prev-navy/10 transition-all duration-300 h-full"
      >
        {/* Topo: foto ou ilustração */}
        <div className="aspect-[5/3] overflow-hidden bg-prev-beige relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : illustration ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              {illustration}
            </div>
          ) : null}

          {/* Overlay sutil pro hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <h3 className="font-serif text-xl text-prev-navy mb-1 leading-tight group-hover:text-prev-gold transition-colors">
            {title}
          </h3>
          <p className="text-xs uppercase tracking-wider text-prev-navy/50 mb-3">
            {short}
          </p>
          <p className="t