# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

The AGENTS.md include above is not a formality: this project pins **Next.js 16**, **Tailwind v4**, and **shadcn's `base-vega` style built on `@base-ui/react`** (not Radix). All of these have breaking changes vs. what training data assumes. Check `node_modules/next/dist/docs/` before relying on remembered Next.js APIs, and read an existing `components/ui/*.tsx` file before writing new base-ui-based components.

## Commands

```bash
npm run dev     # next dev (Turbopack)
npm run build   # next build
npm run start   # next start
npm run lint    # eslint
```

There is no test suite configured.

### Environment gotcha: WSL-mounted project + Windows-native Node

If this repo is opened from Windows tools (PowerShell/cmd) but lives on a WSL filesystem path (`\\wsl.localhost\...`), the standard commands above will fail in ways that are environment bugs, not code bugs:

- Plain `npm install` can corrupt `node_modules` (`EISDIR`/`EPERM` on `.bin` symlinks and on `next`'s own dist folders). Install with:
  ```bash
  npm install --no-bin-links --ignore-scripts
  ```
  Because `--no-bin-links` skips `.bin` shims, invoke CLIs directly via node instead of the npm script, e.g. `node node_modules/next/dist/bin/next build`, `node node_modules/typescript/bin/tsc --noEmit`, `node node_modules/shadcn/dist/index.js add <component>`.
- `next dev` / `next build` (Turbopack **and** webpack) reliably fail at Next's native lockfile-acquisition step (`An IO error occurred while attempting to create and acquire the lockfile` / `Access is denied, os error 5`) once the dev/build compiler is actually invoked — this is Next's Rust-based advisory file lock failing over the WSL 9P/UNC bridge, not fixable via CLI flags.
- Workaround for verifying changes without a live server: `node node_modules/typescript/bin/tsc --noEmit` typechecks correctly and catches most real issues. For an actual running/build-verified app, run from inside a real WSL shell with Node installed there, or from a project copy on a native filesystem path (not `\\wsl.localhost\...`).
- Removing `node_modules`/`.next` from Windows tools can silently leave orphaned files behind (locked/undeletable via PowerShell `Remove-Item`); `wsl.exe -e rm -rf <path>` deletes them reliably.

## Architecture

This is a **single-page portfolio site** (one route, `app/page.tsx`) for a specific person (Alleah Tricia De Castro, a Data Analyst) — not a template or multi-route app. All routing is anchor-based scrolling within one page.

### Content is data-driven

`lib/resume-data.ts` is the single source of truth for all resume content: `personalInfo`, `summary`, `stats`, `experience[]`, `skillGroups[]`, `certifications[]`, `education[]`, `navLinks[]`. Components under `components/sections/*` are presentational — they import and map over this data rather than hardcoding content. When resume content changes, edit `lib/resume-data.ts`, not the section components.

`lib/site-config.ts` holds `siteUrl`, the single place the production domain is defined; it feeds `metadataBase`, canonical URLs, `sitemap.ts`, `robots.ts`, and Open Graph URLs. Update it there when the deploy domain is known — currently a placeholder.

### Page composition

`app/page.tsx` composes `SiteHeader` + `components/sections/{hero,about,experience,skills,certifications-education,contact}.tsx` + `SiteFooter`. Each section is a `<section id="...">` matching an anchor in `lib/resume-data.ts`'s `navLinks`.

### UI primitives: `@base-ui/react`, not Radix

`components.json` sets `"style": "base-vega"` — shadcn components here (`components/ui/*`) are generated against `@base-ui/react`, so the usual Radix-based shadcn patterns from training data don't apply:

- No `asChild` prop — use base-ui's **`render`** prop instead, passing a `ReactElement` (e.g. `<Button render={<a href="...">...</a>} />`).
- `Button`'s underlying base-ui primitive renders a native `<button>` by default (`nativeButton` defaults to `true`). When using `render` to swap in a non-button element (an `<a>`, typically), pass **`nativeButton={false}`** or Base UI logs an accessibility warning.
- Add new shadcn components with `node_modules/shadcn/dist/index.js add <name>` (or `npx shadcn add <name>` if bin-links work in your environment) — this repo's registry config targets `base-vega`/`@base-ui/react`, so components come pre-wired for that API, not Radix's.

### Styling & theming

Tailwind v4 is configured entirely in CSS (`app/globals.css`) via `@theme inline` — there is no `tailwind.config.js`. Light theme is the `:root` OKLCH token set; dark theme overrides live under `.dark`. `--font-sans` must point at `var(--font-geist-sans)` (the variable set by `next/font/google` in `app/layout.tsx`) — this was previously a circular self-reference (`--font-sans: var(--font-sans)`) that silently broke the Geist font sitewide, so don't reintroduce that pattern when editing theme tokens.

Dark mode toggling uses `next-themes` (`components/theme-provider.tsx`, wired into `app/layout.tsx` with `attribute="class"`), not a hand-rolled solution. `components/theme-toggle.tsx` guards against hydration mismatch by rendering a disabled placeholder until mounted.

### SEO

`app/layout.tsx` exports both `metadata` (title template, OpenGraph, Twitter card, robots, canonical) and `viewport` (light/dark `theme-color`), plus inline JSON-LD `Person` structured data built from `lib/resume-data.ts`. `app/opengraph-image.tsx` generates the social preview image at request time via `next/og`'s `ImageResponse`; `app/twitter-image.tsx` re-exports it rather than duplicating the JSX. `app/sitemap.ts` and `app/robots.ts` both derive their URLs from `lib/site-config.ts`.

### Path aliases

`@/*` maps to the repo root (see `tsconfig.json` / `components.json`), e.g. `@/components/ui/button`, `@/lib/resume-data`. There is no `src/` directory.
