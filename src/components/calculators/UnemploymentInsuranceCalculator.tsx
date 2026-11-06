import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";
import { ANO_VIGENTE, SEGURO_DESEMPREGO, brl } from "@/data/valores-vigentes";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string; format?: "currency" | "count" | "percent" }[];
}

const UnemploymentInsuranceCalculator = () => {
  const [salario1, setSalario1] = useState("");
  const [salario2, setSalario2] = useState("");
  const [salario3, setSalario3] = useState("");
  const [mesesTrabalhados, setMesesTrabalhados] = useState("");
  const [vezesRecebido, setVezesRecebido] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseValue = (value: string): number => {
    // CalculatorInput (currency) entrega centavos em dígitos: "300000" = R$ 3.000,00
    return parseInt(value.replace(/\D/g, "") || "0", 10) / 100;
  };

  const parseNumber = (value: string): number => {
    return parseInt(value.replace(/\D/g, "")) || 0;
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const sal1 = parseValue(salario1);
      const sal2 = parseValue(salario2);
      const sal3 = parseValue(salario3);
      const meses = parseNumber(mesesTrabalhados);
      const vezes = parseNumber(vezesRecebido);

      // Calcular média salarial
      const mediaSalarial = (sal1 + sal2 + sal3) / 3;

      // Valor da parcela: tabela vigente (src/data/valores-vigentes.ts)
      const t = SEGURO_DESEMPREGO;
      let valorParcela = 0;
      if (mediaSalarial <= t.faixa1Ate) {
        valorParcela = mediaSalarial * 0.8;
      } else if (mediaSalarial <= t.faixa2Ate) {
        valorParcela = (mediaSalarial - t.faixa1Ate) * 0.5 + t.faixa2Base;
      } else {
        valorParcela = t.teto;
      }

      // Nunca abaixo do salário mínimo nem acima do teto
      valorParcela = Math.max(valorParcela, t.piso);
      valorParcela = Math.min(valorParcela, t.teto);

      // Número de parcelas: Lei 7.998/1990, art. 4º, § 2º (meses nos 36 meses antes da dispensa)
      const minimoPorSolicitacao = vezes === 0 ? 12 : vezes === 1 ? 9 : 6;
      let numParcelas = 0;
      if (meses >= 24) numParcelas = 5;
      else if (meses >= 12) numParcelas = 4;
      else if (meses >= minimoPorSolicitacao) numParcelas = 3;
      if (meses < minimoPorSolicitacao) numParcelas = 0;

      const valorTotal = valorParcela * numParcelas;

      const items = [
        {
          label: "Média Salarial",
          value: mediaSalarial,
          description: "Média dos 3 últimos salários"
        },
        {
          label: "Valor de Cada Parcela",
          value: valorParcela,
          description: "Calculado conforme faixas do seguro-desemprego"
        },
        {
          label: "Número de Parcelas",
          value: numParcelas,
          description: `${numParcelas} parcelas conforme tempo trabalhado`,
          format: "count" as const,
        }
      ];

      setResult({
        total: valorTotal,
        items
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = salario1 && salario2 && salario3 && mesesTrabalhados && vezesRecebido !== "";

  return (
    <div className="space-y-8">
      <Card className="p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-6">Dados para Cálculo</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <CalculatorInput
            id="salario1"
            label="Salário do 1º Mês"
            value={salario1}
            onChange={setSalario1}
            placeholder="R$ 0,00"
            tooltip="Salário bruto do mês mais antigo"
            type="currency"
          />

          <CalculatorInput
            id="salario2"
            label="Salário do 2º Mês"
            value={salario2}
            onChange={setSalario2}
            placeholder="R$ 0,00"
            tooltip="Salário bruto do penúltimo mês"
            type="currency"
          />

          <CalculatorInput
            id="salario3"
            label="Salário do 3º Mês"
            value={salario3}
            onChange={setSalario3}
            placeholder="R$ 0,00"
            tooltip="Salário bruto do último mês"
            type="currency"
          />

          <CalculatorInput
            id="mesesTrabalhados"
            label="Meses Trabalhados"
            value={mesesTrabalhados}
            onChange={setMesesTrabalhados}
            placeholder="Ex: 18"
            tooltip="Meses com carteira assinada nos 36 meses antes da demissão (pode somar mais de um emprego)"
            type="number"
            min={0}
            max={480}
          />

          <div className="space-y-2">
            <Label htmlFor="vezesRecebido">Já recebeu seguro-desemprego?</Label>
            <Select value={vezesRecebido} onValueChange={setVezesRecebido}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Nunca recebi</SelectItem>
                <SelectItem value="1">1 vez</SelectItem>
                <SelectItem value="2">2 ou mais vezes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!isValid || isCalculating}
          className="w-full mt-8"
          size="lg"
        >
          {isCalculating ? "Calculando..." : "Calcular Seguro-Desemprego"}
        </Button>
      </Card>

      {result && (
        <CalculatorResult
          total={result.total}
          items={result.items}
          specialty="trabalhista"
          calculatorType="seguro-desemprego"
        />
      )}

      <CalculatorDisclaimer />

      <Card className="p-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold mb-3">Regras do Seguro-Desemprego ({ANO_VIGENTE})</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>1ª solicitação:</strong> salário em pelo menos 12 dos últimos 18 meses → 4 parcelas (12 a 23 meses) ou 5 parcelas (24 meses ou mais)</li>
          <li>• <strong>2ª solicitação:</strong> salário em pelo menos 9 dos últimos 12 meses → 3 parcelas (9 a 11 meses), 4 (12 a 23) ou 5 (24 ou mais)</li>
          <li>• <strong>3ª em diante:</strong> salário em cada um dos 6 meses antes da demissão → 3 parcelas (6 a 11 meses), 4 (12 a 23) ou 5 (24 ou mais)</li>
          <li>• <strong>Valor:</strong> média até {brl(SEGURO_DESEMPREGO.faixa1Ate)} recebe 80%; de {brl(SEGURO_DESEMPREGO.faixa1Ate + 0.01)} a {brl(SEGURO_DESEMPREGO.faixa2Ate)}, {brl(SEGURO_DESEMPREGO.faixa2Base)} + 50% do que passar de {brl(SEGURO_DESEMPREGO.faixa1Ate)}; acima disso, o teto</li>
          <li>• <strong>Piso:</strong> {brl(SEGURO_DESEMPREGO.piso)} (salário mínimo) · <strong>Teto:</strong> {brl(SEGURO_DESEMPREGO.teto)}</li>
          <li>• Tabela do Ministério do Trabalho em vigor desde {SEGURO_DESEMPREGO.vigencia}. Contagem de meses: Lei 7.998/1990, art. 4º.</li>
        </ul>
      </Card>
    </div>
  );
};

export default UnemploymentInsuranceCalculator;
