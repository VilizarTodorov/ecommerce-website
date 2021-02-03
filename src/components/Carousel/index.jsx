import React, { Fragment, useState } from "react";
import CarouselButton from "../CarouselButton";
import "./styles.scss";

const Carousel = ({ children }) => {
  const [items, setItems] = useState(children);

  const next = () => {
    let itemsList = [...items];
    itemsList.push(itemsList.shift());
    setItems(itemsList);
  };

  const prev = () => {
    let itemsList = [...items];
    itemsList.unshift(itemsList.pop());
    setItems(itemsList);
  };

  return (
    <div className="carousel">
      <div className="slider">{items}</div>
      {items.length > 4 && (
        <Fragment>
          <CarouselButton onClick={prev} className="left">
            <i className="fas fa-angle-left"></i>
          </CarouselButton>

          <CarouselButton onClick={next} className="right">
            <i className="fas fa-angle-right"></i>
          </CarouselButton>
        </Fragment>
      )}
    </div>
  );
};

export default Carousel;
