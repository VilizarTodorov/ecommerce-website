import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WISH_LIST } from "../../../constants/routes";
import { wishlistItemsCountSelector } from "../../../helpers/selectors";
import "./styles.scss";

const WishList = () => {
  const wishListCount = useSelector(wishlistItemsCountSelector);

  return (
    <Link className="option option-wish-list" to={WISH_LIST}>
      <i className="fas fa-heart fa-lg"></i>
      <div className="wishlist-count">{wishListCount}</div>
    </Link>
  );
};

export default WishList;
