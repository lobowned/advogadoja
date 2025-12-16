import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Scale, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const MoralDamagesCalculator = () => {
  const [tipoDano, setTipoDano] = useState<string>("");
  const [gravidade, setGravidade] = useState<string>("");
  const [repercussao, setRepercussao] = useState<string>("");
  const [causador, setCausador] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    setIsCalculating(true);

    // Valores base por tipo de dano (baseado em jurisprudência)
    const valoresTipo: Record<string, number> = {
      "negativacao": 8000,
      "ofensa_honra": 10000,
      "acidente": 20000,
      "erro_medico": 50000,
      "discriminacao": 15000,
      "cobranca_indevida": 5000,
    };

    // Multiplicadores por gravidade
    const multiplicadoresGravidade: Record<string, number> = {
      "leve": 0.5,
      "moderada": 1,
      "grave": 2,
      "gravissima": 4,
    };

    // Multiplicadores por repercussão
    const multiplicadoresRepercussao: Record<string, number> = {
      "pessoal": 1,
      "familiar": 1.3,
      "profissional": 1.5,
      "publica": 2,
    };

    // Multiplicadores por causador
    const multiplicadoresCausador: Record<string, number> = {
      "pessoa_fisica": 0.8,
      "pequena_empresa": 1,
      "media_empresa": 1.5,
      "grande_empresa": 2.5,
      "instituicao_financeira": 3,
    };

    const valorBase = valoresTipo[tipoDano] || 10000;
    const multGravidade = multiplicadoresGravidade[gravidade] || 1;
    const multRepercussao = multiplicadoresRepercussao[repercussao] || 1;
    const multCausador = multiplicadoresCausador[causador] || 1;

    const valorMinimo = valorBase * multGravidade * multRepercussao * multCausador * 0.7;
    const valorMaximo = valorBase * multGravidade * multRepercussao * multCausador * 1.3;
    const valorMedio = (valorMinimo + valorMaximo) / 2;

    setTimeout(() => {
      setResult({
        total: valorMedio,
        items: [
          { label: "Valor Mínimo Estimado", value: valorMinimo, description: "Piso baseado em casos similares" },
          { label: "Valor Médio Estimado", value: valorMedio, description: "Média da jurisprudência" },
          { label: "Valor Máximo Estimado", value: valorMaximo, description: "Teto para casos similares" },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = tipoDano && gravidade && repercussao && causador;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora de Danos Morais</h2>
            <p className="text-sm text-muted-foreground">Estimativa de indenização</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Tipo de Dano</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Selecione o tipo de situação que causou o dano</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={tipoDano} onValueChange={setTipoDano}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="negativacao">Negativação Indevida (SPC/Serasa)</SelectItem>
                <SelectItem value="cobranca_indevida">Cobrança Indevida</SelectItem>
                <SelectItem value="ofensa_honra">Ofensa à Honra/Imagem</SelectItem>
                <SelectItem value="discriminacao">Discriminação</SelectItem>
                <SelectItem value="acidente">Acidente (Trânsito/Trabalho)</SelectItem>
                <SelectItem value="erro_medico">Erro Médico</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Gravidade</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Intensidade do dano sofrido</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={gravidade} onValueChange={setGravidade}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a gravidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="leve">Leve (desconforto temporário)</SelectItem>
                <SelectItem value="moderada">Moderada (constrangimento significativo)</SelectItem>
                <SelectItem value="grave">Grave (dano psicológico/emocional)</SelectItem>
                <SelectItem value="gravissima">Gravíssima (sequelas permanentes)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Repercussão</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Alcance do dano na sua vida</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={repercussao} onValueChange={setRepercussao}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a repercussão" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pessoal">Apenas Pessoal</SelectItem>
                <SelectItem value="familiar">Familiar</SelectItem>
                <SelectItem value="profissional">Profissional</SelectItem>
                <SelectItem value="publica">Pública (redes sociais, mídia)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Causador do Dano</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Quem causou o dano afeta o valor da indenização</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={causador} onValueChange={setCausador}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o causador" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pessoa_fisica">Pessoa Física</SelectItem>
                <SelectItem value="pequena_empresa">Pequena Empresa</SelectItem>
                <SelectItem value="media_empresa">Média Empresa</SelectItem>
                <SelectItem value="grande_empresa">Grande Empresa</SelectItem>
                <SelectItem value="instituicao_financeira">Banco/Instituição Financeira</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full"
            size="lg"
          >
            {isCalculating ? "Calculando..." : "Calcular Indenização"}
          </Button>
        </div>

        {result && (
          <div className="mt-6">
            <CalculatorResult
              total={result.total}
              items={result.items}
              specialty="trabalhista"
              calculatorType="danos-morais"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-muted/30 border-dashed">
          <h3 className="font-semibold mb-2 text-sm">⚖️ Sobre Danos Morais</h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Valores baseados em decisões judiciais recentes</li>
            <li>• Cada caso é único e analisado individualmente</li>
            <li>• Provas documentais aumentam chances de sucesso</li>
          </ul>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default MoralDamagesCalculator;
