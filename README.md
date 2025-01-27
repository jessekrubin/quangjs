# quangjs

js/ts library for common Quang utilities

```
pnpm add quangjs
npm install quangjs
```

[![NPM Version](https://img.shields.io/npm/v/quangjs?style=flat-square&logo=npm&color=blue&cacheSeconds=60)](https://www.npmjs.com/package/quangjs)

## TODO

- Provide json schema
- formal documentation

## Features

- CLI
- Quang definitions

**CLI**

```bash
$ quang
```

---

# DEV

- pnpm is the package manager
- repo uses `just` (ref) as well as (p)npm scripts
  - just-repo: https://github.com/casey/just
  - just-docs: https://just.systems/man/en/
- prettier formatting uses the default config b/c configuring formaters is dumb
- tooling:
  - tsup: bundle/build/type-check src
  - vitest: test + coverage
  - prettier: formatting - uses default config
  - eslint: linter
  - justfile: task-runner
  - cicd / gh-actions / dependabot
