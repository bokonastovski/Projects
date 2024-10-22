import React from "react";
import Image from "next/image";
const ShtedomerOverview: React.FC = () => {
  return (
    <div className="dashboard-content-rectangle">
      <div className="dashboard-tomi">
        <div className="dashboard-tomi-text dashboard-courses-main-title">
          <h1>Штедомер</h1>
        </div>

        <div className="dashboard-tomi-picture">
          <div className="dashboard-tomi-picture-blue-container">
            <p className="blue-container-text">
              Размислете за намалување на трошоците за излегување за да ја
              зголемите вашата заштеда.
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
        Штедомерот е алатка за планирање на штедење која овозможува внесување на
        месечни приходи и трошоци, поставување цели за штедење и автоматска
        пресметка на потребната месечна заштеда. Визуелните графикони и
        корисните совети помагаат во управувањето со финансиските цели и
        поттикнуваат здрави навики на штедење.
      </h2>
    </div>
  );
};

export default ShtedomerOverview;
