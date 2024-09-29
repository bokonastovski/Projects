import { Link } from "react-router-dom";
import flower from "../picturesFolder/landingPagePictures/flower.png";
import infinity from "../picturesFolder/landingPagePictures/infinity.png";
import story from "../picturesFolder/landingPagePictures/story.png";
import community from "../picturesFolder/landingPagePictures/community.png";
import costumers from "../picturesFolder/landingPagePictures/costumers-users.png";
import chart from "../picturesFolder/landingPagePictures/chart.png";
import MainBtnOrange from "./MainBtnOrange";
import "../css/components/_LandingSectionTwo.scss";

const LandingSectionTwo = () => {
  return (
    <section className="sectionTwo">
      <h1 className="sectionTitle">our worlds open their doors</h1>
      <div className="worldsContainer">
        <Link to="/planetEarth" className="worldLink">
          <div className="world">
            <div className="flowerWrapper">
              <img src={flower} alt="White Flower" className="flower" />
              <img src={infinity} alt="infinity icon" className="flowerIcon" />
            </div>
          </div>
          <p>planet-earth</p>
        </Link>
        <Link to="/coCreators" className="worldLink">
          <div className="world">
            <div className="flowerWrapper">
              <img src={flower} alt="White Flower" className="flower" />
              <img src={story} alt="infinity icon" className="flowerIcon" />
            </div>
          </div>
          <p>co-creators</p>
        </Link>
        <Link to="/coCreators" className="worldLink disabled">
          <div className="world">
            <div className="flowerWrapper">
              <img src={flower} alt="White Flower" className="flower" />
              <img src={community} alt="infinity icon" className="flowerIcon" />
            </div>
          </div>
          <p>community</p>
        </Link>
        <Link to="/coCreators" className="worldLink disabled">
          <div className="world">
            <div className="flowerWrapper">
              <img src={flower} alt="White Flower" className="flower" />
              <img src={costumers} alt="infinity icon" className="flowerIcon" />
            </div>
          </div>
          <p>customers/users</p>
        </Link>
        <Link to="/coCreators" className="worldLink disabled">
          <div className="world">
            <div className="flowerWrapper">
              <img src={flower} alt="White Flower" className="flower" />
              <img src={chart} alt="infinity icon" className="flowerIcon" />
            </div>
          </div>
          <p>founders/investors</p>
        </Link>
      </div>
      <div className="orangeBtn">
        <Link to="whyBlack">
          <MainBtnOrange text="wonder why our page is black" />
        </Link>
      </div>
    </section>
  );
};

export default LandingSectionTwo;
