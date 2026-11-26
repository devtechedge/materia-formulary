# Contributing

Thanks for helping improve the formulary.

## Before you start

Use Node 22. Install dependencies with `npm ci` so the lockfile decides the tree.

## Local checks

```bash
npm run lint
npm run typecheck
npm run typecheck:tests
npm run test
npm run test:e2e
npm run build
```

All six must pass before a pull request is opened.

## Data changes

The monograph set is generated from checked catalog research. Change the source research, run the checked-in generator, and commit the generated batches in the same pull request. Do not hand edit a generated batch. Every new monograph needs a public source URL and an honest evidence note.

## Rules and UI copy

Rules are deterministic. Do not add randomness, a network call or a model call to an audit. Public text uses plain English with no em dashes and no audience labels. State limitations beside claims.

## Pull requests

Describe what changed, what you verified and any residual risk. Keep commits small and in build order. The ci status check is required on main.
