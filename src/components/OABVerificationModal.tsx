import { m, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Shield, Scale, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { lawyers } from '@/data/lawyers';

interface OABVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OABVerificationModal = ({ isOpen, onClose }: OABVerificationModalProps) => {
  const mainOab = 'OAB/BA 46.638';
  const oabVerificationUrl = 'https://cna.oab.org.br/resultado-pesquisa-702e7a71-c6fc-4f69-abbe-b0dd0ddc5b62';

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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md max-h-[85vh] overflow-y-auto"
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
                      <p className="text-sm text-white/80">Advogados regularmente inscritos</p>
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
                {/* OAB Number Principal com animação */}
                <div className="bg-muted/50 rounded-xl p-4 mb-5 text-center relative overflow-hidden">
                  <m.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="absolute -top-2 -right-2 bg-green-500 text-white p-1.5 rounded-full"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </m.div>
                  <p className="text-sm text-muted-foreground mb-1">Registro Principal</p>
                  <p className="text-2xl font-bold text-foreground">{mainOab}</p>
                </div>
                
                {/* Equipe de Advogados */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Nossa Equipe</span>
                  </div>
                  <div className="space-y-2">
                    {lawyers.map((lawyer, index) => (
                      <m.div
                        key={lawyer.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg"
                      >
                        <img 
                          src={lawyer.photo} 
                          alt={lawyer.name} 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{lawyer.name}</p>
                          <p className="text-xs text-muted-foreground">{lawyer.oab}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      </m.div>
                    ))}
                  </div>
                </div>
                
                {/* Verification Steps */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <m.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    </m.div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Inscrições Ativas</p>
                      <p className="text-xs text-muted-foreground">Registros válidos na Ordem dos Advogados do Brasil</p>
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                  >
                    <a
                      href={oabVerificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Verificar no Site Oficial da OAB
                    </a>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Cadastro Nacional de Advogados - Consulta Pública
                  </p>
                </div>
              </div>
              
              {/* Footer */}
              <div className="px-6 py-4 bg-muted/30 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  A verificação garante que você está sendo atendido por profissionais 
                  legalmente habilitados para exercer a advocacia no Brasil.
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
