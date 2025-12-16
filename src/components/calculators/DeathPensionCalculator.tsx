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

const DeathPensionCalculator = () => {
  const [valorBeneficio, setValorBeneficio] = useState("");
  const [numDependentes, setNumDependentes] = useState("");
  const [tipoDependente, setTipoDependente] = useState("");
  const [idadeConjuge, setIdadeConjuge] = useState("");
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
      const beneficio = parseValue(valorBeneficio);
      const dependentes = parseNumber(numDependentes);
      const idade = parseNumber(idadeConjuge);
      
      // Cálculo da pensão por morte pós-reforma (2019)
      // Base: 50% + 10% por dependente (máx 100%)
      let percentualBase = 50 + (dependentes * 10);
      percentualBase = Math.min(percentualBase, 100);
      
      const valorPensao = beneficio * (percentualBase / 100);
      
      // Cota por dependente
      const cotaPorDependente = valorPensao / dependentes;
      
      // Duração da pensão para cônjuge (baseada na idade)
      let duracao = "";
      if (tipoDependente === "conjuge") {
        if (idade < 22) duracao = "3 anos";
        else if (idade < 28) duracao = "6 anos";
        else if (idade < 33) duracao = "10 anos";
        else if (idade < 39) duracao = "15 anos";
        else if (idade < 44) duracao = "20 anos";
        else duracao = "Vitalícia";
      } else if (tipoDependente === "filho_menor") {
        duracao = "Até 21 anos (ou 24 se universitário)";
      } else if (tipoDependente === "filho_invalido") {
        duracao = "Enquanto durar a invalidez";
      } else {
        duracao = "Conforme tipo de dependência";
      }

      const pisoINSS = 1412; // Salário mínimo 2024
      const valorFinal = Math.max(valorPensao, pisoINSS);

      const items = [
        {
          label: "Valor Base do Falecido",
          value: beneficio,
          description: "Aposentadoria ou salário de contribuição"
        },
        {
          label: "Percentual da Pensão",
          value: percentualBase,
          description: `50% + 10% × ${dependentes} dependente(s)`
        },
        {
          label: "Cota por Dependente",
          value: cotaPorDependente,
          description: `Divisão entre ${dependentes} dependente(s)`
        }
      ];

      setResult({
        total: valorFinal,
        items
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = valorBeneficio && numDependentes && tipoDependente;

  return (
    <div className="space-y-8">
      <Card className="p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-6">Dados para Cálculo</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <CalculatorInput
            id="valorBeneficio"
            label="Benefício/Salário do Falecido"
            value={valorBeneficio}
            onChange={setValorBeneficio}
            placeholder="R$ 0,00"
            tooltip="Valor da aposentadoria ou média salarial"
            type="currency"
          />

          <CalculatorInput
            id="numDependentes"
            label="Número de Dependentes"
            value={numDependentes}
            onChange={setNumDependentes}
            placeholder="Ex: 2"
            tooltip="Quantos dependentes irão receber a pensão"
            type="number"
            min={1}
            max={10}
          />

          <div className="space-y-2">
            <Label htmlFor="tipoDependente">Tipo de Dependente Principal</Label>
            <Select value={tipoDependente} onValueChange={setTipoDependente}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conjuge">Cônjuge/Companheiro(a)</SelectItem>
                <SelectItem value="filho_menor">Filho(a) menor de 21 anos</SelectItem>
                <SelectItem value="filho_invalido">Filho(a) inválido/deficiente</SelectItem>
                <SelectItem value="pais">Pais (se dependentes)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {tipoDependente === "conjuge" && (
            <CalculatorInput
              id="idadeConjuge"
              label="Idade do Cônjuge"
              value={idadeConjuge}
              onChange={setIdadeConjuge}
              placeholder="Ex: 35"
              tooltip="Idade atual do cônjuge/companheiro(a)"
              type="number"
              min={18}
              max={100}
            />
          )}
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!isValid || isCalculating}
          className="w-full mt-8"
          size="lg"
        >
          {isCalculating ? "Calculando..." : "Calcular Pensão por Morte"}
        </Button>
      </Card>

      {result && (
        <CalculatorResult
          total={result.total}
          items={result.items}
          specialty="familia"
          calculatorType="pensao-morte"
        />
      )}

      <CalculatorDisclaimer />

      <Card className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
        <h3 className="font-semibold mb-3">Regras da Pensão por Morte (Pós-Reforma 2019)</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>Cálculo:</strong> 50% do valor + 10% por dependente (máximo 100%)</li>
          <li>• <strong>Piso:</strong> 1 salário mínimo (R$ 1.412,00 em 2024)</li>
          <li>• <strong>Cônjuge:</strong> duração varia conforme idade (3 anos a vitalícia)</li>
          <li>• <strong>Filhos:</strong> até 21 anos (ou 24 se universitário)</li>
          <li>• <strong>Filhos inválidos:</strong> enquanto durar a invalidez</li>
          <li>• <strong>Importante:</strong> cada dependente recebe uma cota-parte</li>
        </ul>
      </Card>
    </div>
  );
};

export default DeathPensionCalculator;
