import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/prev-config";

/**
 * Calculadora rápida — primeira interação do site.
 * Não substitui análise técnica do CNIS, mas dá uma estimativa
 * inicial que engaja o usuário e gera lead qualificado.
 *
 * Regras da Reforma da Previdência (EC 103/2019):
 *  - Idade mínima fim transição: 65H/62M
 *  - Tempo mínimo de contribuição: 20H/15M (CLT antiga ainda em transição)
 *
 * Cálculo simplificado: apenas idade-mínima da regra permanente.
 * O resultado oferece WhatsApp para análise completa.
 */
export default function PrevQuickCalc() {
  const [birthYear, setBirthYear] = useState<string>("");
  const [gender, setGender] = useState<"M" | "F">("M");
  const [contributionYears, setContributionYears] = useState<string>("");

  const result = useMemo(() => {
    const by = parseInt(birthYear, 10);
    const cy = parseInt(contributionYears, 10);
    if (!by || by < 1930 || by > 2010) return null;

    const currentYear = new Date().getFullYear();
    const currentAge = currentYear - by;
    const minAge = gender === "M" ? 65 : 62;
    const minContribution = gender === "M" ? 20 : 15;

    const yearsToAge = Math.max(0, minAge - currentAge);
    const yearsToContribution = Number.isFinite(cy)
      ? Math.max(0, minContribution - cy)
      : null;

    const blocking =
      yearsToAge > 0 && yearsToContribution !== null
        ? Math.max(yearsToAge, yearsToContribution)
        : yearsToAge;

    return {
      currentAge,
      minAge,
      yearsToAge,
      yearsToContribution,
      blocking,
      eligible: blocking === 0,
    };
  }, [birthYear, gender, contributionYears]);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-prev-navy/10 p-7 sm:p-8 max-w-md w-full">
      <div className="flex items-center gap-2 mb-5">
        <Calculator className="w-5 h-5 text-prev-gold" />
        <span className="text-xs uppercase tracking-wider text-prev-navy/60 font-medium">
          Análise rápida
        </span>
      </div>

      <h3 className="font-serif text-xl text-prev-navy mb-1 leading-tight">
        Quanto falta para você se aposentar?
      </h3>
      <p className="text-sm text-prev-navy/60 mb-6">
        Estimativa pela regra permanente da Reforma. Apenas indicativo.
      </p>

      <div className="space-y-4">
        {/* Sexo */}
        <div>
          <label className="text-xs text-prev-navy/70 font-medium block mb-2">
            Sexo
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGender("M")}
              className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                gender === "M"
                  ? "bg-prev-navy text-prev-beige"
                  : "bg-prev-beige/60 text-prev-navy/70 hover:bg-prev-beige"
              }`}
            >
              Masculino
            </button>
            <button
              type="button"
              onClick={() => setGender("F")}
              className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                gender === "F"
                  ? "bg-prev-navy text-prev-beige"
                  : "bg-prev-beige/60 text-prev-navy/70 hover:bg-prev-beige"
              }`}
            >
              Feminino
            </button>
          </div>
        </div>

        {/* Ano de nascimento */}
        <div>
          <label className="text-xs text-prev-navy/70 font-medium block mb-2">
            Ano de nascimento
          </label>
          <input
            type="number"
            inputMode="numeric"
            placeholder="ex: 1965"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value.slice(0, 4))}
            className="w-full px-4 py-2.5 rounded-lg border border-prev-navy/15 bg-white text-prev-navy placeholder:text-prev-navy/30 focus:outline-none focus:border-prev-gold focus:ring-2 focus:ring-prev-gold/20 transition-all"
          />
        </div>

        {/* Anos de contribuição */}
        <div>
          <label className="text-xs text-prev-navy/70 font-medium block mb-2">
            Anos de contribuição{" "}
            <span className="text-prev-navy/40">(opcional)</span>
          </label>
          <input
            type="number"
            inputMode="numeric"
            placeholder="ex: 25"
            value={contributionYears}
            onChange={(e) => setContributionYears(e.target.value.slice(0, 2))}
            className="w-full px-4 py-2.5 rounded-lg border border-prev-navy/15 bg-white text-prev-navy placeholder:text-prev-navy/30 focus:outline-none focus:border-prev-gold focus:ring-2 focus:ring-prev-gold/20 transition-all"
          />
        </div>
      </div>

      {/* Resultado animado */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={`${result.blocking}-${result.eligible}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-4 rounded-xl bg-prev-navy/5 border border-prev-navy/10"
          >
            {result.eligible ? (
              <>
                <p className="text-prev-navy font-medium text-sm mb-1">
                  Você já cumpre os requisitos mínimos da regra permanente.
                </p>
                <p className="text-xs text-prev-navy/60">
                  Mas talvez você tenha direito a uma aposentadoria com valor
                  maior por uma regra de transição. Vale uma análise completa do
                  seu CNIS.
                </p>
              </>
            ) : (
              <>
                <p className="text-prev-navy text-sm mb-1">
                  Pela regra permanente, faltam aproximadamente{" "}
                  <strong className="font-serif text-lg text-prev-gold">
                    {result.blocking} {result.blocking === 1 ? "ano" : "anos"}
                  </strong>
                </p>
                <p className="text-xs text-prev-navy/60">
                  Mas pode haver uma regra de transição em que você se aposente
                  antes. Veja com a análise do seu CNIS.
                </p>
              </>
            )}

            <a
              href={whatsappLink(
                `Olá! Fiz o cálculo rápido no site (${gender === "M" ? "homem" : "mulher"}, nascido em ${birthYear}${
                  contributionYears ? `, ${contributionYears} anos de contribuição` : ""
                }). Quero uma análise completa do meu caso.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-prev-navy hover:text-prev-gold transition-colors"
            >
              Quero a análise completa
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {!result && (
        <p className="mt-5 text-[11px] text-prev-navy/40 leading-relaxed">
          Esse cálculo considera apenas a regra permanente. O seu caso pode se
          enquadrar em regras de transição com idade ou tempo menores.
        </p>
      )}
    </div>
  );
}
