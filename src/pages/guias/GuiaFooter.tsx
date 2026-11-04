import { Link } from "react-router-dom";

export const WHATSAPP_GUIAS = "5571997036269";
export const waLink = (texto: string) =>
  `https://wa.me/${WHATSAPP_GUIAS}?text=${encodeURIComponent(texto)}`;

const GuiaFooter = () => (
  <footer className="border-t bg-gradient-to-b from-muted/30 to-muted/50 py-8 sm:py-10 safe-bottom">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left text-sm text-muted-foreground">
        <div>
          <p className="font-semibold text-foreground mb-2">Riccio Advocacia</p>
          <p>Dr. Gilberto Riccio — OAB/BA 46.638</p>
          <p className="mt-2">Salvador, Camaçari, Lauro de Freitas e atendimento online</p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-xs">
          <Link to="/guias" className="hover:text-foreground py-2">Guias</Link>
          <Link to="/artigos" className="hover:text-foreground py-2">Artigos</Link>
          <Link to="/perguntas-frequentes" className="hover:text-foreground py-2">FAQ</Link>
          <Link to="/termos-de-uso" className="hover:text-foreground py-2">Termos</Link>
          <Link to="/privacidade" className="hover:text-foreground py-2">Privacidade</Link>
        </nav>
      </div>
      <p className="mt-6 text-xs text-muted-foreground text-center md:text-left">
        Conteúdo informativo. Não substitui a análise individual do caso por advogado.
      </p>
    </div>
  </footer>
);

export default GuiaFooter;
