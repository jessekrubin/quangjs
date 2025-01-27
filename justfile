#!/usr/bin/env just --justfile
# 'justfile'
# just-repo: https://github.com/casey/just
# just-docs: https://just.systems/man/en/

@_default:
    just --list --unsorted

# default all/ci target
all: ci

# build package
build:
    pnpm build

# ci -- often default or 'all' target
ci: build test lint

# lint (eslint)
lint:
    pnpm lint

# test (vitest)
test:
    pnpm test

# clean (unimplemented)
clean:
    echo "unimplemented"

# nuke node_modules
NUKE:
    npx rimraf ./**/node_modules

# format (prettier)
fmt-prettier:
    npx prettier@latest --write .

# format (ruff)
ruffmt:
    ruff format .

# format src
fmt:
    pnpm fmt
    just --fmt --unstable
