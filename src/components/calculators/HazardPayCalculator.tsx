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

const HazardPayCalculator = () => {
  const [salarioBase, setSalarioBase] = useState("");
  const [tipoAdicional, setTipoAdicional] = useState("");
  const [grauInsalubridade, setGrauInsalubridade] = useState("");
  const [mesesDevidos, setMesesDevidos] = useState("");
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
      const salario = parseValue(salarioBase);
      const meses = parseNumber(mesesDevidos) || 1;
      const salarioMinimo = 1412; // 2024
      
      let adicionalMensal = 0;
      let percentual = 0;
      let descricaoAdicional = "";
      
      if (tipoAdicional === "periculosidade") {
        // Periculosidade: 30% sobre o salário base
        percentual = 30;
        adicionalMensal = salario * 0.30;
        descricaoAdicional = "30% sobre salário base";
      } else {
        // Insalubridade: % sobre o salário mínimo
        switch (grauInsalubridade) {
          case "minimo":
            percentual = 10;
            adicionalMensal = salarioMinimo * 0.10;
            descricaoAdicional = "10% sobre salário mínimo (grau mínimo)";
            break;
          case "medio":
            percentual = 20;
            adicionalMensal = salarioMinimo * 0.20;
            descricaoAdicional = "20% sobre salário mínimo (grau médio)";
            break;
          case "maximo":
            percentual = 40;
            adicionalMensal = salarioMinimo * 0.40;
            descricaoAdicional = "40% sobre salário mínimo (grau máximo)";
            break;
        }
      }
      
      // Total não pago
      const totalDevido = adicionalMensal * meses;
      
      // Reflexos (férias + 1/3, 13º)
      const reflexoFerias = (adicionalMensal * meses / 12) * 1.33; // férias + 1/3
      const reflexo13 = (adicionalMensal * meses / 12);
      const totalReflexos = reflexoFerias + reflexo13;
      
      // FGTS sobre adicional
      const fgtsAdicional = totalDevido * 0.08;

      const items = [
        {
          label: "Adicional Mensal",
          value: adicionalMensal,
          description: descricaoAdicional
        },
        {
          label: `Total (${meses} meses)`,
          value: totalDevido,
          description: "Adicional não pago"
        },
        {
          label: "Reflexos (Férias + 13º)",
          value: totalReflexos,
          description: "Incidência em férias +1/3 e 13º salário"
        },
        {
          label: "FGTS sobre Adicional",
          value: fgtsAdicional,
          description: "8% sobre o adicional"
        }
      ];

      setResult({
        total: totalDevido + totalReflexos + fgtsAdicional,
        items
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = salarioBase && tipoAdicional && (tipoAdicional === "periculosidade" || grauInsalubridade);

  return (
    <div className="space-y-8">
      <Card className="p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-6">Dados para Cálculo</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <CalculatorInput
            id="salarioBase"
            label="Salário Base"
            value={salarioBase}
            onChange={setSalarioBase}
            placeholder="R$ 0,00"
            tooltip="Seu salário mensal (sem adicionais)"
            type="currency"
          />

          <div className="space-y-2">
            <Label htmlFor="tipoAdicional">Tipo de Adicional</Label>
            <Select value={tipoAdicional} onValueChange={setTipoAdicional}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="insalubridade">Insalubridade (agentes nocivos)</SelectItem>
                <SelectItem value="periculosidade">Periculosidade (risco de vida)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {tipoAdicional === "insalubridade" && (
            <div className="space-y-2">
              <Label htmlFor="grauInsalubridade">Grau de Insalubridade</Label>
              <Select value={grauInsalubridade} onValueChange={setGrauInsalubridade}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o grau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="minimo">Mínimo (10%)</SelectItem>
                  <SelectItem value="medio">Médio (20%)</SelectItem>
                  <SelectItem value="maximo">Máximo (40%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <CalculatorInput
            id="mesesDevidos"
            label="Meses Não Pagos (opcional)"
            value={mesesDevidos}
            onChange={setMesesDevidos}
            placeholder="Ex: 24"
            tooltip="Se não recebeu, informe quantos meses"
            type="number"
            min={1}
            max={60}
          />
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!isValid || isCalculating}
          className="w-full mt-8"
          size="lg"
        >
          {isCalculating ? "Calculando..." : "Calcular Adicional"}
        </Button>
      </Card>

      {result && (
        <CalculatorResult
          total={result.total}
          items={result.items}
          specialty="trabalhista"
          calculatorType="insalubridade-periculosidade"
        />
      )}

      <CalculatorDisclaimer />

      <Card className="p-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
        <h3 className="font-semibold mb-3">Insalubridade vs Periculosidade</h3>
        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div>
            <h4 className="font-medium mb-2">Insalubridade</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Exposição a agentes nocivos</li>
              <li>• Ruído, calor, produtos químicos</li>
              <li>• Base: salário mínimo</li>
              <li>• Mínimo 10% | Médio 20% | Máximo 40%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Periculosidade</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Risco de vida iminente</li>
              <li>• Inflamáveis, explosivos, eletricidade</li>
              <li>• Base: salário do empregado</li>
              <li>• Adicional fixo de 30%</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          <strong>Atenção:</strong> Não é possível cumular insalubridade e periculosidade. 
          O trabalhador deve optar pelo mais vantajoso.
        </p>
      </Card>
    </div>
  );
};

export default HazardPayCalculator;
