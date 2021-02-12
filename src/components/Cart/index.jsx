import React from "react";
import { useSelector } from "react-redux";
import { cartSelector, totalItemsAndPriceSelector } from "../../helpers/selectors";
// import GeneralButton from "../GeneralButton";
import CartItem from "./CartItem";
import GeneralContainer from "../GeneralContainer";
import GeneralHeading from "../GeneralHeading";
import "./styles.scss";
// import { useHistory } from "react-router-dom";
import LinkComponent from "../LinkComponent";
import { CHECKOUT } from "../../constants/routes";

const Cart = (props) => {
  const cart = useSelector(cartSelector);

  const totalCostAndItems = useSelector(totalItemsAndPriceSelector);

  return (
    <GeneralContainer>
      <GeneralHeading>your bag</GeneralHeading>
      <h2>
        TOTAL: ({totalCostAndItems.totalItems}${totalCostAndItems.totalPrice})
      </h2>
      <div className="cart">
        <div className="cars-items">
          {cart.map((x) => {
            return <CartItem key={x.id} x={x}></CartItem>;
          })}
        </div>
        <div className="check-out">
          {/* <GeneralButton onClick={}>checkout</GeneralButton> */}
          <LinkComponent to={CHECKOUT} linkContent="checkout"></LinkComponent>
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
    </GeneralContainer>
  );
};

export default Cart;
