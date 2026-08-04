import { SocialLinks } from "../../../../components/common";
import { Skeleton } from "../../../../components/feedback";
import useProfile from "../../../../features/profile/hooks/useProfile";
import "./Footer.css";

function Footer() {
  const { data: profile, isLoading, isError } = useProfile();
  const { email, github, linkedin } = profile ?? {};

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <p>Error loading profile data.</p>;
  }

  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p>Built with React, Express & PostgreSQL</p>
        </div>

        <div className="footer__center">
          <p>&copy; {new Date().getFullYear()} Azaria Abenet Fitta.</p>
        </div>

        <div className="footer__right">
          <div className="footer__social">
            <h3>Connect</h3>

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
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
