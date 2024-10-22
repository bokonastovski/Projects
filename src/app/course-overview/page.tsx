import React from "react";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import CoursesList from "../components/CourseOverview/CoursesList";
import CourseOverviewCards from "../components/CourseOverview/CourseOverviewCards";
import CourseOverview from "../components/CourseOverview/CourseOverview";

const CoursePage = () => {
  return (
    <section className="dashboard-page">
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="dashboardContent">
        <CourseOverview />
        <CoursesList />
        <CourseOverviewCards />
      </div>
    </section>
  );
};

export default CoursePage;
