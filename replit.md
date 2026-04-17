# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Samvidhaan+ App (`artifacts/samvidhaan`)

Educational web app making the Indian Constitution accessible. Static data only.

### Data Coverage
- **382 articles** across 25 Parts (`allArticles.ts` + `remainingArticles.ts` merged in `allArticles.ts`)
- **12 Schedules** (`schedules.ts`) — First through Twelfth with content + key points
- **106 Amendments** (1st–106th, 2023) in `constitution.ts` — important ones marked with `important: true`
- **6 Fundamental Rights** in `fundamentalRights.ts`

### Key Files
- `src/data/allArticles.ts` — core 180 articles + imports/merges `remainingArticles.ts`
- `src/data/remainingArticles.ts` — 202 additional articles (Parts V, VI, VIII–XXI)
- `src/data/schedules.ts` — all 12 Schedules
- `src/data/constitution.ts` — 106 amendments + constitution facts
- `src/pages/explore.tsx` — main explore page with 4 tabs (Articles, Rights, Schedules, Amendments)
- `src/pages/article.tsx` — article detail page

### Design
- Colors: navy `#0A1F44`, saffron `#FF9933`, green `#138808`
- Fonts: Poppins + Inter (imported in index.css)
- Component library: Radix UI (via shadcn)

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
