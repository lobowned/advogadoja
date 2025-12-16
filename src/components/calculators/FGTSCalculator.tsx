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

const FGTSCalculator = () => {
  const [salario, setSalario] = useState("");
  const [mesesTrabalhados, setMesesTrabalhados] = useState("");
  const [tipoDemissao, setTipoDemissao] = useState("");
  const [saqueAniversario, setSaqueAniversario] = useState("");
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
      const salarioNum = parseValue(salario);
      const meses = parseNumber(mesesTrabalhados);
      
      // FGTS = 8% do salário por mês
      const depositoMensal = salarioNum * 0.08;
      const saldoFGTS = depositoMensal * meses;
      
      // Multa rescisória
      let multaPercentual = 0;
      let multaDescricao = "";
      
      switch (tipoDemissao) {
        case "sem_justa_causa":
          multaPercentual = 0.40;
          multaDescricao = "Multa 40% (demissão sem justa causa)";
          break;
        case "acordo":
          multaPercentual = 0.20;
          multaDescricao = "Multa 20% (acordo/rescisão consensual)";
          break;
        case "pedido":
        case "justa_causa":
        default:
          multaPercentual = 0;
          multaDescricao = "Sem multa rescisória";
      }
      
      const multa = saldoFGTS * multaPercentual;
      
      // Saque-rescisão vs Saque-aniversário
      let valorSaque = 0;
      let descricaoSaque = "";
      
      if (saqueAniversario === "sim") {
        // No saque-aniversário, só pode sacar parcela anual + multa
        // A parcela anual depende do saldo
        const faixas = [
          { limite: 500, percentual: 0.50, adicional: 0 },
          { limite: 1000, percentual: 0.40, adicional: 50 },
          { limite: 5000, percentual: 0.30, adicional: 150 },
          { limite: 10000, percentual: 0.20, adicional: 650 },
          { limite: 15000, percentual: 0.15, adicional: 1150 },
          { limite: 20000, percentual: 0.10, adicional: 1900 },
          { limite: Infinity, percentual: 0.05, adicional: 2900 }
        ];
        
        const faixa = faixas.find(f => saldoFGTS <= f.limite)!;
        const saqueAnual = (saldoFGTS * faixa.percentual) + faixa.adicional;
        valorSaque = saqueAnual + multa;
        descricaoSaque = `Saque-aniversário: parcela anual + multa`;
      } else {
        // Saque-rescisão: saldo integral + multa
        valorSaque = saldoFGTS + multa;
        descricaoSaque = "Saque integral do saldo + multa";
      }

      const items = [
        {
          label: "Saldo FGTS Estimado",
          value: saldoFGTS,
          description: `8% do salário × ${meses} meses`
        },
        {
          label: "Multa Rescisória",
          value: multa,
          description: multaDescricao
        },
        {
          label: "Valor Disponível para Saque",
          value: valorSaque,
          description: descricaoSaque
        }
      ];

      setResult({
        total: valorSaque,
        items
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = salario && mesesTrabalhados && tipoDemissao && saqueAniversario;

  return (
    <div className="space-y-8">
      <Card className="p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-6">Dados para Cálculo</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <CalculatorInput
            id="salario"
            label="Salário Atual"
            value={salario}
            onChange={setSalario}
            placeholder="R$ 0,00"
            tooltip="Salário bruto mensal"
            type="currency"
          />

          <CalculatorInput
            id="mesesTrabalhados"
            label="Tempo de Trabalho (meses)"
            value={mesesTrabalhados}
            onChange={setMesesTrabalhados}
            placeholder="Ex: 36"
            tooltip="Total de meses trabalhados nesse emprego"
            type="number"
            min={1}
            max={600}
          />

          <div className="space-y-2">
            <Label htmlFor="tipoDemissao">Tipo de Demissão</Label>
            <Select value={tipoDemissao} onValueChange={setTipoDemissao}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sem_justa_causa">Demissão sem justa causa</SelectItem>
                <SelectItem value="acordo">Acordo (rescisão consensual)</SelectItem>
                <SelectItem value="pedido">Pedido de demissão</SelectItem>
                <SelectItem value="justa_causa">Justa causa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="saqueAniversario">Optou pelo Saque-Aniversário?</Label>
            <Select value={saqueAniversario} onValueChange={setSaqueAniversario}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nao">Não (Saque-Rescisão)</SelectItem>
                <SelectItem value="sim">Sim (Saque-Aniversário)</SelectItem>
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
          {isCalculating ? "Calculando..." : "Calcular FGTS"}
        </Button>
      </Card>

      {result && (
        <CalculatorResult
          total={result.total}
          items={result.items}
          specialty="trabalhista"
          calculatorType="fgts"
        />
      )}

      <CalculatorDisclaimer />

      <Card className="p-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold mb-3">Entenda o FGTS</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>Depósito:</strong> 8% do salário mensal depositado pelo empregador</li>
          <li>• <strong>Demissão sem justa causa:</strong> saque integral + multa de 40%</li>
          <li>• <strong>Acordo (art. 484-A CLT):</strong> saque de 80% + multa de 20%</li>
          <li>• <strong>Pedido de demissão/Justa causa:</strong> não pode sacar (fica rendendo)</li>
          <li>• <strong>Saque-Aniversário:</strong> parcela anual no mês de aniversário, mas perde saque integral na demissão</li>
        </ul>
      </Card>
    </div>
  );
};

export default FGTSCalculator;
