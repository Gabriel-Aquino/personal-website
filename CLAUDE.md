# Hub Digital & Portfólio - Diretrizes de Desenvolvimento

## Contexto do Projeto

Este projeto é um Hub Digital Híbrido (Portfólio + Blog Monetizável) construído para operar com custo zero de infraestrutura, foco extremo em performance (Core Web Vitals) e indexação agressiva de SEO.
O sistema consolida verticais distintas de conteúdo (Silos: Arquitetura de Software/Tech, Jogos/Servidores, Curadoria em Vídeo) sem poluir a autoridade do domínio principal.

## Perfil do Usuário

O desenvolvedor principal é um Tech Lead com background sólido em ecossistemas de back-end (Node.js, Java, Go) e profunda aplicação de Clean Architecture, SOLID e DDD. Ao explicar ou gerar soluções de front-end, mapeie os conceitos (sempre que possível) para paradigmas de back-end. Trate a arquitetura de informação com rigor.

## Tech Stack Obrigatória

- **Framework:** Astro (SSG - Static Site Generation).
- **Linguagem:** TypeScript.
- **Estilização:** Tailwind CSS.
- **Conteúdo:** Markdown (.md) e MDX (.mdx).
- **Validação:** Zod (Astro Content Collections).
- **Deploy Target:** Vercel / Cloudflare Pages.

## Regras de Engenharia

1.  **TypeScript Estrito:** A flag `strict: true` é mandatória. O uso de `any` é estritamente proibido. Utilize tipagens utilitárias e Zod para inferência de tipos.
2.  **Custo Zero e Desacoplamento:** Nenhuma dependência de banco de dados externo ou CMS tradicional. Todo o estado e conteúdo são derivados de arquivos `.md`/`.json`/`.ts` locais.
3.  **Flexibilidade de Schemas:** Os schemas Zod para as Content Collections devem utilizar largamente `z.optional()`. O administrador deve poder adicionar ou remover metadados sem quebrar o build.
4.  **Renderização Híbrida (MDX):** Componentes React/Astro devem ser desenhados para injeção fluida dentro do Markdown (ex: `<ProductCard />`, `<VideoEmbed />`), isolando a lógica visual do conteúdo em texto.
5.  **Isolamento de Silos (SEO):** Mantenha o roteamento de categorias estritamente isolado (ex: `/tech/`, `/games/`) para garantir a clareza da indexação do Google e otimizar blocos do AdSense.
6.  **Clean Architecture e DRY:** O acesso aos dados estáticos (Astro Content Collections) deve ser feito OBRIGATORIAMENTE através da camada de serviço (`src/services/BlogService.ts`, etc). Arquivos de rotas `.astro` não devem chamar `getCollection()` diretamente.
7.  **Componentização UI:** Lógicas visuais de repetição (como listagens de cards) devem ser isoladas em componentes puros e reutilizáveis em `src/components/`, reduzindo verbosidade nos arquivos de página.

## Integrações Pessoais

- A seção de experiências profissionais não deve depender de web scraping de redes sociais. Deve consumir de um `src/data/resume.ts` estruturado localmente.
- Prepare infraestrutura de componentes para incorporação de vídeos (YouTube/TikTok) e banners de venda direta (produtos digitais, ebooks) de forma contextual.
