import MainBtnOrange from "./MainBtnOrange";
import unLearningOne from "../picturesFolder/landingPagePictures/unLearningOne.png";
import unLearningTwo from "../picturesFolder/landingPagePictures/unLearningTwo.png";
import unLearningThree from "../picturesFolder/landingPagePictures/unLearningThree.png";
import "../css/components/_LandingSectionOne.scss";

const LandingSectionOne = () => {
  return (
    <section className="sectionOne">
      <div className="flexWrapper">
        <div className="sectionOneLeftPart">
          <h1 className="sectionTitle">unlearning is the evolution</h1>
          <p>
            we enable professionals to utilize new business solutions for a regenerative and inclusive world.
            larger.world is an unlearning platform & community, focused on sustainability, diversity and inclusion.
          </p>
          <MainBtnOrange text="start free" />
        </div>
      </div>
      <div className="flexWrapper">
        <div className="sectionOneRightPart">
          <p>power of unlearning</p>
          <div className="treeContainer">
            <div>
              <img src={unLearningOne} alt="Tree image" />
              <p>what you know</p>
            </div>
            <div>
              <img src={unLearningTwo} alt="Tree image" />
              <p>let go of past beliefs</p>
            </div>
            <div>
              <img src={unLearningThree} alt="Tree image" />
              <p>...to continue to grow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSectionOne;
