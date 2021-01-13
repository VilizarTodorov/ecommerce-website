import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { ACCESSORIES, CLOTHING, SHOES } from "../../constants/routes";
import menShoes from "../../assets/menShoes.jpg";
import womenShoes from "../../assets/womenShoes.jpg";
import kidsShoes from "../../assets/kidsShoes.jpg";
import "./styles.scss";

const ComponentMainCategory = () => {
  const { category } = useParams();
  return (
    <Fragment>
      <div className="main-category">
        <p className="main-category-title">{category}</p>
        <section style={{ backgroundImage: `url(${menShoes})` }} className="sub-category shoes">
          <Link to={`/${category}${SHOES}`}>
            <h3 className="sub-category-title">shoes</h3>
          </Link>
        </section>
        <section style={{ backgroundImage: `url(${womenShoes})` }} className="sub-category clothing">
          <Link to={`/${category}${CLOTHING}`}>
            <h3 className="sub-category-title">clothing</h3>
          </Link>
        </section>
        <section style={{ backgroundImage: `url(${kidsShoes})` }} className="sub-category accessories">
          <Link to={`/${category}${ACCESSORIES}`}>
            <h3 className="sub-category-title">accessories</h3>
          </Link>
        </section>
      </div>
    </Fragment>
  );
};

export default ComponentMainCategory;
