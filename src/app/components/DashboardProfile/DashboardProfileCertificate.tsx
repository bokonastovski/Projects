import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardProfileCertificate: React.FC = () => {
  return (
    <div className="dashboard-profile-certificate">
      <div className="dashboard-cards-title-container dashboard-profile-certificate-title">
        <h3 className="dashboard-courses-cards-title">Сертификати</h3>
        <div className="dashboard-cards-arrows">
          <Image
            src="/icons/leftArrowGreen.svg"
            alt="arrow"
            width={40}
            height={40}
            priority
          />
          <Image
            src="/icons/rightArrowGreen.svg"
            alt="arrow"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>

      <div className="dashboard-content-rectangle dashboard-certif-container">
        <div className="dashboard-certif">
          <Image
            src="/images/certificate-1.png"
            alt="certif 1"
            width={222.08}
            height={128.173}
            priority
          />
          <div className="certif-text">
            <div className="certif-title">
              <h3>Сертификат за завршен курс</h3>
              <div className="certif-icons">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/facebookGreen.svg"
                    alt="facebook"
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/linkedInGreen.svg"
                    alt="linkedIn"
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/instagramGreen.svg"
                    alt="instagram"
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
                <Link href="/path-to-download">
                  <Image
                    src="/icons/downloadBlue.svg"
                    alt="download"
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
              </div>
            </div>
            <h4>Управување со личен бизнис</h4>
            <p>
              Кликнете „Преземи сертификат“ за PDF. За споделување, кликнете на
              иконите на социјалните мрежи и следете ги упатствата.
            </p>
          </div>
        </div>
      </div>
      <div className="dashboard-content-rectangle dashboard-certif-container">
        <div className="dashboard-certif">
          <Image
            src="/images/certificate-2.png"
            alt="certif 1"
            width={222.08}
            height={128.173}
            priority
          />
          <div className="certif-text">
            <div className="certif-title">
              <h3>Сертификат за завршен курс</h3>
              <div className="certif-icons">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/facebookGreen.svg"
                    alt="facebook"
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/linkedInGreen.svg"
                    alt="linkedIn"
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/instagramGreen.svg"
                    alt="instagram"
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
                <Link href="/path-to-download">
                  <Image
                    src="/icons/downloadBlue.svg"
                    alt="download"
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
              </div>
            </div>
            <h4>Лична Финансиска Гимнастика</h4>
            <p>
              Кликнете „Преземи сертификат“ за PDF. За споделување, кликнете на
              иконите на социјалните мрежи и следете ги упатствата.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileCertificate;
