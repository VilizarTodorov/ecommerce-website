import React from "react";
import "./styles.scss";

const ProductEntry = (props) => {
  return (
    <div className="product-entry">
      <div className="product-entry-main-img">
        <img src={props.mainImg} alt="img" />
      </div>
      {props.otherColors && <div className="product-entry-other-colors">other colors</div>}
      <div className="product-entry-info">
        <p className="product-info product-type">{props.productType}</p>
        <p className="product-info product-name">{props.name}</p>
        <p className="product-info product-price">${props.price}</p>
      </div>
    </div>
  );
};

export default ProductEntry;
