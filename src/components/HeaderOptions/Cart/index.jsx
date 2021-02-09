import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CART } from "../../../constants/routes";
import { cartTotalItemsCountSelector } from "../../../helpers/selectors";
import "./styles.scss";

const Cart = () => {
  const cartCount = useSelector(cartTotalItemsCountSelector);

  return (
    <Link className="option" to={CART}>
      <i className="fas fa-shopping-cart fa-lg"></i>
      <div className="cart-count">{cartCount}</div>
    </Link>
  );
};

export default Cart;
