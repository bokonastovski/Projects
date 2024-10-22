"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DashboardTomi: React.FC = () => {
  const [profileName, setProfileName] = useState<string | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setProfileName(userData.name);
    }
  }, []);
  return (
    <div className="dashboard-content-rectangle">
      <div className="dashboard-tomi">
        <div className="dashboard-tomi-text">
          <h1>Добредојде {profileName}!</h1>
        </div>

        <div className="dashboard-tomi-picture">
          <div className="dashboard-tomi-picture-blue-container">
            <p className="blue-container-text">
              Твојата финансиска иднина започнува тука! За почеток, избравме
              курсеви според твоите интереси.
            </p>
          </div>
          <Image
            src="/images/tomi.png"
            alt="Tomi Character"
            width={209}
            height={273}
            priority
          />
        </div>
        <Image
          src="/images/scratch-6.png"
          alt="scratch"
          width={259.273}
          height={409.095}
          priority
          className="scratch-left"
        />
        <Image
          src="/images/scratch-7.png"
          alt="scratch"
          width={411.179}
          height={505.188}
          priority
          className="scratch-right"
        />
      </div>
      <h2 className="dashboard-tomi-recommendation">Препорачано за тебе:</h2>
      <div className="dashboard-cards">
        <div className="dashboard-card">
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
              <button className="dashboard-card-btn-left">Брз преглед</button>
              <Link href="/course-overview">
                <button className="dashboard-card-btn-right">
                  Започни сега
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="dashboard-card">
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
            <div className="dashboard-card-buttons">
              <button className="dashboard-card-btn-left">Брз преглед</button>
              <Link href="/course-overview">
                <button className="dashboard-card-btn-right">
                  Започни сега
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="dashboard-card">
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
            <div className="dashboard-card-buttons">
              <button className="dashboard-card-btn-left">Брз преглед</button>
              <Link href="/course-overview">
                <button className="dashboard-card-btn-right">
                  Започни сега
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-orange-btn">
        <button>Разгледај повеќе</button>
        <Image
          src="/icons/rightArrow.png"
          alt="book"
          width={23}
          height={14}
          priority
        />
      </div>
    </div>
  );
};

export default DashboardTomi;
