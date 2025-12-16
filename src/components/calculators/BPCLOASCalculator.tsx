import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import CalculatorInput from "./CalculatorInput";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

const BPCLOASCalculator = () => {
  const [idadeBeneficiario, setIdadeBeneficiario] = useState("");
  const [possuiDeficiencia, setPossuiDeficiencia] = useState("");
  const [rendaFamiliar, setRendaFamiliar] = useState("");
  const [numPessoas, setNumPessoas] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<{
    elegivel: boolean;
    motivo: string;
    rendaPerCapita: number;
    valorBeneficio: number;
    documentos: string[];
  } | null>(null);

  const parseValue = (value: string): number => {
    return parseFloat(value.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
  };

  const parseNumber = (value: string): number => {
    return parseInt(value.replace(/\D/g, "")) || 0;
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const idade = parseNumber(idadeBeneficiario);
      const renda = parseValue(rendaFamiliar);
      const pessoas = parseNumber(numPessoas);
      
      const salarioMinimo = 1412; // 2024
      const limiteRendaPerCapita = salarioMinimo / 4; // 1/4 do salário mínimo
      const rendaPerCapita = renda / pessoas;
      
      let elegivel = false;
      let motivo = "";
      
      // Verificar elegibilidade
      const atendeCriterioRenda = rendaPerCapita <= limiteRendaPerCapita;
      const atendeCriterioIdade = idade >= 65;
      const atendeCriterioDeficiencia = possuiDeficiencia === "sim";
      
      if (!atendeCriterioRenda) {
        elegivel = false;
        motivo = `Renda per capita (R$ ${rendaPerCapita.toFixed(2)}) excede o limite de R$ ${limiteRendaPerCapita.toFixed(2)} (1/4 do salário mínimo)`;
      } else if (atendeCriterioIdade || atendeCriterioDeficiencia) {
        elegivel = true;
        if (atendeCriterioIdade) {
          motivo = "Idoso com 65+ anos e renda dentro do limite";
        } else {
          motivo = "Pessoa com deficiência e renda dentro do limite";
        }
      } else {
        elegivel = false;
        motivo = "Não atende ao critério de idade (65+) nem possui deficiência de longo prazo";
      }
      
      const documentos = [
        "CPF e RG de todos os membros da família",
        "Comprovante de residência atualizado",
        "Comprovantes de renda de todos (ou declaração de ausência)",
        "Certidão de nascimento/casamento",
        possuiDeficiencia === "sim" ? "Laudos médicos (deficiência de longo prazo)" : "",
        "Cadastro Único (CadÚnico) atualizado"
      ].filter(Boolean);

      setResult({
        elegivel,
        motivo,
        rendaPerCapita,
        valorBeneficio: elegivel ? salarioMinimo : 0,
        documentos
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = idadeBeneficiario && possuiDeficiencia && rendaFamiliar && numPessoas;

  return (
    <div className="space-y-8">
      <Card className="p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-6">Verifique sua Elegibilidade</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <CalculatorInput
            id="idadeBeneficiario"
            label="Idade do Beneficiário"
            value={idadeBeneficiario}
            onChange={setIdadeBeneficiario}
            placeholder="Ex: 67"
            tooltip="Idade da pessoa que solicita o benefício"
            type="number"
            min={0}
            max={120}
          />

          <div className="space-y-2">
            <Label htmlFor="possuiDeficiencia">Possui deficiência de longo prazo?</Label>
            <Select value={possuiDeficiencia} onValueChange={setPossuiDeficiencia}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sim">Sim</SelectItem>
                <SelectItem value="nao">Não</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CalculatorInput
            id="rendaFamiliar"
            label="Renda Familiar Total"
            value={rendaFamiliar}
            onChange={setRendaFamiliar}
            placeholder="R$ 0,00"
            tooltip="Soma de toda renda de quem mora na casa"
            type="currency"
          />

          <CalculatorInput
            id="numPessoas"
            label="Pessoas na Casa"
            value={numPessoas}
            onChange={setNumPessoas}
            placeholder="Ex: 3"
            tooltip="Número total de pessoas que moram juntas"
            type="number"
            min={1}
            max={20}
          />
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!isValid || isCalculating}
          className="w-full mt-8"
          size="lg"
        >
          {isCalculating ? "Verificando..." : "Verificar Elegibilidade BPC/LOAS"}
        </Button>
      </Card>

      {result && (
        <Card className={`p-6 md:p-8 ${result.elegivel ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300' : 'bg-red-50 dark:bg-red-950/20 border-red-300'}`}>
          <div className="flex items-start gap-4 mb-6">
            {result.elegivel ? (
              <CheckCircle className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            ) : (
              <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
            )}
            <div>
              <h3 className="text-xl font-bold mb-2">
                {result.elegivel ? "Você pode ter direito ao BPC/LOAS!" : "Não elegível pelo critério atual"}
              </h3>
              <p className="text-muted-foreground">{result.motivo}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="bg-background/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Renda Per Capita</p>
              <p className="text-xl font-bold">R$ {result.rendaPerCapita.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground">Limite: R$ 353,00 (1/4 SM)</p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">Valor do Benefício</p>
              <p className="text-xl font-bold text-primary">
                {result.elegivel ? `R$ ${result.valorBeneficio.toFixed(2)}` : "---"}
              </p>
              <p className="text-xs text-muted-foreground">1 salário mínimo mensal</p>
            </div>
          </div>

          {result.elegivel && (
            <div className="bg-background/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Documentos Necessários
              </h4>
              <ul className="text-sm space-y-1">
                {result.documentos.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      )}

      <CalculatorDisclaimer />

      <Card className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
        <h3 className="font-semibold mb-3">O que é o BPC/LOAS?</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>BPC:</strong> Benefício de Prestação Continuada (1 salário mínimo/mês)</li>
          <li>• <strong>LOAS:</strong> Lei Orgânica de Assistência Social</li>
          <li>• <strong>Quem tem direito:</strong> Idosos 65+ OU pessoas com deficiência de longo prazo</li>
          <li>• <strong>Requisito de renda:</strong> renda per capita de até 1/4 do salário mínimo</li>
          <li>• <strong>Não é aposentadoria:</strong> é benefício assistencial, não exige contribuição ao INSS</li>
          <li>• <strong>CadÚnico:</strong> é obrigatório estar inscrito</li>
        </ul>
      </Card>
    </div>
  );
};

export default BPCLOASCalculator;
