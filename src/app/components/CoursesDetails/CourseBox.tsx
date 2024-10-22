import React, { useState } from "react";
import { CourseType } from "@/app/types";

interface CourseBoxProps {
  course: CourseType;
  color: string;
}

const CourseBox = ({ course, color }: CourseBoxProps) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      {/* Main course box */}
      <div
        className={`course-box ${
          color === "Green" ? "green-border-color" : "pink-border-color"
        }`}
      >
        <h3 className={color === "Green" ? "green-color" : "pink-color"}>
          {course.title}
        </h3>
        <p className="desc">{course.description}</p>
        <div className="icon-text">
          <img src={`/icons/book${color}.svg`} alt="" />
          <p>Вкупно лекции: {course.lectures}</p>
        </div>
        <div className="icon-text">
          <img src={`/icons/clock${color}.svg`} alt="" />
          <p>Просечно време на читање: {course.duration}</p>
        </div>
        <button
          className={`btn ${
            color === "Green" ? "green-bg-color" : "pink-bg-color"
          }`}
          onClick={togglePopup}
        >
          Брз преглед &#8594;
        </button>
      </div>
    </div>
  );
};

export default CourseBox;
