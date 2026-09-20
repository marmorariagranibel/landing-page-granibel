"use client"

import { motion } from "framer-motion"
import { Package, Gem, Sparkles } from "lucide-react"
import { getWhatsAppLink } from "@/data/catalog"

const materials = [
  {
    icon: Gem,
    title: "Pedras Naturais",
    items: ["Moledos", "Cacos", "Lajinhas"],
  },
  {
    icon: Sparkles,
    title: "Marmoraria",
    items: ["Mármores", "Granitos", "Quartzito", "Quartzo", "Lâminas Ultracompactas"],
  },
]

export function Materials() {
  return (
    <section id="materiais" className="relative py-20 sm:py-28">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Materiais e soluções para sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)]">
              construção ou reforma
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Trabalhamos com uma linha completa de revestimentos em pedras naturais e também com marmoraria
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {materials.map((material, index) => {
            const Icon = material.icon
            return (
              <motion.div
                key={material.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-2xl group hover:border-[hsl(var(--stone-champagne))]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[hsl(var(--stone-champagne))]/10 group-hover:bg-[hsl(var(--stone-champagne))]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[hsl(var(--stone-champagne))]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[hsl(41_48%_55%)] mb-3">{material.title}</h3>
                    <ul className="space-y-2">
                      {material.items.map((item) => (
                        <li key={item} className="text-white/90 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-gold))]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm sm:text-base text-white mb-4">
            Não sabe qual é o melhor para o seu ambiente?
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)] hover:from-[hsl(41_48%_60%)] hover:to-[hsl(46_22%_77%)] text-black font-bold text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chame no WhatsApp e mande foto do local
          </a>
        </motion.div>
      </div>
    </section>
  )
}
