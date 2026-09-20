"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react"
import { getWhatsAppLink } from "@/data/catalog"
import { siteConfig } from "@/lib/site"
import { citiesText } from "@/data/cities"

export function ContactFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* CTA Final */}
      <section id="contato" className="relative py-20 sm:py-32 bg-white/[0.02]">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white">
              Quer orçamento e recomendação{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--stone-champagne))] to-[hsl(var(--stone-gold))]">
                pro seu ambiente?
              </span>
            </h2>

            <div className="glass-panel p-8 rounded-2xl max-w-2xl mx-auto">
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Chame no WhatsApp e envie:
              </p>
              <ol className="space-y-3 text-left max-w-xl mx-auto mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--stone-champagne))]/20 text-[hsl(var(--stone-champagne))] flex items-center justify-center font-bold">
                    1
                  </span>
                  <span className="text-white pt-1">Foto do local</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--stone-champagne))]/20 text-[hsl(var(--stone-champagne))] flex items-center justify-center font-bold">
                    2
                  </span>
                  <span className="text-white pt-1">Cidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--stone-champagne))]/20 text-[hsl(var(--stone-champagne))] flex items-center justify-center font-bold">
                    3
                  </span>
                  <span className="text-white pt-1">Medidas aproximadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--stone-champagne))]/20 text-[hsl(var(--stone-champagne))] flex items-center justify-center font-bold">
                    4
                  </span>
                  <span className="text-white pt-1">Modelo(s) que você gostou</span>
                </li>
              </ol>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-full transition-all shadow-2xl hover:shadow-[#25D366]/30 hover:scale-105"
              >
                <span>Pedir orçamento no WhatsApp</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="text-sm text-white/90 mt-4">
                Sem compromisso • Atendimento rápido • Orientação antes de fechar
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-12">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)]">
                {siteConfig.name}
              </h3>
              <p className="text-sm text-white/90 mb-4">
                Revestimentos em pedras naturais e marmoraria
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)] font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-white/90">
                  <Phone className="w-4 h-4 mt-0.5 text-[hsl(var(--accent-gold))]" />
                  <div className="flex flex-col gap-1">
                    <a
                      href="https://wa.me/5555991280568"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      (55) 99128-0568
                    </a>
                    <a
                      href={siteConfig.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      (55) 99220-4461
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-white/90">
                  <svg className="w-4 h-4 mt-0.5 text-[hsl(var(--accent-gold))]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Clique aqui para acessar nosso instagram
                  </a>
                </li>
                <li className="flex items-start gap-2 text-white/90">
                  <MapPin className="w-4 h-4 mt-0.5 text-[hsl(var(--accent-gold))]" />
                  <div className="flex flex-col">
                    <span>Rua Carlos Zimpel, 1315</span>
                    <span>Bairro Thomé de Souza</span>
                    <span>Ijuí/RS - CEP 98700-000</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-white/90">
                  <Clock className="w-4 h-4 mt-0.5 text-[hsl(var(--accent-gold))]" />
                  <span>Seg - Sex: 07:30h às 12:00h | 13:30h às 18:00h</span>
                </li>
              </ul>
            </div>

            {/* Cidades */}
            <div>
              <h4 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)] font-semibold mb-4">Cidades Atendidas</h4>
              <p className="text-sm text-white/90 leading-relaxed">
                {citiesText}
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/90">
            <p>© {currentYear} {siteConfig.name}. Todos os direitos reservados.</p>
            
          </div>
        </div>
      </footer>
    </>
  )
}
