import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
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
    return parseFloat(value.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
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

      // Calcular valor da parcela (faixas 2024)
      // Faixa 1: até R$ 2.041,39 - média x 0,8
      // Faixa 2: de R$ 2.041,40 a R$ 3.402,65 - excedente x 0,5 + 1.633,10
      // Faixa 3: acima de R$ 3.402,65 - valor fixo R$ 2.313,74
      let valorParcela = 0;
      const pisoSalario = 1412; // Salário mínimo 2024
      const tetoSeguro = 2313.74;

      if (mediaSalarial <= 2041.39) {
        valorParcela = mediaSalarial * 0.8;
      } else if (mediaSalarial <= 3402.65) {
        valorParcela = ((mediaSalarial - 2041.39) * 0.5) + 1633.10;
      } else {
        valorParcela = tetoSeguro;
      }

      // Garantir que não seja menor que o salário mínimo
      valorParcela = Math.max(valorParcela, pisoSalario);
      valorParcela = Math.min(valorParcela, tetoSeguro);

      // Calcular número de parcelas
      let numParcelas = 0;
      if (vezes === 0) {
        // Primeira solicitação
        if (meses >= 12) numParcelas = 4;
        else numParcelas = 0;
      } else if (vezes === 1) {
        // Segunda solicitação
        if (meses >= 9) numParcelas = 3;
        else numParcelas = 0;
      } else {
        // Terceira ou mais
        if (meses >= 6 && meses < 12) numParcelas = 3;
        else if (meses >= 12 && meses < 24) numParcelas = 4;
        else if (meses >= 24) numParcelas = 5;
      }

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
          description: `${numParcelas} parcelas conforme tempo trabalhado`
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
            tooltip="Total de meses no último emprego"
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
        <h3 className="font-semibold mb-3">Regras do Seguro-Desemprego (2024)</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>1ª solicitação:</strong> mínimo 12 meses trabalhados → 4 parcelas</li>
          <li>• <strong>2ª solicitação:</strong> mínimo 9 meses trabalhados → 3 parcelas</li>
          <li>• <strong>3ª em diante:</strong> 6-11 meses → 3 parcelas | 12-23 meses → 4 parcelas | 24+ meses → 5 parcelas</li>
          <li>• <strong>Piso:</strong> R$ 1.412,00 (salário mínimo)</li>
          <li>• <strong>Teto:</strong> R$ 2.313,74</li>
        </ul>
      </Card>
    </div>
  );
};

export default UnemploymentInsuranceCalculator;
