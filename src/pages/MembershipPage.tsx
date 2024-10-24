import React from "react";
import Subscriptions from "../components/Subscriptions";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/NewsLetter";
import userImage from "../picturesFolder/membershipsPage/user.png";

const MembershipPage = () => {
  return (
    <section className="membershipSection">
      <div className="sign-in">
        <div className="sign-in-section">
          <h2 className="sign-in-section__title">membership</h2>
          <hr className="sign-in-section__divider" />
          <div className="sign-in-section__text-and-link">
            <p className="sign-in-section__text">already a member?</p>
            <div className="sign-in-section__link">
              <img src={userImage} alt="user icon" />
              <span>sign in here</span>
            </div>
          </div>
        </div>
      </div>
      <Subscriptions />
      <ContactForm />
      <Newsletter />
    </section>
  );
};

export default MembershipPage;
