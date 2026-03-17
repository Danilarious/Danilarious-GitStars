# Project Guidelines

## Build And Check

- Use Bun for workspace commands.
- Install dependencies with `bun install`.
- Regenerate data and publish output with `bun run update`.
- Run local validation with `bun run typecheck` or `bun run check`.
- Preview the generated site with `bun run preview`.

## Architecture

- This repository generates a static catalog of GitHub stars.
- Main pipeline: `src/github.ts` fetches and normalizes GitHub stars, `src/categorize.ts` applies deterministic category rules and overrides, `src/diff.ts` compares snapshots, `src/index.ts` writes chunked JSON plus the publish shell, and `src/render.ts` regenerates `README.md` from `templates/README.hbs`.
- Generated publish output lives in `dist/` and chunked data lives in `dist/data/`.
- Static frontend source files live in `assets/site/`.

## Conventions

- Make manual site changes in `assets/site/`, not in `dist/`.
- Treat `dist/` as generated output only.
- Keep chunking and catalog behavior centralized in `src/index.ts`; avoid ad hoc writes to generated files.
- Categorization behavior is driven by `config/categories.json` and `config/overrides.json`; prefer updating config over hardcoding repo-specific logic.
- `README.md` is generated content; durable template changes belong in `templates/README.hbs`.

## Pitfalls

- GitHub API calls are rate-limited without `GITHUB_TOKEN` or `GH_TOKEN`.
- The generator uses Bun APIs directly; avoid replacing them with Node-specific patterns unless the project is intentionally migrated.
- Changing generated output structure requires updating both the generator and the static frontend assumptions.

## Key Files

- `src/index.ts`: orchestration for snapshot loading, chunk writing, README generation, and publish shell sync.
- `src/categorize.ts`: deterministic categorization rules.
- `config/categories.json`: category definitions and priorities.
- `config/overrides.json`: exclusions and manual category overrides.
- `assets/site/`: editable static site source.
- `README.md`: generated project summary; see the repository README for usage details.