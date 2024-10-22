"use client";
import React from "react";

interface RegisterStepOneProps {
  firstName: string;
  surname: string;
  email: string;
  error: string;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  handleSubmit: () => void;
}

const RegisterStepOne: React.FC<RegisterStepOneProps> = ({
  firstName,
  surname,
  email,
  error,
  setFirstName,
  setLastName,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <div className="register-content">
        <img className="logo" src="/icons/logo.svg" alt="" />
        <div className="steps">
          <div className="step active"></div>
          <div className="step"></div>
          <div className="step"></div>
          <div className="step"></div>
        </div>

        <h1>Учи денес, добивај утре!</h1>
        <p className="vibe">
          Продолжи да <span>вајбаш!</span>
        </p>

        <input
          type="text"
          placeholder="Име"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Презиме"
          value={surname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Маил Адреса"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button onClick={handleSubmit}>Продолжи</button>

        <p className="or">или</p>
        <div className="icons">
          <img src="/icons/google.svg" alt="" />
          <img src="/icons/facebook2.svg" alt="" />
        </div>
      </div>
      <img className="scratch-one-a" src="/images/scratch-4.png" alt="" />
      <img className="scratch-one-b" src="/images/scratch-4.png" alt="" />
    </>
  );
};

export default RegisterStepOne;
