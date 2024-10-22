"use client";
import React, { useState } from "react";
import Quiz from "../components/Test/Quiz";

const Test: React.FC = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <section className="test">
      {!startQuiz ? (
        <div className="test-start">
          <img src="/icons/logo.svg" alt="" />
          <h1>Tи честитаме што стигна до овој важен момент!</h1>
          <p>
            Ова е последниот чекор пред да го потврдиш своето знаење. Одговори
            на 10-те прашања за да го завршиш курсот – со најмалку 7 точни
            одговори ќе добиеш сертификат, а ако точно одговориш на сите, те
            очекува сертификат со посебна ознака. Веруваме во тебе, дај сè од
            себе и покажи го твојот успех!
          </p>
          <button onClick={handleStartQuiz}>Кон тестот</button>
        </div>
      ) : (
        <Quiz />
      )}
    </section>
  );
};

export default Test;
