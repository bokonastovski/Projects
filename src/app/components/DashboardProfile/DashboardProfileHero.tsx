import Image from "next/image";
import React from "react";

const DashboardProfileHero: React.FC = () => {
  return (
    <div className="dashboard-content-rectangle">
      <div className="dashboard-tomi">
        <div className="dashboard-tomi-text dashboard-courses-main-title">
          <h1>Mој профил</h1>
        </div>

        <div className="dashboard-tomi-picture">
          <div className="dashboard-tomi-picture-blue-container dashb-prof-blue">
            <p className="blue-container-text">
              Овде можеш да ги следиш твоите тековни и омилени курсеви, како и
              сите достигнувања на твојот пат кон финансиски успех.
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
        Овде можеш да ги следиш тековните курсеви, да ги прегледаш омилените за
        понатамошно учење, како и да ги видиш сите добиени сертификати и беџови.
        Можеш лесно да ги преземеш или споделиш своите успеси на социјалните
        мрежи.
      </h2>
    </div>
  );
};

export default DashboardProfileHero;
