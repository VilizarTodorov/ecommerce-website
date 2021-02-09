import React from "react";
import GeneralButton from "../../GeneralButton";
import "./styles.scss";

const Controls = ({ addProductToCart, toggleInWishList, isInWishlist }) => {
  return (
    <div className="specific-product-controls">
      <GeneralButton onClick={addProductToCart}>add to cart</GeneralButton>
      <span className="wish-list-icon" onClick={toggleInWishList}>
        {isInWishlist ? <i className="fas fa-heart fa-lg"></i> : <i className="far fa-heart fa-lg"></i>}
      </span>
    </div>
  );
};

export default Controls;
