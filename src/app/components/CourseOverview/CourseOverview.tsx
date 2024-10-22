"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const CourseOverview = () => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };
  return (
    <div className="dashboard-content-rectangle">
      <div className="dashboard-tomi">
        <div className="dashboard-tomi-text dashboard-courses-main-title course-header">
          <h1>Лични финансии</h1>
          <p>
            Научи ги основите на управувањето со пари – буџетирање, штедење и
            трошење, така што ќе си ја подобриш финансиската кондиција.
          </p>
        </div>

        <div className="dashboard-tomi-picture">
          <img className="bigPic" src="/images/certificateBlur.png" alt="" />
          <img className="iconLock" src="/icons/lock.svg" alt="" />
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
      <div className="course-overview-bottom">
        <div className="text">
          <div className="stat">
            <img src="/icons/lectures.svg" alt="" />
            <p>Вкупно лекции : 6</p>
          </div>
          <div className="stat">
            <img src="/icons/book.svg" alt="" />
            <p>Преостанати лекции: 4</p>
          </div>
          <div className="stat">
            <img src="/icons/hat.svg" alt="" />
            <p>Просечно време на читање: 3ч35мин</p>
          </div>
        </div>
        <div className="slider-container-2">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
            className="custom-slider-2"
          />
        </div>
        <div className="buttons">
          <button className="empty-btn">Продолжи со учење</button>

          <Link href="/test">
            <button className="fillBtn">Реши го тестот</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
