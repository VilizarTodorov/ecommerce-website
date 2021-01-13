import React, { Fragment } from "react";
import "./styles.scss";

const ComponentMainCategory = ({ category, img }) => {
  return (
    <Fragment>
      <div className="main-category">
        <section className="category-img" style={{ backgroundImage: `url(${img})` }}></section>
        <h3 className="main-category-title">{category}</h3>
        <div className="container">
          <section className="sub-categories">
            <p className="sub-categories-title">all items</p>
            <p className="sub-categories-title">shoes</p>
            <p className="sub-categories-title">clothing</p>
            <p className="sub-categories-title">accessories</p>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default ComponentMainCategory;
