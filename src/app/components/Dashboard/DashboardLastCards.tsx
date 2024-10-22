import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLastCards: React.FC = () => {
  return (
    <div className="dashboard-last-cards">
      <div className="dashboard-last-card">
        <div className="dashboard-last-card-content">
          <div className="dashboard-last-card-title">
            <h3>Планирај ја твојата патека на учење</h3>
            <p>
              Определи го времето за учење и почни да ја градиш твојата
              финансиска иднина со твоe темпо.
            </p>
          </div>
          <div className="dashboard-orange-btn dashboard-last-btn dashboard-bg-teal">
            <Link href="/dashboard/dashboard-courses">
              <button>Избери време</button>
            </Link>
            <Image
              src="/icons/rightArrow.png"
              alt="book"
              width={23}
              height={14}
              priority
            />
          </div>
        </div>
        <Image
          src="/images/scratch-9.png"
          alt="days"
          width={220.535}
          height={268.812}
          className="scratch-9"
          priority
        />
      </div>
      <div className="dashboard-last-card">
        <div className="dashboard-last-card-content">
          <div className="dashboard-last-card-title">
            <h3>Твојата неделна активност</h3>
            <p>Приказ на твојата неделна активност</p>
          </div>
          <div className="dashboard-last-card-circles">
            <Image
              src="/images/dashboard-days.png"
              alt="days"
              width={279}
              height={20}
              priority
            />
            <div className="dashboard-last-card-days">
              <p>П</p>
              <p>В</p>
              <p>С</p>
              <p>Ч</p>
              <p>П</p>
              <p>С</p>
              <p>Н</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-last-card">
        <div className="dashboard-last-card-content">
          <div className="dashboard-last-card-title">
            <h3>Штедомер</h3>
            <p>
              Штедомерот е алатка што пресметува заштеда според приходи и
              трошоци и нуди совети за постигнување финансиски цели.
            </p>
          </div>
          <div className="dashboard-orange-btn dashboard-last-btn dashboard-bg-purple">
            <Link href="/shtedometer">
              <button>Избери време</button>
            </Link>
            <Image
              src="/icons/rightArrow.png"
              alt="book"
              width={23}
              height={14}
              priority
            />
          </div>
        </div>
        <Image
          src="/images/scratch-9.png"
          alt="days"
          width={220.535}
          height={268.812}
          className="scratch-9"
          priority
        />
      </div>
    </div>
  );
};

export default DashboardLastCards;
