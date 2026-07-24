# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

A personal, self-directed refresher on web development — short notes and runnable examples that keep my fundamentals sharp and let me explore a few technologies I would like to get better at. Focus is **educational clarity**, not production-hardening.

Topics span the core web platform (HTML, CSS, JavaScript, TypeScript), frontend (Vue, Tailwind, Web APIs), backend (Go, Gin), data (databases, data access), quality & security (security, testing, performance), and ops (tooling, Docker, CI/CD). See `README.md` for the full grouped list.

## Running Examples

```bash
# Serve all static files locally
bunx serve .

# Run a JS/TS file directly
bun run <file>

# Run a Go file
go run <file>

# Run tests (when added)
bun test

# Open a specific HTML file directly in browser (no server needed for most examples)
open html/index.html
```

## Repository Structure

Each topic is a standalone directory (not dependent on others):

```text
html/ css/ javascript/ typescript/
vue/ tailwind/ web-apis/
go/ gin/
databases/ data-access/
security/ testing/ performance/
tooling/ docker/ ci-cd/
```

Each directory holds short, focused notes and runnable examples for that topic. `README.md` groups these into domains (Core, Frontend, Backend, Data, Quality & Security, Ops) for navigation.

## Conventions

- Examples should be **minimal and idiomatic** — demonstrate one concept clearly
- Comments explaining _why_ something works are encouraged (this is a learning repo)
- Prefer canonical patterns over clever ones
- Static HTML/CSS/JS examples need no build step; open directly in browser or via `bunx serve .`
- Use **Bun** as the JS runtime for `.js`/`.ts` scripts and test runner
- Run **ESLint** and **Prettier** before considering a change done
- **Dependencies:** never add anything to `package.json` (e.g. via `bun add`) without explicit approval first — propose the package and the reason, then wait
- **Weave security notes into each topic** where relevant (e.g., XSS in DOM examples, SQL injection in DB examples, timing attacks in auth examples) — not just in the `security/` directory
- **README TOC:** the editor auto-generates the Table of Contents from headings, so every topic must be a heading (`####`), never a bullet, or it silently drops out of the TOC. Keep the TOC mirroring the full Topics tree — every domain and every topic.

## Branches

`main` is the only long-lived branch. Work on short-lived branches named `type/kebab-summary`, using the same types as commits (`feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `ci`), lowercase, no spaces. Delete the branch after it merges.

When the work tracks a GitHub issue, include the issue number: `type/<issue>-kebab-summary`.

Examples: `feat/go-http-server`, `docs/readme-domains`, `fix/css-grid-typo`, `feat/42-token-refresh` (from issue #42).

## Commit Messages

Use Conventional Commit prefixes — `type: short summary` in the imperative mood (~50 chars):

- `feat:` — a new topic, note, or runnable example
- `fix:` — correct a broken example or mistake
- `docs:` — README / CLAUDE.md or other prose
- `refactor:` — restructure without changing behavior
- `test:` — add or adjust tests
- `chore:` — setup, config, tooling, dependencies
- `ci:` — CI/CD pipeline changes

**Subject only** for setup/config and small, self-evident changes — the diff speaks for itself. **Add a body** only when there's a _why_ the diff can't show (a decision, trade-off, or workaround) or the change is broad. Never write a body that just restates the diff.

Draft the message and wait for approval before running `git commit`.

## Pull Requests

PR **titles** follow the same Conventional Commit format as commit messages (`type: summary`, lowercase, imperative) — for a clean, scannable PR list. When the PR tracks an issue, append its number as a suffix so it shows in the PR list: `type: summary (#42)` — keep the type first, never prefix (`[#42] feat:` breaks the format). The PR **body** is freeform: explain what and why, and link the issue with a closing keyword (`Closes #42`) so it auto-closes on merge.

Examples: `feat: add css grid examples`, `fix: correct broken flexbox demo (#57)`.
