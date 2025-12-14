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

const LaborCalculator = () => {
  const [salario, setSalario] = useState("");
  const [mesesTrabalhados, setMesesTrabalhados] = useState("");
  const [tipoRescisao, setTipoRescisao] = useState("");
  const [feriasVencidas, setFeriasVencidas] = useState(false);
  const [decimoTerceiro, setDecimoTerceiro] = useState(true);
  const [fgtsNaoDepositado, setFgtsNaoDepositado] = useState(false);
  const [avisoPrevio, setAvisoPrevio] = useState("");
  const [horasExtras, setHorasExtras] = useState("");
  
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const parseValue = (val: string) => parseInt(val || "0", 10) / 100;
  const parseNumber = (val: string) => parseInt(val || "0", 10);

  const handleCalculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const salarioNum = parseValue(salario);
      const meses = parseNumber(mesesTrabalhados);
      const horasExtrasNum = parseNumber(horasExtras);

      const items: { label: string; value: number; description?: string }[] = [];

      // Saldo de salário (15 dias em média)
      const saldoSalario = (salarioNum / 30) * 15;
      items.push({ 
        label: "Saldo de Salário", 
        value: saldoSalario,
        description: "Dias trabalhados no mês da rescisão"
      });

      // Aviso prévio proporcional
      if (avisoPrevio === "indenizado" && (tipoRescisao === "sem-justa-causa" || tipoRescisao === "acordo")) {
        const anosCompletos = Math.floor(meses / 12);
        const diasAvisoPrevio = Math.min(90, 30 + (anosCompletos * 3));
        const avisoPrevioValor = tipoRescisao === "acordo" 
          ? ((salarioNum / 30) * diasAvisoPrevio) / 2 
          : (salarioNum / 30) * diasAvisoPrevio;
        items.push({ 
          label: "Aviso Prévio Indenizado", 
          value: avisoPrevioValor,
          description: `${diasAvisoPrevio} dias${tipoRescisao === "acordo" ? " (50% no acordo)" : ""}`
        });
      }

      // 13º proporcional
      if (decimoTerceiro) {
        const mesesNoAno = meses % 12 || 12;
        const decimoTerceiroValor = (salarioNum / 12) * Math.min(mesesNoAno, 12);
        items.push({ 
          label: "13º Salário Proporcional", 
          value: decimoTerceiroValor,
          description: `${Math.min(mesesNoAno, 12)}/12 avos`
        });
      }

      // Férias proporcionais + 1/3
      const mesesDesdeFerias = meses % 12 || 12;
      const feriasProporcionais = ((salarioNum / 12) * mesesDesdeFerias) * 1.333;
      items.push({ 
        label: "Férias Proporcionais + 1/3", 
        value: feriasProporcionais,
        description: `${mesesDesdeFerias}/12 avos`
      });

      // Férias vencidas + 1/3 (em dobro)
      if (feriasVencidas) {
        const feriasVencidasValor = salarioNum * 1.333 * 2;
        items.push({ 
          label: "Férias Vencidas + 1/3 (em dobro)", 
          value: feriasVencidasValor,
          description: "Art. 137 CLT - dobra por não concessão"
        });
      }

      // FGTS
      const fgtsTotal = salarioNum * 0.08 * meses;
      items.push({ 
        label: "FGTS Depositado", 
        value: fgtsTotal,
        description: "8% sobre remuneração mensal"
      });

      // Multa 40% FGTS
      if (tipoRescisao === "sem-justa-causa") {
        const multa40 = fgtsTotal * 0.4;
        items.push({ 
          label: "Multa 40% FGTS", 
          value: multa40,
          description: "Demissão sem justa causa"
        });
      } else if (tipoRescisao === "acordo") {
        const multa20 = fgtsTotal * 0.2;
        items.push({ 
          label: "Multa 20% FGTS", 
          value: multa20,
          description: "Acordo (Art. 484-A CLT)"
        });
      }

      // FGTS não depositado
      if (fgtsNaoDepositado) {
        const fgtsNaoDepositadoValor = fgtsTotal * 0.5; // Estimativa 50%
        items.push({ 
          label: "FGTS Não Depositado (estimativa)", 
          value: fgtsNaoDepositadoValor,
          description: "Depósitos irregulares"
        });
      }

      // Horas extras
      if (horasExtrasNum > 0) {
        const valorHora = salarioNum / 220;
        const valorHoraExtra = valorHora * 1.5 * horasExtrasNum * meses;
        items.push({ 
          label: "Horas Extras (50%)", 
          value: valorHoraExtra,
          description: `${horasExtrasNum}h/mês x ${meses} meses`
        });
      }

      // Multa Art. 477 CLT (atraso pagamento)
      if (tipoRescisao === "sem-justa-causa" || tipoRescisao === "acordo") {
        items.push({ 
          label: "Multa Art. 477 CLT (potencial)", 
          value: salarioNum,
          description: "Se houver atraso no pagamento das verbas"
        });
      }

      const total = items.reduce((acc, item) => acc + item.value, 0);

      setResult({ total, items });
      setIsCalculating(false);
    }, 500);
  };

  const isFormValid = salario && mesesTrabalhados && tipoRescisao;

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <CalculatorInput
            id="salario"
            label="Último Salário Bruto"
            value={salario}
            onChange={setSalario}
            placeholder="R$ 0,00"
            tooltip="Salário bruto mensal antes dos descontos"
            type="currency"
          />

          <CalculatorInput
            id="meses"
            label="Tempo de Serviço (meses)"
            value={mesesTrabalhados}
            onChange={setMesesTrabalhados}
            placeholder="Ex: 24"
            tooltip="Total de meses trabalhados na empresa"
            type="number"
            max={600}
          />

          <div className="space-y-2">
            <Label>Tipo de Rescisão</Label>
            <Select value={tipoRescisao} onValueChange={setTipoRescisao}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sem-justa-causa">Demissão sem Justa Causa</SelectItem>
                <SelectItem value="pedido-demissao">Pedido de Demissão</SelectItem>
                <SelectItem value="acordo">Acordo (Art. 484-A)</SelectItem>
                <SelectItem value="justa-causa">Demissão por Justa Causa</SelectItem>
                <SelectItem value="termino-contrato">Término de Contrato</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Aviso Prévio</Label>
            <Select value={avisoPrevio} onValueChange={setAvisoPrevio}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="indenizado">Indenizado</SelectItem>
                <SelectItem value="trabalhado">Trabalhado</SelectItem>
                <SelectItem value="nao-aplicavel">Não Aplicável</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CalculatorInput
            id="horasExtras"
            label="Média de Horas Extras (por mês)"
            value={horasExtras}
            onChange={setHorasExtras}
            placeholder="Ex: 10"
            tooltip="Média mensal de horas extras não pagas"
            type="number"
            max={200}
          />

          <div className="space-y-4">
            <Label>Situações Adicionais</Label>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="feriasVencidas" 
                  checked={feriasVencidas}
                  onCheckedChange={(checked) => setFeriasVencidas(checked === true)}
                />
                <Label htmlFor="feriasVencidas" className="text-sm font-normal cursor-pointer">
                  Férias vencidas (não gozadas)
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="decimoTerceiro" 
                  checked={decimoTerceiro}
                  onCheckedChange={(checked) => setDecimoTerceiro(checked === true)}
                />
                <Label htmlFor="decimoTerceiro" className="text-sm font-normal cursor-pointer">
                  13º proporcional pendente
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="fgtsNaoDepositado" 
                  checked={fgtsNaoDepositado}
                  onCheckedChange={(checked) => setFgtsNaoDepositado(checked === true)}
                />
                <Label htmlFor="fgtsNaoDepositado" className="text-sm font-normal cursor-pointer">
                  FGTS não depositado corretamente
                </Label>
              </div>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleCalculate}
          disabled={!isFormValid || isCalculating}
          className="w-full mt-6 gap-2"
          size="lg"
        >
          <Calculator className="w-4 h-4" />
          {isCalculating ? "Calculando..." : "Calcular Meus Direitos"}
        </Button>

        <CalculatorDisclaimer />
      </Card>

      {result && (
        <CalculatorResult
          total={result.total}
          items={result.items}
          specialty="trabalhista"
          calculatorType="labor-calculator"
        />
      )}
    </div>
  );
};

export default LaborCalculator;
