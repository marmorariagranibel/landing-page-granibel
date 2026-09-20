export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqData: FAQItem[] = [
  {
    id: "ajuda-escolher",
    question: "Vocês ajudam a escolher o melhor modelo?",
    answer:
      "Sim. Você manda foto do ambiente e o estilo que procura, e sugerimos opções conforme uso, manutenção e estética.",
  },
  {
    id: "medida-exata",
    question: "Preciso ter a medida exata?",
    answer:
      "Não. Medidas aproximadas já ajudam a montar um orçamento inicial e orientar os próximos passos.",
  },
  {
    id: "uso-fachada-gourmet",
    question: "Dá para usar em fachada e área gourmet?",
    answer:
      "Sim. A indicação varia conforme sol, chuva, umidade e limpeza. Por isso fazemos orientação antes.",
  },
  {
    id: "limpeza-manutencao",
    question: "Como é a limpeza e manutenção?",
    answer:
      "Depende do modelo. Informamos cuidados e, quando necessário, orientamos impermeabilização e limpeza adequada.",
  },
  {
    id: "sem-preco",
    question: "Por que não tem preço na página?",
    answer:
      "Porque o valor varia por modelo, metragem e detalhes do local. Preferimos orçar certo para você não ter surpresa.",
  },
  {
    id: "prazo",
    question: "Qual o prazo de entrega?",
    answer: "Varia por modelo e agenda. No WhatsApp confirmamos prazo junto com o orçamento.",
  },
]
