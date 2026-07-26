import { useEffect, useRef, useState, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import {
  Baby,
  Briefcase,
  ChevronDown,
  Clock,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ScrollText,
  Scale,
  ShieldCheck,
  Stethoscope,
  UserCheck,
} from "lucide-react";

import { trackWhatsAppConversion } from "@/lib/trackWhatsApp";

/**
 * Landing NOVA e independente da Riccio Advocacia — rota /riccioadvocacia.
 * Identidade PRÓPRIA (preto & ouro / autoridade), MOBILE-FIRST, desacoplada dos tokens
 * globais do site (que usam marfim/esmeralda). Foco: Previdenciário + Trabalhista.
 * Copy sóbria (OAB/Prov. 205/2021): sem promessa de resultado nem honorário como isca.
 */

const WHATSAPP = "5571997036269";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const MSG_PADRAO =
  "Olá! Vim pelo site da Riccio Advocacia e gostaria de falar sobre o meu caso.";

/** Revela o bloco ao entrar na tela (fade + sobe). Degrada mostrando tudo se não houver IO. */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVis(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        vis ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/** Botão-âncora de WhatsApp que dispara a conversão do Google Ads no clique. */
function ZapButton({
  children,
  msg = MSG_PADRAO,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  msg?: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7c766]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0d]";
  const look =
    variant === "solid"
      ? "bg-gradient-to-b from-[#e7c766] to-[#c9a227] text-[#171205] shadow-[0_10px_30px_-8px_rgba(201,162,39,0.55)] hover:from-[#f0d685] hover:to-[#d4ae2f]"
      : "border border-[#c9a227]/45 text-[#e7c766] hover:bg-[#c9a227]/10";
  return (
    <a
      href={waLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppConversion}
      className={`${base} ${look} ${className}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2.25} />
      {children}
    </a>
  );
}

/** Rótulo dourado em caixa-alta com filetes — "eyebrow" editorial. */
function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
      <span className="h-px w-6 bg-[#c9a227]/60" />
      {children}
    </span>
  );
}

const AREAS = [
  {
    icon: Scale,
    titulo: "Direito Previdenciário",
    desc: "Do INSS ao Judiciário, cuidando do seu benefício com atenção a cada detalhe.",
    itens: [
      { icon: UserCheck, t: "Aposentadorias (idade, tempo, especial)" },
      { icon: HeartHandshake, t: "BPC/LOAS — idoso e deficiência" },
      { icon: Stethoscope, t: "Auxílio-doença e invalidez" },
      { icon: Baby, t: "Salário-maternidade" },
      { icon: ScrollText, t: "Revisão e pensão por morte" },
    ],
    msg: "Olá! Vim pelo site da Riccio e preciso de ajuda com um caso PREVIDENCIÁRIO (INSS).",
  },
  {
    icon: Briefcase,
    titulo: "Direito Trabalhista",
    desc: "Seus direitos na relação de trabalho, do acerto à reparação — com clareza.",
    itens: [
      { icon: ScrollText, t: "Verbas rescisórias e acertos" },
      { icon: Clock, t: "Horas extras e adicionais" },
      { icon: ShieldCheck, t: "Insalubridade e periculosidade" },
      { icon: UserCheck, t: "Reconhecimento de vínculo" },
      { icon: HeartHandshake, t: "Assédio e danos morais" },
    ],
    msg: "Olá! Vim pelo site da Riccio e preciso de ajuda com um caso TRABALHISTA.",
  },
];

const PILARES = [
  {
    icon: UserCheck,
    t: "Atendimento direto com advogado",
    d: "Você conversa com quem cuida do seu caso — não com um atendente de call center.",
  },
  {
    icon: MessageCircle,
    t: "Resposta rápida pelo WhatsApp",
    d: "Sem fila e sem burocracia pra começar. É só mandar mensagem.",
  },
  {
    icon: MapPin,
    t: "De Salvador para todo o Brasil",
    d: "Atendimento online: onde você estiver, a gente cuida do seu processo.",
  },
  {
    icon: ShieldCheck,
    t: "Transparência do começo ao fim",
    d: "Você entende cada passo e acompanha o andamento com tranquilidade.",
  },
];

const FAQ = [
  {
    q: "Como funciona o atendimento?",
    a: "O primeiro contato é pelo WhatsApp, direto com advogado. Você conta o seu caso, a gente analisa e te explica os caminhos — sem compromisso.",
  },
  {
    q: "Preciso ir até o escritório?",
    a: "Não é obrigatório. Atendemos de Salvador para todo o Brasil de forma online. Se você preferir presencial, também dá pra combinar.",
  },
  {
    q: "Vou saber como está o meu processo?",
    a: "Sim. Mantemos você informado em cada etapa, de forma clara, pelo WhatsApp.",
  },
  {
    q: "Quais documentos eu preciso separar?",
    a: "Depende do caso. Logo no primeiro contato a gente te diz exatamente o que reunir, sem exigir papelada desnecessária.",
  },
];

export default function RiccioAdvocacia() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0b0d] font-sans text-[#ece6d8] antialiased selection:bg-[#c9a227]/30">
      <Helmet>
        <title>
          Riccio Advocacia — Previdenciário e Trabalhista | Fale no WhatsApp
        </title>
        <meta
          name="description"
          content="Riccio Advocacia — advocacia previdenciária e trabalhista. Atendimento humano e direto com advogado pelo WhatsApp, de Salvador/BA para todo o Brasil. OAB/BA 46.638."
        />
        <meta name="theme-color" content="#0b0b0d" />
        <link
          rel="canonical"
          href="https://riccioadvocacia.com.br/riccioadvocacia"
        />
      </Helmet>

      {/* ─── Header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-[#c9a227]/15 bg-[#0b0b0d]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#topo" className="flex flex-col leading-none">
            <span className="font-['Playfair_Display'] text-lg font-extrabold tracking-[0.14em] text-[#e7c766] sm:text-xl">
              RICCIO
            </span>
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.24em] text-[#8b857a]">
              Advocacia
            </span>
          </a>
          <ZapButton className="px-4 py-2.5 text-sm" msg={MSG_PADRAO}>
            WhatsApp
          </ZapButton>
        </div>
      </header>

      <main id="topo">
        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          {/* ── MOBILE: hero full-screen com a arte VERTICAL + CTA sobreposto na base limpa ── */}
          <div className="relative sm:hidden">
            <img
              src="/riccio-hero-mobile.png"
              alt="Riccio Advocacia — Advocacia Previdenciária e Trabalhista. Direitos. Dignidade. Resultados."
              className="h-[100svh] min-h-[600px] w-full object-cover object-top"
              width={1080}
              height={1920}
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/85 to-transparent px-5 pb-9 pt-28 text-center">
              <Kicker>Salvador · BA · em todo o Brasil</Kicker>
              <p className="mt-3 max-w-[19rem] text-[15px] leading-relaxed text-[#cfc7b8]">
                Atendimento humano e direto com advogado, pelo WhatsApp — do
                primeiro contato ao fim do processo.
              </p>
              <ZapButton className="mt-5 w-full px-7 py-4 text-base">
                Falar agora no WhatsApp
              </ZapButton>
              <a
                href="#areas"
                className="mt-4 text-xs font-medium tracking-wide text-[#e7c766]"
              >
                Ver áreas de atuação ↓
              </a>
              <p className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#8b857a]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#c9a227]" />
                Dr. Gilberto Riccio · OAB/BA 46.638
              </p>
            </div>
          </div>

          {/* ── DESKTOP: hero emoldurado (arte 16:9) + título e CTAs ── */}
          <div className="relative hidden sm:block">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(201,162,39,0.18),transparent_70%)]"
            />
            <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-14">
              <Reveal className="mx-auto max-w-3xl">
                <div className="overflow-hidden rounded-2xl ring-1 ring-[#c9a227]/25 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
                  <img
                    src="/riccio-hero.png"
                    alt="Riccio Advocacia — Advocacia Previdenciária e Trabalhista."
                    className="block w-full"
                    width={1690}
                    height={945}
                    loading="eager"
                  />
                </div>
              </Reveal>

              <Reveal
                delay={120}
                className="mx-auto mt-9 max-w-2xl text-center"
              >
                <Kicker>Salvador · BA · atendimento em todo o Brasil</Kicker>
                <h1 className="mt-5 font-['Playfair_Display'] text-5xl font-extrabold leading-[1.08] tracking-tight text-[#f6f1e6]">
                  Seu direito{" "}
                  <span className="text-[#e7c766]">
                    previdenciário e trabalhista
                  </span>{" "}
                  em mãos que cuidam.
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#b8b1a4]">
                  Atendimento humano e direto com advogado, pelo WhatsApp — do
                  primeiro contato até o fim do processo. Sem enrolação e sem
                  promessa vazia.
                </p>
                <div className="mt-8 flex flex-row justify-center gap-3">
                  <ZapButton className="px-7 py-4 text-base">
                    Falar agora no WhatsApp
                  </ZapButton>
                  <a
                    href="#areas"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9a227]/40 px-7 py-4 text-base font-semibold text-[#e7c766] transition-colors hover:bg-[#c9a227]/10"
                  >
                    Ver áreas de atuação
                  </a>
                </div>
                <p className="mt-6 flex items-center justify-center gap-2 text-xs text-[#8b857a]">
                  <ShieldCheck className="h-4 w-4 text-[#c9a227]" />
                  Dr. Gilberto Riccio · OAB/BA 46.638
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── Faixa de confiança ───────────────────────────────── */}
        <section className="border-y border-[#c9a227]/12 bg-[#101013]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 sm:grid-cols-4 sm:px-6">
            {PILARES.map((p) => (
              <div key={p.t} className="px-3 py-6 text-center sm:px-4 sm:py-8">
                <p.icon
                  className="mx-auto h-6 w-6 text-[#c9a227]"
                  strokeWidth={1.75}
                />
                <p className="mt-3 text-[13px] font-semibold leading-snug text-[#ece6d8] sm:text-sm">
                  {p.t}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Áreas de atuação ─────────────────────────────────── */}
        <section
          id="areas"
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
        >
          <Reveal className="mx-auto max-w-2xl text-center">
            <Kicker>Áreas de atuação</Kicker>
            <h2 className="mt-4 font-['Playfair_Display'] text-[1.7rem] font-bold leading-tight text-[#f6f1e6] sm:text-4xl">
              Nosso foco é onde você mais precisa
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#b8b1a4]">
              Concentramos nossa atuação em Previdenciário e Trabalhista — as
              causas que mudam a vida de quem trabalha e de quem precisa do
              INSS.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
            {AREAS.map((area, i) => (
              <Reveal key={area.titulo} delay={i * 120}>
                <div className="group flex h-full flex-col rounded-2xl border border-[#c9a227]/20 bg-gradient-to-b from-[#16161a] to-[#101013] p-6 transition-colors duration-300 hover:border-[#c9a227]/45 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c9a227]/12 text-[#e7c766] ring-1 ring-[#c9a227]/25">
                      <area.icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#f6f1e6] sm:text-2xl">
                      {area.titulo}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#b8b1a4]">
                    {area.desc}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {area.itens.map((it) => (
                      <li
                        key={it.t}
                        className="flex items-start gap-2.5 text-sm text-[#d7d0c2]"
                      >
                        <it.icon
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a227]"
                          strokeWidth={2}
                        />
                        {it.t}
                      </li>
                    ))}
                  </ul>
                  <ZapButton msg={area.msg} className="mt-7 w-full px-6 py-3.5">
                    Falar sobre {area.titulo.replace("Direito ", "")}
                  </ZapButton>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 text-center">
            <p className="text-sm text-[#8b857a]">
              Também atuamos em{" "}
              <span className="text-[#d7d0c2]">
                Família, Consumidor, Cível e Criminal
              </span>
              . Fale com a gente e a gente te orienta.
            </p>
          </Reveal>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────── */}
        <section className="border-t border-[#c9a227]/12 bg-[#101013]">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            <Reveal className="text-center">
              <Kicker>Perguntas frequentes</Kicker>
              <h2 className="mt-4 font-['Playfair_Display'] text-[1.7rem] font-bold leading-tight text-[#f6f1e6] sm:text-4xl">
                Tire suas dúvidas
              </h2>
            </Reveal>
            <div className="mt-9 space-y-3">
              {FAQ.map((f, i) => (
                <Reveal key={f.q} delay={i * 70}>
                  <details className="group rounded-xl border border-[#c9a227]/15 bg-[#0b0b0d] px-5 open:border-[#c9a227]/35">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-[15px] font-semibold text-[#ece6d8] [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#c9a227] transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <p className="pb-5 text-sm leading-relaxed text-[#b8b1a4]">
                      {f.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA final ────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(201,162,39,0.16),transparent_70%)]"
          />
          <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
            <Reveal>
              <Scale
                className="mx-auto h-9 w-9 text-[#c9a227]"
                strokeWidth={1.5}
              />
              <h2 className="mt-5 font-['Playfair_Display'] text-[1.8rem] font-extrabold leading-tight text-[#f6f1e6] sm:text-[2.6rem]">
                Vamos conversar sobre o seu caso?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-[#b8b1a4] sm:text-lg">
                O primeiro passo é uma conversa — sem compromisso. Manda uma
                mensagem que a gente te responde.
              </p>
              <div className="mt-8 flex justify-center">
                <ZapButton className="px-8 py-4 text-base sm:text-lg">
                  Falar com a Riccio agora
                </ZapButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ─── Rodapé ───────────────────────────────────────────── */}
      <footer className="border-t border-[#c9a227]/15 bg-[#0b0b0d]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-['Playfair_Display'] text-xl font-extrabold tracking-[0.14em] text-[#e7c766]">
                RICCIO ADVOCACIA
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#8b857a]">
                Advocacia Previdenciária e Trabalhista. Direitos, dignidade e
                cuidado com cada história.
              </p>
            </div>
            <div className="space-y-2 text-sm text-[#b8b1a4]">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#c9a227]" /> Rua Gajirus, nº
                200 — Monte Gordo
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#c9a227]" /> WhatsApp
                (71) 99703-6269
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#c9a227]" /> OAB/BA 46.638
              </p>
            </div>
          </div>
          <div className="mt-10 border-t border-[#c9a227]/12 pt-6">
            <p className="text-xs leading-relaxed text-[#6f6a60]">
              Este site tem caráter meramente informativo, em conformidade com o
              Provimento nº 205/2021 da OAB. Não constitui oferta, captação de
              clientela nem promessa de resultado. © {new Date().getFullYear()}{" "}
              Riccio Advocacia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* ─── WhatsApp flutuante (mobile-first) ───────────────────── */}
      <a
        href={waLink(MSG_PADRAO)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppConversion}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#e7c766] to-[#c9a227] text-[#171205] shadow-[0_12px_30px_-6px_rgba(201,162,39,0.6)] transition-transform active:scale-95"
      >
        <MessageCircle className="h-7 w-7" strokeWidth={2.25} />
      </a>
    </div>
  );
}
