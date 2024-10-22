"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardSidebar: React.FC = () => {
  const router = useRouter();
  const handleLogout = () => {
    fetch("https://090e-31-11-83-108.ngrok-free.app/logout", {
      method: "POST",
      headers: {
        "ngrok-skip-browser-warning": true,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.removeItem("isLoggedIn");
        router.push("/");
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
  };

  return (
    <div className="sidebar">
      <div className="logoContainerAndMenuItems">
        <Image
          src="/icons/logo.svg"
          alt="Vibe On Logo"
          width={62.343}
          height={80}
        />
        <div className="menuItems">
          <Link href="/dashboard" className="menuItem">
            <Image
              src="/icons/sidebarMainIcon.svg"
              alt="Dashboard Icon"
              width={20}
              height={20}
            />
            <div className="menuItemText">Главен панел</div>
          </Link>

          <Link href="/dashboard/dashboard-profile" className="menuItem">
            <Image
              src="/icons/sidebarProfile.svg"
              alt="Profile Icon"
              width={20}
              height={20}
            />
            <div className="menuItemText">Мој профил</div>
          </Link>

          <Link href="/dashboard/dashboard-courses" className="menuItem">
            <Image
              src="/icons/sidebarCourses.svg"
              alt="Courses Icon"
              width={20}
              height={20}
            />
            <div className="menuItemText">Курсеви</div>
          </Link>

          <Link href="/shtedometer" className="menuItem">
            <Image
              src="/icons/sidebarPig.svg"
              alt="Savings Icon"
              width={20}
              height={20}
            />
            <div className="menuItemText">Штедомер</div>
          </Link>
        </div>
      </div>

      <div className="menuItems">
        <Link href="/dashboard/feedback" className="menuItem ">
          <Image
            src="/icons/sidebarFeedback.svg"
            alt="Feedback Icon"
            width={20}
            height={20}
          />
          <div className="menuItemText">Фидбек</div>
        </Link>

        <button onClick={handleLogout} className="menuItem">
          <Image
            src="/icons/logout.svg"
            alt="Logout Icon"
            width={20}
            height={20}
          />
          <div className="menuItemText">Одјави се</div>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
