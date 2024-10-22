"use client";

import { Course } from "@/app/types";
import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useRouter } from "next/navigation";

interface Props {
  data: Course;
  courseIds: number[];
}

const CoursesPageList = ({ data, courseIds }: Props) => {
  const router = useRouter();
  const currentIndex = courseIds.indexOf(data.id);

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < courseIds.length) {
      router.push(`/course-overview/${courseIds[nextIndex]}`);
    }
  };

  const steps = [
    "Сите ние сме експерти",
    "Митови за буџетот",
    "Евиденција на приходи и расходи",
    "Процена на финансиската состојба",
  ];

  const partThreeList = Array.isArray(data.partthree_ul)
    ? data.partthree_ul
    : [];

  return (
    <section className="course-page-list">
      <div className="section">
        <div className="left-side">
          <audio controls>
            <source src="/Audio1.mp3" />
          </audio>
          <div className="part1">
            <div className="text">
              <h1>{data.title}</h1>
              <p>{data.parag_one}</p>
            </div>
            <div className="image">
              <img src={data.partone_img} alt="" />
            </div>
          </div>
          <div className="partorange">
            <p>{data.partorange}</p>
          </div>
          <div className="part2">
            <h1>{data.parttwo_hone}</h1>
            <p>{data.parttwo_p}</p>
          </div>
          <div className="part3">
            <h1>{data.title}</h1>
            <ul>
              {partThreeList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="part4">
            <img src={data.partfour_img} alt="" />
          </div>
          <div className="part5">
            <p>{data.partfive_pone}</p>
            <p>{data.partfive_ptwo}</p>
          </div>
        </div>
        <div className="right-side">
          <div className="sodrzina">
            <img src="/icons/bagMoney.svg" alt="" />
            {/* STEPPER */}
            <div style={{ width: "100%", padding: "20px" }}>
              <Stepper orientation="vertical" activeStep={0}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
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
      </div>
      {/* Conditionally render the button if not the last course */}
      {currentIndex < courseIds.length - 1 && (
        <div className="btn-wrapper">
          <button className="nextBtn" onClick={handleNext}>
            Следна Лекција
          </button>
        </div>
      )}
    </section>
  );
};

export default CoursesPageList;
