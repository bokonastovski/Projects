"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const DashboardNavbar: React.FC = () => {
  const [profileName, setProfileName] = useState<string | null>(null);

  useEffect(() => {
    
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setProfileName(userData.name); 
    }
  }, []);

  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar-searchbar">
        <Image
          src="/icons/search.svg"
          alt="Search Icon"
          width={24}
          height={24}
          className="dashboard-navbar-search"
        />
        <input
          type="text"
          placeholder="Пребарај содржина"
          className="search-input"
        />
      </div>
      <div className="dashboard-navbar-profile">
        <div className="dashboard-navbar-notification">
          <Image
            src="/icons/notification.svg"
            alt="Notification Icon"
            width={24}
            height={24}
          />
        </div>
        <div className="profile-img">
          <Image
            src="/images/tomi-andreev.png"
            alt="Томи Андреев"
            width={40}
            height={40}
          />
        </div>
        <div className="profile-info">
          <p className="profile-name">{profileName || "Томи Андреев"}</p>{" "}
          {/* Default to "Гостин" if profileName is null */}
          <p className="profile-title">Финансиски пионер</p>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
