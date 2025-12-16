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

// Alíquotas de ITCMD por estado (simplificadas - 2024)
const aliquotasITCMD: Record<string, number> = {
  "AC": 4, "AL": 4, "AP": 4, "AM": 4, "BA": 8, "CE": 8,
  "DF": 6, "ES": 4, "GO": 8, "MA": 7, "MT": 4, "MS": 4,
  "MG": 5, "PA": 4, "PB": 8, "PR": 4, "PE": 8, "PI": 4,
  "RJ": 8, "RN": 6, "RS": 6, "RO": 4, "RR": 4, "SC": 8,
  "SP": 4, "SE": 8, "TO": 8
};

const InventoryCalculator = () => {
  const [valorBens, setValorBens] = useState("");
  const [estado, setEstado] = useState("");
  const [numHerdeiros, setNumHerdeiros] = useState("");
  const [tipoInventario, setTipoInventario] = useState("");
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
      const bens = parseValue(valorBens);
      const herdeiros = parseNumber(numHerdeiros);
      const aliquota = aliquotasITCMD[estado] || 4;
      
      // ITCMD
      const itcmd = bens * (aliquota / 100);
      
      // Custas cartoriais (extrajudicial) ou judiciais
      let custas = 0;
      let custasDescricao = "";
      
      if (tipoInventario === "extrajudicial") {
        // Custas de cartório variam, usando média simplificada
        // Geralmente entre R$ 3.000 e R$ 15.000 dependendo do valor
        if (bens <= 100000) custas = 3000;
        else if (bens <= 500000) custas = 5000;
        else if (bens <= 1000000) custas = 8000;
        else custas = 12000;
        custasDescricao = "Custas de cartório (estimativa)";
      } else {
        // Custas judiciais - geralmente mais baixas mas processo demora
        custas = bens * 0.01; // ~1% do valor
        custas = Math.max(custas, 1000);
        custas = Math.min(custas, 20000);
        custasDescricao = "Custas judiciais (estimativa)";
      }
      
      // Honorários advocatícios (tabela OAB - média 6% a 10%)
      const honorarios = bens * 0.06; // 6% como base
      
      // Total de custos
      const totalCustos = itcmd + custas + honorarios;
      
      // Valor líquido por herdeiro
      const valorLiquidoPorHerdeiro = (bens - totalCustos) / herdeiros;

      const items = [
        {
          label: "ITCMD",
          value: itcmd,
          description: `Imposto de transmissão (${aliquota}% em ${estado})`
        },
        {
          label: "Custas",
          value: custas,
          description: custasDescricao
        },
        {
          label: "Honorários Advocatícios",
          value: honorarios,
          description: "Estimativa: 6% do valor dos bens"
        },
        {
          label: "Por Herdeiro (líquido)",
          value: valorLiquidoPorHerdeiro,
          description: `Divisão entre ${herdeiros} herdeiro(s)`
        }
      ];

      setResult({
        total: totalCustos,
        items
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = valorBens && estado && numHerdeiros && tipoInventario;

  return (
    <div className="space-y-8">
      <Card className="p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-6">Dados do Inventário</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <CalculatorInput
            id="valorBens"
            label="Valor Total dos Bens"
            value={valorBens}
            onChange={setValorBens}
            placeholder="R$ 0,00"
            tooltip="Soma de imóveis, veículos, contas, investimentos"
            type="currency"
          />

          <div className="space-y-2">
            <Label htmlFor="estado">Estado (UF)</Label>
            <Select value={estado} onValueChange={setEstado}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o estado" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(aliquotasITCMD).sort().map((uf) => (
                  <SelectItem key={uf} value={uf}>
                    {uf} - ITCMD {aliquotasITCMD[uf]}%
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <CalculatorInput
            id="numHerdeiros"
            label="Número de Herdeiros"
            value={numHerdeiros}
            onChange={setNumHerdeiros}
            placeholder="Ex: 3"
            tooltip="Quantos herdeiros irão dividir os bens"
            type="number"
            min={1}
            max={20}
          />

          <div className="space-y-2">
            <Label htmlFor="tipoInventario">Tipo de Inventário</Label>
            <Select value={tipoInventario} onValueChange={setTipoInventario}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="extrajudicial">Extrajudicial (cartório)</SelectItem>
                <SelectItem value="judicial">Judicial (tribunal)</SelectItem>
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
          {isCalculating ? "Calculando..." : "Calcular Custos do Inventário"}
        </Button>
      </Card>

      {result && (
        <CalculatorResult
          total={result.total}
          items={result.items}
          specialty="familia"
          calculatorType="inventario"
        />
      )}

      <CalculatorDisclaimer />

      <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold mb-3">Tipos de Inventário</h3>
        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div>
            <h4 className="font-medium mb-2">Extrajudicial (Cartório)</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Todos os herdeiros maiores e capazes</li>
              <li>• Acordo sobre a partilha</li>
              <li>• Sem testamento</li>
              <li>• Mais rápido (30-60 dias)</li>
              <li>• Custas geralmente maiores</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Judicial (Tribunal)</h4>
            <ul className="text-muted-foreground space-y-1">
              <li>• Herdeiros menores ou incapazes</li>
              <li>• Desacordo entre herdeiros</li>
              <li>• Existência de testamento</li>
              <li>• Mais demorado (6 meses a anos)</li>
              <li>• Custas judiciais menores</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InventoryCalculator;
