import { Scale } from "lucide-react";

const CalculatorDisclaimer = () => {
  return (
    <div className="bg-muted/50 rounded-lg p-4 mt-6">
      <div className="flex items-start gap-3">
        <Scale className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
        <div className="text-xs text-muted-foreground space-y-1">
          <p>
            <strong>Aviso Legal:</strong> Esta calculadora fornece apenas estimativas baseadas em 
            parâmetros gerais da legislação brasileira.
          </p>
          <p>
            Os valores reais podem variar significativamente dependendo das circunstâncias 
            específicas do seu caso, acordos coletivos, decisões judiciais e outros fatores.
          </p>
          <p>
            Para uma análise precisa, consulte um advogado especializado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorDisclaimer;
