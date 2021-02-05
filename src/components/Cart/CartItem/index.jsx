import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Option from "../../AddProduct/Option";
import Select from "../../AddProduct/Select";
import { removeFromCart, setProductQuantity } from "../../../Redux/CartSlice/cart-slice";
const cartSelector = (state) => state.cart.cart;

const CartItem = ({ x }) => {
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();

  const removeProduct = (productID) => {
    dispatch(removeFromCart(productID));
  };

  const setQuantityOfProduct = (event) => {
    dispatch(setProductQuantity(x.id, +event.target.value, cart));
  };

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
          <Select value={x.quantity} onChange={(event) => setQuantityOfProduct(event)}>
            <Option value={x.quantity}>{x.quantity}</Option>
            <Option value={7}>7</Option>
            <Option value={2}>2</Option>
          </Select>
        </div>
        <div onClick={() => removeProduct(x.id)} className="controls">
          X
        </div>
      </div>
    </div>
  );
};

export default CartItem;
