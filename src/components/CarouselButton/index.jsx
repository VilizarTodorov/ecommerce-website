import React from "react";
import "./styles.scss";

const CarouselButton = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`carousel-button ${className && className}`}>
      <span className="arrow">{children}</span>
    </button>
  );
};

export default CarouselButton;
