import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Receipt, FileWarning } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

interface CalculationResult {
  total: number;
  items: { label: string; value: number; description?: string }[];
}

const DevolucaoEmDobroCalculator = () => {
  const [valorCobrado, setValorCobrado] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const parseValue = (val: string): number => {
    // CalculatorInput (currency) entrega centavos em dígitos: "300000" = R$ 3.000,00
    return parseInt(val.replace(/\D/g, "") || "0", 10) / 100;
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    const valor = parseValue(valorCobrado);

    // Devolução em dobro - Art. 42, parágrafo único, do CDC.
    // Antes a calculadora somava "danos morais estimados" (valores inventados por tipo de
    // cobrança e duração) e uma faixa mínima/máxima "com bom advogado". Saiu: indenização não
    // tem tabela, quem fixa é o juiz, e o Provimento OAB 205/2021 veda prometer resultado.
    const devolucaoEmDobro = valor * 2;

    setTimeout(() => {
      setResult({
        total: devolucaoEmDobro,
        items: [
          {
            label: "Devolução em Dobro (Art. 42 CDC)",
            value: devolucaoEmDobro,
            description: `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} x 2`
          },
        ],
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = !!valorCobrado;

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
            tooltip="O valor que você pagou a mais por uma cobrança indevida"
          />

          <p className="text-xs text-muted-foreground">
            A devolução em dobro vale para o que foi efetivamente pago a mais, salvo engano
            justificável da empresa. Danos morais, quando cabem, não têm valor de tabela: dependem
            do caso e são fixados pelo juiz.
          </p>

          <Button
            onClick={handleCalculate}
            disabled={!isValid || isCalculating}
            className="w-full bg-orange-500 hover:bg-orange-600"
            size="lg"
          >
            {isCalculating ? "Calculando..." : "Calcular devolução em dobro"}
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
