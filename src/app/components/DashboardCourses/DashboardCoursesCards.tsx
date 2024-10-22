"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DashboardCoursesCards = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="dashboard-wrapper">
      <div
        className={`dashboard-content-rectangle dashboard-courses-cards ${
          isPopupOpen ? "content-blurred" : ""
        }`}
      >
        <h3 className="dashboard-courses-cards-title">Твоите курсеви.</h3>
        <div className="dashboard-cards">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div className="dashboard-card dashboard-card-2" key={index}>
                <div className="dashboard-card-content">
                  <div className="dashboard-card-title">
                    <Image
                      src="/icons/checkmark.svg"
                      alt="checkmark"
                      width={28}
                      height={28}
                      priority
                    />
                    <h3>Лична Финансиска Гимнастика</h3>
                  </div>
                  <div className="progress-bar-container">
                    <span className="progress-percentage">35%</span>
                    <div className="progress-bar">
                      <div
                        className={`progress-bar-fill ${
                          index === 1 ? "progress-bar-pink" : ""
                        }`}
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="dashboard-card-text-and-icons">
                    <div className="dashboard-card-icons">
                      <div className="dashboard-card-icon-2">
                        <div className="dashboard-card-icon">
                          <Image
                            src="/icons/bookOrange.svg"
                            alt="book"
                            width={24}
                            height={24}
                            priority
                          />
                          <span>Вкупно лекции: 6</span>
                        </div>
                        <div className="dashboard-card-icon">
                          <Image
                            src="/icons/bookBlue.svg"
                            alt="book"
                            width={24}
                            height={24}
                            priority
                          />
                          <span>Преостанати лекции: 0</span>
                        </div>
                      </div>
                      <div className="dashboard-card-icon dashboard-card-icon-2">
                        <Image
                          src="/icons/clockGreen.svg"
                          alt="clock"
                          width={24}
                          height={24}
                          priority
                        />
                        <span>Просечно време на читање: 3ч35мин</span>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-card-buttons">
                    <button
                      className={`dashboard-card-btn-left ${
                        index === 1 ? "dashboard-card-btn-pink-border" : ""
                      }`}
                      onClick={togglePopup}
                    >
                      Брз преглед
                    </button>
                    <Link href="/course-overview">
                      <button
                        className={`dashboard-card-btn-right ${
                          index === 1 ? "dashboard-card-btn-pink-bg" : ""
                        }`}
                      >
                        Започни сега
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="dashboard-courses-pop">
            <button className="close-button" onClick={togglePopup}>
              <Image
                src="/icons/blackClose.svg"
                alt="close"
                width={24}
                height={24}
                priority
              />
            </button>
            <div className="courses-pop-blue">
              <div className="pop-blue-text">
                <h2>Лична Финансиска Гимнастика</h2>
                <p>
                  Научи ги основите на управувањето со пари – буџетирање,
                  штедење и трошење, така што ќе си ја подобриш финансиската
                  кондиција.
                </p>
              </div>
              <img src="/images/pop-up-blue-bg.png" alt="" />
            </div>
            <div className="courses-pop-details">
              <div className="courses-pop-btn">За курсот</div>
              <div className="courses-pop-white-details">
                <h3>
                  Во овој курс ќе ги истражите основните концепти на
                  управувањето со личните финанси, вклучувајќи:
                </h3>
                <p className="courses-pop-time">
                  <span className="pop-c-bold">Време на читање: </span>Приближно
                  4 часа <br />
                  <span className="pop-c-bold">Вкупно лекции: </span>8 лекции
                </p>

                <div className="courses-pop-table">
                  <div className="courses-pop-row">
                    <div className="courses-pop-row-num">1</div>
                    <p>Вовед во финансиската едукација</p>
                  </div>
                  <div className="courses-pop-row">
                    <div className="courses-pop-row-num">2</div>
                    <p>Базични принципи на буџетирање</p>
                  </div>
                  <div className="courses-pop-row">
                    <div className="courses-pop-row-num">3</div>
                    <p>Стратегии за штедење</p>
                  </div>
                  <div className="courses-pop-row">
                    <div className="courses-pop-row-num">4</div>
                    <p>Паметно трошење</p>
                  </div>
                  <div className="courses-pop-row">
                    <div className="courses-pop-row-num">5</div>
                    <p>Поставување финансиски цели</p>
                  </div>
                  <div className="courses-pop-row">
                    <div className="courses-pop-row-num">6</div>
                    <p>Управување со долгови</p>
                  </div>
                  <div className="courses-pop-row">
                    <div className="courses-pop-row-num">7</div>
                    <p>Финансиски инструменти и ресурси</p>
                  </div>
                  <div className="courses-pop-row">
                    <div className="courses-pop-row-num">8</div>
                    <p>Заклучок и следни чекори</p>
                  </div>
                </div>

                <button className="courses-pop-final-btn">Започни курс</button>
              </div>
            </div>
            <div className="courses-pop-huge-text">
              <Image
                src="/icons/clockBlue.svg"
                alt="book"
                width={20}
                height={20}
                priority
              />
              <p>
                По завршувањето на секој курс, добивате сертификат за вашето
                знаење и постигнувања, кој можете да го преземете во PDF формат
                и споделите на социјалните мрежи. Ако точно одговорите на 7, 8
                или 9 од 10 прашања, добивате стандарден сертификат. За 10/10
                точни одговори, добивате сертификат со посебна ознака. Со
                завршувањето на одреден број курсеви, освојувате беџови, кои го
                покажуваат вашиот напредок и посветеност во учењето.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardCoursesCards;
