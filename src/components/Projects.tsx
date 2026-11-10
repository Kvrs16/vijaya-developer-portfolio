import "./Projects.css";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projectCategories, projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
function ProjectPreview({ title, category, planned }: { title: string; category: string; planned: boolean }) {
  const stages = title.includes("ReliableJobs") ? ["Submit job", "Queue", "Worker", "Result"]
    : category === "Salesforce" ? ["Opportunity", "Quote", "Approval", "Revenue"]
    : category === "Agentforce" ? ["Question", "Verify", "Route", "Resolve"]
    : category === "MuleSoft" ? ["Appointment", "Mule API", "Calendar"]
    : category === "Agentforce + MuleSoft" ? ["Ask", "Agent", "Mule API", "Order"]
    : ["Interface", "API", "Database"];
  return <div className={`project-art ${category === "Java" ? "project-art-teal" : ""}`}>
    <span className="preview-label">{planned ? "PROPOSED WORKFLOW" : "PROJECT WORKFLOW"}</span>
    <div className="preview-flow">{stages.map((stage, index) => <span className="preview-step" key={stage}><span>{stage}</span>{index < stages.length - 1 && <ArrowRight size={13} aria-hidden="true" />}</span>)}</div>
    <span className="preview-caption">{title.includes("ReliableJobs") ? "Background work, with a lifecycle you can follow." : category === "Salesforce" ? "Connecting the steps of a sales workflow." : planned ? "An idea on the workbench. Implementation ahead." : "From an action to a connected outcome."}</span>
  </div>;
}
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "All" ||
      project.category === activeFilter
  );

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="05 / SELECTED WORK"
            title="From the workbench."
            description="Explore Revenue Hub and ReliableJobs, plus planned Agentforce, MuleSoft, and combined integration projects."
          />

          <div className="filter-bar" aria-label="Filter projects">
            {projectCategories.map((filter) => (
              <button
                type="button"
                key={filter}
                className={`filter-button ${
                  activeFilter === filter ? "active" : ""
                }`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectPreview title={project.title} category={project.category} planned={project.status.toLowerCase().includes("planned")} />

                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {project.highlights && (
                    <details className="project-details">
                      <summary>Implementation details</summary>
                      <ul>
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </details>
                  )}

                  {project.scope && <p className="project-scope">{project.scope}</p>}

                  <div className="skill-tags">
                    {project.technologies.map((tech) => (
                      <span className="skill-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.repository && (
                    <div className="project-links" aria-label={`${project.title} resources`}>
                      <a href={project.repository} target="_blank" rel="noopener noreferrer">
                        Source code <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                      {project.architecture && (
                        <a href={project.architecture} target="_blank" rel="noopener noreferrer">Architecture</a>
                      )}
                      {project.deploymentGuide && (
                        <a href={project.deploymentGuide} target="_blank" rel="noopener noreferrer">Setup guide</a>
                      )}
                      {project.apiDocumentation && (
                        <a href={project.apiDocumentation} target="_blank" rel="noopener noreferrer">API documentation</a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
