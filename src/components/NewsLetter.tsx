import React, { useState } from "react";
import "../css/components/_NewsLetter.scss";
import linkedIn from "../picturesFolder/newsLetter/linkedIn.png";
import linkedInHover from "../picturesFolder/newsLetter/linkedIn_hover.png";

const Newsletter: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="newsletter">
      <div className="newsletter__content">
        <h2 className="newsletter__title">join our newsletter</h2>
        <form className="newsletter__form">
          <input
            type="email"
            placeholder="email"
            className="newsletter__form-input"
            required
          />
          <p className="newsletter__form-subtext">your email is safe with us</p>{" "}
          <button type="submit" className="newsletter__form-button">
            {" "}
            subscribe now!
          </button>
        </form>
        <div className="newsletter__social">
          <a href="https://at.linkedin.com/company/larger-world">
            <img
              src={isHovered ? linkedInHover : linkedIn}
              alt="LinkedIn"
              className="newsletter__social-icon"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
