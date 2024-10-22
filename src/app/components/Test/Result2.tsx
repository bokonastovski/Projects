import Link from "next/link";
import React from "react";
interface Result2Props {
  correctAnswers: number;
}
const Result2: React.FC<Result2Props> = ({ correctAnswers }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/certificate2.png";
    link.download = "cert.png";
    link.click();
  };
  return (
    <section className="result-two">
      <img src="/images/result2.png" alt="" />
      <h1>Одлично направено! </h1>
      <p className="desc">
        Со {correctAnswers} од 10, успешно го поминавте тестот! Вие сте на
        правиот пат, а вашето знаење веќе е впечатливо. Секој напредок е
        значаен, и сега сте поблиску до вашата цел.
      </p>
      <p className="certificat">
        Вашиот сертификат е подготвен за преземање! Споделете го вашиот успех на
        социјалните мрежи и продолжете да учите!
      </p>
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
          <p className="numbers purple-p">1 / 4</p>
          <p>курсеви до следен беџ</p>
        </div>
      </div>
      <Link href="/dashboard">
        <button className="empty-btn">Назад кон профил</button>
      </Link>
      <button className="fillBtn" onClick={handleDownload}>
        Превземи PDF
      </button>
    </section>
  );
};

export default Result2;
