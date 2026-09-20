"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const portfolioImages = [
  {
    id: "1",
    src: "/provas-sociais/01.png",
    alt: "Projeto de revestimento em pedra - Cliente 1",
  },
  // {
  //   id: "2",
  //   src: "/provas-sociais/02.png",
  //   alt: "Projeto de revestimento em pedra - Cliente 2",
  // },
  {
    id: "3",
    src: "/provas-sociais/03.png",
    alt: "Projeto de revestimento em pedra - Cliente 3",
  },
  {
    id: "4",
    src: "/provas-sociais/04.png",
    alt: "Projeto de revestimento em pedra - Cliente 4",
  },
  // {
  //   id: "5",
  //   src: "/provas-sociais/post-3.png",
  //   alt: "Projeto de revestimento em pedra - Cliente 5",
  // },
  // {
  //   id: "6",
  //   src: "/provas-sociais/post-5.png",
  //   alt: "Projeto de revestimento em pedra - Cliente 6",
  // },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Trabalhos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)]">
              realizados
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Confira alguns dos projetos que já executamos com excelência e capricho
          </p>
        </motion.div>

        {/* Grid de imagens */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle className="w-5 h-5 text-[hsl(41_48%_55%)]" />
                    <span className="text-sm font-medium">Projeto Concluído</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Depoimento/CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="glass-panel p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-[hsl(41_48%_55%)]/20">
            <p className="text-lg text-[hsl(41_48%_55%)] mb-2 font-medium">
              Trabalho de qualidade com acabamento premium
            </p>
            <p className="text-white/90">
              Cada projeto é executado com atenção aos detalhes, desde a escolha do material até a instalação final
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
