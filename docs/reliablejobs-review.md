# ReliableJobs source review

Reviewed 10 November 2026 against [commit 30e820a](https://github.com/Kvrs16/reliablejobs/tree/30e820aab241698e6b761758163cb34007e3005f). The clean local checkout at `V:/reliablejobs` matched GitHub. The owner clarified that “library” referred to the project folder and documentation; no separate reusable library or frontend is claimed.

## Scope and verification

Read the architecture, delivery guarantees, setup, security, operations, test documentation, and core authentication/job/worker/HTTP implementation. Ran `.\mvnw.cmd -B verify` in the application checkout against its disposable native PostgreSQL test instance.

**Result: BUILD SUCCESS. Four unit tests and 22 PostgreSQL integration tests passed; zero failures, errors, or skips. Total Maven time: 53.733 seconds.** This verifies the current local Windows test run, not performance, availability, production readiness, or a public deployment. No tracked ReliableJobs source was changed.

## Strong foundations

- User-scoped database uniqueness and normalized request fingerprints protect submission replay and distinguish conflicting inputs.
- `FOR UPDATE SKIP LOCKED` claims work without giving the same claim to two competing workers.
- Claiming occurs inside an available worker, with bounded threads and no queue of already-leased executions.
- Short database transactions surround state changes; the computation executes outside a long-lived transaction.
- Lease tokens fence stale completion. Recovery closes abandoned attempts and applies the remaining retry budget.
- Owner checks cover reads, attempts, results, cancellation, and retry; administrator visibility uses separate protected routes.
- Session authentication, CSRF, bounded DTOs, Flyway constraints, synthetic workloads, and safe errors form a coherent local-demo security model.
- The documentation clearly states at-least-once processing, crash windows, cooperative cancellation, and limitations.

## Recommended improvements

### 1. Add repeatable CI and build checks

There is no checked-in GitHub Actions workflow. Put Maven Wrapper `verify` behind pull-request and main-branch CI on Java 21, with suitable native PostgreSQL support and test-report artifacts. Start with the verified Windows environment, then add a non-root Linux runner. Add consistent formatting/static checks and dependency review. Keep genuine test failures visible rather than skipping integration tests when native startup fails.

### 2. Bound cumulative queue and storage growth

`JobService.submit` limits each input, but there is no per-owner backlog quota or retention cleanup. Inputs, results, attempts, audit history, and idempotency keys accumulate indefinitely; the documentation already acknowledges this.

Add configurable per-user pending/running limits and a bounded retention policy. Enforce admission limits atomically for concurrent submissions. Define idempotency-key expiration separately from deleting large result payloads so cleanup does not silently permit duplicate work. Test admission races, replay under quota, cleanup safety, and replay after expiration. Preserve referential integrity and the intended audit trail.

### 3. Make password resets revoke active sessions

`LocalUserProvisioner` resets the stored hash and explicitly instructs an application restart to invalidate existing sessions. Current tests establish that the old password no longer authenticates, but do not prove revocation of an already-authenticated session.

For a reusable deployment, implement session invalidation or a credential-version check. Test an authenticated session created before reset, reset the password, and verify that the old session is rejected while a new login succeeds. Keep the restart requirement explicit until this is implemented. For the current loopback-only demonstration, the documented restart remains the operating procedure.

### 4. Add a small React dashboard next

The backend and PowerShell walkthrough are working; there is no frontend. A dashboard would make the project easier to demonstrate and would provide concrete work for the portfolio's full-stack placeholder.

Implement same-origin session login, CSRF handling, submission, filters, attempts, results, and cancellation/retry feedback. Use bounded polling with cleanup and terminal-state stopping. Explain a running cancellation as a request rather than an immediate completed cancellation. Keep backend authorization authoritative. Do not expose the application publicly merely to obtain a demo URL.

### 5. Extend resilience evidence beyond simulated crash boundaries

The integration suite meaningfully exercises locks, concurrency, lease expiry, and stale completion. Its crash tests simulate durable boundaries rather than killing a worker OS process or restarting the database, as the test document correctly states.

Add a separate repeatable fault-test profile for JVM termination/restart and temporary database interruption. Observe whether a transaction committed before retrying. Before multiple-instance operation, address the documented application-clock synchronization assumption, define lease-renewal behavior if workloads grow, and consider jitter for synchronized retry bursts. Add measurements before making throughput or latency claims.

### 6. Strengthen the deployment path only when needed

Current sessions and metrics are in-memory, runtime/migration use one development database role, and public-exposure hardening such as login throttling is deliberately absent. These are documented local-project boundaries, not evidence that the demo is broken.

Before public hosting, use HTTPS and Secure cookies, migration/runtime role separation, session administration, rate limiting, retention, backup/restore instructions, and a reviewed configuration profile. Keep a local-first setup available without paid infrastructure.

## Portfolio changes

Replaced the planned Java card with ReliableJobs, added architecture/setup/API links, documented its measured test run, and updated About/Java skills/specialization text to reflect personal backend implementation. Professional Salesforce employment remains separate. The full-stack placeholder and existing résumés were not promoted to professional Java experience or marked complete.
