import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import { Link } from "react-router-dom";
import LawyerChatSection from "@/components/LawyerChatSection";
import Navbar from "@/components/Navbar";
import { trackWhatsAppConversion } from "@/lib/trackWhatsApp";

import CriminalHeroSection from "./CriminalHeroSection";
import CriminalPracticeAreasSection from "./CriminalPracticeAreasSection";
import CriminalObjecionsFAQ from "./CriminalObjecionsFAQ";

const CriminalLanding = () => {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://riccio-advocacia.lovable.app/criminal#legalservice",
    "name": "Riccio Advocacia — Direito Criminal",
    "description":
      "Advocacia criminal: inquérito policial, ação penal, Tribunal do Júri, habeas corpus, execução penal e recursos. Atendimento em todo o Brasil. OAB/BA 46.638.",
    "url": "https://riccio-advocacia.lovable.app/criminal",
    "telephone": "+55-71-99703-6269",
    "areaServed": { "@type": "Country", "name": "Brasil" },
    "serviceType": [
      "Defesa Criminal",
      "Habeas Corpus",
      "Tribunal do Júri",
      "Execução Penal",
      "Crimes contra o patrimônio",
      "Crimes contra a pessoa",
      "Lei Maria da Penha",
      "Lei de Drogas",
      "Crimes econômicos",
      "Crimes contra a Administração Pública",
      "Crimes cibernéticos",
      "Recurso Criminal",
      "Revisão Criminal"],
    "priceRange": "Consulta inicial"};

  const attorneySchema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "Dr. Gilberto Gonçalves Magalhães Riccio",
    "identifier": "OAB/BA 46.638",
    "description":
      "Advogado dedicado ao Direito Penal e Processual Penal, com prática em Justiça Estadual, Federal e tribunais superiores.",
    "url": "https://riccio-advocacia.lovable.app/criminal",
    "areaServed": { "@type": "Country", "name": "Brasil" },
    "knowsAbout": [
      "Direito Penal",
      "Direito Processual Penal",
      "Tribunal do Júri",
      "Habeas Corpus",
      "Execução Penal",
      "Lei de Drogas",
      "Lei Maria da Penha",
      "Crimes econômicos",
      "Crimes cibernéticos"]};

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quando devo procurar um advogado criminalista?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Quanto antes, melhor. A defesa que se constrói ainda no inquérito tem instrumentos que a defesa tardia já não dispõe."}},
      {
        "@type": "Question",
        "name": "E em caso de prisão em flagrante de um familiar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Anote a delegacia, o nome da autoridade policial e a tipificação preliminar. Em seguida, procure um advogado para acompanhar a lavratura do auto e a audiência de custódia, que ocorre em até 24 horas."}},
      {
        "@type": "Question",
        "name": "O advogado garante resultado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Não. O Código de Ética da OAB veda promessas. O que se compromete é a atuação técnica e diligente, fundada em legislação, doutrina e jurisprudência."}},
      {
        "@type": "Question",
        "name": "O que eu contar ao advogado fica em sigilo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Sim. O sigilo profissional é dever do advogado, protegido por lei, inclusive diante de autoridades."}},
      {
        "@type": "Question",
        "name": "Atendem em todo o Brasil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Sim. O escritório atua em todo o território nacional, mediante prévia avaliação do caso."}}]};

  return (
    <PageTransition variant="slideUp">
      <Helmet>
        <title>Advogado Criminalista | Defesa Criminal, Júri, Habeas Corpus | Riccio Advocacia</title>
        <meta
          name="description"
          content="Advogado criminalista para prisão em flagrante, inquérito, denúncia, Tribunal do Júri, habeas corpus, execução penal e recursos. Plantão 24h. OAB/BA 46.638. Atendimento em todo o Brasil."
        />
        <meta
          name="keywords"
          content="advogado criminalista, advogado criminal, defesa criminal, habeas corpus, tribunal do júri, execução penal, prisão em flagrante, audiência de custódia, advogado lei maria da penha, advogado lei de drogas, recurso criminal, revisão criminal, advogado penal salvador, advogado criminal bahia"
        />
        <link rel="canonical" href="https://riccio-advocacia.lovable.app/criminal" />

        <meta property="og:title" content="Advogado Criminalista | Defesa Criminal | Riccio Advocacia" />
        <meta
          property="og:description"
          content="Advogado criminalista: flagrante, júri, habeas corpus, execução penal e recursos. Plantão 24h. OAB/BA 46.638."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riccio-advocacia.lovable.app/criminal" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advogado Criminalista | Riccio Advocacia" />
        <meta
          name="twitter:description"
          content="Advogado criminalista: flagrante, júri, habeas corpus, execução penal e recursos. Plantão 24h."
        />

        <script type="application/ld+json">{JSON.stringify(legalServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(attorneySchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />

        {/* Hero Section — Criminal */}
        <CriminalHeroSection />

        {/* Chat Virtual — triagem criminal 24/7 (abre com Dr. Roberto Costa — flagrante/prisão) */}
        <LawyerChatSection defaultLawyerId="roberto-costa" area="penal" />

        {/* Áreas de atuação — 6 principais */}
        <CriminalPracticeAreasSection />

        {/* FAQ Criminal */}
        <CriminalObjecionsFAQ />

        {/* Footer */}
        <footer className="border-t bg-gradient-to-b from-muted/30 to-muted/50 py-8 sm:py-10 safe-bottom">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">Riccio Advocacia — Direito Criminal</p>
                <p>Dr. Gilberto Gonçalves Magalhães Riccio</p>
                <p>OAB/BA 46.638 | CNPJ 50.947.818/0001-94</p>
                <p>Camaçari · Bahia · Brasil</p>
                <p className="mt-2">Plantão criminal 24h</p>
                <p className="mt-3 text-xs italic">
                  Conforme Provimento 205/2021 do CFOAB e Código de Ética e Disciplina,
                  esta página tem caráter exclusivamente informativo.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <a
                    href="https://wa.me/5571997036269?text=Olá!%20Preciso%20de%20advogado%20criminalista."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackWhatsAppConversion}
                    className="hover:text-[#25D366] transition-all duration-200 hover:scale-110 flex items-center gap-2 py-2 min-h-[48px]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp 24h
                  </a>
                  <a
                    href="mailto:contato@advogadoja.com.br"
                    className="hover:text-primary transition-all duration-200 hover:scale-110 flex items-center gap-2 py-2 min-h-[48px]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Email
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-xs">
                  <Link to="/artigos" className="hover:text-foreground transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full py-2 min-h-[44px] flex items-center justify-center">Artigos</Link>
                  <Link to="/perguntas-frequentes" className="hover:text-foreground transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full py-2 min-h-[44px] flex items-center justify-center">FAQ</Link>
                  <Link to="/sitemap" className="hover:text-foreground transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full py-2 min-h-[44px] flex items-center justify-center">Sitemap</Link>
                  <Link to="/termos-de-uso" className="hover:text-foreground transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full py-2 min-h-[44px] flex items-center justify-center">Termos</Link>
                  <Link to="/privacidade" className="hover:text-foreground transition-colors relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full py-2 min-h-[44px] flex items-center justify-center">Privacidade</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default CriminalLanding;
