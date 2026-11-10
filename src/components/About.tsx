import "./About.css";
import { Cloud, Code2, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="Following the problem, end to end."
            description="Interfaces, automation, integrations—and the details between them."
          />

          <div className="about-grid">
            <div className="about-main">
              <p>{profile.about}</p>
              <p>
                My professional work spans Salesforce customization,
                integrations, automation, and cloud technologies.
                I also build personal Java and Spring Boot projects, including
                ReliableJobs, a PostgreSQL-backed task processing API.
                My full-stack foundation comes from college work and is being refreshed.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <Cloud size={23} />
                <div>
                  <strong>Enterprise Platforms</strong>
                  <span>Salesforce and multi-cloud solutions</span>
                </div>
              </div>
              <div className="highlight-item">
                <Code2 size={23} />
                <div>
                  <strong>Software Engineering</strong>
                  <span>Backend, frontend, and APIs</span>
                </div>
              </div>
              <div className="highlight-item">
                <Sparkles size={23} />
                <div>
                  <strong>Automation & Innovation</strong>
                  <span>Intelligent workflows and integrations</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
