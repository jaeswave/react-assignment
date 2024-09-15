import logo from "../assets/navbarimages/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Mapp Logo" className="footer-logo" />
          <p>
            Our platform is designed to simplify the complexities of wealth
            management, providing you with the tools you need.
          </p>
        </div>

        <div className="footer-center">
          <h3>Address</h3>
          <p>20A Gerrard Road, Ikoyi Lagos</p>

          <h3>Contact</h3>
          <p>
            <a href="mailto:mapp@meristemng.com">mapp@meristemng.com</a>
          </p>
          <p>
            <a href="tel:+2347029640071">+234 702 9640 071</a>
          </p>
        </div>

        <div className="footer-links">
          <h3>Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <h3>Socials</h3>
          <ul className="footer-socials">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 MAPP. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Terms</a> |<a href="#">Privacy</a> |
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
