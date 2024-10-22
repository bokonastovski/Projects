"use client";

import React, { useState } from "react";

const testimonialsData = [
  {
    text: "Финансиската слобода е достапна за оние кои учат за неа и работат за неа.",
    author: "Роберт Киосаки",
  },
  {
    text: "Финансиската слобода не е достапна за оние кои учат за неа и работат за неа.",
    author: "Роберт Киосаки",
  },
  {
    text: "Финансиската слобода може да е достапна за оние кои учат за неа и работат за неа.",
    author: "Роберт Киосаки",
  },
];

const HomepageTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="homepage-testimonials">
      <div className="testimonials">
        <h1>
          <span>VibeOn</span> Патокази за успех
        </h1>
        <div className="testimonial">
          <p className="text">{testimonialsData[activeIndex].text}</p>
          <p className="author">{testimonialsData[activeIndex].author}</p>
        </div>
        <div className="dots">
          {testimonialsData.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTestimonials;
