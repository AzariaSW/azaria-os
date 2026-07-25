import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          © {new Date().getFullYear()} Azaria-OS
        </div>

        <div className="footer__center"></div>

        <div className="footer__right"></div>
      </div>
    </footer>
  );
}

export default Footer;
