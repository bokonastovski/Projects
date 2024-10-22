"use client";

import Image from "next/image";
import React from "react";
import OrangeSlider from "./OrangeSlider";

const DashboardExistingTomi: React.FC = () => {
  return (
    <div className="dashboard-content-rectangle">
      <div className="dashboard-tomi">
        <div className="dashboard-tomi-text">
          <h1 className="small-tomi">Добредојде назад, Томи Андреев!</h1>
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
      <h2 className="dashboard-tomi-recommendation">
        Продолжи каде што застана:
      </h2>
      <div className="tomi-slider">
        <div className="tomi-slider-title-container">
          <div className="tomi-slider-title">
            <Image
              src="/icons/greyCheckmark.svg"
              alt="scratch"
              width={28}
              height={28}
              priority
            />
            <p>Лична Финансиска Гимнастика</p>
          </div>
          <div className="tomi-slider-title-text">
            Научи ги основите на управувањето со пари – буџетирање, штедење и
            трошење, така што ќе си ја подобриш финансиската кондиција.
          </div>
        </div>
        <OrangeSlider />
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

export default DashboardExistingTomi;
