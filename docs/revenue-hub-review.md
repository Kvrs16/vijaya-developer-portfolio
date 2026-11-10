# Revenue Hub source review

Reviewed 10 November 2026 against [GitHub commit d71835a](https://github.com/Kvrs16/salesforce-enterprise-revenue-hub/tree/d71835a964b5e98fd8d9615c7feeb50ea732ed20). The local checkout matched that commit and had no uncommitted changes. This review changed the portfolio only, not Revenue Hub code or its Salesforce org.

## What is implemented

The mock baseline includes an LWC Quote-selection workspace, permission-gated Apex payment/document services, server-derived Quote totals, a unique logical payment key, separate Queueable claiming/execution, attempt records, bounded retry policy, a scheduled retry dispatcher, and authorized manual retries. Standard Salesforce revenue objects are reused. Real provider adapters and full Quote approval automation are not implemented in the checked-in baseline.

Useful foundations include explicit user-mode queries, custom permissions for privileged actions, private sharing metadata, restricted lifecycle transitions, and sanitized integration errors. The repository reports a Developer Edition deployment, 21 selected passing Apex tests, and 3 passing Jest tests. Those historical org results were not independently rerun during this source review.

## Improvements in priority order

### 1. Recover jobs stranded in Processing

`RevenueHubIntegrationWorker` persists Processing and enqueues a separate executor. The retry dispatcher selects only Retry Scheduled records. An unhandled exception or failed executor transaction can therefore leave an already-claimed job outside the retry path.

Add a bounded stale-job reconciliation process using an execution token/lease and AsyncApexJob information where appropriate. Reconcile both job and payment/document state. Prevent an older executor from completing a newly claimed execution. Test crashes before execution and during persistence. For future real providers, reconcile ambiguous provider outcomes before retrying operations that might already have succeeded.

### 2. Make retry scheduling match the stated behavior

`RevenueHubRetryDispatcher.cls:2` limits dispatch to one job per run, and the deployment guide schedules it hourly. Minute-based retry eligibility is therefore not a promise of minute-based execution. A backlog of ten eligible jobs can take many hourly runs to clear; the query also has no explicit ordering.

Keep conservative development-org limits, but document them prominently. Add deterministic oldest-due selection and a bounded, limit-aware dispatch strategy. Do not simply increase the loop count: the current implementation enqueues only the first selected job. Test backlog draining, exhausted attempts, and starvation behavior.

### 3. Define document-request deduplication

Unlike the payment service, `RevenueHubDocumentRequestService` inserts a new request and job on every valid invocation. Repeated clicks, retries after a lost response, or concurrent submissions can create duplicate logical document requests.

Define intentional regeneration separately from replay: use a durable request key, Quote/template/revision identity, and a uniqueness constraint as appropriate. Return the existing visible request for a replay. Test concurrent requests and explicit regeneration without blocking legitimate new document versions.

### 4. Inject gateway behavior and test failures

Both mock gateways always return Succeeded. The executor constructs those concrete mocks directly. Consequently, retryable network/rate-limit failures and malformed responses cannot be exercised through the current default gateway path. Existing tests cover useful success, invalid-provider, and dispatch behavior but do not establish every failure scenario listed in the testing guide.

Introduce a gateway factory or injectable seam and configurable synthetic outcomes. Test timeout, rate limit, permanent failure, retry exhaustion, success after retry, and persistence failure. Expand the three LWC tests to cover document requests, retries, request errors, access-denied states, and refresh failures.

### 5. Complete the monitoring experience

The architecture diagram describes server-paginated monitoring, but `getRecentJobs` returns a fixed latest-50 list with no cursor or filters. The datatable omits correlation IDs, next retry times, and attempt details even though some are queried. There is no initial loading indicator.

Add stable keyset pagination, status/type filters, a job-detail panel, attempt history, correlation IDs, and loading/error states. Consider bounded polling that stops when no active jobs remain. Separate successful request submission from monitoring-refresh errors: a failed refresh should not tell the user the accepted request itself failed.

### 6. Align documentation and add reproducible evidence

The README still says no Git remote/push exists, and the deployment guide says no Git push was made. The GitHub repository now exists. Remove those statements; distinguish planned approvals/Flows/CI from checked-in metadata. Add a screenshot, short synthetic-data demo, repeatable seed instructions, and automated lint/Jest/static-analysis checks. Keep org deployment/test evidence explicit about date, commit, and scope.

## Portfolio representation

The portfolio now describes a **Mock integration demo**, links source/architecture/setup, and lists only implemented behavior. It does not claim live Stripe/PandaDoc connectivity, generated provider files, production readiness, server pagination, or independently verified Salesforce test results.
