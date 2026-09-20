"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ImageIcon } from "lucide-react"
import Image from "next/image"
import {
  stonesCatalog,
  getPedrasMoledos,
  getCacos,
  getLajinhas,
  getOutros,
  getWhatsAppLink,
  type StoneProduct,
} from "@/data/catalog"

function StoneCard({ stone }: { stone: StoneProduct }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-panel rounded-xl overflow-hidden group hover:border-[hsl(var(--stone-champagne))]/40 transition-all flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-white/5 overflow-hidden">
        {stone.imagePath ? (
          <Image
            src={stone.imagePath}
            alt={stone.nome}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
            <ImageIcon className="w-12 h-12 text-white/30 mb-2" />
            <p className="text-sm text-white/50 font-medium">{stone.nome}</p>
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="default" className="bg-black/60 text-white border-0 backdrop-blur-sm">
            {stone.categoriaDisplay}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4 flex flex-col flex-1">
        <div>
          <h3 className="text-xl font-semibold text-[hsl(41_48%_55%)] mb-2">{stone.nome}</h3>
          {stone.descricao && (
            <p className="text-sm text-white/90">{stone.descricao}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-white/90 mb-1">Indicado para:</p>
            <div className="flex flex-wrap gap-1">
              {stone.indicadoPara.map((uso) => (
                <Badge
                  key={uso}
                  variant="outline"
                  className="text-xs border-[hsl(var(--stone-champagne))]/20"
                >
                  {uso}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/90 mb-1">Visual:</p>
            <p className="text-[hsl(41_48%_55%)] font-medium capitalize">{stone.visual}</p>
            <p className="text-white/90 text-xs mt-1">
              Manutenção: <span className="text-foreground capitalize">{stone.manutencao}</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm transition-all mt-auto"
        >
          <MessageCircle className="w-4 h-4" />
          Ver no WhatsApp
        </a>
      </div>
    </motion.div>
  )
}

export function Catalog() {
  return (
    <section id="catalogo" className="relative py-20 sm:py-28 bg-white/[0.02]">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Catálogo de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(41_48%_55%)] to-[hsl(46_22%_72%)]">
              pedras naturais
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Clique no modelo para pedir orçamento e recomendações de uso
          </p>
        </motion.div>

        {/* Desktop: Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="todas" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto flex flex-wrap justify-center mb-12 gap-2 bg-white/5 p-3 rounded-2xl min-h-fit">
              <TabsTrigger value="todas" className="rounded-xl py-3 px-6 data-[state=active]:bg-[hsl(var(--stone-champagne))]">
                Todas
              </TabsTrigger>
              <TabsTrigger value="moledos" className="rounded-xl py-3 px-6 data-[state=active]:bg-[hsl(var(--stone-champagne))]">
                Moledos
              </TabsTrigger>
              <TabsTrigger value="cacos" className="rounded-xl py-3 px-6 data-[state=active]:bg-[hsl(var(--stone-champagne))]">
                Cacos
              </TabsTrigger>
              <TabsTrigger value="lajinhas" className="rounded-xl py-3 px-6 data-[state=active]:bg-[hsl(var(--stone-champagne))]">
                Lajinhas
              </TabsTrigger>
              <TabsTrigger value="outros" className="rounded-xl py-3 px-6 data-[state=active]:bg-[hsl(var(--stone-champagne))]">
                Outros
              </TabsTrigger>
            </TabsList>

            <TabsContent value="todas">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {stonesCatalog.map((stone) => (
                  <StoneCard key={stone.id} stone={stone} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="moledos">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getPedrasMoledos().map((stone) => (
                  <StoneCard key={stone.id} stone={stone} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cacos">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getCacos().map((stone) => (
                  <StoneCard key={stone.id} stone={stone} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lajinhas">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getLajinhas().map((stone) => (
                  <StoneCard key={stone.id} stone={stone} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="outros">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getOutros().map((stone) => (
                  <StoneCard key={stone.id} stone={stone} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Mobile: Sectioned Layout */}
        <div className="md:hidden space-y-12">
          {/* Moledos Section */}
          {getPedrasMoledos().length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[hsl(41_48%_55%)] mb-6 text-center">
                Moledos
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {getPedrasMoledos().map((stone) => (
                  <StoneCard key={stone.id} stone={stone} />
                ))}
              </div>
            </div>
          )}

          {/* Cacos Section */}
          {getCacos().length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[hsl(41_48%_55%)] mb-6 text-center">
                Cacos
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {getCacos().map((stone) => (
                  <StoneCard key={stone.id} stone={stone} />
                ))}
              </div>
            </div>
          )}

          {/* Lajinhas Section */}
          {getLajinhas().length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[hsl(41_48%_55%)] mb-6 text-center">
                Lajinhas
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {getLajinhas().map((stone) => (
                  <StoneCard key={stone.id} stone={stone} />
                ))}
              </div>
            </div>
          )}

          {/* Outros Section */}
          {getOutros().length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[hsl(41_48%_55%)] mb-6 text-center">
                Outros
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {getOutros().map((stone) => (
                  <StoneCard key={stone.id} stone={stone} />
                ))}
              </div>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-white mb-4">
            👉 <strong>Mande foto do ambiente + cidade + medidas aproximadas</strong> e te indicamos as melhores opções.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
