# syntax=docker/dockerfile:1
FROM node:20-alpine
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy sources
COPY tsconfig.json ./
COPY src ./src

# Build and run
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/index.js"]
