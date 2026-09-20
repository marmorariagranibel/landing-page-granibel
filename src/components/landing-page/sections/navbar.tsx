"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { getWhatsAppLink } from "@/data/catalog"

const navLinks = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Como Escolher", href: "#guia" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Cidades", href: "#cidades" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-width flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center gap-4">
            <Image
              src="/logo-fundo-transparente.png"
              alt="Granibel"
              width={56}
              height={56}
              className="h-14 w-14"
              priority
            />
            <h1 className="text-4xl font-display font-bold tracking-tight bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)] bg-clip-text text-transparent">
              Grani Bel
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Pedir Orçamento
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-foreground/80 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border" />
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#25D366] text-white font-semibold"
              >
                Pedir Orçamento no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
