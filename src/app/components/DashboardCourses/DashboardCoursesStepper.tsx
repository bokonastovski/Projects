"use client";
import Image from "next/image";
import React from "react";
import StepperComponent from "./DashboardStepper";

const DashboardCoursesStepper: React.FC = () => {
  return (
    <div className="dashboard-content-rectangle dashboard-courses-stepper">
      <h4 className="dashboard-stepper-title">Вкупен напредок на курсевите</h4>
      <p className="dashboard-stepper-text">
        Започни да учиш и напредувај кон "Финансиски Пионер"! Твојот пат до
        успехот започнува тука!
      </p>
      <StepperComponent />
    </div>
  );
};

export default DashboardCoursesStepper;
