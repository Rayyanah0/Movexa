# Contributing to Movexa

Thanks for your interest in contributing! Here's how to get started.

## Development setup

```bash
npm install
cp .env.example .env.local
# Fill in the contract IDs and STELLAR_RELAYER_SECRET
npm run dev
```

## Running tests

```bash
npm test                 # Frontend unit tests (vitest)
npm run contracts:test   # Soroban Rust unit tests (cargo test)
```

## Code style

- TypeScript strict mode — no `any`, no unchecked index access.
- Tailwind for all styling — no inline styles.
- Keep components small and focused. Complex logic belongs in `lib/`.
- Server-side secrets (agent keys, relayer key) never reach the client.

## Commit conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(scope): short description
fix(scope): short description
chore: short description
docs: short description
test: short description
```

## Pull requests

- Open a PR against `main`.
- Include a short description of what changed and why.
- If your change touches contracts, run `npm run contracts:test` and include output.
- If your change touches the UI, include a screenshot or screen recording.

## Security

Found a vulnerability? Please do **not** open a public issue. Email the maintainer directly.
This project runs on Stellar Testnet — no real funds are at risk, but we still take security seriously.
