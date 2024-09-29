import "../css/components/_HowItWorks.scss";
import cloud from "../picturesFolder/howItWorks/cloud.png";
import time from "../picturesFolder/howItWorks/time.png";
import sunFog from "../picturesFolder/howItWorks/sunFog.png";
import travelFrame from "../picturesFolder/howItWorks/travelFrame.png";
import tipsFrame from "../picturesFolder/howItWorks/tipsFrame.png";
import LandingSectionTwo from "../components/LandingSectionTwo";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/NewsLetter";
import PageHeader from "../components/pageHeader";

const HowItWorksPage = () => {
  return (
    <section className="howItWorks">
      <PageHeader
        title="how it works"
        description="how it works, is actually up to you. you can travel and explore our worlds in any order and time you feel
        comfortable with. however, there is still some background info you might find useful during your new
        unlearning journey."
      />
      <h2 className="title">how we create our worlds</h2>
      <div className="worksContainer">
        <div className="worksChildContainer">
          <img src={cloud} alt="cloud" />
          <p>
            our worlds are created based on “responsibility fields,” where
            pressing and major global issues are occurring and recent efforts
            haven’t brought the needed change.
          </p>
        </div>
        <div className="worksChildContainer">
          <img src={time} alt="time" />
          <p>
            we (as humans) are currently screwing up big time in these fields –
            to put it politely, as current efforts are falling short in
            addressing these crucial areas.
          </p>
        </div>
        <div className="worksChildContainer">
          <img src={sunFog} alt="sunFog" />
          <p>
            our extensive research uncovers examples that tackle these issues
            from often unknown perspectives, frequently unnoticed by mass media.
            This is what you will find on larger.world!
          </p>
        </div>
      </div>
      <h2 className="title">how to travel our worlds</h2>
      <img src={travelFrame} alt="travelFrame" />
      <LandingSectionTwo />
      <h2 className="title">tips</h2>
      <p className="tipsPara">
        as much as we want you to feel comfortable in your way of traveling, we
        are also aware that the journey of unlearning is an uncomfortable one
        that can challenge your ego.
      </p>
      <p className="tipsPara">
        here are a few tips for your journey in case our content makes you feel
        uncomfortable
      </p>
      <img src={tipsFrame} alt="tipsFrame" />
      <ContactForm />
      <Newsletter />
    </section>
  );
};

export default HowItWorksPage;
