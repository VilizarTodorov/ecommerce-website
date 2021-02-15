import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PROFILE } from "../../../constants/routes";
import { COLLECTIONS, firestore } from "../../../Firebase/firebase";
import { uidSelector } from "../../../helpers/selectors";
import { setOrders } from "../../../Redux/OrdersSlice/order-slice";
import "./styles.scss";

const Profile = () => {
  const uid = useSelector(uidSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (uid) {
      const listener = firestore
        .collection(COLLECTIONS.ORDERS)
        .doc(uid)
        .onSnapshot((doc) => dispatch(setOrders(doc.data().orders)));

      return () => {
        listener();
      };
    }
  }, [uid, dispatch]);

  return (
    <Link to={PROFILE} className="option option-profile">
      <i className="far fa-user-circle fa-lg"></i>
    </Link>
  );
};

export default Profile;
