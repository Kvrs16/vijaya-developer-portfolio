
import { useState } from "react";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import {
  profile,
  skillGroups,
  projects,
} from "./data/portfolio";

import RoleExplorer from "./components/RoleExplorer";
import ExperienceSection from "./components/ExperienceSection";


const navItems = [
  "About",
  "Experience",
  "Expertise",
  "Skills",
  "Projects",
  "Contact",
];

const filters = [
  "All",
  "Salesforce",
  "Java",
  "Full-Stack",
  "AI & Automation",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Reveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container navbar" aria-label="Main navigation">
        <a href="#home" className="brand">
          VR<span>.</span>
        </a>

        <button
          className="mobile-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          id="navigation-links"
          className={`nav-links ${open ? "open" : ""}`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            className="nav-contact"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Connect <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="availability">
            <span className="availability-dot" />
            Building, learning & creating
          </div>

          <p className="hero-greeting">Hello, I'm</p>
          <h1>
            Vijaya <span>Rani.</span>
          </h1>

          <h2>{profile.role}</h2>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-description">
            {profile.introduction}
            {" "}Passionate about clean architecture,
            meaningful technology, and continuous growth.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore My Work <ArrowRight size={18} />
            </a>
            <a className="btn btn-outline" href="#contact">
              Get in Touch
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={21} />

            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={21} />
            </a>
            <span className="social-divider" />
            <span>Explore my engineering journey</span>
          </div>
        </motion.div>

        <div className="hero-decoration" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="hero-monogram">VR</div>
        </div>
      </div>

      <a className="scroll-hint" href="#about">
        Scroll to explore <ArrowDown size={15} />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="More than just code."
            description="Curiosity, engineering, and a drive to build meaningful solutions."
          />

          <div className="about-grid">
            <div className="about-main">
              <p>{profile.about}</p>
              <p>
                My professional work spans Salesforce customization,
                integrations, automation, and cloud technologies.
                I'm also continuing to develop my capabilities in
                Java and full-stack application engineering.
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



function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="03 / TECHNICAL EXPERTISE"
            title="Technologies I work with."
            description="A growing toolkit spanning platform engineering, integrations, and software development."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
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

function Projects() {
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
            eyebrow="04 / SELECTED WORK"
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

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <div className="contact-content">
            <span className="eyebrow">05 / LET'S CONNECT</span>
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

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="brand">
          VR<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Vijaya Rani.
          Crafted with care.
        </p>
        <a href="#home">
          Back to top <ArrowUpRight size={15} />
        </a>
      </div>
    </footer>
  );
}


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <RoleExplorer />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

