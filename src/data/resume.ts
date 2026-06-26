export const resume = {
  name: "Gabriel Aquino Castelo Branco",
  role: "Software Engineer Pleno",
  bio: "Olá! Sou Software Engineer Pleno apaixonado por transformar problemas complexos em soluções escaláveis. Minha jornada começou nos games e fóruns dos anos 2000, e hoje construo arquiteturas modernas (Node.js, Java, Go). Gosto de aliar tecnologia, inteligência artificial e visão estratégica de negócios. Sinta-se em casa para explorar meus projetos e artigos!",
  socials: {
    github: "https://github.com/Gabriel-Aquino",
    linkedin: "https://linkedin.com/in/gabrielaquinocastelobranco/",
    email: "mailto:gabrielaquinocastelobranco@gmail.com",
  },
  experience: [
    {
      company: "Paketá",
      url: "https://www.paketa.com.br/",
      role: "Software Engineer Pleno",
      period: "Jun 2026 – Atual",
      location: "Remoto",
      description:
        "Atuando ativamente na engenharia de software do produto core da Paketá, focando na construção e sustentação de soluções de crédito de alta performance.",
      details: [
        "Engenharia de Software (Início em Jun/2026): Iniciando os trabalhos com foco em arquiteturas escaláveis, Clean Code e sustentação do ecossistema principal de crédito e benefícios.",
      ],
      techStack: [
        "Node.js",
        "TypeScript",
        "Docker",
        "DDD",
        "PostgreSQL",
        "AWS",
      ],
    },
    {
      company: "Wiser Educação",
      role: "Software Engineer",
      period: "Mar 2025 – Fev 2026",
      location: "Remoto",
      description:
        "Atuei na manutenção contínua e evolução de plataformas educacionais B2B/B2C (ex: Conquer e Grupo Boticário), garantindo alta disponibilidade. Automatizei processos com n8n e estruturei a engenharia de qualidade com testes automatizados E2E.",
      details: [
        "Sustentação e Evolução B2B: Atuei na manutenção e evolução de plataformas consolidadas, desenvolvendo novas features para o Painel do RH e para o motor de gamificação em Go (Golang).",
        "Automação Operacional: Colaborei na melhoria de pipelines de aprovação de documentos acadêmicos via n8n e OCR, garantindo velocidade na análise e redução de custos.",
        "Tolerância a Falhas e Mensageria: Assumi tarefas críticas na emissão de certificados e processamento de uploads, lidando com filas assíncronas via AWS SQS e SNS no ecossistema Java.",
        "Engenharia de Qualidade: Apliquei Clean Architecture na manutenção de microsserviços. Reforcei a confiabilidade criando testes E2E com Playwright e utilizei ferramentas de IA para acelerar as entregas.",
      ],
      techStack: [
        "Java (Spring Boot)",
        "Go",
        "Node.js",
        "n8n",
        "Playwright",
        "AWS (S3, SNS, SQS)",
        "Docker",
        "Redis",
      ],
    },
    {
      company: "Legacy Tech",
      role: "Software Engineer (PJ)",
      period: "Mai 2023 – Mar 2025",
      location: "Remoto",
      description:
        "Liderei a expansão B2B da empresa captando contratos de peso. Projetei e sustentei o backend SaaS Multi-Tenant com Node.js, garantindo alta disponibilidade através da automação de migrações e Clean Architecture.",
      details: [
        "Visão de Negócios e Expansão B2B: Liderei a captação e o fechamento do contrato de prestação de serviços B2B entre a Legacy Tech e a Unimed Maranhão do Sul, alavancando minha própria autoridade técnica e confiança adquirida na região para expandir o portfólio de clientes da empresa.",
        "Engenharia Multi-Tenant e Estabilidade: Projetei e sustentei o backend de um SaaS com isolamento dinâmico de dados. Desenvolvi middlewares em Fastify para roteamento de conexões baseados na sanitização de domínios. Erradiquei problemas críticos de connection leak refatorando o ciclo de vida das instâncias de banco de dados nos repositórios, garantindo alta disponibilidade do sistema.",
        "Automação de Infraestrutura: Implementei a execução automatizada de migrations em tempo de execução para múltiplos bancos de dados isolados, assegurando a evolução segura da estrutura para todos os clientes sem causar downtime.",
        "Performance e Entregas Críticas: Apliquei Clean Architecture e Clean Code na construção dos portais e agendas médicas da Unimed recém-captada, utilizando estratégias de cache com Redis e otimizando a comunicação de dados via ORMs (Prisma, TypeORM).",
      ],
      techStack: [
        "Node.js",
        "Fastify",
        "Docker",
        "PostgreSQL",
        "Oracle PL/SQL",
        "Java",
        "Prisma",
        "TypeORM",
        "Redis",
      ],
    },
    {
      company: "BeFly",
      role: "Software Engineer (PJ)",
      period: "Ago 2022 – Mar 2023",
      location: "Remoto",
      description:
        "Desenvolvi e mantive um ecossistema B2B de viagens corporativas operando como Full Stack. Arquitetou integrações financeiras na AWS e refatorou sistemas legados utilizando conceitos avançados de DDD e Clean Code.",
      details: [
        "Ecossistema B2B de Viagens Corporativas: Atuei no desenvolvimento e manutenção Full Stack (Backend e Frontend com Next.js) do produto central da empresa, focado na gestão e emissão de passagens aéreas e hospedagens.",
        "Integração Financeira e Protótipos: Arquitetou e implementei um protótipo de meios de pagamento B2B integrado com a API do Bankly, modelando a emissão de cartões virtuais e controles de saldos corporativos.",
        "Engenharia Pragmática: Apliquei princípios SOLID e conceitos de DDD para melhorar a manutenibilidade da aplicação em produção, respeitando limitações estabelecidas.",
        "Arquitetura em Nuvem e Fluxos Assíncronos: Desenvolvi integrações serverless e fluxos orientados a eventos usando a AWS (API Gateway, SQS, SNS, Lambda, EC2).",
      ],
      techStack: [
        "Java (Spring Boot)",
        "Node.js",
        "Next.js",
        "Docker",
        "AWS",
        "TypeORM",
        "Redis",
        "MySQL",
        "SQL Server",
      ],
    },
    {
      company: "Unimed Maranhão do Sul",
      role: "Software Engineer (CLT & PJ)",
      period: "Mai 2021 – Ago 2022",
      location: "Imperatriz, MA (Presencial) e Remoto",
      description:
        "Revolucionei a cultura DevOps introduzindo o uso padronizado de Docker e modernizei sistemas monolíticos legados em PHP aplicando Clean Architecture e DDD. Integrei soluções de atendimento automatizado via Blip.",
      details: [
        "Cultura DevOps e Infraestrutura: Revolucionei o fluxo de trabalho da equipe de engenharia ao introduzir e padronizar o uso de Docker, eliminando gargalos de configuração e aumentando a previsibilidade.",
        "Modernização e Sustentação de Legado: Apliquei princípios de Clean Architecture, SOLID e DDD na evolução de sistemas monolíticos em PHP. Desenvolvi e integrei scripts complexos de Oracle PL/SQL nestas APIs.",
        "Atendimento Digital Automatizado: Construí a camada de comunicação digital integrando a plataforma de Chatbot Blip utilizando manipulação avançada em JavaScript para consumir a API interna.",
        "Geração de Documentos: Atuei como prestador de serviços (PJ) para construir a funcionalidade crítica de portabilidade do beneficiário, criando o motor de geração dinâmica de PDFs.",
      ],
      techStack: [
        "PHP",
        "Node.js (TypeScript)",
        "JavaScript",
        "Docker",
        "Oracle PL/SQL",
        "TypeORM",
        "Slim Framework",
        "Blip",
      ],
    },
    {
      company: "Vuse Sistemas",
      role: "Software Engineer (CLT)",
      period: "Fev 2020 – Abr 2021",
      location: "Imperatriz, MA (Presencial)",
      description:
        "Implementei um robusto sistema de controle de acesso via QR Code com arquitetura Offline-First, assegurando sincronização sob demanda com o servidor central e autonomia total em caso de queda de internet.",
      details: [
        "Arquitetura Offline-First e Sincronização: Implementei funcionalidades críticas no sistema de controle de acesso de portarias via QR Code. Desenvolvi toda a lógica de funcionamento da aplicação em modo offline, garantindo a continuidade da operação sem dependência de internet, com rotinas seguras de sincronização assíncrona para o servidor central.",
        "Desenvolvimento Full Stack: Atuei na automação de processos internos e na manutenção das aplicações web de gestão da empresa, garantindo a integração contínua das informações entre os dispositivos das portarias e o banco de dados principal.",
      ],
      techStack: [
        "PHP",
        "JavaScript (XAJAX)",
        "MySQL",
        "MariaDB",
        "HTML",
        "CSS",
      ],
    },
    {
      company: "Umuarama Motors",
      role: "Auxiliar de TI (CLT)",
      period: "Fev 2018 – Dez 2018",
      location: "Imperatriz, MA (Presencial)",
      description:
        "Iniciei minha trajetória prestando suporte técnico e manutenção de infraestrutura, desenvolvendo uma forte base em troubleshooting lógico de falhas.",
      details: [
        "Suporte e Infraestrutura Básica: Atuei no suporte técnico direto a usuários e manutenção preventiva e corretiva do parque tecnológico da concessionária.",
        "Fundamentos de Troubleshooting: Resolvi de forma ágil incidentes envolvendo hardware, infraestrutura de rede local e sistemas corporativos internos, desenvolvendo uma base sólida em diagnóstico lógico de falhas.",
      ],
      techStack: ["Hardware", "Redes", "Infraestrutura", "Troubleshooting"],
    },
  ],
  skills: [
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "NestJS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
    },
    {
      name: "Express",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    },
    {
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "MariaDB",
      icon: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
    },
    {
      name: "SQLite",
      icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    },
    {
      name: "Oracle",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
    },
    {
      name: "PHP",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "Linux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    },
    {
      name: "Jest",
      icon: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
    },
    {
      name: "Mocha",
      icon: "https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    { name: "Chart.js", icon: "https://www.chartjs.org/media/logo-title.svg" },
    {
      name: "Flutter",
      icon: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    },
    {
      name: "Java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      name: "Redis",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
    },
    {
      name: "Fastify",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastify/fastify-original.svg",
    },
    {
      name: "Prisma",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
    },
    { name: "TypeORM", icon: "https://typeorm.io/img/favicon.ico" },
    {
      name: "Next.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "SQL Server",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    },
    {
      name: "Spring",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
    },
    {
      name: "Go",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
    },
    {
      name: "Playwright",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/playwright/playwright-original.svg",
    },
    {
      name: "Slim Framework",
      icon: "https://www.vectorlogo.zone/logos/slimframework/slimframework-icon.svg",
    },
    { name: "Blip", icon: "" },
  ],
};
