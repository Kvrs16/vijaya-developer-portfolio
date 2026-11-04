import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  GitBranch,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";
import { experience } from "../data/portfolio";
import "./ExperienceSection.css";

const focusAreas = [
  {
    title: "Salesforce Development",
    description:
      "Custom application development using Apex, Lightning Web Components, SOQL, and Salesforce Flow.",
    icon: Cloud,
    tags: ["Apex", "LWC", "Flow", "SOQL"],
  },
  {
    title: "Enterprise Integrations",
    description:
      "Connecting Salesforce with external platforms through APIs, authentication, and integration workflows.",
    icon: Workflow,
    tags: ["REST APIs", "OAuth", "MuleSoft"],
  },
  {
    title: "Automation & AI",
    description:
      "Working with Salesforce automation, intelligent workflows, and emerging AI platform capabilities.",
    icon: GitBranch,
    tags: ["Automation", "Agentforce", "Einstein"],
  },
  {
    title: "Engineering & Reliability",
    description:
      "Supporting maintainable implementations through debugging, testing, logging, and deployment practices.",
    icon: Code2,
    tags: ["Testing", "Git", "Nebula Logger"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">02 / PROFESSIONAL EXPERIENCE</span>
          <h2>Engineering solutions that make an impact.</h2>
          <p>
            My professional journey across Salesforce engineering,
            enterprise integrations, and software development.
          </p>
        </div>

        <div className="experience-layout">
          <motion.div
            className="experience-timeline"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {experience.map((job) => (
              <article className="career-card" key={job.company}>
                <div className="career-card-header">
                  <div className="career-company-icon">
                    <BriefcaseBusiness size={23} />
                  </div>

                  <span className="career-period">{job.period}</span>
                </div>

                <h3>{job.role}</h3>
                <p className="career-company">{job.company}</p>

                <div className="career-divider" />

                <p className="career-label">KEY RESPONSIBILITIES</p>

                <ul className="career-highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </motion.div>

          <div className="experience-focus-grid">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  className="experience-focus-card"
                  key={area.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                >
                  <div className="focus-card-top">
                    <span className="focus-icon">
                      <Icon size={21} />
                    </span>
                    <ArrowUpRight size={17} className="focus-arrow" />
                  </div>

                  <h4>{area.title}</h4>
                  <p>{area.description}</p>

                  <div className="focus-tags">
                    {area.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
