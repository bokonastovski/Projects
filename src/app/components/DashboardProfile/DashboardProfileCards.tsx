import Image from "next/image";
import React from "react";

const DashboardProfileCards: React.FC = () => {
  return (
    <div className="dashboard-content-rectangle">
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
                  >
                    Брз преглед
                  </button>
                  <button
                    className={`dashboard-card-btn-right ${
                      index === 1 ? "dashboard-card-btn-pink-bg" : ""
                    }`}
                  >
                    Повтори курс
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardProfileCards;
