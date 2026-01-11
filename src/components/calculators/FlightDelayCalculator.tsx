import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plane, Info, AlertTriangle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const FlightDelayCalculator = () => {
  const [tipoProblema, setTipoProblema] = useState<string>("");
  const [tempoAtraso, setTempoAtraso] = useState<string>("");
  const [tipoVoo, setTipoVoo] = useState<string>("");
  const [perdeuCompromisso, setPerdeuCompromisso] = useState(false);
  const [perdeuBagagem, setPerdeuBagagem] = useState(false);
  const [semAssistencia, setSemAssistencia] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    setIsCalculating(true);

    // Base values based on jurisprudence
    let valorBase = 0;
    let multiplicador = 1;

    // Problem type base value
    switch (tipoProblema) {
      case "cancelado":
        valorBase = 5000;
        break;
      case "atrasado":
        valorBase = 3000;
        break;
      case "overbooking":
        valorBase = 6000;
        break;
      case "alteracao":
        valorBase = 2500;
        break;
      default:
        valorBase = 3000;
    }

    // Delay time multiplier
    switch (tempoAtraso) {
      case "1-2h":
        multiplicador = 0.5;
        break;
      case "2-4h":
        multiplicador = 0.8;
        break;
      case "4-8h":
        multiplicador = 1.0;
        break;
      case "8-12h":
        multiplicador = 1.3;
        break;
      case "12-24h":
        multiplicador = 1.6;
        break;
      case "24h+":
        multiplicador = 2.0;
        break;
      default:
        multiplicador = 1.0;
    }

    // Flight type multiplier
    if (tipoVoo === "internacional") {
      multiplicador *= 1.3;
    }

    // Additional factors
    let adicional = 0;
    if (perdeuCompromisso) adicional += 2000;
    if (perdeuBagagem) adicional += 3000;
    if (semAssistencia) adicional += 1500;

    const valorFinal = Math.round((valorBase * multiplicador) + adicional);
    const valorMinimo = Math.round(valorFinal * 0.7);
    const valorMaximo = Math.round(valorFinal * 1.5);

    setTimeout(() => {
      setResult({
        total: valorFinal,
        items: [
          { 
            label: "Tipo de Problema", 
            value: valorBase, 
            description: tipoProblema === "cancelado" ? "Voo Cancelado" : 
                         tipoProblema === "atrasado" ? "Voo Atrasado" :
                         tipoProblema === "overbooking" ? "Overbooking" : "Alteração de Voo"
          },
          { 
            label: "Tempo de Atraso/Espera", 
            value: Math.round(valorBase * (multiplicador - 1)), 
            description: `Multiplicador: ${multiplicador.toFixed(1)}x` 
          },
          { 
            label: "Agravantes", 
            value: adicional, 
            description: [
              perdeuCompromisso && "Compromisso perdido",
              perdeuBagagem && "Bagagem extraviada",
              semAssistencia && "Sem assistência"
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
            description: "Com bom advogado" 
          },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = tipoProblema && tempoAtraso && tipoVoo;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora de Indenização</h2>
            <p className="text-sm text-muted-foreground">Voo cancelado, atrasado ou overbooking</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Qual foi o problema?</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Selecione o tipo de problema que você enfrentou</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={tipoProblema} onValueChange={setTipoProblema}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o problema" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cancelado">Voo Cancelado</SelectItem>
                <SelectItem value="atrasado">Voo Atrasado</SelectItem>
                <SelectItem value="overbooking">Overbooking (Impedido de embarcar)</SelectItem>
                <SelectItem value="alteracao">Alteração de Voo sem Aviso</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Quanto tempo de atraso/espera?</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Tempo entre o horário previsto e a chegada real</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={tempoAtraso} onValueChange={setTempoAtraso}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tempo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-2h">1 a 2 horas</SelectItem>
                <SelectItem value="2-4h">2 a 4 horas</SelectItem>
                <SelectItem value="4-8h">4 a 8 horas</SelectItem>
                <SelectItem value="8-12h">8 a 12 horas</SelectItem>
                <SelectItem value="12-24h">12 a 24 horas</SelectItem>
                <SelectItem value="24h+">Mais de 24 horas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Tipo de voo</Label>
            </div>
            <Select value={tipoVoo} onValueChange={setTipoVoo}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nacional">Voo Nacional</SelectItem>
                <SelectItem value="internacional">Voo Internacional</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 pt-2">
            <Label className="text-sm font-medium">Agravantes (marque se aplicável)</Label>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="compromisso" 
                checked={perdeuCompromisso}
                onCheckedChange={(checked) => setPerdeuCompromisso(checked as boolean)}
              />
              <label htmlFor="compromisso" className="text-sm cursor-pointer">
                Perdi compromisso importante (reunião, evento, conexão)
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="bagagem" 
                checked={perdeuBagagem}
                onCheckedChange={(checked) => setPerdeuBagagem(checked as boolean)}
              />
              <label htmlFor="bagagem" className="text-sm cursor-pointer">
                Bagagem extraviada ou danificada
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="assistencia" 
                checked={semAssistencia}
                onCheckedChange={(checked) => setSemAssistencia(checked as boolean)}
              />
              <label htmlFor="assistencia" className="text-sm cursor-pointer">
                Não recebi assistência da companhia (alimentação, hotel)
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
              calculatorType="voo-cancelado"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-orange-500/5 border-orange-500/20">
          <h3 className="font-semibold mb-2 text-sm flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            Documentos Importantes
          </h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Cartão de embarque e bilhete eletrônico</li>
            <li>• E-mails de confirmação e notificações da companhia</li>
            <li>• Fotos do painel de voos mostrando o atraso/cancelamento</li>
            <li>• Comprovantes de gastos extras (alimentação, transporte, hotel)</li>
          </ul>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default FlightDelayCalculator;
