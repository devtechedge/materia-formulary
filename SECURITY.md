# Security assessment

Scope: the public MATERIA web app and its API routes. Last reviewed 26 November 2026.

## What the app actually has

- No user accounts and no passwords. The `account_ref` cookie is a non-cryptographic demo scope, not authentication. It is httpOnly and validated against a short alphanumeric pattern, but anyone can choose a value.
- No protected health information is collected. The outcome journal stays in browser component state and is never sent to a server.
- No payments, no external API keys, no third party scripts and no runtime network requests. Fonts, data and citations are served locally. Citations open in a new tab with `rel="noreferrer"`.
- Inputs are validated with Zod schemas before any write. Database access is parameterised through the ORM; the setup route runs fixed DDL strings only.
- Every persisted row carries `account_ref`, which is set on insert and filtered on every read and write. Middleware issues a random httpOnly cookie on the first response. A visitor with cookies blocked falls back to the demo scope.
- The setup route is harmless in demo mode. When `DATABASE_URL` is configured it requires an `x-setup-token` header matching `SETUP_TOKEN` in the server environment and returns 403 otherwise.
- No secret is committed. The example environment file contains empty placeholders. The public Vercel project runs without a database.

## Threats and residual risk

1. Account scoping is isolation, not identity. If a persistent `DATABASE_URL` is attached, a real authentication layer is required before exposing saved stacks as private data.
2. Write routes have no CSRF token. There is no privileged credential or session to misuse in the current demo, so the residual risk is limited to a visitor changing their own demo scope.
3. The formulary is educational reference. A user could follow a finding without clinician review. The UI states that it does not diagnose or prescribe and that a rule firing is a prompt to review.
4. Static source links can change at the vendor. Snapshots are dated and provenance URLs are stored, so a stale link is visible rather than silent.

## Checks performed

- `npm audit --omit=dev`: 0 vulnerabilities across 554 audited packages on 26 November 2026.
- Lint, strict typecheck, 26 unit tests, 17 Playwright tests including WCAG AA axe checks, and a production build all pass.
- CI runs lint, typecheck, test typecheck, unit, build and e2e on Node 22 and the latest `main` run succeeded.
- `main` is protected with the `verify` status check, force pushes are blocked, and branch deletion on merge is enabled. Dependabot alerts are enabled on the repository.

## Reporting

Open a security advisory on this repository rather than a public issue. Include the affected route, the step to reproduce and the expected impact.
