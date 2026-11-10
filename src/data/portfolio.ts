export const profile = {
  name: "Vijaya Rani",
  role: "Software Engineer",
  headline:
    "Salesforce Developer · MuleSoft & Enterprise Integrations",
  introduction:
    "I build scalable applications, intelligent automation, and connected enterprise solutions.",
  about:
    "I independently implement Salesforce solutions spanning Apex, Lightning Web Components, enterprise integrations, and business process automation. My work includes MuleSoft APIs, Agentforce service agents, Experience Cloud access workflows, and Data Cloud and Marketing Cloud Advanced configuration.",
  github: "https://github.com/Kvrs16",
  linkedin: "https://in.linkedin.com/in/vijaya-rani-7k111",
};

export const experience = [
  {
    company: "Blueflame Labs",
    role: "Associate Technical Consultant",
    period: "July 2025 — Present",
    phase: "Initial training from July 2025; Salesforce and MuleSoft implementation responsibilities since December 2025.",
    location: "",
    highlights: [
      "Independently implemented Salesforce development, integration, and automation solutions at Blueflame Labs.",
      "Built territory-management workflows, Lightning quote builders, and bulk-safe Apex processing.",
      "Delivered integrations with Stripe, PandaDoc, Clay, and DocuSign, and built and deployed MuleSoft APIs and flows.",
      "Configured Agentforce service automation, Experience Cloud access, and Data Cloud and Marketing Cloud Advanced workflows.",
      "Handled Apex testing, structured logging, security configuration, and dependency-aware metadata deployments.",
      "Collaborated with other developers on LWC component testing, Flow investigations, and permission-set troubleshooting."
],
    details: [
      {
            "title": "Territory management & Apex",
            "description": "Extended territory management with custom supporting objects, bulkified trigger handlers, Batch Apex, and Queueable Apex. Used Territory2, ObjectTerritory2Association, and UserTerritory2Association for territory and membership workflows. Implemented division-based processing to propagate account changes to opportunities, update account teams, and populate role-specific fields. Supported manual territory assignment through Screen Flow."
      },
      {
            "title": "Lightning interfaces & Flow troubleshooting",
            "description": "Built forms and quote builders with interconnected Lightning Web Components, and investigated interface issues using browser developer tools. Used Flows as data entry points and supported bulk processing. Traced Apex test failures to memory consumption from multiple Flows executing on the same object."
      },
      {
            "title": "Stripe, PandaDoc, Clay & DocuSign",
            "description": "Implemented a Stripe invoice integration using an Apex REST handler exposed through a Salesforce Site; configured the Stripe endpoint and tested receipt storage and client email delivery. Installed PandaDoc and integrated templates across opportunities, quotes, quote line items, and custom objects with bidirectional synchronization. Integrated Clay and tested table imports, exports, and synchronization. Installed DocuSign, configured merge fields and document generation, and implemented signature sending, status tracking, and post-signing record updates."
      },
      {
            "title": "MuleSoft integrations",
            "description": "Built, tested, and deployed APIs and Mule flows connecting Salesforce to SFTP channels and third-party applications. Implemented data transformations and authentication, configured API catalog entries, and split complex flows into separate flows. Troubleshot applications using Anypoint Studio, Mule logs, and Anypoint Platform."
      },
      {
            "title": "Agentforce service automation",
            "description": "Built and tested a complete service agent collecting brand, name, and email details, with Flow-based email verification, embedded messaging, and Omni-Channel routing. Configured multiple subagents for different use cases, case creation for verified and unverified users, and Messaging Session links to related cases."
      },
      {
            "title": "Data Cloud & Marketing Cloud Advanced",
            "description": "Configured DLOs and DMOs, investigated suitable mapping objects, and mapped DLO fields to DMOs. Built audience segments and connected them to Marketing Cloud Advanced campaigns. Configured emails, templates, campaigns, and campaign flows."
      },
      {
            "title": "Experience Cloud & access controls",
            "description": "Configured sites, pages, components, external-user access, and guest permissions. Built Apex user-creation workflows using submitted usernames, emails, and contact details; flagged matches against existing contact data and upgraded matching users from limited-access to full-access Profiles. Configured profiles, permission sets, roles, sharing rules, field-level security, Named Credentials, External Credentials, and OAuth."
      },
      {
            "title": "Logging, testing & deployment",
            "description": "Evaluated, installed, and configured Nebula Logger across multiple orgs, integrating INFO, WARN, and ERROR logging into Apex and Flows. Wrote Apex tests for callouts and asynchronous code. Used change sets, Salesforce CLI, Git, and targeted metadata XML packages; planned dependency-based deployments, split large changes, and investigated Flow version and feature differences between orgs. Deployed selected fields while preserving unrelated metadata and object settings."
      },
      {
            "title": "Business processes & operational troubleshooting",
            "description": "Configured lead conversion, opportunity stages, approvals, case assignment, queues, and escalation rules. Troubleshot Einstein-related user email issues and Power Automate flow failures involving Salesforce operations. Collaborated on Flow investigations, permission-set troubleshooting, and testing tasks."
      }
]
  }
];

