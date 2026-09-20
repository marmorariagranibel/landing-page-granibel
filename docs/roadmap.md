# 🗺️ Roadmap & Guia de Adaptação do Esqueleto

Este documento detalha a arquitetura do projeto e serve como manual para transformar este esqueleto em qualquer Landing Page SaaS Premium.

---

## 🏗️ Arquitetura: Quem manda em quê?

### 1. `src/app/page.tsx` (O Maestro)
É aqui que você **monta** a página. Pense nele como uma prateleira vazia onde você "encaixa" as seções.
- **Função**: Importar componentes de `src/components/landing-page` e ordená-los.
- **O que alterar**: A ordem das tags `<Hero />`, `<Features />`, etc. Se não quiser uma seção, basta apagar a linhha.

### 2. `src/app/globals.css` (O Estilista)
Define a alma visual do site. O tema "Dark Premium" é controlado aqui através de variáveis CSS.
- **Principal variável**: `--primary` (Cor principal da marca).
- **Secundária**: `--accent` (Cor de destaque/botões).
- **Fundo**: O projeto usa um sistema de camadas. O fundo preto "falso" vem daqui, mas o visual real vem de `BackgroundGlobal`.

### 3. `src/components/landing-page/shared/` (As Ferramentas)
Componentes genéricos usados por todas as seções para manter consistência.
- **`Container`**: Garante que todo o conteúdo fique centralizado e alinhado (max-width: 1280px).
- **`SectionHeading`**: O título padrão de cada seção (Eyebrow + Título + Subtítulo).
- **`BackgroundGlobal`**: O fundo fixo com gradientes e "glow" que dá o aspecto premium. Ele fica solto em `page.tsx` para não ser renderizado repetidamente em cada seção.

---

## 🧩 Mapa das Seções (`src/components/landing-page/sections/`)

Aqui estão os "blocos de Lego" prontos para uso. Cada arquivo é independente.

| Arquivo | Função | O que adaptar |
| :--- | :--- | :--- |
| **`navbar.tsx`** | Menu fixo com blur + Mobile Menu | Links de navegação e Logotipo (SVG ou Texto). |
| **`hero.tsx`** | Primeira dobra (Título + CTA + Imagem) | Headline principal, link do botão CTA e a imagem/mockup flutuante à direita. |
| **`problems.tsx`** | Lista de problemas/dores do cliente | Títulos dos cards e ícones (importados de `lucide-react`). |
| **`features.tsx`** | Detalhes do produto/serviço | Descrições longas e prints do sistema. |
| **`cases.tsx`** | Prova social / Números | Depoimentos ou métricas de sucesso (ex: "Mais de 10k clientes"). |
| **`pricing.tsx`** | Tabela de preços | Nomes dos planos, valores (R$) e lista de benefícios (checklist). |
| **`faq.tsx`** | Perguntas frequentes (Accordion) | As perguntas e respostas de texto. |
| **`contact-footer.tsx`** | Rodapé com CTA final e links | Links sociais, e-mail de contato e copyright. |

---

## 🔄 Fluxo de Adaptação (Passo a Passo)

Para criar uma nova LP para um cliente "X", siga este roteiro:

### Passo 1: Identidade Visual
1. Abra `src/app/globals.css`.
2. Mude o `--primary` para a cor da marca do cliente (procure valores `oklch` ou use hex se preferir ajustar o css base).
3. Se o cliente for "Claro/Clean", inverta as cores em `.dark` ou force o theme light.

### Passo 2: Montagem
1. Abra `src/app/page.tsx`.
2. Olhe para o conteúdo que você tem. Não tem "Preço"? Remova `<Pricing />`. Quer "Benefícios" antes de "Problemas"? Inverta a ordem.

### Passo 3: Conteúdo (Copywriting)
1. Abra seção por seção em `src/components/landing-page/sections/`.
2. Substitua os textos "Lorem Ipsum" ou genéricos pelo copy real.
3. **Dica**: Use o componente `<SectionHeading />` para manter os títulos padronizados.
   ```tsx
   <SectionHeading 
     eyebrow="Sobre Nós" 
     title="Quem somos" 
     subtitle="..." 
   />
   ```

### Passo 4: Imagens e Ícones
1. Substitua os ícones `Lucide` por outros que façam sentido para o nicho (ex: `Tooth` para dentista, `Building` para imobiliária).
2. Para imagens, troque os `divs` coloridos do esqueleto por componentes `<Image />` do Next.js apontando para prints reais do produto.

### Passo 5: SEO e Configurações
1. Edite `src/lib/site.ts` com o Nome e URL do novo projeto.
2. Edite `src/li/seo.ts` se precisar de metatags específicas.

---

## 🎨 Dicas de Ouro para Manter o Padrão Premium

1. **Evite Cores Sólidas Chapadas**: Use `bg-white/5` ou `bg-primary/10` para fundos de cards. O degradê/transparência é o segredo do "glassmorphism".
2. **Textos Secundários**: Nunca use branco puro para parágrafos. Use `text-muted-foreground` (que é um cinza ajustado) para reduzir o cansaço visual.
3. **Espaçamento**: Mantenha `py-24` ou `py-32` nas seções. O "respiro" é fundamental para o laoyout parecer caro.
