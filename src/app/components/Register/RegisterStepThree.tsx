"use client";
import React, { useEffect, useState } from "react";

interface RegisterStepThreeProps {
  onContinue: () => void;
}

const RegisterStepThree: React.FC<RegisterStepThreeProps> = ({
  onContinue,
}) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUser = JSON.parse(storedUserData);
      setUser(parsedUser);
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <section className="register-step-three">
        <img className="logo" src="/icons/logo.svg" alt="" />
      </section>
      <div className="content-three">
        <h1>Добредојде, {user.firstName}!</h1>
        <p>Продолжи и избери финансиски теми за кои сакаш да дознаеш повеќе!</p>
        <button onClick={onContinue}>Продолжи</button>
      </div>

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

export default RegisterStepThree;
