# API Connect

API REST simples para gerenciamento de usuários, usando Node.js, Express e armazenamento em memória.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/api-server/server.js` — inicialização do servidor Express
- `artifacts/api-server/routes/connectRoutes.js` — rotas REST de usuários
- `artifacts/api-server/controllers/connectController.js` — regras dos endpoints
- `artifacts/api-server/data/connectData.js` — lista de usuários em memória
- `lib/api-spec/openapi.yaml` — contrato da API

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

API Connect permite criar, listar, consultar, atualizar e excluir usuários com os campos `id`, `nome` e `email`.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
