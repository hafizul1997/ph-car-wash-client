# AGENTS.md

Client app for the PH Car Wash System — marketing/booking frontend (Next.js 16 App Router, TypeScript).

**Current state:** only the home page (`src/app/page.tsx`) and site chrome exist. `navItems` in `src/config/site.ts` links to `/services`, `/compare`, `/about` — those routes still need to be built (404 today).

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
    icons/      # custom SVG icons (e.g. whatsapp-icon.tsx)
    layout/     # site chrome: header, main-nav, top-bar, mobile-nav, logo
    ui/         # shadcn/base-nova primitives (button, sheet, dropdown-menu)
  config/
    site.ts     # site name/contact info + navItems (single source of truth)
  lib/
    utils.ts    # re-exports `cn` from the "cn" package
```

## Conventions

- **Imports:** use the `@/*` alias for anything under `src/`.
- **Class merging:** always compose Tailwind classes with `cn()` from `@/lib/utils`.
- **UI components:** follow the existing `src/components/ui/button.tsx` pattern — primitive from `@base-ui/react`, `cva` for variants, `data-slot` attribute on the root, props spread last.
- **Icons:** `lucide-react`.
- **Server Components** are the default; add `"use client"` only when the component needs state/effects/browser APIs.
- **Metadata:** set page metadata via the `metadata` export (see `src/app/layout.tsx`). Title uses the `%s | PH Car Wash` template from `layout.tsx`.
- **Nav/site data:** add routes and contact info to `src/config/site.ts` (`navItems`, `site`) rather than hardcoding — nav components consume it. Route icons are `LucideIcon`s defined there.
- **Relative imports** are fine inside a component folder (e.g. `header.tsx` imports `./main-nav`); use `@/*` for cross-directory imports.
- **Component doc comments:** exported components get a one-line `/** ... */` describing their role (see `header.tsx`, `mobile-nav.tsx`).
- **Root layout types:** use the globally available `LayoutProps<"/">` helper type (see `layout.tsx`), not hand-written `{ children: React.ReactNode }`.
- **Base UI render prop:** triggers/composition use Base UI's `render={<Component />}` pattern (see `SheetTrigger` in `mobile-nav.tsx`), not Radix's `asChild`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
