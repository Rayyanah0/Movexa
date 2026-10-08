# Changelog

All notable changes to Movexa are documented here.

## [Unreleased]

### Added
- `get_remaining` view function on `DelegationManager` contract — returns how much daily budget an agent has left
- `get_admin` view function on `AgentRegistry` contract — useful for frontend verification
- `filterByBudget` helper in `lib/ai/orchestrator.ts` for pre-filtering services by max price
- `formatRelativeTime` and `truncate` helpers in `lib/utils.ts`
- `lastActiveAt` field on the `Agent` type, stamped on every successful purchase
- `?limit=` and `?agentId=` query params on `/api/events`
- Security response headers (X-Frame-Options, X-XSS-Protection, Referrer-Policy) via `next.config.ts`
- `deleteUser` function in `lib/server/auth-store.ts`
- `CONTRIBUTING.md` with dev setup, commit conventions, and PR guidelines
- `getNetworkConfig` debug helper in `lib/stellar/client.ts`

### Changed
- Leaderboard sort now uses `lastActivityAt` as a tie-breaker
- Deterministic service picker throws a clear error instead of crashing on empty service list
- CI pipeline now includes a `tsc --noEmit` type-check step

### Fixed
- Deterministic orchestrator picker no longer silently returns `undefined` on empty list

## [0.1.0] — Initial release

- Agent Registry, Delegation Manager, and Marketplace Soroban contracts deployed to Stellar Testnet
- Next.js 15 dashboard with Freighter wallet integration
- Console PIN authentication with AES-256-GCM encrypted agent key storage
- Live agent-to-agent USDC payments via `Marketplace.purchase`
- Activity feed with SSE streaming and Stellar Expert transaction links
- Leaderboard with on-chain reputation scores
- Demo seed script for instant stage demos
