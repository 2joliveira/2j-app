# 2j-app

Portfolio pessoal desenvolvido em **Next.js** com **TypeScript** e **Tailwind CSS**.

## Visão geral

Este aplicativo é um portfólio pessoal que apresenta:
- Página inicial com seção de perfil e preview visual
- Página de projetos com carrossel de vídeos e cards de portfólio
- Página de contato com formulário validado por Zod e envio de e-mail via API
- Header responsivo com menu de navegação adaptativo
- Animações customizadas e integração com analytics Vercel

## Arquitetura

A aplicação usa o **App Router** do Next.js e organização baseada em pastas `src/app`:
- `src/app/page.tsx` — página inicial
- `src/app/contact/page.tsx` — seção de contato
- `src/app/projects/page.tsx` — seção de projetos
- `src/app/api/send-email/route.ts` — endpoint de envio de e-mail
- `src/app/fonts.ts` — configuração de fontes via `next/font`
- `src/app/globals.css` — estilos globais e animações Tailwind

Componentes reutilizáveis ficam em `src/components` e `src/components/ui`.

## Metadados e SEO

O projeto aproveita o sistema de metadados do **Next.js App Router** para renderizar tags de SEO estáticas e Open Graph:
- `src/app/layout.tsx` define `metadata` globais para título, descrição, `robots` e Open Graph.
- `src/app/projects/page.tsx` adiciona metadados específicos de projeto para título, descrição e imagem Open Graph.
- O Open Graph utiliza URLs absolutas de imagem para pré-visualizações em redes sociais e compartilhamentos.
- As tags `title`, `description` e `robots` são configuradas para indexação (`index, follow`) e boa entrega em buscadores.

Essa abordagem mantém o SEO integrado ao roteamento da aplicação e garante que cada página tenha metadados adequados para crawlers e compartilhamento social.

## Fluxo de contato

A página de contato usa:
- `react-hook-form` para gerenciamento de formulário
- `zod` + `@hookform/resolvers/zod` para validação de esquema
- `react-hot-toast` para notificações de sucesso/erro
- API route `POST /api/send-email` para envio via `resend`

O backend de e-mail depende da variável de ambiente:
- `RESEND_API_KEY`

## Projetos e mídia

A lista de projetos é carregada de `src/app/projects/projects.json` e exibida em um carrossel usando:
- `embla-carousel-react`
- `embla-carousel-autoplay`
- `framer-motion`
- `react-player` (renderização dinâmica sem SSR)

Cada card de projeto exibe:
- título
- descrição
- repositório web
- repositório API (quando disponível)
- domínio do projeto
- vídeo ou demo embutido

## Tecnologias principais

- `next` 15.5.7
- `react` 19.1.0
- `typescript` 5
- `tailwindcss` 4
- `eslint` 9
- `react-hook-form`
- `zod`
- `resend`
- `react-hot-toast`
- `react-icons`
- `embla-carousel`
- `motion`
- `tailwind-variants`
- `classnames`

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

- `npm run dev` — inicia servidor de desenvolvimento com Turbopack
- `npm run build` — compila a aplicação para produção
- `npm run start` — inicia a aplicação compilada
- `npm run lint` — executa ESLint

## Configuração local

1. Instale dependências:
   ```bash
   npm install
   ```
2. Defina a variável de ambiente no `.env` ou no ambiente de execução:
   ```bash
   RESEND_API_KEY=seu_token_resend
   ```
3. Execute em desenvolvimento:
   ```bash
   npm run dev
   ```

## Observações importantes

- O header usa `ResizeObserver` para alternar entre botões de navegação e menu dropdown em telas menores.
- O formulário de contato é um componente cliente (`use client`) e utiliza transições React.
- O `ReactPlayer` é carregado dinamicamente para evitar problemas de SSR.
- O CSS global importa `@tailwindcss/postcss` e define animações customizadas para entradas de tela.

## Deploy

O projeto está preparado para deploy em plataformas compatíveis com Next.js, como Vercel.

> Para rodar em produção localmente, use `npm run build` e `npm run start`.
