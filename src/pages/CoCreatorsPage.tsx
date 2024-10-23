import { useEffect, useState } from "react";
import coCreatorsLogo from "../picturesFolder/coCreators/coCreatorsLogo.png";
import coCreatorsUpDownIcon from "../picturesFolder/coCreators/coCreatorsUpDownIcon.png";
import coCreatorsNote1 from "../picturesFolder/coCreators/coCreatorsNote1.png";
import coCreatorsChairs from "../picturesFolder/coCreators/coCreatorsChairs.png";
import coworkImg1 from "../picturesFolder/coCreators/coworkImg1.png";
import coworkImg2 from "../picturesFolder/coCreators/coworkImg2.png";
import coworkImg3 from "../picturesFolder/coCreators/coworkImg3.png";
import seePostIcon1 from "../picturesFolder/coCreators/seePostIcon1.png";
import seePostIcon2 from "../picturesFolder/coCreators/seePostIcon2.png";
import seePostIcon3 from "../picturesFolder/coCreators/seePostIcon3.png";

import coCreatorsNote2 from "../picturesFolder/coCreators/coCreatorsNote2.png";
import coCreatorsNote3 from "../picturesFolder/coCreators/coCreatorsNote3.png";
import coCreatorsNote4 from "../picturesFolder/coCreators/coCreatorsNote4.png";
import coworkImg4 from "../picturesFolder/coCreators/coworkImg4.png";
import coworkImg5 from "../picturesFolder/coCreators/coworkImg5.png";
import coworkImg6 from "../picturesFolder/coCreators/coworkImg6.png";
import coworkImg7 from "../picturesFolder/coCreators/coworkImg7.png";
import drawer1 from "../picturesFolder/coCreators/drawer1.png";
import seePostIcon4 from "../picturesFolder/coCreators/seePostIcon4.png";
import seePostIcon5 from "../picturesFolder/coCreators/seePostIcon5.png";

import coCreatorsNote5 from "../picturesFolder/coCreators/coCreatorsNote5.png";
import coworkImg8 from "../picturesFolder/coCreators/coworkImg8.png";
import coworkImg9 from "../picturesFolder/coCreators/coworkImg9.png";
import coworkImg10 from "../picturesFolder/coCreators/coworkImg10.png";
import seePostIcon6 from "../picturesFolder/coCreators/seePostIcon6.png";
import boxImg from "../picturesFolder/coCreators/boxImg.png";

import coworkImg11 from "../picturesFolder/coCreators/coworkImg11.png";
import coworkImg12 from "../picturesFolder/coCreators/coworkImg12.png";
import coworkImg13 from "../picturesFolder/coCreators/coworkImg13.png";
import coworkImg14 from "../picturesFolder/coCreators/coworkImg14.png";
import coworkImg15 from "../picturesFolder/coCreators/coworkImg15.png";
import coCreatorsNote6 from "../picturesFolder/coCreators/coCreatorsNote6.png";
import seePostIcon7 from "../picturesFolder/coCreators/seePostIcon7.png";

import UICard from "../components/UICard";
import coCreatorsCardImg1 from "../picturesFolder/coCreators/coCreatorsCardImg1.png";
import coCreatorsCardImg2 from "../picturesFolder/coCreators/coCreatorsCardImg2.png";
import coCreatorsCardImg3 from "../picturesFolder/coCreators/coCreatorsCardImg3.png";
import coCreatorsCardImg4 from "../picturesFolder/coCreators/coCreatorsCardImg4.png";
import coCreatorsCardImg5 from "../picturesFolder/coCreators/coCreatorsCardImg5.png";
import coCreatorsCardImg6 from "../picturesFolder/coCreators/coCreatorsCardImg6.png";
import coCreatorsCardImg7 from "../picturesFolder/coCreators/coCreatorsCardImg7.png";
import coCreatorsCardImg8 from "../picturesFolder/coCreators/coCreatorsCardImg8.png";
import coCreatorsCardImg9 from "../picturesFolder/coCreators/coCreatorsCardImg9.png";
import coCreatorsCardImg10 from "../picturesFolder/coCreators/coCreatorsCardImg10.png";
import coCreatorsCardImg11 from "../picturesFolder/coCreators/coCreatorsCardImg11.png";
import coCreatorsCardImg12 from "../picturesFolder/coCreators/coCreatorsCardImg12.png";
import coCreatorsCardImg13 from "../picturesFolder/coCreators/coCreatorsCardImg13.png";
import { Link } from "react-router-dom";

