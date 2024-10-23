"use client";
import React, { useEffect, useState } from "react";

interface RegisterStepTwoProps {
  gender: string;
  cityId: string;
  dob: string;
  phone: string;
  password: string;
  confirmPassword: string;
  setGender: (value: string) => void;
  setCityId: (value: string) => void;
  setDob: (value: string) => void;
  setPhone: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  handleSubmit: () => void;
  error: string;
}

const RegisterStepTwo: React.FC<RegisterStepTwoProps> = ({
  gender,
  cityId,
  dob,
  phone,
  password,
  confirmPassword,
  setGender,
  setCityId,
  setDob,
  setPhone,
  setPassword,
  setConfirmPassword,
  handleSubmit,
  error,
}) => {
  const [cities, setCities] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        // Commented out the API call
        /*
        const response = await fetch(
          "https://090e-31-11-83-108.ngrok-free.app/api/cities",
          {
            method: "GET",
            headers: {
              "ngrok-skip-browser-warning": true,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const citiesData = result.data;

        setCities(citiesData);
        */

        // Simulated cities data for demonstration purposes
        const simulatedCitiesData = [
          { id: 1, name: "Скопје" },
          { id: 2, name: "Битола" },
          { id: 3, name: "Тетово" },
          { id: 4, name: "Охрид" },
        ];
        setCities(simulatedCitiesData);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <>
      <div className="register-step-two">
        <img className="logo" src="/icons/logo.svg" alt="" />
        <div className="steps">
          <div className="step active"></div>
          <div className="step active"></div>
          <div className="step"></div>
          <div className="step"></div>
        </div>

        <h1>Ти остана уште малку!</h1>
        <p className="vibe">
          Продолжи да <span>вајбаш!</span>
        </p>

        {loading ? ( // Use loading state to show loading message
          <p>Loading cities...</p>
        ) : (
          <>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Пол</option>
              <option value="man">Машко</option>
              <option value="woman">Женско</option>
            </select>

            <select
              name="city"
              value={cityId}
              onChange={(e) => setCityId(e.target.value)}
            >
              <option value="">Град</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id.toString()}>
                  {city.name}
                </option>
              ))}
            </select>

            <input
              type="date"
              placeholder="Дата на раѓање"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <input
              type="number"
              placeholder="Телефонски број"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Лозинка"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Повтори Лозинка"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="radio-div">
              <input className="radio" type="checkbox" id="accept-terms" />
              <label htmlFor="accept-terms">
                Согласувам со условите и условите за приватност.
              </label>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleSubmit}>Заврши</button>
          </>
        )}
      </div>
    </>
  );
};

export default RegisterStepTwo;
