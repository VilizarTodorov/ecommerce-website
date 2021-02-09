import React from "react";
import Carousel from "../../Carousel";
import Slide from "../../CarouselSlide";
import "./styles.scss";

const Media = ({ imgSrc, otherColors, onMouseOutHandler, onMouseOverHandler }) => {
  return (
    <div className="pictures">
      <div className="aspect-ratio-box">
        <div className="media">
          <img src={imgSrc} alt="img" />
        </div>
      </div>
      <div className="specific-product-carousel">
        <Carousel>
          {otherColors.map((x, index) => (
            <Slide key={index} value={x.value} onMouseOut={onMouseOutHandler} onMouseOver={onMouseOverHandler}></Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Media;
