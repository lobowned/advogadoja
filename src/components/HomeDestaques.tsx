import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HOME_DESTAQUES } from "@/data/home-content";

/**
 * Artigos em destaque na página inicial. Link da página mais forte do site ajuda o Google
 * a achar e indexar os artigos novos. A lista fica em src/data/home-content.ts e também
 * vai no HTML pronto da home (vite-plugin-static-seo).
 */
const HomeDestaques = () => (
  <section className="py-16 sm:py-20 bg-muted/20 border-b border-accent/30" aria-labelledby="home-destaques">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.25em] uppercase text-[#8a6a1f]">
            Conteúdo jurídico
          </span>
          <span className="h-px w-8 bg-accent" />
        </div>
        <h2 id="home-destaques" className="font-display text-3xl md:text-5xl text-foreground mb-4 leading-tight">
          Artigos em <em className="not-italic text-primary">destaque</em>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
          Direitos, prazos e documentos explicados em linguagem simples, com a lei conferida no texto em vigor.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-accent/30 border border-accent/30 max-w-5xl mx-auto">
        {HOME_DESTAQUES.map((item) => (
          <li key={item.href} className="bg-card">
            <Link
              to={item.href}
              className="group flex h-full items-start justify-between gap-4 p-6 transition-colors duration-300 hover:bg-muted/50"
            >
              <span>
                <span className="block text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-[#8a6a1f] mb-2">{item.area}</span>
                <span className="block font-sans text-base text-foreground leading-snug">{item.label}</span>
              </span>
              <ArrowRight className="w-4 h-4 mt-6 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="text-center pt-8">
        <Link
          to="/artigos"
          className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
        >
          Ver todos os artigos
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default HomeDestaques;
