import React from "react";
import { useSelector } from "react-redux";
import { SIGN_IN } from "../../constants/routes";
import { Link } from "react-router-dom";
import "./styles.scss";

const userSelector = (state) => state.user.user;

const HeaderGreeting = () => {
  const user = useSelector(userSelector);

  return (
    <p className="greeting-sign">
      { user ? `welcome ${user.firstName}` : <Link to={SIGN_IN}>Sign in</Link>}
    </p>
  );
};

export default HeaderGreeting;
