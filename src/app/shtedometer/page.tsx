import React from "react";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import ShtedomerOverview from "../components/Shtedomer/ShtedomerOverview";
import Calculations from "../components/Shtedomer/Calculations";

const Shtedometer = () => {
  return (
    <section className="dashboard-page">
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="dashboardContent">
        <ShtedomerOverview />
        <Calculations />
      </div>
    </section>
  );
};

export default Shtedometer;
