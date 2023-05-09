# syntax=docker/dockerfile:1
FROM node:18-alpine AS base

FROM base AS base_gyp
RUN npm i -g pnpm

# the prune layer
FROM base_gyp AS prune
WORKDIR /app
COPY . .
RUN pnpm exec turbo prune --scope strapi --docker

# the install layer
FROM base_gyp AS install_build
WORKDIR /app
COPY --from=prune /app/out/json/ .
COPY --from=prune /app/pnpm-workspace.yaml ./pnpm-workspace.yaml

RUN pnpm install
COPY --from=prune /app/out/full/ .
RUN pnpm run --filter strapi build


# the run layer
EXPOSE 8080
CMD ["PORT=8080", "pnpm", "run", "-filter", "root", "start"]
