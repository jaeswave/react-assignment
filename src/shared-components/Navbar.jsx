import "../css/index.css";
import logos from "../assets/navbarimages/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logos} alt="" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#recommendation">Recommendation</a>
        </li>
      </ul>
      <div className="nav-buttons">
        <Button text={"Log in"} btn_type={"login"} />
        <Button text={"Get Started"} btn_type={"getstarted"} />
      </div>
    </nav>
  );
};

export default Navbar;
