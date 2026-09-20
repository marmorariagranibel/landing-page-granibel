"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { cities } from "@/data/cities"
import { getWhatsAppLink } from "@/data/catalog"

export function Cities() {
  return (
    <section id="cidades" className="relative py-20 sm:py-28 bg-white/[0.02]">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Atendemos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--stone-champagne))] to-[hsl(var(--stone-gold))]">
              estas cidades e região
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12"
        >
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="glass-panel p-4 rounded-lg text-center group hover:border-[hsl(var(--stone-champagne))]/30 transition-all"
            >
              <MapPin className="w-5 h-5 text-[hsl(var(--accent-gold))] mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-white">{city.name}</p>
              <p className="text-xs text-white/90">{city.state}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm sm:text-base text-white/90 mb-4">
            Está em outra cidade próxima?
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium transition-all"
          >
            Chame no WhatsApp e consulte disponibilidade
          </a>
        </motion.div>
      </div>
    </section>
  )
}
