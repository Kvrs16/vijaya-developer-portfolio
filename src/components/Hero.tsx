import "./Hero.css";
import { useState } from "react";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { profile } from "../data/portfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const steps = [
  { name: "User action", title: "Start with the person using it.", detail: "I build Lightning forms and quote builders, then trace interface issues in the browser.", tools: "Lightning Web Components" },
  { name: "Salesforce", title: "Make the workflow hold together.", detail: "I work with bulk-safe Apex, Flows, territory assignments, and the access rules behind them.", tools: "Apex · Flows · Sales & Service Cloud" },
  { name: "MuleSoft", title: "Carry the right data across.", detail: "I build integration flows, transform data, configure authentication, and follow the logs when something fails.", tools: "MuleSoft · REST APIs" },
  { name: "External system", title: "Follow it through to the other side.", detail: "My integrations include invoice processing, document generation, signatures, and synchronized records.", tools: "Stripe · PandaDoc · Clay · DocuSign" },
];
export default function Hero() {
  const [selected, setSelected] = useState(1);
  const step = steps[selected];
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div>
          <p className="hero-greeting">CODE, CHAPTERS & A LITTLE CURIOSITY</p>
          <h1>Vijaya <em>Rani.</em></h1>
          <h2>I build the connections behind everyday workflows.</h2>
          <p className="hero-description">I’m an Associate Technical Consultant working in Salesforce and MuleSoft development. Here, I share the systems I build, the problems I investigate, and my independent work in Java and full-stack development.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
            <a className="btn btn-outline" href={`${import.meta.env.BASE_URL}resume.html`}>Résumé <Download size={16} /></a>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><FaGithub size={17} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={16} /> LinkedIn</a>
          </div>
          <a className="hero-reading-link" href="#reading">Off the clock? Probably one more chapter. <span aria-hidden="true">↗</span></a>
        </div>
        <aside className="connection-notebook" aria-label="Explore my integration work">
          <div className="notebook-heading"><span>HOW MY WORK CONNECTS</span><span aria-hidden="true">↗</span></div>
          <p className="notebook-intro">A workflow is a series of small decisions.</p>
          <div className="connection-path" role="group" aria-label="Choose a workflow step">
            {steps.map((item, index) => <button type="button" key={item.name} aria-pressed={selected === index} aria-controls="connection-detail" onClick={() => setSelected(index)}><span className="connection-number">0{index + 1}</span>{item.name}<ArrowDown size={14} aria-hidden="true" /></button>)}
          </div>
          <div className="connection-detail" id="connection-detail" aria-live="polite" aria-atomic="true">
            <span className="eyebrow">0{selected + 1} / {step.name.toUpperCase()}</span>
            <h3>{step.title}</h3><p>{step.detail}</p><span className="connection-tools">{step.tools}</span>
          </div>
          <p className="notebook-footnote">Select a step to look a little closer.</p>
        </aside>
      </div>
      <div className="container hero-bottom"><span>SALESFORCE / INTEGRATIONS / SOFTWARE</span><a href="#about">A little about me <ArrowDown size={14} /></a></div>
    </section>
  );
}
