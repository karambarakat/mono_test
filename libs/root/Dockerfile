# syntax=docker/dockerfile:1
FROM node:18-alpine AS base

FROM base AS base_gyp
RUN npm i -g pnpm

# the prune layer
FROM base_gyp AS prune
WORKDIR /app
COPY . .
RUN pnpm install

EXPOSE 8080
CMD ["pnpm", "run", "-filter", "root", "start"]
