import React from "react";
import DashboardSidebar from "@/app/components/Dashboard/DashboardSidebar";
import DashboardNavbar from "@/app/components/Navbar/DashboardNavbar";
import DashboardExistingTomi from "@/app/components/DashboardExisting/DashboardExistingTomi";
import DashboardGreyRectangles from "@/app/components/Dashboard/DashboardGreyRectangles";
import DashboardCoursesStepper from "@/app/components/DashboardCourses/DashboardCoursesStepper";
import DashboardCoursesCards from "@/app/components/DashboardCourses/DashboardCoursesCards";
import DashboardExistingLastCards from "@/app/components/DashboardExisting/DashboardExistingLastCards";

const DashboardExisting: React.FC = () => {
  return (
    <section className="dashboard-page">
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="dashboardContent">
        <DashboardExistingTomi />
        <DashboardCoursesStepper />
        <DashboardGreyRectangles />
        <DashboardExistingLastCards />
        <DashboardCoursesCards />
      </div>
    </section>
  );
};

export default DashboardExisting;
