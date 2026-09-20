"use client"

import { motion } from "framer-motion"
import { Send, Search, FileText } from "lucide-react"

const steps = [
  {
    icon: Send,
    number: "1",
    title: "Você envia",
    description: "Foto do ambiente + cidade + medidas aproximadas",
    color: "hsl(var(--stone-champagne))",
  },
  {
    icon: Search,
    number: "2",
    title: "Nós indicamos",
    description: "Modelos ideais + cuidados de uso/manutenção",
    color: "hsl(var(--stone-gold))",
  },
  {
    icon: FileText,
    number: "3",
    title: "Você recebe",
    description: "Orçamento e prazo — e combinamos os próximos passos",
    color: "hsl(var(--accent-gold))",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Funciona assim{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--stone-champagne))] to-[hsl(var(--stone-gold))]">
              (simples e rápido)
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-panel p-8 rounded-2xl text-center group hover:border-[hsl(var(--stone-champagne))]/30 transition-all">
                  {/* Number Badge */}
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-6 mb-6 flex justify-center">
                    <div
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)]">{step.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
