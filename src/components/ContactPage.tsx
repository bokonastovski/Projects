import Newsletter from "../components/NewsLetter";
import linkedInIcon from "../picturesFolder/contactPage/linkedin2.png";
import ContactPageForm from "../components/ContactPageForm";

const ContactPage = () => {
  return (
    <section className="contactSection">
      <div className="contact-info">
        <h2 className="contact-info__title">contact larger.world</h2>
        <hr className="sign-in-section__divider contact-info__divider" />
        <p className="contact-info__text">
          no matter if you have a question, a suggestion, a concern or simply
          wanna chat – we would love to hear from you!
        </p>

        <div className="contact-info__text-and-link">
          <a
            href="https://at.linkedin.com/company/larger-world"
            className="contact-info__text"
          >
            join our community on linkedin{" "}
          </a>
          <a href="https://at.linkedin.com/company/larger-world">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
        </div>
        <p className="contact-info__text">
          c/o widelake bakery breitenseerstraße 30b 1140 vienna austria
        </p>
      </div>
      <ContactPageForm />
      <Newsletter />
    </section>
  );
};

export default ContactPage;
