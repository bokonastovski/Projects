import React from "react";

const HomepageTop = () => {
  return (
    <section className="homepage-top">
      <div className="left">
        <div className="content">
          <h1>Развивај паметни финансиски вештини.</h1>
          <p>
            Прва и единствена платформа за финансиска едукација на млади на
            Sparkasse Bank.
          </p>
          <button className="btn">Започни сега &#8594;</button>
        </div>
        <img src="/images/scratch-1.png" alt="homepage-top" />
      </div>
      <div className="right">
        <img className="scratch" src="/images/scratch-2.png" alt="" />
        <img className="guys-on-money" src="/images/guys-on-money.png" alt="" />
      </div>
    </section>
  );
};

export default HomepageTop;
