import "../css/components/_LandingSectionFour.scss";
import eventIllustration from "../picturesFolder/landingPagePictures/eventIllustration.png";
import MainBtnOrange from "./MainBtnOrange";

const LandingSectionFour = () => {
  return (
    <section className="sectionFour">
      <h1 className="sectionTitle">unlearning workshop</h1>
      <div className="container">
        <div>
          <h3>october, 2024</h3>
          <hr />
          <div className="container leftContainer">
            <div className="childContainerLeft">objectives</div>
            <ul className="childContainerRight">
              <li>team empowerment and synchronization</li>
              <li>intercultural work design, raising awareness and</li>
              <li>hosting uncomfortable conversations that impact your teams and their performance</li>
            </ul>
          </div>
          <hr />
          <div className="container leftContainer">
            <div className="childContainerLeft">course outline</div>
            <ul className="childContainerRight">
              <li>one-day in-person workshop with two facilitators for your entire team</li>
              <li>6 months access to premium online content</li>
              <li>3 hours of online follow-up training</li>
            </ul>
          </div>
          <hr />
          <div className="container leftContainer">
            <div className="childContainerLeft">target audience</div>
            <ul className="childContainerRight">
              <li>de&i and sustainability managers, teams, departments</li>
              <li>business managers & owners running large international teams</li>
              <li>ngos, philanthropists, international development organisations</li>
            </ul>
          </div>
          <hr />
          <div className="container leftContainer">
            <div className="childContainerLeft">outcomes</div>
            <ul className="childContainerRight">
              <li>teams, employees, employers will maintain a better sense of community</li>
              <li>respond better to market needs</li>
              <li>innovate with a higher degree of success and deliver better results</li>
            </ul>
          </div>
          <hr className="lastHr" />
          <MainBtnOrange text="book your workshop" />
        </div>
        <div>
          <img src={eventIllustration} alt="" />
        </div>
      </div>
    </section>
  );
};

export default LandingSectionFour;
