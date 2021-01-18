import React from "react";
import { useSelector } from "react-redux";
import { SIGN_IN } from "../../constants/routes";
import { Link } from "react-router-dom";
import SignOut from "../SignOut";
import "./styles.scss";

const userSelector = (state) => state.user.user;

const HeaderGreeting = () => {
  const user = useSelector(userSelector);

  return (
    <div className="greeting-sign">
      {user ? (
        <div>
          {`welcome ${user.firstName}`} <SignOut></SignOut>
        </div>
      ) : (
        <Link to={SIGN_IN}>Sign in</Link>
      )}
    </div>
  );
};

export default HeaderGreeting;
