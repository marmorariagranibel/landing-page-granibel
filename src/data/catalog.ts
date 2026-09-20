export type StoneCategory = "pedras-moledos" | "cacos" | "lajinhas" | "outros"
export type MaintenanceLevel = "baixa" | "média" | "alta"
export type VisualStyle = "rústico" | "moderno" | "clássico" | "industrial" | "clean"

export interface StoneProduct {
  id: string
  nome: string
  categoria: StoneCategory
  categoriaDisplay: string
  imagePath: string | null
  indicadoPara: string[]
  visual: VisualStyle
  manutencao: MaintenanceLevel
  descricao?: string
}

export const stonesCatalog: StoneProduct[] = [
  // PEDRAS MOLEDOS
  {
    id: "champanhe",
    nome: "Champanhe",
    categoria: "pedras-moledos",
    categoriaDisplay: "Pedras Moledos",
    imagePath: "/images/imagens-pedras-revestimento/modelo-champanhe.jpeg",
    indicadoPara: ["Fachada", "Muro", "Parede interna"],
    visual: "clássico",
    manutencao: "média",
    descricao: "Tom champanhe elegante, ideal para ambientes sofisticados",
  },
  {
    id: "champanhe-gold",
    nome: "Champanhe Gold",
    categoria: "pedras-moledos",
    categoriaDisplay: "Pedras Moledos",
    imagePath: "/images/imagens-pedras-revestimento/modelo-champanhe-gold.jpeg",
    indicadoPara: ["Fachada", "Parede interna", "Detalhe"],
    visual: "clássico",
    manutencao: "média",
    descricao: "Pedra moledo com tonalidade dourada sofisticada, confere elegância premium",
  },
  {
    id: "branco-perola",
    nome: "Branco Pérola",
    categoria: "pedras-moledos",
    categoriaDisplay: "Pedras Moledos",
    imagePath: "/images/imagens-pedras-revestimento/modelo-branco-perola.jpeg",
    indicadoPara: ["Fachada", "Parede interna", "Área gourmet"],
    visual: "clean",
    manutencao: "média",
    descricao: "Branco puro com brilho perolado, perfeito para ambientes clean e luminosos",
  },
  {
    id: "bege-bahia",
    nome: "Bege Bahia",
    categoria: "pedras-moledos",
    categoriaDisplay: "Pedras Moledos",
    imagePath: "/images/imagens-pedras-revestimento/pedra-branca-modelo-bahia.jpeg",
    indicadoPara: ["Fachada", "Muro", "Parede interna"],
    visual: "clássico",
    manutencao: "média",
  },
  {
    id: "black-matrix",
    nome: "Black Matrix",
    categoria: "pedras-moledos",
    categoriaDisplay: "Pedras Moledos",
    imagePath: "/images/imagens-pedras-revestimento/modelo-black.jpeg",
    indicadoPara: ["Fachada", "Detalhe", "Parede interna"],
    visual: "moderno",
    manutencao: "baixa",
    descricao: "Pedra escura moderna para contraste marcante e design contemporâneo",
  },

  // CACOS
  {
    id: "amarelo-are",
    nome: "Amarelo Aré",
    categoria: "cacos",
    categoriaDisplay: "Cacos",
    imagePath: "/images/imagens-pedras-revestimento/pedra-coco-amarelo-claro.jpeg",
    indicadoPara: ["Parede interna", "Detalhe", "Área gourmet"],
    visual: "rústico",
    manutencao: "média",
  },
  {
    id: "branco-are-cacos",
    nome: "Branco Aré",
    categoria: "cacos",
    categoriaDisplay: "Cacos",
    imagePath: "/images/imagens-pedras-revestimento/pedra-coco-branco-aré.jpeg",
    indicadoPara: ["Parede interna", "Área gourmet", "Fachada"],
    visual: "clean",
    manutencao: "média",
  },
  {
    id: "branco-codorna-cacos",
    nome: "Branco Codorna",
    categoria: "cacos",
    categoriaDisplay: "Cacos",
    imagePath: "/images/imagens-pedras-revestimento/coco-branco-codorna.jpeg",
    indicadoPara: ["Parede interna", "Área gourmet", "Detalhe"],
    visual: "clean",
    manutencao: "média",
  },

  // LAJINHAS
  {
    id: "amarela-imperial",
    nome: "Amarela Imperial",
    categoria: "lajinhas",
    categoriaDisplay: "Lajinhas",
    imagePath: "/images/imagens-pedras-revestimento/pedra-lajinha-amarelo-aré.jpeg",
    indicadoPara: ["Fachada", "Parede interna"],
    visual: "rústico",
    manutencao: "média",
  },
  {
    id: "branca-codorna-lajinha",
    nome: "Branca Codorna",
    categoria: "lajinhas",
    categoriaDisplay: "Lajinhas",
    imagePath: "/images/imagens-pedras-revestimento/lajinha-branca-codorna.jpeg",
    indicadoPara: ["Fachada", "Parede interna", "Área gourmet"],
    visual: "clean",
    manutencao: "média",
  },
  {
    id: "cinza-lajinha",
    nome: "Lajinha Cinza",
    categoria: "lajinhas",
    categoriaDisplay: "Lajinhas",
    imagePath: "/images/imagens-pedras-revestimento/lajinha-cinza.jpeg",
    indicadoPara: ["Fachada", "Parede interna", "Área gourmet"],
    visual: "moderno",
    manutencao: "baixa",
    descricao: "Pedra Miracema cinza com aspecto tradicional e toque moderno",
  },

  // OUTROS REVESTIMENTOS
  {
    id: "arenito",
    nome: "Arenito",
    categoria: "outros",
    categoriaDisplay: "Outros Revestimentos",
    imagePath: "/images/imagens-pedras-revestimento/arenito.jpg",
    indicadoPara: ["Fachada", "Parede interna"],
    visual: "rústico",
    manutencao: "média",
  },
  {
    id: "tijolinho",
    nome: "Revestimento de Tijolinho",
    categoria: "outros",
    categoriaDisplay: "Outros Revestimentos",
    imagePath: "/images/imagens-pedras-revestimento/revestimento-tijolinho.jpeg",
    indicadoPara: ["Fachada", "Parede interna", "Área gourmet"],
    visual: "rústico",
    manutencao: "baixa",
  },
  {
    id: "filetao-rustico-amarelo",
    nome: "Filetão Rústico Amarelo",
    categoria: "outros",
    categoriaDisplay: "Outros Revestimentos",
    imagePath: "/images/imagens-pedras-revestimento/file-rustico-amarelo.jpeg",
    indicadoPara: ["Parede interna", "Fachada", "Detalhe"],
    visual: "rústico",
    manutencao: "baixa",
    descricao: "Tiras largas de pedra natural em tom amarelado, acabamento rústico autêntico",
  },
  {
    id: "filetao-rustico",
    nome: "Filetão Rústico",
    categoria: "outros",
    categoriaDisplay: "Outros Revestimentos",
    imagePath: "/images/imagens-pedras-revestimento/filetao-rustico.jpeg",
    indicadoPara: ["Parede interna", "Fachada", "Lareira"],
    visual: "rústico",
    manutencao: "baixa",
    descricao: "Tiras largas de pedra natural com acabamento irregular, design orgânico e autêntico",
  },
  {
    id: "pedra-ferro",
    nome: "Pedra Ferro",
    categoria: "outros",
    categoriaDisplay: "Outros Revestimentos",
    imagePath: "/images/imagens-pedras-revestimento/pedra-ferro.jpeg",
    indicadoPara: ["Fachada", "Detalhe"],
    visual: "industrial",
    manutencao: "baixa",
  },
  {
    id: "travertino-rock-natural",
    nome: "Travertino Rock Face Natural",
    categoria: "outros",
    categoriaDisplay: "Outros Revestimentos",
    imagePath: "/images/imagens-pedras-revestimento/travertino-rock-face-natural.jpeg",
    indicadoPara: ["Fachada", "Parede interna", "Área externa"],
    visual: "rústico",
    manutencao: "média",
    descricao: "Travertino com acabamento rústico natural, textura elegante e atemporal",
  },
  {
    id: "travertino-rock-cairo",
    nome: "Travertino Rock Face Importado Cairo",
    categoria: "outros",
    categoriaDisplay: "Outros Revestimentos",
    imagePath: "/images/imagens-pedras-revestimento/travertino-rock-face-importado-cairo.jpeg",
    indicadoPara: ["Fachada", "Parede interna", "Área externa"],
    visual: "clássico",
    manutencao: "média",
    descricao: "Travertino importado com tonalidade bege Cairo, sofisticação premium",
  },
  {
    id: "basalto-irregular",
    nome: "Piso Basalto Irregular",
    categoria: "outros",
    categoriaDisplay: "Outros Revestimentos",
    imagePath: "/images/imagens-pedras-revestimento/piso-basalto-irregular.jpeg",
    indicadoPara: ["Piso externo", "Área gourmet"],
    visual: "rústico",
    manutencao: "baixa",
  },
  {
    id: "olho-pombo",
    nome: "Olho de Pombo Almofadada",
    categoria: "outros",
    categoriaDisplay: "Outros Revestimentos",
    imagePath: "/images/imagens-pedras-revestimento/olho-de-pombo-almofadada.jpeg",
    indicadoPara: ["Fachada", "Parede interna"],
    visual: "clássico",
    manutencao: "média",
  },
]

// Filtros por categoria
export const getPedrasMoledos = () => stonesCatalog.filter((s) => s.categoria === "pedras-moledos")
export const getCacos = () => stonesCatalog.filter((s) => s.categoria === "cacos")
export const getLajinhas = () => stonesCatalog.filter((s) => s.categoria === "lajinhas")
export const getOutros = () => stonesCatalog.filter((s) => s.categoria === "outros")

// Helper para gerar link do WhatsApp com pedra específica
export function getWhatsAppLink(): string {
  const baseUrl = "https://wa.me/5555992204461"
  const defaultMessage = "Olá! Gostaria de um orçamento de pedras, revestimentos ou marmoraria."
  return `${baseUrl}?text=${encodeURIComponent(defaultMessage)}`
}
