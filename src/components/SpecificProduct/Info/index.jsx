import React from "react";
import "./styles.scss";

const Info = ({ mainCategory, productType, name, price, children }) => {
  return (
    <div className="info">
      <span className="category-product">
        {mainCategory}'s • {productType}
      </span>
      <h1 className="product-name">{name}</h1>
      <p className="product-price">Price: ${price}</p>
      {children}
    </div>
  );
};

export default Info;
