import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const RentArrearsCalculator = () => {
  const [valorAluguel, setValorAluguel] = useState<string>("");
  const [mesesAtraso, setMesesAtraso] = useState<string>("");
  const [multaContratual, setMultaContratual] = useState<string>("");
  const [extras, setExtras] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseValue = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return parseFloat(numbers) / 100 || 0;
  };

  const parseNumber = (value: string) => parseInt(value.replace(/\D/g, "")) || 0;

  const handleCalculate = () => {
    setIsCalculating(true);

    const aluguel = parseValue(valorAluguel);
    const meses = parseNumber(mesesAtraso);
    const multa = parseValue(multaContratual) || aluguel * 0.1; // 10% padrão se não informado
    const extrasValor = parseValue(extras);

    // Cálculos
    const totalAlugueis = aluguel * meses;
    const jurosMora = totalAlugueis * 0.01 * meses; // 1% ao mês
    const correcaoMonetaria = totalAlugueis * 0.004 * meses; // ~0.4% ao mês (IGPM médio)
    const totalExtras = extrasValor * meses; // IPTU, condomínio por mês

    const total = totalAlugueis + multa + jurosMora + correcaoMonetaria + totalExtras;

    setTimeout(() => {
      setResult({
        total: total,
        items: [
          { label: "Aluguéis em Atraso", value: totalAlugueis, description: `${meses} meses × R$ ${aluguel.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` },
          { label: "Multa Contratual", value: multa, description: "Multa por atraso prevista no contrato" },
          { label: "Juros de Mora (1% a.m.)", value: jurosMora, description: "Juros legais pelo atraso" },
          { label: "Correção Monetária", value: correcaoMonetaria, description: "Atualização do valor" },
          { label: "Encargos (IPTU, Cond.)", value: totalExtras, description: "Despesas acessórias em atraso" },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = parseValue(valorAluguel) > 0 && parseNumber(mesesAtraso) > 0;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora de Aluguel Atrasado</h2>
            <p className="text-sm text-muted-foreground">Calcule o débito total</p>
          </div>
        </div>

        <div className="space-y-5">
          <CalculatorInput
            id="aluguel"
            label="Valor do Aluguel Mensal"
            value={valorAluguel}
            onChange={setValorAluguel}
            placeholder="R$ 0,00"
            tooltip="Valor mensal do aluguel conforme contrato"
            type="currency"
          />

          <CalculatorInput
            id="meses"
            label="Meses em Atraso"
            value={mesesAtraso}
            onChange={setMesesAtraso}
            placeholder="Ex: 3"
            tooltip="Quantidade de meses de aluguel não pagos"
            type="number"
            min={1}
            max={60}
          />

          <CalculatorInput
            id="multa"
            label="Multa por Atraso (opcional)"
            value={multaContratual}
            onChange={setMultaContratual}
            placeholder="R$ 0,00"
            tooltip="Multa prevista no contrato (padrão: 10% do aluguel)"
            type="currency"
          />

          <CalculatorInput
            id="extras"
            label="IPTU + Condomínio Mensal (opcional)"
            value={extras}
            onChange={setExtras}
            placeholder="R$ 0,00"
            tooltip="Soma de IPTU e condomínio mensais, se aplicável"
            type="currency"
          />

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full"
            size="lg"
          >
            {isCalculating ? "Calculando..." : "Calcular Débito Total"}
          </Button>
        </div>

        {result && (
          <div className="mt-6">
            <CalculatorResult
              total={result.total}
              items={result.items}
              specialty="trabalhista"
              calculatorType="aluguel-atrasado"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-muted/30 border-dashed">
          <h3 className="font-semibold mb-2 text-sm">🏠 Direitos do Locador</h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Ação de despejo pode ser iniciada após 1 mês de atraso</li>
            <li>• Multa contratual máxima geralmente é de 10%</li>
            <li>• Juros de mora legais são de 1% ao mês</li>
            <li>• Locador pode exigir fiador ou caução adicional</li>
          </ul>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default RentArrearsCalculator;
