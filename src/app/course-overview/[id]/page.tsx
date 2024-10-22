import React from "react";
import { Course } from "@/app/types";
import DashboardNavbar from "@/app/components/Navbar/DashboardNavbar";
import DashboardSidebar from "@/app/components/Dashboard/DashboardSidebar";
import CoursePageOverview from "@/app/components/CoursePage/CoursePageOverview";
import CoursesPageList from "@/app/components/CoursePage/CoursesPageList";

interface CoursePageProps {
  params: {
    id: string;
  };
}

const CoursePage = async ({ params }: CoursePageProps) => {
  const { id } = params;

  const res = await fetch(`http://localhost:5001/courses`);
  const courses: Course[] = await res.json();
  console.log("Fetched courses:", courses);

  const course = courses.find((course) => course.id === Number(id));

  const courseIds = courses.map((course) => course.id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <section className="dashboard-page">
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="dashboardContent">
        <CoursePageOverview data={course} />
        <CoursesPageList data={course} courseIds={courseIds} />{" "}
      </div>
    </section>
  );
};

export default CoursePage;
