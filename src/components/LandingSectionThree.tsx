import whatWeOffer from "../picturesFolder/landingPagePictures/whatWeOffer.png";
import "../css/components/_LandingSectionThree.scss";

function LandingSectionThree() {
  return (
    <section className="sectionThree">
      <h1 className="sectionTitle">with larger.world we offer</h1>
      <img src={whatWeOffer} alt="whatWeOffer" />
      <div className="sectionThreeFlex">
        <div>
          <h2>unlearning</h2>
          <p>
            Instead of focusing on new skills, we support companies to tackle sustainability and DEI through a unique,
            unlearning process taking your team through 5 worlds.
          </p>
        </div>
        <div>
          <h2>greenest content hub</h2>
          <p>
            Highly-curated content in one place, with user-friendly interface, videos, context description and other
            creative format, hosted in the most green possible way online.
          </p>
        </div>
        <div>
          <h2>practical tips</h2>
          <p>
            The best way to fight the existing reality is to build new examples of the world we believe in. Those new
            examples are already out there, but they rarely make it to the overpopulated media space.
          </p>
        </div>
        <div>
          <h2>community</h2>
          <p>
            Build a community of DEI and sustainability professionals that is connected, vibrant and has access to the
            most engaging tools, videos and materials on the market.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LandingSectionThree;
