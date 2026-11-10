# General résumé project selection

Source review: 10 November 2026. This revision adds project descriptions to
the general Software Engineer résumé, not completed-project claims for
unrelated portfolio placeholders.

## ReliableJobs

[Repository](https://github.com/Kvrs16/reliablejobs).

The résumé describes user-visible job submission, synthetic CSV summaries,
record validation, execution histories, result retrieval, cancellation and
retry. The implementation bullet covers PostgreSQL persistence, idempotency,
execution leases, retry budgets, and owner access. The numeric test report
and delivery-guarantee disclaimers are removed from résumé project bullets,
as requested. Verification evidence remains in the project documentation.

## PrakritiPal

[Repository](https://github.com/Kvrs16/PrakritiPal-updated).

Reviewed `README.md`, `frontend/package.json`,
`frontend/src/Components/Chatbot.jsx`, `bot/app.py`, and `bot/database.py`.
These substantiate React, FastAPI, a WebSocket chat route, a questionnaire
workflow, and SQLite/SQLAlchemy chat and questionnaire data. The project is
identified as an academic educational prototype. No clinical validity,
performance improvement, production deployment, or independent runtime
verification is claimed.

## Not selected for this résumé

- `Chatting-application` contains Java Swing and TCP socket code. It must not
  be described as a Node.js/WebSocket service. ReliableJobs already supplies
  stronger Java/backend evidence for this version.
- `Female-Cancer-Awareness-Project` currently exposes a README-only tree.
  `Female-Cancer-Awareness` describes an informational website; this review
  did not establish the earlier Node.js/PostgreSQL backend description.
  Those claims and the old engagement metrics are not reused.

The general résumé is intentionally selective: ReliableJobs demonstrates
Java/backend reliability, while PrakritiPal adds React/Python/web integration.
