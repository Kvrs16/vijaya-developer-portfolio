import "./Projects.css";
import { useState } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projectCategories, projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
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
            title="Projects I'm building."
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
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-art art-${index % 4}`}>
                  <Code2 size={40} strokeWidth={1.3} />
                </div>

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
