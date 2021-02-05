import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CART } from "../../../constants/routes";
import "./styles.scss";

const cartSelector = (state) => state.cart.cart;

const cartCountSelector = createSelector([cartSelector], (cart) => {
  let count = 0;
  cart.forEach((x) => {
    count += +x.quantity;
  });
  return count;
});

const Cart = () => {
  const cartCount = useSelector(cartCountSelector);

  return (
    <Link className="option" to={CART}>
      <i className="fas fa-shopping-cart fa-lg"></i>
      <div className="cart-count">{cartCount}</div>
    </Link>
  );
};

export default Cart;
