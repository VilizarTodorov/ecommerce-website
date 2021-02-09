import React from "react";
import { useSelector } from "react-redux";
import { cartSelector, totalItemsAndPriceSelector } from "../../helpers/selectors";
import GeneralButton from "../GeneralButton";
import CartItem from "./CartItem";
import "./styles.scss";

const Cart = (props) => {
  const cart = useSelector(cartSelector);

  const totalCostAndItems = useSelector(totalItemsAndPriceSelector);

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
          <div className="container">
            <p>{totalCostAndItems.totalItems} items</p>
            <p>${totalCostAndItems.totalPrice}</p>
          </div>
          <div className="container">
            <p>delivery</p>
            <p>free</p>
          </div>
          <div className="container">
            <p>sales tax</p>
            <p>-</p>
          </div>
          <div className="container">
            <p>total</p>
            <p>${totalCostAndItems.totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
