import React from "react";
import { useSelector } from "react-redux";
import GeneralButton from "../GeneralButton";
import CartItem from "./CartItem";
import "./styles.scss";

const cartSelector = (state) => state.cart.cart;

const Cart = (props) => {
  const cart = useSelector(cartSelector);

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
            <p>8 items</p>
            <p>$540</p>
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
            <p>540</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
