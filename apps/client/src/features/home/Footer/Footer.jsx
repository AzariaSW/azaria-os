import { Section } from "../../../components/layout";

import { ChevronUp } from "../../../lib/icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Section>
        <div className="footer__content">
          <div className="footer__top">
            <div className="footer__brand">
              <h2>Azaria-OS</h2>

              <p>
                Building scalable backend systems and modern web applications.
              </p>
            </div>

            <nav className="footer__navigation">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#certificates">Certificates</a>
              <a href="#github">GitHub</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <hr className="footer__divider" />
          <div className="footer__bottom">
            
            <button
              className="footer__bottom-button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <div className="footer__bottom-button-content">
                <ChevronUp size={20} /> 
                <span>Back to Top</span>
              </div>
            </button>
          </div>
        </div>
      </Section>
    </footer>
  );
}
