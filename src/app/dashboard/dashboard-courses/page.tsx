import React from "react";
import DashboardSidebar from "@/app/components/Dashboard/DashboardSidebar";
import DashboardCoursesContent from "@/app/components/DashboardCourses/DashboardCoursesContent";
import DashboardNavbar from "@/app/components/Navbar/DashboardNavbar";

const DashboardCoursesPage: React.FC = () => {
  return (
    <section className="dashboard-page">
      <DashboardNavbar />
      <DashboardSidebar />
      <DashboardCoursesContent />
    </section>
  );
};

export default DashboardCoursesPage;
