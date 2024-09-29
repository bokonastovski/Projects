import React, { useState } from "react";
import "../css/components/_ContactPageForm.scss";
import checkBoxNotChecked from "../picturesFolder/contactForm/checkbox_notChecked.png";
import checkBoxChecked from "../picturesFolder/contactForm/checkbox_checked.png";

const ContactPageForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="contact-page-form-main">
      <div className="contact-page-form">
        <form className="contact-page-form__form">
          <input
            type="email"
            className="contact-page-form__input"
            placeholder="email address*"
            required
          />
          <div className="contact-page-form__name-phone">
            <input
              type="text"
              className="contact-page-form__input"
              placeholder="name*"
              required
            />
            <input
              type="text"
              className="contact-page-form__input"
              placeholder="phone (optional)"
            />
          </div>
          <textarea
            className="contact-page-form__textarea"
            placeholder="message*"
            required
          ></textarea>
          <button type="submit" className="contact-page-form__button">
            contact
          </button>
          <p className="contact-page-form__required-text">
            * indicates a required-field
          </p>
          <label
            className="contact-page-form__checkbox-container"
            onClick={toggleCheckbox}
          >
            <img
              src={isChecked ? checkBoxChecked : checkBoxNotChecked}
              alt="Checkbox"
              className="contact-page-form__checkbox-image"
            />
            <span className="contact-page-form__checkbox-text">
              I agree that larger.world may contact me at the email address or
              phone number above
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default ContactPageForm;
