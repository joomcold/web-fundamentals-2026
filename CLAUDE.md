# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

Personal refresher on web development — short notes and runnable examples across HTML, CSS, JS, TS, frameworks, databases, ORM, security, Web APIs, performance, testing, tooling, and Docker. Focus is **educational clarity**.

## Running Examples

```bash
# Serve all static files locally
bunx serve .

# Run a JS/TS file directly
bun run <file>

# Run tests (when added)
bun test

# Open a specific HTML file directly in browser (no server needed for most examples)
open html/index.html
```

## Repository Structure

Each topic is a standalone directory (not dependent on others):

```text
html/ css/ javascript/ typescript/ frameworks/
databases/ orm/ security/ web-apis/ performance/
testing/ tooling/ docker/
```

Each directory will contain short, focused notes and runnable examples for that topic.

## Conventions

- Examples should be **minimal and idiomatic** — demonstrate one concept clearly
- Comments explaining *why* something works are encouraged (this is a learning repo)
- Prefer canonical patterns over clever ones
- Static HTML/CSS/JS examples need no build step; open directly in browser or via `bunx serve .`
- Use **Bun** as the JS runtime for `.js`/`.ts` scripts and test runner
- **Weave security notes into each topic** where relevant (e.g., XSS in DOM examples, SQL injection in DB examples, timing attacks in auth examples) — not just in the `security/` directory
