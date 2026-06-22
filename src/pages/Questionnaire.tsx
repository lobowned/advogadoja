import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface QuestionnaireData {
  problemType: string;
  description: string;
  date: string;
  company: string;
  amount: string;
  hasEvidence: string;
  evidence: File[];
}

const Questionnaire = () => {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const [formData, setFormData] = useState<QuestionnaireData>({
    problemType: problemId || "",
    description: "",
    date: "",
    company: "",
    amount: "",
    hasEvidence: "",
    evidence: [],
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        evidence: Array.from(e.target.files),
      });
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && !formData.description.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, descreva o que aconteceu",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === 2 && !formData.date) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe quando ocorreu o problema",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === 3 && !formData.company.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe o nome da empresa",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === 4 && !formData.amount) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe o valor aproximado do prejuízo",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === 5 && !formData.hasEvidence) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe se possui provas",
        variant: "destructive",
      });
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    toast({
      title: "Informações recebidas!",
      description: "Em breve entraremos em contato",
    });
    navigate("/concluido");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 animate-fade-in">
            <Label htmlFor="description" className="text-lg font-medium">
              O que aconteceu? Conte-nos em detalhes:
            </Label>
            <Textarea
              id="description"
              placeholder="Descreva o que aconteceu, quando você percebeu o problema, e qualquer informação relevante..."
              className="min-h-[200px] resize-none"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4 animate-fade-in">
            <Label htmlFor="date" className="text-lg font-medium">
              Quando isso aconteceu?
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              max={new Date().toISOString().split('T')[0]}
            />
            <p className="text-sm text-muted-foreground">
              Informe a data aproximada em que o problema ocorreu
            </p>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 animate-fade-in">
            <Label htmlFor="company" className="text-lg font-medium">
              Qual é o nome da empresa envolvida?
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Ex: Loja ABC, Empresa XYZ Ltda..."
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 animate-fade-in">
            <Label htmlFor="amount" className="text-lg font-medium">
              Qual o valor aproximado do seu prejuízo?
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                R$
              </span>
              <Input
                id="amount"
                type="text"
                placeholder="0,00"
                className="pl-10"
                value={formData.amount}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  const formatted = (Number(value) / 100).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  });
                  setFormData({ ...formData, amount: formatted });
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Informe um valor aproximado. Não precisa ser exato.
            </p>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4 animate-fade-in">
            <Label className="text-lg font-medium">
              Você possui provas do que aconteceu?
            </Label>
            <RadioGroup
              value={formData.hasEvidence}
              onValueChange={(value) => setFormData({ ...formData, hasEvidence: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="cursor-pointer font-normal">
                  Sim, tenho prints, fotos, documentos ou e-mails
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="cursor-pointer font-normal">
                  Não, não tenho provas no momento
                </Label>
              </div>
            </RadioGroup>
            <p className="text-sm text-muted-foreground">
              Ter provas ajuda muito, mas não é obrigatório para iniciar o processo
            </p>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4 animate-fade-in">
            {formData.hasEvidence === "yes" ? (
              <>
                <Label htmlFor="evidence" className="text-lg font-medium">
                  Faça upload das suas provas
                </Label>
                <div className="space-y-4">
                  <Label
                    htmlFor="evidence"
                    className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 p-8 transition-colors hover:border-primary hover:bg-muted/50"
                  >
                    <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
                    <span className="mb-2 text-sm font-medium">
                      Clique para selecionar arquivos
                    </span>
                    <span className="text-xs text-muted-foreground">
                      PDF, PNG, JPG, JPEG (até 10MB cada)
                    </span>
                  </Label>
                  <Input
                    id="evidence"
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {formData.evidence.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">
                        Arquivos selecionados ({formData.evidence.length}):
                      </p>
                      {formData.evidence.map((file, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          • {file.name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Label className="text-lg font-medium">
                  Sem problemas! Vamos prosseguir mesmo assim
                </Label>
                <p className="text-muted-foreground">
                  Nosso time entrará em contato e orientará sobre como reunir as
                  evidências necessárias, se for o caso.
                </p>
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/selecionar-nicho")}
            className="mb-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Escolher outro nicho
          </button>
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Etapa {currentStep} de {totalSteps}</span>
              <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Question */}
      <section className="container mx-auto px-4 py-12">
        <Card className="mx-auto max-w-2xl p-8 shadow-card">
          {renderStep()}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </Button>
            <Button
              onClick={handleNext}
              className="gap-2"
            >
              {currentStep === totalSteps ? "Finalizar" : "Próximo"}
              {currentStep < totalSteps && <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>🔒 Suas informações estão protegidas e serão tratadas com total sigilo</p>
        </div>
      </footer>
    </div>
  );
};

export default Questionnaire;
