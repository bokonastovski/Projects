import "../css/components/_LandingPage.scss";
import LandingSectionOne from "../components/LandingSectionOne";
import LandingSectionTwo from "../components/LandingSectionTwo";
import LandingSectionThree from "../components/LandingSectionThree";
import LandingSectionFour from "../components/LandingSectionFour";
import LandingSectionFive from "../components/LandingSectionFive";
import ContactForm from "../components/ContactForm";
import Subscriptions from "../components/Subscriptions";
import Newsletter from "../components/NewsLetter";

const LandingPage = () => {
  return (
    <main className="landingPage">
      <LandingSectionOne />
      <LandingSectionTwo />
      <LandingSectionThree />
      <LandingSectionFour />
      <LandingSectionFive />
      <Subscriptions className="subscriptions--landing-page" />
      <ContactForm className="contact-form--about-page" />
      <Newsletter />
    </main>
  );
};

export default LandingPage;
