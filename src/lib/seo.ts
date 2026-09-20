import { siteConfig } from "@/lib/site"
import { Metadata } from "next"

export function constructMetadata({
  title = siteConfig.businessName,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/logo.png",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    keywords: siteConfig.keywords.join(", "),
    authors: [{ name: siteConfig.name }],
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

// JSON-LD Schemas
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: "+55-55-99220-4461",
    priceRange: "$$",
    image: siteConfig.ogImage,
    address: {
      "@type": "PostalAddress",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "São Luís Gonzaga" },
      { "@type": "City", name: "Bossoroca" },
      { "@type": "City", name: "Caibaté" },
      { "@type": "City", name: "Santo Ângelo" },
      { "@type": "City", name: "Santa Rosa" },
      { "@type": "City", name: "Catuípe" },
      { "@type": "City", name: "Ajuricaba" },
      { "@type": "City", name: "Santo Augusto" },
      { "@type": "City", name: "Augusto Pestana" },
      { "@type": "City", name: "Jóia" },
      { "@type": "City", name: "Cruz Alta" },
      { "@type": "City", name: "Tupanciretã" },
      { "@type": "City", name: "Ibirubá" },
      { "@type": "City", name: "Boa Vista do Cadeado" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  }
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vocês ajudam a escolher o melhor modelo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Você manda foto do ambiente e o estilo que procura, e sugerimos opções conforme uso, manutenção e estética.",
        },
      },
      {
        "@type": "Question",
        name: "Preciso ter a medida exata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. Medidas aproximadas já ajudam a montar um orçamento inicial e orientar os próximos passos.",
        },
      },
      {
        "@type": "Question",
        name: "Dá para usar em fachada e área gourmet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A indicação varia conforme sol, chuva, umidade e limpeza. Por isso fazemos orientação antes.",
        },
      },
      {
        "@type": "Question",
        name: "Como é a limpeza e manutenção?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende do modelo. Informamos cuidados e, quando necessário, orientamos impermeabilização e limpeza adequada.",
        },
      },
      {
        "@type": "Question",
        name: "Por que não tem preço na página?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Porque o valor varia por modelo, metragem e detalhes do local. Preferimos orçar certo para você não ter surpresa.",
        },
      },
      {
        "@type": "Question",
        name: "Qual o prazo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Varia por modelo e agenda. No WhatsApp confirmamos prazo junto com o orçamento.",
        },
      },
    ],
  }
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Catálogo",
        item: `${siteConfig.url}#catalogo`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contato",
        item: `${siteConfig.url}#contato`,
      },
    ],
  }
}
