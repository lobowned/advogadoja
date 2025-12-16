import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { AlertCircle, Calendar, FileText } from "lucide-react";
import CalculatorInput from "./CalculatorInput";
import CalculatorDisclaimer from "./CalculatorDisclaimer";

const DPVATCalculator = () => {
  const [tipoSinistro, setTipoSinistro] = useState("");
  const [grauInvalidez, setGrauInvalidez] = useState("");
  const [dataAcidente, setDataAcidente] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<{
    valor: number;
    descricao: string;
    prazo: string;
    documentos: string[];
    observacoes: string[];
  } | null>(null);

  const handleCalculate = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      let valor = 0;
      let descricao = "";
      let prazo = "";
      
      // Valores do DPVAT (tabela até 2019)
      // Após 2020, o DPVAT foi extinto e substituído pelo SPVAT em alguns estados
      const valorMorte = 13500;
      const valorInvalidezTotal = 13500;
      const valorDespesasMedicas = 2700;
      
      switch (tipoSinistro) {
        case "morte":
          valor = valorMorte;
          descricao = "Indenização por morte (valor fixo)";
          break;
        case "invalidez":
          // Invalidez permanente: proporcional ao grau
          const percentuais: Record<string, number> = {
            "total": 1.00,
            "parcial_alta": 0.70,
            "parcial_media": 0.50,
            "parcial_baixa": 0.25
          };
          const percentual = percentuais[grauInvalidez] || 0.25;
          valor = valorInvalidezTotal * percentual;
          descricao = `Invalidez permanente (${percentual * 100}% do teto)`;
          break;
        case "despesas":
          valor = valorDespesasMedicas;
          descricao = "Reembolso de despesas médicas (até o limite)";
          break;
      }
      
      // Prazo: 3 anos a partir do acidente
      prazo = "3 anos a partir da data do acidente";
      
      // Verificar se acidente foi após 2020
      const dataAcidenteObj = new Date(dataAcidente);
      const dataLimite = new Date("2020-01-01");
      
      const observacoes = [];
      if (dataAcidenteObj >= dataLimite) {
        observacoes.push("⚠️ O DPVAT foi extinto em 2020. Para acidentes após essa data, verifique se seu estado possui o SPVAT ou outro programa similar.");
      }
      
      const documentos = [
        "Boletim de ocorrência do acidente",
        "Documento de identidade e CPF da vítima",
        "Certidão de óbito (em caso de morte)",
        "Laudo médico do IML ou hospital (invalidez)",
        "Notas fiscais de despesas médicas (reembolso)",
        "Comprovante de residência",
        tipoSinistro === "morte" ? "Certidão de nascimento dos dependentes" : ""
      ].filter(Boolean);

      setResult({
        valor,
        descricao,
        prazo,
        documentos,
        observacoes
      });
      setIsCalculating(false);
    }, 800);
  };

  const isValid = tipoSinistro && (tipoSinistro !== "invalidez" || grauInvalidez);

  return (
    <div className="space-y-8">
      <Card className="p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-6">Dados do Sinistro</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="tipoSinistro">Tipo de Sinistro</Label>
            <Select value={tipoSinistro} onValueChange={setTipoSinistro}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morte">Morte</SelectItem>
                <SelectItem value="invalidez">Invalidez Permanente</SelectItem>
                <SelectItem value="despesas">Despesas Médicas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {tipoSinistro === "invalidez" && (
            <div className="space-y-2">
              <Label htmlFor="grauInvalidez">Grau de Invalidez</Label>
              <Select value={grauInvalidez} onValueChange={setGrauInvalidez}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o grau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="total">Total (100%)</SelectItem>
                  <SelectItem value="parcial_alta">Parcial Alta (70%)</SelectItem>
                  <SelectItem value="parcial_media">Parcial Média (50%)</SelectItem>
                  <SelectItem value="parcial_baixa">Parcial Baixa (25%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="dataAcidente">Data do Acidente</Label>
            <CalculatorInput
              id="dataAcidente"
              label=""
              value={dataAcidente}
              onChange={setDataAcidente}
              placeholder="DD/MM/AAAA"
              tooltip="Data em que ocorreu o acidente"
              type="text"
            />
          </div>
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!isValid || isCalculating}
          className="w-full mt-8"
          size="lg"
        >
          {isCalculating ? "Calculando..." : "Calcular Indenização DPVAT"}
        </Button>
      </Card>

      {result && (
        <Card className="p-6 md:p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800">
          <h3 className="text-xl font-bold mb-4">Resultado da Estimativa</h3>
          
          <div className="bg-background/50 p-6 rounded-lg mb-6">
            <p className="text-sm text-muted-foreground">Valor Estimado da Indenização</p>
            <p className="text-4xl font-bold text-primary">
              R$ {result.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{result.descricao}</p>
          </div>

          {result.observacoes.length > 0 && (
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg mb-6">
              {result.observacoes.map((obs, i) => (
                <p key={i} className="text-sm">{obs}</p>
              ))}
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <div className="bg-background/50 p-4 rounded-lg flex items-start gap-3">
              <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Prazo para Requerer</p>
                <p className="text-sm text-muted-foreground">{result.prazo}</p>
              </div>
            </div>
            <div className="bg-background/50 p-4 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Onde Solicitar</p>
                <p className="text-sm text-muted-foreground">Seguradora credenciada ou Caixa Econômica</p>
              </div>
            </div>
          </div>

          <div className="bg-background/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
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
        </Card>
      )}

      <CalculatorDisclaimer />

      <Card className="p-6 bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
        <h3 className="font-semibold mb-3">Sobre o DPVAT / SPVAT</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>DPVAT:</strong> Seguro obrigatório de trânsito (extinto em 2020)</li>
          <li>• <strong>SPVAT:</strong> Novo seguro que substituiu o DPVAT em alguns estados</li>
          <li>• <strong>Cobertura:</strong> Morte, invalidez permanente e despesas médicas</li>
          <li>• <strong>Valores máximos:</strong> R$ 13.500 (morte/invalidez) | R$ 2.700 (despesas)</li>
          <li>• <strong>Prazo:</strong> 3 anos para requerer a partir do acidente</li>
          <li>• <strong>Importante:</strong> Não depende de culpa no acidente</li>
        </ul>
      </Card>
    </div>
  );
};

export default DPVATCalculator;
