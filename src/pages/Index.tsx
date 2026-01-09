import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import LawyerChatSection from "@/components/LawyerChatSection";
import LawyersShowcase from "@/components/LawyersShowcase";
import WhatsAppTestimonials from "@/components/WhatsAppTestimonials";
import CredibilitySection from "@/components/CredibilitySection";
import ObjecionsFAQ from "@/components/ObjecionsFAQ";
import Navbar from "@/components/Navbar";
import ArticlesSection from "@/components/ArticlesSection";
import NewsSection from "@/components/NewsSection";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import SuccessNotification from "@/components/SuccessNotification";
import ConsumerProblemsSection from "@/components/ConsumerProblemsSection";
import { DetectedProblemProvider, useDetectedProblem } from "@/contexts/DetectedProblemContext";

const IndexContent = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const { detectedArea } = useDetectedProblem();

  const handleCTA = () => {
    const chatSection = document.getElementById("lawyer-chat");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track chat section visibility for mobile CTA
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setChatVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (chatRef.current) {
      observer.observe(chatRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Schema.org Organization - Enhanced for Knowledge Panel
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Advogado Online",
    "alternateName": "Advogado Online Brasil",
    "url": "https://advogadoonline.com.br",
    "logo": {
      "@type": "ImageObject",
      "url": "https://advogadoonline.com.br/favicon.svg",
      "width": 512,
      "height": 512
    },
    "image": "https://advogadoonline.com.br/favicon.svg",
    "description": "Seus direitos de consumidor foram violados? Fale agora com advogado especialista. Voo cancelado, cobrança indevida, plano de saúde negou, produto defeituoso? Resolva sem sair de casa.",
    "email": "contato@advogadoonline.com.br",
    "telephone": "+55-71-99999-9999",
    "foundingDate": "2024",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "slogan": "Seus direitos de consumidor protegidos",
    "knowsAbout": [
      "Direito do Consumidor",
      "Voo Cancelado",
      "Cobrança Indevida",
      "Plano de Saúde",
      "Negativação Indevida",
      "Produto Defeituoso",
      "Fraude Bancária"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Salvador",
      "addressRegion": "BA",
      "addressCountry": "BR"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+55-71-99999-9999",
        "contactType": "customer service",
        "availableLanguage": "Portuguese",
        "areaServed": "BR"
      },
      {
        "@type": "ContactPoint",
        "email": "contato@advogadoonline.com.br",
        "contactType": "customer support",
        "availableLanguage": "Portuguese"
      }
    ],
    "sameAs": [
      "https://wa.me/5571999999999"
    ]
  };

  // Schema.org LocalBusiness - For local SEO and Google Maps
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://advogadoonline.com.br/#localbusiness",
    "name": "Advogado Online",
    "image": "https://advogadoonline.com.br/favicon.svg",
    "description": "Advogado do Consumidor Online. Voo cancelado, cobrança indevida, plano de saúde, produto defeituoso. Consulta gratuita em todo o Brasil.",
    "url": "https://advogadoonline.com.br",
    "telephone": "+55-71-99999-9999",
    "email": "contato@advogadoonline.com.br",
    "priceRange": "Consulta Gratuita",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Pix, Cartão de Crédito, Boleto",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Atendimento Online",
      "addressLocality": "Salvador",
      "addressRegion": "BA",
      "postalCode": "40000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.9714,
      "longitude": -38.5014
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Maria Silva"
        },
        "reviewBody": "Excelente atendimento! Consegui resolver minha questão trabalhista rapidamente."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "João Santos"
        },
        "reviewBody": "Muito profissionais e atenciosos. Recomendo a todos."
      }
    ]
  };

  // Schema.org LegalService - Specific for legal services
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://advogadoonline.com.br/#legalservice",
    "name": "Advogado do Consumidor Online",
    "description": "Especialistas em Direito do Consumidor. Voo cancelado, cobrança indevida, plano de saúde, produto defeituoso, negativação indevida. Consulta gratuita.",
    "url": "https://advogadoonline.com.br",
    "telephone": "+55-71-99999-9999",
    "email": "contato@advogadoonline.com.br",
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "serviceType": [
      "Voo Cancelado e Atraso",
      "Cobrança Indevida",
      "Plano de Saúde",
      "Fraude Bancária",
      "Produto Defeituoso",
      "Negativação Indevida",
      "Direito do Consumidor"
    ],
    "priceRange": "Consulta Gratuita",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Jurídicos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Indenização por Voo Cancelado",
            "description": "Consiga até R$ 15.000 por voo cancelado ou atrasado"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cobrança Indevida",
            "description": "Devolução em dobro + danos morais por cobranças indevidas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plano de Saúde Negou",
            "description": "Liminar em 48h para procedimentos negados"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Negativação Indevida",
            "description": "Indenização por nome sujo indevido no SPC/Serasa"
          }
        }
      ]
    }
  };

  // Schema.org WebSite - For sitelinks search box
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Advogado Online",
    "alternateName": "Advogado Online Brasil",
    "url": "https://advogadoonline.com.br",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://advogadoonline.com.br/perguntas?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Schema.org WebPage for homepage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advogado Online - Consulta Jurídica Gratuita",
    "description": "Fale agora com um advogado especialista. Atendimento jurídico online gratuito e imediato.",
    "url": "https://advogadoonline.com.br",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://advogadoonline.com.br/#website"
    },
    "about": {
      "@type": "Thing",
      "name": "Serviços Jurídicos Online"
    },
    "mainEntity": {
      "@type": "LegalService",
      "@id": "https://advogadoonline.com.br/#legalservice"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-text"]
    }
  };

  return (
    <PageTransition variant="slideUp">
      <Helmet>
        <title>Advogado Online | Consulta Jurídica Gratuita com Especialistas</title>
        <meta name="description" content="Fale agora com um advogado especialista. Atendimento jurídico online gratuito e imediato em Direito Trabalhista, Família, Previdenciário, Civil e Criminal." />
        <meta name="keywords" content="advogado online, consulta jurídica gratuita, advogado trabalhista, advogado família, direitos trabalhistas, pensão alimentícia, divórcio, aposentadoria INSS" />
        <link rel="canonical" href="https://advogadoonline.com.br" />
        
        <meta property="og:title" content="Advogado Online | Consulta Jurídica Gratuita" />
        <meta property="og:description" content="Fale agora com um advogado especialista. Atendimento gratuito e imediato." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advogadoonline.com.br" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advogado Online | Consulta Jurídica Gratuita" />
        <meta name="twitter:description" content="Fale agora com um advogado especialista. Atendimento gratuito e imediato." />
        
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(legalServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webSiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar onCtaClick={handleCTA} />
        {/* Hero Section */}
      <HeroSection />

      {/* Lawyer Chat */}
      <div id="lawyer-chat" ref={chatRef}>
        <LawyerChatSection />
      </div>

      {/* WhatsApp Testimonials Section */}
      <WhatsAppTestimonials />

      {/* Consumer Problems Section */}
      <ConsumerProblemsSection />

      {/* Lawyers Showcase Section */}
      <div id="advogados">
        <LawyersShowcase />
      </div>

      {/* Credibility Section */}
      <CredibilitySection />

      {/* FAQ Section - Recebe área detectada do chat */}
      <ObjecionsFAQ detectedArea={detectedArea} />

      {/* Articles Section */}
      <ArticlesSection />

      {/* News Section */}
      <NewsSection />

      {/* Footer */}
      <footer className="border-t bg-gradient-to-b from-muted/30 to-muted/50 py-8 sm:py-10 safe-bottom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-2">Advogado Online</p>
              <p>OAB/BA 46.638 | CNPJ 50.947.818/0001-94</p>
              <p>© 2025</p>
              <p className="mt-2">Atendimento: seg-sex 8h às 20h</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <a 
                  href="https://wa.me/5571999999999?text=Olá!%20Preciso%20de%20ajuda%20jurídica.%20Pode%20me%20atender%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-whatsapp-send-btn transition-all duration-200 hover:scale-110 flex items-center gap-2 py-2 min-h-[48px]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
                <a 
                  href="mailto:contato@advogadoonline.com.br"
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
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup />
      
      {/* Mobile Bottom CTA */}
      <MobileBottomCTA onCtaClick={handleCTA} chatVisible={chatVisible} />
      
      {/* Success Notifications */}
      <SuccessNotification disabled={chatVisible} />
      </div>
    </PageTransition>
  );
};

const Index = () => {
  return (
    <DetectedProblemProvider>
      <IndexContent />
    </DetectedProblemProvider>
  );
};

export default Index;
