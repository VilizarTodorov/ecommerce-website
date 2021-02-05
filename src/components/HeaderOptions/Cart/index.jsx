import { createSelector } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CART } from "../../../constants/routes";
import { COLLECTIONS, firestore } from "../../../Firebase/firebase";
import { setCart } from "../../../Redux/CartSlice/cart-slice";
import "./styles.scss";

const uidSelector = (state) => state.user.uid;
const cartSelector = (state) => state.cart.cart;

const cartCountSelector = createSelector([cartSelector], (cart) => {
  let count = 0;
  cart.forEach((x) => {
    count += x.quantity;
  });
  return count;
});

const Cart = () => {
  const uid = useSelector(uidSelector);
  const cartCount = useSelector(cartCountSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = firestore
      .collection(COLLECTIONS.CARTS)
      .doc(uid)
      .onSnapshot((doc) => {
        dispatch(setCart(doc.data().cart));
      });

    return () => {
      listener();
    };
  }, [dispatch, uid]);

  return (
    <Link className="option" to={CART}>
      <i className="fas fa-shopping-cart fa-lg"></i>
      <div className="cart-count">{cartCount}</div>
    </Link>
  );
};

export default Cart;
