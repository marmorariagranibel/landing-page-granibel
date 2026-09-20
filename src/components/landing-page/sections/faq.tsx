"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/data/faq-data"

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-width max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Perguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--stone-champagne))] to-[hsl(var(--stone-gold))]">
              frequentes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Tire suas dúvidas sobre pedras, orçamento, instalação e manutenção
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="glass-panel px-6 rounded-xl border-white/10 data-[state=open]:border-[hsl(var(--stone-champagne))]/40"
              >
                <AccordionTrigger className="text-left text-white hover:text-[hsl(var(--stone-champagne))] transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/90 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
