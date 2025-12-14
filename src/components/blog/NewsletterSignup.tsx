import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface NewsletterSignupProps {
  nicheId?: string;
}

const NewsletterSignup = ({ nicheId }: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Por favor, insira um email válido");
      return;
    }

    setIsLoading(true);

    try {
      // Create a lead entry for the newsletter signup
      const { error } = await supabase.from("leads").insert({
        email,
        specialty: nicheId || "geral",
        status: "newsletter",
        detected_problem: "Inscrição na newsletter",
      });

      if (error) throw error;

      setIsSubscribed(true);
      setEmail("");
      toast.success("Inscrição realizada com sucesso!");
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast.error("Erro ao processar inscrição. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <Card className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
        <CardContent className="py-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-1">Inscrição confirmada!</h3>
          <p className="text-muted-foreground text-sm">
            Você receberá nossos artigos e atualizações jurídicas.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Mail className="w-5 h-5 text-primary" />
          Receba artigos no seu email
        </CardTitle>
        <CardDescription>
          Atualizações jurídicas e novos artigos toda semana. Grátis.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading} className="gap-2">
            {isLoading ? (
              "Enviando..."
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Inscrever</span>
              </>
            )}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2">
          Não enviamos spam. Cancele quando quiser.
        </p>
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;
