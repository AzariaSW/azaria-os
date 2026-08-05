import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Send,
  Globe,
  whatsapp
} from "../../../lib/icons";
import "./SocialLinks.css";

const ICONS = {
  github: Github,

  linkedin: Linkedin,

  facebook: Facebook,

  email: Mail,

  telegram: Send,

  website: Globe,

  whatsapp: whatsapp
};

export default function SocialLinks({ links = [], className = "" }) {
  return (
    <div className={`social-links ${className}`}>
      {links.map((link) => {
        const Icon = ICONS[link.platform];

        if (!Icon) return null;

        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-links__link"
            aria-label={link.platform}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
