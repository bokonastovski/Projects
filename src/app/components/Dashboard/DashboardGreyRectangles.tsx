import Image from "next/image";
import React from "react";

const DashboardGreyRectangles: React.FC = () => {
  return (
    <div className="dashboard-grey-rectangles">
      <div className="dashboard-grey-rectangle">
        <Image
          src="/icons/dashboardInfo.svg"
          alt="dashboard bagde 1"
          width={24}
          height={24}
          priority
          className="dashboard-info"
        />
        <Image
          src="/icons/dashboardBadge1.svg"
          alt="dashboard bagde 1"
          width={136}
          height={128}
          priority
          className="dashboard-badge"
        />
      </div>
      <div className="dashboard-grey-rectangle dashboard-grey-rectangle-2">
        <h4>Kурсеви во тек.</h4>
        <div className="dashboard-numbers">
          <p className="number-1">I</p>
          <p className="number-2">0</p>
        </div>
      </div>
      <div className="dashboard-grey-rectangle dashboard-grey-rectangle-2">
        <h4 className="dashboard-color-blue">Завршени курсеви.</h4>
        <div className="dashboard-numbers">
          <p className="number-1 dashboard-color-blue">I</p>
          <p className="number-2 dashboard-color-blue">0</p>
        </div>
      </div>
      <div className="dashboard-grey-rectangle dashboard-grey-rectangle-2">
        <h4 className="dashboard-color-pink">Поминато време на учење.</h4>
        <div className="dashboard-numbers">
          <p className="number-1 dashboard-color-pink">I</p>
          <p className="number-2 dashboard-color-pink">0</p>
        </div>
      </div>
      <div className="dashboard-grey-rectangle dashboard-grey-rectangle-2">
        <h4 className="dashboard-color-green">Освоени беџови.</h4>
        <div className="dashboard-numbers">
          <p className="number-1 dashboard-color-green">I</p>
          <p className="number-2 dashboard-color-green">0</p>
        </div>
      </div>
      <div className="dashboard-grey-rectangle dashboard-grey-rectangle-2">
        <h4 className="dashboard-color-teal">
          Потребни курсеви за следен беџ.
        </h4>
        <div className="dashboard-numbers">
          <p className="number-1 dashboard-color-teal">I</p>
          <p className="number-2 dashboard-color-teal">0</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardGreyRectangles;
