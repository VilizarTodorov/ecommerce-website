import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PROFILE, WISH_LIST } from "../../../constants/routes";
import "./styles.scss";

const wishListCountSelector = (state) => state.wishlist.wishlist.length;

const WishList = () => {
  const wishListCount = useSelector(wishListCountSelector);

  return (
    <Link className="option option-wish-list" to={`${PROFILE}${WISH_LIST}`}>
      <i className="fas fa-heart fa-lg"></i>
      <div className="wishlist-count">{wishListCount}</div>
    </Link>
  );
};

export default WishList;
