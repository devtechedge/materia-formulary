# Architecture

MATERIA has two runtime paths and the same product surface in both.

## Demo path

The public Vercel deployment has no database configured. It reads a checked snapshot of 134 monographs and 30 deterministic rules bundled with the application. Anonymous visitors receive a random httpOnly scope cookie issued by middleware so saved stacks do not collide. In-memory state resets when a serverless instance is recycled. The interface labels this as demo data.

## Database path

When `DATABASE_URL` is set, the same routes use Drizzle ORM over node-postgres. Every table carries an indexed `account_ref` column that is set on insert and filtered on read. The setup route creates tables idempotently and refuses to run without a matching setup token. No secret is stored in the database or the repository.

## Determinism

An audit is a pure function of the submitted stack and the bundled rule set. There is no model call, no clock value in the output and no network request. The same stack produces byte-identical findings, schedule and exposure totals. Citations are stored links that open in a new tab.

## Hosting

Next.js App Router on Vercel, region bom1, Node 22. GitHub pushes build and deploy the production alias. CI runs lint, typecheck, test typecheck, unit tests, production build and Playwright on Node 22. No runtime request leaves the product except normal page and API navigation within the same origin.

## Limitations

The evidence snapshot is dated 26 November 2026 and is not live data. The outcome journal stays in browser state. The account cookie is a scope, not authentication. A real login is required before any saved stack is treated as private.
