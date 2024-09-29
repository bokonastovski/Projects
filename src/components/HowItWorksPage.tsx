import "../css/components/_HowItWorks.scss";
import cloud from "../picturesFolder/howItWorks/cloud.png";
import time from "../picturesFolder/howItWorks/time.png";
import sunFog from "../picturesFolder/howItWorks/sunFog.png";
import travelFirst from "../picturesFolder/howItWorks/travelFirst.png";
import travelSecond from "../picturesFolder/howItWorks/travelSecond.png";
import travelThird from "../picturesFolder/howItWorks/travelThird.png";
import stop from "../picturesFolder/howItWorks/stop.png";
import share from "../picturesFolder/howItWorks/share.png";
import dig from "../picturesFolder/howItWorks/dig.png";
import ask from "../picturesFolder/howItWorks/ask.png";
import join from "../picturesFolder/howItWorks/join.png";
import logo from "../picturesFolder/howItWorks/vectorLogo.png";
import LandingSectionTwo from "../components/LandingSectionTwo";
import ContactForm from "../components/ContactForm";

const HowItWorksPage = () => {
  return (
    <section className="howItWorks">
      <div>
        <h1 className="sectionWorksTitle">how it works</h1>
        <p>
          how it works, is actually up to you. you can travel and explore our
          worlds in any order and time you feel comfortable with. however, there
          is still some background info you might find useful during your new
          unlearning journey.
        </p>
      </div>
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
      <div className="card-container">
        <svg width="0" height="0">
          <defs>
            <path id="curly-line" d="M0,0 C50,100 150,-100 200,0" />
          </defs>
        </svg>

        <div className="card">
          <img src={travelFirst} alt="travelFirst" className="card-image top" />
          <h3>01</h3>
          <p>
            When you step into our realm, you'll be invited to select a mascot
            to accompany you on your journey through our diverse content worlds.
          </p>
        </div>
        <div className="card">
          <h3>02</h3>
          <p>
            Each world features content developed by our team or provided by one
            of carefully selected content partners.
          </p>
          <img
            src={travelSecond}
            alt="travelSecond"
            className="card-image bottom"
          />
        </div>
        <div className="card">
          <img src={travelThird} alt="travelThird" className="card-image top" />
          <h3>03</h3>
          <p>
            Currently, you will find two worlds online - planet earth and
            co-creators. Stay tuned for more worlds coming soon!
          </p>
        </div>
      </div>
      <LandingSectionTwo />
      <h2 className="title">tips</h2>
      <div className="tipsContainer">
        <img src={logo} alt="Larger world logo" className="vectorLogo" />

        <div className="tipsChild">
          <div className="tipsCard">
            <img src={stop} alt="Stop icon" className="vectorIcon" />
            <p>
              take a break and revisit the content later — unlearning takes time
              and is never done in the first attempt.
            </p>
          </div>
          <div className="tipsCard">
            <img src={share} alt="Share icon" className="vectorIcon" />
            <p>
              share your feelings to someone of your choice without guilt — it's
              okay if your ego is hurt it’s part of the process. we know because
              we’ve been there.
            </p>
          </div>
          <div className="tipsCard">
            <img src={dig} alt="Dig icon" className="vectorIcon" />
            <p>
              unsure or uncertain about some specific content? you will also
              find the source and a context description with each content piece.
              dig deeper and share with us!
            </p>
          </div>
          <div className="tipsCard">
            <img src={ask} alt="Ask icon" className="vectorIcon" />
            <p>
              if you have a question you can reach out to the larger.world team
              at any time 
            </p>
          </div>
          <div className="tipsCard">
            <img src={join} alt="Join icon" className="vectorIcon" />
            <p>
              we are currently working on an exchange channel for you to discuss
              with your peers. if you are interested in joining, please sign up
              here.
            </p>
          </div>
        </div>
      </div>
      <ContactForm className="contact-form--about-page" />
    </section>
  );
};

export default HowItWorksPage;
