# Planned Agentforce and MuleSoft projects

These are proposed personal projects, not completed applications or client deliverables. Existing professional experience is documented separately in the Salesforce résumé. All fixtures must be synthetic; no client names, schemas, endpoints, credentials, datasets, or copied source are needed.

## 1. ServiceDesk — Agentforce Support Assistant

**Purpose:** demonstrate an effective service workflow inside Salesforce without requiring an external integration first.

Build an LWC case workspace, a small troubleshooting-playbook object, and an Agentforce assistant. Agent actions retrieve authorized case details and relevant playbooks, prepare investigation tasks, and ask for confirmation before changes. Use Flow/Apex for deterministic validation and enforce record access inside action logic.

Demo: select a synthetic case, retrieve troubleshooting steps, confirm an investigation task, and show an access-denied scenario. Retain a useful manual LWC workflow when AI capacity is unavailable. Use Builder preview if external messaging isn't available; don't promise a public chat deployment.

Acceptance evidence: tests for permissions, missing records, validation, write confirmation, prompt-injection attempts in case text, and unavailable AI actions; a recorded synthetic-data demo and measured test results.

Salesforce provides Agentforce-enabled Developer Edition orgs with usage allocations. Verify the target org and current limits before setup: [official Developer Edition guidance](https://help.salesforce.com/s/articleView?id=xcloud.overview_developer_edition_agentforce_datacloud.htm&language=en_US&type=5).

## 2. PartnerFeed — Salesforce Data Exchange

**Purpose:** demonstrate MuleSoft transformation, connector handling, and safe reprocessing without repeating the revenue/payment project.

Process synthetic partner CSV files from a local SFTP fixture. Validate schema and rows, transform records with DataWeave, and upsert permitted Salesforce records using external IDs. Preserve per-file and per-row outcomes, correlation IDs, duplicate-file detection, and bounded retry behavior. Define when a corrected file is a new version rather than a replay.

Demo: ingest a valid file, replay it without duplicate records, reject invalid rows with a useful error report, then replay only failed records after correction.

Acceptance evidence: MUnit transformation/error-path tests, duplicate-file and partial-failure tests, explicit connector/auth configuration instructions, and a reproducible local fixture. Keep provider secrets out of source.

Anypoint Studio supports running an application in its local runtime: [Studio documentation](https://docs.mulesoft.com/studio/). MuleSoft markets Anypoint access as a trial; verify current runtime, connector, MUnit, repository-access, and cloud entitlements before committing to tooling. Do not describe CloudHub as permanent free hosting: [official Studio product page](https://www.mulesoft.com/platform/studio).

## 3. OrderCare — Agentforce + MuleSoft

**Purpose:** demonstrate how a permission-aware agent uses an external integration through a clear contract.

Create a mock order/shipping service with synthetic records. Expose an order-status and service-request contract through MuleSoft. Use an available Agentforce action path (Apex/Flow or a verified supported API integration) to retrieve authorized status and create a service request only after confirmation. Choose the supported action mechanism after verifying org capabilities; API Catalog integration is not assumed.

Demo: retrieve an allowed order, handle an unavailable shipping provider, prepare a service request, confirm it, and safely handle a repeated action without duplicate downstream requests. An email address or order number alone must not authorize access to another person's records.

Acceptance evidence: contract tests, denied-access cases, timeout behavior, request idempotency, synthetic fixtures, and a demo of the full round trip. Localhost services are not reachable directly from Salesforce: document an authorized reachable development endpoint if a live combined demo is needed. Without that endpoint or the required entitlement, label the relevant part as a local mock/contract demonstration.

## Suggested order

Build ServiceDesk first, PartnerFeed second, and OrderCare after their reusable security and integration pieces are working. Commit source, actual test results, and demonstration material before changing any portfolio status from Planned. No résumé bullet should describe these ideas as delivered work until implementation is complete.
