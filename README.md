# Web Fundamentals 2026

A personal refresher on web development — concise notes, code snippets, and quick references to revisit core and modern topics in 2026.

## Table of Contents

- [Web Fundamentals 2026](#web-fundamentals-2026)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Topics](#topics)
    - [Core](#core)
      - [HTML](#html)
      - [CSS](#css)
      - [JavaScript](#javascript)
      - [TypeScript](#typescript)
    - [Frontend](#frontend)
      - [Frameworks (Vue)](#frameworks-vue)
      - [Libraries (Tailwind)](#libraries-tailwind)
      - [Web APIs](#web-apis)
    - [Backend](#backend)
      - [Go](#go)
      - [Frameworks (Gin)](#frameworks-gin)
    - [Data](#data)
      - [Databases](#databases)
      - [ORM / Data Access](#orm--data-access)
    - [Quality \& Security](#quality--security)
      - [Security](#security)
      - [Testing](#testing)
      - [Performance](#performance)
    - [Ops](#ops)
      - [Tooling \& Build](#tooling--build)
      - [Docker](#docker)
      - [CI/CD](#cicd)
  - [Getting Started](#getting-started)

## Overview

A hands-on reference I keep to stay sharp across web development — one small, runnable example per concept, each topic standalone.

It comes from two habits kept side by side: periodically **reviewing the fundamentals** so nothing quietly goes rusty, and **deliberately exploring technologies I would like to get better at** (Go, sqlc, Tailwind, and the like). Notes lean toward explaining *why* something works, not just how.

## Topics

### Core

#### HTML

- Semantic structure, forms, accessibility (ARIA), media, metadata

#### CSS

- Selectors & specificity, Flexbox, Grid, responsive design, animations, modern features (container queries, `:has()`, cascade layers)

#### JavaScript

- ES6+ syntax, DOM, events, async/await, modules, closures, prototypes

#### TypeScript

- Types vs interfaces, generics, narrowing, utility types, declaration files

### Frontend

#### Frameworks (Vue)

- Components, state, routing, SSR/SSG patterns

#### Libraries (Tailwind)

- Utility-first styling

#### Web APIs

- Fetch, Storage, Service Workers, IntersectionObserver, Web Components

### Backend

#### Go

- Goroutines & channels, interfaces, error handling; HTTP services with the standard library (`net/http`)

#### Frameworks (Gin)

- Go HTTP framework: routing, middleware, JSON binding

### Data

#### Databases

- SQL, PostgreSQL, indexes, transactions, normalization, migrations, Redis basics

#### ORM / Data Access

- sqlc (Go) — type-safe query code generated from SQL, migrations, when to hand-write raw SQL

### Quality & Security

#### Security

- XSS, CSRF, CORS, CSP, auth/session basics, common pitfalls

#### Testing

- Bun test (unit), Testing Library (component), Playwright (E2E)

#### Performance

- Core Web Vitals, lazy loading, caching, rendering strategies, profiling

### Ops

#### Tooling & Build

- Bun (runtime, bundler, test runner), Vite, esbuild, ESLint, Prettier, code splitting, module formats

#### Docker

- Images vs containers, Dockerfile, multi-stage builds, volumes, networks, Docker Compose

#### CI/CD

- GitHub Actions — run lint, format check, and tests on push; build and deploy pipelines

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
