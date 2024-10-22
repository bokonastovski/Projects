import Link from "next/link";
import React from "react";
interface Result3Props {
  correctAnswers: number;
}
const Result3: React.FC<Result3Props> = ({ correctAnswers }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/certificate1.png";
    link.download = "cert.png";
    link.click();
  };
  return (
    <section className="result-three">
      <img src="/images/result3.png" alt="" />
      <h1>Честитки! </h1>
      <p className="desc">
        Вашето знаење е апсолутно извонредно, 10/10 точни одговори како
        вистинсики финансиски експерт.
      </p>
      <p className="certificat">
        Подолу можете да го симнете вашиот сертификат и да го споделите вашиот
        успех со светот на социјалните мрежи. Откривајте нови финансиски
        хоризонти!
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

export default Result3;
