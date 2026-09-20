"use client"

import { motion } from "framer-motion"
import { HelpCircle, Home, Palette, Droplets } from "lucide-react"
import { getWhatsAppLink } from "@/data/catalog"

const questions = [
  {
    icon: Home,
    text: "Onde vai usar?",
    options: "(fachada / interno / área gourmet / área externa)",
  },
  {
    icon: Palette,
    text: "Você quer um visual mais rústico ou moderno?",
    options: null,
  },
  {
    icon: Droplets,
    text: "Prefere manutenção baixa?",
    options: "(limpeza + cuidados)",
  },
  {
    icon: HelpCircle,
    text: "Tem muita umidade/chuva/sol direto?",
    options: null,
  },
  {
    icon: Palette,
    text: "Quer cor clara, média ou escura?",
    options: null,
  },
]

export function ChoosingGuide() {
  return (
    <section id="guia" className="relative py-20 sm:py-28">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Como escolher o revestimento certo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)]">
              (em 60 segundos)
            </span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4 mb-12">
          {questions.map((question, index) => {
            const Icon = question.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-panel p-5 rounded-xl group hover:border-[hsl(var(--stone-champagne))]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[hsl(var(--stone-champagne))]/10 group-hover:bg-[hsl(var(--stone-champagne))]/20 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5 text-[hsl(var(--stone-champagne))]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)]">{question.text}</p>
                    {question.options && (
                      <p className="text-sm text-white/90">{question.options}</p>
                    )}
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
          className="text-center space-y-4"
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Quero ajuda pra escolher no WhatsApp
          </a>
          <p className="text-sm text-white/90">
            Você manda foto e a gente recomenda opções compatíveis
          </p>
        </motion.div>
      </div>
    </section>
  )
}
