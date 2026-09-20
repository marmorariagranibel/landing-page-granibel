# 💀 Landing Page Skeleton (Base Project)

Este é o **projeto base oficial** para criação de Landing Pages de alta conversão. Ele já vem configurado com a melhor stack do mercado e uma arquitetura pensada para escalar.

## 🚀 O que tem aqui?

Um ambiente "plug-and-play" para Engenheiros de Software e Especialistas em UI criarem páginas premium em minutos, não dias.

### 🛠️ Tech Stack (Elite)
- **Framework**: Next.js 16 (App Router) + React 19
- **Estilo**: Tailwind CSS v4 + `css-variables` para temas
- **UI Kit**: `shadcn/ui` (Componentes instalados e configurados)
- **Animações**: Framer Motion + `tailwindcss-animate`
- **Ícones**: Lucide React
- **Forms**: React Hook Form + Zod + Sonner

### 🧠 Cérebro do Projeto (Docs)
Mais do que código, este projeto contém **regras de negócio e design** embutidas:

- **`rules/rules.md`**: O "Mestre". Define a persona do Agente, o mindset de conversão e o protocolo obrigatório de início (Dark vs Light).
- **`docs/roadmap.md`**: O "Mapa". Explica a arquitetura de pastas, onde fica cada componente e como adaptar para novos clientes.

## 🏁 Como Começar (3 Passos)

1.  **Instale as dependências**:
    ```bash
    npm install
    ```

2.  **Leia o Protocolo**:
    Abra `rules/rules.md` e responda às 4 perguntas sagradas (Vibe, Cor, Objetivo, Integração).

3.  **Code**:
    - Edite `src/app/globals.css` para definir as cores da marca.
    - Monte a página em `src/app/page.tsx` importando as seções de `src/components/landing-page/`.
    - Rode o projeto:
    ```bash
    npm run dev
    ```

## 📂 Estrutura Simplificada

```bash
src/
├── app/
│   ├── page.tsx         # Sua tela em branco (montagem)
│   └── globals.css      # Paleta de cores (Dark/Light)
├── components/
│   ├── landing-page/    # Blocos prontos (Hero, Pricing, etc)
│   └── ui/              # Componentes base (Botão, Input, etc)
└── lib/                 # Utilitários (cn, seo, site-config)
```

---
> *Feito para escalar operações de Design & Tech.*
