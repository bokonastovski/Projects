import React from "react";
import Image from "next/image";

const DashboardCoursesFilters = () => {
  return (
    <div className="dashboard-filters-section">
      <div className="dashboard-filters">
        <div className="dashboard-filter">
          <Image
            src="/icons/clockBlue.svg"
            alt="clock"
            width={24}
            height={24}
            priority
          />
          <p>Сортирање</p>
          <Image
            src="/icons/dropdownBlue.svg"
            alt="clock"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className="dashboard-filter">
          <Image
            src="/icons/messageBlue.svg"
            alt="message"
            width={24}
            height={24}
            priority
          />
          <p>Категорија</p>
          <Image
            src="/icons/dropdownBlue.svg"
            alt="clock"
            width={18}
            height={18}
            priority
          />
        </div>
      </div>
      <Image
        src="/icons/blueHr.svg"
        alt="hr"
        width={18}
        height={18}
        priority
        className="dashboard-filters-hr"
      />
      <div className="dashboard-filters-2">
        <div className="dashboard-filter-2">
          <p>Најнови</p>
          <Image
            src="/icons/closeBlue.svg"
            alt="clock"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className="dashboard-filter-2">
          <p>Финансии</p>
          <Image
            src="/icons/closeBlue.svg"
            alt="clock"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className="dashboard-filter-2">
          <p>Инвестиции</p>
          <Image
            src="/icons/closeBlue.svg"
            alt="clock"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className="dashboard-filter-2">
          <p>5-10 лекции</p>
          <Image
            src="/icons/closeBlue.svg"
            alt="clock"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className="dashboard-filter-2 dashboard-filter-3">
          <p>Избриши филтер</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCoursesFilters;
