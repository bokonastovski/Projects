import "../css/components/_Header.scss";
import { Link } from "react-router-dom";
import logo from "../picturesFolder/logo/Logo.png";
import linkedInHover from "../picturesFolder/newsLetter/linkedIn_hover.png";
import searchIcon from "../picturesFolder//icons/searchIcon.png";
import userProfile from "../picturesFolder//icons/userProfile.png";

const Header = () => {
  return (
    <nav>
      <Link to="/" className="headerLogo">
        <img src={logo} alt="Larger World Logo" className="logo" />
        <p>larger.world</p>
      </Link>
      <div>
        <Link to="/about" className="navLink">
          about
        </Link>
        <Link to="/howItWorks" className="navLink">
          how it works
        </Link>
        <Link to="/membership" className="navLink">
          membership
        </Link>
        <Link to="/contact" className="navLink">
          contact
        </Link>
      </div>
      <div>
        <Link to="https://www.linkedin.com/company/larger-world/?originalSubdomain=at" className="socialIcon">
          <img src={linkedInHover} alt="LinkedIn LargerWorld Profile" />
        </Link>
        <Link to="/explore">
          {" "}
          <img src={searchIcon} alt="LinkedIn LargerWorld Profile" className="socialIcon" />
        </Link>
        <Link to="/">
          <img src={userProfile} alt="LinkedIn LargerWorld Profile" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
