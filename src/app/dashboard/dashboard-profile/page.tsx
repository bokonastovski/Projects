import React from "react";
import DashboardSidebar from "@/app/components/Dashboard/DashboardSidebar";
import DashboardNavbar from "@/app/components/Navbar/DashboardNavbar";
import DashboardProfileHero from "@/app/components/DashboardProfile/DashboardProfileHero";
import DashboardPersonalProfile from "@/app/components/DashboardProfile/DashboardPersonalProfile";
import DashboardProfileCards from "@/app/components/DashboardProfile/DashboardProfileCards";
import DashboardProfileFilters from "@/app/components/DashboardProfile/DashboardProfileFilters";
import DashboardProfileCertificate from "@/app/components/DashboardProfile/DashboardProfileCertificate";
import DashboardProfileBadges from "@/app/components/DashboardProfile/DashboardProfileBadges";

const DashboardProfile: React.FC = () => {
  return (
    <section className="dashboard-page">
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="dashboardContent">
        <DashboardProfileHero />
        <DashboardPersonalProfile />
        <DashboardProfileFilters />
        <DashboardProfileCards />
        <DashboardProfileCertificate />
        <DashboardProfileBadges />
      </div>
    </section>
  );
};

export default DashboardProfile;
