"use client";
import { Slider } from "@mui/material";
import React, { useState } from "react";

const Calculations = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);

  const [fixedExpenses, setFixedExpenses] = useState(0);
  const [variableExpenses, setVariableExpenses] = useState(0);

  const [savingGoal, setSavingGoal] = useState(0);
  const [savingPeriod, setSavingPeriod] = useState(0);

  const [monthlySavingsRequired, setMonthlySavingsRequired] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);

  const totalIncome = monthlyIncome + otherIncome;
  const totalExpenses = fixedExpenses + variableExpenses;

  const target = 10000;
  const saved = 3500;
  const percentage = (saved / target) * 100;

  console.log(savingPeriod);
  const handleCalculate = () => {
    if (savingPeriod > 0) {
      console.log("i am here");
      const savingsRequired = savingGoal / savingPeriod;
      setMonthlySavingsRequired(savingsRequired);

      const remaining = totalIncome - totalExpenses - savingsRequired;
      setRemainingBudget(remaining);
    }
  };

  return (
    <>
      <section className="moment-finish">
        <h1>
          Моментална цел: <span>Заштеда за скијање</span>
        </h1>

        <h2>35% од 10.000 денари заштедено. Преостануваат уште 19 денови.</h2>

        <Slider
          value={percentage}
          max={100}
          valueLabelDisplay="auto"
          aria-labelledby="savings-slider"
        />

        <p>
          Секој ден е чекор поблиску до исполнување на твоите финансиски цели.
          Продолжи да штедиш!
        </p>
      </section>
      <section className="calculations">
        <div className="top">
          {/* Prihodi section */}
          <div className="prihodi calc-box">
            <h3 className="lightBlue">Приходи</h3>
            <h4>Месечен приход</h4>
            <p>
              Внеси го својот вкупен месечен приход (на пр. плата, надоместок).
            </p>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            />
            <h4>Други извори на приход</h4>
            <p>Внеси дополнителни извори на доход (на пр. работи, подароци).</p>
            <input
              type="number"
              value={otherIncome}
              onChange={(e) => setOtherIncome(Number(e.target.value))}
            />
            <h4>Вкупни месечни приходи</h4>
            <p>
              Пресметка која автоматски собира и месечни и други извори на
              приходи.
            </p>
            <input
              className="greenBorderInput"
              type="number"
              value={totalIncome}
              disabled
            />
          </div>

          {/* Trosoci section */}
          <div className="trosoci calc-box">
            <h3 className="stone">Трошоци</h3>
            <h4>Постојани трошоци</h4>
            <p>
              Внеси постојани месечни трошоци, како што се кирија, осигурување и
              др.
            </p>
            <input
              type="number"
              value={fixedExpenses}
              onChange={(e) => setFixedExpenses(Number(e.target.value))}
            />
            <h4>Променливи трошоци</h4>
            <p>Внеси променливи трошоци кои можеш да ги прилагодат месечно.</p>
            <input
              type="number"
              value={variableExpenses}
              onChange={(e) => setVariableExpenses(Number(e.target.value))}
            />
            <h4>Вкупни месечни трошоци:</h4>
            <p>
              Пресметка која автоматски собира и постојани и променливи трошоци.
            </p>
            <input
              className="greenBorderInput"
              type="number"
              value={totalExpenses}
              disabled
            />
          </div>

          {/* Zasteda section */}
          <div className="zasteda calc-box">
            <h3 className="purplee">Цели за заштеда</h3>
            <h4>Внесување на цели за заштеда:</h4>
            <p>
              Постави специфична цел за заштеда (на пр. фонд за итни случаи).
            </p>
            <input type="text" />
            <h4>Целна сума</h4>
            <p>Внеси го вкупниот износ што сакаш да го заштедиш.</p>
            <input
              type="number"
              value={savingGoal}
              onChange={(e) => setSavingGoal(Number(e.target.value))}
            />
            <h4>Временски период:</h4>
            <p>
              Избери го временскиот период во месеци за постигнување на целта.
            </p>
            <input
              type="number"
              value={savingPeriod}
              onChange={(e) => setSavingPeriod(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="bottom">
          <div className="left">
            <h2>Пресметка</h2>
          </div>
          <div className="center">
            <h4>Месечни заштеди потребни</h4>
            <p>Колку треба да заштедиш секој месец за да ја постигнеш целта.</p>
            <input type="number" value={monthlySavingsRequired} disabled />
          </div>
          <div className="right">
            <h4>Останат буџет по трошоци</h4>
            <p>
              Пресметка која од вкупниот доход ги одзема вкупните месечни
              трошоци, покажувајќи го износот достапен за заштеда и дискрециони
              трошоци.
            </p>
            <input type="number" value={remainingBudget} disabled />
          </div>
          <div className="submit-btn" onClick={handleCalculate}>
            Пресметај штедење
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Calculations;
