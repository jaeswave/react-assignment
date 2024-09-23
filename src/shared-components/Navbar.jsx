import "../css/index.css";
import logos from "../assets/navbarimages/logo.svg";
import Button from "./Button";
import { Link } from 'react-router-dom'
import { APPLINK } from '../utils'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logos} alt="" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="#Home">Home</Link>
        </li>
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#services">Services</Link>
        </li>
        <li>
          <Link to="#faq">FAQ</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
        <li>
          <Link href="#blog">Blog</Link>
        </li>
        <li>
          <Link href="#recommendation">Recommendation</Link>
        </li>
      </ul>
      <div className="nav-buttons">
        {/* <Button text={"Log in"} btn_type={"login"} isLink={true}onClick={onClick}/> */}
        <Link to={APPLINK.LOGIN[0]}> <button>Login</button> </Link> 
        <Link to={APPLINK.SIGNUP[0]}> <button>Signup</button> </Link> 
        {/* <Button text={"Get Started"} btn_type={"getstarted"} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
