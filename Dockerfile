# ==========================================
# Estágio Base (Node.js)
# ==========================================
FROM node:22-alpine AS base
WORKDIR /app
# Opcional: instalar dependências de sistema se necessárias no futuro (ex: libc6-compat)

# ==========================================
# Estágio de Desenvolvimento (Hot Reload)
# ==========================================
FROM base AS dev
COPY package*.json ./
RUN npm install --legacy-peer-deps
# O restante do código é mapeado via volume no docker-compose
EXPOSE 4321
# O --host 0.0.0.0 é vital para o container expor a porta corretamente
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ==========================================
# Estágio de Build (Preparação Prod)
# ==========================================
FROM base AS build
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# ==========================================
# Estágio de Produção (SSG + Nginx)
# Focado em altíssima performance para arquivos estáticos
# ==========================================
FROM nginx:alpine AS prod
# Copiamos apenas os arquivos otimizados gerados no diretório dist/
COPY --from=build /app/dist /usr/share/nginx/html

# Opcional: Arquivo de configuração customizado do Nginx para cache agressivo e gzip
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
