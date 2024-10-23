import { useEffect, useState } from "react";
import backgroundHome from "../picturesFolder/planetEarthPictures/backgroundHome.png";
import planetEarthLogo from "../picturesFolder/planetEarthPictures/planetEarthLogo.png";
import upAndDownIcon from "../picturesFolder/planetEarthPictures/up&DownIcon.png";
import noteFirst from "../picturesFolder/planetEarthPictures/noteFirst.png";
import treeTypeOne from "../picturesFolder/planetEarthPictures/treeTypeOne.png";
import butterflyRight from "../picturesFolder/planetEarthPictures/butterflyRight.png";
import butterflyLeft from "../picturesFolder/planetEarthPictures/butterflyLeft.png";
import treeTypeTwo from "../picturesFolder/planetEarthPictures/treeTypeTwo.png";
import hedgehogPicture from "../picturesFolder/planetEarthPictures/hedgehogPicture.png";
import rockPicture from "../picturesFolder/planetEarthPictures/rockPicture.png";
import butterflyFront from "../picturesFolder/planetEarthPictures/butterflyFront.png";
import treeTypeThree from "../picturesFolder/planetEarthPictures/treeTypeThree.png";
import noteSecond from "../picturesFolder/planetEarthPictures/noteSecond.png";
import noteThird from "../picturesFolder/planetEarthPictures/noteThird.png";
import dirtImage from "../picturesFolder/planetEarthPictures/dirtImage.png";
import fourthNote from "../picturesFolder/planetEarthPictures/noteFourth.png";
import leavesImage from "../picturesFolder/planetEarthPictures/leavesImage.png";
import noteFifth from "../picturesFolder/planetEarthPictures/noteFifth.png";
import butterflyNew from "../picturesFolder/planetEarthPictures/butterflyNew.png";
import newMark from "../picturesFolder/planetEarthPictures/newMark.png";
import noteSixth from "../picturesFolder/planetEarthPictures/sixthNote.png";
import noteSeventh from "../picturesFolder/planetEarthPictures/seventhNote.png";
import UICard from "../components/UICard";
import butterflyCardImg1 from "../picturesFolder/planetEarthPictures/butterflyCardImg1.png";
import butterflyCardImg2 from "../picturesFolder/planetEarthPictures/butterflyCardImg2.png";
import butterflyCardImg3 from "../picturesFolder/planetEarthPictures/butterflyCardImg3.png";
import butterflyCardImg4 from "../picturesFolder/planetEarthPictures/butterflyCardImg4.png";
import butterflyCardImg5 from "../picturesFolder/planetEarthPictures/butterflyCardImg5.png";
import butterflyCardImg6 from "../picturesFolder/planetEarthPictures/butterflyCardImg6.png";
import butterflyCardImg7 from "../picturesFolder/planetEarthPictures/butterflyCardImg7.png";
import butterflyCardImg8 from "../picturesFolder/planetEarthPictures/butterflyCardImg8.png";
import butterflyCardImg9 from "../picturesFolder/planetEarthPictures/butterflyCardImg9.png";
import butterflyCardImg10 from "../picturesFolder/planetEarthPictures/butterflyCardImg10.png";
import butterflyCardImg11 from "../picturesFolder/planetEarthPictures/butterflyCardImg11.png";
import { Link } from "react-router-dom";

