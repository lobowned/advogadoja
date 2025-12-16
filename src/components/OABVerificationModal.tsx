import { m, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Shield, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OABVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OABVerificationModal = ({ isOpen, onClose }: OABVerificationModalProps) => {
  const oabNumber = 'OAB/BA 46.638';
  const oabVerificationUrl = 'https://cna.oab.org.br/';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          {/* Modal */}
          <m.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="bg-card rounded-2xl shadow-elegant overflow-hidden border border-border">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">Registro OAB Verificado</h2>
                      <p className="text-sm text-white/80">Advogado regularmente inscrito</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* OAB Number */}
                <div className="bg-muted/50 rounded-xl p-4 mb-6 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Número de Inscrição</p>
                  <p className="text-2xl font-bold text-foreground">{oabNumber}</p>
                </div>
                
                {/* Verification Steps */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Inscrição Ativa</p>
                      <p className="text-xs text-muted-foreground">Registro válido na Ordem dos Advogados do Brasil</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Sigilo Garantido</p>
                      <p className="text-xs text-muted-foreground">Protegido pelo Código de Ética da OAB</p>
                    </div>
                  </div>
                </div>
                
                {/* Verification CTA */}
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a
                      href={oabVerificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verificar no Site da OAB
                    </a>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Você será redirecionado para o Cadastro Nacional de Advogados
                  </p>
                </div>
              </div>
              
              {/* Footer */}
              <div className="px-6 py-4 bg-muted/30 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  A verificação garante que você está sendo atendido por um profissional 
                  legalmente habilitado para exercer a advocacia no Brasil.
                </p>
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OABVerificationModal;
