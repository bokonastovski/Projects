import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardProfileBadges: React.FC = () => {
  return (
    <div className="dashboard-profile-badges">
      <div className="dashboard-cards-title-container dashboard-profile-certificate-title">
        <h3 className="dashboard-courses-cards-title dash-badge-title">
          Беџови
        </h3>
        <div className="dashboard-cards-arrows dashb-b-info">
          <Image
            src="/icons/dashboardInfo.svg"
            alt="info"
            width={32}
            height={32}
            priority
          />
        </div>
      </div>
      <div className="dashboard-badges-container">
        <div className="dashboard-content-rectangle dashboard-certif-container dashboard-prof-badge">
          <div className="dashboard-certif">
            <Image
              src="/images/firstBadge.svg"
              alt="certif 1"
              width={136}
              height={129}
              priority
            />
            <div className="certif-text">
              <div className="certif-title">
                <h3 className="dashb-lh">ОСВОЕН</h3>
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
              <h4>Финансиски Пионер</h4>
              <p>
                Ова е твојот прв голем чекор кон финансиска независност.
                Продолжи да се движиш напред!
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-content-rectangle dashboard-certif-container dashboard-prof-badge">
          <div className="dashboard-certif">
            <Image
              src="/images/secondBadge.svg"
              alt="certif 1"
              width={136}
              height={129}
              priority
            />
            <div className="certif-text">
              <div className="certif-title">
                <h3 className="dashb-opacity">ВО ПРОГРЕС</h3>
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
              <h4>Капитален Архитект</h4>
              <p>
                Ова е твојот прв голем чекор кон финансиска независност.
                Продолжи да се движиш напред!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-badges-container dashb-b-c-2">
        <div className="dashboard-content-rectangle dashboard-certif-container dashboard-prof-badge">
          <div className="dashboard-certif">
            <Image
              src="/images/thirdBadge.svg"
              alt="badge"
              width={136}
              height={129}
              priority
            />
            <div className="certif-text">
              <div className="certif-title">
                <h3 className="dashb-opacity">ВО ПРОГРЕС</h3>
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
              <h4>Финансиски Пионер</h4>
              <p>
                Ова е твојот прв голем чекор кон финансиска независност.
                Продолжи да се движиш напред!
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-content-rectangle dashboard-certif-container dashboard-prof-badge">
          <div className="dashboard-certif">
            <Image
              src="/images/fourthBadge.svg"
              alt="badge"
              width={136}
              height={128}
              priority
            />
            <div className="certif-text">
              <div className="certif-title">
                <h3 className="dashb-opacity">ВО ПРОГРЕС</h3>
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
              <h4>Капитален Архитект</h4>
              <p>
                Ова е твојот прв голем чекор кон финансиска независност.
                Продолжи да се движиш напред!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileBadges;
