import React from "react";

const CoursesListRight = () => {
  return (
    <div className="courses-list-right">
      <div className="about-course">
        <div className="top">
          <img src="/icons/info.svg" alt="" />
          <p>За курсот</p>
        </div>
        <div className="bottom">
          По завршувањето на секој курс, добивате сертификат за вашето знаење и
          постигнувања, кој можете да го преземете во PDF формат и споделите на
          социјалните мрежи. Ако точно одговорите на 7, 8 или 9 од 10 прашања,
          добивате стандарден сертификат. За 10/10 точни одговори, добивате
          сертификат со посебна ознака. Со завршувањето на одреден број курсеви,
          освојувате беџови, кои го покажуваат вашиот напредок и посветеност во
          учењето.
        </div>
      </div>
      <div className="key-skills">
        <h1>Клучни вештини</h1>
        <div className="btns-key">
          <button>БУЏЕТИРАЊЕ</button>
          <button>ШТЕДЕЊЕ</button>
          <button>ИНВЕСТИРАЊЕ</button>
          <button>ПЛАНИРАЊЕ НА ТРОШОЦИ</button>
          <button>ФИНАНСИСКИ ЦЕЛИ</button>
          <button>ДОЛГОВИ</button>
        </div>
      </div>
    </div>
  );
};

export default CoursesListRight;
