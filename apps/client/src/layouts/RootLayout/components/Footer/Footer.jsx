import { SocialLinks } from "../../../../components/common";
import { Skeleton } from "../../../../components/feedback";
import { ChevronUp } from "../../../../lib/icons";
import useProfile from "../../../../features/profile/hooks/useProfile";
import "./Footer.css";

function Footer() {
  const { data: profile, isLoading, isError } = useProfile();
  const { email, github, linkedin, phone } = profile ?? {};

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <p className="failed">Error loading footer.</p>;
  }

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2>Azaria-OS</h2>

          <p>Building scalable backend systems and modern web applications.</p>
        </div>
        <button
          className="footer__top-button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <div className="footer__top-button-content">
            <ChevronUp size={20} />
            <span>Back to Top</span>
          </div>
        </button>

        <div className="footer__social">
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
              }
            ]}
          />
        </div>
      </div>

      <hr className="footer__divider" />

      <div className="footer__bottom">
        <div className="footer__left">
          <p>Built with React, Express & PostgreSQL</p>
        </div>

        <div className="footer__right">
          <p>&copy; {new Date().getFullYear()} Azaria Abenet Fitta.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
