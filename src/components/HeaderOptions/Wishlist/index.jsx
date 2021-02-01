import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PROFILE, WISH_LIST } from "../../../constants/routes";
import { COLLECTIONS, firestore } from "../../../Firebase/firebase";
import { setWishList } from "../../../Redux/userSlice/user-slice";
import "./styles.scss";

const uidSelector = (state) => state.user.uid;
const wishListCountSelector = (state) => state.user.wishList.length;

const WishList = () => {
  const uid = useSelector(uidSelector);
  const wishListCount = useSelector(wishListCountSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = firestore
      .collection(COLLECTIONS.WISHLISTS)
      .doc(uid)
      .onSnapshot((doc) => {
        dispatch(setWishList(doc.data().wishlist));
      });

    return () => {
      listener();
    };
  }, [dispatch, uid]);

  return (
    <Link className="option option-wish-list" to={`${PROFILE}${WISH_LIST}`}>
      <i className="fas fa-heart fa-lg"></i>
      <div className="wishlist-count">{wishListCount}</div>
    </Link>
  );
};

export default WishList;
