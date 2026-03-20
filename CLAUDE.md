# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

Always use `bun` (not npm or yarn).

## Commands

```bash
# Development
bun run dev          # Start Storybook dev server (port 6006)
bun run dev:app      # Start Vite dev app

# Build
bun run build        # TypeScript check + Vite library build
bun run build:storybook  # Build Storybook static site

# Quality
bun run lint         # ESLint
bun run format       # Prettier (TypeScript files)
bun run typecheck    # TypeScript type check only

# Tests (via Storybook + Vitest + Playwright/Chromium)
bun run test         # (check package.json for test script)
```

## Architecture

This is a **React component library** (not an app) built with:

- **Base UI React** — unstyled, accessible headless components (the primitive layer)
- **Tailwind CSS v4** — styling via `@tailwindcss/vite` plugin
- **tailwind-variants (`tv()`)** — typed variant definitions per component, and utility class conflict resolution
- **shadcn/ui** — CLI tooling for component scaffolding

The library is published as an npm package: `dist/index.mjs` (ESM) + `dist/index.js` (CJS) + `dist/index.css`.

## Component API Philosophy

This library is a **strict Design System** — not a low-level primitive re-export. Components must expose a simple, opaque prop API to consumers. Internal composition using Base UI / shadcn primitives stays inside the component file and is never exposed.

**Do not** expose sub-components as public API:

```tsx
// ❌ Wrong — forces consumers to know the internals
<Avatar>
  <AvatarImage src="..." />
  <AvatarFallback>JF</AvatarFallback>
</Avatar>

// ✅ Correct — consumer only knows props
<Avatar src="..." fallback="JF" />
```

The rule: if a piece of JSX is an implementation detail (a primitive wrapper, a slot, an inner element), it stays internal. Only export the top-level component and its props type.

## Component Pattern

Each component lives in its own folder under `src/components/<name>/`:

- `index.tsx` — React component, imports Base UI primitives, imports from `./styles` and `./types`
  - Exports only the top-level component and its props type. Never exports sub-components or primitive wrappers.
  - No inline classes. All classNames come from `styles.ts` via `styles.slotName({ class: className })`.
- `styles.ts` — All style definitions using `tv()` from tailwind-variants.
  - Use slots to target multiple internal elements.
  - Exports `componentStyles` and `ComponentStylesProps` (`VariantProps<typeof componentStyles>`).
- `types.ts` — Component prop interfaces.
  - Follow the naming pattern `ComponentProps`.
  - Prefer `interface` over `type`; only use `type` when there are no custom props (to avoid empty `{}`).
  - Always extend `ComponentStylesProps` from `styles.ts`, even when there are no variants yet.
  - Define props explicitly rather than re-exporting from third-party libs (exception: standard HTML props like `React.ComponentProps<"a">`).
- `stories.tsx` — Storybook stories.
  - Use component props to describe behavior. No new logic or styles.

Stories are co-located with components and excluded from the library build via the `tsconfig.app.json` `exclude` glob (`src/**/*.stories.tsx`).

All components are re-exported from `src/components/index.ts` → `src/index.ts`.

## Styling System

Design tokens are defined in `src/styles.css` as CSS custom properties:

- **Colors**: `--color-orange-*` (primary) and `--color-neutral-*` (50–950 scale)
- **Border radius**: `--radius-sm` through `--radius-4xl` (multiples of 0.625rem)
- **Font**: `--font-display` → Raleway Variable

Dark mode uses a class-based approach: `@custom-variant dark (&:is(.dark *))` — toggled by `ThemeProvider`.

`shadcn` is configured with `cssVariables: false` (uses Tailwind utilities directly, not CSS variable references for colors).

## Path Aliases

`@/` maps to `./src/` in both TypeScript and Vite.

## Storybook & Testing

- Stories use the `@storybook/react-vite` framework
- Tests run in-browser via Vitest + Playwright (Chromium)
- A11y addon runs in "todo" mode (violations shown but don't fail CI)
- Chromatic is configured for visual regression testing
