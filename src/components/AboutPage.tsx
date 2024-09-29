import React from "react";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Newsletter from "../components/NewsLetter";
import "../css/components/_HowItWorks.scss";
import purpleCircle from "../picturesFolder/aboutPage/purple_circle.png";
import orangeCircle from "../picturesFolder/aboutPage/orange_circle.png";
import lineOne from "../picturesFolder/aboutPage/line_one.png";
import lineTwo from "../picturesFolder/aboutPage/line_two.png";
import trees from "../picturesFolder/aboutPage/aboutPage_trees.png";

const AboutPage: React.FC = () => {
  return (
    <section className="aboutSection">
      <div className="about-section howItWorks">
        <h1 className="sectionWorksTitle">about</h1>
        <p className="about-section__text">
          at larger.world, we are dedicated to fostering sustainability,
          diversity, and inclusion in the business world. Our unique unlearning
          platform provides professionals with green, mindful, and safe spaces
          to explore new ideas, inclusive narratives, and artistic expressions.
          <br /> <br />
          through our continuous learning workshops, we enable participants to
          apply fresh concepts and create regenerative and inclusive work
          environments.
        </p>

        <div className="how-it-works">
          <div className="how-it-works__circle how-it-works__circle--left">
            <img src={purpleCircle} alt="spaces and workshops" />
            <span className="how-it-works__text big-span">
              spaces and workshops
            </span>
          </div>
          <img
            src={lineOne}
            alt="line"
            className="how-it-works__line how-it-works__line--left"
          />
          <div className="how-it-works__circle how-it-works__circle--center">
            <img src={orangeCircle} alt="unheard voices" />
            <span className="how-it-works__text">unheard voices</span>
          </div>
          <img
            src={lineTwo}
            alt="line"
            className="how-it-works__line how-it-works__line--right"
          />
          <div className="how-it-works__circle how-it-works__circle--right">
            <img src={purpleCircle} alt="safe working ecosystems" />
            <span className="how-it-works__text">safe working ecosystems</span>
          </div>
        </div>

        <h2 className="about-section__title">why unlearning methodology?</h2>
        <p className="about-section__text">
          by supporting and nurturing unlearning pathways, we unravel
          dysfunctional systems thwarted by theory, best practice, and
          hyper-focused growth strategies. We start rebuilding workplaces
          through cognitive ways of reflection and implementation, fostering a
          mindset of continuous learning and growth.
        </p>
        <img src={trees} alt="trees" className="about-section__trees" />

        <h2 className="about-section__title">who we are?</h2>
        <p className="about-section__text">
          in all services provided by larger.world, our facilitators and
          co-facilitators are instrumental in guiding discussions, fostering
          inclusivity, and promoting critical thinking. we collected tools, tips
          and stories from all across the globe to bring new perspective to
          existing problems.
          <br /> <br />
          whether it's workshops, events, or other engagements, they bring
          diverse expertise to create collaborative learning experiences.
        </p>

        <ContactForm className="contact-form--about-page" />
        <FAQ className="faq--about-page" />
        <Newsletter />
      </div>
    </section>
  );
};

export default AboutPage;
