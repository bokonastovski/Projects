import React from "react";
import "../css/components/_MainBtnOrange.scss";

type MainBtnOrangeProps = {
  text?: string;
  type?: string;
  className?: string;
};

const MainBtnOrange: React.FC<MainBtnOrangeProps> = ({ text = "" }) => {
  return (
    <button className="mainBtnOrange">
      <span className="btnTextWrapper">{text}</span>
    </button>
  );
};

export default MainBtnOrange;
