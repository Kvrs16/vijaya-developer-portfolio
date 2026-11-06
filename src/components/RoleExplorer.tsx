import { useState } from "react";
import {
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Workflow,
} from "lucide-react";
import "./RoleExplorer.css";

type RoleId = "salesforce" | "java" | "fullstack" | "integration";

interface Role {
  id: RoleId;
  label: string;
  title: string;
  description: string;
  skills: string[];
  highlights: string[];
}

const roles: Role[] = [
  {
    id: "salesforce",
    label: "Salesforce",
    title: "Salesforce Engineering",
    description:
      "Building scalable Salesforce solutions through programmatic development, declarative automation, and secure platform integrations.",
    skills: [
      "Apex",
      "Lightning Web Components",
      "SOQL",
      "Triggers",
      "Salesforce Flow",
      "Sales Cloud",
      "Service Cloud",
      "Agentforce",
    ],
    highlights: [
      "Custom business logic and Lightning interfaces",
      "Declarative and programmatic automation",
      "Integration design and platform security",
    ],
  },
  {
    id: "java",
    label: "Java & Backend",
    title: "Java & Backend Development",
    description:
      "Academic experience in Java, Spring Boot, and backend development. Currently refreshing these foundations alongside my professional Salesforce work.",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "SQL",
      "Object-Oriented Programming",
      "Git",
    ],
    highlights: [
      "Academic object-oriented application design",
      "Backend services and API development",
      "Testing and maintainable code practices",
    ],
  },
  {
    id: "fullstack",
    label: "Full-Stack",
    title: "Full-Stack Development",
    description:
      "Academic experience in full-stack applications, responsive interfaces, and backend integration. Currently refreshing these skills.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "REST APIs",
      "GitHub",
    ],
    highlights: [
      "Academic web application development",
      "Reusable frontend components",
      "Frontend and backend integration",
    ],
  },
  {
    id: "integration",
    label: "Integrations",
    title: "Enterprise Integration Engineering",
    description:
      "Connecting enterprise platforms and external services through secure APIs, authentication, automation, and reliable data exchange.",
    skills: [
      "REST APIs",
      "MuleSoft",
      "OAuth 2.0",
      "Stripe",
      "PandaDoc",
      "Clay",
      "DocuSign",
      "Named Credentials",
      "Nebula Logger",
    ],
    highlights: [
      "Third-party service integrations",
      "Authentication and API connectivity",
      "Logging, troubleshooting, and automation",
    ],
  },
];

const icons = {
  salesforce: Cloud,
  java: Braces,
  fullstack: Code2,
  integration: Workflow,
};

export default function RoleExplorer() {
  const [activeRole, setActiveRole] = useState<RoleId>("salesforce");

  const selectedRole = roles.find(
    (role) => role.id === activeRole
  )!;

  const ActiveIcon = icons[selectedRole.id];

  return (
    <section id="expertise" className="role-explorer section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">
            03 / ENGINEERING SPECIALIZATIONS
          </span>
          <h2>Different technologies. One engineering mindset.</h2>
          <p>
            Explore the technologies and problem-solving approaches
            that shape my engineering journey.
          </p>
        </div>

        <div className="role-tabs" role="group" aria-label="Engineering specializations">
          {roles.map((role) => {
            const Icon = icons[role.id];

            return (
              <button
                type="button"
                key={role.id}
                className={`role-tab ${
                  activeRole === role.id ? "active" : ""
                }`}
                aria-pressed={activeRole === role.id}
                onClick={() => setActiveRole(role.id)}
              >
                <Icon size={18} />
                {role.label}
              </button>
            );
          })}
        </div>

        <div className="role-panel" key={selectedRole.id} aria-live="polite" aria-atomic="true">
          <div className="role-panel-main">
            <div className="role-panel-icon">
              <ActiveIcon size={28} />
            </div>

            <h3>{selectedRole.title}</h3>
            <p>{selectedRole.description}</p>

            <div className="role-skill-list">
              {selectedRole.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="role-panel-side">
            <span className="role-panel-label">
              AREAS OF FOCUS
            </span>

            {selectedRole.highlights.map((highlight, index) => (
              <div className="role-highlight" key={highlight}>
                <span className="role-highlight-number">
                  0{index + 1}
                </span>
                <p>{highlight}</p>
              </div>
            ))}

            <a href="#projects" className="role-project-link">
              Explore projects <ArrowUpRight size={17} />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${activeRole === "integration" ? "resume-integration.html" : "resume.html"}`}
              className="role-project-link"
            >
              {activeRole === "integration" ? "Integration résumé" : "Salesforce résumé"} <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
