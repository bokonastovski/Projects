import React, { useState } from "react";
import Image from "next/image";

const OrangeSlider = () => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <div className="orange-slider">
      <div className="slider-container-2">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="custom-slider-2"
        />
      </div>
      <div className="slider-icon-container">
        <div className="slider-icon">
          <Image
            src="/icons/bookOrange.svg"
            alt="book"
            width={24}
            height={24}
            priority
          />
          <p>Вкупно лекции : 6</p>
        </div>
        <div className="slider-icon">
          <Image
            src="/icons/bookOrange.svg"
            alt="book"
            width={24}
            height={24}
            priority
          />
          <p>Вкупно лекции : 6</p>
        </div>
        <div className="slider-icon">
          <Image
            src="/icons/bookOrange.svg"
            alt="book"
            width={24}
            height={24}
            priority
          />
          <p>Вкупно лекции : 6</p>
        </div>
      </div>
      <button className="green-dashboard-button">Продолжи курс</button>
    </div>
  );
};

export default OrangeSlider;
