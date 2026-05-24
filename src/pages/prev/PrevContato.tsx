import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

import PrevLayout from "@/components/prev/PrevLayout";
import {
  LAWYER,
  WHATSAPP_MESSAGES,
  whatsappLink,
} from "@/lib/prev-config";

export default function PrevContato() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    topic: "aposentadoria",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Encaminhar para WhatsApp com tudo já preenchido — sem dependência de backend
    const msg = `Olá! Meu nome é ${form.name}.\nAssunto: ${form.topic}.\n\n${form.message}`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const cityKnown = !LAWYER.city.includes("{");
  const addressKnown = !LAWYER.addressLine.includes("{");

  return (
    <>
      <Helmet>
        <title>Contato — Advogado Previdenciário</title>
        <meta
          name="description"
          content="Entre em contato pelo WhatsApp, e-mail ou formulário para uma primeira análise do seu caso previdenciário."
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/prev/contato" />
      </Helmet>

      <PrevLayout ctaMessage={WHATSAPP_MESSAGES.contato}>
        {/* HERO */}
        <section className="bg-prev-navy text-prev-beige pt-16 pb-20 lg:pt-24">
          <div className="max-w-4xl mx-auto px-5">
            <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-4">
              Contato
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              Vamos conversar sobre{" "}
              <span className="italic text-prev-gold">o seu caso</span>.
            </h1>
            <p className="text-lg text-prev-beige/80 leading-relaxed max-w-2xl">
              A forma mais rápida é pelo WhatsApp — respondemos no mesmo dia
              útil. Mas se preferir, deixe sua mensagem pelo formulário ou
              e-mail.
            </p>
          </div>
        </section>

        {/* CARDS DE CONTATO */}
        <section className="py-20 bg-prev-beige">
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* WhatsApp */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                href={whatsappLink(WHATSAPP_MESSAGES.contato)}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-7 border border-prev-navy/8 hover:border-prev-gold/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-prev-gold/15 flex items-center justify-center mb-5 group-hover:bg-prev-gold/25 transition-colors">
                  <MessageCircle className="w-6 h-6 text-prev-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-prev-navy mb-1">WhatsApp</h3>
                <p className="text-xs uppercase tracking-wider text-prev-navy/50 mb-3">
                  Resposta mais rápida
                </p>
                <p className="text-prev-navy/70 text-sm">
                  Conte rapidamente sua situação. Já indicamos os próximos passos.
                </p>
              </motion.a>

              {/* E-mail */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 }}
                href={`mailto:${LAWYER.email}`}
                className="group bg-white rounded-2xl p-7 border border-prev-navy/8 hover:border-prev-gold/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-prev-beige flex items-center justify-center mb-5 group-hover:bg-prev-gold/15 transition-colors">
                  <Mail className="w-6 h-6 text-prev-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-prev-navy mb-1">E-mail</h3>
                <p className="text-xs uppercase tracking-wider text-prev-navy/50 mb-3">
                  Para anexar documentos
                </p>
                <p className="text-prev-navy/70 text-sm break-all">
                  {LAWYER.email}
                </p>
              </motion.a>

              {/* Atendimento */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="bg-white rounded-2xl p-7 border border-prev-navy/8"
              >
                <div className="w-12 h-12 rounded-xl bg-prev-beige flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6 text-prev-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-prev-navy mb-1">Atendimento</h3>
                <p className="text-xs uppercase tracking-wider text-prev-navy/50 mb-3">
                  Horário comercial
                </p>
                <p className="text-prev-navy/70 text-sm leading-relaxed">
                  {LAWYER.businessHours}
                  {cityKnown && (
                    <span className="block mt-2 text-prev-navy/55">
                      <MapPin className="inline-block w-3.5 h-3.5 mr-1" />
                      {addressKnown ? LAWYER.addressLine : `${LAWYER.city} · ${LAWYER.state}`}
                    </span>
                  )}
                </p>
              </motion.div>
            </div>

            {/* Formulário */}
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-prev-navy/8">
              <div className="max-w-2xl mx-auto">
                <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                  Ou deixe sua mensagem
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-prev-navy leading-tight mb-2">
                  Preencha o formulário
                </h2>
                <p className="text-prev-navy/65 mb-8 text-sm">
                  Ao enviar, sua mensagem é direcionada para nosso WhatsApp.
                </p>

                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 mx-auto rounded-full bg-prev-gold/15 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-prev-navy" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl text-prev-navy mb-2">
                      Sua mensagem foi encaminhada
                    </h3>
                    <p className="text-prev-navy/65 text-sm">
                      Se a janela do WhatsApp não abriu, verifique o bloqueador
                      de popup ou{" "}
                      <a
                        href={whatsappLink(WHATSAPP_MESSAGES.contato)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-prev-navy"
                      >
                        clique aqui
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-prev-navy/70 font-medium block mb-2">
                          Seu nome
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-prev-navy/15 bg-white text-prev-navy placeholder:text-prev-navy/30 focus:outline-none focus:border-prev-gold focus:ring-2 focus:ring-prev-gold/20"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-prev-navy/70 font-medium block mb-2">
                          Telefone (com DDD)
                        </label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-2.5 rounded-lg border border-prev-navy/15 bg-white text-prev-navy placeholder:text-prev-navy/30 focus:outline-none focus:border-prev-gold focus:ring-2 focus:ring-prev-gold/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-prev-navy/70 font-medium block mb-2">
                        Assunto
                      </label>
                      <select
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-prev-navy/15 bg-white text-prev-navy focus:outline-none focus:border-prev-gold focus:ring-2 focus:ring-prev-gold/20"
                      >
                        <option value="aposentadoria">Aposentadoria</option>
                        <option value="auxilio-doenca">Auxílio-Doença</option>
                        <option value="invalidez">Aposentadoria por Invalidez</option>
                        <option value="bpc-loas">BPC / LOAS</option>
                        <option value="outro">Outro assunto previdenciário</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-prev-navy/70 font-medium block mb-2">
                        Conte rapidamente seu caso
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Quando começou a trabalhar, idade aproximada, situação atual..."
                        className="w-full px-4 py-2.5 rounded-lg border border-prev-navy/15 bg-white text-prev-navy placeholder:text-prev-navy/30 focus:outline-none focus:border-prev-gold focus:ring-2 focus:ring-prev-gold/20 resize-none"
                      />
                    </div>

                    <p className="text-xs text-prev-navy/50 leading-relaxed">
                      Ao enviar, você concorda com nossa{" "}
                      <a href="/privacidade" className="underline">
                        Política de Privacidade
                      </a>
                      . Seus dados são tratados em conformidade com a LGPD e
                      utilizados exclusivamente para retorno sobre seu caso.
                    </p>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-7 py-4 rounded-full font-semibold text-base shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                      Enviar pelo WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </d