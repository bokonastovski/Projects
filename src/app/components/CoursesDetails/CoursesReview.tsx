"use client";

import React, { useState } from "react";
import { CourseType } from "@/app/types";
import CourseBox from "./CourseBox";

interface Props {
  data: CourseType[];
  color: string;
}

const CoursesReview = ({ data, color }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const coursesPerPage = 3;

  const startIndex = currentPage * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = data.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="courses-review">
      <div className="top">
        <h1 className={color === "Green" ? "green-color" : "pink-color"}>
          Преглед на курсеви
        </h1>
        <div className="icons">
          <img
            src={`/icons/leftArrow${color}.svg`}
            alt="Previous"
            onClick={handlePrevious}
            style={{ cursor: "pointer", opacity: currentPage === 0 ? 0.5 : 1 }}
          />
          <img
            src={`/icons/rightArrow${color}.svg`}
            alt="Next"
            onClick={handleNext}
            style={{
              cursor: "pointer",
              opacity: endIndex >= data.length ? 0.5 : 1,
            }}
          />
        </div>
      </div>
      <div className="bottom">
        {currentCourses.map((course) => (
          <CourseBox key={course.id} course={course} color={color} />
        ))}
      </div>
    </section>
  );
};

export default CoursesReview;
