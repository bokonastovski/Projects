import { Link } from "react-router-dom";
import "../css/components/_Footer.scss";
import theGreenWeb from "../picturesFolder/logo/theGreenWeb.png";
import awsImg from "../picturesFolder/logo/awsImg.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsFooterVisible(scrollTop + windowHeight >= documentHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      <div className={`footerWrap ${isFooterVisible ? "show" : ""}`}>
        <div>
          <Link to="/about" className="footerLink">
            about
          </Link>
          <Link to="/howItWorks" className="footerLink">
            how it works
          </Link>
          <Link to="/membership" className="footerLink">
            membership
          </Link>
          <Link to="/privacyPolicy" className="footerLink">
            privacy policy
          </Link>
        </div>
        <div>
          <Link to="/planetEarth" className="footerLink">
            planet-earth
          </Link>
          <Link to="/coCreators" className="footerLink">
            co-creators
          </Link>
          <Link to="/community" className="footerLink">
            community
          </Link>
          <Link to="/costumersUsers" className="footerLink">
            costumers-users
          </Link>
          <Link to="/foundersInvestors" className="footerLink">
            founders-investors
          </Link>
        </div>
        <div>
          <img src={theGreenWeb} alt="The green web certificate" />
          <p>supported by first international incubator (aws)</p>
          <img src={awsImg} alt="AWS Image" />
        </div>
      </div>
      <div className="copyRights">copyright &copy; larger.world </div>
    </footer>
  );
};

export default Footer;
