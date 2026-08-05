import {
  ArrowRight,
  Download,
  Dot,
} from "../../../lib/icons";
import Icon from "../../../lib/icons/Icon";
import useProfile from "../../profile/hooks/useProfile";
import { Button, SocialLinks } from "../../../components/common";
import { Skeleton } from "../../../components/feedback";
import { getAsset } from "../../../utils/getAsset";
import "./Hero.css";

export default function Hero() {
  const { data: profile, isLoading, isError } = useProfile();
  const { fullName, title, bio, github, linkedin, email, phone, profileImage } =
    profile ?? {};

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return (
      <section id="hero" className="failed">
        Failed to load profile.
      </section>
    );
  }

  return (
    <section id="hero">
      <div className="hero">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>

          <h1 className="hero__name">{fullName || "Azaria Abenet Fitta"}</h1>

          <p className="hero__role">{title || "Software Engineer"}</p>

          <p className="hero__description">
            {bio ??
              "I build scalable web applications with clean architecture, modern technologies, and a strong focus on performance, maintainability, and user experience."}
          </p>

          <div className="hero__actions">
            <Button>
              View Projects <Icon icon={ArrowRight} size="sm" />
            </Button>

            <Button variant="secondary">
              <Icon icon={Download} size="sm" /> Download Resume
            </Button>

            <Button variant="secondary">
              <Icon icon={Download} size="sm" /> Download CV
            </Button>
          </div>

          <div className="hero__social">
            <SocialLinks
              links={[
                {
                  platform: "github",
                  url: github,
                },
                {
                  platform: "linkedin",
                  url: linkedin,
                },
                {
                  platform: "email",
                  url: `mailto:${email}`,
                },
                {
                  platform: "whatsapp",
                  url: `https://wa.me/${phone}`,
                },
              ]}
            />
          </div>
        </div>

        <div className="hero__image">
          <div className="hero__card">
            <div className="hero__avatar">
              {
                <img
                  src={
                    getAsset(profileImage) ||
                    "../../../assets/images/ProfesionalPicture.pdf"
                  }
                  alt={fullName || "Profile"}
                  className="hero__image"
                />
              }
            </div>

            <div className="hero__status">
              <span className="hero__status-dot" />
              <span>Available for Work</span>
            </div>

            <div className="hero__terminal">
              <p className="hero__terminal-path">azaria@os:~$</p>
              <p>$ whoami</p>

              <p>{fullName || "Azaria Abenet Fitta"}</p>

              <p>$ stack</p>

              <p>
                Node.js
                <Icon icon={Dot} size="lg" />
                React
                <Icon icon={Dot} size="lg" />
                PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
