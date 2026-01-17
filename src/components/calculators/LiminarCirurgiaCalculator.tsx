import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Stethoscope, Info, FileWarning, AlertTriangle, Clock, CheckCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const LiminarCirurgiaCalculator = () => {
  const [tipoCirurgia, setTipoCirurgia] = useState<string>("");
  const [urgencia, setUrgencia] = useState<string>("");
  const [tempoNegativa, setTempoNegativa] = useState<string>("");
  const [tipoNegativa, setTipoNegativa] = useState<string>("");
  const [valorCirurgia, setValorCirurgia] = useState<string>("");
  const [piora, setPiora] = useState(false);
  const [pagouParticular, setPagouParticular] = useState(false);
  const [multiplosPlanos, setMultiplosPlanos] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseValue = (val: string) => {
    const cleaned = val.replace(/[^\d,]/g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    const valor = parseValue(valorCirurgia);
    
    // Probabilidade de deferimento base por tipo de cirurgia
    let probDeferimento = 90;
    let danosMoraisBase = 0;
    let tempoEstimadoHoras = 48;
    
    switch (tipoCirurgia) {
      case "bariatrica":
        probDeferimento = 97;
        danosMoraisBase = 15000;
        break;
      case "oncologica":
        probDeferimento = 99;
        danosMoraisBase = 25000;
        tempoEstimadoHoras = 24;
        break;
      case "ortopedica":
        probDeferimento = 95;
        danosMoraisBase = 12000;
        break;
      case "cardiaca":
        probDeferimento = 98;
        danosMoraisBase = 20000;
        tempoEstimadoHoras = 24;
        break;
      case "neurologica":
        probDeferimento = 94;
        danosMoraisBase = 18000;
        break;
      case "oftalmologica":
        probDeferimento = 96;
        danosMoraisBase = 10000;
        break;
      case "plastica-reparadora":
        probDeferimento = 92;
        danosMoraisBase = 12000;
        break;
      case "outra":
        probDeferimento = 90;
        danosMoraisBase = 10000;
        break;
      default:
        danosMoraisBase = 10000;
    }

    // Ajuste por urgência
    switch (urgencia) {
      case "emergencia":
        probDeferimento = Math.min(99, probDeferimento + 5);
        danosMoraisBase *= 1.8;
        tempoEstimadoHoras = Math.min(tempoEstimadoHoras, 24);
        break;
      case "urgente":
        probDeferimento = Math.min(99, probDeferimento + 3);
        danosMoraisBase *= 1.4;
        break;
      case "necessario":
        danosMoraisBase *= 1.0;
        break;
      case "eletivo":
        probDeferimento = Math.max(80, probDeferimento - 5);
        danosMoraisBase *= 0.7;
        tempoEstimadoHoras = 72;
        break;
    }

    // Ajuste por tempo desde a negativa
    let adicionalTempo = 0;
    switch (tempoNegativa) {
      case "hoje":
        tempoEstimadoHoras = Math.min(tempoEstimadoHoras, 24);
        break;
      case "dias":
        adicionalTempo = 2000;
        break;
      case "semanas":
        adicionalTempo = 5000;
        break;
      case "meses":
        adicionalTempo = 8000;
        break;
    }

    // Tipo de negativa
    if (tipoNegativa === "escrita") {
      probDeferimento = Math.min(99, probDeferimento + 2);
    } else if (tipoNegativa === "omissao") {
      adicionalTempo += 3000;
    }

    // Agravantes
    let adicionalAgravantes = 0;
    if (piora) {
      adicionalAgravantes += 8000;
      probDeferimento = Math.min(99, probDeferimento + 3);
    }
    if (pagouParticular && valor > 0) {
      adicionalAgravantes += valor;
    }
    if (multiplosPlanos) {
      adicionalAgravantes += 5000;
    }

    const danosMoraisTotal = Math.round(danosMoraisBase + adicionalTempo + adicionalAgravantes);
    const valorMinimo = Math.round(danosMoraisTotal * 0.6);
    const valorMaximo = Math.round(danosMoraisTotal * 1.5);

    setTimeout(() => {
      setResult({
        total: danosMoraisTotal,
        items: [
          { 
            label: "Probabilidade de Deferimento", 
            value: probDeferimento, 
            description: `${probDeferimento}% de chance` 
          },
          { 
            label: "Tempo Estimado para Liminar", 
            value: tempoEstimadoHoras, 
            description: `${tempoEstimadoHoras}h em média` 
          },
          { 
            label: "Danos Morais (estimativa)", 
            value: danosMoraisTotal, 
            description: `Entre R$ ${valorMinimo.toLocaleString('pt-BR')} e R$ ${valorMaximo.toLocaleString('pt-BR')}` 
          },
          { 
            label: "Reembolso (se pagou particular)", 
            value: pagouParticular ? valor : 0, 
            description: pagouParticular ? "Valor integral" : "N/A"
          },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = tipoCirurgia && urgencia;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora Liminar Cirurgia</h2>
            <p className="text-sm text-muted-foreground">Cirurgia negada pelo plano</p>
          </div>
        </div>

        <Card className="mb-6 p-4 bg-red-500/10 border-red-500/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Situação de urgência?</p>
              <p className="text-xs text-muted-foreground">
                Em casos de emergência, conseguimos liminar em até 24h. 
                Plantão judicial funciona 24 horas para casos graves.
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Tipo de cirurgia negada</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Cada tipo de cirurgia tem taxa de sucesso diferente</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={tipoCirurgia} onValueChange={setTipoCirurgia}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bariatrica">Bariátrica / Gastroplastia</SelectItem>
                <SelectItem value="oncologica">Oncológica (Câncer)</SelectItem>
                <SelectItem value="ortopedica">Ortopédica / Prótese</SelectItem>
                <SelectItem value="cardiaca">Cardíaca / Ponte Safena</SelectItem>
                <SelectItem value="neurologica">Neurológica / Coluna</SelectItem>
                <SelectItem value="oftalmologica">Oftalmológica / Catarata</SelectItem>
                <SelectItem value="plastica-reparadora">Plástica Reparadora</SelectItem>
                <SelectItem value="outra">Outra cirurgia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Qual a urgência médica?</Label>
            </div>
            <Select value={urgencia} onValueChange={setUrgencia}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a urgência" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="emergencia">Emergência (risco de vida)</SelectItem>
                <SelectItem value="urgente">Urgente (risco se demorar)</SelectItem>
                <SelectItem value="necessario">Necessário (precisa fazer)</SelectItem>
                <SelectItem value="eletivo">Eletivo necessário</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Quando recebeu a negativa?</Label>
            </div>
            <Select value={tempoNegativa} onValueChange={setTempoNegativa}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tempo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hoje">Hoje / Ontem</SelectItem>
                <SelectItem value="dias">Alguns dias atrás</SelectItem>
                <SelectItem value="semanas">Algumas semanas</SelectItem>
                <SelectItem value="meses">Mais de 1 mês</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Tipo da negativa</Label>
            </div>
            <Select value={tipoNegativa} onValueChange={setTipoNegativa}>
              <SelectTrigger>
                <SelectValue placeholder="Como foi negado?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="escrita">Negativa por escrito (email/carta)</SelectItem>
                <SelectItem value="verbal">Negativa verbal (telefone)</SelectItem>
                <SelectItem value="omissao">Omissão (não responderam)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CalculatorInput
            id="valorCirurgia"
            label="Valor da cirurgia (se souber)"
            value={valorCirurgia}
            onChange={setValorCirurgia}
            placeholder="R$ 0,00 (opcional)"
            type="currency"
            tooltip="Valor orçado para a cirurgia"
          />

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
                Tive que pagar a cirurgia particular
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="multiplos" 
                checked={multiplosPlanos}
                onCheckedChange={(checked) => setMultiplosPlanos(checked as boolean)}
              />
              <label htmlFor="multiplos" className="text-sm cursor-pointer">
                Meu pedido foi negado mais de uma vez
              </label>
            </div>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full bg-red-500 hover:bg-red-600"
            size="lg"
          >
            {isCalculating ? "Calculando..." : "Calcular Probabilidade e Indenização"}
          </Button>
        </div>

        {result && (
          <div className="mt-6">
            <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-200 dark:border-emerald-800 mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600">
                    {result.items[0].value}%
                  </div>
                  <p className="text-sm text-muted-foreground">Chance de Deferimento</p>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 flex items-center justify-center gap-1">
                    <Clock className="w-6 h-6" />
                    {result.items[1].value}h
                  </div>
                  <p className="text-sm text-muted-foreground">Tempo Estimado</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Alta probabilidade de sucesso!</span>
              </div>
            </Card>

            <CalculatorResult
              total={result.total}
              items={result.items.slice(2)}
              specialty="consumidor"
              calculatorType="liminar-cirurgia"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-red-500/5 border-red-500/20">
          <h3 className="font-semibold mb-2 text-sm flex items-center gap-2">
            <FileWarning className="w-4 h-4 text-red-500" />
            Documentos para Liminar
          </h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Laudo médico detalhado (com CID e urgência)</li>
            <li>• Negativa do plano por escrito</li>
            <li>• Carteirinha do plano (frente e verso)</li>
            <li>• RG e CPF</li>
            <li>• Exames recentes (se tiver)</li>
            <li>• Orçamento da cirurgia particular (se tiver)</li>
          </ul>
        </Card>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            Tema 1069 STJ - Bariátrica
          </Badge>
          <Badge variant="outline" className="text-xs">
            Lei 14.454/2022 - Rol ANS
          </Badge>
          <Badge variant="outline" className="text-xs">
            Lei 9.656/98 - Planos de Saúde
          </Badge>
        </div>
      </Card>
    </TooltipProvider>
  );
};

export default LiminarCirurgiaCalculator;
