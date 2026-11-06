import "./Skills.css";
import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="04 / TECHNICAL EXPERTISE"
            title="Technologies I work with."
            description="A growing toolkit spanning platform engineering, integrations, and software development."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p className="skill-context">{group.context}</p>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
