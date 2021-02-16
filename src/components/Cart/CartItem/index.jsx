import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Option from "../../AddProduct/Option";
import Select from "../../AddProduct/Select";
import { removeFromCart, setProductQuantity } from "../../../Redux/CartSlice/cart-slice";
import { cartSelector } from "../../../helpers/selectors";
import "./styles.scss";
import GeneralHeading from "../../GeneralHeading";

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
    <div className="item">
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
          <p>
            {x.size}(US {x.mainCategory})
          </p>
          <p>{x.price}</p>
          <Select value={x.quantity} onChange={(event) => setQuantityOfProduct(event)}>
            <Option value={x.quantity}>{x.quantity}</Option>
            <Option value={7}>7</Option>
            <Option value={2}>2</Option>
          </Select>
        </div>
        <div onClick={() => removeProduct(x.id)} className="controls">
          <i className="fas fa-times fa-lg exit"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
