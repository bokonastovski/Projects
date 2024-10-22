import React from "react";
import Image from "next/image";
import Link from "next/link";

const CourseOverviewCards: React.FC = () => {
  return (
    <div className="dashboard-content-rectangle dashboard-courses-cards">
      <h3 className="dashboard-courses-cards-title">
        Повеќе од „Научи за себе.“
      </h3>
      <div className="dashboard-cards">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div className="dashboard-card dashboard-card-2" key={index}>
              <div className="dashboard-card-content">
                <div className="dashboard-card-title">
                  <Image
                    src={
                      index === 2
                        ? "/icons/checkmarkGreen.svg"
                        : "/icons/checkmark.svg"
                    }
                    alt="checkmark"
                    width={28}
                    height={28}
                    priority
                  />
                  <h3>Лична Финансиска Гимнастика</h3>
                </div>
                <div className="progress-bar-container">
                  <span className="progress-percentage">
                    {index === 2 ? "100%" : "35%"}
                  </span>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: index === 2 ? "100%" : "35%" }}
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
                  <button className="dashboard-card-btn-left">
                    Брз преглед
                  </button>
                  <Link href="/course-overview">
                    <button className="dashboard-card-btn-right">
                      {index === 2 ? "Повтори курс" : "Продолжи курс"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      <h3
        className="dashboard-courses-cards-title"
        style={{ marginTop: "16px" }}
      >
        Повеќе од „Научи за својот бизнис.“
      </h3>
      <div className="dashboard-cards">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div className="dashboard-card dashboard-card-2" key={index}>
              <div className="dashboard-card-content">
                <div className="dashboard-card-title">
                  <Image
                    src={
                      index === 2
                        ? "/icons/checkmarkPink.svg"
                        : "/icons/checkmark.svg"
                    }
                    alt="checkmark"
                    width={28}
                    height={28}
                    priority
                  />
                  <h3>Лична Финансиска Гимнастика</h3>
                </div>
                <div className="progress-bar-container">
                  <span className="progress-percentage">
                    {index === 2 ? "100%" : "35%"}
                  </span>
                  <div className="progress-bar">
                    <div
                      className={`progress-bar-fill progress-bar-pink`}
                      style={{ width: index === 2 ? "100%" : "35%" }}
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
                    className={`dashboard-card-btn-left dashboard-card-btn-pink-border`}
                  >
                    Брз преглед
                  </button>
                  <Link href="/course-overview">
                    <button
                      className={`dashboard-card-btn-right dashboard-card-btn-pink-bg`}
                    >
                      {index === 2 ? "Повтори курс" : "Продолжи курс"}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CourseOverviewCards;
