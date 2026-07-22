# --- STAGE 1: Dependencies ---
    FROM node:22-alpine AS deps
    WORKDIR /app
    COPY package*.json ./
    COPY prisma ./prisma/
    RUN npm ci
    
    # --- STAGE 2: Builder ---
    FROM node:22-alpine AS builder
    WORKDIR /app
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    
    RUN mkdir -p public
    
    RUN npm run build
    
 # --- STAGE 3: Runner ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# Копируем схему Prisma, чтобы prisma db push работал при старте!
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

CMD npx prisma db push && npm start