import "./Navbar.css";
import { useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
const navItems = ["About", "Experience", "Expertise", "Skills", "Projects", "Reading", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header">
      <nav className="container navbar" aria-label="Main navigation" onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); } }}>
        <a href="#home" className="brand">
          Vijaya<span> / code & chapters</span>
        </a>

        <button
          ref={menuButton}
          type="button"
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
