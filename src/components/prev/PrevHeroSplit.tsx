import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Award, Star } from "lucide-react";
import PrevWhatsappButton from "./PrevWhatsappButton";
import { lawyers } from "@/data/lawyers";

interface PrevHeroSplitProps {
  breadcrumb: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  quizKey?: string;
  palette?: "default" | "rose";
  whatsappButtonText?: string;
  /** Slug do advogado (id em lawyers.ts). Default: 1º previdenciarista. */
  lawyerId?: string;
  lawyerName?: string;
  lawyerPhoto?: string;
  lawyerOAB?: string;
  experienceLabel?: string;
  clientsCount?: string;
  urgencyText?: string;
  onlineLabel?: string;
  /** Override de classes do <section> wrapper (ex: padding vertical) */
  sectionClassName?: string;
}

const DEFAULTS = {
  experienceLabel: "10+ anos de experiência previdenciária",
  clientsCount: "+2.500 famílias atendidas",
  urgencyText: "Resposta em até 5 min úteis",
  onlineLabel: "Especialista online agora",
  whatsappButtonText: "Conversar agora pelo WhatsApp",
};

function pickLawyer(lawyerId?: string) {
  const previd = lawyers.filter((l) => l.specialty === "previdenciario");
  if (lawyerId) {
    const found = previd.find((l) => l.id === lawyerId);
    if (found) return found;
  }
  return previd[0];
}

export default function PrevHeroSplit({
  breadcrumb,
  heroTitle,
  heroSubtitle,
  quizKey,
  palette = "default",
  whatsappButtonText = DEFAULTS.whatsappButtonText,
  lawyerId,
  lawyerName,
  lawyerPhoto,
  lawyerOAB,
  experienceLabel = DEFAULTS.experienceLabel,
  clientsCount = DEFAULTS.clientsCount,
  urgencyText = DEFAULTS.urgencyText,
  onlineLabel = DEFAULTS.onlineLabel,
  sectionClassName = "pt-8 pb-14 lg:pt-24 lg:pb-28",
}: PrevHeroSplitProps) {
  const lawyer = pickLawyer(lawyerId);
  const name = lawyerName ?? lawyer?.name ?? "Equipe Previdenciária";
  const photo = lawyerPhoto ?? lawyer?.photo;
  const oab = lawyerOAB ?? lawyer?.oab ?? "OAB";

  return (
    <section
      className={`bg-prev-navy text-prev-beige ${sectionClassName} relative overflow-hidden`}
    >
      {/* Video background — INTACTO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      {/* Overlay sutil — PRESERVADO (gradient navy + dim mobile) */}
      <div className="absolute inset-0 bg-gradient-to-r from-prev-navy/85 via-prev-navy/65 to-prev-navy/25 pointer-events-none" />
      <div className="absolute inset-0 bg-prev-navy/20 pointer-events-none lg:hidden" />

      {/* Textura pontos */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F5F1EA 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-prev-gold/12 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-prev-salvia/12 blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ===== LEFT: copy + CTA ===== */}
          <div className="lg:col-span-7">
            {/* Eyebrow + Online pill */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-prev-gold font-semibold flex items-center gap-3">
                <span className="w-8 h-px bg-prev-gold" />
                {breadcrumb}
              </p>
              <span className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 px-3 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                </span>
                <span className="text-[#25D366] text-[10px] font-bold uppercase tracking-wider">
                  {onlineLabel}
                </span>
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-[2rem] sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.025em] mb-5 sm:mb-7"
            >
              {heroTitle}
            </motion.h1>

            <p className="text-base sm:text-lg lg:text-xl text-prev-beige/85 leading-[1.65] max-w-xl mb-7 sm:mb-9">
              {heroSubtitle}
            </p>

            {/* CTA + microcopy + social proof */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-7">
              <div>
                <PrevWhatsappButton
                  quizKey={quizKey || ""}
                  palette={palette}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-7 py-4 rounded-full font-semibold shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                  {whatsappButtonText}
                </PrevWhatsappButton>
                <p className="mt-3 text-prev-beige/55 text-[10px] uppercase tracking-[0.18em] font-semibold">
                  {urgencyText}
                </p>
              </div>

              <div className="flex flex-col gap-1.5 sm:border-l sm:border-prev-beige/15 sm:pl-7">
                <div
                  className="flex gap-0.5 text-prev-gold"
                  aria-hidden
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-prev-gold"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="text-prev-beige font-medium text-sm tracking-tight">
                  {clientsCount}
                </p>
                <p className="text-prev-beige/45 text-[10px] uppercase tracking-[0.18em]">
                  Atendimento em todo o Brasil
                </p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: Authority card ===== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 sm:-inset-4 border border-prev-gold/20 rounded-2xl pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative bg-prev-navy/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-prev-beige/10 shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-prev-gold p-1.5 mb-5 sm:mb-6">
                    {photo ? (
                      <img
                        src={photo}
                        alt={`Foto de ${name}`}
                        loading="lazy"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-prev-beige/10 flex items-center justify-center font-serif text-prev-gold text-2xl">
                        {name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-prev-beige mb-1 leading-tight">
                    {name}
                  </h3>
                  <p className="text-prev-gold text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 sm:mb-7">
                    Especialista em INSS
                  </p>

                  <div className="w-full space-y-3 sm:space-y-4 text-left">
                    <div className="flex items-center gap-3 sm:gap-4 text-prev-beige/75 text-[13px] sm:text-sm">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-prev-beige/5 flex items-center justify-center flex-shrink-0">
                        <Award
                          className="w-4 h-4 sm:w-5 sm:h-5 text-prev-gold"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="font-medium">Inscrito na {oab}</span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 text-prev-beige/75 text-[13px] sm:text-sm">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-prev-beige/5 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck
                          className="w-4 h-4 sm:w-5 sm:h-5 text-prev-gold"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="font-medium">{experienceLabel}</span>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-prev-beige/10 w-full">
                    <p className="text-prev-beige/45 text-[10px] uppercase tracking-[0.18em]">
                      Sigilo profissional total
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
