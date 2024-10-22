import React from "react";
import Image from "next/image";
import Link from "next/link";

const DashboardCoursesCards3 = () => {
  return (
    <div className="dashboard-content-rectangle dashboard-courses-cards">
      <h3 className="dashboard-courses-cards-title">
        Повеќе од „Научи за својот бизнис.“
      </h3>
      <div className="dashboard-cards">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div className="dashboard-card" key={index}>
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
                        alt="book"
                        width={24}
                        height={24}
                        priority
                      />
                      <span>Просечно време на читање: 3ч35мин</span>
                    </div>
                  </div>
                </div>
                <div className="dashboard-card-buttons">
                  <button className="dashboard-card-btn-left btn-pink-left-courses dashboard-courses-cards-pink">
                    Брз преглед
                  </button>
                  <Link href="/course-overview">
                    <button className="dashboard-card-btn-right dashboard-courses-cards-pink">
                      Започни сега
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="dashboard-cards">
        <div className="dashboard-card margin-left-5">
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
                    alt="book"
                    width={24}
                    height={24}
                    priority
                  />
                  <span>Просечно време на читање: 3ч35мин</span>
                </div>
              </div>
            </div>
            <div className="dashboard-card-buttons">
              <button className="dashboard-card-btn-left btn-pink-left-courses dashboard-courses-cards-pink">
                Брз преглед
              </button>
              <Link href="/course-overview">
                <button className="dashboard-card-btn-right dashboard-courses-cards-pink">
                  Започни сега
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="dashboard-card bg-none"></div>
        <div className="dashboard-card bg-none"></div>
      </div>
    </div>
  );
};

export default DashboardCoursesCards3;
