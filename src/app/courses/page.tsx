import CourseOrange from "../components/CoursesDetails/CourseOrange";
import CoursesFirstPart from "../components/CoursesDetails/CoursesFirstPart";
import CoursesReview from "../components/CoursesDetails/CoursesReview";
import CoursesSecondPart from "../components/CoursesDetails/CoursesSecondPart";
import { CourseType } from "../types";
import React from "react";

const CoursesDetails = async () => {
  const res = await fetch("http://localhost:5001/courses-guests", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses data");
  }

  const coursesData: CourseType[] = await res.json();

  return (
    <section>
      <CoursesFirstPart />
      <CoursesReview data={coursesData} color="Green" />
      <CoursesSecondPart />
      <CoursesReview data={coursesData} color="Pink" />
      <CourseOrange />
    </section>
  );
};

export default CoursesDetails;
