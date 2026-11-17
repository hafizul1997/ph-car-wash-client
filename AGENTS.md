# AGENTS.md

Client app for the PH Car Wash System. Fresh Next.js 16 App Router project written in TypeScript.

## Commands

```bash
npm run dev     # Dev server (Turbopack) at http://localhost:3000
npm run build   # Production build
npm run start   # Serve production build
npm run lint    # ESLint (core-web-vitals + typescript configs)
```

No test runner is configured.

## Stack

- **Next.js 16.4.6** — App Router under `src/app`, React Server Components by default. `cacheComponents`, `partialPrefetching`, and `reactCompiler` are enabled in `next.config.ts`. Read the docs in `node_modules/next/dist/docs/` before writing Next.js code; this version has breaking changes vs. older Next.js.
- **React 19.3** with React Compiler (components don't need `useMemo`/`useCallback`).
- **TypeScript** — `strict` mode, bundler resolution, path alias `@/*` → `src/*`.
- **Tailwind CSS 4** — CSS-first config in `src/app/globals.css` (no `tailwind.config.js`), loaded through the Turbopack rule in `next.config.ts`. Theme uses CSS variables; dark mode variants are used liberally.
- **shadcn/ui** — `base-nova` style built on **Base UI** (`@base-ui/react`), not Radix. Add components with `npx shadcn add <component>`; registry config lives in `components.json`.

## Structure

```
src/
  app/          # App Router: layout.tsx, page.tsx, globals.css
  components/
    ui/         # shadcn/base-nova primitives (e.g. button.tsx)
  lib/
    utils.ts    # re-exports `cn` from the "cn" package
```

## Conventions

- **Imports:** use the `@/*` alias for anything under `src/`.
- **Class merging:** always compose Tailwind classes with `cn()` from `@/lib/utils`.
- **UI components:** follow the existing `src/components/ui/button.tsx` pattern — primitive from `@base-ui/react`, `cva` for variants, `data-slot` attribute on the root, props spread last.
- **Icons:** `lucide-react`.
- **Server Components** are the default; add `"use client"` only when the component needs state/effects/browser APIs.
- **Metadata:** set page metadata via the `metadata` export (see `src/app/layout.tsx`).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
