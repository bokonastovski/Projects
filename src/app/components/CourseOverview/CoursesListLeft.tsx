"use client";
import { Course } from "@/app/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CoursesListLeft = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="courses-list-left">
      {courses.map((course) => (
        <Link
          href={`/course-overview/${course.id}`}
          key={course.id}
          className="one-course"
        >
          <img src="/icons/money.svg" alt="" />
          <div className="content-course">
            <h1>{course.title}</h1>
            <p className="first-p">{course.parag_one}</p>
            <p className="second-p">
              {course.parag_two_solid}
              <span>{course.parag_three_bold}</span>
            </p>
            <p className="third-p">Што ќе научите:</p>
            <ul>
              {course.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="fourth-p">
              <span>{course.parag_four_bold}</span> {course.parag_four_solid}
            </p>
          </div>
          <img src="/icons/tick.svg" alt="" />
        </Link>
      ))}
      <div className="moduls">
        <h1>За модулот “Научи за себе”</h1>
        <p>
          Модулот „Научи за себе“ е дизајниран да ти помогне да стекнеш основни
          знаења за финансиска писменост и да развиеш вештини за успешно
          управување со твоите лични финансии.
        </p>
        <h1>За курсот “Лична Финансиска Гимнастика”</h1>
        <p>
          Ќе научиш како да управуваш со своите лични финансии, од штедење и
          буџетирање до поставување финансиски цели. Овој курс е совршен за
          секој што сака да ја подобри својата финансиска состојба на лесен и
          разбирлив начин.
        </p>
      </div>
    </div>
  );
};

export default CoursesListLeft;
