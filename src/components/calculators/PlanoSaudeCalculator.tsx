import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { HeartPulse, Info, FileWarning, AlertTriangle } from "lucide-react";
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

const PlanoSaudeCalculator = () => {
  const [tipoNegativa, setTipoNegativa] = useState<string>("");
  const [valorProcedimento, setValorProcedimento] = useState<string>("");
  const [urgencia, setUrgencia] = useState<string>("");
  const [tempoEspera, setTempoEspera] = useState<string>("");
  const [piora, setPiora] = useState(false);
  const [pagouParticular, setPagouParticular] = useState(false);
  const [cancelouPlano, setCancelouPlano] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseValue = (val: string) => {
    const cleaned = val.replace(/[^\d,]/g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    const valor = parseValue(valorProcedimento);
    
    // Danos morais base por tipo de negativa
    let danosMoraisBase = 0;
    switch (tipoNegativa) {
      case "cirurgia":
        danosMoraisBase = 12000;
        break;
      case "internacao":
        danosMoraisBase = 15000;
        break;
      case "exame":
        danosMoraisBase = 5000;
        break;
      case "medicamento":
        danosMoraisBase = 8000;
        break;
      case "terapia":
        danosMoraisBase = 6000;
        break;
      case "home-care":
        danosMoraisBase = 10000;
        break;
      case "oncologia":
        danosMoraisBase = 20000;
        break;
      default:
        danosMoraisBase = 8000;
    }

    // Multiplicador por urgência
    let multiplicador = 1;
    switch (urgencia) {
      case "eletivo":
        multiplicador = 0.8;
        break;
      case "necessario":
        multiplicador = 1.0;
        break;
      case "urgente":
        multiplicador = 1.5;
        break;
      case "emergencia":
        multiplicador = 2.0;
        break;
      default:
        multiplicador = 1.0;
    }

    // Tempo de espera
    let adicionalTempo = 0;
    switch (tempoEspera) {
      case "dias":
        adicionalTempo = 1000;
        break;
      case "semanas":
        adicionalTempo = 2500;
        break;
      case "meses":
        adicionalTempo = 5000;
        break;
      case "ainda-esperando":
        adicionalTempo = 7000;
        break;
      default:
        adicionalTempo = 0;
    }

    // Fatores adicionais
    let adicional = adicionalTempo;
    if (piora) adicional += 5000;
    if (pagouParticular) adicional += valor; // Reembolso
    if (cancelouPlano) adicional += 3000;

    const danosMoraisTotal = Math.round((danosMoraisBase * multiplicador) + adicional);
    const valorFinal = danosMoraisTotal;
    const valorMinimo = Math.round(valorFinal * 0.6);
    const valorMaximo = Math.round(valorFinal * 1.5);

    setTimeout(() => {
      setResult({
        total: valorFinal,
        items: [
          { 
            label: "Danos Morais por Negativa", 
            value: Math.round(danosMoraisBase * multiplicador), 
            description: `Base ${tipoNegativa || 'procedimento'} + urgência` 
          },
          { 
            label: "Agravantes", 
            value: adicional, 
            description: [
              piora && "Piora quadro",
              pagouParticular && "Pagou particular",
              cancelouPlano && "Cancelou plano",
              tempoEspera && "Tempo de espera"
            ].filter(Boolean).join(", ") || "Nenhum"
          },
          { 
            label: "Estimativa Mínima", 
            value: valorMinimo, 
            description: "Valor conservador" 
          },
          { 
            label: "Estimativa Máxima", 
            value: valorMaximo, 
            description: "Com bom advogado + liminar" 
          },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = tipoNegativa && urgencia;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
            <HeartPulse className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora Plano de Saúde</h2>
            <p className="text-sm text-muted-foreground">Negativa de cobertura</p>
          </div>
        </div>

        <Card className="mb-6 p-4 bg-rose-500/10 border-rose-500/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-rose-700 dark:text-rose-300">Situação de urgência?</p>
              <p className="text-xs text-muted-foreground">
                Se seu caso é urgente, é possível conseguir uma liminar judicial em até 48h 
                obrigando o plano a cobrir o procedimento.
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>O que o plano negou?</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Selecione o tipo de procedimento negado</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={tipoNegativa} onValueChange={setTipoNegativa}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cirurgia">Cirurgia</SelectItem>
                <SelectItem value="internacao">Internação</SelectItem>
                <SelectItem value="exame">Exame/Diagnóstico</SelectItem>
                <SelectItem value="medicamento">Medicamento</SelectItem>
                <SelectItem value="terapia">Terapia (Psicólogo, Fisio, etc)</SelectItem>
                <SelectItem value="home-care">Home Care</SelectItem>
                <SelectItem value="oncologia">Tratamento Oncológico</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CalculatorInput
            id="valorProcedimento"
            label="Valor do procedimento (se souber)"
            value={valorProcedimento}
            onChange={setValorProcedimento}
            placeholder="R$ 0,00 (opcional)"
            type="currency"
            tooltip="Valor estimado do procedimento negado"
          />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Qual a urgência?</Label>
            </div>
            <Select value={urgencia} onValueChange={setUrgencia}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a urgência" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eletivo">Eletivo (pode aguardar)</SelectItem>
                <SelectItem value="necessario">Necessário (precisa fazer)</SelectItem>
                <SelectItem value="urgente">Urgente (risco se demorar)</SelectItem>
                <SelectItem value="emergencia">Emergência (risco de vida)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Tempo de espera até agora</Label>
            </div>
            <Select value={tempoEspera} onValueChange={setTempoEspera}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tempo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dias">Alguns dias</SelectItem>
                <SelectItem value="semanas">Algumas semanas</SelectItem>
                <SelectItem value="meses">Meses</SelectItem>
                <SelectItem value="ainda-esperando">Ainda estou esperando</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 pt-2">
            <Label className="text-sm font-medium">Agravantes (marque se aplicável)</Label>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="piora" 
                checked={piora}
                onCheckedChange={(checked) => setPiora(checked as boolean)}
              />
              <label htmlFor="piora" className="text-sm cursor-pointer">
                Meu quadro de saúde piorou por causa da demora
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="particular" 
                checked={pagouParticular}
                onCheckedChange={(checked) => setPagouParticular(checked as boolean)}
              />
              <label htmlFor="particular" className="text-sm cursor-pointer">
                Tive que pagar o procedimento particular
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="cancelou" 
                checked={cancelouPlano}
                onCheckedChange={(checked) => setCancelouPlano(checked as boolean)}
              />
              <label htmlFor="cancelou" className="text-sm cursor-pointer">
                O plano cancelou meu contrato
              </label>
            </div>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full bg-rose-500 hover:bg-rose-600"
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
              calculatorType="plano-saude"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-rose-500/5 border-rose-500/20">
          <h3 className="font-semibold mb-2 text-sm flex items-center gap-2">
            <FileWarning className="w-4 h-4 text-rose-500" />
            Documentos Importantes
          </h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Negativa por escrito do plano de saúde</li>
            <li>• Pedido médico do procedimento</li>
            <li>• Contrato do plano de saúde</li>
            <li>• Comprovantes de pagamento das mensalidades</li>
            <li>• Prontuário médico (se possível)</li>
            <li>• Protocolo de reclamação na ANS</li>
          </ul>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default PlanoSaudeCalculator;
