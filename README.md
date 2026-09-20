# Grani Bel — Landing Page

Landing page da **Grani Bel**, marmoraria especializada em revestimentos em pedras naturais (mármores, granitos, quartzito, quartzo e lâminas ultracompactas). Site institucional com catálogo de materiais, portfólio de obras e captação de leads via WhatsApp.

🔗 Produção: [granibel.com](https://granibel.com) · 📷 [Instagram](https://www.instagram.com/marmoraria_grani_bel/) · 💬 [WhatsApp](https://wa.me/5555992204461)

## Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Estilo**: Tailwind CSS v4 + `shadcn/ui`
- **Animações**: Framer Motion + `tailwindcss-animate` + Lenis (smooth scroll)
- **Forms**: React Hook Form + Zod + Sonner
- **SEO**: metadata via `src/lib/seo.ts`, sitemap/robots nativos do App Router, `llms.txt`

## Como rodar

```bash
npm install
npm run dev
```

Outros scripts: `npm run build`, `npm run start`, `npm run lint`.

## Seções da página (`src/app/page.tsx`)

| Componente | Conteúdo |
| :--- | :--- |
| `navbar.tsx` | Menu fixo + navegação mobile |
| `hero.tsx` | Chamada principal + CTA |
| `materials.tsx` | Tipos de pedra trabalhados (mármore, granito, quartzito, quartzo, ultracompacto) |
| `catalog.tsx` | Catálogo de materiais disponíveis |
| `portfolio.tsx` | Galeria de obras/aplicações realizadas |
| `choosing-guide.tsx` | Guia de escolha do material ideal |
| `how-it-works.tsx` | Fluxo de atendimento/processo |
| `cities.tsx` | Regiões/cidades atendidas |
| `faq.tsx` | Perguntas frequentes |
| `contact-footer.tsx` | Rodapé com CTA final e contatos |
| `whatsapp-button.tsx` | Botão flutuante de WhatsApp |

## Configuração do site

Toda a identidade (nome, descrição, número de WhatsApp, redes sociais, keywords de SEO) fica centralizada em **`src/lib/site.ts`**. Ajustes de metatags/OpenGraph e JSON-LD (LocalBusiness, FAQ, Breadcrumb) ficam em **`src/lib/seo.ts`**.

Cores e tema (dark premium) são definidos em **`src/app/globals.css`** via CSS variables.

## SEO técnico

- **`src/app/sitemap.ts`**: gera `/sitemap.xml` automaticamente (convenção nativa do Next.js App Router).
- **`src/app/robots.ts`**: gera `/robots.txt`, liberando todo o crawling e apontando para o sitemap.
- **`public/llms.txt`**: resumo do site em texto simples para crawlers de LLMs/IA (convenção [llms.txt](https://llmstxt.org)).
- **JSON-LD**: schemas `LocalBusiness`, `FAQPage` e `BreadcrumbList` injetados em `src/app/layout.tsx` via `src/lib/seo.ts`.

> ⚠️ `siteConfig.ogImage` (usado no Open Graph/Twitter Card) hoje aponta para `/logo-escrito.png` como fallback — o arquivo `/images/og-granibel.jpg` referenciado originalmente não existe no projeto. Recomendo gerar uma imagem de banner real (1200×630px, com foto de obra/catálogo) e apontar `ogImage` para ela.

## Estrutura

```bash
src/
├── app/
│   ├── page.tsx         # Montagem das seções
│   └── globals.css      # Paleta de cores
├── components/
│   ├── landing-page/
│   │   ├── sections/    # Blocos da página (hero, catalog, portfolio, etc.)
│   │   └── shared/      # Container, SectionHeading, BackgroundGlobal, WhatsAppButton
│   └── ui/               # Componentes base (shadcn/ui)
└── lib/                  # site.ts, seo.ts, utils.ts (cn)
```

## Origem do projeto

Este projeto foi criado a partir de um esqueleto interno de landing pages (regras de arquitetura/visual em `rules.md` e guia de adaptação em `docs/roadmap.md`). Esses arquivos documentam o padrão usado para gerar novas LPs a partir do mesmo esqueleto — não são necessários para trabalhar no dia a dia deste projeto já instanciado.

---

Desenvolvido por [**AivonLabs**](https://aivonlabs.com.br/).