const PlanetEarthPage = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleButterflyClick = (cardId: string) => {
    setActiveCard(cardId === activeCard ? null : cardId);
  };

  const closeCard = () => {
    setActiveCard(null);
  };

  useEffect(() => {
    const planetEarthCont = document.querySelector(
      ".outerPlanetEarthContainer"
    ) as HTMLElement;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      planetEarthCont.scrollBy({
        left: event.deltaY < 0 ? 100 : -100,
      });
    };

    planetEarthCont.addEventListener("wheel", handleWheel as EventListener);

    return () => {
      planetEarthCont.removeEventListener(
        "wheel",
        handleWheel as EventListener
      );
    };
  }, []);

  return (
    <div className="outerPlanetEarthContainer">
      <div className="backgroundHome">
        <img src={backgroundHome} alt="" className="backgroundLayer" />
        <div className="planetEarthHomeContent slide">
          <div className="logoContainer">
            <Link to={"/"}>
              <img src={planetEarthLogo} alt="Planet Earth Logo" />
            </Link>
          </div>
          <div className="textContainer">
            <h1>planet earth</h1>
            <p>
              this virtual rain-forest hosts content around topics that
              influence our planet.
              <br /> <i>let's start exploring!</i>
            </p>
            <div className="navigateContainer">
              <p>
                scroll up and down to
                <br /> navigate through your <br /> journey.
              </p>
              <img src={upAndDownIcon} alt="up and down icon" />
            </div>
          </div>
          <div className="homeNote">
            <img src={noteFirst} alt="note to user" />
          </div>
        </div>
      </div>

      <div className="backgroundNumOne slide">
        <div className="treeCombOne treeButterflyComb">
          <img src={treeTypeOne} alt="pic of a tree" className="treeImage" />

          <div className="butterflyContainer">
            <img
              src={butterflyRight}
              alt="pic of a buttterly"
              className="butterflyImage"
              onClick={() => handleButterflyClick("butterfly1")}
            />
            {activeCard === "butterfly1" && (
              <UICard
                title="How do business tackle diversity & inclusion?"
                description="Doing and de-centering can be your new way to tackle diversity & inclusion in your business. South African Tumi Sineke, pioneer in diversity, explains how."
                onClose={closeCard}
                buttonText="watch here"
                imageSrc={butterflyCardImg1}
                isVisible={activeCard === "butterfly1"}
              />
            )}
          </div>
        </div>

        <div className="butterflyContainerHome1">
          <img
            src={butterflyLeft}
            alt="pic of a butterfly"
            className="butterflyImage butterflyLeft"
            onClick={() => handleButterflyClick("butterfly2")}
          />
          {activeCard === "butterfly2" && (
            <UICard
              title="Climate Shadow"
              description="Climate Shadow is not only a new term that starts to outshines the term climate crisis. It's also a concept that will dominate our business activities in the next years."
              onClose={closeCard}
              buttonText="find out more"
              imageSrc={butterflyCardImg2}
              isVisible={activeCard === "butterfly2"}
            />
          )}
        </div>

        <div className="treeCombTwo treeButterflyComb">
          <img
            src={treeTypeTwo}
            alt="pic of a tree"
            className="treeImage treeImageTwo"
          />
          <div className="butterflyContainer">
            <img
              src={butterflyRight}
              alt="pic of a buttterly"
              className="butterflyImage"
              onClick={() => handleButterflyClick("butterfly3")}
            />
            {activeCard === "butterfly3" && (
              <UICard
                title="Belonging as DEI concept by Tumi Sineke"
                description="Different cultures enable different perspectives - and isn’t that what we need? South African Tumi Opeke, pioneer in diversity, explains why belonging is the new DEI concept."
                onClose={closeCard}
                buttonText="see for yourself"
                imageSrc={butterflyCardImg3}
                isVisible={activeCard === "butterfly3"}
              />
            )}
          </div>
          <img
            src={hedgehogPicture}
            alt="pic of a hedgehog"
            className="hedgehogImage"
          />
        </div>
      </div>

      <div className="backgroundNumTwo slide">
        <div className="noteSecondCont">
          <img src={noteSecond} alt="pic of a note" />
        </div>

        <div className="rockButterflyComb rockCombOne">
          <img
            src={rockPicture}
            alt="picture of a rock"
            className="rockImageOne"
          />
          <div className="butterflyContainer">
            <img
              src={butterflyFront}
              alt="picture of a butterfly"
              className="butterflyImage butterflyRockOne"
              onClick={() => handleButterflyClick("butterfly4")}
            />
            {activeCard === "butterfly4" && (
              <UICard
                title="Pour Equality: Women Redefining Industries"
                description="You can image a world in which more and more women break into male-dominated fields? Then the podcast Poor equality: Women redefining industries is for you."
                onClose={closeCard}
                buttonText="listen in"
                imageSrc={butterflyCardImg4}
                isVisible={activeCard === "butterfly4"}
              />
            )}
          </div>
        </div>

        <div className="treeCombThree treeButterflyComb">
          <img src={treeTypeThree} alt="pic of a tree" />
          <div className="butterflyContainer">
            <img
              src={butterflyLeft}
              alt="pic of a butterfly"
              className="butterflyImage"
              onClick={() => handleButterflyClick("butterfly5")}
            />
            {activeCard === "butterfly5" && (
              <UICard
                title="Floating small boats first"
                description="Floating small boats first unfolds powerful stories of how indingenious communities can help our businesses to really save Planet Earth.t"
                onClose={closeCard}
                buttonText="see for yourself"
                imageSrc={butterflyCardImg5}
                isVisible={activeCard === "butterfly5"}
              />
            )}
          </div>
        </div>

        <div className="noteThirdCont">
          <img src={noteThird} alt="pic of a note" />
        </div>

        <div className="dirtButterflyComb">
          <img src={dirtImage} alt="pic of dirt" />
          <div className="butterflyContainer">
            <img
              src={butterflyFront}
              alt="pic of a butterfly"
              className="butterflyImage"
              onClick={() => handleButterflyClick("butterfly6")}
            />
            {activeCard === "butterfly6" && (
              <UICard
                title="Future of work: there has to be another way"
                description="Ever had that thought that old business structures limit or block real change to happen? Well, they do! Here are some new approaches that are already common practice."
                onClose={closeCard}
                buttonText="discover now"
                imageSrc={butterflyCardImg6}
                isVisible={activeCard === "butterfly6"}
              />
            )}
          </div>
        </div>

        <div className="treeCombOne treeButterflyComb">
          <img src={treeTypeOne} alt="pic of a tree" className="treeImage" />
          <div className="butterflyContainer">
            <img
              src={butterflyRight}
              alt="pic of a buttterly"
              className="butterflyImage"
              onClick={() => handleButterflyClick("butterfly7")}
            />
            {activeCard === "butterfly7" && (
              <UICard
                title="Intro to greenwashing"
                description="In the past years, greenwashing has been running over us almost like a Tsunami. So we think it's time to go back to its core and remind ourselves what it really is about."
                onClose={closeCard}
                buttonText="let's do it"
                imageSrc={butterflyCardImg7}
                isVisible={activeCard === "butterfly7"}
              />
            )}
          </div>
        </div>

        <div className="rockButterflyComb rockCombTwo">
          <img
            src={rockPicture}
            alt="picture of a rock"
            className="rockImageTwo"
          />
          <div className="butterflyContainer">
            <img
              src={butterflyFront}
              alt="picture of a butterfly"
              className="butterflyImage butterflyRockTwo"
              onClick={() => handleButterflyClick("butterfly8")}
            />
            {activeCard === "butterfly8" && (
              <UICard
                title="How can businesses be naturepositive by Paul Chatterton"
                description="Not (yet) knowing is okay. But not caring is not. Landscape expert Paul Chatterton introduces two approaches every business can use to be nature postive."
                onClose={closeCard}
                buttonText="watch now"
                imageSrc={butterflyCardImg8}
                isVisible={activeCard === "butterfly8"}
              />
            )}
          </div>
        </div>

        <div className="noteFourthCont">
          <img src={fourthNote} alt="pic of a note" />
        </div>
      </div>

      <div className="backgroundNumThree slide">
        <div className="leavesButterflyComb leavesCombOne">
          <img src={leavesImage} alt="pic of leaves" className="leavesOne" />
          <div className="butterflyContainer">
            <img
              src={butterflyRight}
              alt="pic of a butterfly"
              className="butterflyImage"
              onClick={() => handleButterflyClick("butterfly9")}
            />
            {activeCard === "butterfly9" && (
              <UICard
                title="Global Resilience & Climate"
                description="Traditional approaches to resilience, like “bouncing back,” or mistaking it for crisis management, dont work anymore. A holistic approach to global resiliance and climate can be your new solution."
                onClose={closeCard}
                buttonText="find out more"
                imageSrc={butterflyCardImg9}
                isVisible={activeCard === "butterfly9"}
              />
            )}
          </div>
        </div>

        <div className="noteFifthCont">
          <img src={noteFifth} alt="pic of a note" />
        </div>

        <div className="leavesButterflyComb leavesCombTwo">
          <img src={leavesImage} alt="pic of leaves" className="leavesTwo" />
          <div className="butterflyContainer">
            <img
              src={butterflyRight}
              alt="pic of a butterfly"
              className="butterflyImage"
              onClick={() => handleButterflyClick("butterfly10")}
            />
            {activeCard === "butterfly10" && (
              <UICard
                title="How do we finance regeneration? by Paul Chatterton"
                description="How do we finance regeneration? is a question that often feels overwhelming or blocks real change to happen. But there are some very clear answers to it, knows Landscape Finance Lab founder Paul Chatterton."
                onClose={closeCard}
                buttonText="see the content"
                imageSrc={butterflyCardImg10}
                isVisible={activeCard === "butterfly10"}
              />
            )}
          </div>
        </div>

        <div className="leavesButterflyComb leavesCombThree">
          <img src={leavesImage} alt="pic of leaves" className="leavesThree" />

          <div className="newButterflyCont">
            <img src={newMark} alt="new mark" />
            <div className="butterflyContainer">
              <img
                src={butterflyNew}
                alt="pic of a butterfly"
                className="butterflyImage"
                onClick={() => handleButterflyClick("butterfly11")}
              />
              {activeCard === "butterfly11" && (
                <UICard
                  title="Regenerar"
                  description="Movie review of a documentary that challenges conventional perspectives on change and regeneration."
                  onClose={closeCard}
                  buttonText="find out more"
                  imageSrc={butterflyCardImg11}
                  isVisible={activeCard === "butterfly11"}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="backgroundNumFour slide">
        <div className="noteSixthCont">
          <img src={noteSixth} alt="pic of a note" />
        </div>
      </div>

      <div className="backgroundEnd slide">
        <div className="noteSeventhCont">
          <img src={noteSeventh} alt="pic of a note" />
        </div>
      </div>
    </div>
  );
};

export default PlanetEarthPage;
