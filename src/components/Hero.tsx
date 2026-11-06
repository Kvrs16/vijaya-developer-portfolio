import "./Hero.css";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/portfolio";
export default function Hero() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.7 }}
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
            <a className="btn btn-outline" href={`${import.meta.env.BASE_URL}resume.html`}>
              Résumé & downloads <Download size={18} />
            </a>
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
