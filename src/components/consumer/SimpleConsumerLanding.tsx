import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/BackButton";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  /** Bloco <Helmet> da página (SEO). */
  seo: ReactNode;
  breadcrumbs: { label: string; href?: string }[];
  badge?: string;
  title: string;
  subtitle: string;
  whatsappText: string;
  ctaLabel?: string;
  rightsTitle?: string;
  rights: string[];
  faqs?: FaqItem[];
}

const WHATSAPP = "5571997036269";

const SimpleConsumerLanding = ({
  seo,
  breadcrumbs,
  badge,
  title,
  subtitle,
  whatsappText,
  ctaLabel = "Falar com advogado no WhatsApp",
  rightsTitle = "O que você pode conseguir",
  rights,
  faqs = [],
}: Props) => {
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <>
      {seo}
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <BackButton />
            <Link to="/" className="text-lg font-semibold">
              Riccio Advocacia
            </Link>
            <span className="w-10" />
          </div>
        </header>

        <div className="container mx-auto px-4 pt-6">
          <BreadcrumbNav items={breadcrumbs} />
        </div>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            {badge && (
              <Badge variant="secondary" className="mb-4">
                {badge}
              </Badge>
            )}
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">{title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{subtitle}</p>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-6 px-8">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                {ctaLabel}
              </a>
            </Button>
          </div>
        </section>

        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{rightsTitle}</h2>
            <ul className="space-y-4">
              {rights.map((r) => (
                <li key={r} className="flex items-start gap-3 text-base md:text-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {faqs.length > 0 && (
          <section className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Perguntas frequentes</h2>
            <div className="space-y-3">
              {faqs.slice(0, 5).map((f) => (
                <details key={f.question} className="group rounded-lg border p-4">
                  <summary className="cursor-pointer font-semibold">{f.question}</summary>
                  <p className="mt-3 text-muted-foreground">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <footer className="border-t py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Riccio Advocacia · Dr. Gilberto Riccio, OAB/BA 46.638 — Todos os direitos reservados</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SimpleConsumerLanding;
