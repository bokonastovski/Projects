import Link from "next/link";
import React from "react";

interface Result1Props {
  correctAnswers: number;
}

const Result1: React.FC<Result1Props> = ({ correctAnswers }) => {
  return (
    <section className="result-one">
      <img src="/images/result1.png" alt="" />
      <h1>Време за нова шанса!</h1>
      <p className="desc">
        Не се откажувај! Иако постигна помалку од 7 точни одговори, ова е шанса
        за учење и раст! Твојата посветност е импресивна! Прегледај ги
        материјалите, подготви се и пробај повторно!
      </p>
      <p className="certificat">Твојот сертификат е на чекор од тебе! </p>
      <div className="stats">
        <div className="stat">
          <p className="numbers blue-p">8мин</p>
          <p>време на решавање</p>
        </div>
        <div className="stat">
          <p className="numbers red-p">{correctAnswers} / 10</p>
          <p>точни одговори</p>
        </div>
        <div className="stat">
          <p className="numbers purple-p">0 / 4</p>
          <p>курсеви до следен беџ</p>
        </div>
      </div>
      <Link href="/dashboard">
        <button>Назад кон профил</button>
      </Link>
    </section>
  );
};

export default Result1;
