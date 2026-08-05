import { SocialLinks } from "../../../../components/common";
import { Skeleton } from "../../../../components/feedback";
import { ChevronUp, Dot } from "../../../../lib/icons";
import useProfile from "../../../../features/profile/hooks/useProfile";
import "./Footer.css";

function Footer() {
  const { data: profile, isLoading, isError } = useProfile();
  const { email, github, linkedin, phone, telegram } = profile ?? {};

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <p className="failed">Error loading footer.</p>;
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <h2 className="footer__brand">Azaria-SW</h2>

        <p className="footer__description">
          Building scalable backend systems and modern web applications.
        </p>

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
            {
              platform: "telegram",
              url: `https://t.me/${telegram}`,
            },
          ]}
        />

        <hr className="footer__divider" />

        <div className="footer__meta">
          <p>&copy; {new Date().getFullYear()} Azaria Abenet Fitta</p>

          <p className="footer__meta-message">Built with React<Dot size={30}/>Express<Dot size={30}/>PostgreSQL</p>
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
          <ChevronUp size={18} />

          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
