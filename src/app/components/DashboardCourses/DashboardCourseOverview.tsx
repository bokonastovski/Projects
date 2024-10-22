import Image from "next/image";
import React from "react";

const DashboardCourseOverview: React.FC = () => {
  return (
    <div className="dashboard-content-rectangle">
      <div className="dashboard-tomi">
        <div className="dashboard-tomi-text dashboard-courses-main-title">
          <h1>Преглед на сите курсеви</h1>
        </div>

        <div className="dashboard-tomi-picture">
          <div className="dashboard-tomi-picture-blue-container">
            <p className="blue-container-text">
              Овде можеш да ги прегледаш сите достапни курсеви од модулите
              „Научи за себе“ и „Научи за својот бизнис“.
            </p>
          </div>
          <Image
            src="/images/dashboard-courses-girl.svg"
            alt="Girl Character"
            width={217}
            height={262}
            priority
          />
        </div>
        <Image
          src="/images/scratch-6.png"
          alt="scratch"
          width={259.273}
          height={409.095}
          priority
          className="scratch-left"
        />
        <Image
          src="/images/scratch-7.png"
          alt="scratch"
          width={411.179}
          height={505.188}
          priority
          className="scratch-right"
        />
      </div>
      <h2 className="dashboard-courses-big-text">
        Секој курс вклучува лекции во текстуална форма или аудио верзија. По
        завршувањето на секој курс, ќе добиеш сертификат за твоите постигнувања.
        По изучувањето на курсот решаваш завршен тест со 10 прашања (кога си
        подготвен/а) за да го комплетираш курсот и се стекнеш со сертификат.
      </h2>
    </div>
  );
};

export default DashboardCourseOverview;
