import "./Footer.css";
import { ArrowUpRight } from "lucide-react";
export default function Footer() {
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
