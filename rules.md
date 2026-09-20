# Regras para Desenvolvimento de Landing Pages (Agent)

## 1. Stack Obrigatória
- **Next.js 16 (App Router)**
- **React 19**
- **Tailwind CSS** + **tailwindcss-animate**
- **shadcn/ui** (@/components/ui)
- **Lucide React** (ícones)
- **cn** utility (clsx + tailwind-merge)

## 2. Padrão Visual (Premium Dark)
- Base: `bg-black text-white`
- Secundário: `text-zinc-400`
- Bordas/Vidro: `border-white/10`, `bg-white/5`, `backdrop-blur-xl`
- Destaque: `text-primary`, Gradientes `bg-clip-text`
- **NUNCA** usar cores sólidas chapadas (vermelho puro, azul puro). Use a paleta definida ou gradientes.
- **Background Global**: Sempre usar o padrão de gradiente radial + overlay fixo.

## 3. Estrutura de Arquivos
- Seções em: `src/components/landing-page/sections/`
  - Ex: `hero.tsx`, `features.tsx`, `pricing.tsx`
- Componentes reutilizáveis em: `src/components/landing-page/shared/`
- Componentes UI (shadcn) em: `src/components/ui/`
- Página principal em: `src/app/page.tsx` (montagem das seções)

## 4. Regras de Código
- **ZERO `any`**: Tipagem forte sempre.
- **Server Components** por padrão. Use "use client" apenas se necessário (interatividade, hooks).
- **Acessibilidade**: `aria-label`, foco visível.
- **Sem Backend**: Forms usam `react-hook-form` + `zod` e enviam para serviços externos ou mailto. NUNCA criar endpoints de API falsos.

## 5. Animações
- Entrada: `animate-in fade-in slide-in-from-bottom-8` com delays (`delay-100`, `delay-200`).
- Complexas: Framer Motion (apenas se necessário).

## 6. Checklist de Entrega
- [ ] TypeScript sem erros (sem `any`)
- [ ] Responsividade testada (mobile-first)
- [ ] Visual consistente com tokens
- [ ] Imports corretos (`@/lib/cn`, `@/components/ui/...`)
- [ ] Build verificado (sem erros de lint)
