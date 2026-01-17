import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { legalNiches } from "@/data/legal-niches";
import { generalQuestions } from "@/data/general-questions";
import { QuestionRenderer } from "@/components/questionnaire/QuestionRenderer";
import { ProgressIndicator } from "@/components/questionnaire/ProgressIndicator";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Question, CaseAnswers } from "@/types/legal-flows";
import { useToast } from "@/hooks/use-toast";
import { useSubmitCase } from "@/hooks/useSubmitCase";

const DynamicQuestionnaire = () => {
  const navigate = useNavigate();
  const { nicheId, actionId } = useParams<{ nicheId: string; actionId: string }>();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<CaseAnswers>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const niche = legalNiches.find((n) => n.id === nicheId);
  const action = niche?.actions.find((a) => a.id === actionId);

  useEffect(() => {
    if (!niche || !action) {
      toast({
        title: "Erro",
        description: "Ação não encontrada",
        variant: "destructive",
      });
      navigate("/selecionar-nicho");
    }
  }, [niche, action, navigate, toast]);

  if (!niche || !action) return null;

  const specificQuestions = action.questions;
  const allQuestions: Question[] = [...specificQuestions, ...generalQuestions];
  
  const visibleQuestions = allQuestions.filter((q) => {
    if (!q.conditionalDisplay) return true;
    const dependentValue = answers[q.conditionalDisplay.dependsOn];
    if (Array.isArray(q.conditionalDisplay.value)) {
      return q.conditionalDisplay.value.includes(dependentValue as string);
    }
    return dependentValue === q.conditionalDisplay.value;
  });

  const currentQuestion = visibleQuestions[currentStep];
  const totalSteps = visibleQuestions.length;

  const handleNext = () => {
    if (!answers[currentQuestion.id] && currentQuestion.required) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, preencha este campo antes de continuar",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const { submitCase } = useSubmitCase();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const result = await submitCase({
        nicheId: nicheId!,
        actionId: actionId!,
        answers,
        documents: [],
      });
      
      toast({
        title: "Sucesso!",
        description: `Seu caso foi registrado com o protocolo ${result.protocolId}`,
      });
      
      navigate(`/concluido?protocol=${result.protocolId}`);
    } catch (error) {
      console.error("Erro ao submeter caso:", error);
      toast({
        title: "Erro",
        description: "Erro ao enviar o formulário. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{action.name} - Questionário | Advogado Já</title>
        <meta name="description" content={`Responda o questionário sobre ${action.name}. Análise gratuita do seu caso por advogado especializado em ${niche.name}.`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <BreadcrumbNav 
            items={[
              { label: "Início", href: "/" },
              { label: niche.name, href: `/selecionar-acao/${nicheId}` },
              { label: action.name }
            ]}
            className="mb-4"
          />
          <div>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">
              {action.name}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {niche.name} • {action.description}
            </p>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <ProgressIndicator currentStep={currentStep + 1} totalSteps={totalSteps} />

          <Card className="p-6 md:p-8">
            <QuestionRenderer
              question={currentQuestion}
              value={answers[currentQuestion.id] as string || ""}
              onChange={(value) =>
                setAnswers({ ...answers, [currentQuestion.id]: value })
              }
            />

            <div className="mt-8 flex justify-between gap-4">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior
              </Button>

              <Button onClick={handleNext} disabled={isSubmitting}>
                {currentStep === totalSteps - 1 ? (
                  <>
                    {isSubmitting ? "Enviando..." : "Concluir"}
                    <Upload className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Próxima
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
    </>
  );
};

export default DynamicQuestionnaire;
