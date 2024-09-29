import "../css/components/_LandingSectionFive.scss";
import logo from "../picturesFolder/logo/Logo.png";
import slash from "../picturesFolder/landingPagePictures/slash.png";
import woman from "../picturesFolder/landingPagePictures/woman.png";
import aquarius from "../picturesFolder/landingPagePictures/aquarius.png";
import glass from "../picturesFolder/landingPagePictures/glass.png";
import airdrop from "../picturesFolder/landingPagePictures/airdrop.png";
import { useRef } from "react";
import { Link } from "react-router-dom";

const LandingSectionFive = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const cardWidth = carousel.querySelector(".carouselCard")?.clientWidth || 0;
      carousel.scrollLeft -= cardWidth;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const cardWidth = carousel.querySelector(".carouselCard")?.clientWidth || 0;
      carousel.scrollLeft += cardWidth;
    }
  };

  return (
    <section className="carouselSection">
      <div className="carouselTitleAndControls">
        <h1 className="sectionTitle">discussions</h1>
        <div className="carouselControls">
          <button className="carouselPrev" onClick={scrollLeft}>
            &#8592;
          </button>
          <button className="carouselNext" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      </div>
      <div className="carousel" ref={carouselRef}>
        <div className="carouselCard">
          <div className="iconWrapper">
            <img src={logo} alt="spaces with zero tolerance" className="flowerIcon" />
            <img src={slash} alt="spaces with zero tolerance" className="icon" />
          </div>
          <div className="cardBody">
            <h3>spaces with zero tolerance</h3>
            <p>
              By eliminating wasteful gaps and empty areas, this approach fosters a productive environment where every
              inch is utilized effectively, leading to streamlined processes and enhanced collaboration.
            </p>
          </div>
          <Link to="/topics/zeroTolerance">
            <button className="moreBtn">more</button>
          </Link>
        </div>

        <div className="carouselCard">
          <div className="iconWrapper">
            <img src={logo} alt="spaces with zero tolerance" className="flowerIcon" />
            <img src={woman} alt="spaces with zero tolerance" className="icon" />
          </div>
          <div className="cardBody">
            <h3>feminist</h3>
            <p>
              Feminist ideals emphasize the importance of dismantling patriarchal systems, promoting inclusivity, and
              advocating for the rights of marginalized groups, regardless of gender.
            </p>
          </div>
          <Link to="/explore">
            <button className="moreBtn">more</button>
          </Link>
        </div>

        <div className="carouselCard">
          <div className="iconWrapper">
            <img src={logo} alt="spaces with zero tolerance" className="flowerIcon" />
            <img src={aquarius} alt="spaces with zero tolerance" className="icon" />
          </div>
          <div className="cardBody">
            <h3>non-binary open to differences</h3>
            <p>
              Being open to differences is a core value within non-binary communities, where individuals are encouraged
              to express their gender in ways that feel authentic and true to themselves, unrestricted by societal
              norms.
            </p>
          </div>
          <Link to="/explore">
            <button className="moreBtn">more</button>
          </Link>
        </div>

        <div className="carouselCard">
          <div className="iconWrapper">
            <img src={logo} alt="spaces with zero tolerance" className="flowerIcon" />
            <img src={glass} alt="spaces with zero tolerance" className="icon" />
          </div>
          <div className="cardBody">
            <h3>unseen voices</h3>
            <p>
              Listening to and uplifting these voices is crucial for creating a more equitable and empathetic society
              that honors the richness of human diversity and the complexity of lived experiences.
            </p>
          </div>
          <Link to="/explore">
            <button className="moreBtn">more</button>
          </Link>
        </div>

        <div className="carouselCard">
          <div className="iconWrapper">
            <img src={logo} alt="spaces with zero tolerance" className="flowerIcon" />
            <img src={airdrop} alt="spaces with zero tolerance" className="icon" />
          </div>
          <div className="cardBody">
            <h3>voices that haven’t been heard</h3>
            <p>
              By elevating the voices that haven't been heard, we can uncover valuable insights and solutions that have
              the potential to spark positive change and promote greater understanding and empathy.
            </p>
          </div>
          <Link to="/explore">
            <button className="moreBtn">more</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingSectionFive;
