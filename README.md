# MATERIA

An independent, evidence-graded clinical formulary and supplement stack audit workbench.

MATERIA is a reference desk for holistic healthcare supplements. It lists 130 real products from public NOW Foods and iHerb catalog listings, grades the evidence for each stated use, compares common forms, and checks a proposed stack against 30 deterministic interaction rules. Nothing is for sale and no health data is collected.

## What it does

- Browse 130 monographs with category, evidence grade and dose filters.
- Read a monograph with forms, dose range, timing, cautions, sources and provenance URL.
- Compare forms such as zinc picolinate versus zinc oxide, liposomal glutathione versus NAC, and triglyceride fish oil versus flax oil.
- Draft a time-phased Protocol Card with cofactors and cycling notes.
- Audit a stack with 30 deterministic rules, each carrying severity, evidence grade, citation and a suggested action.
- Export the audit as Markdown or print a one page Protocol Card.
- Keep an optional outcome journal in local browser state only. No score leaves the tab.

The six priority ingredients are collagen hydrolysate, NAC, triple strength fish oil, zinc picolinate, liposomal glutathione and GHK-Cu.

## Honest scope

This is an educational reference. It does not diagnose, prescribe, or replace a qualified professional. A rule firing is a prompt to review with a clinician, not a clinical conclusion. Correlation is not causation. The public deployment runs in demo mode with the checked snapshot dated 26 November 2026 unless a database is connected.

## Stack

Next.js 16 App Router, React 19, strict TypeScript 5.9, Tailwind CSS 4, Drizzle ORM with Neon Postgres and a deterministic in-memory demo path, Zod 4, Vitest, Playwright and axe. Three OFL fonts are self-hosted: Fraunces, IBM Plex Sans and IBM Plex Mono. No runtime request leaves the product.

Every table carries an indexed `account_ref` set from an httpOnly cookie and filtered on all reads and writes. A visitor without a cookie receives the demo dataset and cannot see another account's rows.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Checks:

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

## Regenerate the data

The dataset is generated from the checked source research, not hand edited.

```bash
python scripts/generate-data.py
python scripts/fetch-fonts.py
```

`scripts/generate-data.py` reads `supplement-research.md` at the repository root. Keep that file beside the checkout when regenerating.

## Documentation

- `docs/BUILD_BRIEF.md`: the original 10,094 character build brief.
- `docs/METHODOLOGY.md`: rubric, rule design and limitations.
- `docs/DATA_PROVENANCE.md`: where the dataset came from and how it is bundled.
- `docs/LICENSES.md`: per asset licence record.

## Licence

MIT. See `LICENSE`.
