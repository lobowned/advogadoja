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

const SicknessAidCalculator = () => {
  const [mediaSalarial, setMediaSalarial] = useState("");
  const [tempoContribuicao, setTempoContribuicao] = useState("");
  const [tipoAuxilio, setTipoAuxilio] = useState("");
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
      const media = parseValue(mediaSalarial);
      const meses = parseNumber(tempoContribuicao);
      
      // Cálculo do auxílio-doença pós-reforma
      // Valor = 91% da média de todos os salários de contribuição
      const percentual = 0.91;
      let valorBeneficio = media * percentual;
      
      // Limites
      const pisoINSS = 1412; // Salário mínimo 2024
      const tetoINSS = 7786.02; // Teto INSS 2024
      
      // Verificar carência
      let carenciaAtingida = true;
      let mensagemCarencia = "";
      
      if (tipoAuxilio === "comum") {
        // Auxílio-doença comum: carência de 12 contribuições
        if (meses < 12) {
          carenciaAtingida = false;
          mensagemCarencia = "Carência não atingida (mínimo 12 meses)";
        }
      } else {
        // Auxílio-doença acidentário: sem carência
        mensagemCarencia = "Sem carência (acidente de trabalho)";
      }
      
      // Aplicar piso e teto
      valorBeneficio = Math.max(valorBeneficio, pisoINSS);
      valorBeneficio = Math.min(valorBeneficio, tetoINSS);
      
      // Se não atingiu carência, valor é 0
      if (!carenciaAtingida) {
        valorBeneficio = 0;
      }

      const items = [
        {
          label: "Média Salarial",
          value: media,
          description: "Média de todos os salários de contribuição"
        },
        {
          label: "Percentual do Benefício",
          value: 91,
          description: "91% da média (regra pós-reforma)"
        },
        {
          label: "Carência",
          value: carenciaAtingida ? 1 : 0,
          description: carenciaAtingida ? "Carência atingida" : mensagemCarencia
        }
      ];

      setResult({
        total: valorBeneficio,
        items
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = mediaSalarial && tempoContribuicao && tipoAuxilio;

  return (
    <div className="space-y-8">
      <Card className="p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-6">Dados para Cálculo</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <CalculatorInput
            id="mediaSalarial"
            label="Média dos Salários de Contribuição"
            value={mediaSalarial}
            onChange={setMediaSalarial}
            placeholder="R$ 0,00"
            tooltip="Média de todos os salários de contribuição ao INSS"
            type="currency"
          />

          <CalculatorInput
            id="tempoContribuicao"
            label="Tempo de Contribuição (meses)"
            value={tempoContribuicao}
            onChange={setTempoContribuicao}
            placeholder="Ex: 24"
            tooltip="Total de meses contribuídos ao INSS"
            type="number"
            min={0}
            max={600}
          />

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="tipoAuxilio">Tipo de Auxílio-Doença</Label>
            <Select value={tipoAuxilio} onValueChange={setTipoAuxilio}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comum">Comum (doença não relacionada ao trabalho)</SelectItem>
                <SelectItem value="acidentario">Acidentário (doença/acidente de trabalho)</SelectItem>
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
          {isCalculating ? "Calculando..." : "Calcular Auxílio-Doença"}
        </Button>
      </Card>

      {result && (
        <CalculatorResult
          total={result.total}
          items={result.items}
          specialty="familia"
          calculatorType="auxilio-doenca"
        />
      )}

      <CalculatorDisclaimer />

      <Card className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
        <h3 className="font-semibold mb-3">Regras do Auxílio-Doença</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>Valor:</strong> 91% da média de todos os salários de contribuição</li>
          <li>• <strong>Carência (comum):</strong> 12 meses de contribuição</li>
          <li>• <strong>Carência (acidentário):</strong> sem carência</li>
          <li>• <strong>Piso:</strong> 1 salário mínimo (R$ 1.412,00)</li>
          <li>• <strong>Teto:</strong> R$ 7.786,02 (teto INSS 2024)</li>
          <li>• <strong>Primeiros 15 dias:</strong> pagos pelo empregador (CLT)</li>
          <li>• <strong>Duração:</strong> enquanto persistir a incapacidade (perícia médica)</li>
        </ul>
      </Card>
    </div>
  );
};

export default SicknessAidCalculator;
