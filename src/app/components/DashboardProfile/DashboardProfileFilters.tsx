"use client";
import React, { useState } from "react";

const DashboardProfileFilters: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Тековни курсеви");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="dashboard-profile-filters">
      <div
        className={`dashboard-filter-profile ${
          activeFilter === "Тековни курсеви" ? "active" : ""
        }`}
        onClick={() => handleFilterClick("Тековни курсеви")}
      >
        <p>Тековни курсеви</p>
      </div>
      <div
        className={`dashboard-filter-profile ${
          activeFilter === "Омилени курсеви" ? "active" : ""
        }`}
        onClick={() => handleFilterClick("Омилени курсеви")}
      >
        <p>Омилени курсеви</p>
      </div>
      <div
        className={`dashboard-filter-profile ${
          activeFilter === "Завршени курсеви" ? "active" : ""
        }`}
        onClick={() => handleFilterClick("Завршени курсеви")}
      >
        <p>Завршени курсеви</p>
      </div>
    </div>
  );
};

export default DashboardProfileFilters;
