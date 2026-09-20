import { BackgroundGlobal } from "@/components/landing-page/shared/background-global"
import { WhatsAppButton } from "@/components/landing-page/shared/whatsapp-button"
import { Navbar } from "@/components/landing-page/sections/navbar"
import { Hero } from "@/components/landing-page/sections/hero"
import { Materials } from "@/components/landing-page/sections/materials"
import { Catalog } from "@/components/landing-page/sections/catalog"
import { Portfolio } from "@/components/landing-page/sections/portfolio"
import { ChoosingGuide } from "@/components/landing-page/sections/choosing-guide"
import { HowItWorks } from "@/components/landing-page/sections/how-it-works"
import { Cities } from "@/components/landing-page/sections/cities"
import { Faq } from "@/components/landing-page/sections/faq"
import { ContactFooter } from "@/components/landing-page/sections/contact-footer"

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <BackgroundGlobal />
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Materials />
        <Catalog />
        <Portfolio />
        <ChoosingGuide />
        <HowItWorks />
        <Cities />
        <Faq />
      </main>

      <div className="relative z-10">
        <ContactFooter />
      </div>

      {/* WhatsApp Fixed Button */}
      <WhatsAppButton />
    </div>
  )
}
