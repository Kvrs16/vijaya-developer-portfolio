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
    title: "Java & Full-Stack",
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
    title: "Java Backend Application",
    category: "Java",
    description:
      "A backend engineering project exploring RESTful services, persistence, security, and automated testing.",
    technologies: ["Java", "Spring Boot", "SQL"],
    status: "Planned"
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
    title: "Intelligent Salesforce Automation",
    category: "AI & Automation",
    description:
      "A demonstration of AI-assisted workflows and Salesforce automation.",
    technologies: ["Agentforce", "Apex", "Flow"],
    status: "Planned"
  }
];
