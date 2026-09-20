"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, ChevronDown } from "lucide-react"
import { getWhatsAppLink } from "@/data/catalog"
import Image from "next/image"
import { useState, useEffect } from "react"

// Imagens para o carrossel de fundo - 7 imagens conforme solicitado
const heroImages = [
  "/images/imagens-pedras-revestimento/modelo-champanhe.jpeg",
  "/images/imagens-pedras-revestimento/pedra-ferro.jpeg",
  "/images/imagens-pedras-revestimento/piso-basalto-irregular.jpeg",
  "/images/imagens-pedras-revestimento/olho-de-pombo-almofadada.jpeg",
  "/images/imagens-pedras-revestimento/coco-branco-codorna.jpeg",
  "/images/imagens-pedras-revestimento/pedra-coco-amarelo-claro.jpeg",
  "/images/imagens-pedras-revestimento/revestimento-tijolinho.jpeg",
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000) // Troca a cada 6 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt="Revestimento em pedra natural"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/70" />
          </motion.div>
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="container-width relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white">
            Revestimentos em pedras naturais e marmoraria para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)]">
              valorizar sua obra
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Escolha o modelo ideal para <strong>fachada, paredes internas ou área gourmet</strong> e receba{" "}
            <strong>orçamento no WhatsApp</strong> com fotos, recomendações e prazo.
          </p>

          {/* 3 Bullets */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-8 text-left sm:text-center max-w-3xl mx-auto">
            <div className="flex items-start sm:items-center gap-2">
              <Check className="w-5 h-5 text-[hsl(var(--accent-gold))] flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="text-sm sm:text-base text-white">
                Ajuda para escolher a pedra certa (uso + estética + manutenção)
              </span>
            </div>
            <div className="flex items-start sm:items-center gap-2">
              <Check className="w-5 h-5 text-[hsl(var(--accent-gold))] flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="text-sm sm:text-base text-white">
                Catálogo completo: pedras naturais + marmoraria
              </span>
            </div>
            <div className="flex items-start sm:items-center gap-2">
              <Check className="w-5 h-5 text-[hsl(var(--accent-gold))] flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="text-sm sm:text-base text-white">
                Atendimento rápido pelo WhatsApp (sem compromisso)
              </span>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-full transition-all shadow-2xl hover:shadow-[#25D366]/30 hover:scale-105"
            >
              <span>Pedir orçamento no WhatsApp</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Microcopy */}
            <p className="text-sm text-white/80">
              Resposta rápida • Envie foto e medidas • A gente orienta e orça
            </p>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 pt-4">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "w-8 bg-[hsl(var(--stone-champagne))]"
                    : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ver imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            onClick={() => {
              document.getElementById('materiais')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex flex-col items-center gap-2 pt-12 cursor-pointer hover:opacity-80 transition-opacity mx-auto"
          >
            <p className="text-sm text-white/70 uppercase tracking-wider">Veja mais abaixo</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-white/70" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
