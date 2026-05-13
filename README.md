# Web Fundamentals 2026

A personal refresher on web development — concise notes, code snippets, and quick references to revisit core and modern topics in 2026.

> Focus: **refreshing** existing knowledge.

## Table of Contents

- [Web Fundamentals 2026](#web-fundamentals-2026)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Topics](#topics)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
    - [TypeScript](#typescript)
    - [Frameworks](#frameworks)
    - [Databases](#databases)
    - [ORM](#orm)
    - [Security](#security)
    - [Web APIs](#web-apis)
    - [Performance](#performance)
    - [Testing](#testing)
    - [Tooling \& Build](#tooling--build)
    - [Docker](#docker)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)

## Overview

This repo collects short, focused notes and runnable examples I use to re-sharpen web fundamentals. Each topic is a standalone reference — no need to read in order.

## Topics

### HTML

- Semantic structure, forms, accessibility (ARIA), media, metadata

### CSS

- Selectors & specificity, Flexbox, Grid, responsive design, animations, modern features (container queries, `:has()`, cascade layers)

### JavaScript

- ES6+ syntax, DOM, events, async/await, modules, closures, prototypes

### TypeScript

- Types vs interfaces, generics, narrowing, utility types, declaration files

### Frameworks

- React, Vue, Svelte — components, state, routing, SSR/SSG patterns

### Databases

- SQL vs NoSQL, indexes, transactions, normalization, migrations, PostgreSQL/MySQL/MongoDB/Redis basics

### ORM

- Prisma, Drizzle, TypeORM — schema modeling, queries, relations, migrations, when to drop down to raw SQL

### Security

- XSS, CSRF, CORS, CSP, auth/session basics, common pitfalls

### Web APIs

- Fetch, Storage, Service Workers, IntersectionObserver, Web Components

### Performance

- Core Web Vitals, lazy loading, caching, rendering strategies, profiling

### Testing

- Bun test (unit), Testing Library (component), Playwright (E2E)

### Tooling & Build

- Vite, esbuild, Bun bundler, bundling, code splitting, module formats

### Docker

- Images vs containers, Dockerfile, multi-stage builds, volumes, networks, Docker Compose

## Project Structure

```text
web-fundamentals-2026/
├── html/
├── css/
├── javascript/
├── typescript/
├── frameworks/
├── databases/
├── orm/
├── security/
├── web-apis/
├── performance/
├── testing/
├── tooling/
└── docker/
```

> Structure expands as topics are added.

## Getting Started

```bash
git clone https://github.com/joomcold/web-fundamentals-2026.git
cd web-fundamentals-2026
```

Open any `.html` file in a browser, or serve locally:

```bash
bunx serve .
```

Run JS/TS examples:

```bash
bun run <file>
```
