import "./Contact.css";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";
export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <div className="contact-content">
            <span className="eyebrow">07 / LET'S CONNECT</span>
            <h2>
              Let's build something <em>meaningful.</em>
            </h2>
            <p>
              Interested in discussing software engineering,
              Salesforce development, integrations, or new ideas?
              I'd love to connect.
            </p>

            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <ArrowUpRight size={18} />
              </a>
              <a
                className="btn btn-outline"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub <FaGithub size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
