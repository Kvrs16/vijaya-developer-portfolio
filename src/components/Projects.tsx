import "./Projects.css";
import { useState } from "react";
import { Code2 } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
const filters = ["All", "Salesforce", "Java", "Full-Stack", "AI & Automation"];
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
            title="What's in the making."
            description="I'm developing new engineering projects. Detailed case studies, architecture diagrams, and source code will be added as they are completed."
          />

          <div className="filter-bar" aria-label="Filter projects">
            {filters.map((filter) => (
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

                  <div className="skill-tags">
                    {project.technologies.map((tech) => (
                      <span className="skill-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
