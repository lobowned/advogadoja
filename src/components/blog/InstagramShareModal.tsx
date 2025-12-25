import { useState } from "react";
import { Instagram, Download, Copy, Check, ExternalLink, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface InstagramShareModalProps {
  title: string;
  excerpt?: string;
  nicheId?: string;
  url: string;
}

const InstagramShareModal = ({ title, excerpt, nicheId, url }: InstagramShareModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [captionCopied, setCaptionCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const caption = `📢 ${title}

${excerpt ? `${excerpt}\n\n` : ''}🔗 Leia mais: ${url}

#advogado #direito #consultajuridica #advogadoonline #seusdireitos #justica #orientacaojuridica #direitobrasileiro`;

  const generateImage = async () => {
    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-instagram-image`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            excerpt,
            nicheId: nicheId || 'civil',
            url,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao gerar imagem');
      }

      setImageUrl(data.image);
      toast.success("Imagem gerada com sucesso!");
    } catch (err) {
      console.error('Error generating image:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erro ao gerar imagem';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open && !imageUrl && !isLoading) {
      generateImage();
    }
    if (!open) {
      setImageUrl(null);
      setError(null);
      setCaptionCopied(false);
    }
  };

  const downloadImage = async () => {
    if (!imageUrl) return;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `instagram-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
      toast.success("Imagem baixada!");
    } catch {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `instagram-${Date.now()}.png`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const copyCaption = async () => {
    try {
      await navigator.clipboard.writeText(caption);
      setCaptionCopied(true);
      toast.success("Legenda copiada!");
      setTimeout(() => setCaptionCopied(false), 3000);
    } catch {
      toast.error("Erro ao copiar legenda");
    }
  };

  const openInstagram = () => {
    window.open('https://instagram.com', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 hover:from-purple-500/20 hover:via-pink-500/20 hover:to-orange-500/20 text-pink-600 border-pink-200"
        >
          <Instagram className="w-4 h-4" />
          Instagram
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Instagram className="w-5 h-5 text-pink-500" />
            Compartilhar no Instagram
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Image Preview Area */}
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center">
            {isLoading && (
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <Loader2 className="w-8 h-8 animate-spin" />
                <p className="text-sm">Gerando sua imagem com IA...</p>
              </div>
            )}
            
            {error && !isLoading && (
              <div className="flex flex-col items-center gap-3 text-center p-4">
                <p className="text-sm text-destructive">{error}</p>
                <Button variant="outline" size="sm" onClick={generateImage}>
                  Tentar novamente
                </Button>
              </div>
            )}
            
            {imageUrl && !isLoading && (
              <img 
                src={imageUrl} 
                alt="Instagram preview" 
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Download Button */}
          {imageUrl && (
            <Button 
              onClick={downloadImage} 
              className="w-full gap-2"
              size="lg"
            >
              <Download className="w-4 h-4" />
              Baixar Imagem
            </Button>
          )}

          {/* Caption Section */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Legenda pronta:</p>
            <div className="relative">
              <div className="bg-muted p-3 rounded-lg text-sm max-h-32 overflow-y-auto whitespace-pre-wrap">
                {caption}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2 gap-1.5"
                onClick={copyCaption}
              >
                {captionCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copiar
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Open Instagram Button */}
          <Button 
            variant="outline" 
            onClick={openInstagram}
            className="w-full gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Abrir Instagram
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Baixe a imagem, copie a legenda e poste no seu Instagram!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InstagramShareModal;
