/**
 * Builders de JSON-LD com SOMENTE dados reais do escritório (já presentes no código).
 * Não acrescentar nota, avaliação, nº de clientes ou endereço de rua sem confirmação.
 */
export const SITE_URL = "https://riccio-advocacia.lovable.app";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const FIRM = {
  name: "Riccio Advocacia",
  attorney: "Gilberto Riccio",
  oab: "OAB/BA 46.638",
  telephone: "+55-71-99703-6269",
  locality: "Salvador",
  region: "BA",
  country: "BR",
} as const;

// Atendimento ONLINE, sem endereço físico. Usamos areaServed (região de atuação)
// em vez de PostalAddress (endereço fixo) para não declarar escritório onde não há.
const serviceArea = {
  "@type": "AdministrativeArea",
  name: "Brasil",
  containedIn: { "@type": "Country", name: "Brasil" },
};

export function attorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${SITE_URL}/#attorney`,
    name: FIRM.attorney,
    givenName: "Gilberto",
    familyName: "Riccio",
    identifier: FIRM.oab,
    jobTitle: "Advogado",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Inscrição profissional",
      recognizedBy: { "@type": "Organization", name: "Ordem dos Advogados do Brasil - Seccional Bahia" },
      identifier: "46.638",
    },
    knowsAbout: [
      "Direito Trabalhista",
      "Direito Previdenciário",
      "Direito de Família",
      "Direito do Consumidor",
      "Direito Civil",
      "Direito Criminal",
      "Direito Sucessório",
    ],
    knowsLanguage: "pt-BR",
    worksFor: { "@id": `${SITE_URL}/#legalservice` },
    workLocation: { "@type": "Place", name: "Atendimento online em todo o Brasil" },
  };
}

export function legalServiceSchema(opts: { areaServed?: string[]; description?: string } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/#legalservice`,
    name: FIRM.name,
    url: SITE_URL,
    image: OG_IMAGE,
    telephone: FIRM.telephone,
    priceRange: "$$",
    // Negócio de atendimento remoto; sem endereço nem horário fixo
    availableLanguage: "pt-BR",
    serviceArea,
    knowsAbout: [
      "Direito Trabalhista",
      "Direito Previdenciário",
      "Direito de Família",
      "Direito do Consumidor",
      "Direito Civil",
      "Direito Criminal",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Áreas de atuação",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoria em Direito Trabalhista" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoria em Direito Previdenciário" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoria em Direito de Família" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoria em Direito do Consumidor" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoria em Direito Criminal" } },
      ],
    },
    ...(opts.description ? { description: opts.description } : {}),
    areaServed: (opts.areaServed?.length
      ? opts.areaServed.map((name) => ({ "@type": "City", name }))
      : [{ "@type": "Country", name: "Brasil" }]),
    employee: { "@id": `${SITE_URL}/#attorney` },
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    mainEntityOfPage: a.url.startsWith("http") ? a.url : `${SITE_URL}${a.url}`,
    image: a.image || OG_IMAGE,
    datePublished: a.datePublished,
    dateModified: a.dateModified || a.datePublished,
    author: { "@type": "Person", name: FIRM.attorney, identifier: FIRM.oab },
    publisher: { "@type": "Organization", name: FIRM.name, logo: { "@type": "ImageObject", url: OG_IMAGE } },
  };
}

export function howToSchema(opts: {
  name: string;
  description?: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  /** caminho relativo ("/blog") ou URL absoluta; omitir no item atual */
  href?: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: it.href.startsWith("http") ? it.href : `${SITE_URL}${it.href}` } : {}),
    })),
  };
}
