import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Conversao = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center animate-pulse">
            <CheckCircle className="w-16 h-16 text-emerald-500" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Atendimento Iniciado com Sucesso!
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Você será atendido em instantes por um de nossos advogados especializados.
        </p>

        {/* Instructions */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-800 text-sm">
            👈 <strong>Volte para a aba anterior</strong> para continuar sua conversa com nosso advogado.
          </p>
        </div>

        {/* Close Button */}
        <Button 
          onClick={handleClose}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3"
        >
          Fechar esta aba
        </Button>

        {/* Tracking placeholder - você pode adicionar pixels aqui */}
        {/* 
          Google Ads: gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/XXXXX'});
          Facebook Pixel: fbq('track', 'Lead');
        */}
      </div>
    </div>
  );
};

export default Conversao;
