import React from "react";

const HomepageOrange = () => {
  return (
    <section className="homepage-orange">
      <div className="icons">
        <div className="icon">
          <img src="/icons/handshake.svg" alt="" />
          <p>Информирај се.</p>
        </div>
        <div className="icon">
          <img src="/icons/star.svg" alt="" />
          <p>Започни да учиш.</p>
        </div>
        <div className="icon">
          <img src="/icons/ribbon.svg" alt="" />
          <p>Добивај бесплатни сертификати.</p>
        </div>
        <div className="icon">
          <img src="/icons/petokraka.svg" alt="" />
          <p>Добивај беџови.</p>
        </div>
      </div>
      <img className="scratch" src="/images/scratch-5.png" alt="" />
    </section>
  );
};

export default HomepageOrange;
