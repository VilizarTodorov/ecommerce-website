import React from "react";
import { useSelector } from "react-redux";
import GeneralButton from "../GeneralButton";
import "./styles.scss";

const cartSelector = (state) => state.cart.cart;

const Cart = (props) => {
  const cart = useSelector(cartSelector);

  return (
    <div className="cart">
      <div className="cars-items">
        {cart.map((x) => {
          return (
            <div key={x.id} className="item">
              <div className="item-img">
                <div className="aspect-ratio-box">
                  <div className="media">
                    <img src={x.mainImg} alt="img" />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="item-info">
                  <h2>{x.name}</h2>
                  <p>some description</p>
                  <p>SIZE:7.5(US Women)</p>
                  <p>{x.price}</p>
                  <div>{x.quantity}</div>
                </div>
                <div className="controls">X</div>
              </div>
            </div>
          );
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
