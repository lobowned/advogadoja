import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Home, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const AssetDivisionCalculator = () => {
  const [regime, setRegime] = useState<string>("");
  const [valorBens, setValorBens] = useState<string>("");
  const [dividas, setDividas] = useState<string>("");
  const [bensAnteriores, setBensAnteriores] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseValue = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return parseFloat(numbers) / 100 || 0;
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    const bens = parseValue(valorBens);
    const debit = parseValue(dividas);
    const anteriores = parseValue(bensAnteriores);

    let patrimonioPartilhavel = 0;
    let suaParte = 0;
    let parteConjuge = 0;

    switch (regime) {
      case "comunhao_parcial":
        // Comunhão Parcial: divide apenas os bens adquiridos na constância
        patrimonioPartilhavel = bens - anteriores - debit;
        suaParte = anteriores + (patrimonioPartilhavel / 2);
        parteConjuge = patrimonioPartilhavel / 2;
        break;
      
      case "comunhao_universal":
        // Comunhão Universal: divide tudo (exceto bens incomunicáveis)
        patrimonioPartilhavel = bens - debit;
        suaParte = patrimonioPartilhavel / 2;
        parteConjuge = patrimonioPartilhavel / 2;
        break;
      
      case "separacao_total":
        // Separação Total: cada um fica com o que é seu
        suaParte = bens - debit; // Assumindo que informou seus bens
        parteConjuge = 0;
        patrimonioPartilhavel = 0;
        break;
      
      case "participacao_final":
        // Participação Final nos Aquestos: similar à comunhão parcial na dissolução
        patrimonioPartilhavel = bens - anteriores - debit;
        suaParte = anteriores + (patrimonioPartilhavel / 2);
        parteConjuge = patrimonioPartilhavel / 2;
        break;
      
      default:
        patrimonioPartilhavel = bens - debit;
        suaParte = patrimonioPartilhavel / 2;
        parteConjuge = patrimonioPartilhavel / 2;
    }

    setTimeout(() => {
      setResult({
        total: Math.max(0, suaParte),
        items: [
          { label: "Total de Bens Informado", value: bens, description: "Valor total dos bens do casal" },
          { label: "Dívidas a Descontar", value: debit, description: "Dívidas comuns do casal" },
          { label: "Bens Anteriores (seus)", value: anteriores, description: "Não entram na partilha" },
          { label: "Patrimônio a Partilhar", value: Math.max(0, patrimonioPartilhavel), description: "Valor a ser dividido" },
          { label: "Sua Parte Estimada", value: Math.max(0, suaParte), description: "Valor que você deve receber" },
          { label: "Parte do Cônjuge", value: Math.max(0, parteConjuge), description: "Valor que o cônjuge deve receber" },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = regime && parseValue(valorBens) > 0;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora de Partilha de Bens</h2>
            <p className="text-sm text-muted-foreground">Estimativa para divórcio</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Regime de Bens</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">O regime define como os bens serão divididos</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={regime} onValueChange={setRegime}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o regime" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comunhao_parcial">Comunhão Parcial (mais comum)</SelectItem>
                <SelectItem value="comunhao_universal">Comunhão Universal</SelectItem>
                <SelectItem value="separacao_total">Separação Total</SelectItem>
                <SelectItem value="participacao_final">Participação Final nos Aquestos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CalculatorInput
            id="bens"
            label="Valor Total dos Bens"
            value={valorBens}
            onChange={setValorBens}
            placeholder="R$ 0,00"
            tooltip="Soma de todos os bens do casal (imóveis, veículos, investimentos)"
            type="currency"
          />

          <CalculatorInput
            id="dividas"
            label="Dívidas Comuns"
            value={dividas}
            onChange={setDividas}
            placeholder="R$ 0,00"
            tooltip="Dívidas contraídas durante o casamento"
            type="currency"
          />

          <CalculatorInput
            id="anteriores"
            label="Seus Bens Anteriores ao Casamento"
            value={bensAnteriores}
            onChange={setBensAnteriores}
            placeholder="R$ 0,00"
            tooltip="Bens que você já tinha antes de casar"
            type="currency"
          />

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full"
            size="lg"
          >
            {isCalculating ? "Calculando..." : "Calcular Partilha"}
          </Button>
        </div>

        {result && (
          <div className="mt-6">
            <CalculatorResult
              total={result.total}
              items={result.items}
              specialty="familia"
              calculatorType="partilha-bens"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-muted/30 border-dashed">
          <h3 className="font-semibold mb-2 text-sm">💍 Regimes de Bens</h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• <strong>Comunhão Parcial:</strong> Divide só o que foi adquirido durante o casamento</li>
            <li>• <strong>Comunhão Universal:</strong> Divide todos os bens</li>
            <li>• <strong>Separação Total:</strong> Cada um fica com o que é seu</li>
          </ul>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default AssetDivisionCalculator;
