import React from "react";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import DashboardContent from "../components/Dashboard/DashboardContent";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";

const DashboardPage: React.FC = () => {
  return (
    <section className="dashboard-page">
      <DashboardNavbar />
      <DashboardSidebar />
      <DashboardContent />
    </section>
  );
};

export default DashboardPage;
