import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Receipt, Info, FileWarning } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const DevolucaoEmDobroCalculator = () => {
  const [valorCobrado, setValorCobrado] = useState<string>("");
  const [tipoCobranca, setTipoCobranca] = useState<string>("");
  const [duracaoProblema, setDuracaoProblema] = useState<string>("");
  const [temReclamacao, setTemReclamacao] = useState(false);
  const [houveConstrangimento, setHouveConstrangimento] = useState(false);
  const [cobrancaJudicial, setCobrancaJudicial] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseValue = (val: string) => {
    const cleaned = val.replace(/[^\d,]/g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    const valor = parseValue(valorCobrado);
    
    // Devolução em dobro - Art. 42 do CDC
    const devolucaoEmDobro = valor * 2;
    
    // Danos morais base por tipo de cobrança
    let danosMoraisBase = 0;
    switch (tipoCobranca) {
      case "fatura-cartao":
        danosMoraisBase = 3000;
        break;
      case "conta-telefone":
        danosMoraisBase = 2500;
        break;
      case "conta-energia-agua":
        danosMoraisBase = 3000;
        break;
      case "emprestimo":
        danosMoraisBase = 4000;
        break;
      case "assinatura":
        danosMoraisBase = 2000;
        break;
      case "outro":
        danosMoraisBase = 2500;
        break;
      default:
        danosMoraisBase = 2500;
    }

    // Multiplicador por duração
    let multiplicador = 1;
    switch (duracaoProblema) {
      case "menos-1-mes":
        multiplicador = 0.7;
        break;
      case "1-3-meses":
        multiplicador = 1.0;
        break;
      case "3-6-meses":
        multiplicador = 1.3;
        break;
      case "6-12-meses":
        multiplicador = 1.5;
        break;
      case "mais-1-ano":
        multiplicador = 1.8;
        break;
      default:
        multiplicador = 1.0;
    }

    // Fatores adicionais
    let adicional = 0;
    if (temReclamacao) adicional += 1500;
    if (houveConstrangimento) adicional += 2000;
    if (cobrancaJudicial) adicional += 3000;

    const danosMoraisTotal = Math.round((danosMoraisBase * multiplicador) + adicional);
    const valorFinal = Math.round(devolucaoEmDobro + danosMoraisTotal);
    const valorMinimo = Math.round(valorFinal * 0.6);
    const valorMaximo = Math.round(valorFinal * 1.5);

    setTimeout(() => {
      setResult({
        total: valorFinal,
        items: [
          { 
            label: "Devolução em Dobro (Art. 42 CDC)", 
            value: devolucaoEmDobro, 
            description: `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} x 2` 
          },
          { 
            label: "Danos Morais Estimados", 
            value: danosMoraisTotal, 
            description: `Base + agravantes (multiplicador ${multiplicador.toFixed(1)}x)` 
          },
          { 
            label: "Estimativa Mínima", 
            value: valorMinimo, 
            description: "Valor conservador (Juizado)" 
          },
          { 
            label: "Estimativa Máxima", 
            value: valorMaximo, 
            description: "Com bom advogado" 
          },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = valorCobrado && tipoCobranca && duracaoProblema;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
            <Receipt className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora de Devolução em Dobro</h2>
            <p className="text-sm text-muted-foreground">Cobrança indevida (Art. 42 CDC)</p>
          </div>
        </div>

        <div className="space-y-5">
          <CalculatorInput
            id="valorCobrado"
            label="Valor cobrado indevidamente"
            value={valorCobrado}
            onChange={setValorCobrado}
            placeholder="R$ 0,00"
            type="currency"
            tooltip="O valor que foi cobrado de forma indevida"
          />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Tipo de cobrança indevida</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Selecione o tipo de serviço que gerou a cobrança</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={tipoCobranca} onValueChange={setTipoCobranca}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fatura-cartao">Fatura de Cartão de Crédito</SelectItem>
                <SelectItem value="conta-telefone">Conta de Telefone/Internet</SelectItem>
                <SelectItem value="conta-energia-agua">Conta de Energia/Água/Gás</SelectItem>
                <SelectItem value="emprestimo">Empréstimo/Financiamento</SelectItem>
                <SelectItem value="assinatura">Assinatura/Mensalidade</SelectItem>
                <SelectItem value="outro">Outro Serviço</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Há quanto tempo vem sendo cobrado?</Label>
            </div>
            <Select value={duracaoProblema} onValueChange={setDuracaoProblema}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="menos-1-mes">Menos de 1 mês</SelectItem>
                <SelectItem value="1-3-meses">1 a 3 meses</SelectItem>
                <SelectItem value="3-6-meses">3 a 6 meses</SelectItem>
                <SelectItem value="6-12-meses">6 meses a 1 ano</SelectItem>
                <SelectItem value="mais-1-ano">Mais de 1 ano</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 pt-2">
            <Label className="text-sm font-medium">Agravantes (marque se aplicável)</Label>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="reclamacao" 
                checked={temReclamacao}
                onCheckedChange={(checked) => setTemReclamacao(checked as boolean)}
              />
              <label htmlFor="reclamacao" className="text-sm cursor-pointer">
                Já reclamei na empresa e não resolveram
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="constrangimento" 
                checked={houveConstrangimento}
                onCheckedChange={(checked) => setHouveConstrangimento(checked as boolean)}
              />
              <label htmlFor="constrangimento" className="text-sm cursor-pointer">
                Tive serviço cortado ou constrangimento
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="judicial" 
                checked={cobrancaJudicial}
                onCheckedChange={(checked) => setCobrancaJudicial(checked as boolean)}
              />
              <label htmlFor="judicial" className="text-sm cursor-pointer">
                Fui cobrado judicialmente ou protestado
              </label>
            </div>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full bg-orange-500 hover:bg-orange-600"
            size="lg"
          >
            {isCalculating ? "Calculando..." : "Calcular Minha Indenização"}
          </Button>
        </div>

        {result && (
          <div className="mt-6">
            <CalculatorResult
              total={result.total}
              items={result.items}
              specialty="consumidor"
              calculatorType="devolucao-dobro"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-orange-500/5 border-orange-500/20">
          <h3 className="font-semibold mb-2 text-sm flex items-center gap-2">
            <FileWarning className="w-4 h-4 text-orange-500" />
            O que diz a lei?
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            <strong>Art. 42, parágrafo único do CDC:</strong> "O consumidor cobrado em quantia indevida 
            tem direito à repetição do indébito, por valor igual ao dobro do que pagou em excesso."
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Comprovante de pagamento da cobrança indevida</li>
            <li>• Faturas mostrando a cobrança</li>
            <li>• Protocolos de reclamação na empresa</li>
            <li>• Prints de tentativas de cancelamento</li>
          </ul>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default DevolucaoEmDobroCalculator;
