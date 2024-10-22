import React from "react";

const HomepageMiddle = () => {
  return (
    <section className="homepage-middle">
      <div className="part-75">
        <div className="top">
          <div className="purple-box"></div>
          <div className="orange-box">
            <p className="number">1.</p>
            <div className="content">
              <h2>Научи да раководиш со своите финансии</h2>
              <p>Освој ги техниките за управување со твоите лични финансии</p>
            </div>
          </div>
          <div className="white-box">
            <p className="number">2.</p>
            <div className="content">
              <h2>Започни да го планираш својот бизнис</h2>
              <p>
                Учи од најдобрите и добиј практични вештини за поставување на
                твојот стартап.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="white-box">
            <p className="number">3.</p>
            <div className="content">
              <h2>Освој го светот !</h2>
              <p>
                Со сето знаење што ќе го стекнеш и сите сертификати кои ќе ги
                добиеш бесплатно, че бидеш подготвен/а да го освоиш светот!
              </p>
            </div>
            <img className="scratch" src="/images/scratch-4.png" alt="" />
          </div>
          <div className="green-box">
            <p>&#8595;</p>
          </div>
        </div>
      </div>
      <div className="part-25">
        <img
          className="girl-piggybank"
          src="/images/girl_piggybank.png"
          alt=""
        />
        <img className="scratch" src="/images/scratch-3.png" alt="" />
      </div>
    </section>
  );
};

export default HomepageMiddle;
