import Link from "next/link";
import React from "react";

const HomepageModuls = () => {
  return (
    <section className="homepage-moduls">
      <h3>Разгледај ги нашите курсеви</h3>
      <div className="boxes">
        <div className="green-box box">
          <h1>Научи за себе.</h1>
          <p>
            Овој модул ви помага брзо и лесно да ги совладате основните вештини
            за лични финансии и управување со пари.
          </p>
          <Link href="/courses">
            <button className="btn">Прочитај повеќе &#8594;</button>
          </Link>
        </div>
        <div className="purple-box box">
          <h1>Научи за себе.</h1>
          <p>
            Овој модул ви нуди практични знаења за градење и проширување на
            вашиот бизнис преку брзи лекции.
          </p>
          <Link href="/courses">
            <button className="btn">Види курс &#8594;</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageModuls;
