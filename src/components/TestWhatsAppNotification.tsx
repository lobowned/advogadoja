import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export const TestWhatsAppNotification = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const testWhatsAppNotification = async () => {
    setIsSending(true);
    
    try {
      console.log("🧪 Testing WhatsApp notification...");
      
      // Dados de teste simulando um lead completo
      const testLeadData = {
        name: "João Silva (TESTE)",
        phone: "5571997092633",
        email: "teste@exemplo.com",
        specialty: "trabalhista",
        assigned_lawyer: "Dr. Carlos Silva",
        case_summary: "Cliente relatou demissão sem justa causa. Trabalhou por 3 anos na empresa XYZ. Possui carteira assinada e testemunhas. Busca receber verbas rescisórias corretamente.",
        case_details: {
          fatos: "Demissão sem aviso prévio",
          data: "15/11/2024",
          partes: "Empresa XYZ Ltda",
          valor: "R$ 15.000,00",
          documentos: "Carteira de trabalho, contracheques"
        },
        message_count: 8,
        created_at: new Date().toISOString(),
        rating: 5
      };

      console.log("📤 Sending test notification with data:", testLeadData);

      const { data, error } = await supabase.functions.invoke(
        'send-whatsapp-notification',
        {
          body: { 
            leadData: testLeadData,
            isEndConversation: true
          }
        }
      );

      if (error) {
        console.error("❌ Error sending notification:", error);
        throw error;
      }

      console.log("✅ Notification sent successfully:", data);

      toast({
        title: "✅ Notificação Enviada!",
        description: "A notificação de teste foi enviada para o WhatsApp. Verifique o número 5571997092633.",
      });

    } catch (error: any) {
      console.error("❌ Failed to send test notification:", error);
      
      toast({
        title: "❌ Erro ao Enviar",
        description: error.message || "Não foi possível enviar a notificação de teste.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={testWhatsAppNotification}
        disabled={isSending}
        className="bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white shadow-lg"
        size="lg"
      >
        {isSending ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Testar WhatsApp
          </>
        )}
      </Button>
    </div>
  );
};
