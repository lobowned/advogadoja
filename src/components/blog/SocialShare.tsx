import { useState } from "react";
import { Share2, Link2, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SocialShareProps {
  title: string;
  url: string;
  variant?: "horizontal" | "vertical";
}

const SocialShare = ({ title, url, variant = "horizontal" }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title}\n\n${url}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copiado!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Erro ao copiar link");
    }
  };

  const buttonClass = variant === "vertical" ? "w-full justify-start" : "";

  return (
    <div className={`flex ${variant === "vertical" ? "flex-col gap-2" : "flex-wrap gap-2"}`}>
      <Button
        variant="outline"
        size="sm"
        className={`gap-2 ${buttonClass} bg-green-500/10 hover:bg-green-500/20 text-green-700 border-green-200`}
        asChild
      >
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        className={`gap-2 ${buttonClass} bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 border-blue-200`}
        asChild
      >
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
          <Share2 className="w-4 h-4" />
          Facebook
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        className={`gap-2 ${buttonClass} bg-sky-500/10 hover:bg-sky-500/20 text-sky-700 border-sky-200`}
        asChild
      >
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Share2 className="w-4 h-4" />
          LinkedIn
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        className={`gap-2 ${buttonClass}`}
        onClick={copyToClipboard}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copiado!
          </>
        ) : (
          <>
            <Link2 className="w-4 h-4" />
            Copiar Link
          </>
        )}
      </Button>
    </div>
  );
};

export default SocialShare;
