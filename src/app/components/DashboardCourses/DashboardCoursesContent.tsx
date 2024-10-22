import React from "react";
import DashboardCourseOverview from "./DashboardCourseOverview";
import DashboardCoursesStepper from "./DashboardCoursesStepper";
import DashboardCoursesCards from "./DashboardCoursesCards";
import DashboardCoursesCards2 from "./DashboardCoursesCards2";
import DashboardCoursesCards3 from "./DashboardCoursesCards3";
import DashboardCoursesFilters from "./DashboardCoursesFilters";

const DashboardCoursesContent: React.FC = () => {
  return (
    <div className="dashboardContent">
      <DashboardCourseOverview />
      <DashboardCoursesStepper />
      <DashboardCoursesCards />
      <DashboardCoursesFilters />
      <DashboardCoursesCards2 />
      <DashboardCoursesCards3 />
    </div>
  );
};

export default DashboardCoursesContent;
