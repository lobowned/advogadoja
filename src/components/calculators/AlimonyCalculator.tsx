import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator } from "lucide-react";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const AlimonyCalculator = () => {
  const [rendaMensal, setRendaMensal] = useState("");
  const [tipoRenda, setTipoRenda] = useState("");
  const [numeroFilhos, setNumeroFilhos] = useState("1");
  const [custosEspeciais, setCustosEspeciais] = useState(false);
  const [valorCustosEspeciais, setValorCustosEspeciais] = useState("");
  const [situacaoAlimentante, setSituacaoAlimentante] = useState("");
  
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const parseValue = (val: string) => parseInt(val || "0", 10) / 100;
  const parseNumber = (val: string) => parseInt(val || "1", 10);

  const handleCalculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const rendaBruta = parseValue(rendaMensal);
      const filhos = parseNumber(numeroFilhos);
      const custosEspeciaisValor = parseValue(valorCustosEspeciais);

      const items: { label: string; value: number; description?: string }[] = [];

      // Cálculo da renda líquida estimada
      let descontoEstimado = 0.15; // 15% base para impostos e INSS
      if (tipoRenda === "clt") {
        descontoEstimado = 0.20; // CLT tem mais descontos
      } else if (tipoRenda === "autonomo") {
        descontoEstimado = 0.12;
      } else if (tipoRenda === "empresario") {
        descontoEstimado = 0.10;
      }

      const rendaLiquida = rendaBruta * (1 - descontoEstimado);
      
      // Percentual base conforme número de filhos
      // 1 filho: 30%, 2 filhos: 35%, 3+ filhos: 40% (máx 50%)
      let percentualBase = 0.30;
      if (filhos === 2) {
        percentualBase = 0.35;
      } else if (filhos >= 3) {
        percentualBase = Math.min(0.50, 0.30 + (filhos - 1) * 0.05);
      }

      // Ajuste por situação do alimentante
      if (situacaoAlimentante === "empregado-estavel") {
        // Mantém percentual base
      } else if (situacaoAlimentante === "autonomo-irregular") {
        percentualBase *= 1.1; // 10% a mais pela irregularidade
      } else if (situacaoAlimentante === "empresario") {
        percentualBase *= 1.15; // Pode-se buscar mais
      }

      // Valor base da pensão
      const pensaoBase = rendaLiquida * percentualBase;
      items.push({ 
        label: "Pensão Base", 
        value: pensaoBase,
        description: `${(percentualBase * 100).toFixed(0)}% da renda líquida estimada`
      });

      // Divisão por filho
      const pensaoPorFilho = pensaoBase / filhos;
      if (filhos > 1) {
        items.push({ 
          label: `Valor por Filho (${filhos} filhos)`, 
          value: pensaoPorFilho,
          description: "Divisão igualitária"
        });
      }

      // Custos especiais (saúde, educação)
      if (custosEspeciais && custosEspeciaisValor > 0) {
        const acrescimoCustos = custosEspeciaisValor * 0.5; // 50% para cada genitor
        items.push({ 
          label: "Custos Especiais (sua parte)", 
          value: acrescimoCustos,
          description: "50% de saúde, educação e extras"
        });
      }

      // Cálculo do total
      const total = items.reduce((acc, item) => acc + item.value, 0);

      // Adicionar informações extras
      items.push({ 
        label: "Valor Anual Estimado", 
        value: total * 12,
        description: "Projeção para 12 meses"
      });

      // Adicionar 13ª pensão
      items.push({ 
        label: "13ª Pensão (adicional)", 
        value: pensaoBase,
        description: "Equivalente a 1 mês adicional"
      });

      const totalFinal = total + (pensaoBase / 12); // Diluir 13ª no mês

      setResult({ total: totalFinal, items: items.slice(0, -2).concat([
        { label: "Valor Mensal Total", value: totalFinal, description: "Incluindo proporção do 13º" }
      ]) });
      setIsCalculating(false);
    }, 500);
  };

  const isFormValid = rendaMensal && tipoRenda && numeroFilhos;

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <CalculatorInput
            id="rendaMensal"
            label="Renda Mensal do Alimentante"
            value={rendaMensal}
            onChange={setRendaMensal}
            placeholder="R$ 0,00"
            tooltip="Renda bruta mensal de quem vai pagar a pensão"
            type="currency"
          />

          <div className="space-y-2">
            <Label>Tipo de Renda</Label>
            <Select value={tipoRenda} onValueChange={setTipoRenda}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clt">CLT (Carteira Assinada)</SelectItem>
                <SelectItem value="autonomo">Autônomo</SelectItem>
                <SelectItem value="empresario">Empresário/Sócio</SelectItem>
                <SelectItem value="servidor">Servidor Público</SelectItem>
                <SelectItem value="desempregado">Desempregado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Número de Filhos</Label>
            <Select value={numeroFilhos} onValueChange={setNumeroFilhos}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 filho</SelectItem>
                <SelectItem value="2">2 filhos</SelectItem>
                <SelectItem value="3">3 filhos</SelectItem>
                <SelectItem value="4">4 ou mais filhos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Situação do Alimentante</Label>
            <Select value={situacaoAlimentante} onValueChange={setSituacaoAlimentante}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="empregado-estavel">Empregado Estável</SelectItem>
                <SelectItem value="autonomo-irregular">Autônomo/Renda Irregular</SelectItem>
                <SelectItem value="empresario">Empresário/Patrimônio</SelectItem>
                <SelectItem value="desconhecida">Situação Desconhecida</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <Checkbox 
                id="custosEspeciais" 
                checked={custosEspeciais}
                onCheckedChange={(checked) => setCustosEspeciais(checked === true)}
              />
              <Label htmlFor="custosEspeciais" className="text-sm font-normal cursor-pointer">
                Há custos especiais (escola particular, plano de saúde, tratamentos)?
              </Label>
            </div>
            
            {custosEspeciais && (
              <CalculatorInput
                id="valorCustosEspeciais"
                label="Valor Total dos Custos Especiais"
                value={valorCustosEspeciais}
                onChange={setValorCustosEspeciais}
                placeholder="R$ 0,00"
                tooltip="Some todos os custos especiais mensais (escola, saúde, etc.)"
                type="currency"
              />
            )}
          </div>
        </div>

        <Button 
          onClick={handleCalculate}
          disabled={!isFormValid || isCalculating}
          className="w-full mt-6 gap-2"
          size="lg"
        >
          <Calculator className="w-4 h-4" />
          {isCalculating ? "Calculando..." : "Calcular Pensão Estimada"}
        </Button>

        <CalculatorDisclaimer />
      </Card>

      {result && (
        <CalculatorResult
          total={result.total}
          items={result.items}
          specialty="familia"
          calculatorType="alimony-calculator"
        />
      )}

      <Card className="p-6 bg-muted/30">
        <h3 className="font-semibold mb-3">Como a pensão alimentícia é calculada?</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• O percentual padrão varia entre 30% a 50% da renda líquida</li>
          <li>• Considera-se as necessidades do alimentando e possibilidades do alimentante</li>
          <li>• Custos de educação e saúde podem ser cobrados separadamente</li>
          <li>• O valor pode ser revisto quando há mudança na situação financeira</li>
          <li>• Existe a possibilidade de pensão in natura (pagamento direto de despesas)</li>
        </ul>
      </Card>
    </div>
  );
};

export default AlimonyCalculator;
