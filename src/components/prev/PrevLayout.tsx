import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LAWYER, whatsappLink, WHATSAPP_MESSAGES } from "@/lib/prev-config";

/**
 * Layout exclusivo da área /prev — header e footer próprios,
 * independente da plataforma Advogado Já original.
 *
 * Paleta: navy #0B1B2B + dourado #C9A961 + bege #F5F1EA + sálvia #7A9583
 * Tipografia: Fraunces (títulos) + Inter (corpo)
 */

interface PrevLayoutProps {
  children: ReactNode;
  /** Mensagem inicial do WhatsApp do CTA fixo no header — varia por página */
  ctaMessage?: string;
}

const NAV_ITEMS = [
  { label: "Início", to: "/prev" },
  { label: "Aposentadorias", to: "/prev/aposentadorias" },
  { label: "Auxílio-Doença", to: "/prev/auxilio-doenca" },
  { label: "BPC/LOAS", to: "/prev/bpc-loas" },
  { label: "Sobre", to: "/prev/sobre" },
  { label: "Contato", to: "/prev/contato" },
];

export default function PrevLayout({
  children,
  ctaMessage = WHATSAPP_MESSAGES.home,
}: PrevLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="prev-scope min-h-screen bg-prev-beige text-prev-navy antialiased">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-prev-beige/80 border-b border-prev-navy/10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link
            to="/prev"
            className="flex items-center gap-2 group"
            aria-label="Voltar para a página inicial"
          >
            {/* Logo discreto: monograma + nome em serifa */}
            <div className="w-10 h-10 rounded-full bg-prev-navy flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="font-serif text-prev-gold text-lg leading-none">
                {LAWYER.shortName.charAt(0) === "{" ? "P" : LAWYER.shortName.charAt(0)}
              </span>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg text-prev-navy">
                Previdenciário
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-prev-navy/60">
                Especialista em INSS
              </div>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-sm transition-colors ${
                    active
                      ? "text-prev-navy font-medium"
                      : "text-prev-navy/70 hover:text-prev-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={whatsappLink(ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-prev-navy text-prev-beige px-5 py-2.5 rounded-full hover:bg-prev-navy/90 transition-colors"
            >
              Falar agora
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 -mr-2 text-prev-navy"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-prev-navy/10 bg-prev-beige">
            <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={`py-2.5 text-base ${
                      active
                        ? "text-prev-navy font-medium"
                        : "text-prev-navy/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={whatsappLink(ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-center text-sm font-medium bg-prev-navy text-prev-beige px-5 py-3 rounded-full"
              >
                Falar agora pelo WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ===== Main ===== */}
      <main>{children}</main>

      {/* ===== Footer ===== */}
      <footer className="bg-prev-navy text-prev-beige mt-24">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Coluna 1: Identidade */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-prev-gold flex items-center justify-center">
                  <span className="font-serif text-prev-navy text-lg leading-none">
                    {LAWYER.shortName.charAt(0) === "{" ? "P" : LAWYER.shortName.charAt(0)}
                  </span>
                </div>
                <div className="leading-tight">
                  <div className="font-serif text-lg">Previdenciário</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-prev-beige/60">
                    Especialista em INSS
                  </div>
                </div>
              </div>
              <p className="text-sm text-prev-beige/75 leading-relaxed">
                Assessoria jurídica especializada em direito previdenciário.
                Análise técnica do seu CNIS e estratégia personalizada para
                cada caso.
              </p>
            </div>

            {/* Coluna 2: Áreas */}
            <div>
              <h4 className="font-serif text-base mb-4 text-prev-gold">
                Áreas de atuação
              </h4>
              <ul className="space-y-2 text-sm text-prev-beige/75">
                <li>
                  <Link to="/prev/aposentadorias" className="hover:text-prev-beige transition-colors">
                    Aposentadorias
                  </Link>
                </li>
                <li>
                  <Link to="/prev/auxilio-doenca" className="hover:text-prev-beige transition-colors">
                    Auxílio-Doença
                  </Link>
                </li>
                <li>
                  <Link to="/prev/aposentadoria-por-invalidez" className="hover:text-prev-beige transition-colors">
                    Aposentadoria por Invalidez
                  </Link>
                </li>
                <li>
                  <Link to="/prev/bpc-loas" className="hover:text-prev-beige transition-colors">
                    BPC / LOAS
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Contato + OAB */}
            <div>
              <h4 className="font-serif text-base mb-4 text-prev-gold">
                Contato
              </h4>
              <ul className="space-y-2 text-sm text-prev-beige/75">
                <li>
                  <a
                    href={whatsappLink(WHATSAPP_MESSAGES.contato)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-prev-beige transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${LAWYER.email}`}
                    className="hover:text-prev-beige transition-colors"
                  >
                    {LAWYER.email}
                  </a>
                </li>
                <li className="text-prev-beige/60 pt-2 text-xs">
                  {LAWYER.businessHours}
                </li>
                {LAWYER.addressLine && !LAWYER.addressLine.includes("{") && (
                  <li className="text-prev-beige/60 pt-2 text-xs">
                    {LAWYER.addressLine}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Linha OAB / Aviso legal */}
          <div className="pt-8 border-t border-prev-beige/15 text-xs text-prev-beige/55 space-y-2">
            <p>
              {LAWYER.fullName.includes("{")
                ? "Advogado(a) responsável: nome a ser preenchido"
                : LAWYER.fullName}{" "}
              —{" "}
              {LAWYER.oabNumber.includes("{")
                ? "OAB a ser preenchida"
                : `OAB/${LAWYER.oabState} ${LAWYER.oabNumber}`}
            </p>
            <p>
              Este site tem caráter exclusivamente informativo. As informações
              aqui apresentadas não substituem a análise individualizada do seu
              caso. Em conformidade com o Provimento nº 205/2021 do CFOAB.
            </p>
            <p className="pt-2">
              © {new Date().getFullYear()} — Todos os direitos reservados.{" "}
              <Link to="/privacidade" className="underline hover:text-prev-beige">
                Política de Privacidade
              </Link>{" "}
              ·{" "}
              <Link to="/termos-de-uso" className="underline hover:text-prev-beige">
                Termos de Uso
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* ===== WhatsApp flutuante exclusivo /prev ===== */}
      <a
        href={whatsappLink(ctaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-prev-gold/40 animate-ping" />
          <div className="relative w-14 h-14 rounded-full bg-prev-gold flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            {/* Ícone WhatsApp inline (SVG) */}
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 fill-prev-navy"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}