export const skillGroups: { title: string; context?: string; skills: string[] }[] = [
  {
    title: "Salesforce Engineering",
    skills: [
      "Apex", "LWC", "SOQL", "SOSL", "Triggers",
      "Flows", "Sales Cloud", "Service Cloud",
      "Experience Cloud", "Salesforce CLI"
    ]
  },
  {
    title: "Enterprise Integrations",
    skills: [
      "REST APIs", "MuleSoft", "OAuth 2.0",
      "Named Credentials", "External Credentials",
      "Stripe", "PandaDoc", "Clay", "DocuSign",
      "Nebula Logger"
    ]
  },
  {
    title: "Java & Backend",
    context: "Personal project · ReliableJobs",
    skills: [
      "Java 21", "Spring Boot", "PostgreSQL", "Spring Security",
      "Spring Data JPA", "Flyway", "REST APIs", "JUnit", "Maven"
    ]
  },
  {
    title: "Full-Stack Foundations",
    context: "Academic experience · currently refreshing",
    skills: [
      "Java", "Spring Boot", "JavaScript",
      "TypeScript", "React", "HTML", "CSS",
      "Python", "SQL", "MongoDB"
    ]
  },
  {
    title: "AI & Automation",
    skills: [
      "Agentforce", "Einstein", "Data Cloud",
      "Marketing Cloud Advanced", "Salesforce Flow",
      "Process Automation"
    ]
  },
  {
    title: "Engineering Tools",
    skills: [
      "Git", "GitHub", "VS Code",
      "Salesforce DX", "Apex Testing",
      "Debugging", "API Testing", "Anypoint Studio", "Batch Apex", "Queueable Apex", "Nebula Logger", "Metadata Deployments"
    ]
  }
];

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  highlights?: string[];
  scope?: string;
  repository?: string;
  architecture?: string;
  deploymentGuide?: string;
  apiDocumentation?: string;
}

