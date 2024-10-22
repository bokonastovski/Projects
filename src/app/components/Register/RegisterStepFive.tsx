"use client";
import React, { useState, useEffect } from "react";

const RegisterStepFive = ({ onContinue }: { onContinue: () => void }) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (userData.learningTime) {
      setSelectedTime(userData.learningTime);
    }
  }, []);

  const handleRadioChange = (time: string) => {
    setSelectedTime(time);
    setError("");
  };

  const handleContinue = () => {
    if (!selectedTime) {
      setError("Те молам, избери време за учење.");
      return;
    }
    onContinue();
  };

  return (
    <>
      <section className="register-step-five">
        <img src="/icons/logo.svg" alt="" />
        <div className="steps">
          <div className="step active"></div>
          <div className="step active"></div>
          <div className="step active"></div>
          <div className="step active"></div>
        </div>
        <h1>И последно, кoлку време планираш да посветиш на учење?</h1>
        <div className="radio-inputs">
          {["10-20 минути", "45 минути", "30 минути", "1 час"].map((time) => (
            <div className="radioinput" key={time}>
              <input
                type="radio"
                id={time}
                name="learningTime"
                value={time}
                checked={selectedTime === time}
                onChange={() => handleRadioChange(time)}
              />
              <label htmlFor={time}>{time}</label>
            </div>
          ))}
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleContinue}>Најави се</button>{" "}
      </section>
      <img className="scratch-register" src="/images/scratch-7.png" alt="" />
      <div className="arrows-register">
        <img src="/images/arrows-one.png" alt="" />
        <img src="/images/arrows-two.png" alt="" />
        <img src="/images/arrows-five.png" alt="" />
        <img src="/images/arrows-six.png" alt="" />
        <img src="/images/arrows-five.png" alt="" />
        <img src="/images/arrows-six.png" alt="" />
      </div>
    </>
  );
};

export default RegisterStepFive;
