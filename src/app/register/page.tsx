"use client";
import React, { useState } from "react";
import RegisterStepOne from "../components/Register/RegisterStepOne";
import RegisterStepTwo from "../components/Register/RegisterStepTwo";
import RegisterStepThree from "../components/Register/RegisterStepThree";
import RegisterStepFour from "../components/Register/RegisterStepFour";
import RegisterStepFive from "../components/Register/RegisterStepFive";
import RegisterStepSix from "../components/Register/RegisterStepSix";
import Link from "next/link";

const Register = () => {
  const [name, setFirstName] = useState("");
  const [surname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState("");
  const [cityId, setCityId] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  // const router = useRouter();

  const handleSubmitStepOne = () => {
    if (!name || !surname || !email) {
      setError("Внесете ги сите полиња.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Меил адресата не е валидна.");
      return;
    }

    setError("");
    setStep(2);
  };

  const handleSubmitStepTwo = () => {
    if (!gender || !cityId || !dob || !phone || !password || !confirmPassword) {
      setError("Внесете ги сите полиња.");
      return;
    }

    if (password.length <= 8) {
      setError("Лозинките треба да е поголема од 8 цифри.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Лозинките не се совпаѓаат.");
      return;
    }
    const yearOfBirth = dob.slice(0, 4);
    if (parseInt(yearOfBirth) > 2006) {
      setError("Немаш наполнето 18 години");
      return;
    }

    if (phone.slice(0, 2) !== "07") {
      setError("Телефонскиот број мора да започнува со '07'.");
      return;
    }

    const newUserData = {
      name,
      surname,
      email,
      gender,
      city_id: cityId,
      birth_date: dob,
      phone,
      password,
      password_confirmation: confirmPassword,
    };
    localStorage.setItem("userData", JSON.stringify(newUserData));
    setError("");
    setStep(3);
  };

  const handleContinueToStepFour = () => {
    setStep(4);
  };

  const handleContinueToStepFive = () => {
    setStep(5);
  };

  const handleContinueToStepSix = () => {
    setStep(6);
  };

  return (
    <section className="register">
      {step === 1 ? (
        <RegisterStepOne
          firstName={name}
          surname={surname}
          email={email}
          error={error}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          handleSubmit={handleSubmitStepOne}
        />
      ) : step === 2 ? (
        <RegisterStepTwo
          gender={gender}
          cityId={cityId}
          dob={dob}
          phone={phone}
          password={password}
          confirmPassword={confirmPassword}
          setGender={setGender}
          setCityId={setCityId}
          setDob={setDob}
          setPhone={setPhone}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          handleSubmit={handleSubmitStepTwo}
          error={error}
        />
      ) : step === 3 ? (
        <RegisterStepThree onContinue={handleContinueToStepFour} />
      ) : step === 4 ? (
        <RegisterStepFour onContinue={handleContinueToStepFive} />
      ) : step === 5 ? (
        <RegisterStepFive onContinue={handleContinueToStepSix} />
      ) : (
        <RegisterStepSix />
      )}
      <Link href="/">
        <img className="escape-sign" src="/icons/escape.svg" alt="" />
      </Link>
    </section>
  );
};

export default Register;
