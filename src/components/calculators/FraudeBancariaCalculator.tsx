import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Shield, Info, FileWarning } from "lucide-react";
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

const FraudeBancariaCalculator = () => {
  const [tipoFraude, setTipoFraude] = useState<string>("");
  const [valorPerdido, setValorPerdido] = useState<string>("");
  const [bancoResolveu, setBancoResolveu] = useState<string>("");
  const [negativou, setNegativou] = useState(false);
  const [temBO, setTemBO] = useState(false);
  const [reclamouBanco, setReclamouBanco] = useState(false);
  const [perdeAcesso, setPerdeAcesso] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseValue = (val: string) => {
    const cleaned = val.replace(/[^\d,]/g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    const valor = parseValue(valorPerdido);
    
    // Valor material (valor perdido)
    const valorMaterial = valor;
    
    // Danos morais base por tipo de fraude
    let danosMoraisBase = 0;
    switch (tipoFraude) {
      case "pix":
        danosMoraisBase = 6000;
        break;
      case "cartao-clonado":
        danosMoraisBase = 5000;
        break;
      case "emprestimo-fraude":
        danosMoraisBase = 10000;
        break;
      case "conta-aberta":
        danosMoraisBase = 8000;
        break;
      case "golpe-whatsapp":
        danosMoraisBase = 4000;
        break;
      case "phishing":
        danosMoraisBase = 5000;
        break;
      default:
        danosMoraisBase = 5000;
    }

    // Multiplicador baseado na resposta do banco
    let multiplicador = 1;
    switch (bancoResolveu) {
      case "resolveu-total":
        multiplicador = 0.5;
        break;
      case "resolveu-parcial":
        multiplicador = 0.8;
        break;
      case "nao-resolveu":
        multiplicador = 1.2;
        break;
      case "negou":
        multiplicador = 1.5;
        break;
      default:
        multiplicador = 1.0;
    }

    // Fatores adicionais
    let adicional = 0;
    if (negativou) adicional += 5000;
    if (temBO) adicional += 1000; // Prova documental
    if (reclamouBanco) adicional += 1500;
    if (perdeAcesso) adicional += 2000;

    const danosMoraisTotal = Math.round((danosMoraisBase * multiplicador) + adicional);
    
    // Juros estimados (1% a.m. por 6 meses em média)
    const jurosEstimados = Math.round(valorMaterial * 0.06);
    
    const valorFinal = Math.round(valorMaterial + danosMoraisTotal + jurosEstimados);
    const valorMinimo = Math.round(valorFinal * 0.6);
    const valorMaximo = Math.round(valorFinal * 1.5);

    setTimeout(() => {
      setResult({
        total: valorFinal,
        items: [
          { 
            label: "Valor Perdido (Dano Material)", 
            value: valorMaterial, 
            description: "Restituição do valor fraudado" 
          },
          { 
            label: "Danos Morais Estimados", 
            value: danosMoraisTotal, 
            description: `Tipo fraude + resposta banco + agravantes` 
          },
          { 
            label: "Juros/Correção (estimativa)", 
            value: jurosEstimados, 
            description: "~1% a.m. desde o evento" 
          },
          { 
            label: "Estimativa Mínima", 
            value: valorMinimo, 
            description: "Valor conservador" 
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

  const isValid = tipoFraude && valorPerdido && bancoResolveu;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora de Fraude Bancária</h2>
            <p className="text-sm text-muted-foreground">PIX, cartão clonado, golpes</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Qual tipo de fraude?</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Selecione o tipo de golpe ou fraude que sofreu</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={tipoFraude} onValueChange={setTipoFraude}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pix">Golpe do PIX</SelectItem>
                <SelectItem value="cartao-clonado">Cartão Clonado</SelectItem>
                <SelectItem value="emprestimo-fraude">Empréstimo não contratado</SelectItem>
                <SelectItem value="conta-aberta">Conta aberta em meu nome</SelectItem>
                <SelectItem value="golpe-whatsapp">Golpe do WhatsApp</SelectItem>
                <SelectItem value="phishing">Phishing (site/app falso)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CalculatorInput
            id="valorPerdido"
            label="Valor perdido/fraudado"
            value={valorPerdido}
            onChange={setValorPerdido}
            placeholder="R$ 0,00"
            type="currency"
            tooltip="O valor total que foi subtraído da sua conta"
          />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>O banco resolveu?</Label>
            </div>
            <Select value={bancoResolveu} onValueChange={setBancoResolveu}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="resolveu-total">Sim, devolveu tudo</SelectItem>
                <SelectItem value="resolveu-parcial">Sim, mas só parte</SelectItem>
                <SelectItem value="nao-resolveu">Ainda estou aguardando</SelectItem>
                <SelectItem value="negou">Negou a devolução</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 pt-2">
            <Label className="text-sm font-medium">Agravantes (marque se aplicável)</Label>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="negativou" 
                checked={negativou}
                onCheckedChange={(checked) => setNegativou(checked as boolean)}
              />
              <label htmlFor="negativou" className="text-sm cursor-pointer">
                Fui negativado por causa da fraude
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="bo" 
                checked={temBO}
                onCheckedChange={(checked) => setTemBO(checked as boolean)}
              />
              <label htmlFor="bo" className="text-sm cursor-pointer">
                Fiz Boletim de Ocorrência
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="reclamou" 
                checked={reclamouBanco}
                onCheckedChange={(checked) => setReclamouBanco(checked as boolean)}
              />
              <label htmlFor="reclamou" className="text-sm cursor-pointer">
                Reclamei no banco e tenho protocolo
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="acesso" 
                checked={perdeAcesso}
                onCheckedChange={(checked) => setPerdeAcesso(checked as boolean)}
              />
              <label htmlFor="acesso" className="text-sm cursor-pointer">
                Perdi acesso à conta ou ficou bloqueada
              </label>
            </div>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full bg-blue-500 hover:bg-blue-600"
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
              calculatorType="fraude-bancaria"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-blue-500/5 border-blue-500/20">
          <h3 className="font-semibold mb-2 text-sm flex items-center gap-2">
            <FileWarning className="w-4 h-4 text-blue-500" />
            Documentos Importantes
          </h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Boletim de Ocorrência</li>
            <li>• Extrato bancário mostrando as transações fraudulentas</li>
            <li>• Protocolo de reclamação no banco</li>
            <li>• Print de conversas (em caso de golpe)</li>
            <li>• Resposta do banco à reclamação</li>
            <li>• Comprovante de bloqueio do cartão (se aplicável)</li>
          </ul>
        </Card>

        <Card className="mt-4 p-4 bg-amber-500/5 border-amber-500/20">
          <h3 className="font-semibold mb-2 text-sm">💡 Você sabia?</h3>
          <p className="text-xs text-muted-foreground">
            O banco tem responsabilidade objetiva pela segurança das transações. 
            Isso significa que, mesmo em caso de golpe, o banco pode ser responsabilizado 
            por falha de segurança, conforme entendimento do STJ.
          </p>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default FraudeBancariaCalculator;
