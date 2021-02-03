import React from "react";
import "./styles.scss";

const Slide = ({ value, onMouseOver, onMouseOut }) => {
  return (
    <div onMouseOut={() => onMouseOut()} onMouseOver={() => onMouseOver(value)} className="slide">
      <img src={value} alt="imt" />
    </div>
  );
};

export default Slide;
