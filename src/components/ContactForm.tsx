import React, { useState } from "react";
import "../css/components/_ContactForm.scss";
import checkBoxNotChecked from "../picturesFolder/contactForm/checkbox_notChecked.png";
import checkBoxChecked from "../picturesFolder/contactForm/checkbox_checked.png";
import leafImage from "../picturesFolder/contactForm/larger_world_contact_1.png";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`contact ${className}`}>
      <div className="contact-form">
        <div className="contact-form__content">
          <h1 className="contact-form__title">connect larger.world</h1>
          <p className="contact-form__subtitle">
            our team always active to support you
          </p>
          <form className="contact-form__form">
            <input
              type="email"
              className="contact-form__input"
              placeholder="email address*"
              required
            />
            <div className="contact-form__name-phone">
              <input
                type="text"
                className="contact-form__input"
                placeholder="name"
              />
              <input
                type="text"
                className="contact-form__input"
                placeholder="phone"
              />
            </div>
            <textarea
              className="contact-form__textarea"
              placeholder="message*"
              required
            ></textarea>
            <p className="contact-form__required-text">
              * indicates a required-field
            </p>
            <label
              className="contact-form__checkbox-container"
              onClick={toggleCheckbox}
            >
              <img
                src={isChecked ? checkBoxChecked : checkBoxNotChecked}
                alt="Checkbox"
                className="contact-form__checkbox-image"
              />
              <span className="contact-form__checkbox-text">
                I agree that larger.world may contact me at the email address or
                phone number above
              </span>
            </label>
            <button type="submit" className="contact-form__button">
              send
            </button>
          </form>
        </div>
        <div className="contact-form__leaf-image-container">
          <img
            src={leafImage}
            alt="Leaf"
            className="contact-form__leaf-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
