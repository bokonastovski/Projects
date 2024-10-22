import React from "react";
import CoursesListLeft from "./CoursesListLeft";
import CoursesListRight from "./CoursesListRight";

const CoursesList = () => {
  return (
    <section className="courses-list">
      <CoursesListLeft />
      <CoursesListRight />
    </section>
  );
};

export default CoursesList;
