import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import LawyersShowcase from "@/components/LawyersShowcase";
import WhatsAppTestimonials from "@/components/WhatsAppTestimonials";
import CredibilitySection from "@/components/CredibilitySection";
import ObjecionsFAQ from "@/components/ObjecionsFAQ";
import Navbar from "@/components/Navbar";
import ArticlesSection from "@/components/ArticlesSection";
import NewsSection from "@/components/NewsSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import LegalProblemsSection from "@/components/LegalProblemsSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  // Schema.org Organization - Enhanced for Knowledge Panel
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Advogado Já",
    "alternateName": "Advogado Já Brasil",
    "url": "https://advogadoja.lovable.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://advogadoja.lovable.app/favicon.svg",
      "width": 512,
      "height": 512
    },
    "image": "https://advogadoja.lovable.app/favicon.svg",
    "description": "Escritório de advocacia online especializado em todas as áreas do direito. Trabalhista, Família, Consumidor, Previdenciário, Civil e Criminal. Atendimento via WhatsApp.",
    "email": "contato@advogadoja.com.br",
    "telephone": "+55-71-99703-6269",
    "foundingDate": "2024",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "slogan": "Seu direito, nossa missão",
    "knowsAbout": [
      "Direito Trabalhista",
      "Direito de Família",
      "Direito do Consumidor",
      "Direito Previdenciário",
      "Direito Civil",
      "Direito Penal"
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
        "telephone": "+55-71-99703-6269",
        "contactType": "customer service",
        "availableLanguage": "Portuguese",
        "areaServed": "BR"
      },
      {
        "@type": "ContactPoint",
        "email": "contato@advogadoja.com.br",
        "contactType": "customer support",
        "availableLanguage": "Portuguese"
      }
    ],
    "sameAs": [
      "https://wa.me/5571997036269"
    ]
  };

  // Schema.org LocalBusiness - For local SEO and Google Maps
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://advogadoja.lovable.app/#localbusiness",
    "name": "Advogado Já",
    "image": "https://advogadoja.lovable.app/favicon.svg",
    "description": "Escritório de advocacia online. Trabalhista, Família, Consumidor, Previdenciário, Civil e Criminal. Consulta gratuita em todo o Brasil.",
    "url": "https://advogadoja.lovable.app",
    "telephone": "+55-71-99703-6269",
    "email": "contato@advogadoja.com.br",
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
    "@id": "https://advogadoja.lovable.app/#legalservice",
    "name": "Advogado Já - Escritório de Advocacia Online",
    "description": "Escritório especializado em Direito Trabalhista, Família, Consumidor, Previdenciário, Civil e Criminal. Atendimento via WhatsApp em todo o Brasil.",
    "url": "https://advogadoja.lovable.app",
    "telephone": "+55-71-99703-6269",
    "email": "contato@advogadoja.com.br",
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "serviceType": [
      "Reclamação Trabalhista",
      "Divórcio e Guarda de Filhos",
      "Pensão Alimentícia",
      "Aposentadoria INSS",
      "Auxílio-Doença",
      "Indenização Consumidor",
      "Voo Cancelado",
      "Negativação Indevida",
      "Inventário e Herança",
      "Defesa Criminal"
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
            "name": "Direito Trabalhista",
            "description": "Demissão, verbas rescisórias, horas extras, assédio moral"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito de Família",
            "description": "Divórcio, guarda de filhos, pensão alimentícia, inventário"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito do Consumidor",
            "description": "Voo cancelado, plano de saúde, negativação indevida"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito Previdenciário",
            "description": "Aposentadoria, auxílio-doença, BPC/LOAS, pensão por morte"
          }
        }
      ]
    }
  };

  // Schema.org WebSite - For sitelinks search box
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Advogado Já",
    "alternateName": "Advogado Já Brasil",
    "url": "https://advogadoja.lovable.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://advogadoja.lovable.app/perguntas?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Schema.org WebPage for homepage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advogado Online | Trabalhista, Família, Consumidor | Advogado Já",
    "description": "Precisa de advogado? Especialistas em Direito Trabalhista, Família, Consumidor, Previdenciário, Civil e Criminal. Atendimento via WhatsApp. Consulta gratuita.",
    "url": "https://advogadoja.lovable.app",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://advogadoja.lovable.app/#website"
    },
    "about": {
      "@type": "Thing",
      "name": "Serviços Jurídicos Online"
    },
    "mainEntity": {
      "@type": "LegalService",
      "@id": "https://advogadoja.lovable.app/#legalservice"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-text"]
    }
  };

  return (
    <PageTransition variant="slideUp">
      <Helmet>
        <title>Advogado Online | Trabalhista, Família, Consumidor | Advogado Já</title>
        <meta name="description" content="Precisa de advogado? Especialistas em Direito Trabalhista, Família, Consumidor, Previdenciário, Civil e Criminal. Atendimento via WhatsApp. Consulta gratuita." />
        <meta name="keywords" content="advogado online, advogado trabalhista, advogado família, advogado consumidor, advogado previdenciário, divórcio, demissão, aposentadoria, consulta gratuita, preciso de advogado direito do consumidor, falar com advogado direito do consumidor, advogado para problema reclame aqui, resolver problema reclame aqui, advogado para problema procon, resolver problema consumidor.gov, ajuda jurídica direito do consumidor, orientação jurídica direito do consumidor" />
        <link rel="canonical" href="https://advogadoja.lovable.app" />
        
        <meta property="og:title" content="Advogado Online | Trabalhista, Família, Consumidor | Advogado Já" />
        <meta property="og:description" content="Precisa de advogado? Especialistas em Direito Trabalhista, Família, Consumidor, Previdenciário, Civil e Criminal. Atendimento via WhatsApp. Consulta gratuita." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advogadoja.lovable.app" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advogado Online | Trabalhista, Família, Consumidor | Advogado Já" />
        <meta name="twitter:description" content="Precisa de advogado? Especialistas em Direito Trabalhista, Família, Consumidor, Previdenciário, Civil e Criminal. Atendimento via WhatsApp. Consulta gratuita." />
        
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
        <Navbar />
        
        {/* Hero Section */}
        <HeroSection />

        {/* Practice Areas Section - 6 Legal Areas */}
        <PracticeAreasSection />

        {/* WhatsApp Testimonials Section */}
        <WhatsAppTestimonials />

        {/* Legal Problems Section - Common issues */}
        <LegalProblemsSection />

        {/* Lawyers Showcase Section */}
        <div id="advogados">
          <LawyersShowcase />
        </div>

        {/* Credibility Section */}
        <CredibilitySection />

        {/* FAQ Section */}
        <ObjecionsFAQ />

        {/* Services Section - ALL Landing Pages */}
        <ServicesSection />

        {/* Articles Section */}
        <ArticlesSection />

        {/* News Section */}
        <NewsSection />

        {/* SEO Keywords Section - Hidden but crawlable for Google Ads */}
        <section className="sr-only" aria-hidden="true">
          <h2>Preciso de Advogado Direito do Consumidor</h2>
          <p>Se você precisa de advogado direito do consumidor, nossa equipe pode ajudar. Oferecemos atendimento especializado para quem quer falar com advogado direito do consumidor.</p>
          <h3>Advogado para Problema Reclame Aqui</h3>
          <p>Precisa de advogado para problema reclame aqui? Ajudamos você a resolver problema reclame aqui de forma rápida e eficiente.</p>
          <h3>Advogado para Problema Procon</h3>
          <p>Nosso escritório atende casos de advogado para problema procon. Também oferecemos suporte para resolver problema consumidor.gov.</p>
          <h3>Ajuda Jurídica e Orientação Direito do Consumidor</h3>
          <p>Busca ajuda jurídica direito do consumidor? Oferecemos orientação jurídica direito do consumidor com advogados especializados. Falar com advogado direito do consumidor nunca foi tão fácil.</p>
        </section>

        {/* Footer */}
        <footer className="border-t bg-gradient-to-b from-muted/30 to-muted/50 py-8 sm:py-10 safe-bottom">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">Advogado Já</p>
                <p>OAB/BA 46.638 | CNPJ 50.947.818/0001-94</p>
                <p>© 2025</p>
                <p className="mt-2">Atendimento: seg-sex 8h às 20h</p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <a 
                    href="https://wa.me/5571997036269?text=Olá!%20Preciso%20de%20ajuda%20jurídica.%20Pode%20me%20atender%3F" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-all duration-200 hover:scale-110 flex items-center gap-2 py-2 min-h-[48px]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
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

export default Index;
