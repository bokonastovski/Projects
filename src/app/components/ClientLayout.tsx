"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { isLoggedIn } from "../utils/auth";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const loggedIn = isLoggedIn();

  const protectedRoutes = [
    "/dashboard",
    "/dashboard/dashboard-courses",
    "/dashboard-existing",
    "/dashboard-profile",
    "/course-overview",
    "/shtedometer",
    "/test",
  ];

  useEffect(() => {
    if (
      !loggedIn &&
      protectedRoutes.some((route) => pathname.startsWith(route))
    ) {
      router.push("/");
    }
  }, [loggedIn, pathname, router]);

  const isDashboardPage = pathname === "/dashboard";
  const isDashboardCoursePage = pathname === "/dashboard/dashboard-courses";
  const isDashboardExisting = pathname === "/dashboard/dashboard-existing";
  const isDashboardProfile = pathname === "/dashboard/dashboard-profile";
  const isRegisterPage = pathname === "/register";
  const isSignInPage = pathname === "/signin";
  const isTestPage = pathname === "/test";
  const isShtedometerPage = pathname === "/shtedometer";
  const isCourseOverview = pathname.startsWith("/course-overview");

  return (
    <>
      {!isDashboardPage &&
        !isDashboardCoursePage &&
        !isDashboardExisting &&
        !isDashboardProfile &&
        !isRegisterPage &&
        !isSignInPage &&
        !isShtedometerPage &&
        !isCourseOverview &&
        !isTestPage && <Navbar />}
      <main>{children}</main>
      {!isRegisterPage && !isSignInPage && !isTestPage && <Footer />}
    </>
  );
};

export default ClientLayout;
