"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RegisterStepSix = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  console.log("userData being sent:", userData);

  const handleClick = async () => {
    if (!userData) {
      console.error("No user data found. Please start registration again.");
      return;
    }

    setLoading(true);

    try {
      // Commented out the API call
      /*
      const response = await fetch(
        "https://090e-31-11-83-108.ngrok-free.app/register",
        {
          method: "POST",
          headers: {
            "ngrok-skip-browser-warning": true,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Response error data:", data);
        throw new Error(data.message || `Error: ${response.status}`);
      }
      */

      // Simulating a successful registration for now
      localStorage.setItem("isLoggedIn", "true");
      setSuccess(true);
      console.log("Registration successful!");

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="register-step-six">
        <img src="/icons/logo.svg" alt="Logo" />
      </section>
      <div className="content-six">
        <h1>Сега е време да го освоиш светот!</h1>
        <button onClick={handleClick} disabled={loading}>
          {loading ? "Се обработува..." : "Продолжи кон твојот профил"}
        </button>
        {success && <p className="success-message">Успешно се регистрира!</p>}
      </div>
      <img
        className="scratch-register"
        src="/images/scratch-7.png"
        alt="Scratch"
      />
      <div className="arrows-register">
        <img src="/images/arrows-one.png" alt="Arrow 1" />
        <img src="/images/arrows-two.png" alt="Arrow 2" />
        <img src="/images/arrows-five.png" alt="Arrow 5" />
        <img src="/images/arrows-six.png" alt="Arrow 6" />
        <img src="/images/arrows-five.png" alt="Arrow 5 duplicate" />
        <img src="/images/arrows-six.png" alt="Arrow 6 duplicate" />
      </div>
    </>
  );
};

export default RegisterStepSix;
