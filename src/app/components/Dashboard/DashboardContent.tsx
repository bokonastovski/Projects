import React from "react";
import DashboardTomi from "./DashboardTomi";
import DashboardGreyRectangles from "./DashboardGreyRectangles";
import DashboardLastCards from "./DashboardLastCards";

const DashboardContent: React.FC = () => {
  return (
    <div className="dashboardContent">
      <DashboardTomi />
      <DashboardGreyRectangles />
      <DashboardLastCards />
    </div>
  );
};

export default DashboardContent;
