import React, { Fragment } from "react";
import menImg from "../../assets/men.jpg";
import womenImg from "../../assets/women.jpg";
import kidsImg from "../../assets/kids.jpg";
import { MEN, WOMEN, KIDS, SHOES, CLOTHING, ACCESSORIES } from "../../constants/routes";
import * as categ from "../../constants/categories";
import "./styles.scss";
import { Link, useParams } from "react-router-dom";

const images = {
  men: menImg,
  women: womenImg,
  kids: kidsImg,
};

const mainRoute = {
  men: MEN,
  women: WOMEN,
  kids: KIDS,
};

const categories = {
  men: categ.MEN,
  women: categ.WOMEN,
  kids: categ.KIDS,
};

const ComponentMainCategory = () => {
  const params = useParams();
  const img = images[params.category];
  const category = categories[params.category];
  const mainRoutePart = mainRoute[params.category];

  return (
    <Fragment>
      <div className="main-category">
        <section className="category-img" style={{ backgroundImage: `url(${img})` }}></section>
        <h3 className="main-category-title">{category}</h3>
        <div className="container">
          <section className="sub-categories">
            <Link to={`/`}>
              <p className="sub-categories-title">all items</p>
            </Link>
            <Link to={`${mainRoutePart}${SHOES}`}>
              <p className="sub-categories-title">shoes</p>
            </Link>
            <Link to={`${mainRoutePart}${CLOTHING}`}>
              <p className="sub-categories-title">clothing</p>
            </Link>
            <Link to={`${mainRoutePart}${ACCESSORIES}`}>
              <p className="sub-categories-title">accessories</p>
            </Link>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default ComponentMainCategory;
