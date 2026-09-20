"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/data/catalog"

export function WhatsAppButton() {
  return (
    <a
      id="btn-whatsapp"
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir orçamento no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="whatsapp-text">Pedir Orçamento</span>
    </a>
  )
}
