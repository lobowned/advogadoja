import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Clock, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const OvertimeCalculator = () => {
  const [salario, setSalario] = useState<string>("");
  const [horasSemana, setHorasSemana] = useState<string>("");
  const [meses, setMeses] = useState<string>("");
  const [horasFeriado, setHorasFeriado] = useState<string>("");
  const [adicionalNoturno, setAdicionalNoturno] = useState(false);
  const [bancodeHoras, setBancoDeHoras] = useState<string>("nao");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseValue = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return parseFloat(numbers) / 100 || 0;
  };

  const parseNumber = (value: string) => parseInt(value.replace(/\D/g, "")) || 0;

  const handleCalculate = () => {
    setIsCalculating(true);

    const salarioBase = parseValue(salario);
    const horasExtraSemana = parseNumber(horasSemana);
    const periodoMeses = parseNumber(meses);
    const horasFeriadoNum = parseNumber(horasFeriado);

    // Cálculo do valor da hora
    const jornadaMensal = 220; // Horas mensais padrão
    const valorHora = salarioBase / jornadaMensal;

    // Horas extras normais (50% adicional)
    const horasExtraMes = horasExtraSemana * 4.33; // Semanas por mês
    const totalHorasExtras = horasExtraMes * periodoMeses;
    const valorHoraExtra = valorHora * 1.5;
    const totalHorasExtrasValor = totalHorasExtras * valorHoraExtra;

    // Horas em feriados (100% adicional)
    const valorHoraFeriado = valorHora * 2;
    const totalFeriados = horasFeriadoNum * valorHoraFeriado;

    // Adicional noturno (20% extra sobre hora extra)
    let adicionalNoturnoValor = 0;
    if (adicionalNoturno) {
      adicionalNoturnoValor = totalHorasExtrasValor * 0.2;
    }

    // Reflexos (média sobre DSR, férias, 13º)
    const mediaHorasExtras = totalHorasExtrasValor / periodoMeses;
    const reflexoDSR = mediaHorasExtras * 0.1667 * periodoMeses; // 1/6 para DSR
    const reflexoFerias = (mediaHorasExtras * periodoMeses) / 12 * 1.33; // 1/12 + 1/3
    const reflexo13 = (mediaHorasExtras * periodoMeses) / 12;

    // Se tinha banco de horas irregular, considerar 100%
    let ajusteBanco = 0;
    if (bancodeHoras === "irregular") {
      ajusteBanco = totalHorasExtrasValor * 0.5; // Diferença para 100%
    }

    const total = totalHorasExtrasValor + totalFeriados + adicionalNoturnoValor + reflexoDSR + reflexoFerias + reflexo13 + ajusteBanco;

    setTimeout(() => {
      setResult({
        total: total,
        items: [
          { label: "Horas Extras (50%)", value: totalHorasExtrasValor, description: `${totalHorasExtras.toFixed(0)} horas × R$ ${valorHoraExtra.toFixed(2)}` },
          { label: "Horas em Feriados (100%)", value: totalFeriados, description: `${horasFeriadoNum} horas × R$ ${valorHoraFeriado.toFixed(2)}` },
          ...(adicionalNoturno ? [{ label: "Adicional Noturno (20%)", value: adicionalNoturnoValor, description: "Sobre as horas extras" }] : []),
          { label: "Reflexo no DSR", value: reflexoDSR, description: "Descanso semanal remunerado" },
          { label: "Reflexo nas Férias + 1/3", value: reflexoFerias, description: "Proporcional ao período" },
          { label: "Reflexo no 13º", value: reflexo13, description: "Proporcional ao período" },
          ...(bancodeHoras === "irregular" ? [{ label: "Ajuste Banco de Horas Irregular", value: ajusteBanco, description: "Banco sem acordo coletivo válido" }] : []),
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = parseValue(salario) > 0 && parseNumber(horasSemana) > 0 && parseNumber(meses) > 0;

  return (
    <TooltipProvider>
      <Card className="p-6 md:p-8 bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Calculadora de Horas Extras</h2>
            <p className="text-sm text-muted-foreground">Calcule o que você tem direito</p>
          </div>
        </div>

        <div className="space-y-5">
          <CalculatorInput
            id="salario"
            label="Salário Base Mensal"
            value={salario}
            onChange={setSalario}
            placeholder="R$ 0,00"
            tooltip="Seu salário bruto mensal"
            type="currency"
          />

          <CalculatorInput
            id="horas"
            label="Horas Extras por Semana"
            value={horasSemana}
            onChange={setHorasSemana}
            placeholder="Ex: 10"
            tooltip="Média de horas extras trabalhadas por semana"
            type="number"
            min={1}
            max={40}
          />

          <CalculatorInput
            id="meses"
            label="Período (em meses)"
            value={meses}
            onChange={setMeses}
            placeholder="Ex: 24"
            tooltip="Quantos meses você trabalhou horas extras"
            type="number"
            min={1}
            max={60}
          />

          <CalculatorInput
            id="feriados"
            label="Horas em Feriados (total)"
            value={horasFeriado}
            onChange={setHorasFeriado}
            placeholder="Ex: 16"
            tooltip="Total de horas trabalhadas em feriados no período"
            type="number"
            min={0}
            max={500}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Label htmlFor="noturno">Trabalhou à noite (22h-5h)?</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Adicional de 20% sobre as horas noturnas</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Switch
              id="noturno"
              checked={adicionalNoturno}
              onCheckedChange={setAdicionalNoturno}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label>Banco de Horas</Label>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Banco de horas irregular pode gerar direito a hora extra</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Select value={bancodeHoras} onValueChange={setBancoDeHoras}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nao">Não tinha banco de horas</SelectItem>
                <SelectItem value="regular">Banco de horas com acordo</SelectItem>
                <SelectItem value="irregular">Banco de horas sem acordo formal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full"
            size="lg"
          >
            {isCalculating ? "Calculando..." : "Calcular Horas Extras"}
          </Button>
        </div>

        {result && (
          <div className="mt-6">
            <CalculatorResult
              total={result.total}
              items={result.items}
              specialty="trabalhista"
              calculatorType="horas-extras"
            />
          </div>
        )}

        <CalculatorDisclaimer />

        <Card className="mt-6 p-4 bg-muted/30 border-dashed">
          <h3 className="font-semibold mb-2 text-sm">⏰ Sobre Horas Extras</h3>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Hora extra normal: adicional de 50%</li>
            <li>• Hora extra em feriado: adicional de 100%</li>
            <li>• Máximo: 2 horas extras por dia (CLT)</li>
            <li>• Reflexos aumentam significativamente o valor total</li>
          </ul>
        </Card>
      </Card>
    </TooltipProvider>
  );
};

export default OvertimeCalculator;