export const projects: PortfolioProject[] = [
  {
    title: "Enterprise Revenue & Integration Hub",
    category: "Salesforce",
    description:
      "A Salesforce workspace for approved-Quote payment and document requests, with asynchronous processing, integration monitoring, and controlled retries.",
    technologies: ["Apex", "LWC", "Queueable Apex", "Salesforce DX", "Jest"],
    status: "Mock integration demo",
    highlights: [
      "Permission-gated request services validate Quote eligibility and derive payment amounts server-side.",
      "Logical payment keys prevent duplicate full-Quote payment requests; Queueable workers record integration attempts and outcomes.",
      "A Lightning workspace displays recent jobs and supports authorized retries, with bounded attempts and dead-letter handling."
    ],
    scope: "The implemented baseline uses deterministic mock providers. It does not process real payments or generate provider documents; Stripe and PandaDoc adapters are future work.",
    repository: "https://github.com/Kvrs16/salesforce-enterprise-revenue-hub",
    architecture: "https://github.com/Kvrs16/salesforce-enterprise-revenue-hub/blob/main/docs/architecture.md",
    deploymentGuide: "https://github.com/Kvrs16/salesforce-enterprise-revenue-hub/blob/main/docs/deployment-guide.md"
  },
  {
    title: "ReliableJobs — Task Processing API",
    category: "Java",
    description:
      "A Java and Spring Boot backend for submitting bounded background jobs, inspecting execution attempts, and retrieving owner-authorized results. PostgreSQL serves as the durable queue.",
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "Spring Security", "Flyway", "JUnit"],
    status: "Implemented backend",
    highlights: [
      "User-scoped idempotency keys and request fingerprints distinguish safe replays from conflicting submissions.",
      "Database row locking, execution leases, and token fencing support concurrent claiming, bounded retries, cancellation, and stale-worker recovery.",
      "Session authentication, CSRF protection, ownership checks, attempt history, audit events, and authenticated OpenAPI documentation support the API workflow.",
      "Verified locally with Maven: 4 unit tests and 22 PostgreSQL integration tests passed on 10 November 2026."
    ],
    scope: "A local-first personal backend project with synthetic CSV-summary and record-validation jobs. No frontend or public hosted API is included; delivery is at least once, not exactly once.",
    repository: "https://github.com/Kvrs16/reliablejobs",
    architecture: "https://github.com/Kvrs16/reliablejobs/blob/main/docs/ARCHITECTURE.md",
    deploymentGuide: "https://github.com/Kvrs16/reliablejobs/blob/main/docs/WINDOWS-SETUP.md",
    apiDocumentation: "https://github.com/Kvrs16/reliablejobs/blob/main/docs/API.md"
  },
  {
    title: "Modern Full-Stack Application",
    category: "Full-Stack",
    description:
      "An end-to-end web application showcasing frontend development and backend integration.",
    technologies: ["React", "TypeScript", "REST APIs"],
    status: "Planned"
  },
  {
    title: "ServiceDesk — Agentforce Support Assistant",
    category: "Agentforce",
    description:
      "A planned support assistant that retrieves authorized case information, suggests troubleshooting steps, and prepares investigation tasks for human confirmation.",
    technologies: ["Agentforce", "Apex", "Flow", "LWC"],
    status: "Planned",
    highlights: [
      "Planned: an LWC case workspace with a synthetic troubleshooting-playbook library.",
      "Planned: permission-aware agent actions for case lookup and task preparation, with confirmation before changes.",
      "Planned: tests for denied access, missing records, prompt injection, and unavailable AI capacity."
    ],
    scope: "A future personal project inspired by my professional Agentforce experience. No implementation or demo is published yet."
  },
  {
    title: "EventBridge — Salesforce Calendar Coordination",
    category: "MuleSoft",
    description:
      "A planned MuleSoft integration that coordinates Salesforce appointments with Google Calendar, handling time zones, duplicate requests, and conflicting updates.",
    technologies: ["MuleSoft", "Google Calendar API", "OAuth 2.0", "DataWeave", "MUnit"],
    status: "Planned",
    highlights: [
      "Planned: explicit user-authorized event creation and updates, with Salesforce-to-calendar identifier mapping.",
      "Planned: time-zone-safe scheduling, idempotent replay, loop prevention, and a defined conflict-resolution policy.",
      "Planned: OAuth token handling, rate-limit-aware retries, and mocked tests for revoked access and downstream failures."
    ],
    scope: "A future personal Google Calendar integration with synthetic appointments. API quotas, OAuth testing restrictions, and MuleSoft runtime access will be verified before implementation; paid connectors and permanent free cloud hosting are not assumed."
  },
  {
    title: "OrderCare — Agentforce + MuleSoft",
    category: "Agentforce + MuleSoft",
    description:
      "A planned service assistant that uses MuleSoft APIs to retrieve synthetic order and shipment information and prepare a service request after user confirmation.",
    technologies: ["Agentforce", "MuleSoft", "REST APIs", "Apex", "Flow"],
    status: "Planned",
    highlights: [
      "Planned: a mock order/shipping API behind a stable MuleSoft integration contract.",
      "Planned: authorized order lookup and confirmed request creation, without treating an email match as authentication.",
      "Planned: clear fallback behavior for timeout, unavailable orders, and partial downstream failures."
    ],
    scope: "A future combined personal project using synthetic data. No real orders, payments, client systems, or completed integrations are claimed."
  }
];

export const projectCategories = ["All", ...new Set(projects.map((project) => project.category))];
