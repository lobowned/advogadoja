import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AlertCircle, Info, FileWarning } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const NegativacaoCalculator = () => {
  const [motivoNegativacao, setMotivoNegativacao] = useState<string>("");
  const [tempoNegativado, setTempoNegativado] = useState<string>("");
  const [recusaCredito, setRecusaCredito] = useState(false);
  const [constrangimento, setConstrangimento] = useState(false);
  const [semNotificacao, setSemNotificacao] = useState(false);
  const [multiplosCadastros, setMultiplosCadastros] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    setIsCalculating(true);

    // Base values based on jurisprudence
    let valorBase = 0;
    let multiplicador = 1;

    // Reason for negative listing
    switch (motivoNegativacao) {
      case "divida-inexistente":
        valorBase = 10000;
        break;
      case "divida-paga":
        valorBase = 8000;
        break;
      case "fraude":
        valorBase = 15000;
        break;
      case "sem-notificacao":
        valorBase = 6000;
        break;
      case "cobranca-indevida":
        valorBase = 7000;
        break;
      default:
        valorBase = 6000;
    }

    // Time listed multiplier
    switch (tempoNegativado) {
      case "menos-1-mes":
        multiplicador = 0.7;
        break;
      case "1-3-meses":
        multiplicador = 0.9;
        break;
      case "3-6-meses":
        multiplicador = 1.0;
        break;
      case "6-12-meses":
        multiplicador = 1.3;
        break;
      case "1-2-anos":
        multiplicador = 1.5;
        break;
      case "mais-2-anos":
        multiplicador = 1.8;
        break;
      default:
        multiplicador = 1.0;
    }

    // Additional factors
    let adicional = 0;
    if (recusaCredito) adicional += 3000;
    if (constrangimento) adicional += 2500;
    if (semNotificacao) adicional += 2000;
    if (multiplosCadastros) adicional += 4000;

    const valorFinal = Math.round((valorBase * multiplicador) + adicional);
    const valorMinimo = Math.round(valorFinal * 0.6);
    const valorMaximo = Math.round(valorFinal * 1.6);

    setTimeout(() => {
      setResult({
        total: valorFinal,
        items: [
          { 
            label: "Motivo da Negativação", 
            value: valorBase, 
            description: motivoNegativacao === "divida-inexistente" ? "Dívida Inexistente" : 
                         motivoNegativacao === "divida-paga" ? "Dívida Já Paga" :
                         motivoNegativacao === "fraude" ? "Fraude/Clonagem" :
                         motivoNegativacao === "sem-notificacao" ? "Sem Notificação Prévia" : "Cobrança Indevida"
          },
          { 
            label: "Tempo Negativado", 
            value: Math.round(valorBase * (multiplicador - 1)), 
            description: `Multiplicador: ${multiplicador.toFixed(1)}x` 
          },
          { 
            label: "Agravantes", 
            value: adicional, 
            description: [
              recusaCredito && "Recusa de crédito",
              constrangimento && "Constrangimento",
              semNotificacao && "Sem notificação",
              multiplosCadastros && "Múltiplos cadastros"
            ].filter(Boolean).join(", ") || "Nenhum"
          },
          { 
            label: "Estimativa Mínima", 
            value: valorMinimo, 
            description: "Valor conservador (Juizado)" 
          },
          { 
            label: "Estimativa Máxima", 
            value: valorMaximo, 
            description: "Valor com bom advogado" 
          },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = motivoNegativacao && tempoNegativado;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora de Indenização</h2>
            <p className="text-sm text-muted-foreground">Negativação Indevida (SPC/Serasa)</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Por que a negativação é indevida?</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Selecione o motivo pelo qual você considera a negativação irregular</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={motivoNegativacao} onValueChange={setMotivoNegativacao}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o motivo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="divida-inexistente">Nunca contratei esse serviço/produto</SelectItem>
                <SelectItem value="divida-paga">Dívida já foi paga</SelectItem>
                <SelectItem value="fraude">Fui vítima de fraude/clonagem</SelectItem>
                <SelectItem value="sem-notificacao">Não fui notificado antes da negativação</SelectItem>
                <SelectItem value="cobranca-indevida">Valor cobrado está errado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Há quanto tempo seu nome está negativado?</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Tempo desde que você descobriu a negativação</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={tempoNegativado} onValueChange={setTempoNegativado}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tempo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="menos-1-mes">Menos de 1 mês</SelectItem>
                <SelectItem value="1-3-meses">1 a 3 meses</SelectItem>
                <SelectItem value="3-6-meses">3 a 6 meses</SelectItem>
                <SelectItem value="6-12-meses">6 meses a 1 ano</SelectItem>
                <SelectItem value="1-2-anos">1 a 2 anos</SelectItem>
                <SelectItem value="mais-2-anos">Mais de 2 anos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 pt-2">
            <Label className="text-sm font-medium">Agravantes (marque se aplicável)</Label>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="recusa" 
                checked={recusaCredito}
                onCheckedChange={(checked) => setRecusaCredito(checked as boolean)}
              />
              <label htmlFor="recusa" className="text-sm cursor-pointer">
                Tive crédito negado por causa da negativação
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="constrangimento" 
                checked={constrangimento}
                onCheckedChange={(checked) => setConstrangimento(checked as boolean)}
              />
              <label htmlFor="constrangimento" className="text-sm cursor-pointer">
                Passei por constrangimento público (loja, banco)
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="notificacao" 
                checked={semNotificacao}
                onCheckedChange={(checked) => setSemNotificacao(checked as boolean)}
              />
              <label htmlFor="notificacao" className="text-sm cursor-pointer">
                Não recebi notificação antes de ser negativado
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="multiplos" 
                checked={multiplosCadastros}
                onCheckedChange={(checked) => setMultiplosCadastros(checked as boolean)}
              />
              <label htmlFor="multiplos" className="text-sm cursor-pointer">
                Meu nome está em mais de um órgão (SPC e Serasa)
              </label>
            </div>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full bg-red-500 hover:bg-red-600"
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
              calculatorType="negativacao"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-red-500/5 border-red-500/20">
          <h3 className="font-semibold mb-2 text-sm flex items-center gap-2">
            <FileWarning className="w-4 h-4 text-red-500" />
            Documentos Importantes
          </h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Print/foto da consulta ao SPC/Serasa mostrando a negativação</li>
            <li>• Comprovante de pagamento (se a dívida já foi paga)</li>
            <li>• Protocolo de reclamação na empresa (se houver)</li>
            <li>• Boletim de ocorrência (em caso de fraude)</li>
            <li>• Comprovante de recusa de crédito (se houver)</li>
          </ul>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default NegativacaoCalculator;
