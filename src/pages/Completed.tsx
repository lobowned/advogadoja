import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, MessageCircle, Mail, FileText } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PageTransition from "@/components/motion/PageTransition";

const Completed = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const protocolId = searchParams.get("protocol");

  const handleWhatsAppClick = () => {
    // Substitua pelo número real do escritório no formato internacional
    const phoneNumber = "5511999999999";
    const message = encodeURIComponent(
      "Olá! Acabei de preencher o formulário no site e gostaria de agendar uma consulta."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <PageTransition variant="scale">
    <div className="min-h-screen bg-background">
      <section className="container mx-auto flex min-h-screen items-center justify-center px-4 py-12">
        <Card className="max-w-2xl p-8 text-center shadow-card-hover md:p-12">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Informações Recebidas com Sucesso!
          </h1>

          {protocolId && (
            <div className="mb-6 rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
              <p className="text-sm font-medium text-muted-foreground">
                Número do Protocolo
              </p>
              <p className="text-2xl font-bold text-primary">
                {protocolId}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Guarde este número para acompanhar seu caso
              </p>
            </div>
          )}

          <p className="mb-8 text-lg text-muted-foreground">
            Agradecemos por compartilhar sua situação conosco. Nossa equipe jurídica
            especializada irá analisar cuidadosamente seu caso.
          </p>

          <div className="mb-8 rounded-lg bg-muted/50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              🔒 Compromisso de Confidencialidade
            </h2>
            <p className="text-sm text-muted-foreground">
              Todas as informações fornecidas são sigilosas e protegidas pelo sigilo
              profissional advocatício. Seus dados jamais serão compartilhados com
              terceiros sem sua autorização expressa.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Próximos Passos
            </h3>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full gap-2 text-base"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-5 w-5" />
                Agendar Atendimento via WhatsApp
              </Button>

              <p className="text-sm text-muted-foreground">ou</p>

              <div className="rounded-lg border bg-card p-4 text-left">
                <div className="mb-2 flex items-center gap-2 text-foreground">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">Entre em contato por e-mail:</span>
                </div>
                <a
                  href="mailto:contato@escritorio.com.br"
                  className="text-primary hover:underline"
                >
                  contato@escritorio.com.br
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  Responderemos em até 24 horas úteis
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
            >
              Voltar para página inicial
            </Button>
          </div>
        </Card>
      </section>
    </div>
    </PageTransition>
  );
};

export default Completed;
