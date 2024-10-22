"use client";
import React, { useState } from "react";

const RegisterStepFour = ({ onContinue }: { onContinue: () => void }) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const topics = [
    "бизнис",
    "финансии",
    "буџетирање",
    "претприемништво",
    "инвестирање",
    "заштеда",
    "продажба",
    "онлајн безбедност",
    "дигитални трендови",
    "е-банкарство",
  ];

  const handleTopicClick = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      if (selectedTopics.length < 3) {
        setSelectedTopics([...selectedTopics, topic]);
      }
    }
    setError("");
  };

  const handleContinue = () => {
    if (selectedTopics.length === 3) {
      onContinue();
    } else {
      setError("Мораш да одбереш точно 3 теми.");
    }
  };

  return (
    <>
      <section className="register-step-four">
        <img src="/icons/logo.svg" alt="" />
        <p className="desc">
          Бизнис финансии, Лични финансии, буџетирање, штедење, недвижности,
          лизинг, онлајн безбедност, дигитални трендови, е-банкарство
        </p>
        <div className="content-four">
          <div className="steps">
            <div className="step active"></div>
            <div className="step active"></div>
            <div className="step active"></div>
            <div className="step"></div>
          </div>
          <h1>Одбери 3 теми на кои имаш најмногу интерес:</h1>
          <div className="buttons">
            {topics.map((topic) => (
              <button
                key={topic}
                className={selectedTopics.includes(topic) ? "active" : ""}
                onClick={() => handleTopicClick(topic)}
              >
                {topic} {selectedTopics.includes(topic) ? "-" : "+"}{" "}
              </button>
            ))}
          </div>

          {error && <div className="error">{error}</div>}

          <button className="next" onClick={handleContinue}>
            Продолжи
          </button>
        </div>
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

export default RegisterStepFour;
