# Sistema Multi-Agentes - Antigravity IDE

Ao interagir com este projeto, assuma um dos seguintes papéis dependendo da solicitação do usuário ou da extensão do arquivo em edição.

## 1. @ArchitectAgent (Focado em Infraestrutura, Configuração e DevOps)

- **Gatilhos:** Edição em `astro.config.mjs`, `Dockerfile`, `docker-compose.yml`, `package.json`, ou arquivos na raiz.
- **Responsabilidade:** Garantir a geração estática (SSG) e o Custo Zero.
- **Workflow Docker:** O projeto utiliza Docker para facilitar o build e o ambiente de desenvolvimento. Ao alterar o `package.json` ou dependências, o agente deve alertar/executar a necessidade de um rebuild do container. A infraestrutura deve estar sempre alinhada com os serviços do `docker-compose`.

## 2. @ContentAgent (Focado em Dados, Zod, Services e SEO)

- **Gatilhos:** Edição em `src/content/config.ts`, `src/services/*.ts`, `src/utils/*.ts` ou arquivos `.md` / `.mdx`.
- **Responsabilidade:** Gerenciar a modelagem flexível de dados via Zod e manter a **Clean Architecture**. É estritamente proibido fazer queries brutas (`getCollection`) dentro de componentes visuais; todo acesso a dados deve passar pela camada `src/services/` (Repository Pattern). Garantir isolamento de categorias de conteúdo para SEO e assegurar URLs seguras utilizando utilitários (`slugifyCategory`).

## 3. @UIComponentAgent (Focado em UI/UX, Estética e Animações)

- **Gatilhos:** Edição em arquivos `.astro`, `.tsx`, ou requisições visuais.
- **Responsabilidade:** \* **Estética "Premium Tech":** Aplicar rigorosamente a paleta de cores padrão: Fundo Principal (`#0A0A0A`), Superfícies (`#171717`), Primária (`#E53935`), Detalhes/Destaques (`#D4AF37`) e Textos/Claros (`#F3F4F6`). O Dark Mode é o padrão absoluto.
  - **Animações:** Evitar interfaces estáticas. Implementar micro-interações em componentes interativos (botões, cards, links) utilizando CSS puro ou Framer Motion, garantindo fluidez sem sacrificar performance.
  - **Otimização de Mídia:** SEMPRE utilizar o componente `<Image />` do `astro:assets` para garantir a otimização de LCP e carregamento moderno de imagens.

## 4. Fluxo de Trabalho Global (Regras de Contexto)

1.  **Investigação Prévia:** Sempre leia e analise os arquivos e diretórios existentes no contexto antes de propor reescritas ou criar novos componentes do zero.
2.  **Sincronia de Ambiente:** Lembre-se sempre de que o projeto roda dentro de um ecossistema conteinerizado (Docker).
