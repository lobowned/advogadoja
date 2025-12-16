import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calculator, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const RetirementCalculator = () => {
  const [sexo, setSexo] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [tempoContribuicao, setTempoContribuicao] = useState<string>("");
  const [salarioMedio, setSalarioMedio] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseNumber = (value: string) => parseInt(value.replace(/\D/g, "")) || 0;
  const parseValue = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return parseFloat(numbers) / 100 || 0;
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    
    const idadeNum = parseNumber(idade);
    const tempoNum = parseNumber(tempoContribuicao);
    const salarioNum = parseValue(salarioMedio);

    // Regras simplificadas pós-reforma 2019
    const idadeMinima = sexo === "masculino" ? 65 : 62;
    const tempoMinimo = sexo === "masculino" ? 20 : 15;

    let elegivel = idadeNum >= idadeMinima && tempoNum >= tempoMinimo;
    
    // Cálculo simplificado do benefício
    // 60% + 2% por ano acima do mínimo
    const anosExcedentes = Math.max(0, tempoNum - tempoMinimo);
    const percentual = Math.min(100, 60 + (anosExcedentes * 2));
    
    const valorEstimado = elegivel ? (salarioNum * percentual) / 100 : 0;
    const tetoINSS = 7786.02; // Teto 2024
    const valorFinal = Math.min(valorEstimado, tetoINSS);

    setTimeout(() => {
      setResult({
        total: valorFinal,
        items: [
          { 
            label: "Situação", 
            value: elegivel ? 1 : 0, 
            description: elegivel ? "✅ Você atende aos requisitos mínimos" : "⏳ Ainda não atinge os requisitos" 
          },
          { 
            label: "Idade Mínima Necessária", 
            value: idadeMinima, 
            description: `${idadeNum} anos (necessário: ${idadeMinima})` 
          },
          { 
            label: "Tempo Mínimo", 
            value: tempoMinimo, 
            description: `${tempoNum} anos (necessário: ${tempoMinimo})` 
          },
          { 
            label: "Percentual do Benefício", 
            value: percentual, 
            description: `${percentual}% da média salarial` 
          },
          { 
            label: "Estimativa Mensal", 
            value: valorFinal, 
            description: elegivel ? "Valor aproximado do benefício" : "Procure um advogado para análise completa" 
          },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = sexo && parseNumber(idade) > 0 && parseNumber(tempoContribuicao) > 0 && parseValue(salarioMedio) > 0;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora de Aposentadoria</h2>
            <p className="text-sm text-muted-foreground">Verifique sua elegibilidade</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Sexo</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">As regras de aposentadoria variam conforme o sexo</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={sexo} onValueChange={setSexo}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CalculatorInput
            id="idade"
            label="Sua Idade"
            value={idade}
            onChange={setIdade}
            placeholder="Ex: 55"
            tooltip="Sua idade atual em anos"
            type="number"
            min={18}
            max={100}
          />

          <CalculatorInput
            id="tempo"
            label="Tempo de Contribuição (anos)"
            value={tempoContribuicao}
            onChange={setTempoContribuicao}
            placeholder="Ex: 25"
            tooltip="Total de anos que você contribuiu para o INSS"
            type="number"
            min={0}
            max={50}
          />

          <CalculatorInput
            id="salario"
            label="Média Salarial (últimos anos)"
            value={salarioMedio}
            onChange={setSalarioMedio}
            placeholder="R$ 0,00"
            tooltip="Média dos seus maiores salários de contribuição"
            type="currency"
          />

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full"
            size="lg"
          >
            {isCalculating ? "Calculando..." : "Verificar Aposentadoria"}
          </Button>
        </div>

        {result && (
          <div className="mt-6">
            <CalculatorResult
              total={result.total}
              items={result.items}
              specialty="trabalhista"
              calculatorType="aposentadoria"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-muted/30 border-dashed">
          <h3 className="font-semibold mb-2 text-sm">💡 Regras após Reforma (2019)</h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Homens: 65 anos de idade + 20 anos de contribuição</li>
            <li>• Mulheres: 62 anos de idade + 15 anos de contribuição</li>
            <li>• Benefício: 60% + 2% por ano acima do mínimo</li>
          </ul>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default RetirementCalculator;
