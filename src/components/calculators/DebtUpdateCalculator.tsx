import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TrendingUp, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const DebtUpdateCalculator = () => {
  const [valorOriginal, setValorOriginal] = useState<string>("");
  const [mesesAtraso, setMesesAtraso] = useState<string>("");
  const [indice, setIndice] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseValue = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return parseFloat(numbers) / 100 || 0;
  };

  const parseNumber = (value: string) => parseInt(value.replace(/\D/g, "")) || 0;

  const handleCalculate = () => {
    setIsCalculating(true);

    const valor = parseValue(valorOriginal);
    const meses = parseNumber(mesesAtraso);

    // Taxas mensais aproximadas por índice
    const taxasIndice: Record<string, number> = {
      "inpc": 0.004, // ~0.4% ao mês
      "ipca": 0.0035, // ~0.35% ao mês
      "igpm": 0.005, // ~0.5% ao mês
      "selic": 0.0085, // ~0.85% ao mês
    };

    const taxaCorrecao = taxasIndice[indice] || 0.004;
    const jurosMoratorios = 0.01; // 1% ao mês (padrão legal)
    const multaMora = 0.02; // 2% (multa única)

    // Cálculo da correção monetária (juros compostos)
    const correcaoMonetaria = valor * (Math.pow(1 + taxaCorrecao, meses) - 1);
    
    // Cálculo dos juros de mora (juros simples)
    const juros = valor * jurosMoratorios * meses;
    
    // Multa de mora (2% sobre o valor original)
    const multa = valor * multaMora;

    const total = valor + correcaoMonetaria + juros + multa;

    setTimeout(() => {
      setResult({
        total: total,
        items: [
          { label: "Valor Original", value: valor, description: "Dívida na data de vencimento" },
          { label: "Correção Monetária", value: correcaoMonetaria, description: `Atualização pelo ${indice.toUpperCase()}` },
          { label: "Juros de Mora (1% a.m.)", value: juros, description: `${meses} meses de juros` },
          { label: "Multa de Mora (2%)", value: multa, description: "Multa única por atraso" },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = parseValue(valorOriginal) > 0 && parseNumber(mesesAtraso) > 0 && indice;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora de Atualização de Dívida</h2>
            <p className="text-sm text-muted-foreground">Corrija valores em atraso</p>
          </div>
        </div>

        <div className="space-y-5">
          <CalculatorInput
            id="valor"
            label="Valor Original da Dívida"
            value={valorOriginal}
            onChange={setValorOriginal}
            placeholder="R$ 0,00"
            tooltip="Valor da dívida na data de vencimento"
            type="currency"
          />

          <CalculatorInput
            id="meses"
            label="Meses em Atraso"
            value={mesesAtraso}
            onChange={setMesesAtraso}
            placeholder="Ex: 12"
            tooltip="Quantos meses se passaram desde o vencimento"
            type="number"
            min={1}
            max={240}
          />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Índice de Correção</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Índice utilizado para atualizar o valor da dívida</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={indice} onValueChange={setIndice}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o índice" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inpc">INPC (mais comum em ações)</SelectItem>
                <SelectItem value="ipca">IPCA (inflação oficial)</SelectItem>
                <SelectItem value="igpm">IGP-M (contratos antigos)</SelectItem>
                <SelectItem value="selic">SELIC (dívidas fiscais)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full"
            size="lg"
          >
            {isCalculating ? "Calculando..." : "Atualizar Dívida"}
          </Button>
        </div>

        {result && (
          <div className="mt-6">
            <CalculatorResult
              total={result.total}
              items={result.items}
              specialty="trabalhista"
              calculatorType="atualizacao-divida"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-muted/30 border-dashed">
          <h3 className="font-semibold mb-2 text-sm">📊 Índices de Correção</h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• <strong>INPC:</strong> Usado na Justiça do Trabalho</li>
            <li>• <strong>IPCA:</strong> Índice oficial de inflação</li>
            <li>• <strong>IGP-M:</strong> Comum em aluguéis antigos</li>
            <li>• <strong>SELIC:</strong> Para dívidas com o governo</li>
          </ul>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default DebtUpdateCalculator;