const CoCreatorsPage = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleButterflyClick = (cardId: string) => {
    setActiveCard(cardId === activeCard ? null : cardId);
  };

  const closeCard = () => {
    setActiveCard(null);
  };

  useEffect(() => {
    const coCreatorsCont = document.querySelector(
      ".coCreatorsContainer"
    ) as HTMLElement;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      coCreatorsCont.scrollBy({
        left: event.deltaY < 0 ? 100 : -100,
      });
    };

    coCreatorsCont.addEventListener("wheel", handleWheel as EventListener);

    return () => {
      coCreatorsCont.removeEventListener("wheel", handleWheel as EventListener);
    };
  }, []);

  return (
    <div className="coCreatorsContainer">
      <div className="coCreatorsSectionOne slide">
        <div className="coCreatorsHomeContent">
          <div className="logo">
            <Link to={"/"}>
              <img src={coCreatorsLogo} alt="image of logo" />
            </Link>
          </div>

          <div className="textContent">
            <div className="headingContainer">
              <h1>co-creators</h1>
              <p>
                the following virtual working environments host content around
                our narratives, biases and interactions with each other. <br />{" "}
                <span>please come in!</span>
              </p>
            </div>

            <div className="upDownContainer">
              <p>
                scroll up and down to <br /> navigate through <br /> your
                journey.
              </p>
              <img src={coCreatorsUpDownIcon} alt="up and down icon" />
            </div>
          </div>

          <div className="noteContainer">
            <img src={coCreatorsNote1} alt="note" />
          </div>
        </div>

        <div className="chairsContainer">
          <img src={coCreatorsChairs} alt="chairs" />
        </div>

        <div className="coworkOneContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon1}
              alt="see post icon"
              className="seePostIcon1"
              onClick={() => handleButterflyClick("seePost1")}
            />
            {activeCard === "seePost1" && (
              <UICard
                title='"This is not okay!"'
                description="Rita Ibisa, managing director of the Austrian anti-rascism institute ZARA, talks about how structural racism is embeded in our everyday life, and how she personally experiences it as a person of colour."
                onClose={closeCard}
                buttonText="watch now"
                imageSrc={coCreatorsCardImg1}
                isVisible={activeCard === "seePost1"}
              />
            )}
          </div>
          <img src={coworkImg1} alt="cowork image" className="coworkImg1" />
        </div>

        <div className="coworkTwoContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon2}
              alt="see post icon"
              className="seePostIcon2"
              onClick={() => handleButterflyClick("seePost2")}
            />
            {activeCard === "seePost2" && (
              <UICard
                title="Let's fight discrimination and harrassment at work!"
                description="Sadly employees still often endure mistreatment at the work place silently due to various barriers. In this article, we delve into the nuanced issue of workplace discrimination and suggest ways of how to fight it."
                onClose={closeCard}
                buttonText="let's do it"
                imageSrc={coCreatorsCardImg2}
                isVisible={activeCard === "seePost2"}
              />
            )}
          </div>
          <img src={coworkImg2} alt="cowork image" className="coworkImg2" />
        </div>

        <div className="coworkThreeContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon3}
              alt="see post icon"
              className="seePostIcon3"
              onClick={() => handleButterflyClick("seePost3")}
            />
            {activeCard === "seePost3" && (
              <UICard
                title="Future of work: there has to be another way"
                description="Ever had that thought that old business structures limit or block real change to happen? Well, they do! Here are some new approaches that are already common practice."
                onClose={closeCard}
                buttonText="find out more"
                imageSrc={coCreatorsCardImg3}
                isVisible={activeCard === "seePost3"}
              />
            )}
          </div>
          <img src={coworkImg3} alt="cowork image" className="coworkImg3" />
        </div>
      </div>

      {/* ====================== SECTION 2 =================================== */}

      <div className="coCreatorsSectionTwo slide">
        <div className="noteContainer note2">
          <img src={coCreatorsNote2} alt="note" />
        </div>

        <div className="coworkFourContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon3}
              alt="see post icon"
              className="seePostIcon3"
              onClick={() => handleButterflyClick("seePost4")}
            />
            {activeCard === "seePost4" && (
              <UICard
                title="How to build Sustainable Happiness"
                description="Can sustainiblity and happiness can complement each other in working eniviroments? Yes, they even must! Here is how and why."
                onClose={closeCard}
                buttonText="find out more"
                imageSrc={coCreatorsCardImg4}
                isVisible={activeCard === "seePost4"}
              />
            )}
          </div>
          <img src={coworkImg4} alt="cowork image" className="coworkImg4" />
        </div>

        <div className="coworkFiveContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon4}
              alt="see post icon"
              className="seePostIcon4"
              onClick={() => handleButterflyClick("seePost5")}
            />
            {activeCard === "seePost5" && (
              <UICard
                title="Belonging as DEI concept by Tumi Sineke"
                description="Different cultures enable different perspectives - and isn’t that what we need? South African Tumi Opeke, pioneer in diversity, explains why belonging is the new DEI concept."
                onClose={closeCard}
                buttonText="see for yourself"
                imageSrc={coCreatorsCardImg5}
                isVisible={activeCard === "seePost5"}
              />
            )}
          </div>
          <img src={drawer1} alt="cowork image" className="drawerImg" />
        </div>

        <div className="noteContainer note3">
          <img src={coCreatorsNote3} alt="note" />
        </div>

        <div className="coworkSixContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon4}
              alt="see post icon"
              className="seePostIcon4"
              onClick={() => handleButterflyClick("seePost6")}
            />
            {activeCard === "seePost6" && (
              <UICard
                title="Where do Inclusion and Diversity come from?"
                description="Those two powerful words, that started to influcence many of our business decisions, go back a long way. Rita Ibisa, managing director of ZARA, explains the roots of inclusion and diversity."
                onClose={closeCard}
                buttonText="watch the video"
                imageSrc={coCreatorsCardImg6}
                isVisible={activeCard === "seePost6"}
              />
            )}
          </div>
          <img src={coworkImg5} alt="cowork image" className="coworkImg5" />
        </div>

        <div className="coworkSevenContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon4}
              alt="see post icon"
              className="seePostIcon4"
              onClick={() => handleButterflyClick("seePost7")}
            />
            {activeCard === "seePost7" && (
              <UICard
                title="Hosting inclusion: out of the box practices"
                description="Inclusive teams are over 35% more productive. But hosting inclusion successfully, needs innovative, empathic approaches. Here are some new ideas for you."
                onClose={closeCard}
                buttonText="check them out"
                imageSrc={coCreatorsCardImg7}
                isVisible={activeCard === "seePost7"}
              />
            )}
          </div>
          <img src={coworkImg6} alt="cowork image" className="coworkImg6" />
        </div>

        <div className="noteContainer note4">
          <img src={coCreatorsNote4} alt="note" />
        </div>

        <div className="coworkEightContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon5}
              alt="see post icon"
              className="seePostIcon5"
              onClick={() => handleButterflyClick("seePost8")}
            />
            {activeCard === "seePost8" && (
              <UICard
                title="Unmasking DEI Washing"
                description="Just when we thought DEI efforts are the solution, DEI washing is raising serious concern in the business world. Find out what are the real threats and what business can do about it."
                onClose={closeCard}
                buttonText="read more"
                imageSrc={coCreatorsCardImg8}
                isVisible={activeCard === "seePost8"}
              />
            )}
          </div>
          <img src={coworkImg7} alt="cowork image" className="coworkImg7" />
        </div>
      </div>

      <div className="coCreatorsSectionThree slide">
        <div className="coworkNinthContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon3}
              alt="see post icon"
              className="seePostIcon3"
              onClick={() => handleButterflyClick("seePost9")}
            />
            {activeCard === "seePost9" && (
              <UICard
                title="How do business tackle diversity & inclusion?"
                description="Doing and de-centering can be your new way to tackle diversity & inclusion in your business. South African Tumi Sineke, pioneer in diversity, explains how."
                onClose={closeCard}
                buttonText="watch here"
                imageSrc={coCreatorsCardImg9}
                isVisible={activeCard === "seePost9"}
              />
            )}
          </div>
          <img src={coworkImg8} alt="cowork image" className="coworkImg8" />
        </div>

        <div className="seePostContainer">
          <img
            src={seePostIcon2}
            alt="see post icon"
            className="seePostIcon2"
            onClick={() => handleButterflyClick("seePost10")}
          />
          {activeCard === "seePost10" && (
            <UICard
              title="Why intersectionalism is the key for businesses"
              description="If you don't understand intersectionalsim, all the work in diversity and inclusion gets lost, says Ritia Isiba, managing director of ZARA. Watch this video to find out why and what intersectionalism is all about."
              onClose={closeCard}
              buttonText="watch now"
              imageSrc={coCreatorsCardImg10}
              isVisible={activeCard === "seePost10"}
            />
          )}
        </div>

        <div className="coworkTenthContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon1}
              alt="see post icon"
              className="seePostIcon1"
              onClick={() => handleButterflyClick("seePost11")}
            />
            {activeCard === "seePost11" && (
              <UICard
                title="The power of unlearning"
                description="You have probably noticed that pretty much everything here is about unlearning - but what is unlearning actually all about? Let us introduce you to the stages and history of unlearning that create its unique power. (including literature recommendations)"
                onClose={closeCard}
                buttonText="find out more"
                imageSrc={coCreatorsCardImg11}
                isVisible={activeCard === "seePost11"}
              />
            )}
          </div>
          <img src={coworkImg9} alt="cowork image" className="coworkImg9" />
        </div>

        <div className="boxContainer">
          <img src={boxImg} alt="box image" className="boxImage" />
        </div>

        <div className="noteContainer note5">
          <img src={coCreatorsNote5} alt="note" />
        </div>

        <div className="coworkEleventhContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon6}
              alt="see post icon"
              className="seePostIcon6"
              onClick={() => handleButterflyClick("seePost12")}
            />
            {activeCard === "seePost12" && (
              <UICard
                title="Regenerar"
                description="This movie recommedation comes from our heart: Regenerar is a documentary that challenges conventional perspectives on change and regeneration - and inspires positive change in our personal and professional lives."
                onClose={closeCard}
                buttonText="find out more"
                imageSrc={coCreatorsCardImg12}
                isVisible={activeCard === "seePost12"}
              />
            )}
          </div>
          <img src={coworkImg10} alt="cowork image" className="coworkImg10" />
        </div>
      </div>

      <div className="coCreatorsSectionFour slide">
        <div className="coworkTwelthContainer">
          <img src={coworkImg11} alt="cowork image" className="coworkImg11" />
        </div>

        <div className="coworkThirteenContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon4}
              alt="see post icon"
              className="seePostIcon4"
              onClick={() => handleButterflyClick("seePost13")}
            />
            {activeCard === "seePost13" && (
              <UICard
                title="Why aren't legal changes alone enough to ensure equality for the LGBTIQ+ community?"
                description="Despite legal advancements for the LGBTIQ+ community, cultural challenges persist. Mildred Perez De La Torre explain why rights on paper don’t always translate to acceptance in daily life."
                onClose={closeCard}
                buttonText="watch now"
                imageSrc={coCreatorsCardImg13}
                isVisible={activeCard === "seePost13"}
              />
            )}
          </div>
          <img src={coworkImg12} alt="cowork image" className="coworkImg12" />
        </div>

        <div className="coworkFourteenContainer">
          <div className="seePostContainer">
            <img
              src={seePostIcon7}
              alt="see post icon"
              className="seePostIcon7"
              onClick={() => handleButterflyClick("seePost14")}
            />
            {activeCard === "seePost14" && (
              <UICard
                title="Why aren't legal changes alone enough to ensure equality for the LGBTIQ+ community?"
                description="Despite legal advancements for the LGBTIQ+ community, cultural challenges persist. Mildred Perez De La Torre explain why rights on paper don’t always translate to acceptance in daily life."
                onClose={closeCard}
                buttonText="watch now"
                imageSrc={coCreatorsCardImg13}
                isVisible={activeCard === "seePost14"}
              />
            )}
          </div>
          <img src={coworkImg13} alt="cowork image" className="coworkImg13" />
        </div>
      </div>

      <div className="coCreatorsSectionFive slide">
        <div className="coworkFifteenContainer">
          <img src={coworkImg14} alt="cowork image" className="coworkImg14" />
        </div>

        <div className="noteContainer note6">
          <img src={coCreatorsNote6} alt="note" />
        </div>

        <div className="coworkSixteenContainer">
          <img src={coworkImg15} alt="cowork image" className="coworkImg15" />
        </div>
      </div>
    </div>
  );
};

export default CoCreatorsPage;
