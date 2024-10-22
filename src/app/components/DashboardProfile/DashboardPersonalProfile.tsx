"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const DashboardPersonalProfile: React.FC = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    city: "",
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className="dashboard-content-rectangle dashboard-personal-profile">
      <div className="dashboard-full-profile">
        <div className="dashboard-profile-info">
          <Image
            src="/images/dashboard-profile-img.png"
            alt="scratch"
            width={80}
            height={80}
            priority
          />
          <div className="dashboard-profile-info-text">
            <h3>{userData.name || "Томи Андреев"}</h3>
            <p>{userData.email || "email@emailaddress.com"}</p>
            <p>{userData.city || "Скопје"}</p>
          </div>
        </div>
        <button>Промени</button>
      </div>
    </div>
  );
};

export default DashboardPersonalProfile;
