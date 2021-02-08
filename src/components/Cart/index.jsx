import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import GeneralButton from "../GeneralButton";
import CartItem from "./CartItem";
import "./styles.scss";

const selector = (state) => state.cart.cart;
const theSelector = createSelector([selector], (cart) => {
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((x) => {
    totalItems += x.quantity;
    totalPrice += x.quantity * x.price;
  });

  return {
    totalItems,
    totalPrice,
  };
});

const cartSelector = (state) => state.cart.cart;

const Cart = (props) => {
  const cart = useSelector(cartSelector);

  const totalCostAndItems = useSelector(theSelector);

  return (
    <div className="cart">
      <div className="cars-items">
        {cart.map((x) => {
          return <CartItem key={x.id} x={x}></CartItem>;
        })}
      </div>
      <div className="check-out">
        <GeneralButton>checkout</GeneralButton>
        <div className="order-summery">
          <h1>order summery</h1>
          <div>
            <p>{totalCostAndItems.totalItems} items</p>
            <p>${totalCostAndItems.totalPrice}</p>
          </div>
          <div>
            <p>delivery</p>
            <p>free</p>
          </div>
          <div>
            <p>sales tax</p>
            <p>-</p>
          </div>
          <div>
            <p>total</p>
            <p>${totalCostAndItems.totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
