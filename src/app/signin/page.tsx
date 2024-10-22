"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateInputs = () => {
    if (!email || !password) {
      setError("Внесете валидна меил адреса и лозинка.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Меил адресата не е валидна.");
      return false;
    }

    if (password.length < 8) {
      setError("Пасвордот треба да биде поголем од 8 карактери");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) return;

    setError("");

    const userData = { email, password };

    try {
      const res = await fetch(
        "https://090e-31-11-83-108.ngrok-free.app/login",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "ngrok-skip-browser-warning": true,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.success || data.authenticated) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/dashboard/dashboard-existing");
      } else {
        setError("Грешка при најава. Ве молиме обидете се повторно.");
        localStorage.setItem("isLoggedIn", "false");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Се случи грешка. Обидете се повторно подоцна.");
    }

    console.log(userData);
  };

  return (
    <section className="sign-in">
      <div className="sign-in-content">
        <img className="logo" src="/icons/logo.svg" alt="Logo" />
        <h1>Учи денес, добивај утре!</h1>
        <p className="vibe">
          Продолжи да <span>вајбаш!</span>
        </p>

        <input
          type="email"
          placeholder="Меил Адреса"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Лозинка"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button onClick={handleSubmit}>Најaви се</button>

        <p className="or">или</p>
        <div className="icons">
          <img src="/icons/google.svg" alt="Google Icon" />
          <img src="/icons/facebook2.svg" alt="Facebook Icon" />
        </div>
        <p className="new-user">
          Доколку си нов корисник,{" "}
          <Link href="register">
            <span>регистрирај се</span>
          </Link>
        </p>
      </div>

      <img
        className="scratch-1"
        src="/images/scratch-7.png"
        alt="Scratch Decoration"
      />
      <img
        className="scratch-2"
        src="/images/scratch-7.png"
        alt="Scratch Decoration"
      />
      <Link href="/">
        <img className="escape" src="/icons/escape.svg" alt="Escape" />
      </Link>
    </section>
  );
};

export default SignIn;
